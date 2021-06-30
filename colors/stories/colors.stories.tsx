import React from 'react';
import { theme } from '~/all';
import { SystemUIShowcases } from '@divriots/dockit-react/systemui-showcases';
import { StoryLayout } from '~/layout';
export default StoryLayout;

export const backgroundColor = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="bg"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: '0 12px 48px rgba(149, 157, 165, 0.3)',
      borderRadius: 4,
      checkeredBackground: true,
    }}
  />);

export const textColor = () => <SystemUIShowcases theme={theme} showcaseKey="color" />;
