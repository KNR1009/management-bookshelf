const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com']
  },
  webpack: (config, _) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src')
    };
    return config;
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
