import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, UserCheck } from 'lucide-react';
import PageIntro from '@/components/PageIntro';

const questions = [
  {
    id: 'sample-question-01',
    title: '부산 기장군 정관읍도 출장 실측 및 시공 가능한가요?',
    questionBody: '신축 입주 아파트인데 냉장고장 리폼과 사각싱크볼 교체를 희망합니다. 기장군 정관읍 지역도 출장비 없이 방문 실측이 가능한지 궁금합니다.',
    answerBody: '안녕하세요, 클린하우스 대표입니다. 네, 부산 기장군 정관읍을 포함한 부산·경남 전 지역 모두 방문 실측 및 시공 가능합니다. 시공할 곳 사진 2장과 함께 문자로 보내주시면 10분 내 예상 견적을 안내드리고 실측 일정을 잡아드립니다.',
  },
  {
    id: 'sample-question-02',
    title: '상판 갈라진 틈새로 물이 새는데 당일 보수가 가능한가요?',
    questionBody: '가스레인지 옆 상판에 20cm 정도 금이 가서 하부장으로 물이 조금씩 스며듭니다. 전체를 안 바꾸고 그 부분만 보수가 가능한가요?',
    answerBody: '네, 인조대리석 크랙 접합 보수 작업은 약 1~2시간 내외로 당일 완벽하게 복원 가능합니다. 동일 자재 조각과 고강도 수지를 주입하여 샌딩 연마하므로 이음매 흔적 없이 튼튼하게 사용하실 수 있습니다.',
  },
  {
    id: 'sample-question-03',
    title: '냉장고장 리폼 시 비스포크 4도어 규격 관련 비공개 문의',
    questionBody: '냉장고장 중앙 기둥 철거 후 틈새 없이 비스포크 냉장고와 김치냉장고를 나란히 배치하고 싶습니다.',
    answerBody: '중앙 기둥 철거 시 상부 처짐을 방지하는 특수 보강 작업을 진행한 후 가전 규격에 꼭 맞게 제작해 드립니다. 도면과 함께 상세 견적을 문자로 안내해 드렸습니다.',
  },
  {
    id: 'sample-question-04',
    title: '상부장은 두고 하부장만 교체할 때 색상 매칭이 가능한가요?',
    questionBody: '상부장은 깨끗한데 하부장만 물에 썩었습니다. 하부장만 무광 화이트로 교체해도 어색하지 않을까요?',
    answerBody: '네, 하부장만 무광 PET 화이트나 모던 그레이 등으로 교체하시면 상하부 투톤 느낌으로 오히려 세련된 주방이 연출됩니다. 자재 샘플북을 현장에 가져가서 확인해 드립니다.',
  },
];

export function generateStaticParams() {
  return questions.map((q) => ({ id: q.id }));
}

export default async function QnaDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const q = questions.find((x) => x.id === id);
  if (!q) notFound();

  return (
    <>
      <PageIntro eyebrow="Q&amp;A 상세" title={q.title} description="고객 상담 질문 및 대표 답변" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <article className="max-w-4xl mx-auto space-y-6">
          {/* Question Box */}
          <div className="rounded-3xl border border-brand-200 bg-white p-8 sm:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-brand-50 text-xs font-bold text-gold-600">
                Q
              </span>
              <span className="text-xs font-semibold text-brand-500">고객 질문</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-900 leading-snug">
              {q.title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-brand-700 pt-2">
              {q.questionBody}
            </p>
          </div>

          {/* Answer Box */}
          <div className="rounded-3xl border border-gold-300 bg-brand-50 p-8 sm:p-10 shadow-md space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-gold-500 text-xs font-bold text-white">
                A
              </span>
              <span className="text-xs font-bold text-gold-600 flex items-center gap-1">
                <UserCheck className="size-3.5" />
                클린하우스 대표 직접 답변
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-brand-800">
              {q.answerBody}
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <Link
              href="/qna"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-900 hover:text-gold-600 transition"
            >
              <ArrowLeft className="size-4" />
              질문 목록으로 돌아가기
            </Link>
            <Link
              href="/inquiry/new"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-gold-600 transition"
            >
              사진 견적 직접 신청하기
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
