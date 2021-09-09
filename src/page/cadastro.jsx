import React from 'react';
import FormCadastro from '../Components/Cadastro/formcadastro';
import '../styles/background.css'
import ondas from '../img/ondas.png'
import pontilhados from '../img/pontilhados.png'
import pontos from '../img/pontos.png'
import x from '../img/x.png'

const ContatoPage = () => {
    return (
        <>
          <div className="container-bg">
             <div>
            <h1 className="text-cadastro">Faça seu cadastro</h1>
            <h5 className="text-info-cadastro">Insira seus dados pessoais abaixo e clique em cadastar</h5>

            <FormCadastro />
            <img
              className="img-ondas"
              src={ondas}
             />

            <img
              className="img-pontilhados"
              src={pontilhados}
             />

            <img
              className="img-pontos"
              src={pontos}
             />

             
            <img
              className="img-x"
              src={x}
             />
          </div>

          </div>
        </>
    )
}

export default ContatoPage;