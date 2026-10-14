import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';
export default function QnaNew(){return <><PageIntro eyebrow="Q&A 작성" title="샘플 질문 작성 폼" description="모든 입력은 전송되지 않는 프런트엔드 UI 시연입니다."/><div className="mx-auto w-full max-w-3xl px-4 py-14"><DemoForm mode="qna"/></div></>}
