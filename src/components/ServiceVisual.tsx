import Image from 'next/image';
import type { Service } from '@/data/demo';
import { ManagedMedia } from './MediaProvider';

export default function ServiceVisual({
  icon,
  className = '',
  slot = '',
}: {
  icon: Service['icon'];
  className?: string;
  slot?: string;
}) {
  const map: Record<Service['icon'], string> = {
    countertop: 'countertop',
    cabinet: 'cabinet',
    furniture: 'furniture',
    sink: 'sink',
    repair: 'countertop',
    all: 'furniture',
    grid: 'bath',
    air: 'air',
    washer: 'washer',
    fabric: 'fabric',
  };

  const assetName = map[icon] || 'countertop';

  return (
    <ManagedMedia slot={slot} className={`relative min-h-48 overflow-hidden rounded-3xl ${className}`}>
    <div
      className={`demo-grid relative flex min-h-48 items-center justify-center overflow-hidden rounded-3xl bg-brand-50 border border-brand-200/60 ${className}`}
    >
      <div className="absolute -top-16 -right-12 size-48 rounded-full bg-gold-400/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-12 size-48 rounded-full bg-brand-200/30 blur-2xl" />
      <Image
        src={`/illustrations/${assetName}.svg`}
        alt="클린하우스 서비스 일러스트"
        width={440}
        height={300}
        className="relative z-10 h-auto max-h-64 w-4/5 object-contain transition-transform duration-500 hover:scale-105"
      />
      <span className="absolute right-4 bottom-4 z-20 rounded-full border border-brand-200 bg-white/95 px-3 py-1 text-[10px] font-bold tracking-wider text-brand-900 shadow-sm">
        CLEAN HOUSE
      </span>
    </div>
    </ManagedMedia>
  );
}
