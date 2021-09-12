import React from 'react';
import FormLogin from '../Components/formlogin';
import '../styles/background.css';
import GrafismosOrange from '../Components/grafismos_orange';

const LoginPage = () => {
  return (
    <>
      <div className='container-bg colorOrange'>
        <div>
          <h2 className='text-cadastro'>Faça seu login</h2>
          <h5 className='text-info-cadastro'>
            Insira e-mail e senha para entrar
          </h5>
          <FormLogin />
          <GrafismosOrange />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
