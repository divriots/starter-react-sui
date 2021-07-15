import React from 'react';
import { theme } from '~/all';
import { SystemUIShowcases } from '@divriots/dockit-react/systemui-showcases';
import { StoryLayout } from '~/layout';
export default StoryLayout;

export const borderWidth = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderWidth"
    componentProps={{
      width: '6rem',
      height: '6rem',
      boxShadow: '0 12px 48px rgba(149, 157, 165, 0.3)',
      borderColor: '#22863a',
      borderStyle: 'solid',
    }}
  />
);
export const borderStyle = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderStyle"
    componentProps={{
      width: '6rem',
      height: '6rem',
      boxShadow: '0 12px 48px rgba(149, 157, 165, 0.3)',
      borderColor: '#22863a',
    }}
  />
);

export const borderColor = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderColor"
    componentProps={{
      width: '6rem',
      height: '6rem',
      boxShadow: '0 12px 48px rgba(149, 157, 165, 0.3)',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: '5px',
    }}
  />
);

export const border = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="border"
    componentProps={{
      width: '6rem',
      height: '6rem',
      boxShadow: 'large',
    }}
  />)
  ;
