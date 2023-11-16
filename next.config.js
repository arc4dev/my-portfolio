/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  ...withPWA({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
  }),
};
