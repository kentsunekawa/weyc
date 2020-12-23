import React, { Children } from "react";
import Styled from 'styled-components';

interface PropsType {
  forText: string;
  isChecked?: boolean;
  text?: string;
}

const CheckBtn: React.FC<PropsType> = ({ forText, isChecked, children, text }) => {
  return <Label htmlFor={forText}>
    <Circle isChecked={isChecked} />
    {children}
    {(() => {
      if (text) {
        return <Text>{text}</Text>;
      }
    })()}
  </Label>
}

const Label = Styled.label`
  display: flex;
  align-items: center;
  align-content: center;
  input{
    display: none;
  }
`;

const Circle = Styled.span<{ isChecked?: boolean }>`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  border-radius: 50%;
  &:before{
    display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 50%;
    height: 80%;
    border-right: 3px solid #333;
    border-bottom: 3px solid #333;
  }
`;

const Text = Styled.span`
  display: inline-block;
  margin-left: .5em;
`;

export default CheckBtn;