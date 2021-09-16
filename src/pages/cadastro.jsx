import React from 'react';
import { Link } from 'react-router-dom';
import FormCadastro from '../Components/formcadastro';
import '../styles/background.css';
import GrafismosBlue from '../Components/grafismos_blue';
import LogoWhite from '../Components/menu/logo-white';
import '../styles/nav.css';

const ContatoPage = () => {
  return (
    <>
      <header id='header' className="menu back-blue">
        <Link to="/">
          <LogoWhite />
        </Link>
      </header>
      <div className='container-bg colorBlue'>
        <div>
          <h2 className='text-cadastro'>Faça seu cadastro</h2>
          <h5 className='text-info-cadastro'>
            Cadastre-se usando seu nome, e-mail e senha
          </h5>
          <FormCadastro />
          <GrafismosBlue />
        </div>
      </div>
    </>
  );
};

export default ContatoPage;
