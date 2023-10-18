import type { Preview } from "@storybook/react";
import '../style/global.css';

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