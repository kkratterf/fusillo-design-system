import type { Preview, Renderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { GeistSans, GeistMono } from 'geist/font';
import '../style/foundations.css';
import '../style/global.css';
import '../style/tokens.css';

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