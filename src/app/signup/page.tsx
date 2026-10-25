import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';

export default function SignupPage() {
  return (
    <>
      <PageIntro
        eyebrow="계정"
        title="회원가입"
        description="시공 일정 알림 및 A/S 보증서 간편 조회를 위한 가상 등록 화면입니다."
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <DemoForm mode="signup" />
        </div>
      </div>
    </>
  );
}
