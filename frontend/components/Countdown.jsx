'use client';

import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { useBirthdayCountdown } from '@/hooks/useBirthdayCountdown';
import { padTime } from '@/utils/helpers';
import { launchFireworks } from '@/components/FireworksLauncher';
import SectionWrapper from '@/components/SectionWrapper';

function TimeBlock({ value, label, animate }) {
  return (
    <div className="countdown-block">
      <span className="countdown-block__value font-display gradient-text">
        {animate ? <CountUp end={value} duration={1} preserveValue /> : padTime(value)}
      </span>
      <span className="countdown-block__label">{label}</span>
    </div>
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
    <SectionWrapper
      id="countdown"
      badge="⏳ Almost There"
      title="Countdown to Your Day"
      subtitle="Every second brings us closer to celebrating you"
    >
      <AnimatePresence mode="wait">
        {countdown.isBirthday ? (
          <motion.div
            key="birthday"
            className="premium-card mx-auto max-w-lg p-8 text-center sm:p-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3 className="font-display text-2xl font-bold gradient-text sm:text-4xl">
              🎉 IT&apos;S YOUR BIRTHDAY! 🎉
            </h3>
          </motion.div>
        ) : (
          <motion.div
            key="countdown"
            className="countdown-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
