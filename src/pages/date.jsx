import React from 'react';
import Date from '../Components/date';
import '../styles/background.css';
import GrafismosOrange from '../Components/grafismos_orange';

const DatePage = () => {
  return (
    <>
      <div className='container-bg colorOrange'>
        <div>
          <h2 className='text-cadastro'>Escolha seu dia</h2>
          <Date />
          <GrafismosOrange />
        </div>
      </div>
    </>
  );
};

export default DatePage;