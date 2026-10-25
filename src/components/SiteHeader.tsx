'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { brand, services } from '@/data/demo';

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [furnitureDropdown, setFurnitureDropdown] = useState(false);

  const sinkServices = services.filter((s) => s.category === 'sink' || s.category === 'repair');
  const furnitureServices = services.filter((s) => s.category === 'furniture' || s.category === 'all');

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-brand-950 border-b border-white/5 px-4 py-2 text-center text-xs text-brand-300">
        <span className="inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="font-medium text-white/90">공개 UI 데모 · 연락처와 업체 정보는 예시입니다</span>
          <span className="hidden sm:inline text-brand-500">|</span>
          <span className="hidden sm:inline text-brand-400">대표가 직접 상담·실측·시공합니다 (1년 무상 A/S)</span>
        </span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-900/95 backdrop-blur-md text-white transition-all">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3.5 gap-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex min-h-11 flex-shrink-0 items-center gap-2.5 leading-none transition opacity-95 hover:opacity-100"
            aria-label="클린하우스 홈으로 이동"
          >
            <span
              className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white"
              style={{ fontVariant: 'small-caps' }}
            >
              Clean House
            </span>
            <span className="text-xs font-medium text-white/60 tracking-wider">클린하우스</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="메인 메뉴">
            <Link
              href="/"
              className={`text-sm font-semibold transition ${
                pathname === '/' ? 'text-gold-400' : 'text-white/80 hover:text-white'
              }`}
            >
              홈
            </Link>

            {/* Sink Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                aria-expanded={servicesDropdown}
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className={`flex items-center gap-1.5 text-sm font-semibold transition ${
                  pathname.startsWith('/services') ? 'text-gold-400' : 'text-white/80 hover:text-white'
                }`}
              >
                싱크대 시공
                <ChevronDown className="size-3.5 text-white/60 transition-transform duration-200" />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-2 min-w-56 rounded-2xl border border-brand-700 bg-brand-900 p-2.5 shadow-2xl backdrop-blur-lg">
                  <Link
                    onClick={() => setServicesDropdown(false)}
                    href="/services"
                    className="block rounded-xl px-3.5 py-2 text-xs font-bold text-gold-300 hover:bg-brand-800"
                  >
                    싱크대 시공 전체 보기 →
                  </Link>
                  <div className="my-1.5 border-b border-brand-800" />
                  {sinkServices.map((s) => (
                    <Link
                      key={s.slug}
                      onClick={() => setServicesDropdown(false)}
                      href={`/services/${s.slug}`}
                      className="block rounded-xl px-3.5 py-2 text-xs text-white/85 transition hover:bg-brand-800 hover:text-white"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Custom Furniture Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFurnitureDropdown(true)}
              onMouseLeave={() => setFurnitureDropdown(false)}
            >
              <button
                type="button"
                aria-expanded={furnitureDropdown}
                onClick={() => setFurnitureDropdown(!furnitureDropdown)}
                className="flex items-center gap-1.5 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                맞춤가구
                <ChevronDown className="size-3.5 text-white/60 transition-transform duration-200" />
              </button>

              {furnitureDropdown && (
                <div className="absolute top-full left-0 mt-2 min-w-56 rounded-2xl border border-brand-700 bg-brand-900 p-2.5 shadow-2xl backdrop-blur-lg">
                  <Link
                    onClick={() => setFurnitureDropdown(false)}
                    href="/services"
                    className="block rounded-xl px-3.5 py-2 text-xs font-bold text-gold-300 hover:bg-brand-800"
                  >
                    맞춤가구 전체 보기 →
                  </Link>
                  <div className="my-1.5 border-b border-brand-800" />
                  {furnitureServices.map((s) => (
                    <Link
                      key={s.slug}
                      onClick={() => setFurnitureDropdown(false)}
                      href={`/services/${s.slug}`}
                      className="block rounded-xl px-3.5 py-2 text-xs text-white/85 transition hover:bg-brand-800 hover:text-white"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/cases"
              className={`text-sm font-semibold transition ${
                pathname === '/cases' ? 'text-gold-400' : 'text-white/80 hover:text-white'
              }`}
            >
              시공 사례
            </Link>

            <Link
              href="/faq"
              className={`text-sm font-semibold transition ${
                pathname === '/faq' ? 'text-gold-400' : 'text-white/80 hover:text-white'
              }`}
            >
              자주 묻는 질문
            </Link>

            <Link
              href="/blog"
              className={`text-sm font-semibold transition ${
                pathname === '/blog' ? 'text-gold-400' : 'text-white/80 hover:text-white'
              }`}
            >
              현장 기록
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-semibold transition ${
                pathname === '/contact' ? 'text-gold-400' : 'text-white/80 hover:text-white'
              }`}
            >
              문의 안내
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={brand.telHref}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="size-3.5 text-gold-400" />
              <span>{brand.phone}</span>
            </a>
            <Link
              href="/inquiry/new"
              className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:bg-gold-600 active:scale-95"
            >
              <MessageSquare className="size-3.5" />
              사진 견적 문의
              <ArrowUpRight className="size-3.5 opacity-80" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
            className="flex rounded-xl p-2 text-white/90 hover:bg-white/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            className="max-h-[80vh] space-y-1.5 overflow-auto border-t border-white/10 bg-brand-900/98 px-5 py-5 lg:hidden text-white"
            aria-label="모바일 메뉴"
          >
            <div className="mb-4 pb-3 border-b border-brand-800 flex items-center justify-between">
              <a
                href={brand.telHref}
                className="flex items-center gap-2 text-xs font-bold text-gold-300"
              >
                <Phone className="size-4" />
                {brand.phone} 바로 연결
              </a>
              <Link
                href="/inquiry/new"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-gold-500 px-3.5 py-1.5 text-xs font-bold text-white"
              >
                사진 견적 신청
              </Link>
            </div>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold hover:bg-white/10"
            >
              홈
            </Link>

            <div className="pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-gold-400">
              시공 서비스
            </div>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-3.5 py-2 text-xs font-medium text-white/90 hover:bg-white/10"
            >
              서비스 전체 보기
            </Link>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-3.5 py-2 text-xs text-white/70 hover:bg-white/10"
              >
                · {s.title}
              </Link>
            ))}

            <div className="pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-gold-400">
              안내 및 사례
            </div>
            <Link
              href="/cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-3.5 py-2 text-xs font-medium text-white/90 hover:bg-white/10"
            >
              시공 사례 갤러리
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-3.5 py-2 text-xs font-medium text-white/90 hover:bg-white/10"
            >
              자주 묻는 질문
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-3.5 py-2 text-xs font-medium text-white/90 hover:bg-white/10"
            >
              현장 작업 일지
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-3.5 py-2 text-xs font-medium text-white/90 hover:bg-white/10"
            >
              문의 안내 및 오시는 길
            </Link>
            <Link
              href="/reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-3.5 py-2 text-xs font-medium text-white/90 hover:bg-white/10"
            >
              방문 실측 예약
            </Link>
            <Link
              href="/qna"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-3.5 py-2 text-xs font-medium text-white/90 hover:bg-white/10"
            >
              고객 Q&amp;A 질문 게시판
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
