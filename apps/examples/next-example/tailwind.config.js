/** @type {import('tailwindcss').Config} */
const DesignSystem = require('design-system/tailwind.config');
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../../design-system/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...DesignSystem.theme,
    extend: {
      ...DesignSystem.theme.extend,
    },
  },
  plugins: [require('tailwindcss-animate')],
};