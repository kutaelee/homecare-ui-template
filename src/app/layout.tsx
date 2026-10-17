import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'サンプルホームケア | 日本語版 UI テンプレート',description:'ホームケアサービスのウェブサイトと管理画面を再現した日本語の独立デモ。掲載内容はすべて架空です。',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body className="min-h-screen bg-warm-white text-charcoal">{children}</body></html>}
