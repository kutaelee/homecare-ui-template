import Link from 'next/link';
import { CalendarDays, ClipboardList, MessageSquareText, ShieldCheck } from 'lucide-react';
import PageIntro from '@/components/PageIntro';

export default function MyPage() {
  const cards = [
    {
      icon: ClipboardList,
      title: '사진 견적 신청 내역',
      text: '신청하신 싱크대 및 맞춤가구 견적 진행 상태를 확인합니다.',
      href: '/inquiry/new',
      linkText: '견적 화면 보기 →',
    },
    {
      icon: CalendarDays,
      title: '방문 실측 일정',
      text: '대표 직접 방문 실측 및 시공 일정을 조회합니다.',
      href: '/reservation',
      linkText: '실측 예약 화면 →',
    },
    {
      icon: ShieldCheck,
      title: '1년 무상 A/S 보증서',
      text: '시공 완료 후 발급된 디지털 품질 보증서를 관리합니다.',
      href: '/faq',
      linkText: 'A/S 규정 확인 →',
    },
    {
      icon: MessageSquareText,
      title: 'Q&A 질문 내역',
      text: '남겨주신 시공 및 자재 관련 답변을 확인합니다.',
      href: '/qna',
      linkText: '질문 목록 가기 →',
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow="마이페이지"
        title="고객 시공 관리 센터"
        description="시공 일정, 견적 내역, A/S 보증 상태를 한눈에 확인할 수 있는 대시보드 화면입니다."
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-brand-200 bg-white p-8 shadow-sm transition hover:border-gold-500 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-gold-600 mb-5 border border-brand-200/60">
                  <c.icon className="size-6" />
                </div>
                <h2 className="text-xl font-bold text-brand-900">{c.title}</h2>
                <p className="mt-2 text-xs sm:text-sm text-brand-600 leading-relaxed">{c.text}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-100">
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-1 text-xs font-bold text-gold-600 hover:text-gold-700"
                >
                  {c.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
