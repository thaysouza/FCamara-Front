import React from 'react';
import FormLogin from '../Components/formlogin';
import '../styles/background.css';
import Grafismos from '../Components/grafismos';

const LoginPage = () => {
  return (
    <>
      <div className='container-bg'>
        <div>
          <h2 className='text-cadastro'>Faça seu login</h2>
          <h5 className='text-info-cadastro'>
            Insira e-mail e senha para entrar
          </h5>
          <FormLogin />
          <Grafismos />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
