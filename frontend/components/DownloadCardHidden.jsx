'use client';

import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { HiDownload } from 'react-icons/hi';
import { FRIEND_NAME } from '@/utils/constants';

export default function DownloadCardHidden() {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, { backgroundColor: '#ff4f8b', scale: 2 });
      const link = document.createElement('a');
      link.download = `birthday-${FRIEND_NAME}.png`;
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
      <div ref={cardRef} className="sr-only" aria-hidden="true">
        <div
          style={{
            width: 600,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #FF4F8B, #8B5CF6)',
            color: 'white',
            fontFamily: 'Georgia, serif',
          }}
        >
          <div style={{ fontSize: 64 }}>🎂</div>
          <h2 style={{ fontSize: 36, marginTop: 16 }}>Happy Birthday {FRIEND_NAME}!</h2>
        </div>
      </div>
      <button
        type="button"
        onClick={handleDownload}
        disabled={downloading}
        className="toolbar-btn"
        aria-label="Download birthday card"
      >
        <HiDownload size={18} />
        <span className="toolbar-label">{downloading ? '...' : 'Card'}</span>
      </button>
    </>
  );
}
