import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import CadastroPage from './pages/cadastro';
import LoginPage from './pages/login';
import UnidadePage from './pages/unidade';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cadastro' element={<CadastroPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/unidade' element={<UnidadePage />} />
    </Routes>
  );
};

export default MainRoutes;
