'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-1"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="relative h-full overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div className="h-full w-full bg-gradient-to-r from-pink-primary via-purple-primary to-gold transition-all duration-150" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          style={{ animation: 'btn-shine 2s ease-in-out infinite' }}
        />
      </div>
    </div>
  );
}
