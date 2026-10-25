'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { readLocalMedia } from './localMedia';

export type ManagedAsset = { id: string; kind: 'image' | 'video' | 'youtube'; url: string; title: string; alt: string; filename?: string; size?: number; archived?: boolean };
export type MediaState = { revision: number; assets: ManagedAsset[]; placements: Record<string, string> };
const initial: MediaState = { revision: 0, assets: [], placements: {} };
const Context = createContext<MediaState>(initial);

export default function MediaProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(initial);
  const refresh = useCallback(async () => {
    try {
      const response = await fetch('/api/media/public', { cache: 'no-store' });
      const next = response.ok ? await response.json() : null;
      if (!next?.configured) { setState(await readLocalMedia()); return; }
      if (Array.isArray(next.assets) && next.placements) setState(next);
    } catch { try { setState(await readLocalMedia()); } catch { /* Keep original illustrations if browser storage is unavailable. */ } }
  }, []);
  useEffect(() => {
    void refresh();
    const onRefresh = () => { void refresh(); };
    window.addEventListener('media-updated', onRefresh);
    window.addEventListener('focus', onRefresh);
    const interval = window.setInterval(onRefresh, 60_000);
    return () => { window.removeEventListener('media-updated', onRefresh); window.removeEventListener('focus', onRefresh); window.clearInterval(interval); };
  }, [refresh]);
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export function useMediaSlot(slot: string) {
  const state = useContext(Context);
  return state.assets.find(asset => asset.id === state.placements[slot] && !asset.archived);
}

export function MediaDisplay({ asset, className = '', eager = false }: { asset: ManagedAsset; className?: string; eager?: boolean }) {
  if (asset.kind === 'youtube') return <iframe src={asset.url} title={asset.title || '시공 영상'} className={`h-full min-h-60 w-full ${className}`} allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />;
  if (asset.kind === 'video') return <video src={asset.url} controls playsInline preload="metadata" aria-label={asset.title || '시공 영상'} className={`h-full w-full object-cover ${className}`} />;
  // The server validates uploaded file signatures and external URL protocols.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={asset.url} alt={asset.alt} loading={eager ? 'eager' : 'lazy'} className={`h-full w-full object-cover ${className}`} />;
}

export function ManagedMedia({ slot, children, className = '', eager = false }: { slot: string; children: ReactNode; className?: string; eager?: boolean }) {
  const asset = useMediaSlot(slot);
  return asset ? <div className={className}><MediaDisplay asset={asset} eager={eager} /></div> : children;
}
