'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/demo';
export default function FAQAccordion(){const [selected,setSelected]=useState<string|null>(faqs[0].id);return <div className="space-y-3">{faqs.map(f=><div key={f.id} className="overflow-hidden rounded-2xl border border-brand-border bg-white"><button type="button" aria-expanded={selected===f.id} onClick={()=>setSelected(selected===f.id?null:f.id)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-bold text-charcoal md:px-7"><span><span className="mr-3 text-primary">Q.</span>{f.q}</span>{selected===f.id?<Minus className="size-4 shrink-0 text-primary"/>:<Plus className="size-4 shrink-0 text-primary"/>}</button>{selected===f.id&&<p className="border-t border-brand-border bg-light-beige/25 px-7 py-5 text-sm leading-7 text-soft-gray">{f.a}</p>}</div>)}</div>}
