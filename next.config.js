/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: '/public',
  images: {
    domains: ['framerusercontent.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
