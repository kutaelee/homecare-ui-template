import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';
export default function MockPayment(){return <><PageIntro eyebrow="결제 UI 예시" title="모의 입금 확인 화면" description="실제 계좌번호, 가맹점 계약, 이체·결제 로직은 전혀 포함되지 않습니다."/><div className="mx-auto w-full max-w-3xl px-4 py-14"><DemoForm mode="payment"/></div></>}
