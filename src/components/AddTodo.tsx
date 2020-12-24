import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../Actions';
import Styled from 'styled-components';
import { Lib } from '../_definition';

// components
import TextInput from './TextInput';
import DateInput from './DateInput';
import Btn, { Button } from './Btn';
import ErrorMsg from './ErrorMsg';

interface PropsType { }

const AddTodo: React.FC<PropsType> = ({ }) => {

  const [name, setName] = useState('');
  const [limit, setLimit] = useState(Lib.formatDate(new Date()));
  const [isError, setIsError] = useState({ name: false, limit: false });

  const nameChangeEvent = (text) => {
    setName(text);
    setIsError({
      ...isError,
      name: text != '' ? false : true
    });
  }

  const dateChangeEvent = (date) => {
    setLimit(date);
    setIsError({
      ...isError,
      limit: date != '' ? false : true
    });
  }

  const dispatch = useDispatch();

  const addBtnClick = () => {
    if (name != '' && limit != '') {
      dispatch(addTodo({
        id: '',
        name,
        isDone: false,
        limit,
      }));
      setName('');
      setLimit('');
    } else {
      setIsError({
        name: name != '' ? false : true,
        limit: limit != '' ? false : true,
      });
    }
  };

  return <Wrapper>
    <LeftBox>
      <ErrorMsg isError={isError.name} msg='タイトルを入力してください。'>
        <TextInput text={name} onChange={nameChangeEvent} placeholder='todo' />
      </ErrorMsg>
      <InputBox>
        <ErrorMsg isError={isError.limit} msg='期限を入力してください。'>
          <DateInput date={limit} onChange={dateChangeEvent} />
        </ErrorMsg>
      </InputBox>
    </LeftBox>
    <RightBox>
      <CreateBtn onClick={addBtnClick}>Create</CreateBtn>
    </RightBox>
  </Wrapper>
}

const Wrapper = Styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
`;

const LeftBox = Styled.div`
  width: calc(100% - 90px);
`;

const RightBox = Styled.div`
  width: 80px;
`;

const CreateBtn = Styled(Button)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const InputBox = Styled.div`
  margin-top: 5px;
`;

export default AddTodo;