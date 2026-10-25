'use client';

import { useState } from 'react';
import { X, Play, Eye, Clock, Sparkles } from 'lucide-react';
import { reels } from '@/data/demo';

function InstagramIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ReelsModal() {
  const [activeReel, setActiveReel] = useState<(typeof reels)[0] | null>(null);

  return (
    <div>
      {/* Reels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reels.map((reel) => (
          <div
            key={reel.id}
            onClick={() => setActiveReel(reel)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-brand-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500 hover:shadow-xl"
          >
            {/* Visual Thumbnail */}
            <div className={`aspect-[9/14] w-full bg-gradient-to-br ${reel.thumbnailBg} relative overflow-hidden flex flex-col justify-between p-5 text-white`}>
              {/* Category & Duration badges */}
              <div className="flex items-center justify-between z-10">
                <span className="rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold tracking-wider text-gold-300 backdrop-blur-sm">
                  {reel.category}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white/80">
                  <Clock className="size-3" />
                  {reel.duration}
                </span>
              </div>

              {/* Play Button Icon */}
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-500">
                <Play className="ml-1 size-6 fill-white" />
              </div>

              {/* Title & Info */}
              <div className="z-10 space-y-1">
                <h4 className="text-base font-bold leading-snug line-clamp-2 text-white group-hover:text-gold-200 transition-colors">
                  {reel.title}
                </h4>
                <p className="text-xs text-white/70 line-clamp-1">{reel.subtitle}</p>
                <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[10px] text-white/60">
                  <span className="flex items-center gap-1">
                    <Eye className="size-3" />
                    조회수 {reel.views}
                  </span>
                  <span className="text-gold-300 font-semibold">시공 영상 보기 →</span>
                </div>
              </div>

              {/* Subtle mesh overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {activeReel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/20 bg-brand-900 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 z-20 size-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition"
              aria-label="영상 닫기"
            >
              <X className="size-5" />
            </button>

            {/* Video Viewport Mock */}
            <div className={`aspect-[9/15] w-full bg-gradient-to-br ${activeReel.thumbnailBg} relative flex flex-col justify-between p-6 select-none`}>
              <div className="z-10 pt-2">
                <span className="rounded-full bg-gold-500/90 px-3 py-1 text-xs font-bold text-white flex items-center gap-1.5 w-max">
                  <Sparkles className="size-3" />
                  클린하우스 현장 릴스
                </span>
              </div>

              <div className="text-center my-auto">
                <div className="size-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Play className="ml-1 size-8 fill-white" />
                </div>
                <p className="text-xs text-white/70">
                  영상 UI 시연입니다. SNS 버튼은 데모 안내로 이동합니다.
                </p>
              </div>

              <div className="z-10 bg-black/60 p-4 rounded-2xl backdrop-blur-md space-y-2">
                <h5 className="font-bold text-base text-white">{activeReel.title}</h5>
                <p className="text-xs text-white/80">{activeReel.subtitle}</p>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={activeReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-xs font-bold text-white hover:opacity-90 transition"
                  >
                    <InstagramIcon className="size-3.5" />
                    SNS 연결 예시 보기
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveReel(null)}
                    className="text-xs text-white/60 hover:text-white"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
