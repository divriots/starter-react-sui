import React from 'react';
import { MdxLayout } from '~/layout';
import { ThemeProvider } from 'theme-ui'

import { theme } from '~/all';

export const Layout = props => (
  <ThemeProvider theme={theme}>
    <MdxLayout {...props} />
  </ThemeProvider >
);
