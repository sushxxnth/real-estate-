// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // This enables the App Router feature.
  },
};

export default nextConfig;
