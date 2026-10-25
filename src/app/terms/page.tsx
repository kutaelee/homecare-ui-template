import PageIntro from '@/components/PageIntro';

export default function Terms() {
  return (
    <>
      <PageIntro
        eyebrow="이용 안내"
        title="클린하우스 서비스 이용 안내"
        description="싱크대 시공 및 맞춤가구 제작 의뢰 시 진행되는 기본 안내 사항입니다."
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-8 rounded-3xl border border-brand-200 bg-white p-8 sm:p-12 shadow-sm text-sm leading-relaxed text-brand-700">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900">1. 시공 의뢰 및 견적 절차</h2>
            <p>
              클린하우스는 투명한 정찰 견적을 위해 현장 방문 전 사진(가까이 1장, 멀리 1장)을 통한 사전 상담을 원칙으로 합니다.
              사전 예상 견적에 동의하신 후 대표가 직접 방문하여 정밀 실측을 진행합니다.
            </p>
          </section>

          <section className="space-y-3 border-t border-brand-100 pt-6">
            <h2 className="text-xl font-bold text-brand-900">2. 품질 보증 및 1년 무상 A/S</h2>
            <p>
              시공 완료일로부터 1년간 정상적인 사용 환경에서 발생한 구조적 결함이나 하자에 대해 무상 A/S를 제공합니다.
              고객 과실로 인한 심한 충격이나 임의 개조의 경우 실비가 청구될 수 있습니다.
            </p>
          </section>

          <section className="space-y-3 border-t border-brand-100 pt-6">
            <h2 className="text-xl font-bold text-brand-900">3. 상용 전환 및 템플릿 개발자 안내</h2>
            <p>
              본 웹사이트는 프런트엔드 UI/UX 템플릿으로 제공되며, 실제 운영 시 상호, 사업자 정보, 결제 연동, 보안 인증 등을 각 업체의 실정에 맞게 교체하여 사용할 수 있도록 모듈화되어 있습니다.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
