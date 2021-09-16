import React from 'react';
import Date from '../Components/date';
import '../styles/background.css';
import GrafismosBlue from '../Components/grafismos_blue';

const DatePage = () => {
  return (
    <>
      <div className='container-bg colorBlue'>
        <div>
          <h2 className='text-cadastro'>Escolha seu dia</h2>
          <Date />
          <GrafismosBlue />
        </div>
      </div>
    </>
  );
};

export default DatePage;