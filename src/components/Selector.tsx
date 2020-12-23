import React from "react";
import Styled from 'styled-components';
import * as CommonBtn from '../style/CommonBtn';

interface PropsType {
  options: Option[];
  onChange?: any;
  value: string | number;
}

interface Option {
  label: string;
  value: string | number;
};

const Selector: React.FC<PropsType> = ({ options, onChange, value }) => {

  const createOptions = () => {
    const optionElems = options.map((option, i) => {
      return <option key={i} value={option.value}>{option.label}</option>
    });
    return optionElems;
  }

  return <Wrapper>
    <Select value={value} onChange={onChange}>
      {createOptions()}
    </Select>
  </Wrapper>;
}

const Wrapper = Styled.div`
  position: relative;
  &:after{
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: #ffffff transparent transparent transparent;
  }
`;

const Select = Styled(CommonBtn.Wrapper.withComponent('select'))`
  padding-right: 30px;
  border: none;
  outline: none;
  font-size: 1.6rem;
  line-height: 1em;
`;

export default Selector;
