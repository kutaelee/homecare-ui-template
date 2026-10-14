import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';
export default function LoginPage(){return <><PageIntro eyebrow="계정" title="로그인 UI" description="인증 서버와 연결되지 않은 레이아웃 데모입니다. 실제 계정 비밀번호를 입력하지 마세요."/><div className="mx-auto w-full max-w-xl px-4 py-14"><DemoForm mode="login"/></div></>}
