import React from 'react';
import { Link } from "react-router-dom";
import Button from './button'

const SaibaComo = () => {
    return (
        <>

            <section>

                <h1>Saiba como fazer seu agendamento</h1>
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