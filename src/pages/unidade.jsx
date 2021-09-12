import React from 'react';
import Unidade from '../Components/unidade';
import '../styles/background.css';
import GrafismosOrange from '../Components/grafismos_orange';

const UnidadePage = () => {
  return (
    <>
      <div className='container-bg colorOrange'>
        <div>
          <h2 className='text-cadastro'>Escolha sua unidade</h2>
          <Unidade />
          <GrafismosOrange />
        </div>
      </div>
    </>
  );
};

export default UnidadePage;