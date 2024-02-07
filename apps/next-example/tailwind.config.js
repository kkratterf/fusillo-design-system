const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const DesignSystem = require('../../packages/design-system/tailwind.config');
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/design-system/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...DesignSystem.theme,
    extend: {
      ...DesignSystem.theme.extend,
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
