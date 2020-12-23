import * as Types from '../Types';
import React from "react";
import Styled from 'styled-components';

interface PropsType {
  date: string;
}

const DateDisplay: React.FC<PropsType> = ({ date }) => {
  return <Root>
    {date}
  </Root>
}

const Root = Styled.div`
  display: block;
  font-size: 1rem;
`;

export default DateDisplay;