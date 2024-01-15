/** @type {import('tailwindcss').Config} */
const DesignSystem = require('design-system/tailwind.config');
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
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
