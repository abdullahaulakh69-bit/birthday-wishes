'use client';

import { useState, useCallback } from 'react';

const CLICKS_NEEDED = 5;

export function useEasterEgg(onActivate) {
  const [clicks, setClicks] = useState(0);

  const handleClick = useCallback(() => {
    setClicks((prev) => {
      const next = prev + 1;
      if (next >= CLICKS_NEEDED) {
        onActivate?.();
        return 0;
      }
      return next;
    });
  }, [onActivate]);

  return { handleClick, progress: clicks / CLICKS_NEEDED };
}
