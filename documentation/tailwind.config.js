const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const designSystemConfig = require('design-system/tailwind.config');
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
      spacing: {
        0.5: '2px',
        1.5: '6px',
        2.5: '10px',
        3.5: '14px',
      },
      fontFamily: {
        sans: ['var(--geist-sans)', ...fontFamily.sans],
        mono: ['var(--geist-mono)', ...fontFamily.mono],
      },
      backgroundImage: {
        'dots': "url('/dots.svg')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
