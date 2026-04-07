import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages
  // Repo name as base path (https://kuanhsienyeh.github.io/my-portfolio/)
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
