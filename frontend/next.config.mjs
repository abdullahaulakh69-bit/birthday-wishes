import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Custom cache only for local Windows + OneDrive; use default .next on deploy
const useLocalCache =
  process.platform === 'win32' &&
  !process.env.VERCEL &&
  !process.env.CI &&
  !process.env.NETLIFY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(useLocalCache
    ? { distDir: 'node_modules/.cache/birthday-surprise-next' }
    : {}),
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
