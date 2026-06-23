'use client';

import { motion } from 'framer-motion';
import { useEasterEgg } from '@/hooks/useEasterEgg';
import { FRIEND_NAME } from '@/utils/constants';

export default function Hero({ onStart, onEasterEgg }) {
  const { handleClick } = useEasterEgg(onEasterEgg);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow--pink" aria-hidden="true" />
      <div className="hero-glow hero-glow--purple" aria-hidden="true" />

      <div className="hero-content">
        <span className="section-badge">✨ A Special Surprise</span>

        <h1
          className="hero-title font-display gradient-text"
          onClick={handleClick}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
          role="button"
          tabIndex={0}
          aria-label="Happy Birthday - click for secret"
        >
          Happy Birthday, {FRIEND_NAME}!
        </h1>

        <p className="hero-subtitle">
          Today is all about celebrating the most amazing person in my life.
        </p>

        <motion.button
          type="button"
          className="btn-primary"
          onClick={onStart}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Start the Surprise ❤️
        </motion.button>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-hint__dot" />
      </div>
    </section>
  );
}
