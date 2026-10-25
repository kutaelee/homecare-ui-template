import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  MessageSquare,
  BookOpen,
  FileText,
  HelpCircle,
  Images,
  Settings2,
  Shield,
  Sparkles,
} from 'lucide-react';

const menu = [
  { href: '/admin', title: '대시보드 홈', icon: LayoutDashboard },
  { href: '/admin/inquiries', title: '사진 견적 접수함', icon: ClipboardList },
  { href: '/admin/reservations', title: '방문 실측 일정', icon: CalendarDays },
  { href: '/admin/qna', title: 'Q&A 답변 관리', icon: MessageSquare },
  { href: '/admin/cases', title: '시공 사례 포트폴리오', icon: BookOpen },
  { href: '/admin/services', title: '시공 서비스 설정', icon: FileText },
  { href: '/admin/faqs', title: '자주 묻는 질문 관리', icon: HelpCircle },
  { href: '/admin/assets', title: '고객 화면 사진·영상', icon: Images },
  { href: '/admin/settings', title: '운영 및 알림톡 설정', icon: Settings2 },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[85vh] flex-col bg-brand-50 lg:flex-row">
      <aside className="w-full shrink-0 bg-brand-900 px-4 py-6 text-white lg:min-h-screen lg:w-64 lg:px-5 lg:py-8 border-r border-brand-800">
        <div className="mb-6 flex items-start gap-2.5 px-2">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gold-500 text-white">
            <Shield className="size-5" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-wide text-white">클린하우스 ADMIN</p>
            <p className="mt-0.5 text-[10px] text-gold-400 font-medium">Kitchen &amp; Custom Furniture</p>
          </div>
        </div>

        <nav aria-label="관리자 메뉴" className="flex gap-1 overflow-x-auto lg:flex-col">
          {menu.map(({ href, title, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex shrink-0 items-center gap-3 rounded-2xl px-3.5 py-3 text-xs font-semibold text-white/75 transition-colors hover:bg-brand-800 hover:text-gold-300"
            >
              <Icon className="size-4 shrink-0 text-gold-400/80" />
              <span>{title}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 hidden border-t border-brand-800 px-2 pt-5 lg:block">
          <p className="text-[10px] font-bold text-gold-400 flex items-center gap-1">
            <Sparkles className="size-3" />
            MODULAR ADMIN UI
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-white/50">
            사용자가 실제 백엔드/데이터베이스를 연결하여 바로 프로덕션 관리자로 확장할 수 있습니다.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-xs font-bold text-gold-300 hover:underline"
          >
            ← 메인 사이트로 돌아가기
          </Link>
        </div>
      </aside>

      <div className="min-w-0 flex-1 px-4 py-8 md:px-8 xl:px-12">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="mb-6 rounded-2xl border border-brand-200 bg-white px-5 py-3.5 text-xs text-brand-700 shadow-sm flex items-center gap-2">
            <span className="font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
              운영 가이드
            </span>
            <span>
              데모의 사진·영상 변경은 본인 브라우저에만 보입니다. 직접 운영 시 저장소와 관리자 인증을 설정하면 모든 고객에게 반영됩니다. 그 외 업무 메뉴는 시연용입니다.
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
