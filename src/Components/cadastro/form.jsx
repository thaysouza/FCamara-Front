import React from 'react';

const FormCadastro = () => {
    return (
        <>

            <section>

                <h1>Cadastro Usuário</h1>

                <div>
                    <form action="">
                        <h1>Nome Completo</h1>
                        <input type="text" placeholder="Informe seu nome" />
                        <h1>E-mail</h1>
                        <input type="text" placeholder="meuemail@fcamara.com.br" />
                        <h1>Senha</h1>
                        <input type="password" placeholder="Informe sua senha" />
                        <h1>Confirmar Senha</h1>
                        <input type="password" placeholder="Confirme sua senha" />
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>

            </section>

        </>
    );
};

export default FormCadastro;