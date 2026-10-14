import type {ReactNode} from 'react';
import Link from 'next/link';
import {LayoutDashboard, ClipboardList, CalendarDays, MessageSquare, BookOpen, FileText, HelpCircle, Images, Settings2, Shield} from 'lucide-react';
const menu=[
 {href:'/admin',title:'대시보드 홈',icon:LayoutDashboard},
 {href:'/admin/inquiries',title:'견적 문의 관리',icon:ClipboardList},
 {href:'/admin/reservations',title:'상담 예약 관리',icon:CalendarDays},
 {href:'/admin/qna',title:'Q&A 답변 관리',icon:MessageSquare},
 {href:'/admin/cases',title:'시공 사례 관리',icon:BookOpen},
 {href:'/admin/services',title:'서비스 정보 관리',icon:FileText},
 {href:'/admin/faqs',title:'자주묻는질문 관리',icon:HelpCircle},
 {href:'/admin/assets',title:'이미지 에셋 관리',icon:Images},
 {href:'/admin/settings',title:'사이트 기본 설정',icon:Settings2},
];
export default function AdminLayout({children}:{children:ReactNode}){
 return <div className="flex min-h-[80vh] flex-col bg-light-beige/35 lg:flex-row">
 <aside className="w-full shrink-0 bg-charcoal px-4 py-6 text-warm-white lg:min-h-screen lg:w-64 lg:px-5 lg:py-8">
 <div className="mb-6 flex items-start gap-2 px-2"><Shield className="mt-0.5 size-5 text-brand-mint"/><div><p className="text-sm font-extrabold tracking-wide">샘플 홈케어 ADMIN</p><p className="mt-1 text-[10px] text-white/45">관리자 통합 제어 대시보드 · UI ONLY</p></div></div>
 <nav aria-label="관리자 화면" className="flex gap-1 overflow-x-auto lg:flex-col">{menu.map(({href,title,icon:Icon})=><Link key={href} href={href} className="flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-[11px] font-bold text-white/70 transition-colors hover:bg-primary hover:text-brand-mint lg:text-xs"><Icon className="size-4 shrink-0 text-brand-mint/70"/>{title}</Link>)}</nav>
 <div className="mt-8 hidden border-t border-white/10 px-2 pt-5 lg:block"><p className="text-[10px] font-bold text-brand-mint">PUBLIC UI DEMO</p><p className="mt-2 text-[11px] leading-5 text-white/50">인증·영구 저장·실제 운영 기능이 없는 화면 시연입니다.</p><Link href="/" className="mt-3 block text-xs font-bold hover:text-brand-mint">← 공개 사이트로</Link></div>
 </aside><div className="min-w-0 flex-1 px-4 py-8 md:px-8"><div className="mx-auto mb-6 max-w-[1200px] rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900"><b>데모 환경:</b> 모든 항목은 가상의 샘플입니다. 상태 변경 및 문구 수정은 화면에서만 반영되고 새로고침 시 초기화됩니다.</div><div className="mx-auto max-w-[1200px]">{children}</div></div></div>
}
