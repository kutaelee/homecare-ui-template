import Link from 'next/link';
export default function NotFound(){return <div className="mx-auto max-w-xl px-5 py-28 text-center"><h1 className="text-4xl font-black">404</h1><p className="mt-5 text-sm text-soft-gray">ページが見つかりません。</p><Link href="/" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-bold text-white">トップへ戻る</Link></div>}
