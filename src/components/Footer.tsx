import Link from 'next/link';
import { ArrowUpRight, Phone, MessageSquare, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { brand, services } from '@/data/demo';

function InstagramIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-800 bg-brand-900 text-brand-300">
      {/* Upper Wide Section */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2.5">
              <span
                className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white"
                style={{ fontVariant: 'small-caps' }}
              >
                Clean House
              </span>
              <span className="text-xs font-semibold text-white/60">클린하우스</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold-300 uppercase">
              {brand.category}
            </p>
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-brand-400">
              싱크대 전체·부분교체부터 맞춤가구 제작·시공까지 대표가 직접 합니다.
              국산 친환경 자재만을 엄선하며, 시공 후 1년 동안 무상으로 A/S를 보증합니다.
            </p>

            {/* Quick Contact & Action Chips */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={brand.telHref}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-800 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-gold-500"
              >
                <Phone className="size-3.5 text-gold-400" />
                {brand.phone}
              </a>
              <a
                href={brand.smsHref}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-800 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-gold-500"
              >
                <MessageSquare className="size-3.5 text-gold-400" />
                문자로 사진 보내기
              </a>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-700 bg-transparent px-3 py-2.5 text-xs text-white/80 transition hover:border-gold-400 hover:text-white"
              >
                <InstagramIcon className="size-3.5 text-gold-300" />
                Instagram
              </a>
            </div>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 space-y-3">
            <b className="block text-sm font-bold text-white tracking-wide">시공 서비스</b>
            <ul className="space-y-2 text-xs text-brand-300">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition hover:text-gold-300 hover:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 font-semibold text-gold-400 hover:underline"
                >
                  시공 서비스 전체 보기 →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Menu Col */}
          <div className="lg:col-span-2 space-y-3">
            <b className="block text-sm font-bold text-white tracking-wide">바로가기</b>
            <ul className="space-y-2 text-xs text-brand-300">
              <li>
                <Link href="/cases" className="hover:text-gold-300">
                  시공 사례
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-300">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-300">
                  현장 작업 일지
                </Link>
              </li>
              <li>
                <Link href="/inquiry/new" className="hover:text-gold-300">
                  사진 견적 신청
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-gold-300">
                  실측 예약
                </Link>
              </li>
              <li>
                <Link href="/qna" className="hover:text-gold-300">
                  Q&amp;A 질문 게시판
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Guarantee Col */}
          <div className="lg:col-span-2 space-y-3">
            <b className="block text-sm font-bold text-white tracking-wide">시공 안내</b>
            <div className="space-y-2.5 text-xs text-brand-400">
              <p className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 text-gold-400 mt-0.5" />
                <span>{brand.region}</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="size-4 shrink-0 text-gold-400 mt-0.5" />
                <span>{brand.schedule}</span>
              </p>
              <p className="flex items-start gap-2">
                <ShieldCheck className="size-4 shrink-0 text-gold-400 mt-0.5" />
                <span>{brand.warranty}</span>
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-400 transition hover:text-white"
              >
                운영 관리자 화면 <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-brand-800 bg-brand-900/60">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-brand-500">
          <div>
            <p>
              © {new Date().getFullYear()} Clean House Kitchen &amp; Custom Furniture. All rights reserved.
              {' '}Made by{' '}
              <a
                href="https://gyuforge.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GYUFORGE 공식 홈페이지 (새 창)"
                className="font-semibold text-brand-300 underline underline-offset-4 transition hover:text-gold-300"
              >
                GYUFORGE
              </a>
            </p>
            <p className="mt-1 text-[11px] text-brand-600">
              화면 시연 및 사용자 기능 교체가 가능한 가상 템플릿입니다. 실제 상업 거래 및 결제는 발생하지 않습니다.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/terms" className="hover:text-brand-300 transition underline underline-offset-4">
              이용약관
            </Link>
            <span className="text-brand-700">·</span>
            <Link href="/privacy" className="hover:text-brand-300 transition underline underline-offset-4">
              개인정보처리방침
            </Link>
            <span className="text-brand-700">·</span>
            <Link href="/contact" className="hover:text-brand-300 transition underline underline-offset-4">
              고객센터
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
