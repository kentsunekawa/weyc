import styled from 'styled-components';

interface PropsTypes {
  isActive?: boolean
}

const Box = styled.div<PropsTypes>`
  border: 1px solid #000;
  background: ${props => props.isActive ? '#ddd' : '#fff'};
  &:hover{
    background: #000;
    color: #fff;
  }
  span{
    display: block;
    background: #f00;
  }
`;

export default Box;

