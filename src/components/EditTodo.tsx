import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import Styled from 'styled-components';
import * as Types from '../Types';
import { updateTodo } from '../Actions'

// components
import TextInput from "./TextInput";
import DateInput from './DateInput';
import CheckBtn from './CheckBtn';
import CheckIcon from './CheckIcon';
import Btn from './Btn';

type PropsType = {
  onUpdateFunc: any;
} & Types.Todo;

const EditTodo: React.FC<PropsType> = ({ id, limit, name, isDone, onUpdateFunc }) => {

  const dispatch = useDispatch();

  const [editName, setEditName] = useState(name);
  const [editLimit, setEditLimit] = useState(limit);
  const [editIsDone, setEditIsDone] = useState(isDone);

  const textChange = (value) => {
    setEditName(value);
  }

  const dateChange = (value) => {
    setEditLimit(value);
  }

  const statusChange = () => {
    editIsDone ? setEditIsDone(false) : setEditIsDone(true);
  }

  const update = () => {
    dispatch(updateTodo({
      id,
      limit: editLimit,
      name: editName,
      isDone: editIsDone
    }));
    onUpdateFunc();
  }

  return <Root>
    <InputWrapper>
      <InputLabel>Title:</InputLabel>
      <TextInput text={editName} onChange={textChange} />
    </InputWrapper>
    <InputWrapper>
      <InputLabel>Limit:</InputLabel>
      <DateInput date={editLimit} onChange={dateChange} />
    </InputWrapper>
    <ChackBtnWrapper>
      <CheckBtn forText={`${id}_edit`} isChecked={editIsDone} text={editIsDone ? 'DONE' : 'UNDONE'}>
        <CheckIcon isChecked={editIsDone} id={`${id}_edit`} changeEvent={statusChange} />
      </CheckBtn>
    </ChackBtnWrapper>
    <BtnWrapper>
      <Btn onClick={update}>UPDATE</Btn>
    </BtnWrapper>
  </Root >
};

const Root = Styled.div`
  display: block;
`;

const InputWrapper = Styled.div`
  margin-bottom: 8px;
  span{
    display: block;
    margin-bottom: 3px;
  }
`;

const InputLabel = Styled.span`
  padding-left: 5px;
`;

const ChackBtnWrapper = Styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 15px;
`;

const BtnWrapper = Styled.div`
  margin-top: 20px;
`;

export default EditTodo;