import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 text-center">
      <motion.p
        className="text-lg text-[var(--text-secondary)]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Made with{' '}
        <motion.span
          className="inline-block text-pink-primary"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          aria-label="love"
        >
          ❤️
        </motion.span>{' '}
        especially for my Bestie
      </motion.p>
      <p className="mt-2 text-xs text-[var(--text-secondary)] opacity-60">
        © {new Date().getFullYear()} Birthday Surprise
      </p>
    </footer>
  );
}
