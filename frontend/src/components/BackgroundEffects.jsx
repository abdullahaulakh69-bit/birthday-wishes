import { motion } from 'framer-motion';
import { EMOJI_RAIN } from '../utils/constants';

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${(i * 8.3) % 100}%`,
  delay: i * 0.4,
  size: 14 + (i % 3) * 6,
}));

const balloons = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + i * 12}%`,
  delay: i * 0.6,
  color: ['#FF4F8B', '#8B5CF6', '#FFD700', '#FF6B9D'][i % 4],
}));

const stars = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 3,
  size: 2 + Math.random() * 3,
}));

const sparkles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 4,
}));

const emojiRain = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${(i * 7) % 100}%`,
  emoji: EMOJI_RAIN[i % EMOJI_RAIN.length],
  delay: i * 0.5,
  duration: 8 + (i % 4) * 2,
}));

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-primary/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-purple-primary/20 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-gold/60"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 2 + star.delay, repeat: Infinity, delay: star.delay }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((s) => (
        <motion.span
          key={`sparkle-${s.id}`}
          className="absolute text-gold/70 text-xs"
          style={{ left: s.left, top: s.top }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: s.delay }}
        >
          ✦
        </motion.span>
      ))}

      {/* Floating hearts */}
      {hearts.map((h) => (
        <motion.span
          key={`heart-${h.id}`}
          className="absolute text-pink-primary/40"
          style={{ left: h.left, bottom: '-5%', fontSize: h.size }}
          animate={{ y: [0, -1200], x: [0, Math.sin(h.id) * 30] }}
          transition={{ duration: 15 + h.delay, repeat: Infinity, delay: h.delay, ease: 'linear' }}
        >
          ♥
        </motion.span>
      ))}

      {/* Floating balloons */}
      {balloons.map((b) => (
        <motion.div
          key={`balloon-${b.id}`}
          className="absolute bottom-0"
          style={{ left: b.left }}
          animate={{ y: [0, -1200], rotate: [-5, 5, -5] }}
          transition={{ duration: 18 + b.delay, repeat: Infinity, delay: b.delay, ease: 'linear' }}
        >
          <div
            className="h-10 w-8 rounded-full opacity-30"
            style={{ backgroundColor: b.color }}
          />
          <div className="mx-auto h-6 w-px bg-gray-400/30" />
        </motion.div>
      ))}

      {/* Emoji rain */}
      {emojiRain.map((e) => (
        <motion.span
          key={`emoji-${e.id}`}
          className="absolute opacity-20"
          style={{ left: e.left, top: '-5%', fontSize: '1.25rem' }}
          animate={{ y: [0, 1200], rotate: [0, 360] }}
          transition={{ duration: e.duration, repeat: Infinity, delay: e.delay, ease: 'linear' }}
        >
          {e.emoji}
        </motion.span>
      ))}

      {/* Soft particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-white/30"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 4 + i * 0.2, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}
