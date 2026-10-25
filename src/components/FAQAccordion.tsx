'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/demo';

export default function FAQAccordion() {
  const [selected, setSelected] = useState<string | null>(faqs[0]?.id || null);

  return (
    <div className="space-y-3.5">
      {faqs.map((f) => {
        const isOpen = selected === f.id;
        return (
          <div
            key={f.id}
            className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
              isOpen
                ? 'border-gold-400 bg-white shadow-md'
                : 'border-brand-200 bg-white/80 hover:border-brand-300 hover:bg-white'
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setSelected(isOpen ? null : f.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm md:text-base font-bold text-brand-900"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xs font-black text-gold-600">
                  Q
                </span>
                <span>{f.q}</span>
              </span>
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? 'bg-gold-500 text-white' : 'bg-brand-50 text-brand-500'
                }`}
              >
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-brand-100 bg-brand-50/50 px-6 py-5">
                <div className="flex gap-3">
                  <span className="text-xs font-black text-brand-400 pt-0.5">A.</span>
                  <p className="text-sm leading-relaxed text-brand-600">{f.a}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
