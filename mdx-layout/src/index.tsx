import merge from 'deepmerge';
import React from 'react';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';
import { ThemeProvider, theme as primerTheme } from '@primer/components'
import { theme } from '~/theme';

const customTheme = merge(primerTheme, theme);
console.log('--->>> ~ file: index.tsx ~ line 8 ~ customTheme', JSON.stringify(customTheme));

export const Layout = props => (
  <ThemeProvider theme={customTheme}>
    <CssLayout {...props} />
  </ThemeProvider >
);
