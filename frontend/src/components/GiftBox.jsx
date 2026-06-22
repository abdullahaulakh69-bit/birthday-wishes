import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { launchConfettiBurst } from './FireworksLauncher';
import { GIFT_MESSAGE } from '../utils/constants';
import SectionWrapper from './SectionWrapper';

export default function GiftBox() {
  const [opened, setOpened] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      setOpened(true);
      launchConfettiBurst();
      setTimeout(() => launchConfettiBurst(), 300);
    }, 800);
  };

  return (
    <SectionWrapper id="gift" title="Your Special Gift" subtitle="Something wonderful awaits">
      <div className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.button
              key="box"
              type="button"
              className="relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              onClick={handleOpen}
              animate={shaking ? { x: [-8, 8, -8, 8, 0], rotate: [-3, 3, -3, 3, 0] } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Open gift box"
            >
              <div className="relative" style={{ perspective: '600px' }}>
                {/* Lid */}
                <motion.div
                  className="relative z-10 mx-auto h-8 w-44 rounded-t-lg sm:w-52"
                  style={{
                    background: 'linear-gradient(180deg, #FF4F8B, #E91E7B)',
                    transformOrigin: 'bottom center',
                  }}
                  animate={opened ? { rotateX: -120, y: -40 } : {}}
                >
                  <div className="absolute left-1/2 top-1/2 h-16 w-4 -translate-x-1/2 -translate-y-1/2 rounded bg-gold shadow" />
                  <div className="absolute left-0 right-0 top-1/2 h-4 -translate-y-1/2 bg-gold shadow" />
                </motion.div>

                {/* Box body */}
                <div
                  className="h-36 w-44 rounded-b-lg sm:w-52"
                  style={{
                    background: 'linear-gradient(180deg, #8B5CF6, #6D28D9)',
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)',
                  }}
                >
                  <div className="absolute left-1/2 top-8 h-full w-4 -translate-x-1/2 bg-gold/80" />
                </div>

                {/* Bow */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">🎀</div>
              </div>
              <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
                Click to unwrap your surprise!
              </p>
            </motion.button>
          ) : (
            <motion.div
              key="message"
              className="glass-card max-w-lg rounded-2xl p-10 text-center"
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <motion.span
                className="text-5xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                🎁
              </motion.span>
              <p className="mt-6 font-display text-xl font-semibold gradient-text sm:text-2xl">
                {GIFT_MESSAGE}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
