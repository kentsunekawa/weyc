import React from "react";
import * as CommonBtn from '../style/CommonBtn';

type PropTypes = {
  onClick?: any
}

const Btn: React.FC<PropTypes> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>
}

export const Button = CommonBtn.Wrapper.withComponent('button');

export default Btn;