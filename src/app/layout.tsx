import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
export const metadata: Metadata={
 title:'샘플 홈케어 | 공개용 UI 템플릿',
 description:'홈케어 서비스 웹사이트의 디자인과 화면 구조를 보여주는 비상업용 데모 템플릿입니다. 모든 콘텐츠는 가상입니다.',
 robots:{index:false,follow:false},
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="ko"><body className="flex min-h-screen flex-col bg-warm-white pb-16 text-charcoal md:pb-0"><SiteHeader/><main className="flex w-full flex-1 flex-col">{children}</main><Footer/><StickyMobileCTA/></body></html>
}
