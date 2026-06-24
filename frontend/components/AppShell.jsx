'use client';

import { Component } from 'react';
import dynamic from 'next/dynamic';
import { FRIEND_NAME } from '@/utils/constants';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center"
          style={{ background: 'linear-gradient(160deg, #fff0f6, #ede9fe)' }}
        >
          <span className="text-6xl">🎂</span>
          <h1 className="text-3xl font-bold" style={{ color: '#ff4f8b' }}>
            Happy Birthday {FRIEND_NAME}!
          </h1>
          <p style={{ color: '#5c5470' }}>Please refresh to load your surprise.</p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function LoadingScreen() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4"
      style={{ background: 'linear-gradient(160deg, #fff0f6, #ede9fe, #fff8e7)' }}
    >
      <span className="text-5xl">🎉</span>
      <p className="text-lg font-semibold" style={{ color: '#ff4f8b' }}>
        Loading your surprise...
      </p>
    </div>
  );
}

const HomePage = dynamic(() => import('@/components/HomePage'), {
  ssr: false,
  loading: () => <LoadingScreen />,
});

export default function AppShell() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}
