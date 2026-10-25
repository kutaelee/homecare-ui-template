import Link from 'next/link';
import { ArrowRight, LockKeyhole, MessageCircleQuestion, Plus } from 'lucide-react';
import PageIntro from '@/components/PageIntro';

const questions = [
  { id: 'sample-question-01', title: '부산 기장군 정관읍도 출장 실측 및 시공 가능한가요?', category: '시공 지역', state: '답변 완료' },
  { id: 'sample-question-02', title: '상판 갈라진 틈새로 물이 새는데 당일 보수가 가능한가요?', category: '크랙 보수', state: '답변 완료' },
  { id: 'sample-question-03', title: '냉장고장 리폼 시 비스포크 4도어 규격 관련 비공개 문의', category: '맞춤가구', state: '비공개 답변' },
  { id: 'sample-question-04', title: '상부장은 두고 하부장만 교체할 때 색상 매칭이 가능한가요?', category: '하부장 리폼', state: '답변 완료' },
];

export default function QnaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Q&amp;A"
        title="고객 질문과 답변 게시판"
        description="싱크대 시공, 자재 선택, 견적과 관련된 궁금한 점을 질문하고 답변을 확인하실 수 있습니다."
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-brand-600 font-medium">총 {questions.length}건의 상담 질문</p>
          <Link
            href="/qna/new"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-xs font-bold text-white shadow hover:bg-gold-600 transition"
          >
            <Plus className="size-4" />
            새 질문 작성하기
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-brand-200 bg-white shadow-sm">
          {questions.map((q, i) => (
            <Link
              key={q.id}
              href={`/qna/${q.id}`}
              className="flex items-center gap-5 border-b border-brand-100 p-6 sm:p-7 transition last:border-0 hover:bg-brand-50/60"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-50 text-gold-600 border border-brand-200/60">
                {i === 2 ? <LockKeyhole className="size-5" /> : <MessageCircleQuestion className="size-5" />}
              </span>

              <span className="flex-1">
                <span className="inline-block rounded-full bg-gold-50 px-2.5 py-0.5 text-[11px] font-bold text-gold-600 border border-gold-200">
                  {q.category} · {q.state}
                </span>
                <b className="mt-1.5 block text-base font-bold text-brand-900">{q.title}</b>
              </span>

              <ArrowRight className="size-4 text-brand-400 group-hover:text-gold-500" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
