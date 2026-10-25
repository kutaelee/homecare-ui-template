import Link from 'next/link';
import { Clock, MapPin, Phone, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import { brand } from '@/data/demo';

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="문의 안내"
        title="클린하우스 시공 상담 및 방문 안내"
        description="부산, 울산, 양산, 김해, 창원, 대구, 경주 등 영남 전역 방문 시공. 사전 사진 확인 후 대표가 직접 방문합니다."
      />

      <div id="demo-contact" className="mx-auto mt-8 w-full max-w-3xl scroll-mt-28 rounded-2xl border border-gold-200 bg-gold-50 p-5 text-sm text-brand-900">
        <h2 className="font-bold">데모 연락처 안내</h2>
        <p className="mt-2">전화번호 {brand.phone}, 대표자 {brand.representative}, 사업자번호 {brand.businessNumber}는 예시입니다.</p>
        <p className="mt-2">주소: {brand.address}. 전화·문자·SNS는 실제 업체로 연결되지 않습니다. 견적 양식은 제출 화면만 시연합니다.</p>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl border border-brand-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-brand-900">시공 및 상담 운영 정보</h2>

              <div className="grid gap-6 sm:grid-cols-2 pt-2">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-gold-600">
                    <MapPin className="size-4" />
                    방문 시공 지역
                  </div>
                  <p className="text-sm text-brand-900 font-medium">{brand.region}</p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-gold-600">
                    <Clock className="size-4" />
                    상담 가능 시간
                  </div>
                  <p className="text-sm text-brand-900 font-medium">{brand.schedule}</p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-gold-600">
                    <Phone className="size-4" />
                    대표 전화
                  </div>
                  <p className="text-sm text-brand-900 font-bold">{brand.phone}</p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-gold-600">
                    <ShieldCheck className="size-4" />
                    품질 보증
                  </div>
                  <p className="text-sm text-brand-900 font-medium">{brand.warranty}</p>
                </div>
              </div>
            </div>

            {/* Service Region Graphic Mock */}
            <div className="rounded-3xl border border-brand-200 bg-brand-50 p-8 sm:p-10 flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-2">
                VISITING COVERAGE
              </span>
              <h3 className="text-xl font-bold text-brand-900 mb-3">
                사전 사진 상담 후 일정 조율하여 출장 방문합니다
              </h3>
              <p className="text-xs sm:text-sm text-brand-600 leading-relaxed mb-6">
                현장 시공은 100% 예약제로 운영되며, 대표가 직접 실측 장비와 샘플 북을 지참하여 방문드립니다.
                작업 중에는 소음으로 인해 통화가 어려울 수 있으니 사진과 지역을 문자로 남겨주시면 감사하겠습니다.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={brand.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3.5 text-xs font-bold text-white hover:bg-gold-500 transition"
                >
                  <Phone className="size-4" />
                  전화 걸기 ({brand.phone})
                </a>
                <a
                  href={brand.smsHref}
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-xs font-bold text-white hover:bg-gold-600 transition"
                >
                  <MessageSquare className="size-4" />
                  문자로 사진 전송
                </a>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5 h-fit rounded-3xl border border-brand-800 bg-brand-900 p-8 sm:p-10 text-white space-y-6">
            <h2 className="text-2xl font-bold">견적 문의 전 준비사항</h2>
            <p className="text-xs sm:text-sm leading-relaxed text-white/75">
              아래 세 가지만 준비해 주시면 현장 방문 전에도 정확한 정찰 견적을 받아보실 수 있습니다.
            </p>

            <ol className="space-y-4 pt-2">
              {[
                { title: '가까이서 1장', desc: '갈라진 틈, 썩은 하부장 바닥, 교체할 싱크볼 확대 사진' },
                { title: '멀리서 1장', desc: '주방 싱크대 전체 모습과 상·하부장 구조가 보이는 전경 사진' },
                { title: '시공 희망 지역', desc: '아파트 단지명 또는 동/구 단위 지역명' },
                { title: '원하시는 구성', desc: '상판만 / 하부장만 / 사각싱크볼 함께 교체 여부 등' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 border-b border-white/10 pb-3.5 text-xs sm:text-sm">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold-500 font-bold text-white text-xs">
                    0{idx + 1}
                  </span>
                  <div>
                    <b className="text-white block">{item.title}</b>
                    <span className="text-white/60 text-xs">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              href="/inquiry/new"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gold-500 py-4 text-xs font-bold text-white hover:bg-gold-600 transition"
            >
              온라인 사진 견적 신청하기
              <ArrowRight className="size-4" />
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
