import { useEffect, useState } from 'react';

export function useParallax(intensity = 0.02) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * intensity;
      const y = (e.clientY - window.innerHeight / 2) * intensity;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [intensity]);

  return offset;
}
