/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Geist',
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      mono: [
        'Geist Mono',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    borderRadius: {
      'radius-none': 'var(--border-radius-none)',
      'radius-sm': 'var(--border-radius-sm)',
      radius: 'var(--border-radius)',
      'radius-lg': 'var(--border-radius-lg)',
      'radius-full': 'var(--border-radius-full)',
    },
    extend: {
      colors: {
        'color-bg-brand': 'var(--color-bg-brand)', 
      }
    },
  },
  plugins: [],
};
