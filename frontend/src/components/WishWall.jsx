import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api } from '../services/api';
import { FALLBACK_QUOTES } from '../utils/constants';
import SectionWrapper from './SectionWrapper';

function FloatingCard({ wish, index }) {
  return (
    <motion.div
      className="glass-card absolute rounded-2xl px-6 py-4 shadow-lg max-w-[200px] text-center"
      style={{
        left: `${10 + (index % 4) * 22}%`,
        top: `${15 + Math.floor(index / 4) * 30}%`,
      }}
      animate={{
        y: [0, -15, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 4 + index * 0.3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.2,
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
    >
      <p className="text-sm font-medium text-[var(--text-primary)]">{wish}</p>
    </motion.div>
  );
}

export default function WishWall() {
  const [wishes, setWishes] = useState(FALLBACK_QUOTES);

  useEffect(() => {
    api
      .getQuotes()
      .then((quotes) => setWishes(quotes.slice(0, 8)))
      .catch(() => setWishes(FALLBACK_QUOTES));
  }, []);

  return (
    <SectionWrapper id="wishes" title="Wish Wall" subtitle="Floating wishes just for you">
      <div className="relative mx-auto h-[500px] max-w-4xl overflow-hidden rounded-3xl">
        {wishes.map((wish, i) => (
          <FloatingCard key={i} wish={wish} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
