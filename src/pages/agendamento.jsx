import React from 'react';
import Agendamento from '../Components/agendamento';
import '../styles/background.css';
import GrafismosOrange from '../Components/grafismos_orange';

const AgendamentoPage = () => {
  return (
    <>
      <div className='container-bg colorOrange'>
        <div>
          <h2 className='text-cadastro'>Faça seu agendamento</h2>
          <Agendamento />
          <GrafismosOrange />
        </div>
      </div>
    </>
  );
};

export default AgendamentoPage;