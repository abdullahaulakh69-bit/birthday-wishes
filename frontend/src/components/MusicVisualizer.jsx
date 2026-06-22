import { motion } from 'framer-motion';

const bars = Array.from({ length: 5 }, (_, i) => i);

export default function MusicVisualizer({ active }) {
  if (!active) return null;

  return (
    <motion.div
      className="flex items-end gap-0.5 h-6"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: 'auto' }}
      exit={{ opacity: 0, width: 0 }}
      aria-hidden="true"
    >
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-1 rounded-full bg-gradient-to-t from-pink-primary to-purple-primary"
          animate={{ height: [4, 16 + bar * 3, 6, 20 - bar * 2, 4] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: bar * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
}
