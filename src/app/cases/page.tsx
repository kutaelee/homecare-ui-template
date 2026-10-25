import Link from 'next/link';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import { cases } from '@/data/demo';
import { ManagedMedia } from '@/components/MediaProvider';

export default function CasesPage() {
  return (
    <>
      <PageIntro
        eyebrow="시공 사례"
        title="현장 시공 전후 포트폴리오"
        description="싱크대 상판교체, 하부장 복원, 냉장고장 맞춤가구 등 대표가 직접 시공한 실제 현장 사례를 확인하세요."
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <Link
              key={c.id}
              href={`/cases/${c.id}`}
              className="group overflow-hidden rounded-3xl border border-brand-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Graphic Mock Thumbnail */}
              <ManagedMedia slot={`case:${c.id}:cover`} className="aspect-[16/10] overflow-hidden">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-800 to-brand-950 p-6 text-white flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-gold-500/90 px-3 py-0.5 text-[11px] font-bold text-white flex items-center gap-1">
                    <Sparkles className="size-3" />
                    {c.category}
                  </span>
                  <span className="text-[11px] text-white/60">{c.date}</span>
                </div>

                <div className="text-center my-auto">
                  <span className="text-xs font-semibold text-gold-200 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                    대표 직접 시공 현장
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-white/70">
                  <MapPin className="size-3.5 text-gold-400" />
                  <span>{c.location}</span>
                </div>
              </div>

              {/* Body Content */}
              </ManagedMedia>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-brand-900 group-hover:text-gold-600 transition-colors leading-snug line-clamp-2">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-brand-600 leading-relaxed line-clamp-3">
                    {c.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-100 flex items-center justify-between text-xs">
                  <span className="text-brand-500 font-medium">1년 무상 A/S 보증</span>
                  <span className="inline-flex items-center gap-1 font-bold text-gold-600 group-hover:underline">
                    시공 과정 보기 <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
