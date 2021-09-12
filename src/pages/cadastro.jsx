import React from 'react';
import FormCadastro from '../Components/formcadastro';
import '../styles/background.css';
import GrafismosBlue from '../Components/grafismos_blue';

const ContatoPage = () => {
  return (
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
  );
};

export default ContatoPage;
