import Link from 'next/link';
import {
  Phone,
  MessageSquare,
  Sparkles,
  Check,
  ChevronRight,
  ArrowRight,
  Clock,
  ArrowUpRight,
  Layers,
  Award,
  Flame,
} from 'lucide-react';
import { brand, stats, cases, process, serviceAreas, journal } from '@/data/demo';
import SectionHeading from '@/components/SectionHeading';
import ServiceFilterGrid from '@/components/ServiceFilterGrid';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import QuickPhotoQuoteForm from '@/components/QuickPhotoQuoteForm';
import ReelsModal from '@/components/ReelsModal';
import FAQAccordion from '@/components/FAQAccordion';
import { ManagedMedia } from '@/components/MediaProvider';

export default function Home() {
  return (
    <>
      {/* ======================================================== */}
      {/* SECTION 1: HERO (Full-Width Premium Dark Kitchen Hero) */}
      {/* ======================================================== */}
      <section
        id="hero"
        className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden bg-brand-900 py-20 lg:py-28 text-white"
      >
        {/* Background glow and subtle grid */}
        <div className="dark-grid absolute inset-0 opacity-40 pointer-events-none" />
        <div className="pointer-events-none absolute -top-40 -right-40 size-[650px] rounded-full bg-gold-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[600px] rounded-full bg-brand-800/80 blur-[100px]" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid items-center gap-12 lg:grid-cols-12">
          {/* Hero Left Content */}
          <div className="space-y-6 lg:col-span-7">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-bold text-gold-300">
              <span className="size-2 rounded-full bg-gold-400 animate-ping" />
              <span>{brand.region}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2]">
              전체를 바꾸지 않아도
              <br />
              <span className="text-gold-400">주방의 가치</span>가 살아납니다
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
              싱크대 전체·부분교체부터 맞춤가구 제작·시공까지 대표가 직접 합니다.
              상판만, 하부장만, 문짝만 바꿔도 충분한 현장이 대부분입니다.
              국산 인조대리석과 친환경 자재만을 엄선하며 시공 후 1년 무상 A/S를 약속드립니다.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={brand.telHref}
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl transition-all hover:bg-gold-600 active:scale-95"
              >
                <Phone className="size-4" />
                {brand.phone} 전화 상담
              </a>
              <a
                href={brand.smsHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95"
              >
                <MessageSquare className="size-4 text-gold-300" />
                문자로 사진 보내기
              </a>
              <a
                href="#quote-section"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gold-300 hover:text-white transition"
              >
                온라인 사진 견적
                <ChevronRight className="size-4" />
              </a>
            </div>

            {/* Sub-notice */}
            <p className="text-xs text-white/60 flex items-center gap-2">
              <Clock className="size-3.5 text-gold-400" />
              편하신 시간에 문의주세요. 시공 중일 경우 작업 후 신속하게 연락드리겠습니다.
            </p>

            {/* Trust Bullet Highlights */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-lg sm:text-2xl font-bold text-gold-400">10년+</p>
                <p className="mt-1 text-xs text-white/70">현장 시공 경력</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold text-gold-400">6,200건+</p>
                <p className="mt-1 text-xs text-white/70">누적 시공 사례</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold text-gold-400">1년 무상</p>
                <p className="mt-1 text-xs text-white/70">책임 A/S 보증</p>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Mockup Card */}
          <ManagedMedia slot="hero" eager className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[36px] lg:col-span-5">
          <div className="relative mx-auto w-full max-w-lg lg:col-span-5">
            <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-brand-800/80 p-7 shadow-2xl backdrop-blur-xl">
              {/* Inner Decorative Kitchen Header */}
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span
                    className="font-serif text-xl font-bold tracking-tight text-white"
                    style={{ fontVariant: 'small-caps' }}
                  >
                    Clean House
                  </span>
                  <span className="text-[10px] font-semibold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded-full border border-gold-500/30">
                    MASTER CRAFT
                  </span>
                </div>
                <span className="text-xs text-white/60">대표 직접 시공</span>
              </div>

              {/* Graphical Kitchen Mock representation */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 border border-white/10 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="rounded-lg bg-gold-500/90 px-2.5 py-1 text-[11px] font-bold text-white flex items-center gap-1">
                    <Sparkles className="size-3" />
                    국산 오로라 인조대리석
                  </span>
                  <span className="rounded-lg bg-black/50 px-2.5 py-1 text-[11px] text-white/80">
                    E0 친환경 가구
                  </span>
                </div>

                <div className="space-y-2 text-center my-auto">
                  <div className="h-4 w-2/3 mx-auto rounded-full bg-white/20" />
                  <div className="h-14 w-full rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-gold-200">
                    [상판교체 · 사각싱크볼 · 하부장 리폼]
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="h-2 w-12 rounded bg-gold-400/60" />
                    <span className="h-2 w-12 rounded bg-gold-400/60" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/70 border-t border-white/10 pt-3">
                  <span>무먼지 집진기 샌딩</span>
                  <span className="text-gold-300 font-semibold">당일 시공 완료</span>
                </div>
              </div>

              {/* 3 Key Check items */}
              <div className="mt-6 space-y-2.5">
                {[
                  '상담부터 실측, 현장 시공까지 대표 1인 책임 시공',
                  '국산 정품 인조대리석 & E0 친환경 자재 사용',
                  '사진 3장 전송 시 추가 비용 없는 투명한 정찰 견적',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-white/85">
                    <Check className="size-4 shrink-0 text-gold-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 rounded-2xl bg-gold-500 px-4 py-2.5 text-xs font-bold text-white shadow-xl flex items-center gap-1.5">
              <Award className="size-4" />
              1년 무상 품질보증
            </div>
          </div>
          </ManagedMedia>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: STATS BANNER (Clean House 4-Column Metric Bar) */}
      {/* ======================================================== */}
      <section className="border-b border-brand-200 bg-brand-50 py-12">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((st, i) => (
            <div key={i} className="space-y-1.5">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-900">
                {st.value}
              </p>
              <p className="text-xs sm:text-sm text-brand-500 font-medium">{st.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: SERVICES (With Interactive Tab Filter) */}
      {/* ======================================================== */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600 mb-2">
                SERVICE
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-900 leading-tight">
                전체를 바꾸지 않아도
                <br />
                되는 작업이 많습니다
              </h2>
              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-brand-600">
                상판만, 하부장만, 문짝만 바꿔도 되는 현장이 대부분입니다.
                사진을 보내 주시면 남길 수 있는 부분과 바꿔야 할 부분을 명확히 구분하여 거품 없는 합리적 견적을 제안합니다.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 hover:text-gold-700 transition"
            >
              서비스 전체 상세 보기
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Interactive Service Filter Grid Component */}
          <ServiceFilterGrid />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: THE 3 PROMISES & WHY CHOOSE US (Dark Section) */}
      {/* ======================================================== */}
      <section className="relative isolate overflow-hidden bg-brand-900 py-20 lg:py-28 text-white">
        <div className="dark-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-gold-500/10 blur-[140px]" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <SectionHeading
            eyebrow="PROMISE &amp; WHY"
            title="저희가 지키는 세 가지와 다른 점"
            description="하청이나 대리점 마진 없이 대표가 직접 상담, 실측, 시공을 일괄 진행하여 오차와 소통 오류를 차단합니다."
            invert
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Promise 1 */}
            <div className="rounded-3xl border border-white/15 bg-white/5 p-7 sm:p-8 backdrop-blur-sm space-y-4 hover:border-gold-400 transition-colors">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gold-500 text-white font-black text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-white">매 현장 100% 만족을 목표로</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/75">
                현장마다 고객님의 100% 이상 만족을 목표로 작업합니다.
                마감의 미세한 단차와 디테일에서 차이가 난다고 자신 있게 말씀드립니다.
              </p>
              <div className="pt-2 text-xs font-semibold text-gold-300">
                ✓ 정밀 레이저 수평 실측 및 무먼지 샌딩
              </div>
            </div>

            {/* Promise 2 */}
            <div className="rounded-3xl border border-white/15 bg-white/5 p-7 sm:p-8 backdrop-blur-sm space-y-4 hover:border-gold-400 transition-colors">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gold-500 text-white font-black text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-white">사진 없이는 견적 안내 불가</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/75">
                지금 상태의 사진을 보지 않고 대략적인 금액을 말씀드리면 현장에서 비용이 올라갈 수밖에 없습니다.
                사진 3장을 보고 확인한 뒤 추가 비용 없는 확실한 견적을 안내합니다.
              </p>
              <div className="pt-2 text-xs font-semibold text-gold-300">
                ✓ 현장 방문 전 10분 내 정직한 정찰 견적
              </div>
            </div>

            {/* Promise 3 */}
            <div className="rounded-3xl border border-white/15 bg-white/5 p-7 sm:p-8 backdrop-blur-sm space-y-4 hover:border-gold-400 transition-colors">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gold-500 text-white font-black text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-white">국산 정품 &amp; 친환경 E0 자재</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/75">
                인조대리석은 국산과 중국산으로 나뉩니다. 클린하우스는 변색과 열탕 충격에 강한 국산 대리석과 폼알데하이드 걱정 없는 E0 가구 보드만을 고집합니다.
              </p>
              <div className="pt-2 text-xs font-semibold text-gold-300">
                ✓ 1년 무상 품질보증 A/S 보증서 발급
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: BEFORE & AFTER SHOWCASE (Interactive Slider) */}
      {/* ======================================================== */}
      <section id="cases" className="py-20 lg:py-28 bg-brand-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <SectionHeading
            eyebrow="BEFORE &amp; AFTER"
            title="실제 시공 전후 비교와 포트폴리오"
            description="상판만 교체하거나 하부장만 바꿨을 때 주방이 어떻게 변하는지 확인해 보세요."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Interactive Before & After Slider */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider />
            </div>

            {/* Case Details Card */}
            <div className="lg:col-span-5 space-y-6 bg-white p-7 sm:p-9 rounded-3xl border border-brand-200 shadow-md">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-3.5 py-1 text-xs font-bold text-gold-600 border border-gold-200">
                <Flame className="size-3.5 text-gold-500" />
                대표 시공 사례
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-brand-900 leading-snug">
                {cases[0].title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-brand-600">
                {cases[0].summary}
              </p>

              <div className="space-y-2.5 border-t border-brand-100 pt-4">
                <p className="text-xs font-bold text-brand-900">핵심 시공 공정:</p>
                {cases[0].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-600">
                    <Check className="size-4 shrink-0 text-gold-500 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/cases"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-xs font-bold text-white transition hover:bg-gold-500"
                >
                  시공 사례 더보기
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="#quote-section"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-xs font-bold text-brand-700 hover:border-gold-500 transition"
                >
                  이 사례처럼 견적 받기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: SMART 4-STEP PROCESS ( 문의부터 A/S까지 ) */}
      {/* ======================================================== */}
      <section id="process" className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <SectionHeading
            eyebrow="PROCESS"
            title="문의부터 A/S까지 스마트 4단계"
            description="복잡한 절차 없이 사진 전송부터 깔끔한 당일 시공까지 원스톱으로 진행됩니다."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <div
                key={step.num}
                className="relative rounded-3xl border border-brand-200 bg-brand-50/50 p-7 transition-all duration-300 hover:border-gold-400 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-brand-900 text-sm font-black text-gold-400">
                  {step.num}
                </div>
                <h3 className="mb-2.5 text-lg font-bold text-brand-900">{step.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-brand-600">{step.body}</p>

                {idx < 3 && (
                  <span className="absolute top-1/2 -right-3 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full bg-gold-500 text-white shadow-md lg:flex">
                    <ChevronRight className="size-4" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 7: INTERACTIVE PHOTO QUOTE FORM (User Customizable) */}
      {/* ======================================================== */}
      <section id="quote-section" className="py-20 lg:py-28 bg-brand-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Embedded Modular Interactive Quote Box */}
          <QuickPhotoQuoteForm />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 8: SHORT-FORM REELS & VIDEO HIGHLIGHTS */}
      {/* ======================================================== */}
      <section id="reels" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600 mb-2">
                REELS &amp; VIDEO
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-900">
                현장에서 찍은 짧은 영상
              </h2>
              <p className="mt-3 text-sm sm:text-base text-brand-600">
                상판을 어떻게 실측하고 교체하는지 실제 현장 작업 과정을 영상으로 확인해 보세요.
              </p>
            </div>

            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-2.5 text-xs font-bold text-brand-800 transition hover:border-gold-500 hover:text-gold-600"
            >
              SNS 연결 예시 보기 →
            </a>
          </div>

          {/* Interactive Reels Modal & Cards */}
          <ReelsModal />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 9: SERVICE AREAS & RECENT FIELD RECORDS */}
      {/* ======================================================== */}
      <section id="areas" className="py-20 lg:py-28 bg-brand-50 border-y border-brand-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <SectionHeading
            eyebrow="SERVICE AREA &amp; RECORDS"
            title="부산·경남·경북 어디든 방문합니다"
            description="사전 사진 상담 후 영남권 전 지역을 대표가 직접 방문하여 실측 및 시공해 드립니다."
          />

          {/* Regional Chips Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-brand-200 bg-white p-5 transition hover:border-gold-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold text-sm sm:text-base text-brand-900">{area.name}</p>
                  <span className="rounded-full bg-gold-50 px-2 py-0.5 text-[11px] font-bold text-gold-600 border border-gold-200">
                    {area.count}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] text-brand-500">{area.note}</p>
              </div>
            ))}
          </div>

          {/* Recent Field Journals */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-900 flex items-center gap-2">
              <Layers className="size-5 text-gold-500" />
              모든 현장을 꼼꼼한 기록으로 남깁니다
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {journal.map((item) => (
                <Link
                  key={item.id}
                  href="/blog"
                  className="rounded-2xl border border-brand-200 bg-white p-6 transition hover:border-gold-500 hover:shadow-lg group"
                >
                  <span className="text-[10px] font-bold tracking-wider text-gold-600">
                    {item.day} · {item.category}
                  </span>
                  <h4 className="mt-2 mb-2 text-base font-bold text-brand-900 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-600 leading-relaxed">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-800 group-hover:text-gold-600">
                    작업 노트 읽기 <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 10: FAQ (Frequently Asked Questions) */}
      {/* ======================================================== */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="FAQ"
              title="자주 묻는 질문"
              description="싱크대 부분 교체 및 맞춤가구 제작 전 가장 많이 물어보시는 질문들을 모았습니다."
            />

            {/* Quick Contact Box */}
            <div className="rounded-3xl border border-brand-800 bg-brand-900 p-7 text-white space-y-4">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-gold-500 text-white">
                <Phone className="size-5" />
              </div>
              <h3 className="text-lg font-bold">궁금하신 점이 더 있으신가요?</h3>
              <p className="text-xs leading-relaxed text-white/75">
                현장 사진 3장을 문자로 보내주시면 가장 빠르고 정확하게 안내받으실 수 있습니다.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={brand.telHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-xs font-bold text-white hover:bg-gold-600 transition"
                >
                  <Phone className="size-3.5" />
                  전화 문의
                </a>
                <Link
                  href="/qna"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition"
                >
                  온라인 Q&amp;A 질문 남기기
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 11: FINAL DIRECT CTA BANNER */}
      {/* ======================================================== */}
      <section className="bg-brand-900 py-16 text-white border-t border-brand-800">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
              DIRECT CONSULTATION
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              주방 부분 교체, 사진 3장이면 충분합니다
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              가까이 1장, 멀리 1장 사진과 지역만 알려주시면 대표가 직접 확인 후 전화드립니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={brand.telHref}
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:bg-gold-600 transition"
            >
              <Phone className="size-4" />
              {brand.phone} 전화 상담
            </a>
            <a
              href={brand.smsHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition"
            >
              <MessageSquare className="size-4 text-gold-300" />
              문자로 사진 전송
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
