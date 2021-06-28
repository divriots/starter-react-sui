import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button(({ theme }) => ({
  'font-size': theme?.fontSizes?.[2],
  margin: theme,
  padding: `${theme.space[1]} ${theme.space[3]}`,
  'border-radius': theme.radii[1],
  color: theme.colors.text,
  'background-color': theme.colors.divriots,
  border: theme.borders.thinBlack,
}));


type ButtonProps = {
  /**
   * Theme object abiding system-ui theme definition. It may be injected via ThemeProvider.
   */
  theme: Record<string, any>;
};

/**
  Button component that the user can press to trigger an action.
 */
export const Button = (props: ButtonProps) => <StyledButton {...props} />;