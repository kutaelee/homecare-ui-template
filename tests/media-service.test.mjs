import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { randomBytes } from 'node:crypto';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { File } from 'node:buffer';
import { createMediaService, validateMediaUrl } from '../server/media-service.mjs';

const origin = 'http://127.0.0.1:4319';
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aF1sAAAAASUVORK5CYII=', 'base64');
async function fixture() {
  const parent = process.env.MEDIA_TEST_ROOT || tmpdir();
  await mkdir(parent, { recursive: true });
  const directory = await mkdtemp(path.join(parent, 'homecare-media-test-'));
  const options = { directory, password: randomBytes(18).toString('hex'), secret: randomBytes(32).toString('hex'), publicOrigin: origin };
  const service = createMediaService(options);
  let cookie = '';
  const request = (route, method = 'GET', data, headers = {}) => new Request(`${origin}/api/media/${route}`, {
    method, headers: { Origin: origin, ...(cookie ? { Cookie: cookie } : {}), ...(data && !(data instanceof FormData) ? { 'Content-Type': 'application/json' } : {}), ...headers },
    ...(data === undefined ? {} : { body: data instanceof FormData ? data : JSON.stringify(data) }),
  });
  const call = (route, method, data, headers) => service.handle(request(route, method, data, headers));
  const login = async () => {
    const response = await call('login', 'POST', { password: options.password });
    assert.equal(response.status, 200); cookie = response.headers.get('set-cookie').split(';')[0];
  };
  const upload = async (bytes = png, name = 'kitchen.png', type = 'image/png') => {
    const data = new FormData(); data.set('file', new File([bytes], name, { type })); data.set('alt', '샘플 주방 사진'); data.set('title', '업로드 테스트');
    return call('assets', 'POST', data);
  };
  return { service, options, request, call, login, upload, get cookie() { return cookie; } };
}

test('unconfigured service exposes no writes or credentials', async () => {
  const service = createMediaService();
  const status = await service.handle(new Request(`${origin}/api/media/status`));
  assert.deepEqual(await status.json(), { configured: false, authenticated: false });
  const write = await service.handle(new Request(`${origin}/api/media/assets`, { method: 'POST' }));
  assert.equal(write.status, 503);
});

test('requires authentication and same-origin writes; logout invalidates browser cookie', async () => {
  const f = await fixture();
  assert.equal((await f.call('admin')).status, 401);
  assert.equal((await f.call('placement', 'PUT', {})).status, 401);
  assert.equal((await f.call('login', 'POST', { password: f.options.password }, { Origin: 'https://other.example' })).status, 403);
  await f.login();
  assert.equal((await f.call('admin')).status, 200);
  assert.equal((await f.call('placement', 'PUT', {}, { Origin: 'https://other.example' })).status, 403);
  const logout = await f.call('logout', 'POST');
  assert.match(logout.headers.get('set-cookie'), /Max-Age=0/);
  const forged = await f.service.handle(f.request('admin', 'GET', undefined, { Cookie: 'homecare_media_admin=9999999999999.invalid.invalid' }));
  assert.equal(forged.status, 401);
});

test('upload, publish, byte ranges, persistent restart, and unpublish work for anonymous customers', async () => {
  const f = await fixture(); await f.login();
  const uploaded = await f.upload(); assert.equal(uploaded.status, 201);
  const { asset, revision } = await uploaded.json();
  const anonymous = route => f.service.handle(new Request(`${origin}/api/media/${route}`));
  assert.equal((await anonymous(`files/${asset.id}`)).status, 404, 'draft file is private');
  assert.equal((await f.call(`files/${asset.id}`)).status, 200, 'administrator can preview drafts');
  const publish = await f.call('placement', 'PUT', { slot: 'hero', assetId: asset.id }, { 'If-Match': String(revision) });
  assert.equal(publish.status, 200);
  const published = await publish.json();
  const restarted = createMediaService(f.options);
  const visible = await restarted.handle(new Request(`${origin}/api/media/public`));
  assert.equal((await visible.json()).placements.hero, asset.id);
  const download = await restarted.handle(new Request(`${origin}${asset.url}`));
  assert.equal(download.status, 200); assert.deepEqual(Buffer.from(await download.arrayBuffer()), png);
  const range = await restarted.handle(new Request(`${origin}${asset.url}`, { headers: { Range: 'bytes=0-7' } }));
  assert.equal(range.status, 206); assert.equal(range.headers.get('content-range'), `bytes 0-7/${png.length}`);
  assert.equal((await range.arrayBuffer()).byteLength, 8);
  const invalidRange = await restarted.handle(new Request(`${origin}${asset.url}`, { headers: { Range: 'bytes=99999-' } }));
  assert.equal(invalidRange.status, 416);
  const unpublish = await f.call('placement', 'PUT', { slot: 'hero', assetId: null }, { 'If-Match': String(published.revision) });
  assert.equal(unpublish.status, 200);
  assert.equal((await anonymous(`files/${asset.id}`)).status, 404);
  const stored = JSON.parse(await readFile(path.join(f.options.directory, 'media.json'), 'utf8'));
  assert.equal(stored.assets.length, 1, 'restoring default retains uploaded assets');
});

test('rejects SVG masquerading as images, oversized requests, and malformed data', async () => {
  const f = await fixture(); await f.login();
  assert.equal((await f.upload(Buffer.from('<svg onload="alert(1)"></svg>'), 'bad.png', 'image/png')).status, 400);
  assert.equal((await f.call('assets', 'POST', {}, { 'Content-Length': String(30 * 1024 * 1024) })).status, 413);
  assert.equal((await f.call('assets', 'POST', null)).status, 400);
  assert.equal((await f.call('placement', 'PUT', null)).status, 400);
  assert.throws(() => validateMediaUrl('javascript:alert(1)'), /HTTPS/);
  assert.throws(() => validateMediaUrl('https://127.0.0.1/private'), /HTTPS/);
});

test('concurrent edits conflict instead of overwriting; slot type is enforced; archive is reversible', async () => {
  const f = await fixture(); await f.login();
  const { asset, revision } = await (await f.upload()).json();
  const headers = { 'If-Match': String(revision) };
  const results = await Promise.all([
    f.call('placement', 'PUT', { slot: 'hero', assetId: asset.id }, headers),
    f.call('placement', 'PUT', { slot: 'service:sink-countertop', assetId: asset.id }, headers),
  ]);
  assert.deepEqual(results.map(r => r.status).sort(), [200, 409]);
  let state = await (await f.call('admin')).json();
  assert.equal((await f.call('placement', 'PUT', { slot: 'reel:reel-01', assetId: asset.id }, { 'If-Match': String(state.revision) })).status, 400);
  assert.equal((await f.call('archive', 'POST', { assetId: asset.id, archived: true }, { 'If-Match': String(state.revision) })).status, 409);
  const usedSlot = Object.keys(state.placements)[0];
  await f.call('placement', 'PUT', { slot: usedSlot, assetId: null }, { 'If-Match': String(state.revision) });
  state = await (await f.call('admin')).json();
  const archived = await f.call('archive', 'POST', { assetId: asset.id, archived: true }, { 'If-Match': String(state.revision) });
  assert.equal(archived.status, 200);
  const restored = await f.call('archive', 'POST', { assetId: asset.id, archived: false }, { 'If-Match': String((await archived.json()).revision) });
  assert.equal(restored.status, 200);
});

test('normalizes YouTube URLs and throttles repeated wrong passwords', async () => {
  assert.deepEqual(validateMediaUrl('https://youtu.be/dQw4w9WgXcQ'), { kind: 'youtube', url: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ' });
  const f = await fixture();
  for (let i = 0; i < 5; i++) assert.equal((await f.call('login', 'POST', { password: 'wrong' })).status, 401);
  assert.equal((await f.call('login', 'POST', { password: f.options.password })).status, 429);
});

test('setup wizard stores special-character passwords without printing them and preserves existing configuration', async () => {
  const f = await fixture();
  const project = path.join(f.options.directory, 'setup-project');
  const storage = path.join(f.options.directory, 'media-storage');
  await mkdir(project);
  const password = `test-\"$'\\-${randomBytes(12).toString('hex')}`;
  const script = fileURLToPath(new URL('../scripts/setup-media.mjs', import.meta.url));
  const execute = async interactive => {
    const child = spawn(process.execPath, [script], { cwd: project, stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true });
    let output = '', directorySent = false, passwordSent = false;
    child.stdout.on('data', chunk => {
      output += chunk.toString();
      if (interactive && !directorySent && output.includes('절대경로:')) { directorySent = true; child.stdin.write(storage + '\n'); }
      if (interactive && !passwordSent && output.includes('표시되지 않음):')) { passwordSent = true; child.stdin.end(password + '\n'); }
    });
    child.stderr.on('data', chunk => { output += chunk.toString(); });
    const timer = setTimeout(() => child.kill(), 5000);
    const code = await new Promise((resolve, reject) => { child.once('error', reject); child.once('close', resolve); });
    clearTimeout(timer); return { code, output };
  };
  const first = await execute(true);
  assert.equal(first.code, 0); assert.equal(first.output.includes(password), false);
  const env = await readFile(path.join(project, '.env.local'), 'utf8');
  const encoded = env.match(/^MEDIA_ADMIN_PASSWORD_B64=(.+)$/m)[1];
  assert.equal(Buffer.from(encoded, 'base64').toString('utf8'), password);
  assert.equal((await execute(false)).code, 1);
  assert.equal(await readFile(path.join(project, '.env.local'), 'utf8'), env);
});
