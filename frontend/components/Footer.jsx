'use client';

import { FRIEND_NAME } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="footer-premium">
      <p className="font-display text-lg text-[var(--text-primary)]">
        Made with <span className="text-pink-primary">❤️</span> for {FRIEND_NAME}
      </p>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
