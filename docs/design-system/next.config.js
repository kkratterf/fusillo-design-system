const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['fusillo'],
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = withNextra(nextConfig);
