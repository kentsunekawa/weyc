import * as Types from '../Types';
import React from "react";
import Styled from 'styled-components';
import * as InputBox from '../style/InputBox';

type PropTypes = {
  date: string;
  onChange?: any;
  min?: string;
  max?: string;
}

const DateInput: React.FC<PropTypes> = ({ date, onChange, min, max }) => {

  const changeEvent = (e) => {
    onChange(e.target.value);
  }

  return <Root>
    <InputBox.Input type="date" value={date} onChange={changeEvent} min={min} max={max} />
  </Root>
}

export const Root = Styled(InputBox.Root)``;

export const Input = Styled(InputBox.Input)`
  font-size: 1.6rem;
  height: 100%;
`;

export default DateInput;