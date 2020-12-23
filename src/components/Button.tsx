import React from 'react';
import styled from 'styled-components';

interface PropsTyps {
  isPrimary?: boolean;
  onClick: (text: string) => void;

};

const Button: React.FC<PropsTyps> = (props) => {

  const clickEvent = (): void => {
    props.onClick('bbbb');
  }

  if (props.isPrimary) {
    return <Wrapper primary onClick={clickEvent}>
      <Inner>{props.children}</Inner>
    </Wrapper >;
  } else {
    return <Wrapper onClick={clickEvent}>
      <Inner>{props.children}</Inner>
    </Wrapper >;
  }
}
export default Button

const Wrapper = styled.button<{ primary?: boolean }>`
  display: block;
  background: ${props => props.primary ? "#f00" : "#ddd"};
  width: 200px;
  height: 150px;
`;

const Inner = styled.span`
  font-size: 20px;
  color: #000;
`;