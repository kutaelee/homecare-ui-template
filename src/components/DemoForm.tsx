'use client';
import { useState } from 'react';
import { CheckCircle2, Info, SendHorizonal } from 'lucide-react';
import { services } from '@/data/demo';
type Mode = 'inquiry'|'reservation'|'qna'|'login'|'signup'|'payment';
const fields:{[K in Mode]:Array<{label:string;name:string;kind?:'select'|'textarea'|'date'|'time'|'email'|'password';optional?:boolean}>} = {
 inquiry:[{label:'이름(샘플)',name:'name'},{label:'연락처(샘플)',name:'contact'},{label:'관심 서비스',name:'service',kind:'select'},{label:'서비스 지역(샘플)',name:'area'},{label:'요청 일정(샘플)',name:'date',kind:'date',optional:true},{label:'문의 내용',name:'details',kind:'textarea'}],
 reservation:[{label:'이름(샘플)',name:'name'},{label:'연락처(샘플)',name:'contact'},{label:'관심 서비스',name:'service',kind:'select'},{label:'방문 희망 날짜',name:'date',kind:'date'},{label:'선호 시간',name:'time',kind:'time'},{label:'추가 요청 사항',name:'details',kind:'textarea',optional:true}],
 qna:[{label:'닉네임(샘플)',name:'name'},{label:'질문 제목',name:'title'},{label:'관련 서비스',name:'service',kind:'select'},{label:'질문 내용',name:'details',kind:'textarea'}],
 login:[{label:'이메일(샘플)',name:'email',kind:'email'},{label:'비밀번호(샘플)',name:'password',kind:'password'}],
 signup:[{label:'닉네임(샘플)',name:'name'},{label:'이메일(샘플)',name:'email',kind:'email'},{label:'비밀번호(샘플)',name:'password',kind:'password'}],
 payment:[{label:'예약 번호(샘플)',name:'reservation'},{label:'입금자 표시명(샘플)',name:'name'},{label:'금액(샘플)',name:'amount'}]
};
export default function DemoForm({mode}:{mode:Mode}){
 const [done,setDone]=useState(false);
 const [agree,setAgree]=useState(false);
 return <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm md:p-9">
  <div className="mb-8 flex gap-3 rounded-2xl border border-info-blue bg-info-blue/35 px-5 py-4 text-xs leading-6 text-primary"><Info className="mt-0.5 size-5 shrink-0"/><span><b>프런트엔드 시연 전용</b><br/>실제 이름·연락처·비밀번호·결제 정보를 입력하지 마세요. 데이터는 저장되거나 서버로 전송되지 않습니다.</span></div>
  {done ? <div aria-live="polite" className="py-13 text-center"><CheckCircle2 className="mx-auto mb-5 size-12 text-primary"/><h2 className="text-2xl font-extrabold">화면 시연이 완료되었습니다</h2><p className="mt-3 text-sm leading-7 text-soft-gray">제출 동작을 시뮬레이션했습니다. 서버 저장, 문자 발송, 예약, 회원 생성, 결제는 수행되지 않았습니다.</p><button type="button" onClick={()=>{setDone(false);setAgree(false)}} className="mt-6 rounded-full bg-primary px-7 py-3 text-sm font-bold text-white">입력 화면 다시 보기</button></div> : <form onSubmit={e=>{e.preventDefault();setDone(true)}} className="space-y-6">
    <div className="grid gap-5 sm:grid-cols-2">{fields[mode].map(f=><label key={f.name} className={`block ${f.kind==='textarea'?'sm:col-span-2':''}`}><span className="mb-2 block text-xs font-extrabold text-charcoal">{f.label}{f.optional&&<span className="ml-1 text-soft-gray">(선택)</span>}</span>{f.kind==='select'?<select required className="h-12 w-full rounded-xl border border-brand-border bg-white px-4 text-sm" defaultValue=""><option value="" disabled>예시 항목 선택</option>{services.map(s=><option key={s.slug} value={s.slug}>{s.title}</option>)}</select>:f.kind==='textarea'?<textarea required={!f.optional} rows={5} className="w-full rounded-xl border border-brand-border bg-white p-4 text-sm" placeholder="샘플 메시지를 입력하세요"/>:<input required={!f.optional} type={f.kind&&f.kind!=='select'?f.kind:'text'} autoComplete="off" className="h-12 w-full rounded-xl border border-brand-border bg-white px-4 text-sm" placeholder="샘플 값만 입력"/>}</label>)}</div>
    <label className="flex items-center gap-3 rounded-xl bg-light-beige/45 p-4 text-xs text-charcoal"><input type="checkbox" required checked={agree} onChange={e=>setAgree(e.target.checked)} className="size-4 accent-primary"/><span>실제 정보는 입력하지 않으며 이 화면이 데모라는 점을 확인했습니다.</span></label>
    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white hover:bg-primary-hover"><SendHorizonal className="size-4"/>시연 완료 화면 보기</button>
   </form>}
 </div>;
}
