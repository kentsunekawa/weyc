import * as Types from '../Types';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import Styled from 'styled-components';
import { deleteTodo } from '../Actions';
import DateDisplay from './DateDisplay';
import TodoName from './TodoName';
import CheckIcon from './CheckIcon';
import CheckBtn from './CheckBtn';
import DeleteBtn from './DeleteBtn';
import Modal from './Modal';
import EditTodo from './EditTodo';


interface PropTypes extends Types.Todo { };

const TodoCard: React.FC<PropTypes> = ({ id, limit, name, isDone }) => {

  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState('');

  const toggleEditModal = () => {
    editingId === '' ? setEditingId(id) : setEditingId('');

  }

  const deleteBtnClick = () => {
    if (window.confirm('Do you really want to delete this TODO?')) {
      dispatch(deleteTodo(id));
    }
  }

  return <Root>
    {(() => {
      if (editingId !== '') {
        return <Modal funcToClose={toggleEditModal}>
          <EditTodo id={id} name={name} limit={limit} isDone={isDone} onUpdateFunc={toggleEditModal} />
        </Modal>
      }
    })()}
    <Inner isDisabled={isDone}>
      <Btn onClick={toggleEditModal}>
        <BtnInner>
          <CheckIconArea>
            <CheckBtn forText={id} isChecked={isDone}>
              <CheckIcon isChecked={isDone} />
            </CheckBtn>
          </CheckIconArea>
          <Main>
            <DateWrapper>
              <DateDisplay date={limit} />
            </DateWrapper>
            <TodoName todoName={name} />
          </Main>
        </BtnInner>
      </Btn>
    </Inner>
    <DleteBtnWrapper>
      <DeleteBtn clickFunc={deleteBtnClick} />
    </DleteBtnWrapper>
  </Root>;
}

interface InnerProps {
  isDisabled: boolean
}

const Root = Styled.div`
  display: block;
  width: 100%;
  position: relative;
  
`;

const Inner = Styled.div<InnerProps>`
  opacity: ${({ isDisabled }) => (isDisabled ? .7 : 1)};
  box-shadow: ${({ isDisabled }) => (isDisabled ? 'none' : '0px 0px 14px -3px rgba(0,0,0,0.34)')};
  transform: ${({ isDisabled }) => (isDisabled ? 'translateX(20px)' : 'none')};
  background: #fff;
`;

const Btn = Styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid #ddd; */
  padding: 10px;
  border-radius: 3px;
`;

const DleteBtnWrapper = Styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(20%, -20%);
`;

const DateWrapper = Styled.div`
  display: block;
  width: 100%;
  margin-bottom: 5px;
`;

const BtnInner = Styled.div`
  display: flex;
  width: 100%;
`;

const CheckIconArea = Styled.div`
  display: flex;
  width: 30px;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

const Main = Styled.div`
  width: calc(100% - 30px);
`;

export default TodoCard;