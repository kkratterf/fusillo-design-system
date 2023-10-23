import type { Preview } from '@storybook/react';
import '../style/foundations.css';
import '../style/global.css';
import '../style/tokens.css';

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: false,
    },
    className: {
      defaultValue: 'dark', // Set your custom dark mode class name
    },
  },
  parameters: {
    backgrounds: {
      disable: true,
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