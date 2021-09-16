import React from 'react';
import { Link } from 'react-router-dom';
import FormLogin from '../Components/formlogin';
import '../styles/background.css';
import GrafismosOrange from '../Components/grafismos_orange';
import LogoWhite from '../Components/menu/logo-white';
import '../styles/nav.css';

const LoginPage = () => {
  return (
    <>
      <header id='header' className="menu back-orange">
        <Link to="/">
          <LogoWhite />
        </Link>
      </header>
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
