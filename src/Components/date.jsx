import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.css';
import Button from './btn_global';
import agenda from '../img/agenda.png';

const Date = () => {


    return (
        <>
            <section className='FormContainer'>
                <div className='areaContainer areaOrange'>
                    <div>
                        <img src={agenda} alt='' />

                        <form>

                            <h4>Informe o dia de retorno</h4>

                            <input type="date" id="date" name="date" />

                            <Link to='/success'>
                                <Button id='cadastroButton' type='submit'>
                                    Finalizar Agendamento
                                </Button>
                            </Link>
                            <Link to='/s'>
                                <Button id='cadastroButton' type='submit'>
                                    Voltar
                                </Button>
                            </Link>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Date;
