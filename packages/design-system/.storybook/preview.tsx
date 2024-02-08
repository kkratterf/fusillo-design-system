// Import core
import * as React from 'react'
import localFont from 'next/font/local';
import type { Preview, Renderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
// Import customs
import '../style/globals.css';
import '../style/storybook.css';

const GeistSans = localFont({
  src: '../fonts/geist-sans/Geist-Variable.woff2',
  variable: '--font-geist-sans',
});

const GeistMono = localFont({
  src: '../fonts/geist-mono/GeistMono-Variable.woff2',
  variable: '--font-geist-mono',
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`font-sans ${GeistMono.variable} ${GeistSans.variable}`}>
        <Story />
      </div>
    ),
    withThemeByClassName<Renderer>({
      themes: {
        Light: '',
        Dark: 'dark',
      },
      defaultTheme: 'Light',
    }),
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    nextjs: {
      appDirectory: true,
    },
    docs: {
      source: {
        type: 'code',
      },
      themes: {
        Light: '',
        Dark: 'dark',
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
