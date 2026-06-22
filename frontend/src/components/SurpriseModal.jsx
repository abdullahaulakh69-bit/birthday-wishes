import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

export default function SurpriseModal({ isOpen, onClose, message }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Surprise message"
        >
          <motion.div
            className="glass-card relative max-w-md rounded-3xl p-8 text-center"
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-pink-primary focus-visible:outline-2 focus-visible:outline-gold rounded"
              aria-label="Close surprise"
            >
              <HiX size={24} />
            </button>
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              🎊
            </motion.div>
            <h3 className="font-display text-2xl font-bold gradient-text">Secret Surprise!</h3>
            <p className="mt-4 text-[var(--text-secondary)]">{message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
