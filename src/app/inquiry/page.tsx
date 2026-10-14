import Link from 'next/link';
import { ArrowRight, ClipboardList } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
export default function InquiryIndex(){return <><PageIntro eyebrow="견적 문의" title="문의 화면 구성" description="고객 정보 저장이나 연락처 전송 없이 입력 흐름을 시연하는 페이지입니다."/><div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-18 text-center"><ClipboardList className="mb-6 size-16 text-primary"/><h2 className="text-2xl font-extrabold">샘플 견적 요청 폼</h2><p className="mt-4 text-sm leading-7 text-soft-gray">서비스 항목, 희망 일정, 질문 등 폼 구성을 살펴볼 수 있습니다.</p><Link href="/inquiry/new" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-bold text-white">작성 UI 보기 <ArrowRight className="size-4"/></Link></div></>}
