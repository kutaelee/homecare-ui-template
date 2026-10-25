import Link from 'next/link';
import { Check, ChevronRight, Sparkles, MessageSquare } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import ServiceVisual from '@/components/ServiceVisual';
import { services } from '@/data/demo';

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="시공 서비스"
        title="싱크대 교체·리폼·맞춤가구 서비스"
        description="전체를 바꾸지 않아도 되는 작업이 많습니다. 상판, 하부장, 문짝, 싱크볼 등 필요한 부분만 실속 있게 교체하세요."
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24 space-y-10">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 rounded-3xl border border-brand-200 bg-white p-6 sm:p-9 md:p-12 shadow-sm transition hover:shadow-xl ${
              i % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full lg:w-1/2">
              <ServiceVisual slot={`service:${s.slug}`} icon={s.icon} className="min-h-80" />
            </div>

            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-bold text-gold-600 border border-gold-200">
                  {s.tag}
                </span>
                {s.badge && (
                  <span className="rounded-full bg-brand-900 px-3 py-1 text-xs font-bold text-white flex items-center gap-1">
                    <Sparkles className="size-3 text-gold-400" />
                    {s.badge}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">{s.title}</h2>
              <p className="text-sm leading-relaxed text-brand-600">{s.description}</p>

              <div className="rounded-2xl bg-brand-50 p-4 border border-brand-200/60 text-xs text-brand-700">
                <b className="mb-1.5 block text-gold-600 font-bold">이런 고민이 있으신가요?</b>
                {s.problem}
              </div>

              <div className="space-y-2 border-t border-brand-100 pt-4">
                <b className="block text-xs font-bold text-brand-900">시공 진행 과정:</b>
                <ul className="grid gap-2.5 text-xs text-brand-600 sm:grid-cols-2">
                  {s.steps.map((step) => (
                    <li key={step} className="flex items-center gap-2">
                      <Check className="size-3.5 shrink-0 text-gold-500" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-xs font-bold text-white transition hover:bg-gold-500"
                >
                  상세 페이지 <ChevronRight className="size-4" />
                </Link>
                <Link
                  href="/inquiry/new"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-xs font-bold text-brand-800 transition hover:border-gold-500 hover:bg-brand-50"
                >
                  <MessageSquare className="size-3.5" />
                  사진 견적 신청
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
