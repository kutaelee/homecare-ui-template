'use client';
import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
export default function BeforeAfterSlider({beforeLabel='BEFORE',afterLabel='AFTER'}:{beforeLabel?:string;afterLabel?:string}){
 const [percent,setPercent]=useState(50);
 return <div className="overflow-hidden rounded-3xl border border-brand-border bg-white"><div className="relative h-64 overflow-hidden bg-[#d7dcd5] md:h-80">
  <div className="absolute inset-0 demo-grid"/><div className="absolute inset-0 flex items-center justify-center"><div className="h-30 w-36 rounded-2xl border-[12px] border-[#adbaaf] bg-[#c2cec5] shadow-lg"/><span className="absolute top-5 left-5 rounded-full bg-charcoal/70 px-3 py-1 text-[10px] font-bold text-white">{beforeLabel}</span></div>
  <div className="absolute inset-y-0 left-0 overflow-hidden" style={{width:`${percent}%`}}><div className="absolute inset-y-0 left-0 w-[900px] max-w-none bg-[#d6efe5]"/><div className="absolute inset-y-0 left-0 flex items-center justify-center" style={{width:'100%'}}><div className="absolute left-1/2 h-30 w-36 -translate-x-1/2 rounded-2xl border-[12px] border-[#6cb69a] bg-[#abdec9] shadow-lg"/></div><span className="absolute top-5 left-5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-white">{afterLabel}</span></div>
  <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-xl" style={{left:`${percent}%`}}><span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-lg"><ArrowLeftRight className="size-4"/></span></div>
  <input type="range" min={0} max={100} value={percent} onChange={e=>setPercent(Number(e.target.value))} aria-label="샘플 이미지 비교 비율" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"/>
 </div><p className="px-4 py-3 text-center text-[11px] text-soft-gray">가상 그래픽 비교 UI · 실제 시공 결과가 아닙니다</p></div>
}
