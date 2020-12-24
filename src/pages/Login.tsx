import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import { login } from '../Actions';
import * as Types from '../Types';
import { checkIsLogin, changeLoadingStatus } from '../Actions';

// component
import Btn from '../components/Btn';
// import Loading from '../components/Loading';

const Login: React.FC = () => {

  const history = useHistory();
  const isInitialRander = useRef(true);

  const dispatch = useDispatch();

  const user = useSelector((state: Types.RootState) => state.user.user);
  // const isLoading = useSelector((state: Types.RootState) => state.user.isLoading);


  const clickLoginBtnFunc = () => {
    dispatch(login());
  }

  useEffect(() => {
    if (user !== null) {
      history.push('/');
    } else {
      if (isInitialRander.current) {
        isInitialRander.current = false;
        dispatch(checkIsLogin());
      } else {
        dispatch(changeLoadingStatus(false));
      }
    }
  });

  return <Wrapper>
    {/* {(() => {
      if (isLoading) {
        return <Loading />;
      }
    })()} */}
    <BtnWrapper>
      <Btn onClick={clickLoginBtnFunc}>Google アカウントでログインする</Btn>
    </BtnWrapper>
  </Wrapper >;
}

const Wrapper = Styled.div`
  display: block;
`;

const BtnWrapper = Styled.div`
  width: 80%;
  margin: 40px auto 0;
`;

export default Login;