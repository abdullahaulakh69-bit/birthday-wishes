'use client';

import { motion } from 'framer-motion';
import { EMOJI_RAIN } from '@/utils/constants';

const hearts = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: `${15 + i * 14}%`,
  delay: i * 0.5,
}));

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: '#ff4f8b' }}
      />
      <div
        className="absolute top-1/2 -right-24 h-64 w-64 rounded-full opacity-15 blur-3xl"
        style={{ background: '#8b5cf6' }}
      />

      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute bottom-0 text-pink-primary/20"
          style={{ left: h.left, fontSize: 14 }}
          animate={{ y: [0, -800] }}
          transition={{ duration: 18, repeat: Infinity, delay: h.delay, ease: 'linear' }}
        >
          ♥
        </motion.span>
      ))}

      {EMOJI_RAIN.slice(0, 6).map((emoji, i) => (
        <motion.span
          key={emoji + i}
          className="absolute opacity-10"
          style={{ left: `${10 + i * 15}%`, fontSize: '1rem' }}
          animate={{ y: [0, 900] }}
          transition={{ duration: 20 + i * 2, repeat: Infinity, delay: i, ease: 'linear' }}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
}
