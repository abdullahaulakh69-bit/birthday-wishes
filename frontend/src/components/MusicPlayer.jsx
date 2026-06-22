import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiVolumeUp, HiVolumeOff, HiPlay, HiPause } from 'react-icons/hi';
import MusicVisualizer from './MusicVisualizer';

const MUSIC_SRC =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = true;
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const handleVolume = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val > 0 && muted) {
        audioRef.current.muted = false;
        setMuted(false);
      }
    }
  };

  return (
    <motion.div
      className="fixed bottom-5 left-5 z-50 glass-card rounded-2xl p-3 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        preload="auto"
        onCanPlay={() => setLoaded(true)}
        aria-label="Birthday background music"
      />

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-primary to-purple-primary text-white transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          aria-label={playing ? 'Pause music' : 'Play music'}
        >
          {playing ? <HiPause size={20} /> : <HiPlay size={20} />}
        </button>

        <AnimatePresence>
          {playing && <MusicVisualizer active={playing} />}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMute}
            className="text-purple-primary hover:text-pink-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <HiVolumeOff size={20} /> : <HiVolumeUp size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={muted ? 0 : volume}
            onChange={handleVolume}
            className="w-16 accent-pink-primary"
            aria-label="Volume control"
            disabled={!loaded}
          />
        </div>
      </div>
    </motion.div>
  );
}
