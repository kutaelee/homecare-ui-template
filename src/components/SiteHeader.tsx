'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { brand, services } from '@/data/demo';

const nav = [
  { label: '홈', href: '/' }, { label: '작업 사례', href: '/cases' },
  { label: 'FAQ', href: '/faq' }, { label: '작업 일지', href: '/blog' },
  { label: '문의 안내', href: '/contact' },
];
export default function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return <>
    <div className="bg-primary px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-brand-mint">PUBLIC TEMPLATE · 화면 시연용 샘플 데이터 · 실제 영업/예약 사이트가 아닙니다</div>
    <header className="sticky top-0 z-50 border-b border-brand-border bg-warm-white/95 backdrop-blur-lg">
      <div className="mx-auto flex h-18 max-w-[1180px] items-center justify-between px-4 md:px-6">
        <Link href="/" onClick={()=>setMenu(false)} className="flex items-center gap-3" aria-label="샘플 홈케어 홈">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-xl font-extrabold text-brand-mint">S</span>
          <span className="flex flex-col"><b className="text-[17px] tracking-tight text-primary">{brand.name}</b><small className="text-[10px] text-soft-gray">{brand.slogan}</small></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="주요 탐색">
          <Link className={`text-sm font-semibold ${pathname==='/'?'text-primary':'text-charcoal/75 hover:text-primary'}`} href="/">홈</Link>
          <div className="relative" onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
            <button aria-expanded={dropdown} onClick={()=>setDropdown(!dropdown)} className={`flex items-center gap-1 text-sm font-semibold ${pathname.startsWith('/services')?'text-primary':'text-charcoal/75'}`}>서비스 <ChevronDown className="size-4"/></button>
            {dropdown && <div className="absolute top-7 left-0 min-w-48 rounded-xl border border-brand-border bg-white p-2 shadow-xl">
              <Link onClick={()=>setDropdown(false)} href="/services" className="block rounded-lg px-3 py-2 text-xs font-bold hover:bg-light-beige">서비스 전체 보기</Link>
              <div className="my-1 border-b border-brand-border"/>
              {services.map(s=><Link key={s.slug} onClick={()=>setDropdown(false)} href={`/services/${s.slug}`} className="block rounded-lg px-3 py-2 text-xs hover:bg-light-beige">{s.title}</Link>)}
            </div>}
          </div>
          {nav.slice(1).map(n=><Link key={n.href} className={`text-sm font-semibold ${pathname===n.href?'text-primary':'text-charcoal/75 hover:text-primary'}`} href={n.href}>{n.label}</Link>)}
          <Link href="/inquiry/new" className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-primary-hover">상담 화면 보기 <ArrowUpRight className="size-4"/></Link>
        </nav>
        <button aria-label={menu?'메뉴 닫기':'메뉴 열기'} aria-expanded={menu} className="flex rounded-lg p-2 lg:hidden" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      </div>
      {menu && <nav className="max-h-[75vh] space-y-1 overflow-auto border-t border-brand-border bg-warm-white px-5 py-4 lg:hidden" aria-label="모바일 탐색">
        {[nav[0],{label:'서비스 전체',href:'/services'},...services.map(s=>({label:`· ${s.title}`,href:`/services/${s.slug}`})),...nav.slice(1),{label:'상담 화면',href:'/inquiry/new'},{label:'예약 화면',href:'/reservation'},{label:'Q&A',href:'/qna'}].map(n=><Link key={n.href} href={n.href} onClick={()=>setMenu(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-light-beige">{n.label}</Link>)}
      </nav>}
    </header>
  </>;
}
