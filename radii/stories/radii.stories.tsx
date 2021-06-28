import React from 'react';
import { theme } from '~/all';
import { SystemUIShowcases } from '@divriots/dockit-react/systemui-showcases';
import { StoryLayout } from '~/layout';
export default StoryLayout;

export const radii = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderRadius"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: '0 12px 48px rgba(149, 157, 165, 0.3)',
      bg: '#22863a',
    }}
  />
);
