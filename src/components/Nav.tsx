import React from 'react';
import Styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as Types from '../Types';
import { logout } from '../Actions';

// component
import Btn, { Button } from '../components/Btn';

const Nav: React.FC = () => {

  const displayName = useSelector((state: Types.RootState) => state.user.user?.displayName);
  console.log('----------------');
  console.log(displayName);
  console.log('----------------');

  const dispatch = useDispatch();

  const clickLogoutBtn = () => {
    dispatch(logout());
  }

  return <>
    <Root>
      <Logo>Weyc</Logo>
      <NavLogoutBtn onClick={clickLogoutBtn}>LOGOUT</NavLogoutBtn>
    </Root>
    <Space />
  </>
};

const Logo = Styled.div`
  display: block;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  font-weight: 700;
`;

const NavLogoutBtn = Styled(Button)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    padding: 0;
    width: 80px;
    text-align: center;
`;

const Root = Styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 40px;
  background: #555;
  color: #fff;
`;

const Space = Styled.div`
  width: 100%;
  padding-top: 40px;
`;

export default Nav;