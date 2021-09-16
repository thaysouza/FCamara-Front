import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/entry.css';
import '../styles/nav.css';
import imgEntry from '../img/undraw_social.svg';
import Button from './btn_global';
import Logo from './menu/logo';
import Logout from './menu/logout'


const Entry = () => {

  return (
    <>

      <header id='header' className="menu">
        <Link to="/entry">
          <Logo />
        </Link>
        <Logout />
      </header>

      <section className='Container-entry'>

        <div className="posicionar">
          <div className="btn-orange btn">
            <Link to='/agendamento'>
              <Button className="btn-orange" id='cadastroButton' type='submit'>
                Fazer Agendamento
              </Button>
            </Link>
          </div>
          <div className="btn-blue btn">
            <Link to='/verAgendamentos'>
              <Button id='cadastroButton' type='submit'>
                Ver agendamentos
              </Button>
            </Link>
          </div>

        </div>

        <h1 className="text-entry">Medidas de prevenção para o retorno presencial</h1>
        <div className='areaContainerEntry'>

          <img src={imgEntry} alt='' />

          <div className='container-text-entry'>

            <p>medição da temperatura corporal por meio de termômetro infravermelho, sem contato;</p>

            <p>higienização das mãos com álcool em gel 70%;</p>

            <p>utilização de máscara de proteção facial que cubra o nariz e a boca;</p>

            <p>distanciamento mínimo de um metro entre as pessoas;</p>

            <p>A pessoa que apresentar temperatura corporal igual ou superior a 37,8 graus Celsius terá o acesso negado às dependências da empresa.</p>

          </div>
        </div>
      </section>
    </>
  );
};

export default Entry;
