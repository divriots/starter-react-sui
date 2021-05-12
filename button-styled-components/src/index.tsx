import styled from 'styled-components';

export const Button = styled.button(({ theme }) => ({
  'font-size': theme.fontSizes[2],
  margin: theme,
  padding: `${theme.space[1]} ${theme.space[3]}`,
  'border-radius': theme.radii[1],
  color: theme.colors.text,
  'background-color': theme.colors.divriots,
  border: theme.borders.thinBlack,
}));