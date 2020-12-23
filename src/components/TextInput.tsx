import * as Types from '../Types';
import React from "react";
import Styled from 'styled-components';
import * as InputBox from '../style/InputBox';

type PropTypes = {
  text: string;
  onChange?: any;
  placeholder?: string;
}

const TextInput: React.FC<PropTypes> = ({ text, onChange, placeholder }) => {

  const changeEvent = (e) => {
    onChange(e.target.value);
  }

  return <Root>
    <Input type="text" value={text} placeholder={placeholder} onChange={changeEvent} />
  </Root>;
}

export const Root = Styled(InputBox.Root)``;

export const Input = Styled(InputBox.Input)``;

export default TextInput;