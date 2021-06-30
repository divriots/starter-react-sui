import React from 'react';
import { theme } from '~/all';
import { SystemUIShowcases } from '@divriots/dockit-react/systemui-showcases';
import { StoryLayout } from '~/layout';
export default StoryLayout;

export const shadows = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="boxShadow"
    componentProps={{
      width: '8rem',
      height: '8rem',
      borderRadius: 4,
    }}
  />
);