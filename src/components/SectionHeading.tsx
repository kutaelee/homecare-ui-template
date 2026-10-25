import type { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  invert = false,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  invert?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center mx-auto' : 'text-left'}`}>
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.3em] ${
          invert ? 'text-gold-300' : 'text-gold-600'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          invert ? 'text-white' : 'text-brand-900'
        } leading-[1.25]`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm md:text-base leading-relaxed ${
            invert ? 'text-white/80' : 'text-brand-600'
          } ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
