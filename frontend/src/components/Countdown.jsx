import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { useBirthdayCountdown } from '../hooks/useBirthdayCountdown';
import { padTime } from '../utils/helpers';
import { launchFireworks } from './FireworksLauncher';
import SectionWrapper from './SectionWrapper';

function TimeBlock({ value, label, animate }) {
  return (
    <motion.div
      className="glass-card flex flex-col items-center rounded-2xl px-4 py-6 sm:px-8 sm:py-8 min-w-[80px] sm:min-w-[100px]"
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <span className="font-display text-3xl font-bold gradient-text sm:text-5xl">
        {animate ? (
          <CountUp end={value} duration={1} preserveValue />
        ) : (
          padTime(value)
        )}
      </span>
      <span className="mt-2 text-xs uppercase tracking-widest text-[var(--text-secondary)] sm:text-sm">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const [celebrated, setCelebrated] = useState(false);

  const onBirthday = useCallback(() => {
    if (!celebrated) {
      setCelebrated(true);
      launchFireworks(8000);
    }
  }, [celebrated]);

  const countdown = useBirthdayCountdown(onBirthday);

  return (
    <SectionWrapper id="countdown" title="Countdown to Your Day" subtitle="The excitement is building!">
      <AnimatePresence mode="wait">
        {countdown.isBirthday ? (
          <motion.div
            key="birthday"
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h3
              className="font-display text-3xl font-bold gradient-text sm:text-5xl md:text-6xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🎉 IT&apos;S YOUR BIRTHDAY! 🎉
            </motion.h3>
          </motion.div>
        ) : (
          <motion.div
            key="countdown"
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TimeBlock value={countdown.days} label="Days" animate />
            <TimeBlock value={countdown.hours} label="Hours" />
            <TimeBlock value={countdown.minutes} label="Minutes" />
            <TimeBlock value={countdown.seconds} label="Seconds" />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
