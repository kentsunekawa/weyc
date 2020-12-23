import Styled from 'styled-components';

export const Root = Styled.div`
  display: block;
  height: calc(2.4em + 4px);
  border-radius: calc(1.2em + 2px);
  border: 2px solid #333;
  overflow: hidden;
  background: #fff;
`;

export const Input = Styled.input`
  display: block;
  width: 100%;
  line-height: 2.4em;
  padding: 0 1em;
`;
