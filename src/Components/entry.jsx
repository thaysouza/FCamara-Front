import React from 'react';
import '../styles/entry.css';
import imgEntry from '../img/undraw_social.svg';

const Entry = () => {
    
  return (
    <>
      <section className='Container-entry'>

        <h1 className="text-entry">Medidas de preveção para o retorno presencial</h1>
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

        <p className="info-entry">Em caso de suspeitas de covid cancele seu agendamento e envie um email para fcamara@fcamera.com.br</p>
      </section>
    </>
  );
};

export default Entry;

