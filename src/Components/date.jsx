import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.css';
import '../styles/date.css';
import Button from './btn_global';
import agenda from '../img/agenda.png';

const Date = () => {


    return (
        <>
            <section className='FormContainer'>
                <div className='areaContainer btn-large btn-orange'>
                    <div>
                        <img className="img-date" src={agenda} alt='' />

                        <form className="form-date">
                            <h4 className="title-date">Informe o dia de retorno</h4>

                            <input type="date" id="date" name="date" />
                            <Link to='/success'>
                                <Button id='cadastroButton' type='submit'>
                                    Finalizar
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
