import React from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import * as Types from '../Types';

const Loading: React.FC = () => {

  const isLoading = useSelector((state: Types.RootState) => state.app.isLoading);

  if (isLoading) {
    return <Root>
      Loading...
  </Root>;
  } else {
    return null;
  }


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