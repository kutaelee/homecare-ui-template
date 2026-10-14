import PageIntro from '@/components/PageIntro';
import DemoForm from '@/components/DemoForm';
export default function ReservationPage(){return <><PageIntro eyebrow="방문 일정" title="방문 상담 및 예약 요청" description="날짜와 시간 입력 디자인 예시입니다. 선택한 시간은 예약 확정이 되지 않습니다."/><div className="mx-auto w-full max-w-3xl px-4 py-14"><DemoForm mode="reservation"/></div></>}
