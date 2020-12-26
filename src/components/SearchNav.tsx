import * as Types from '../Types';
import { MAX_DISPLAY_NUMS } from '../_definition';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';
import { setQueryData, setSortKey, setMaxDisplayNum } from '../Actions';

import Btn from './Btn';
import Btn02 from './Btn02';
import TextInput from './TextInput';
import DateInput from './DateInput';
import CheckLabel from './CheckLabel';
import CheckInput from './CheckInput';
import Selector from './Selector';

const SearchNav: React.FC = () => {

  const dispatch = useDispatch();
  const queryData = useSelector((state: Types.RootState) => state.todo.queryData);
  const sortKey = useSelector((state: Types.RootState) => state.todo.queryData.sortKey);
  const keyword = useSelector((state: Types.RootState) => state.todo.queryData.keyword);
  const isShowDoneTodo = useSelector((state: Types.RootState) => state.todo.queryData.isShowDoneTodo);
  const maxDisplayNum = useSelector((state: Types.RootState) => state.todo.maxDisplayNum);
  const [period, setPeriod] = useState({
    start: '',
    end: ''
  });

  const keywordChange = (text) => {
    dispatch(setQueryData({
      ...queryData,
      keyword: text,
    }));
  }

  const peiodChange_start = (date) => {
    setPeriod({
      ...period,
      start: date
    });
    dispatch(setQueryData({
      ...queryData,
      start: date,
    }));
  }

  const peiodChange_end = (date) => {
    setPeriod({
      ...period,
      end: date
    });
    dispatch(setQueryData({
      ...queryData,
      end: date,
    }));
  }

  const sortBtnClickFunc = () => {
    const newSortKey = sortKey === 'asc' ? 'desc' : 'asc';
    dispatch(setSortKey(newSortKey));
  }

  const isShowDoneTodoChangeFunc = () => {
    dispatch(setQueryData({
      ...queryData,
      isShowDoneTodo: isShowDoneTodo ? false : true
    }));
  }

  const clearQueryData = () => {
    dispatch(setQueryData({
      ...queryData,
      keyword: '',
      start: '',
      end: ''
    }));
    setPeriod({
      start: '',
      end: ''
    });
  }

  const maxNamChangeFunc = (e) => {
    dispatch(setMaxDisplayNum(Number(e.target.value)));
  }

  const createSortBtn = () => {
    let btnText: string;
    if (sortKey === 'asc') {
      btnText = '↓';
    } else {
      btnText = '↑';
    }
    return <Btn onClick={sortBtnClickFunc}>
      {btnText}
    </Btn>
  }

  return <Root>
    <Inner>
      <DateInputWrapper>
        <DateInput date={period.start} onChange={peiodChange_start} max={period.end} />
      </DateInputWrapper>
      〜
      <DateInputWrapper>
        <DateInput date={period.end} onChange={peiodChange_end} min={period.start} />
      </DateInputWrapper>
    </Inner>
    <Inner>
      <TextInputWrapper>
        <TextInput text={keyword} onChange={keywordChange} placeholder='keyword' />
      </TextInputWrapper>
    </Inner>
    <Inner>
      <CheckLabelWraper>
        <CheckLabel forText="isShowDoneTodo" checked={!isShowDoneTodo}>
          <CheckInput id="isShowDoneTodo" checked={isShowDoneTodo} onChange={isShowDoneTodoChangeFunc} />
            DONE を含める
        </CheckLabel>
      </CheckLabelWraper>
      <SelectorWrapper>
        <Selector
          options={MAX_DISPLAY_NUMS}
          onChange={maxNamChangeFunc}
          value={maxDisplayNum}
        />
      </SelectorWrapper>
      <SortBtnWrapper>
        {createSortBtn()}
      </SortBtnWrapper>
    </Inner>

    {(() => {
      if (queryData.keyword !== '' || queryData.start !== '' || queryData.end !== '') {
        return <ClearBtnWrpper>
          <Btn02 onClick={clearQueryData}>Clear</Btn02>
        </ClearBtnWrpper>;
      }
    })()}
  </Root >;
}

const Root = Styled.div`
  margin-bottom: 15px;
  padding-bottom: 20px;
  border-bottom: 1px dotted #000;
`;

const Inner = Styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-top: 5px;
  &:first-child{
    margin-top: 0;
  }
`;

const DateInputWrapper = Styled.div`
  width: 47%;
`;

const TextInputWrapper = Styled.div`
  width: 100%;
`;

const ClearBtnWrpper = Styled.div`
  text-align: center;
  padding-top: 10px;
  margin-bottom: -10px;
`;

const CheckLabelWraper = Styled.div`
  width: calc(50% - 23px);
`;
const SelectorWrapper = Styled.div`
  width: calc(50% - 23px);
`;
const SortBtnWrapper = Styled.div`
  width: 36px;
`;

export default SearchNav;