import React from 'react';
import { ThemeProvider } from 'theme-ui'
import { theme } from '~/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];