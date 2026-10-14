import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';
export default function InquiryFormPage(){return <><PageIntro eyebrow="견적 신청" title="견적 문의 폼" description="원본의 서비스/지역/일정/상세 내용 입력 순서를 참고한 데모입니다."/><div className="mx-auto w-full max-w-3xl px-4 py-14"><DemoForm mode="inquiry"/></div></>}
