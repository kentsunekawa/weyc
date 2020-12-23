import React from 'react';
import Styled from 'styled-components';

const Card: React.FC = ({ children }) => {
  return <Wrapper>
    {children}
  </Wrapper>
};

export const Wrapper = Styled.div`
  display: block;
  width: 90%;
  margin: 0 auto 20px;
  max-width: 500px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
`;

export default Card;