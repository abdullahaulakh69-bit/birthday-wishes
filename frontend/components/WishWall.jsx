'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api } from '@/services/api';
import { FALLBACK_QUOTES } from '@/utils/constants';
import SectionWrapper from '@/components/SectionWrapper';

export default function WishWall() {
  const [wishes, setWishes] = useState(FALLBACK_QUOTES);

  useEffect(() => {
    api
      .getQuotes()
      .then((quotes) => setWishes(quotes.slice(0, 8)))
      .catch(() => setWishes(FALLBACK_QUOTES));
  }, []);

  return (
    <SectionWrapper
      id="wishes"
      badge="🌟 Wishes"
      title="Wish Wall"
      subtitle="Messages filled with love for you"
    >
      <div className="wish-grid">
        {wishes.map((wish, i) => (
          <motion.div
            key={i}
            className="wish-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <span className="wish-card__emoji">💝</span>
            <p>{wish}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
