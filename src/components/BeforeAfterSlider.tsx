'use client';

import { useState } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeLabel = '시공 전 (BEFORE)',
  afterLabel = '시공 후 (AFTER)',
}: {
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [percent, setPercent] = useState(50);

  return (
    <div className="overflow-hidden rounded-3xl border border-brand-200 bg-white shadow-xl">
      <div className="relative h-72 sm:h-96 md:h-[420px] overflow-hidden bg-brand-100 select-none">
        {/* BEFORE Background Side */}
        <div className="absolute inset-0 bg-[#e3ded8] flex flex-col justify-between p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-brand-900/80 px-3.5 py-1.5 text-xs font-bold text-white shadow">
              {beforeLabel}
            </span>
            <span className="text-xs font-medium text-brand-600 bg-brand-200/80 px-3 py-1 rounded-full">
              오염·처짐·변색 상판
            </span>
          </div>

          {/* Graphic mockup for before */}
          <div className="my-auto mx-auto w-full max-w-md rounded-2xl border-4 border-dashed border-[#b8ae9f] bg-[#d9d2c7] p-8 text-center">
            <div className="h-6 w-3/4 mx-auto rounded bg-[#b3a897] mb-4 opacity-70" />
            <div className="h-28 w-full rounded-xl bg-[#c5bcad] border-2 border-[#a69c8c] flex items-center justify-center text-xs font-semibold text-brand-600">
              [시공 전: 누수로 썩은 하부장 / 갈라진 누런 인조대리석 상판]
            </div>
            <div className="mt-3 flex justify-center gap-3">
              <span className="h-3 w-16 rounded bg-[#a69c8c]" />
              <span className="h-3 w-16 rounded bg-[#a69c8c]" />
            </div>
          </div>

          <p className="text-center text-xs text-brand-500">
            기존 싱크대: 누수 곰팡이 및 스크래치 변색 상태
          </p>
        </div>

        {/* AFTER Foreground Side (Clipped) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden bg-[#faf7f2]"
          style={{ width: `${percent}%` }}
        >
          <div
            className="absolute inset-y-0 left-0 flex flex-col justify-between p-6"
            style={{ width: '100%', minWidth: '320px' }}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gold-500 px-3.5 py-1.5 text-xs font-bold text-white shadow flex items-center gap-1.5">
                <Sparkles className="size-3" />
                {afterLabel}
              </span>
              <span className="text-xs font-medium text-gold-600 bg-gold-100 px-3 py-1 rounded-full">
                국산 정품 상판 &amp; 사각볼
              </span>
            </div>

            {/* Graphic mockup for after */}
            <div className="my-auto mx-auto w-full max-w-md rounded-2xl border border-brand-200 bg-white p-8 text-center shadow-md">
              <div className="h-6 w-3/4 mx-auto rounded bg-gradient-to-r from-brand-100 via-white to-brand-100 mb-4 border border-brand-200" />
              <div className="h-28 w-full rounded-xl bg-gradient-to-b from-white to-brand-50 border border-gold-300 flex items-center justify-center text-xs font-bold text-brand-900 shadow-inner">
                [시공 후: 국산 E0 방수 하부장 &amp; 와이드 사각싱크볼 무먼지 안착]
              </div>
              <div className="mt-3 flex justify-center gap-3">
                <span className="h-3 w-16 rounded bg-gold-400" />
                <span className="h-3 w-16 rounded bg-gold-400" />
              </div>
            </div>

            <p className="text-center text-xs font-semibold text-gold-600">
              클린하우스 직접 시공: 1년 무상 A/S 보증 &amp; 단차 제로 마감
            </p>
          </div>
        </div>

        {/* Center Divider & Slider Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-2xl"
          style={{ left: `${percent}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-gold-500 text-white shadow-2xl transition hover:scale-105">
            <ArrowLeftRight className="size-4" />
          </span>
        </div>

        {/* Hidden Range Input overlay for smooth touch and mouse sliding */}
        <input
          type="range"
          min={0}
          max={100}
          value={percent}
          onChange={(e) => setPercent(Number(e.target.value))}
          aria-label="시공 전후 비교 슬라이더 비율 조절"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 z-30"
        />
      </div>

      <div className="flex items-center justify-between px-6 py-4 bg-brand-50 border-t border-brand-200 text-xs text-brand-600">
        <span className="font-medium">좌우로 드래그하여 시공 전후 변화를 확인하세요</span>
        <span className="font-bold text-brand-900">대표 직접 시공</span>
      </div>
    </div>
  );
}
