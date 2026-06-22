import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from '../hooks/useWindowSize';
import { HiX } from 'react-icons/hi';
import { launchFireworks } from './FireworksLauncher';

export default function CelebrationMode() {
  const [active, setActive] = useState(false);
  const { width, height } = useWindowSize();

  const activate = () => {
    setActive(true);
    launchFireworks(10000);
  };

  return (
    <>
      <button
        type="button"
        onClick={activate}
        className="fixed bottom-20 left-5 z-50 rounded-full glass-card px-4 py-2.5 text-sm font-medium transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-gold sm:bottom-auto sm:top-20 sm:left-5"
        aria-label="Enter full screen celebration mode"
      >
        🎊 Celebrate!
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[250] flex items-center justify-center"
            style={{ background: 'var(--gradient-hero)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Celebration mode"
          >
            <Confetti width={width} height={height} recycle numberOfPieces={300} />
            <button
              type="button"
              onClick={() => setActive(false)}
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full glass-card focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Exit celebration mode"
            >
              <HiX size={24} />
            </button>
            <motion.div
              className="text-center px-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h2 className="font-display text-4xl font-bold gradient-text sm:text-6xl md:text-8xl">
                🎉 PARTY TIME! 🎉
              </h2>
              <p className="mt-6 text-xl text-[var(--text-secondary)] sm:text-2xl">
                Let the celebration begin!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
