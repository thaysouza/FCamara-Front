import React from 'react';
import { Link } from "react-router-dom";
import Button from './button'
import "../../styles/saiba-como.css"
import notebook from '../../img/notebook.png'
import agenda from '../../img/agenda.png'
import foguete from '../../img/foguete.png'

const SaibaComo = () => {
    return (
        <>

            <section className="area-saiba-como">

                <h1>Saiba como fazer seu agendamento</h1>

                <div>
                  <div>
                    <img
                        className="img-icon"
                        src={notebook}
                    />
                    <p></p>
                 </div>

                 <div>
                    <img
                        className="img-icon"
                        src={agenda}
                    />
                    <p></p>
                 </div>


                 <div>
                    <img
                        className="img-icon"
                        src={foguete}
                    />
                    <p></p>
                 </div>


                    
                </div>
                <Link to="/cadastro">
                    <Button>
                        Cadastre-se
                    </Button>
                </Link>
            </section>

        </>
    );
};

export default SaibaComo;