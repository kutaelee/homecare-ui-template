import { BookOpen, ArrowUpRight } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import { journal } from '@/data/demo';

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="작업 일지"
        title="클린하우스 현장 시공 노트"
        description="시공 전후 과정과 인조대리석 관리 팁, 주방 리폼 체크리스트를 투명하게 기록합니다."
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journal.map((j) => (
            <article
              key={j.id}
              className="group overflow-hidden rounded-3xl border border-brand-200 bg-white transition hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] bg-gradient-to-br from-brand-800 to-brand-900 flex items-center justify-center text-white">
                <BookOpen className="size-12 text-gold-400 opacity-80" />
                <span className="absolute bottom-3 left-4 rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] text-white/80">
                  현장 기록 노트
                </span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
                    {j.category} · {j.day}
                  </span>
                  <h2 className="mt-2.5 text-lg font-bold text-brand-900 group-hover:text-gold-600 transition-colors leading-snug">
                    {j.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-brand-600 leading-relaxed">
                    {j.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-100 flex items-center justify-between text-xs text-brand-500">
                  <span>작성자: 대표 직접 작성</span>
                  <span className="inline-flex items-center gap-1 font-bold text-gold-600">
                    전문 보기 <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
