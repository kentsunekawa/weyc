import _ from 'lodash';
import * as Types from '../Types';
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';
import TodoCard from './TodoCard';
import { requestTodosData } from '../Actions';

type PropTypes = {

}

const TodoList: React.FC<PropTypes> = ({ }) => {

  const isInitialRender = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      dispatch(requestTodosData());
    }
  });

  const todos = useSelector((state: Types.RootState) => state.todo.todos);
  const queryData = useSelector((state: Types.RootState) => state.todo.queryData);
  const maxDisplayNum = useSelector((state: Types.RootState) => state.todo.maxDisplayNum);

  const createTodoCards = () => {
    const sortedTodos = _.orderBy(todos, 'limit', queryData.sortKey);
    let totalDisplayNum = 0;
    let TodoCards: JSX.Element[] = [];
    for (let i = 0; i < sortedTodos.length; i++) {
      if (totalDisplayNum >= maxDisplayNum) {
        break;
      }
      const currentTodo = sortedTodos[i];
      if (!queryData.isShowDoneTodo && currentTodo.isDone) {
        continue;
      }
      if (queryData.keyword !== '' && !_.includes(currentTodo.name, queryData.keyword)) {
        continue;
      }
      if (queryData.start !== '' && (new Date(currentTodo.limit).getTime() < new Date(queryData.start).getTime())) {
        continue;
      }
      if (queryData.end !== '' && (new Date(queryData.end).getTime() < new Date(currentTodo.limit).getTime())) {
        continue;
      }
      totalDisplayNum++;
      TodoCards.push(<Item key={totalDisplayNum}><TodoCard {...currentTodo} /></Item>);
    }
    if (TodoCards.length > 0) {
      return TodoCards;
    } else {
      return <Msg>
        No displayable todo exist.
        </Msg >;
    }
  }

  return <Root>
    <List>
      {createTodoCards()}
    </List>
  </Root>;
}

const Root = Styled.div`
  display: block;
`;

const List = Styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Item = Styled.li`
  width: 100%;
  margin-top: 10px;
  &:first-child{
    margin-top: 0;
  }
`;

const Msg = Styled.p`
  display: block;
  width: 100%;
  text-align: center;
`;

export default TodoList;