import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

export const MdxLayout = ({ components = {}, onSwitch, ...rest }) => (
	<MDXProvider components={{ ...components }}>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css/out/light.min.css" />
		<CoreLayout logo={
			<div style={{ fontWeight: 700, fontSize: '2rem', fontFamily: 'system-ui, sans-serif' }}>
				System UI
			</div>
		}
			{...rest} />
	</MDXProvider>
);
