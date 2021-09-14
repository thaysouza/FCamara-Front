import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import cadastro from './pages/cadastro';
import LoginPage from './pages/login';
import UnidadePage from './pages/unidade';
import EntryPage from './pages/entry';


const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/cadastro' component={cadastro} />
      <Route path='/login' component={LoginPage} />
      <Route path='/unidade' component={UnidadePage} />
      <Route path='/entry' component={EntryPage} />
    </Switch>
  );
};

export default MainRoutes;
