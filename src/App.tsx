import * as Types from './Types';
import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Styled from 'styled-components';
import { PATH } from './_definition';

// pages
import Login from './pages/Login';
import Todo from './pages/Todo';

// components
import GlobalStyle from './style/GlobalStyle';
import Auth from './components/Auth';
import Nav from './components/Nav';
import Loading from './components/Loading';

// import Loading from './components/Loading';

const App: React.FC = () => {

  return <BrowserRouter>
    <Loading />
    <Nav />
    <Switch>
      <Route path={PATH.login} component={Login} />
      <Auth>
        <Switch>
          <Route exact path={PATH.root} component={Todo} />
        </Switch>
      </Auth>
    </Switch>
    <GlobalStyle />
  </BrowserRouter>;
}

export default App;
