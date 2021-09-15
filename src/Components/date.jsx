import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from 'react-router-dom';
import '../styles/form.css';
import '../styles/date.css';
import Button from './btn_global';
import agenda from '../img/agenda.png';

const DatePage = () => {


    const [selectedDate, setSelectedDate] = useState(null);


    return (
        <>
            <section className='FormContainer'>
                <div className='areaContainer'>
                    <div>

                        <img className="img-date" src={agenda} alt='' />

                        <form className="form-date">
                            <h4 className="title-date">Informe o dia de retorno</h4>

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
                            <div className="btn-large btn-orange">
                                <Link to='/success'>
                                    <Button id='cadastroButton' type='submit'>
                                        Finalizar
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DatePage;
