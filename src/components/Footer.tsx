import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { brand, services } from '@/data/demo';
export default function Footer() {
 return <footer className="mt-auto border-t border-brand-border bg-[#e9eee6]">
  <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
   <div><div className="mb-3 flex items-center gap-2"><span className="flex size-9 items-center justify-center rounded-xl bg-primary font-extrabold text-brand-mint">S</span><b className="text-lg text-primary">{brand.name}</b></div><p className="max-w-sm text-xs leading-6 text-soft-gray">공개용 템플릿입니다. 회사명, 주소, 전화번호, 고객 정보, 리뷰, 시공 사진, 외부 상담 링크 등 실제 운영 자료는 포함하지 않습니다.</p></div>
   <div><b className="mb-4 block text-sm text-primary">둘러보기</b><div className="grid grid-cols-2 gap-3 text-xs text-charcoal/80">{services.map(s=><Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}<Link href="/cases">사례 갤러리</Link><Link href="/faq">FAQ</Link><Link href="/qna">Q&A</Link><Link href="/contact">문의 안내</Link></div></div>
   <div><b className="mb-4 block text-sm text-primary">템플릿 정보</b><p className="mb-4 text-xs leading-6 text-soft-gray">연락처/결제/회원가입/관리자 기능은 데모 UI입니다. 실제 신청이 접수되지 않습니다.</p><Link href="/admin" className="inline-flex items-center gap-1 text-xs font-bold text-primary">관리자 화면 구조 <ArrowUpRight className="size-3"/></Link></div>
  </div>
  <div className="border-t border-brand-border px-4 py-5 text-center text-[11px] text-soft-gray">© Sample Homecare Design Template · DEMONSTRATION ONLY · <Link className="underline" href="/terms">이용 안내</Link> · <Link className="underline" href="/privacy">개인정보 안내</Link><div className="mt-2 text-center text-[10px] tracking-wide text-soft-gray/65">Made by <a href="https://gyuforge.com/" target="_blank" rel="noopener noreferrer" className="font-medium underline-offset-2 transition-colors hover:text-primary hover:underline">GYUFORGE</a></div>
  </div>
 </footer>;
}
