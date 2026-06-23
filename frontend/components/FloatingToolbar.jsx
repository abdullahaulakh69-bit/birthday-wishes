'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiVolumeUp, HiVolumeOff, HiPlay, HiPause, HiShare, HiDownload } from 'react-icons/hi';
import { shareContent } from '@/utils/helpers';
import { FRIEND_NAME } from '@/utils/constants';
import { launchFireworks } from '@/components/FireworksLauncher';
import DownloadCardHidden from '@/components/DownloadCardHidden';

const MUSIC_SRC = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export default function FloatingToolbar({ onCelebrate }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [shared, setShared] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.pause();
    else audio.play().catch(() => {});
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const handleShare = async () => {
    try {
      const usedNative = await shareContent(
        `Happy Birthday ${FRIEND_NAME}!`,
        'Check out this birthday surprise!',
        window.location.href
      );
      setShared(true);
      if (!usedNative) setTimeout(() => setShared(false), 2000);
    } catch {
      /* cancelled */
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} preload="none" loop aria-hidden="true" />

      <motion.div
        className="toolbar-dock fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="toolbar-inner flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={onCelebrate}
            className="toolbar-btn"
            aria-label="Celebrate"
          >
            🎊
          </button>

          <div className="toolbar-divider" aria-hidden="true" />

          <button
            type="button"
            onClick={togglePlay}
            className="toolbar-btn toolbar-btn--primary"
            aria-label={playing ? 'Pause music' : 'Play music'}
          >
            {playing ? <HiPause size={18} /> : <HiPlay size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="toolbar-btn sm:hidden"
            aria-label="Music options"
          >
            {muted ? <HiVolumeOff size={18} /> : <HiVolumeUp size={18} />}
          </button>

          <div className="hidden items-center gap-2 sm:flex">
            <button type="button" onClick={toggleMute} className="toolbar-btn" aria-label="Mute">
              {muted ? <HiVolumeOff size={18} /> : <HiVolumeUp size={18} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={muted ? 0 : volume}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setVolume(val);
                if (audioRef.current) {
                  audioRef.current.volume = val;
                  if (val > 0 && muted) {
                    audioRef.current.muted = false;
                    setMuted(false);
                  }
                }
              }}
              className="toolbar-slider"
              aria-label="Volume"
            />
          </div>

          <div className="toolbar-divider" aria-hidden="true" />

          <button type="button" onClick={handleShare} className="toolbar-btn" aria-label="Share">
            <HiShare size={18} />
            <span className="toolbar-label">{shared ? 'Copied' : 'Share'}</span>
          </button>

          <DownloadCardHidden />
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-2 flex justify-center sm:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={muted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="toolbar-slider w-40"
                aria-label="Volume"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export function useCelebration() {
  const [active, setActive] = useState(false);
  const activate = () => {
    setActive(true);
    launchFireworks(10000);
  };
  return { active, setActive, activate };
}
