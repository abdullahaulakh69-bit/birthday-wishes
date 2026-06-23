'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from '@/hooks/useWindowSize';
import { HiX } from 'react-icons/hi';

export default function CelebrationMode({ active, onClose }) {
  const { width, height } = useWindowSize();

  return (
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
          <Confetti width={width} height={height} recycle numberOfPieces={200} />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full glass-card"
            aria-label="Exit celebration"
          >
            <HiX size={22} />
          </button>
          <div className="px-6 text-center">
            <h2 className="font-display text-4xl font-bold gradient-text sm:text-6xl">
              🎉 PARTY TIME! 🎉
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">Let the celebration begin!</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
