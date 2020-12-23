import React from "react";
import Styled from 'styled-components';

interface PropsType {
  id: string;
  checked: boolean;
  onChange: any;
}

const CheckInput: React.FC<PropsType> = ({ id, checked, onChange }) => {
  return <Input type="checkbox" id={id} onChange={onChange} checked={checked} />
}

export const Input = Styled.input`
  
`;

export default CheckInput;