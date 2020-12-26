import * as Types from '../Types';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';
import { requestTodosData } from '../Actions';


// components
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import SearchNav from '../components/SearchNav';
import Pagenation from '../components/Pagenation';

const Todo: React.FC = () => {

  interface ParamsTyps { page: string };
  const { page }: ParamsTyps = useParams();

  const isLoaded = useSelector((state: Types.RootState) => state.todo.isLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTodosData());
  });

  return <Wrapper>
    <BottomFixedBox>
      <AddTodo />
    </BottomFixedBox>
    <SearchNav />
    <Pagenation currentPage={Number(page)} />
    {(() => {
      if (isLoaded) {
        return <TodoList currentPage={Number(page)} />;
      } else {
        return <Msg>Loading...</Msg>;
      }
    })()}
  </Wrapper >;
}

const BottomFixedBox = Styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 99;
  background: rgba(255, 255, 255, .9);
  padding: 10px;
  border-top: 1px solid #aaa;
`;

const Wrapper = Styled.div`
  padding: 20px 20px 120px;
`;

const Msg = Styled.div`
  display: block;
  text-align: center;
`;

export default Todo;
