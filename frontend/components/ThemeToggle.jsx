'use client';

import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--shadow-card)] backdrop-blur-md"
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <HiMoon className="text-purple-primary" size={18} />
      ) : (
        <HiSun className="text-gold" size={18} />
      )}
    </motion.button>
  );
}
