import PageIntro from '@/components/PageIntro';
import QuickPhotoQuoteForm from '@/components/QuickPhotoQuoteForm';
import { brand } from '@/data/demo';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export default function InquiryFormPage() {
  return (
    <>
      <PageIntro
        eyebrow="견적 문의"
        title="사진 견적 신청"
        description="싱크대 상판·하부장·맞춤가구 시공할 곳 사진 2~3장을 보내 주시면 대표가 직접 확인 후 10분 내 예상 견적을 안내해 드립니다."
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <QuickPhotoQuoteForm />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-brand-200 bg-white p-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                QUICK CONTACT
              </span>
              <h3 className="text-xl font-bold text-brand-900">전화 또는 문자가 더 편하신가요?</h3>
              <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
                웹 양식 작성이 번거로우시다면 휴대폰 문자로 바로 사진을 전송해 주셔도 동일하게 신속히 견적을 안내해 드립니다.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={brand.smsHref}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gold-500 py-3.5 text-xs font-bold text-white shadow hover:bg-gold-600 transition"
                >
                  <MessageSquare className="size-4" />
                  문자로 바로 사진 보내기
                </a>
                <a
                  href={brand.telHref}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl border border-brand-200 bg-brand-50 py-3.5 text-xs font-bold text-brand-900 hover:border-gold-500 transition"
                >
                  <Phone className="size-4 text-gold-500" />
                  {brand.phone} 전화 연결
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-200 bg-brand-50 p-6 space-y-3 text-xs text-brand-700">
              <b className="block text-sm font-bold text-brand-900">견적 신청 팁:</b>
              <p className="flex items-start gap-2">
                <ShieldCheck className="size-4 shrink-0 text-gold-500 mt-0.5" />
                <span>가까이서 1장(문제 부위), 전체 모습 1장(주방 전경)을 찍어주시면 가장 정확합니다.</span>
              </p>
              <p className="flex items-start gap-2">
                <ShieldCheck className="size-4 shrink-0 text-gold-500 mt-0.5" />
                <span>작업할 지역(예: 부산 해운대, 양산 물금 등)을 꼭 함께 알려주세요.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
