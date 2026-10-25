import PageIntro from '@/components/PageIntro';

export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="개인정보 안내"
        title="개인정보 수집 및 처리 안내"
        description="시공 견적 상담 및 방문 실측 예약을 위해 수집하는 정보에 대한 안내입니다."
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-8 rounded-3xl border border-brand-200 bg-white p-8 sm:p-12 shadow-sm text-sm leading-relaxed text-brand-700">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900">1. 수집하는 개인정보 항목</h2>
            <p>
              시공 상담 및 견적 안내를 위해 고객명, 연락처(전화번호), 시공 희망 지역, 현장 사진을 수집합니다.
              수집된 정보는 오직 견적 산출 및 방문 실측 일정 협의 목적으로만 활용됩니다.
            </p>
          </section>

          <section className="space-y-3 border-t border-brand-100 pt-6">
            <h2 className="text-xl font-bold text-brand-900">2. 보유 및 이용 기간</h2>
            <p>
              원칙적으로 상담 및 시공 완료 후 목적이 달성되면 해당 정보를 지체 없이 파기합니다.
              단, 1년 무상 A/S 보증 내역 관리를 위해 필요한 최소한의 정보는 보증 기간 종료 시까지 안전하게 보관됩니다.
            </p>
          </section>

          <section className="space-y-3 border-t border-brand-100 pt-6">
            <h2 className="text-xl font-bold text-brand-900">3. 템플릿 환경 안내</h2>
            <p>
              본 템플릿의 프런트엔드 데모 폼에 입력된 값은 브라우저 메모리상에서만 동작하며 외부 서버로 자동 전송되지 않습니다.
              실제 서비스 운영 환경 전환 시 SSL 암호화 통신 및 정식 개인정보처리방침을 적용하여 운영하시기 바랍니다.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
