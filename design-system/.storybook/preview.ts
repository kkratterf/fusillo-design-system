import type { Preview } from "@storybook/react";
import '../style/foundations.css';
import '../style/global.css';
import '../style/tokens.css';

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: false, // Enable dark mode by default on all stories
    },
    // Optional (Default: 'dark')
    className: {
      defaultValue: 'dark', // Set your custom dark mode class name
    },
  },
  parameters: {
    backgrounds: {
      default: 'Neutral',
      values: [
        { name: 'Neutral', value: '#F4F4F5' },
        { name: 'Light', value: '#FFFFFF' },
        { name: 'Dark', value: '#09090B' },
      ],
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