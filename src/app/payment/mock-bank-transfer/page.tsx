import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';

export default function MockPayment() {
  return (
    <>
      <PageIntro
        eyebrow="결제 안내"
        title="시공 계약금 및 잔금 결제 안내"
        description="시공 후 검수 완료 후 결제가 진행되며, 실제 운영 시 PG사 연동 코드로 교체할 수 있습니다."
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <DemoForm mode="payment" />
        </div>
      </div>
    </>
  );
}
