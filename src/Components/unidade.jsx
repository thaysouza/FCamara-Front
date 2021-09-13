import React, { useState } from 'react';
import '../styles/form.css';
import '../styles/unidade.css'
import Button from './btn_global';
import imgLocal from '../img/imglocal.png';

const Unidade = () => {

    const [formData, setformData] = useState({
        unidade: ""
    })

    const handleChange = e =>{
        const target = e.target
        const name = target.name
        const value = target.value
       
        setformData({
            ...formData,
            [name] : value
        })
    }

    return (
        <>
            <section className='FormContainer'>
                <div className='areaContainer areaOrange'>

                    <div>
                        <img src={imgLocal} alt='' />
                      
                        <form>
                            
                            <div className="radio-item">
                                <div className="type-radio">
                                    <input
                                        type="radio"
                                        id="sp"
                                        name="unidade"
                                        value="sp"
                                        onChange={handleChange}
                                        checked={formData.unidade==="sp"}
                                    />
                                    <label for="sp">São Paulo</label>
                                </div>

                            </div>

                            <p>R. Bela Cintra, 986 - 2° andar - Consolação,
                                São Paulo - SP, 01415-906</p>

                            <div className="radio-item">
                                <div className="type-radio">
                                    <input
                                        type="radio"
                                        id="santos"
                                        name="unidade"
                                        value="santos" 
                                        onChange={handleChange}
                                        checked={formData.unidade=="santos"}
                                        />
                                    <label for="santos">Santos</label>
                                </div>

                            </div>

                            <p>Prç. dos Expedicionários, 19 - Gonzaga, Santos - SP, 11065-500</p>
                            <Button id='cadastroButton' type='submit'>
                            Confirmar
                        </Button>
                        </form>

            
                    </div>
                </div>
            </section>
        </>
    );
};

export default Unidade;

