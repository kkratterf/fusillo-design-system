// Import core
import type { Preview, Renderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
// Import customs
import '@/style/globals.css';

const preview: Preview = {
  decorators: [
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
