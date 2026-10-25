import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import FAQAccordion from '@/components/FAQAccordion';
import { brand } from '@/data/demo';

export default function FAQPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="자주 묻는 질문"
        description="싱크대 부분 교체 및 맞춤가구 제작 전 고객님들께서 가장 많이 문의하시는 점들을 모았습니다."
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <FAQAccordion />
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl border border-brand-800 bg-brand-900 p-8 text-white space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                1:1 DIRECT INQUIRY
              </span>
              <h2 className="text-2xl font-bold">궁금한 점이 남아있으신가요?</h2>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                작업할 주방 사진을 문자로 보내주시면 대표가 직접 확인하고 상세하게 상담해 드립니다.
              </p>

              <div className="space-y-2.5 pt-3">
                <a
                  href={brand.telHref}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gold-500 py-3.5 text-xs font-bold text-white hover:bg-gold-600 transition"
                >
                  <Phone className="size-4" />
                  {brand.phone} 바로 통화
                </a>
                <a
                  href={brand.smsHref}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition"
                >
                  <MessageSquare className="size-4 text-gold-300" />
                  문자로 사진 문의하기
                </a>
                <Link
                  href="/qna/new"
                  className="w-full block text-center rounded-2xl bg-white/5 py-3 text-xs text-white/80 hover:text-white"
                >
                  온라인 질문 남기기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
