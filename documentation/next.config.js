const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['design-system'],
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = withNextra(nextConfig);
