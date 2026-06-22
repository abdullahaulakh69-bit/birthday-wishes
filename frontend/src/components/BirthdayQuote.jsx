import { useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '../services/api';
import { FRIEND_NAME } from '../utils/constants';
import SectionWrapper from './SectionWrapper';

const BONUS_QUOTES = [
  'You are literally the coolest person alive.',
  'The universe is lucky to have you!',
  'Plot twist: YOU are the main character today.',
  'Certified bestie status: LEGENDARY.',
  'Scientists confirm: your smile cures sadness.',
];

export default function BirthdayQuote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const quotes = await api.getQuotes();
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(random);
    } catch {
      setQuote(BONUS_QUOTES[Math.floor(Math.random() * BONUS_QUOTES.length)]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="quote" title="Birthday Quote Generator" subtitle="Press for a dose of happiness">
      <div className="flex flex-col items-center gap-6">
        <motion.button
          type="button"
          className="btn-primary"
          onClick={generate}
          disabled={loading}
          whileTap={{ scale: 0.95 }}
          aria-label="Generate birthday quote"
        >
          {loading ? 'Generating...' : '✨ Get a Quote'}
        </motion.button>

        {quote && (
          <motion.blockquote
            className="glass-card max-w-lg rounded-2xl p-8 text-center font-display text-xl italic"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            &ldquo;{quote}&rdquo;
            <footer className="mt-4 text-sm not-italic text-[var(--text-secondary)]">
              — With love, for {FRIEND_NAME}
            </footer>
          </motion.blockquote>
        )}
      </div>
    </SectionWrapper>
  );
}
