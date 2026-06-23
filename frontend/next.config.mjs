import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Custom cache only for local Windows + OneDrive; use default .next on Vercel/Netlify/CI
const useLocalCache =
  process.platform === 'win32' &&
  !process.env.VERCEL &&
  !process.env.CI &&
  !process.env.NETLIFY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(useLocalCache
    ? { distDir: 'node_modules/.cache/birthday-surprise-next' }
    : {}),
  outputFileTracingRoot: __dirname,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
