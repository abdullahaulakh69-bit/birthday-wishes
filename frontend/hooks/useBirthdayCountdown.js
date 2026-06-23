'use client';

import { useState, useEffect, useCallback } from 'react';
import { getNextBirthday, getBirthdayCountdown } from '@/utils/helpers';

export function useBirthdayCountdown(onBirthday) {
  const [countdown, setCountdown] = useState(() =>
    getBirthdayCountdown(getNextBirthday())
  );
  const [target] = useState(() => getNextBirthday());

  useEffect(() => {
    const tick = () => {
      const next = getBirthdayCountdown(target);
      setCountdown((prev) => {
        if (!prev.isBirthday && next.isBirthday) {
          onBirthday?.();
        }
        return next;
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target, onBirthday]);

  return countdown;
}
