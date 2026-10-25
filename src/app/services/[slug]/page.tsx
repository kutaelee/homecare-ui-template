import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, MessageSquare, Sparkles } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import ServiceVisual from '@/components/ServiceVisual';
import { brand, services } from '@/data/demo';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageIntro
        eyebrow="서비스 상세"
        title={service.title}
        description={service.description}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <ServiceVisual icon={service.icon} className="min-h-96" />

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gold-50 px-3.5 py-1 text-xs font-bold text-gold-600 border border-gold-200">
                {service.tag}
              </span>
              {service.badge && (
                <span className="rounded-full bg-brand-900 px-3 py-1 text-xs font-bold text-white flex items-center gap-1">
                  <Sparkles className="size-3 text-gold-400" />
                  {service.badge}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900 leading-snug">
              {service.problem}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-brand-600">
              {service.description}
            </p>

            {/* Steps & Specifications */}
            <div className="rounded-3xl border border-brand-200 bg-white p-7 shadow-sm">
              <h3 className="mb-4 text-base font-bold text-brand-900">
                시공 표준 공정 (대표 직접 진행)
              </h3>
              <ul className="space-y-3.5">
                {service.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-xs sm:text-sm text-brand-700">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-[11px] font-bold text-white">
                      0{i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome / Quality pledge */}
            <div className="flex items-start gap-3 rounded-2xl bg-brand-100/70 border border-brand-200 p-5 text-xs sm:text-sm text-brand-800 leading-relaxed">
              <CheckCircle2 className="size-5 shrink-0 text-gold-600 mt-0.5" />
              <span>{service.outcome}</span>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/inquiry/new"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-gold-600 transition"
              >
                <MessageSquare className="size-4" />
                이 항목 사진 견적 신청
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={brand.telHref}
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3.5 text-xs font-bold text-brand-900 hover:border-gold-500 transition"
              >
                <Phone className="size-4 text-gold-500" />
                전화 상담
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-brand-500 hover:text-brand-900"
              >
                <ArrowLeft className="size-4" />
                서비스 전체 목록
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
