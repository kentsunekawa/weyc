import * as Types from '../Types';
import React, { Props } from "react";
import Styled from 'styled-components';

interface PropsType {
  clickFunc: any
}

const DeleteBtn: React.FC<PropsType> = ({ clickFunc }) => {
  return <Root onClick={clickFunc}>
    <Icon></Icon>
  </Root>
};

const Root = Styled.button`
  display: block;
  width: 25px;
  height: 25px;
  background: #333;
  border-radius: 50%;
  overflow: hidden;
`;

const Icon = Styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  &:before,
  &:after{
    content: '';
    position: absolute;
    display: block;
    width: 50%;
    height: 1px;
    background: #fff;
    top: 50%;
    left: 50%;
  }
  &:before{
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:after{
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export default DeleteBtn;