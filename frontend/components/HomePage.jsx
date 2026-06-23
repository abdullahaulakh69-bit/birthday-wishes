'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import BackgroundEffects from '@/components/BackgroundEffects';
import ScrollProgress from '@/components/ScrollProgress';
import ThemeToggle from '@/components/ThemeToggle';
import FloatingToolbar, { useCelebration } from '@/components/FloatingToolbar';
import FireworksLauncher from '@/components/FireworksLauncher';
import SurpriseModal from '@/components/SurpriseModal';
import Footer from '@/components/Footer';
import CelebrationMode from '@/components/CelebrationMode';
import { useTheme } from '@/hooks/useTheme';

function SectionLoader() {
  return (
    <div className="flex justify-center py-16">
      <div className="loader-ring" aria-label="Loading" />
    </div>
  );
}

const Countdown = dynamic(() => import('@/components/Countdown'), { loading: SectionLoader });
const BirthdayCake = dynamic(() => import('@/components/BirthdayCake'), { loading: SectionLoader });
const MemoryGallery = dynamic(() => import('@/components/MemoryGallery'), { loading: SectionLoader });
const Timeline = dynamic(() => import('@/components/Timeline'), { loading: SectionLoader });
const Letter = dynamic(() => import('@/components/Letter'), { loading: SectionLoader });
const GiftBox = dynamic(() => import('@/components/GiftBox'), { loading: SectionLoader });
const WishWall = dynamic(() => import('@/components/WishWall'), { loading: SectionLoader });
const BirthdayQuote = dynamic(() => import('@/components/BirthdayQuote'), { loading: SectionLoader });

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const { active: celebrateActive, setActive: setCelebrateActive, activate: activateCelebrate } =
    useCelebration();

  const handleStart = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEasterEgg = useCallback(() => setSurpriseOpen(true), []);

  return (
    <div className="page-root">
      <FireworksLauncher active duration={8000} />
      <BackgroundEffects />
      <ScrollProgress />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <FloatingToolbar onCelebrate={activateCelebrate} />
      <CelebrationMode active={celebrateActive} onClose={() => setCelebrateActive(false)} />

      <main className="page-main">
        <Hero onStart={handleStart} onEasterEgg={handleEasterEgg} />
        <Countdown />
        <BirthdayCake />
        <MemoryGallery />
        <Timeline />
        <Letter />
        <GiftBox />
        <WishWall />
        <BirthdayQuote />
      </main>

      <Footer />

      <SurpriseModal
        isOpen={surpriseOpen}
        onClose={() => setSurpriseOpen(false)}
        message="You found the secret! You are absolutely amazing. Never forget how special you are! 🌟"
      />
    </div>
  );
}
