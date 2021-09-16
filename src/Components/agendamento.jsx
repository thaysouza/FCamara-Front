import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/form.css';
import '../styles/unidade.css';
import '../styles/btn.css';
import Button from './btn_global';
import imgLocal from '../img/imglocal.png';
import api from '../services/api.service';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';


const Agendamento = () => {
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState(null);


  const [formData, setformData] = useState({
    unidade: '',
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.makeAppointment({
        city: formData.unidade,
        date: selectedDate
      });
      
      history.push('/entry');

      toast.success('Agendamento efetuado com sucesso!');

    } catch (error) {
      console.log(error.message)
      toast.error('Algo deu errado. Por favor, tente novamente!');
    }
  };

  return (
    <>
      <section className='FormContainer'>
        <div className='areaContainer areaOrange'>
          <div>
            <img className="img-local" src={imgLocal} alt='' />

            <form onSubmit={handleSubmit}>
              <div className='radio-item'>
                <div className='type-radio'>
                  <input
                    type='radio'
                    id='sp'
                    name='unidade'
                    value='sp'
                    onChange={handleChange}
                    checked={formData.unidade === 'sp'}
                  />
                  <label for='sp'>São Paulo</label>
                </div>
              </div>

              <p>
                R. Bela Cintra, 986 - 2° andar - Consolação, São Paulo - SP,
                01415-906
              </p>

              <div className='radio-item'>
                <div className='type-radio'>
                  <input
                    type='radio'
                    id='santos'
                    name='unidade'
                    value='santos'
                    onChange={handleChange}
                    checked={formData.unidade === 'santos'}
                  />
                  <label for='santos'>Santos</label>
                </div>

              </div>

              <p>
                Prç. dos Expedicionários, 19 - Gonzaga, Santos - SP, 11065-500
              </p>

              <h3>Informe o dia do retorno</h3>

              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                placeholderText="Please select a date"
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
                  <Link>
                    <Button id='cadastroButton' type='submit'>
                      Confirmar
                    </Button>
                  </Link>
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
