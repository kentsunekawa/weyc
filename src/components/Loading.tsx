import React from 'react';
import Styled from 'styled-components';

const Loading: React.FC = () => {
  return <Root>
    Loading...
  </Root>;
}

const Root = Styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, .8);
`;

export default Loading;