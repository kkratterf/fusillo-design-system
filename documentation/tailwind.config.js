/** @type {import('tailwindcss').Config} */
const designSystemConfig = require('../design-system/tailwind.config');
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../design-system/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...designSystemConfig.theme,
    extend: {
      ...designSystemConfig.theme.extend,
      fontFamily: {
        sans: [
          'Inter',
        ],
      },
    },
  },
  plugins: [],
};
