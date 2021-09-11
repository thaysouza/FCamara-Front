import React from 'react';
import { Link } from 'react-scroll';

import Button from './button';
import '../../styles/index.css';
import '../../styles/global.css';
import imgPrincipal from '../../img/imgPrincipal.svg';

const Home = () => {
  return (
    <>
      <section className='area-principal'>
          <div>
            <div className='container-text-index'>
              <h1>
                <span className='text-orange'>#SangueLaranja</span> esperamos
                pelo seu retorno em nossos escritórios, faça seu agendamento!
              </h1>
            </div>
          <Link to='saibacomo' smooth={true}>
            {' '}
            <Button>Saiba como</Button>
          </Link>
        </div>
        <img className='img-principal' src={imgPrincipal} alt='' />
      </section>
    </>
  );
};

export default Home;
