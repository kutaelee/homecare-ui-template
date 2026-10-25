import Link from 'next/link';
import {
  ShieldCheck,
  ArrowRight,
  ClipboardList,
  CalendarDays,
  MessageSquare,
  BookOpen,
} from 'lucide-react';
import {
  adminInquiries,
  adminReservations,
  adminQna,
  adminCases,
  adminServices,
  adminFaqs,
} from '@/data/adminDemo';

const stats = [
  {
    title: '신규 사진 견적 접수',
    count: adminInquiries.filter((x) => x.status !== '답변완료').length,
    total: adminInquiries.length,
    href: '/admin/inquiries',
    icon: ClipboardList,
    color: 'bg-amber-50 text-gold-600',
  },
  {
    title: '방문 실측 대기 일정',
    count: adminReservations.filter((x) => x.status !== '예약확정').length,
    total: adminReservations.length,
    href: '/admin/reservations',
    icon: CalendarDays,
    color: 'bg-stone-100 text-brand-800',
  },
  {
    title: '미답변 Q&A 질문',
    count: adminQna.filter((x) => !x.answer).length,
    total: adminQna.length,
    href: '/admin/qna',
    icon: MessageSquare,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    title: '시공 사례 포트폴리오',
    count: adminCases.filter((x) => x.status === 'draft').length,
    total: adminCases.length,
    href: '/admin/cases',
    icon: BookOpen,
    color: 'bg-amber-100 text-amber-800',
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-brand-200 bg-white p-7 shadow-sm md:p-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
            CLEAN HOUSE MANAGEMENT
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-900 mt-1">
            클린하우스 마스터 대시보드
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-brand-600">
            사진 견적 접수, 방문 실측 일정, 시공 포트폴리오 및 Q&amp;A 관리 제어 센터입니다.
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-2xl border border-gold-300 bg-gold-50 px-4 py-2.5 text-xs font-bold text-gold-700">
          <ShieldCheck className="size-4" />
          대표 직접 운영 모드
        </span>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((x) => (
          <Link
            key={x.href}
            href={x.href}
            className="flex items-center justify-between rounded-3xl border border-brand-200 bg-white p-6 shadow-sm transition hover:border-gold-400 hover:shadow-md"
          >
            <div>
              <p className="text-xs font-semibold text-brand-500">{x.title}</p>
              <p className="mt-2 text-2xl font-bold text-brand-900">
                {x.count}건{' '}
                <small className="text-xs font-normal text-brand-400">/ 총 {x.total}건</small>
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-gold-600">
                목록 관리 <ArrowRight className="size-3" />
              </span>
            </div>
            <span className={`rounded-2xl p-3.5 ${x.color}`}>
              <x.icon className="size-6" />
            </span>
          </Link>
        ))}
      </div>

      {/* Two Column Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inquiries */}
        <div className="rounded-3xl border border-brand-200 bg-white p-7 shadow-sm">
          <div className="flex justify-between items-center border-b border-brand-100 pb-4">
            <h2 className="text-base font-bold text-brand-900">최근 접수된 사진 견적 문의</h2>
            <Link href="/admin/inquiries" className="text-xs font-bold text-gold-600 hover:underline">
              전체 보기 →
            </Link>
          </div>
          <div className="divide-y divide-brand-100">
            {adminInquiries.map((x) => (
              <div key={x.id} className="flex justify-between items-center py-4 text-xs">
                <div>
                  <b className="text-brand-900 text-sm">
                    {x.customer} ({x.area})
                  </b>
                  <p className="mt-1 text-brand-500">
                    {x.service} · {x.date}
                  </p>
                </div>
                <span className="rounded-full bg-gold-50 px-3 py-1 font-bold text-gold-700 border border-gold-200 text-[11px]">
                  {x.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reservations */}
        <div className="rounded-3xl border border-brand-200 bg-white p-7 shadow-sm">
          <div className="flex justify-between items-center border-b border-brand-100 pb-4">
            <h2 className="text-base font-bold text-brand-900">방문 실측 및 시공 일정</h2>
            <Link href="/admin/reservations" className="text-xs font-bold text-gold-600 hover:underline">
              전체 보기 →
            </Link>
          </div>
          <div className="divide-y divide-brand-100">
            {adminReservations.map((x) => (
              <div key={x.id} className="flex justify-between items-center py-4 text-xs">
                <div>
                  <b className="text-brand-900 text-sm">
                    {x.customer} ({x.area})
                  </b>
                  <p className="mt-1 text-brand-500">
                    {x.date} · {x.time}
                  </p>
                </div>
                <span className="rounded-full bg-brand-100 px-3 py-1 font-bold text-brand-800 text-[11px]">
                  {x.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Status */}
      <div className="rounded-3xl border border-brand-200 bg-white p-7">
        <h2 className="text-base font-bold text-brand-900">시공 콘텐츠 및 서비스 관리 현황</h2>
        <p className="mt-1 text-xs text-brand-600">
          시공 사례 {adminCases.length}건 · 서비스 항목 {adminServices.length}종 · FAQ {adminFaqs.length}건
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            className="rounded-full bg-brand-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-gold-500 transition"
            href="/admin/cases"
          >
            시공 사례 포트폴리오 관리
          </Link>
          <Link
            className="rounded-full border border-brand-200 px-5 py-2.5 text-xs font-bold text-brand-800 hover:border-gold-500 transition"
            href="/admin/services"
          >
            서비스 항목 설정
          </Link>
          <Link
            className="rounded-full border border-brand-200 px-5 py-2.5 text-xs font-bold text-brand-800 hover:border-gold-500 transition"
            href="/admin/faqs"
          >
            FAQ 관리
          </Link>
        </div>
      </div>
    </div>
  );
}
