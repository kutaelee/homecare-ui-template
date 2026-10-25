import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';
import { brand } from '@/data/demo';
import { CalendarDays, Phone, ShieldCheck } from 'lucide-react';

export default function ReservationPage() {
  return (
    <>
      <PageIntro
        eyebrow="방문 실측"
        title="현장 방문 실측 및 시공 일정 예약"
        description="대표가 직접 현장을 방문하여 레이저로 정밀 수평 실측하고 인조대리석 자재 샘플을 확인해 드립니다."
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <DemoForm mode="reservation" />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-brand-200 bg-white p-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                SCHEDULE GUIDE
              </span>
              <h3 className="text-xl font-bold text-brand-900">방문 실측 안내</h3>
              <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                실측 일정은 사전 사진 확인 후 대략적인 견적 범위에 동의하신 고객님에 한해 순차적으로 조율됩니다.
              </p>

              <div className="space-y-3 pt-2 text-xs text-brand-700">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-gold-500" />
                  <span>실측 소요 시간: 약 20분~30분</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-gold-500" />
                  <span>자재 샘플북(대리석/PET 도어) 현장 지참</span>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-100">
                <a
                  href={brand.telHref}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-brand-900 py-3.5 text-xs font-bold text-white hover:bg-gold-500 transition"
                >
                  <Phone className="size-4" />
                  일정 유선 조율 ({brand.phone})
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
