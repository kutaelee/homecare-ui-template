import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';

export default function QnaNew() {
  return (
    <>
      <PageIntro
        eyebrow="Q&amp;A 작성"
        title="시공 상담 질문 작성하기"
        description="싱크대 시공, 자재 스펙, 일정 등 궁금하신 점을 남겨주시면 대표가 직접 확인 후 안내해 드립니다."
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <DemoForm mode="qna" />
        </div>
      </div>
    </>
  );
}
