import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { cases } from '@/data/demo';
export function generateStaticParams(){return cases.map(c=>({id:c.id}));}
export default async function CaseDetail({params}:{params:Promise<{id:string}>}){const {id}=await params;const c=cases.find(x=>x.id===id);if(!c)notFound();return <><PageIntro eyebrow="사례 상세" title={c.title} description={c.summary}/><div className="mx-auto w-full max-w-[1180px] px-4 py-15 md:px-6"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-7"><BeforeAfterSlider beforeLabel={c.before} afterLabel={c.after}/></div><div className="space-y-6 lg:col-span-5"><span className="rounded-full bg-light-beige px-4 py-2 text-xs font-bold text-primary">{c.category} · {c.location}</span><h2 className="text-xl font-extrabold">작업 정보 표시 예시</h2><p className="text-sm leading-7 text-soft-gray">{c.summary}</p><ul className="space-y-4">{c.details.map(d=><li key={d} className="flex items-center gap-2 text-sm"><Check className="size-4 text-primary"/>{d}</li>)}</ul><div className="rounded-2xl bg-info-blue/50 p-5 text-xs leading-6 text-primary">모든 비교 그래픽과 텍스트는 가상 데이터입니다. 실제 완료된 작업이나 고객 리뷰가 아닙니다.</div><Link href="/cases" className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="size-4"/>갤러리 돌아가기</Link></div></div></div></>}
