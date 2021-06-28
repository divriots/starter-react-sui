import React from 'react';
import { theme } from '~/all';
import { SystemUIShowcases } from '@divriots/dockit-react/systemui-showcases';
import { StoryLayout } from '~/layout';
export default StoryLayout;

export const space = () => <SystemUIShowcases theme={theme} showcaseKey="space" />;
