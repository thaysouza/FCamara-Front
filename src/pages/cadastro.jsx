import React from 'react';
import FormCadastro from '../Components/Cadastro/formcadastro';
import '../styles/background.css';
import Grafismos from '../Components/grafismos';

const ContatoPage = () => {
  return (
    <>
      <div className='container-bg'>
        <div>
          <h1 className='text-cadastro'>Faça seu cadastro</h1>
          <h5 className='text-info-cadastro'>
            Insira seus dados pessoais abaixo e clique em cadastar
          </h5>
          <FormCadastro />
          <Grafismos />
        </div>
      </div>
    </>
  );
};

export default ContatoPage;
