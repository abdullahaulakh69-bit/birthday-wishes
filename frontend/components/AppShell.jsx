'use client';

import { Component } from 'react';
import HomePage from '@/components/HomePage';
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

export default function AppShell() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}
