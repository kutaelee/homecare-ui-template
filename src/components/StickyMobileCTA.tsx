import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';
import { brand } from '@/data/demo';

export default function StickyMobileCTA() {
  return (
    <nav
      aria-label="모바일 하단 빠른 바로가기"
      className="fixed right-0 bottom-0 left-0 z-40 flex items-center gap-2.5 border-t border-brand-800 bg-brand-900/98 p-3 shadow-2xl backdrop-blur-xl md:hidden"
    >
      <a
        href={brand.telHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 py-3 text-xs font-bold text-white transition active:scale-95"
      >
        <Phone className="size-4 text-gold-400" />
        전화 상담
      </a>
      <Link
        href="/inquiry/new"
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gold-500 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-gold-600 active:scale-95"
      >
        <MessageSquare className="size-4" />
        사진 견적 신청
      </Link>
    </nav>
  );
}
