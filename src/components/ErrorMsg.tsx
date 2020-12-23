import * as Types from '../Types';
import React from "react";
import Styled from 'styled-components';

interface PropsType {
  isError: boolean;
  msg?: string;
}

const ErrorMsg: React.FC<PropsType> = ({ isError, msg, children }) => {

  const createMsg = () => {
    const msgText = msg ? msg : '入力エラーがあります。';
    if (isError) {
      return <Msg>{msgText}</Msg>
    }
  }

  return <Root isError={isError}>
    {children}
    {createMsg()}
  </Root>
}

const Root = Styled.div<{ isError: boolean; }>`
  border: ${({ isError }) => (isError ? "1px solid #f00" : "none")};
`;

const Msg = Styled.p`
  display: block;
  color: #f00;
`;

export default ErrorMsg;