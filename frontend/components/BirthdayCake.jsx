'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { launchConfettiBurst } from '@/components/FireworksLauncher';
import SectionWrapper from '@/components/SectionWrapper';

function Candle({ x, sparkles }) {
  return (
    <div className="relative flex flex-col items-center" style={{ left: x }}>
      <motion.div
        className="relative"
        animate={sparkles ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-5 w-3 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, #FF6B00 50%, #FF0000 100%)',
            boxShadow: sparkles
              ? '0 0 20px #FFD700, 0 0 40px #FF4F8B'
              : '0 0 10px #FFD700, 0 0 20px #FF6B00',
          }}
          animate={{ scaleY: [1, 1.1, 0.95, 1], scaleX: [1, 0.9, 1.05, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'mirror' }}
        />
        {sparkles && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-gold text-xs"
                style={{ top: -10, left: '50%' }}
                initial={{ opacity: 1, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  x: Math.cos((i * Math.PI * 2) / 6) * 20,
                  y: Math.sin((i * Math.PI * 2) / 6) * 20 - 10,
                }}
                transition={{ duration: 0.6 }}
              >
                ✨
              </motion.span>
            ))}
          </>
        )}
      </motion.div>
      <div className="h-8 w-1.5 rounded-sm bg-gradient-to-b from-pink-200 to-pink-300" />
    </div>
  );
}

export default function BirthdayCake() {
  const [sparkles, setSparkles] = useState(false);

  const handleClick = () => {
    setSparkles(true);
    launchConfettiBurst();
    setTimeout(() => setSparkles(false), 1000);
  };

  return (
    <SectionWrapper id="cake" badge="🎂 Make a Wish" title="Blow Out the Candles" subtitle="Click the cake for a sweet surprise" variant="alt">
      <motion.div
        className="flex flex-col items-center cursor-pointer"
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        animate={sparkles ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 0.4 }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        aria-label="Birthday cake - click to celebrate"
      >
        {/* Candles */}
        <div className="relative flex justify-center gap-4 mb-1">
          <Candle x={0} sparkles={sparkles} />
          <Candle x={0} sparkles={sparkles} />
          <Candle x={0} sparkles={sparkles} />
        </div>

        {/* Top layer */}
        <motion.div
          className="relative h-12 w-40 rounded-t-lg sm:w-52"
          style={{
            background: 'linear-gradient(180deg, #FFB6C1 0%, #FF8FAB 100%)',
            boxShadow: '0 4px 20px rgba(255, 79, 139, 0.3)',
          }}
          animate={{ boxShadow: sparkles ? '0 0 40px rgba(255, 215, 0, 0.6)' : '0 4px 20px rgba(255, 79, 139, 0.3)' }}
        >
          <div className="absolute -top-2 left-0 right-0 h-4 rounded-full bg-white/80" />
        </motion.div>

        {/* Middle layer */}
        <div
          className="relative h-14 w-48 rounded-t-lg sm:w-60 -mt-1"
          style={{
            background: 'linear-gradient(180deg, #E9D5FF 0%, #C4B5FD 100%)',
            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
          }}
        >
          <div className="absolute -top-2 left-0 right-0 h-4 rounded-full bg-white/80" />
        </div>

        {/* Bottom layer */}
        <div
          className="relative h-16 w-56 rounded-t-lg sm:w-72 -mt-1"
          style={{
            background: 'linear-gradient(180deg, #FDE68A 0%, #FCD34D 100%)',
            boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
          }}
        >
          <div className="absolute -top-2 left-0 right-0 h-4 rounded-full bg-white/80" />
        </div>

        {/* Plate */}
        <div className="h-3 w-64 rounded-full bg-white/60 shadow-lg sm:w-80 -mt-1" />

        <p className="mt-6 text-sm text-[var(--text-secondary)]">
          Tap the cake for a sweet surprise! 🎂
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
