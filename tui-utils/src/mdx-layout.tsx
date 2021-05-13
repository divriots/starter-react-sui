import React from 'react';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';
import { ThemeProvider } from 'theme-ui'

import { theme } from '~/theme';

export const Layout = props => (
  <ThemeProvider theme={theme}>
    <CssLayout {...props} />
  </ThemeProvider >
);
