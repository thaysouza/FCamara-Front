import React from 'react';

import Button from './button'
import "../../styles/index.css"
import "../../styles/global.css"
import imgPrincipal from '../../img/imgPrincipal.svg'


const Home = () => {
    return (
        <>
            <section className="area-principal">
                <div className="info-index">
                    <div>
                        <div className="container-text-index">
                            <h1><span className="text-orange">#SangueLaranja</span> esperamos pelo seu retorno em nossos escritórios, faça  seu agendamento!</h1>
                        </div>
                    </div>
                    <Button>Saiba como</Button>
                </div>


                <div className="img-index">
                    <img
                        className="img-principal"
                        src={imgPrincipal}
                    />
                </div>

            </section>

        </>
    );
};

export default Home;