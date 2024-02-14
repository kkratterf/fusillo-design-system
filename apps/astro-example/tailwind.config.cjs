const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const DesignSystem = require('../../packages/design-system/tailwind.config');
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/design-system/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...DesignSystem.theme,
    extend: {
      ...DesignSystem.theme.extend,
      fontFamily: {
        sans: ['GeistSans', ...fontFamily.sans],
        mono: ['GeistMono', ...fontFamily.mono],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};