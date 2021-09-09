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

            <section id="saibacomo" className="area-saiba-como">
                <div>
               <h1 className="title-saiba-como">Saiba como fazer seu agendamento</h1>

               <div className="container-content">   
                  <div className="area-content-icon">
                    <img
                        className="img-icon"
                        src={notebook}
                    />
                    <p>Faça seu cadastro com seu nome, email e senha e após realizar o login terá acesso para realizar o agendamento</p>
                 </div>

                 <div className="area-content-icon">
                    <img
                        className="img-icon"
                        src={agenda}
                    />
                    <p>Você poderá realizar agendamento para qualquer dia que estiver disponível no sistema, conforme o nosso horário de funcionamento</p>
                 </div>


                 <div className="area-content-icon">
                    <img
                        className="img-icon"
                        src={foguete}
                    />
                    <p>Pronto, agora é só comparecer no dia e horário agendado, esperamos por você em nossos escritórios!</p>
                 </div>


                    
                </div>
                <Link to="/cadastro">
                    <Button>
                        Cadastre-se
                    </Button>
                </Link>
                </div>
            </section>

        </>
    );
};

export default SaibaComo;