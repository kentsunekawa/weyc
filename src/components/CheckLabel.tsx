import React from "react";
import Styled from 'styled-components';
import * as CommonBtn from '../style/CommonBtn';

interface PropsType {
  forText: string;
  checked?: boolean;
}

const CheckLabel: React.FC<PropsType> = ({ forText, checked, children }) => {
  return <Root checked={checked} htmlFor={forText}>
    {children}
  </Root >
}

export const Root = Styled(CommonBtn.Wrapper.withComponent('label'))`
  opacity: ${({ checked }) => (checked ? .5 : 1)};
  input{
    display: none;
  }
`;

export default CheckLabel;