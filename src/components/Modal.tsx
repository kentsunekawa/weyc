import React from "react";
import Styled from 'styled-components';

interface PropsType {
  funcToClose: any;
}

const Modal: React.FC<PropsType> = ({ funcToClose, children }) => {
  return <Root>
    <Overlay onClick={funcToClose}></Overlay>
    <Inner>
      {children}
    </Inner>
  </Root>;
}

const Root = Styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;

const Overlay = Styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .8);
`;

const Inner = Styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 5px;
`;

export default Modal;