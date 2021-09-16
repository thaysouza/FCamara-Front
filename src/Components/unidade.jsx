import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.css';
import '../styles/unidade.css';
import '../styles/btn.css';
import Button from './btn_global';
import imgLocal from '../img/imglocal.png';

const Unidade = () => {
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

  return (
    <>
      <section className='FormContainer'>
        <div className='areaContainer areaOrange'>
          <div>
            <img className="img-local" src={imgLocal} alt='' />

            <form>
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
              <div className="posicionar">
                <div className="btn-orange btn">
                  <Link to='/entry'>
                    <Button className="btn-orange" id='cadastroButton' type='submit'>
                      <span>❮</span> Voltar
                    </Button>
                  </Link>
                </div>
                <div className="btn-blue btn">
                  <Link to='/date'>
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

export default Unidade;
