import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CadastroPage from './views/cadastro';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
    )
}

export default MainRoutes;