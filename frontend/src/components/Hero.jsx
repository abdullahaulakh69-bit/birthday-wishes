import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { useEasterEgg } from '../hooks/useEasterEgg';
import { FRIEND_NAME } from '../utils/constants';

export default function Hero({ onStart, onEasterEgg }) {
  const parallax = useParallax(0.015);
  const { handleClick } = useEasterEgg(onEasterEgg);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <motion.div
        style={{ x: parallax.x, y: parallax.y }}
        className="relative z-10 max-w-3xl"
      >
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-pink-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A Special Surprise For You
        </motion.p>

        <motion.h1
          className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-7xl gradient-text cursor-pointer select-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
          aria-label="Happy Birthday title - click for surprise"
        >
          🎉 Happy Birthday {FRIEND_NAME} 🎉
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-[var(--text-secondary)] sm:text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Today is all about celebrating the most amazing person in my life.
        </motion.p>

        <motion.button
          type="button"
          className="btn-primary mt-10 text-lg"
          onClick={onStart}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Start the birthday surprise"
        >
          Start the Surprise ❤️
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <span className="text-2xl opacity-50">↓</span>
      </motion.div>
    </section>
  );
}
