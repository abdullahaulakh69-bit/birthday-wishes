import { useState, useCallback, lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import BackgroundEffects from '../components/BackgroundEffects';
import ScrollProgress from '../components/ScrollProgress';
import ThemeToggle from '../components/ThemeToggle';
import MusicPlayer from '../components/MusicPlayer';
import CursorSparkle from '../components/CursorSparkle';
import FireworksLauncher from '../components/FireworksLauncher';
import ShareButton from '../components/ShareButton';
import DownloadCard from '../components/DownloadCard';
import CelebrationMode from '../components/CelebrationMode';
import SurpriseModal from '../components/SurpriseModal';
import Footer from '../components/Footer';
import { useTheme } from '../hooks/useTheme';

const BirthdayCake = lazy(() => import('../components/BirthdayCake'));
const Countdown = lazy(() => import('../components/Countdown'));
const MemoryGallery = lazy(() => import('../components/MemoryGallery'));
const Timeline = lazy(() => import('../components/Timeline'));
const Letter = lazy(() => import('../components/Letter'));
const GiftBox = lazy(() => import('../components/GiftBox'));
const WishWall = lazy(() => import('../components/WishWall'));
const BirthdayQuote = lazy(() => import('../components/BirthdayQuote'));

function SectionLoader() {
  return (
    <div className="flex justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-primary border-t-transparent" />
    </div>
  );
}

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [surpriseOpen, setSurpriseOpen] = useState(false);

  const handleStart = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEasterEgg = useCallback(() => {
    setSurpriseOpen(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <FireworksLauncher active duration={9000} />
      <BackgroundEffects />
      <ScrollProgress />
      <CursorSparkle />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <MusicPlayer />
      <ShareButton />
      <DownloadCard />
      <CelebrationMode />

      <main>
        <Hero onStart={handleStart} onEasterEgg={handleEasterEgg} />

        <Suspense fallback={<SectionLoader />}>
          <Countdown />
          <BirthdayCake />
          <MemoryGallery />
          <Timeline />
          <Letter />
          <GiftBox />
          <WishWall />
          <BirthdayQuote />
        </Suspense>
      </main>

      <Footer />

      <SurpriseModal
        isOpen={surpriseOpen}
        onClose={() => setSurpriseOpen(false)}
        message="You found the secret! You are the most amazing bestie in the entire universe. Never forget how special you are! 🌟"
      />
    </div>
  );
}
