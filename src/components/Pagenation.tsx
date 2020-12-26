import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import _ from 'lodash';
import * as Types from '../Types';
import { PATH } from '../_definition';

interface PropsType {
  currentPage: number;
}

const Pagenation: React.FC<PropsType> = ({ currentPage }) => {

  const history = useHistory();
  const todos = useSelector((state: Types.RootState) => state.todo.todos);
  const maxDisplayNum = useSelector((state: Types.RootState) => state.todo.maxDisplayNum);
  const isShowDoneTodo = useSelector((state: Types.RootState) => state.todo.queryData.isShowDoneTodo);

  const currentTodos = () => {
    if (!isShowDoneTodo) {
      return _.filter(todos, { isDone: false });
    } else {
      return todos;
    }
  }

  const pageLength = Math.ceil(currentTodos().length / maxDisplayNum);

  if (0 < pageLength && pageLength < currentPage) {
    history.push(`${PATH.todo}/1`);
  }

  const isCreatePageBtn = (currentNum: number, currentPage: number): boolean => {
    if (currentPage - 2 <= currentNum && currentNum <= currentPage + 2) {
      return true;
    }
    return false;
  }

  const createList = () => {
    let isInsertableForwardDots = true;
    let isInsertableBackwardDots = false;
    let isContinuousDots = false;
    return <List>
      {(() => {
        let items: any = [];
        for (let i = 0; i < pageLength; i++) {
          const currentNum = i + 1;
          if (currentNum === 1 || currentNum === pageLength || isCreatePageBtn(currentNum, currentPage)) {
            if (2 <= currentNum) {
              isInsertableBackwardDots = true;
            }
            if (!isInsertableForwardDots) {
              isContinuousDots = false;
            }
            if (currentNum === currentPage) {
              items.push(<Item key={currentNum}>
                <Btn active>
                  <span>{currentNum}</span>
                </Btn>
              </Item>);
            } else {
              items.push(<Item key={currentNum}>
                <Btn>
                  <Link to={`${PATH.todo}/${currentNum}`}>{currentNum}</Link>
                </Btn>
              </Item>);
            }
          } else {
            if (isInsertableForwardDots) {
              isInsertableForwardDots = false;
              isContinuousDots = true;
              items.push(<Item key={currentNum}><span>…</span></Item>);
            }
            if (isInsertableBackwardDots && !isContinuousDots) {
              isInsertableBackwardDots = true;
              items.push(<Item key={currentNum}><span>…</span></Item>);
            }
          }
        }
        if (items.length > 0) {
          return items;
        } else {
          return '';
        }
      })()}
    </List>
  }

  if (pageLength > 1) {
    return <Root>
      <TotalNumArea>Total: {todos.length}</TotalNumArea>
      <PageBtns>
        {createList()}
      </PageBtns>
    </Root>;
  } else {
    return null;
  }
}

const Root = Styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
  <align-content></align-content>: center;
`;

const PageBtns = Styled.div`
  width: 100%;
`;

const TotalNumArea = Styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

const List = Styled.ul`
  display: flex;
  justify-content: center;
`;

const Item = Styled.li`
  width: 10%;
  margin: 0 .5%;
  span{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const Btn = Styled.button<{ active?: boolean }>`
  position: relative;
  display: block;
  background: ${props => props.active ? "#333" : '#fff'};
  color: ${props => props.active ? "#fff" : 'auto'};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  &:before{
    content: '';
    display: block;
    padding-top: 100%;
  }
  a,
  span{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export default Pagenation;