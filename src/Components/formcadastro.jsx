import '../styles/form.css';
import Button from './btn_global';
import { Link } from "react-router-dom";

const FormCadastro = () => {
  return (
    <>
      <section className='FormContainer'>
        <div>
          <form className='InputContainer' action=''>
            <fieldset>
              {' '}
              <label for='nome'>nome completo*</label>
              <input
                id='nome'
                type='text'
                name='nome'
                placeholder='informe seu nome'
                size='34'
              />
            </fieldset>
            <fieldset>
              {' '}
              <label for='email'>e-mail*</label>
              <input
                id='email'
                type='text'
                name='email'
                placeholder='seuemail@fcamara.com.br'
                size='34'
              />
            </fieldset>
            <div className='PasswordContainer'>
              <fieldset>
                {' '}
                <label for='senha'>senha*</label>
                <input
                  id='senha'
                  type='password'
                  name='senha'
                  placeholder='informe sua senha'
                  size='10'
                />
              </fieldset>
              <fieldset>
                {' '}
                <label for='confirmaSenha'>confirmar senha*</label>
                <input
                  id='confirmaSenha'
                  type='password'
                  name='senha'
                  placeholder='confirme sua senha'
                  size='10'
                />
              </fieldset>
            </div>
            <Button id='cadastroButton' type='submit'>
              Cadastrar
            </Button>
          </form>
          <p>Já possui cadastro? <Link to='/login'>Faça Login.</Link></p>
        </div>
      </section>
    </>
  );
};

export default FormCadastro;
