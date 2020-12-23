import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Types from '../Types';
import * as Actions from '../Actions';

interface PropsType {
  history: any;
}

const Auth: React.FC<PropsType> = ({ children, history }) => {

  const dispatch = useDispatch();
  const user = useSelector((state: Types.RootState) => state.user.user);

  useEffect(() => {
    if (user === null) {
      dispatch(Actions.checkIsLogin());
      history.push('/login');
    }
  });

  return <>
    {children}
  </>;
};

export default withRouter(Auth);