'use client';

import { useState } from 'react';
import { HiShare } from 'react-icons/hi';
import { shareContent } from '@/utils/helpers';
import { FRIEND_NAME } from '@/utils/constants';

export default function ShareButton() {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = `Happy Birthday ${FRIEND_NAME}!`;
    const text = 'Check out this amazing birthday surprise!';

    try {
      const usedNative = await shareContent(title, text, url);
      setShared(true);
      if (!usedNative) {
        setTimeout(() => setShared(false), 2000);
      }
    } catch {
      /* user cancelled */
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="fixed bottom-5 right-24 z-50 flex items-center gap-2 rounded-2xl floating-control px-4 py-2.5 text-sm font-medium sm:right-28"
      aria-label="Share birthday surprise"
    >
      <HiShare size={18} />
      {shared ? 'Copied!' : 'Share'}
    </button>
  );
}
