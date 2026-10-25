import type { ManagedAsset, MediaState } from './MediaProvider';
import slots from '@/data/mediaSlots.json';

type StoredAsset = ManagedAsset & { blob?: Blob };
type StoredState = Omit<MediaState, 'assets'> & { assets: StoredAsset[] };
const urls = new Map<string, string>();
const initial = (): StoredState => ({ revision: 0, assets: [], placements: {} });

function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('homecare-private-media-demo', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('media');
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(new Error('브라우저 저장소를 사용할 수 없습니다. 일반 브라우저 창에서 다시 시도하세요.'));
  });
}

async function transaction(edit?: (state: StoredState) => unknown): Promise<{ state: StoredState; result?: unknown }> {
  const db = await open();
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('media', edit ? 'readwrite' : 'readonly');
      const store = tx.objectStore('media');
      const request = store.get('state');
      let state: StoredState, result: unknown, failure: unknown;
      request.onsuccess = () => {
        try {
          state = request.result || initial();
          if (edit) { result = edit(state); state.revision += 1; store.put(state, 'state'); }
        } catch (error) { failure = error; tx.abort(); }
      };
      tx.oncomplete = () => resolve({ state, result });
      tx.onabort = () => reject(failure || new Error('브라우저 저장 공간이 부족하거나 저장이 취소되었습니다.'));
      tx.onerror = () => { failure ||= new Error('브라우저 저장 공간이 부족합니다. 작은 파일로 다시 시도하세요.'); };
    });
  } finally { db.close(); }
}

function present(state: StoredState): MediaState {
  for (const [id, url] of urls) if (!state.assets.some(asset => asset.id === id)) { URL.revokeObjectURL(url); urls.delete(id); }
  return { ...state, assets: state.assets.map(({ blob, ...asset }) => {
    if (blob) { if (!urls.has(asset.id)) urls.set(asset.id, URL.createObjectURL(blob)); asset.url = urls.get(asset.id)!; }
    return asset;
  }) };
}

export async function readLocalMedia(): Promise<MediaState> { return present((await transaction()).state); }

export async function localMediaApi(endpoint: string, options?: RequestInit) {
  if (endpoint === 'status') return { configured: true, authenticated: true };
  if (endpoint === 'admin' || endpoint === 'public') return readLocalMedia();
  if (endpoint === 'logout') return { ok: true };
  let input: Record<string, unknown> = {};
  if (typeof options?.body === 'string') input = JSON.parse(options.body);
  let created: StoredAsset | undefined;
  if (endpoint === 'assets') {
    const data = options?.body;
    if (data instanceof FormData) {
      const file = data.get('file');
      if (!(file instanceof File)) throw new Error('파일을 선택하세요.');
      const image = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/avif'].includes(file.type);
      if (!image && !['video/mp4', 'video/webm'].includes(file.type)) throw new Error('지원하는 사진·영상 형식으로 등록하세요.');
      if (!file.size || file.size > (image ? 8 : 25) * 1024 * 1024) throw new Error(image ? '사진은 8MB 이하로 선택하세요.' : '영상은 25MB 이하로 선택하세요.');
      created = { id: crypto.randomUUID(), kind: image ? 'image' : 'video', url: '', blob: file, title: String(data.get('title') || '').slice(0, 200), alt: String(data.get('alt') || '').slice(0, 200), size: file.size, filename: file.name, archived: false };
    } else {
      let url: URL;
      try { url = new URL(String(input.url)); } catch { throw new Error('올바른 HTTPS 주소를 입력하세요.'); }
      if (url.protocol !== 'https:' || url.username || url.password) throw new Error('HTTPS 주소만 사용할 수 있습니다.');
      const host = url.hostname.replace(/^www\./, '');
      let kind: ManagedAsset['kind'] = input.kind === 'image' ? 'image' : 'video';
      if (kind !== 'image' && ['youtube.com', 'm.youtube.com', 'youtu.be', 'youtube-nocookie.com'].includes(host)) {
        const id = host === 'youtu.be' ? url.pathname.slice(1) : url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts)\/([\w-]+)/)?.[1];
        if (!/^[\w-]{11}$/.test(id || '')) throw new Error('YouTube 영상 주소를 확인하세요.');
        url = new URL(`https://www.youtube-nocookie.com/embed/${id}`); kind = 'youtube';
      }
      created = { id: crypto.randomUUID(), kind, url: url.href, title: String(input.title || '').slice(0, 200), alt: String(input.alt || '').slice(0, 200), archived: false };
    }
    if (created.kind === 'image' && !created.alt.trim()) throw new Error('사진 설명을 입력하세요.');
  }
  const { state } = await transaction(state => {
    if (endpoint === 'assets' && created) {
      if (state.assets.length >= 100) throw new Error('브라우저 데모에는 최대 100개까지 등록할 수 있습니다.');
      state.assets.push(created); return;
    }
    if (endpoint === 'reset') { state.assets = []; state.placements = {}; return; }
    if (new Headers(options?.headers).get('If-Match') !== String(state.revision)) throw new Error('다른 창에서 변경했습니다. 새로 불러온 뒤 다시 시도하세요.');
    if (endpoint === 'placement') {
      const slot = slots.find(s => s.id === input.slot);
      if (!slot) throw new Error('적용할 위치를 선택하세요.');
      if (input.assetId === null) { delete state.placements[slot.id]; return; }
      const asset = state.assets.find(a => a.id === input.assetId && !a.archived);
      if (!asset) throw new Error('미디어를 선택하세요.');
      if ((slot.accept === 'image' && asset.kind !== 'image') || (slot.accept === 'video' && asset.kind === 'image')) throw new Error('선택한 화면에 맞는 사진 또는 영상을 등록하세요.');
      state.placements[slot.id] = asset.id; return;
    }
    if (endpoint === 'archive') {
      const asset = state.assets.find(a => a.id === input.assetId);
      if (!asset) throw new Error('미디어를 찾을 수 없습니다.');
      if (Object.values(state.placements).includes(asset.id)) throw new Error('먼저 다른 미디어로 교체하거나 기본 화면으로 되돌리세요.');
      asset.archived = Boolean(input.archived); return;
    }
    throw new Error('지원하지 않는 요청입니다.');
  });
  const publicState = present(state);
  return { ok: true, revision: state.revision, ...(created ? { asset: publicState.assets.find(a => a.id === created.id) } : {}) };
}
