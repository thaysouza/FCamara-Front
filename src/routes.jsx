import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './page/home'
import CadastroPage from './page/cadastro';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
    )
}

export default MainRoutes;