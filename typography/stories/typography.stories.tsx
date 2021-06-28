import React from 'react';
import { theme } from '~/all';
import { SystemUIShowcases } from '@divriots/dockit-react/systemui-showcases';
import { StoryLayout } from '~/layout';
export default StoryLayout;

export const fontSize = () => <SystemUIShowcases theme={theme} showcaseKey="fontSize" />;

export const fontFamily = () => <SystemUIShowcases theme={theme} showcaseKey="fontFamily" />;

export const fontWeight = () => <SystemUIShowcases theme={theme} showcaseKey="fontWeight" />;

export const lineHeight = () => <SystemUIShowcases theme={theme} showcaseKey="lineHeight" />;

export const letterSpacing = () => <SystemUIShowcases theme={theme} showcaseKey="letterSpacing" />;
