import React from 'react';
import { Theme, theme } from '../components/theme';

const theme = useTheme;

const ThemeDecorator = (storyFn) => (
  <Theme theme={theme}>{storyFn()}</Theme>
);

export default ThemeDecorator;
