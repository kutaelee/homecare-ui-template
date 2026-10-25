import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PageIntro({
  eyebrow,
  title,
  description,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`border-b ${
        dark
          ? 'border-brand-800 bg-brand-900 text-white'
          : 'border-brand-200 bg-brand-100/60 text-brand-900'
      } py-14 md:py-20`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Breadcrumb */}
        <div
          className={`mb-5 flex items-center gap-1.5 text-xs ${
            dark ? 'text-white/60' : 'text-brand-500'
          }`}
        >
          <Link href="/" className="hover:text-gold-400 transition">
            홈
          </Link>
          <ChevronRight className="size-3.5" />
          <span className={`font-semibold ${dark ? 'text-gold-400' : 'text-brand-900'}`}>
            {eyebrow}
          </span>
        </div>

        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
          CLEAN HOUSE KITCHEN
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {title}
        </h1>

        <p
          className={`mt-4 max-w-2xl text-sm sm:text-base leading-relaxed ${
            dark ? 'text-white/75' : 'text-brand-600'
          }`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
