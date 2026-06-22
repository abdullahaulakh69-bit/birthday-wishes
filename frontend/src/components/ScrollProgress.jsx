import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-gradient-to-r from-pink-primary via-purple-primary to-gold transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
