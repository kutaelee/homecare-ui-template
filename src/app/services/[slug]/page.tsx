import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import ServiceVisual from '@/components/ServiceVisual';
import { services } from '@/data/demo';
export function generateStaticParams(){return services.map(s=>({slug:s.slug}));}
export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const service=services.find(s=>s.slug===slug);if(!service)notFound();
 return <><PageIntro eyebrow="서비스 상세" title={service.title} description={service.description}/><div className="mx-auto w-full max-w-[1180px] px-4 py-14 md:px-6 md:py-20"><div className="grid gap-12 lg:grid-cols-2"><ServiceVisual icon={service.icon} className="min-h-85"/><div className="space-y-7"><span className="rounded-full bg-light-beige px-3 py-2 text-xs font-bold text-primary">{service.tag}</span><h2 className="text-2xl font-extrabold">{service.problem}</h2><p className="text-sm leading-8 text-soft-gray">{service.description}</p><div className="rounded-2xl border border-brand-border bg-white p-6"><h3 className="mb-4 font-extrabold text-primary">구성 항목 예시</h3><ul className="space-y-4">{service.steps.map((s,i)=><li key={s} className="flex gap-3 text-sm"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-mint text-[10px] font-bold text-primary">0{i+1}</span><span className="pt-1">{s}</span></li>)}</ul></div><div className="flex items-start gap-3 rounded-2xl bg-info-blue/40 p-5 text-xs leading-6 text-primary"><CheckCircle2 className="size-5 shrink-0"/>{service.outcome}</div><div className="flex flex-wrap gap-3"><Link href="/inquiry/new" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-white">상담 폼 UI <ArrowRight className="size-4"/></Link><Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-brand-border px-6 py-3 text-xs font-bold text-primary"><ArrowLeft className="size-4"/>서비스 목록</Link></div></div></div></div></>;
}
