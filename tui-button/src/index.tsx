import React from 'react';
import { Button as TUIButton } from 'theme-ui';


type ButtonProps = {
	/**
	 * Theme object abiding system-ui theme definition. It may be injected via ThemeProvider.
	 */
	theme: Record<string, any>;
};

/**
	Button component that the user can press to trigger an action.
 */
export const Button = (props: ButtonProps) => <TUIButton {...props} />;