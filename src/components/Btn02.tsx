import React from "react";
import * as CommonBtn02 from '../style/CommonBtn02';

type PropTypes = {
  onClick?: any
}

const Btn02: React.FC<PropTypes> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>
}

export const Button = CommonBtn02.Wrapper.withComponent('button');

export default Btn02;