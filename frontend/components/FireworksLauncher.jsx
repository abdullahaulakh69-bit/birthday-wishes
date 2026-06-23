'use client';

import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export function launchFireworks(duration = 9000) {
  const end = Date.now() + duration;
  const colors = ['#FF4F8B', '#8B5CF6', '#FFD700', '#ffffff'];

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.5 },
    colors,
  });

  frame();
}

export function launchConfettiBurst() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FF4F8B', '#8B5CF6', '#FFD700'],
  });
}

export default function FireworksLauncher({ active = true, duration = 9000 }) {
  const fired = useRef(false);

  useEffect(() => {
    if (active && !fired.current) {
      fired.current = true;
      launchFireworks(duration);
    }
  }, [active, duration]);

  return null;
}
