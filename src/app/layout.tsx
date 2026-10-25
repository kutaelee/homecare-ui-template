import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import MediaProvider from '@/components/MediaProvider';

export const metadata: Metadata = {
  title: '싱크대 교체·리폼·맞춤가구 전문 | Clean House 클린하우스',
  description:
    '싱크대 전체·부분교체부터 맞춤가구 제작·시공까지 대표가 직접 합니다. 상판교체, 사각싱크볼, 하부장, 후드, 냉장고장·홈바장까지 한 곳에서 해결. 1년 무상 A/S.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col bg-brand-50 pb-16 text-brand-900 md:pb-0">
        <MediaProvider>
        <SiteHeader />
        <main className="flex w-full flex-1 flex-col">{children}</main>
        <Footer />
        <StickyMobileCTA />
        </MediaProvider>
      </body>
    </html>
  );
}
