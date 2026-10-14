import Image from 'next/image';
import type { Service } from '@/data/demo';
export default function ServiceVisual({icon,className=''}:{icon:Service['icon'];className?:string}){
const map={grid:'bath',air:'air',washer:'washer',fabric:'fabric'} as const;
return <div className={`demo-grid relative flex min-h-48 items-center justify-center overflow-hidden rounded-3xl bg-light-beige ${className}`}><div className="absolute -top-18 -right-14 size-55 rounded-full bg-brand-mint/50 blur-2xl"/><Image src={`/illustrations/${map[icon]}.svg`} alt="실제 작업 사진이 아닌 샘플 벡터 이미지" width={440} height={300} className="relative z-10 h-auto max-h-64 w-4/5 object-contain"/><span className="absolute right-4 bottom-4 z-20 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-primary">SAMPLE VISUAL</span></div>}
