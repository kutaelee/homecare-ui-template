import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';
export default function SignupPage(){return <><PageIntro eyebrow="계정" title="회원가입 UI" description="가입 절차 디자인만 보여주며 실제 계정은 생성되지 않습니다."/><div className="mx-auto w-full max-w-xl px-4 py-14"><DemoForm mode="signup"/></div></>}
