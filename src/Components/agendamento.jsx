import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/form.css';
import '../styles/unidade.css';
import '../styles/btn.css';
import Button from './btn_global';
import agenda from '../img/agenda.png';
import api from '../services/api.service';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';


const Agendamento = () => {
  const history = useHistory();

  const [city, setCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = selectedDate.split('-').reverse().join('/');
    const user = JSON.parse(localStorage.getItem('user'));
    const { id } = user;
    
    try {
      await api.makeAppointment({
        city,
        userId: id,
        date: data
      });
      
      history.push('/entry');

      toast.success('Agendamento efetuado com sucesso!');

    } catch (error) {
      toast.error('Algo deu errado. Por favor, tente novamente!');
    }
  };

  return (
    <>
      <section className='FormContainer'>
        <div className='areaContainer areaOrange'>
          <div>
            <img className="img-local" src={agenda} alt='' />

            <form onSubmit={handleSubmit}>
              <div className='radio-item'>
                <div className='type-radio'>
                  <input
                    type='radio'
                    id='sp'
                    name='unidade'
                    value='sp'
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <label htmlFor='sp'>São Paulo</label>
                </div>
             

              <p>
                R. Bela Cintra, 986 - 2° andar - Consolação, São Paulo - SP,
                01415-906
              </p>

             
                <div className='type-radio'>
                  <input
                    type='radio'
                    id='santos'
                    name='unidade'
                    value='santos'
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <label htmlFor='santos'>Santos</label>
                </div>

              </div>

              <p>
                Prç. dos Expedicionários, 19 - Gonzaga, Santos - SP, 11065-500
              </p>

              <h3>Informe o dia do retorno</h3>

              <input 
              type='date'
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              />

              <div className="posicionar">
                <div className="btn-orange btn">
                  <Link to='/entry'>
                    <Button className="btn-orange" id='cadastroButton' type='submit'>
                      <span>❮</span> Voltar
                    </Button>
                  </Link>
                </div>
                <div className="btn-blue btn">
                    <Button id='cadastroButton' type='submit'>
                      Confirmar
                    </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agendamento;
