'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { LETTER_CONTENT } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';

export default function Letter() {
  const [open, setOpen] = useState(false);
  const typedText = useTypingAnimation(LETTER_CONTENT, 25, open);

  return (
    <SectionWrapper id="letter" badge="💌 Love Letter" title="A Letter For You" subtitle="Open with love" variant="alt">
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="envelope"
              type="button"
              className="relative cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
              aria-label="Open birthday letter envelope"
            >
              <div className="relative h-48 w-72 sm:h-56 sm:w-80">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-primary to-purple-primary shadow-2xl" />
                <motion.div
                  className="absolute inset-x-0 top-0 h-1/2 origin-top"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B9D 0%, #A78BFA 100%)',
                    clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
                  }}
                  animate={{ rotateX: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">💌</span>
                </div>
                <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-[var(--text-secondary)]">
                  Click to open
                </p>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="letter-content"
              className="premium-card max-w-2xl rounded-3xl p-8 sm:p-12"
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="mb-6 text-center text-3xl">💝</div>
              <div className="whitespace-pre-wrap font-display text-base leading-relaxed text-[var(--text-primary)] sm:text-lg">
                {typedText}
                <motion.span
                  className="inline-block w-0.5 h-5 bg-pink-primary ml-0.5 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
