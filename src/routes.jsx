import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home';
import cadastro from './pages/cadastro';
import LoginPage from './pages/login';
import AgendamentoPage from './pages/agendamento';
import EntryPage from './pages/entry';


const MainRoutes = () => {
  const token  = localStorage.getItem('token'); 

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/cadastro' component={cadastro} />
      <Route path='/login' >
      {token ? <Redirect to='/entry'/> : <LoginPage /> }
      </Route>
      <Route path='/agendamento' component={AgendamentoPage} />
      <Route path='/entry' component={EntryPage} />
    </Switch>
  );
};

export default MainRoutes;
