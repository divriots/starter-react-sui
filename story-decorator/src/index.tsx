import React from 'react';
import merge from 'deepmerge';
import { ThemeProvider, theme as primerTheme } from '@primer/components'
import { theme } from '~/theme';

const customTheme = merge(primerTheme, theme);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={customTheme}>
      <Story />
    </ThemeProvider>
  ),
];