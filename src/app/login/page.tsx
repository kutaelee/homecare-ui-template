import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';

export default function LoginPage() {
  return (
    <>
      <PageIntro
        eyebrow="계정"
        title="회원 / 관리자 로그인"
        description="시공 일정 및 고객 견적 내역 조회를 위한 가상 인증 화면입니다."
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <DemoForm mode="login" />
        </div>
      </div>
    </>
  );
}
