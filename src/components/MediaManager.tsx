'use client';

import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { ImagePlus, LogOut, Save, Undo2, Upload } from 'lucide-react';
import slots from '@/data/mediaSlots.json';
import { MediaDisplay, type ManagedAsset, type MediaState } from './MediaProvider';
import { localMediaApi } from './localMedia';

const inputClass = 'w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900';
const buttonClass = 'inline-flex items-center justify-center gap-2 rounded-xl bg-brand-900 px-5 py-3 text-sm font-bold text-white disabled:opacity-50';
const initial: MediaState = { revision: 0, assets: [], placements: {} };

async function serverApi(path: string, options?: RequestInit) {
  const response = await fetch(`/api/media/${path}`, { cache: 'no-store', ...options });
  let result;
  try { result = await response.json(); } catch { throw new Error('미디어 서버에 연결할 수 없습니다. README의 직접 운영 설정을 확인하세요.'); }
  if (!response.ok) throw new Error(result.error || '처리하지 못했습니다. 새로 불러온 뒤 다시 시도하세요.');
  return result;
}

export default function MediaManager() {
  const [status, setStatus] = useState<'loading' | 'setup' | 'login' | 'ready'>('loading');
  const [localMode, setLocalMode] = useState(false);
  const [state, setState] = useState<MediaState>(initial);
  const [password, setPassword] = useState('');
  const [slotId, setSlotId] = useState(slots[0].id);
  const [source, setSource] = useState<'file' | 'url' | 'library'>('file');
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState('');
  const [url, setUrl] = useState('');
  const [kind, setKind] = useState('image');
  const [title, setTitle] = useState('');
  const [alt, setAlt] = useState('');
  const [assetId, setAssetId] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const slot = slots.find(s => s.id === slotId)!;
  const current = state.assets.find(a => a.id === state.placements[slotId]);
  const api = useCallback((path: string, options?: RequestInit) => localMode ? localMediaApi(path, options) : serverApi(path, options), [localMode]);
  const reload = useCallback(async () => {
    if (localMode) { setState(await localMediaApi('admin') as MediaState); setStatus('ready'); return; }
    let result;
    try { result = await serverApi('status'); } catch { result = { configured: false }; }
    if (!result.configured) {
      setState(await localMediaApi('admin') as MediaState); setLocalMode(true); setStatus('ready'); return;
    }
    if (!result.authenticated) return setStatus('login');
    setState(await serverApi('admin')); setStatus('ready');
  }, [localMode]);
  useEffect(() => { reload().catch(() => setStatus('setup')); }, [reload]);
  useEffect(() => {
    if (!file) { setFilePreview(''); return; }
    const preview = URL.createObjectURL(file); setFilePreview(preview);
    return () => URL.revokeObjectURL(preview);
  }, [file]);
  const run = async (operation: () => Promise<void>) => {
    setBusy(true); setError(''); setMessage('');
    try { await operation(); } catch (err) { setError(err instanceof Error ? err.message : '처리하지 못했습니다.'); }
    finally { setBusy(false); }
  };
  const publish = async (event: FormEvent) => {
    event.preventDefault();
    await run(async () => {
      let selected = assetId, revision = state.revision;
      if (source !== 'library') {
        let result;
        if (source === 'file') {
          if (!file) throw new Error('사진이나 영상 파일을 선택하세요.');
          const image = file.type.startsWith('image/');
          if ((slot.accept === 'image' && !image) || (slot.accept === 'video' && image)) throw new Error(slot.accept === 'image' ? '이 위치에는 사진을 선택하세요.' : '릴스에는 영상 파일을 선택하세요.');
          if (image && !alt.trim()) throw new Error('사진 설명을 입력하세요.');
          const data = new FormData(); data.set('file', file); data.set('title', title); data.set('alt', alt);
          result = await api('assets', { method: 'POST', body: data });
        } else {
          const effectiveKind = slot.accept === 'image' ? 'image' : slot.accept === 'video' ? 'video' : kind;
          if (effectiveKind === 'image' && !alt.trim()) throw new Error('사진 설명을 입력하세요.');
          result = await api('assets', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url, kind: effectiveKind, title, alt }) });
        }
        selected = result.asset.id; revision = result.revision;
        // Keep the successful upload in the library even if publication conflicts.
        setState(await api('admin')); setAssetId(selected); setSource('library');
      }
      if (!selected) throw new Error('보관함에서 미디어를 선택하세요.');
      await api('placement', { method: 'PUT', headers: { 'Content-Type': 'application/json', 'If-Match': String(revision) }, body: JSON.stringify({ slot: slotId, assetId: selected }) });
      await reload(); window.dispatchEvent(new Event('media-updated'));
      setMessage(localMode ? '내 브라우저에만 저장했습니다. 다른 방문자에게는 보이지 않습니다.' : '서버에 저장했습니다. 고객 화면을 새로 열면 변경한 미디어가 표시됩니다.');
    });
  };
  if (status === 'loading') return <p role="status">미디어 설정을 확인하고 있습니다.</p>;
  if (status === 'setup') return <section className="rounded-3xl border border-brand-200 bg-white p-6 sm:p-10"><h2 className="text-xl font-bold">사진·영상 관리를 사용하려면 먼저 설정하세요</h2><p className="mt-4 text-sm leading-7 text-brand-700">이 기능은 템플릿을 내려받아 직접 운영하는 서버에서 사용할 수 있습니다. 관리자 비밀번호와 별도의 저장 폴더를 설정한 뒤 서버를 다시 실행하세요.</p><ol className="mt-5 list-decimal space-y-2 pl-5 text-sm"><li>프로젝트 폴더에서 <code>npm run setup:media</code>를 실행합니다.</li><li>저장 폴더와 관리자 비밀번호를 입력합니다.</li><li>서버를 다시 실행하고 이 메뉴에서 로그인합니다.</li></ol><p className="mt-5 text-sm text-brand-600">정적 파일만 제공하는 배포에서는 미디어를 저장할 수 없습니다. README의 &quot;관리자가 사진·영상을 바꾸도록 구성하기&quot;를 확인하세요.</p></section>;
  if (status === 'login') return <section className="max-w-lg rounded-3xl border border-brand-200 bg-white p-6 sm:p-10"><h2 className="text-xl font-bold">미디어 관리자 로그인</h2><p className="mt-3 text-sm leading-6 text-brand-600">설정할 때 정한 관리자 비밀번호를 입력하세요.</p><form onSubmit={e => { e.preventDefault(); void run(async () => { await api('login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) }); setPassword(''); await reload(); }); }} className="mt-6 space-y-4"><label className="block text-sm font-semibold">관리자 비밀번호<input type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} className={`${inputClass} mt-2`} /></label>{error && <p role="alert" className="text-sm text-red-700">{error}</p>}<button disabled={busy} className={buttonClass}>로그인</button></form></section>;
  const available = state.assets.filter(a => !a.archived && (slot.accept === 'any' || (slot.accept === 'image' ? a.kind === 'image' : a.kind !== 'image')));
  const preview: ManagedAsset | undefined = source === 'file' && file && filePreview ? { id: 'preview', url: filePreview, kind: file.type.startsWith('image/') ? 'image' : 'video', title, alt } : source === 'library' ? state.assets.find(a => a.id === assetId) : undefined;
  return <div className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"><span>{localMode ? '개인 데모 · 사진·영상은 이 브라우저에만 저장됩니다. 다른 방문자에게는 보이지 않습니다.' : '서버 저장 모드 · 등록한 미디어가 다른 방문자에게도 표시됩니다.'}</span>{localMode ? <button type="button" disabled={busy} className="font-bold underline" onClick={() => { if (window.confirm('이 브라우저에 저장한 데모 사진·영상과 배치를 초기화할까요?')) void run(async () => { await api('reset', { method: 'POST' }); setAssetId(''); await reload(); window.dispatchEvent(new Event('media-updated')); setMessage('내 브라우저의 데모 데이터를 초기화했습니다.'); }); }}>내 데모 초기화</button> : <button type="button" disabled={busy} onClick={() => void run(async () => { await api('logout', { method: 'POST' }); await reload(); })} className="inline-flex items-center gap-2 font-bold"><LogOut className="size-4" />로그아웃</button>}</div>
    {localMode && <details className="rounded-2xl border border-brand-200 bg-white p-5 text-sm"><summary className="cursor-pointer font-bold">직접 운영할 때 모든 고객에게 반영하려면</summary><p className="mt-3 leading-7">템플릿을 내려받아 <code>npm run setup:media</code>로 저장 폴더와 관리자 비밀번호를 설정하고 Node.js 서버로 실행하세요. 설정 후에는 이 메뉴에서 관리자 로그인이 필요하며, 서버에 저장한 미디어가 모든 방문자에게 표시됩니다.</p><p className="mt-2 text-xs text-brand-600">개인 데모의 내용은 서버에 업로드되지 않습니다. 브라우저 데이터 삭제·다른 브라우저·다른 기기에서는 공유되지 않습니다.</p></details>}
    {message && <p role="status" className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">{message}</p>}
    {error && <div role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">{error}<button type="button" onClick={() => void run(reload)} className="ml-3 underline">새로 불러오기</button></div>}
    <div className="grid gap-6 xl:grid-cols-2"><form onSubmit={publish} className="space-y-5 rounded-3xl border border-brand-200 bg-white p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold"><ImagePlus className="size-5" />고객 화면의 사진·영상 변경</h2>
      <label className="block space-y-2 text-sm font-bold"><span>1. 적용할 위치</span><select className={inputClass} value={slotId} onChange={e => { setSlotId(e.target.value); setAssetId(''); setError(''); setMessage(''); }}>{slots.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}</select></label>
      <label className="block space-y-2 text-sm font-bold"><span>2. 등록 방법</span><select value={source} onChange={e => setSource(e.target.value as typeof source)} className={inputClass}><option value="file">내 컴퓨터에서 파일 선택</option><option value="url">사진·영상 주소 입력</option><option value="library">등록한 미디어 재사용</option></select></label>
      {source === 'file' && <label className="block space-y-2 text-sm"><span className="font-bold">파일 선택</span><input type="file" accept={slot.accept === 'image' ? 'image/jpeg,image/png,image/gif,image/webp,image/avif' : slot.accept === 'video' ? 'video/mp4,video/webm' : 'image/jpeg,image/png,image/gif,image/webp,image/avif,video/mp4,video/webm'} onChange={e => setFile(e.target.files?.[0] || null)} className={inputClass} /><span className="block text-xs text-brand-600">사진 8MB, 영상 25MB까지. 긴 영상은 YouTube 주소를 사용할 수 있습니다.</span></label>}
      {source === 'url' && <>{slot.accept === 'any' && <label className="block space-y-2 text-sm font-bold"><span>미디어 종류</span><select value={kind} onChange={e => setKind(e.target.value)} className={inputClass}><option value="image">사진</option><option value="video">MP4·WebM 또는 YouTube 영상</option></select></label>}<label className="block space-y-2 text-sm font-bold"><span>HTTPS 주소</span><input type="url" required value={url} onChange={e => setUrl(e.target.value)} placeholder="https://..." className={inputClass} /></label></>}
      {source === 'library' ? <label className="block space-y-2 text-sm font-bold"><span>미디어 선택</span><select required value={assetId} onChange={e => setAssetId(e.target.value)} className={inputClass}><option value="">선택하세요</option>{available.map(a => <option key={a.id} value={a.id}>{a.title || a.filename || a.alt || a.kind}</option>)}</select></label> : <><label className="block space-y-2 text-sm font-bold"><span>제목 (선택)</span><input maxLength={200} value={title} onChange={e => setTitle(e.target.value)} className={inputClass} /></label><label className="block space-y-2 text-sm font-bold"><span>사진 설명 (사진 등록 시 필수)</span><input maxLength={200} value={alt} onChange={e => setAlt(e.target.value)} placeholder="예: 교체를 마친 화이트 싱크대 상판" className={inputClass} /></label></>}
      {preview && <div className="aspect-video overflow-hidden rounded-2xl bg-brand-100"><MediaDisplay asset={preview} /></div>}
      <button type="submit" disabled={busy} className={`${buttonClass} w-full`}><Save className="size-4" />{busy ? '저장 중...' : localMode ? '내 브라우저에만 저장하고 확인' : '저장하고 고객 화면에 반영'}</button>
    </form><section className="space-y-5 rounded-3xl border border-brand-200 bg-white p-6"><h2 className="text-lg font-bold">선택한 위치의 현재 미디어</h2><p className="text-sm text-brand-600">{slot.label}</p>{current ? <><div className="aspect-video overflow-hidden rounded-2xl bg-brand-100"><MediaDisplay asset={current} /></div><p className="text-sm font-bold">{current.title || current.alt || current.filename}</p><button type="button" disabled={busy} className="inline-flex items-center gap-2 rounded-xl border border-brand-200 px-4 py-3 text-sm font-bold" onClick={() => void run(async () => { await api('placement', { method: 'PUT', headers: { 'Content-Type': 'application/json', 'If-Match': String(state.revision) }, body: JSON.stringify({ slot: slotId, assetId: null }) }); await reload(); window.dispatchEvent(new Event('media-updated')); setMessage('기본 일러스트 화면으로 되돌렸습니다. 등록한 파일은 보관함에 남아 있습니다.'); })}><Undo2 className="size-4" />기본 화면으로 되돌리기</button></> : <p className="rounded-2xl bg-brand-50 p-5 text-sm text-brand-600">등록한 미디어가 없어 기본 일러스트를 표시합니다.</p>}<a href={slotId.startsWith('case:') ? `/cases/${slotId.split(':')[1]}/` : '/'} target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-gold-600 underline">고객 화면 새 창으로 확인</a><p className="text-xs leading-6 text-brand-600">기존 방문자의 화면은 새로고침하거나 최대 1분 뒤 갱신됩니다. 재사용할 파일은 아래 보관함에 남습니다.</p></section></div>
    <section className="rounded-3xl border border-brand-200 bg-white p-6"><h2 className="mb-4 flex items-center gap-2 text-lg font-bold"><Upload className="size-5" />등록한 미디어 보관함</h2>{!state.assets.length ? <p className="text-sm text-brand-600">아직 등록한 미디어가 없습니다.</p> : <ul className="divide-y divide-brand-100">{state.assets.map(a => <li key={a.id} className="flex flex-wrap items-center justify-between gap-3 py-4 text-sm"><div><b>{a.title || a.filename || a.alt || a.kind}</b><p className="mt-1 text-xs text-brand-600">{a.kind === 'image' ? '사진' : '영상'} · {a.archived ? '보관됨' : Object.values(state.placements).includes(a.id) ? '고객 화면에 사용 중' : '미사용'}{Boolean(a.size) && ` · ${(a.size! / 1024 / 1024).toFixed(1)}MB`}</p></div>{!Object.values(state.placements).includes(a.id) && <button type="button" disabled={busy} className="rounded-lg border border-brand-200 px-3 py-2 text-xs font-bold" onClick={() => void run(async () => { await api('archive', { method: 'POST', headers: { 'Content-Type': 'application/json', 'If-Match': String(state.revision) }, body: JSON.stringify({ assetId: a.id, archived: !a.archived }) }); await reload(); setMessage(a.archived ? '보관함에서 복원했습니다.' : '목록에서 보관 처리했습니다. 원본 파일은 삭제하지 않습니다.'); })}>{a.archived ? '복원' : '보관'}</button>}</li>)}</ul>}</section>
  </div>;
}
