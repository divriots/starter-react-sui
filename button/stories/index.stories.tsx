import React from 'react';
import {
  Button,
  ButtonDanger,
  ButtonOutline,
  ButtonPrimary,
  ButtonClose,
  ButtonGroup,
  ButtonTableList,
  ButtonInvisible,
} from '../index';
import { decorators } from '~/story-decorator';

export default {
  decorators
}


export const buttons = () => (
  <>
    <Button>Button</Button>
    <ButtonDanger>Button Danger</ButtonDanger>
    <ButtonOutline>Button Outline</ButtonOutline>
    <ButtonPrimary>Button Primary</ButtonPrimary>
    <ButtonInvisible>Button Invisible</ButtonInvisible>
    <ButtonClose onClick={() => window.alert('button clicked')} />

    <ButtonGroup display="block" my={2}>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>

    <ButtonTableList>Button Table List</ButtonTableList>
  </>
);
