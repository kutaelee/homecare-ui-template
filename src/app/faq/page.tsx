import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import FAQAccordion from '@/components/FAQAccordion';
export default function FAQPage(){return <><PageIntro eyebrow="FAQ" title="자주 묻는 질문" description="가상의 질문과 답변을 통해 아코디언과 안내 카드 구조를 확인할 수 있습니다."/><div className="mx-auto w-full max-w-3xl px-4 py-15"><FAQAccordion/><div className="mt-10 rounded-3xl bg-primary p-8 text-center text-white"><h2 className="text-xl font-extrabold">찾는 항목이 없으신가요?</h2><p className="mt-3 mb-6 text-sm text-white/70">질문 작성 인터페이스를 살펴보세요. 제출 내용은 저장되지 않습니다.</p><Link href="/qna/new" className="rounded-full bg-brand-mint px-6 py-3 text-xs font-bold text-primary">Q&A 작성 화면</Link></div></div></>}
