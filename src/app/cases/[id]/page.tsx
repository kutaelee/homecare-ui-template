import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, Phone, MessageSquare } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { brand, cases } from '@/data/demo';

export function generateStaticParams() {
  return cases.map((c) => ({ id: c.id }));
}

export default async function CaseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const c = cases.find((x) => x.id === id);
  if (!c) notFound();

  return (
    <>
      <PageIntro eyebrow="시공 사례 상세" title={c.title} description={c.summary} />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <BeforeAfterSlider beforeLabel={c.before} afterLabel={c.after} />
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gold-50 px-3.5 py-1 text-xs font-bold text-gold-600 border border-gold-200">
                {c.category}
              </span>
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                {c.location}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-brand-900 leading-snug">
              시공 현장 상세 및 공정 기록
            </h2>

            <p className="text-sm leading-relaxed text-brand-600">{c.summary}</p>

            <div className="rounded-2xl border border-brand-200 bg-white p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold-600">
                주요 시공 내용:
              </h3>
              <ul className="space-y-2.5">
                {c.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-700">
                    <Check className="size-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/inquiry/new"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-gold-600 transition"
              >
                <MessageSquare className="size-4" />
                이 현장처럼 사진 견적 문의
              </Link>
              <a
                href={brand.telHref}
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3.5 text-xs font-bold text-brand-900 hover:border-gold-500 transition"
              >
                <Phone className="size-4 text-gold-500" />
                전화 상담
              </a>
              <Link
                href="/cases"
                className="inline-flex items-center gap-1.5 px-3 py-3.5 text-xs font-medium text-brand-500 hover:text-brand-900"
              >
                <ArrowLeft className="size-4" />
                시공 사례 목록
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
