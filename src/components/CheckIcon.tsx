import * as Types from '../Types';
import React from "react";
import Styled from 'styled-components';

interface PropsType {
  isChecked: boolean;
  id?: string;
  changeEvent?: any;
}

const CheckIcon: React.FC<PropsType> = ({ isChecked, id, changeEvent }) => {

  const onChange = () => {
    if (changeEvent) changeEvent();
  }

  return <Root>
    <Input type="checkbox" checked={isChecked} onChange={onChange} id={id} />
  </Root>
}

const Root = Styled.div`
  display: block;
`;

const Input = Styled.input`
  display: block;
`;

export default CheckIcon;