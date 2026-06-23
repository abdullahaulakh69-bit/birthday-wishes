'use client';

import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { HiDownload } from 'react-icons/hi';
import { FRIEND_NAME } from '@/utils/constants';

export default function DownloadCard() {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
      });
      const link = document.createElement('a');
      link.download = `birthday-card-${FRIEND_NAME}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <div
        ref={cardRef}
        className="pointer-events-none fixed -left-[9999px] top-0"
        aria-hidden="true"
      >
        <div
          className="flex h-[400px] w-[600px] flex-col items-center justify-center rounded-3xl p-10"
          style={{
            background: 'linear-gradient(135deg, #FF4F8B 0%, #8B5CF6 50%, #FFD700 100%)',
          }}
        >
          <span className="text-6xl">🎂</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white">
            Happy Birthday
          </h2>
          <p className="mt-2 text-2xl text-white/90">{FRIEND_NAME}!</p>
          <p className="mt-6 text-lg text-white/80">
            Wishing you endless joy and love ❤️
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleDownload}
        disabled={downloading}
        className="fixed bottom-20 right-5 z-50 flex items-center gap-2 rounded-2xl floating-control px-4 py-2.5 text-sm font-medium sm:bottom-5 sm:right-48"
        aria-label="Download birthday card as PNG"
      >
        <HiDownload size={18} />
        {downloading ? 'Saving...' : 'Card'}
      </button>
    </>
  );
}
