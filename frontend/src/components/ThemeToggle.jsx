import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      className="fixed top-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full glass-card text-lg transition-colors hover:scale-105"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <HiMoon className="text-purple-primary" />
      ) : (
        <HiSun className="text-gold" />
      )}
    </motion.button>
  );
}
