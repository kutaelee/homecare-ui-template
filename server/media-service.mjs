import { createHash, createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
import { mkdir, readFile, rename, writeFile, stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { Readable } from 'node:stream';
import path from 'node:path';
import { File } from 'node:buffer';

const slots = JSON.parse(await readFile(new URL('../src/data/mediaSlots.json', import.meta.url), 'utf8'));
const MAX_FILE = 25 * 1024 * 1024;
const COOKIE = 'homecare_media_admin';
const SESSION_SECONDS = 8 * 60 * 60;
const empty = () => ({ revision: 0, assets: [], placements: {} });
const digest = value => createHash('sha256').update(value).digest();
const equal = (a, b) => timingSafeEqual(digest(a), digest(b));
const json = (data, status = 200, headers = {}) => new Response(JSON.stringify(data), {
  status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...headers },
});
class MediaError extends Error { constructor(message, status = 400) { super(message); this.status = status; } }
const text = (value, max = 200) => typeof value === 'string' ? value.trim().slice(0, max) : '';

export function validateMediaUrl(value, { image = false } = {}) {
  let url;
  try { url = new URL(value); } catch { throw new MediaError('올바른 HTTPS 주소를 입력하세요.'); }
  if (url.protocol !== 'https:' || url.username || url.password || /^(localhost$|127\.|0\.|10\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.|169\.254\.|\[)/i.test(url.hostname)) {
    throw new MediaError('공개 HTTPS 주소만 사용할 수 있습니다.');
  }
  const host = url.hostname.toLowerCase().replace(/^www\./, '');
  if (!image && ['youtube.com', 'm.youtube.com', 'youtu.be', 'youtube-nocookie.com'].includes(host)) {
    const id = host === 'youtu.be' ? url.pathname.slice(1) : url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts)\/([\w-]+)/)?.[1];
    if (!/^[\w-]{11}$/.test(id || '')) throw new MediaError('올바른 YouTube 영상 주소를 입력하세요.');
    return { kind: 'youtube', url: `https://www.youtube-nocookie.com/embed/${id}` };
  }
  return { kind: image ? 'image' : 'video', url: url.href };
}

function fileType(bytes) {
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return ['image', 'image/jpeg', '.jpg'];
  if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return ['image', 'image/png', '.png'];
  if (/^GIF8[79]a/.test(bytes.subarray(0, 6).toString())) return ['image', 'image/gif', '.gif'];
  if (bytes.subarray(0, 4).toString() === 'RIFF' && bytes.subarray(8, 12).toString() === 'WEBP') return ['image', 'image/webp', '.webp'];
  if (bytes.subarray(4, 8).toString() === 'ftyp') {
    if (/avif|avis/.test(bytes.subarray(8, 32).toString())) return ['image', 'image/avif', '.avif'];
    if (/isom|iso2|mp4|avc1|M4V|MSNV/.test(bytes.subarray(8, 32).toString())) return ['video', 'video/mp4', '.mp4'];
  }
  if (bytes.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3])) && bytes.subarray(0, 4096).includes(Buffer.from('webm'))) return ['video', 'video/webm', '.webm'];
  throw new MediaError('JPG·PNG·GIF·WebP·AVIF 사진 또는 MP4·WebM 영상만 등록할 수 있습니다.');
}

async function body(request, limit) {
  if (Number(request.headers.get('content-length')) > limit) throw new MediaError('파일 또는 요청 크기가 제한을 초과했습니다.', 413);
  if (!request.body) return Buffer.alloc(0);
  const reader = request.body.getReader();
  const chunks = []; let size = 0;
  while (true) {
    const { done, value } = await reader.read(); if (done) break;
    size += value.byteLength;
    if (size > limit) { await reader.cancel(); throw new MediaError('파일 또는 요청 크기가 제한을 초과했습니다.', 413); }
    chunks.push(Buffer.from(value));
  }
  return Buffer.concat(chunks);
}

export function createMediaService({ directory = '', password = '', secret = '', publicOrigin = '', secureCookies = false, projectRoot = process.cwd() } = {}) {
  const root = directory && path.isAbsolute(directory) ? path.resolve(directory) : '';
  const project = path.resolve(projectRoot);
  const relative = root ? path.relative(project, root) : '';
  const outsideProject = Boolean(root && relative && (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)));
  const configured = outsideProject && password.length >= 12 && secret.length >= 32;
  if (publicOrigin && !/^https?:\/\//.test(publicOrigin)) throw new Error('MEDIA_PUBLIC_ORIGIN must be an HTTP(S) origin.');
  const expectedOrigin = publicOrigin ? new URL(publicOrigin).origin : '';
  const manifest = root ? path.join(root, 'media.json') : '';
  let pending = Promise.resolve();
  const attempts = new Map();
  const sign = value => createHmac('sha256', secret).update(value).digest('base64url');
  const credentialVersion = () => createHmac('sha256', secret).update(password).digest('base64url');
  const cookie = value => `${COOKIE}=${value}; HttpOnly; SameSite=Strict; Path=/api/media; Max-Age=${value ? SESSION_SECONDS : 0}${secureCookies ? '; Secure' : ''}`;
  const authenticated = request => {
    if (!configured) return false;
    const token = request.headers.get('cookie')?.split(';').map(s => s.trim()).find(s => s.startsWith(`${COOKIE}=`))?.slice(COOKIE.length + 1);
    if (!token || token.length > 512) return false;
    const [expires, version, signature, extra] = token.split('.');
    if (extra || !expires || !version || !signature || !/^\d+$/.test(expires)) return false;
    return Number(expires) > Date.now() && Number(expires) <= Date.now() + (SESSION_SECONDS + 60) * 1000 && equal(version, credentialVersion()) && equal(signature, sign(`${expires}.${version}`));
  };
  const load = async () => {
    if (!configured) return empty();
    try {
      const value = JSON.parse(await readFile(manifest, 'utf8'));
      if (!Number.isInteger(value.revision) || !Array.isArray(value.assets) || !value.placements || typeof value.placements !== 'object') throw new Error('Invalid media manifest');
      return value;
    } catch (error) { if (error.code === 'ENOENT') return empty(); throw error; }
  };
  const mutate = operation => {
    const job = pending.then(async () => {
      const current = await load();
      const result = await operation(current);
      current.revision += 1;
      await mkdir(root, { recursive: true, mode: 0o700 });
      const temporary = path.join(root, `.media-${randomUUID()}.tmp`);
      await writeFile(temporary, JSON.stringify(current, null, 2), { flag: 'wx', mode: 0o600 });
      await rename(temporary, manifest);
      return { ...result, revision: current.revision };
    });
    pending = job.catch(() => {});
    return job;
  };
  const csrf = request => {
    const origin = expectedOrigin || new URL(request.url).origin;
    if (request.headers.get('origin') !== origin || request.headers.get('sec-fetch-site') === 'cross-site') throw new MediaError('같은 사이트에서 다시 시도하세요.', 403);
  };
  const parse = async request => {
    try {
      const value = JSON.parse((await body(request, 16 * 1024)).toString());
      if (!value || typeof value !== 'object' || Array.isArray(value)) throw new MediaError('요청 내용을 확인하세요.');
      return value;
    }
    catch (error) { if (error instanceof MediaError) throw error; throw new MediaError('요청 내용을 확인하세요.'); }
  };
  const assertRevision = (request, current) => {
    if (request.headers.get('if-match') !== String(current.revision)) throw new MediaError('다른 변경이 저장되었습니다. 새로 불러온 뒤 다시 저장하세요.', 409);
  };

  return {
    async handle(request, { remoteAddress = 'unknown' } = {}) {
      try {
        const url = new URL(request.url);
        const endpoint = url.pathname.replace(/\/$/, '');
        const isAdmin = authenticated(request);
        if (request.method === 'GET' && endpoint === '/api/media/status') return json({ configured, authenticated: isAdmin });
        if (request.method === 'GET' && endpoint === '/api/media/public') {
          const state = await load();
          const ids = new Set(Object.values(state.placements));
          return json({ configured, revision: state.revision, placements: state.placements, assets: state.assets.filter(a => ids.has(a.id) && !a.archived) });
        }
        if (request.method === 'GET' || request.method === 'HEAD') {
          const match = endpoint.match(/^\/api\/media\/files\/([a-f0-9-]{36})$/);
          if (match) {
            const state = await load(); const asset = state.assets.find(a => a.id === match[1]);
            if (!asset?.file || (!isAdmin && (asset.archived || !Object.values(state.placements).includes(asset.id)))) return json({ error: '미디어를 찾을 수 없습니다.' }, 404);
            if (!/^[a-f0-9-]{36}\.(jpg|png|gif|webp|avif|mp4|webm)$/.test(asset.file)) throw new Error('Invalid media filename');
            const filename = path.join(root, 'files', asset.file);
            const info = await stat(filename);
            const headers = { 'Content-Type': asset.mime, 'X-Content-Type-Options': 'nosniff', 'Accept-Ranges': 'bytes', 'Cache-Control': 'private, no-store' };
            const range = request.headers.get('range');
            let start = 0, end = info.size - 1, status = 200;
            if (range) {
              const m = range.match(/^bytes=(\d*)-(\d*)$/);
              if (!m || (!m[1] && !m[2])) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${info.size}` } });
              start = m[1] ? Number(m[1]) : Math.max(0, info.size - Number(m[2]));
              end = m[1] && m[2] ? Math.min(Number(m[2]), info.size - 1) : info.size - 1;
              if (start > end || start >= info.size || !Number.isSafeInteger(start) || !Number.isSafeInteger(end)) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${info.size}` } });
              status = 206; headers['Content-Range'] = `bytes ${start}-${end}/${info.size}`;
            }
            headers['Content-Length'] = String(end - start + 1);
            return new Response(request.method === 'HEAD' ? null : Readable.toWeb(createReadStream(filename, { start, end })), { status, headers });
          }
        }
        if (!configured) return json({ error: '미디어 저장소와 관리자 인증을 먼저 설정하세요.' }, 503);
        if (!['GET', 'HEAD'].includes(request.method)) csrf(request);
        if (endpoint === '/api/media/login' && request.method === 'POST') {
          const now = Date.now();
          for (const [key, value] of attempts) if (value.until < now) attempts.delete(key);
          if (attempts.size >= 2000 && !attempts.has(remoteAddress)) throw new MediaError('잠시 후 다시 시도하세요.', 429);
          const attempt = attempts.get(remoteAddress);
          if (attempt && attempt.count >= 5) throw new MediaError('로그인 시도가 많습니다. 10분 뒤 다시 시도하세요.', 429);
          const input = await parse(request);
          if (typeof input.password !== 'string' || !equal(input.password, password)) {
            attempts.set(remoteAddress, { count: (attempt?.count || 0) + 1, until: attempt?.until || now + 600_000 });
            throw new MediaError('관리자 비밀번호를 확인하세요.', 401);
          }
          attempts.delete(remoteAddress);
          const token = `${now + SESSION_SECONDS * 1000}.${credentialVersion()}`;
          return json({ ok: true }, 200, { 'Set-Cookie': cookie(`${token}.${sign(token)}`) });
        }
        if (endpoint === '/api/media/logout' && request.method === 'POST') return json({ ok: true }, 200, { 'Set-Cookie': cookie('') });
        if (!isAdmin) return json({ error: '관리자 로그인이 필요합니다.' }, 401);
        if (endpoint === '/api/media/admin' && request.method === 'GET') return json(await load());
        if (endpoint === '/api/media/assets' && request.method === 'POST') {
          const multipart = request.headers.get('content-type')?.startsWith('multipart/form-data;');
          const bytes = await body(request, multipart ? MAX_FILE + 64 * 1024 : 16 * 1024);
          let asset;
          if (multipart) {
            const form = await new Request(request.url, { method: 'POST', headers: { 'content-type': request.headers.get('content-type') }, body: bytes }).formData();
            const file = form.get('file');
            if (!(file instanceof File) || file.size === 0 || file.size > MAX_FILE) throw new MediaError('25MB 이하의 사진 또는 영상을 선택하세요.');
            const content = Buffer.from(await file.arrayBuffer());
            const [kind, mime, extension] = fileType(content);
            if (kind === 'image' && file.size > 8 * 1024 * 1024) throw new MediaError('사진은 8MB 이하로 등록하세요.', 413);
            const id = randomUUID();
            asset = { id, kind, mime, file: `${id}${extension}`, url: `/api/media/files/${id}`, title: text(form.get('title')), alt: text(form.get('alt')), size: file.size, filename: text(file.name), poster: '' };
            if (kind === 'image' && !asset.alt) throw new MediaError('사진 설명을 입력하세요.');
            await mkdir(path.join(root, 'files'), { recursive: true, mode: 0o700 });
            await writeFile(path.join(root, 'files', asset.file), content, { flag: 'wx', mode: 0o600 });
          } else {
            let input; try { input = JSON.parse(bytes.toString()); } catch { throw new MediaError('요청 내용을 확인하세요.'); }
            if (!input || typeof input !== 'object' || Array.isArray(input)) throw new MediaError('요청 내용을 확인하세요.');
            const source = validateMediaUrl(text(input.url, 2000), { image: input.kind === 'image' });
            asset = { id: randomUUID(), ...source, title: text(input.title), alt: text(input.alt), size: 0, filename: '', poster: '' };
          }
          if (asset.kind === 'image' && !asset.alt) throw new MediaError('사진 설명을 입력하세요.');
          return json(await mutate(state => {
            if (state.assets.length >= 500) throw new MediaError('미디어 보관함은 최대 500개까지 사용할 수 있습니다.');
            state.assets.push({ ...asset, createdAt: new Date().toISOString(), archived: false });
            return { asset };
          }), 201);
        }
        if (endpoint === '/api/media/placement' && request.method === 'PUT') {
          const input = await parse(request);
          return json(await mutate(state => {
            assertRevision(request, state);
            const slot = slots.find(s => s.id === input.slot);
            if (!slot) throw new MediaError('적용할 화면을 선택하세요.');
            if (input.assetId === null) { delete state.placements[slot.id]; return { ok: true }; }
            const asset = state.assets.find(a => a.id === input.assetId && !a.archived);
            if (!asset) throw new MediaError('등록된 미디어를 선택하세요.');
            if (slot.accept === 'image' && asset.kind !== 'image') throw new MediaError('이 위치에는 사진만 적용할 수 있습니다.');
            if (slot.accept === 'video' && asset.kind === 'image') throw new MediaError('릴스에는 영상이나 YouTube 주소를 등록하세요.');
            state.placements[slot.id] = asset.id; return { ok: true };
          }));
        }
        if (endpoint === '/api/media/archive' && request.method === 'POST') {
          const input = await parse(request);
          return json(await mutate(state => {
            assertRevision(request, state);
            const asset = state.assets.find(a => a.id === input.assetId);
            if (!asset) throw new MediaError('미디어를 찾을 수 없습니다.', 404);
            if (Object.values(state.placements).includes(asset.id)) throw new MediaError('고객 화면에서 사용 중입니다. 먼저 기본 화면으로 되돌리거나 다른 미디어로 교체하세요.', 409);
            asset.archived = Boolean(input.archived); return { ok: true };
          }));
        }
        return json({ error: '지원하지 않는 요청입니다.' }, 404);
      } catch (error) {
        if (error instanceof MediaError) return json({ error: error.message }, error.status);
        console.error('Media API failed:', error.code || error.name);
        return json({ error: '저장소를 읽거나 저장하지 못했습니다. 서버의 폴더 권한과 여유 공간을 확인하세요.' }, 500);
      }
    },
  };
}
