import * as Types from '../Types';
import React from "react";
import Styled from 'styled-components';

const TodoName: React.FC<{ todoName: string }> = ({ todoName }) => {
  return <Root>
    {todoName}
  </Root>
}

const Root = Styled.p`
  display: block;
`;

export default TodoName;