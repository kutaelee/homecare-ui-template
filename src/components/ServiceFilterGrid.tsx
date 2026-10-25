'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Sparkles, MessageSquare } from 'lucide-react';
import { services } from '@/data/demo';
import ServiceVisual from '@/components/ServiceVisual';

type FilterCategory = 'all' | 'sink' | 'furniture' | 'repair';

export default function ServiceFilterGrid() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');

  const filterTabs: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: '전체 서비스' },
    { id: 'sink', label: '싱크대 상판·하부장' },
    { id: 'furniture', label: '맞춤가구 (냉장고장·홈바)' },
    { id: 'repair', label: '싱크볼·후드·보수' },
  ];

  const filteredServices = services.filter((s) => {
    if (selectedFilter === 'all') return true;
    return s.category === selectedFilter;
  });

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="mb-10 flex flex-wrap gap-2.5">
        {filterTabs.map((tab) => {
          const isActive = selectedFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedFilter(tab.id)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                isActive
                  ? 'bg-brand-900 text-white shadow-md ring-2 ring-gold-500'
                  : 'bg-white text-brand-700 border border-brand-200 hover:border-gold-400 hover:bg-brand-50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Services Grid (Wide Responsive Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((s) => (
          <article
            key={s.slug}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-brand-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500 hover:shadow-2xl"
          >
            <div>
              {/* Card Header & Badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-600">
                  {s.tag}
                </span>
                {s.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold-50 px-2.5 py-0.5 text-[10px] font-bold text-gold-600 border border-gold-200">
                    <Sparkles className="size-2.5" />
                    {s.badge}
                  </span>
                )}
              </div>

              {/* Service Visual Illustration */}
              <div className="mb-6 overflow-hidden rounded-2xl">
                <ServiceVisual slot={`service:${s.slug}`} icon={s.icon} className="min-h-48" />
              </div>

              {/* Titles & Desc */}
              <h3 className="mb-2 text-xl font-bold tracking-tight text-brand-900 group-hover:text-gold-600 transition-colors">
                {s.title}
              </h3>
              <p className="mb-5 text-xs sm:text-sm leading-relaxed text-brand-600">
                {s.description}
              </p>

              {/* Problem/Solution Callout */}
              <div className="mb-6 rounded-2xl bg-brand-50 p-4 border border-brand-200/60">
                <p className="text-[11px] font-bold text-gold-600 mb-1">이런 분들께 추천합니다</p>
                <p className="text-xs text-brand-700 leading-snug">{s.problem}</p>
              </div>

              {/* Bullet Steps */}
              <ul className="mb-6 space-y-2 text-xs text-brand-600 border-t border-brand-100 pt-4">
                {s.steps.slice(0, 3).map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="size-3.5 shrink-0 text-gold-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 pt-4 border-t border-brand-100">
              <Link
                href={`/services/${s.slug}`}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-900 py-3 text-xs font-bold text-white transition hover:bg-gold-500"
              >
                상세 보기
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/inquiry/new"
                className="flex items-center justify-center rounded-full border border-brand-200 px-4 py-3 text-xs font-semibold text-brand-700 transition hover:border-gold-500 hover:text-brand-900 hover:bg-brand-50"
                title="사진으로 이 항목 견적 문의하기"
              >
                <MessageSquare className="size-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
