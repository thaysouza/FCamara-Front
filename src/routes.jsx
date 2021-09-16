import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home';
import cadastro from './pages/cadastro';
import LoginPage from './pages/login';
import UnidadePage from './pages/unidade';
import EntryPage from './pages/entry';
import DatePage from './pages/date';


const MainRoutes = () => {
  const token  = localStorage.getItem('token'); 

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/cadastro' component={cadastro} />
      <Route path='/login' >
      {token ? <Redirect to='/entry'/> : <LoginPage /> }
      </Route>
      <Route path='/unidade' component={UnidadePage} />
      <Route path='/entry' component={EntryPage} />
      <Route path='/date' component={DatePage} />
    </Switch>
  );
};

export default MainRoutes;
