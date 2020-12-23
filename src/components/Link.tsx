import React from 'react';
import styled from 'styled-components';

interface PropsTypes {
  href: string;
}

const Link: React.FC<PropsTypes> = props => {
  return <Wrapper href={props.href} target="_blank">
    nosh
  </Wrapper>;
}

const Wrapper = styled.a`
  display: block;
  background: #ddd;
  color: #000;
  transition: background-color .3s, color .3s;
  &:hover{
    background: #000;
    color: #000;
  }
`;

export default Link;