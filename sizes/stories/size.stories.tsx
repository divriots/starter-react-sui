import React from 'react';
import { theme } from '~/all';
import { SystemUIShowcases } from '@divriots/dockit-react/systemui-showcases';

// don't center these stories because they will get cropped

export const width = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="width"
    componentProps={{
      height: '8rem',
      boxShadow: '0 12px 48px rgba(149, 157, 165, 0.3)',
      bg: '#22863a',
    }}
  />
);

export const height = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="height"
    componentProps={{
      width: '8rem',
      boxShadow: '0 12px 48px rgba(149, 157, 165, 0.3)',
      bg: '#22863a',
    }}
  />
);
