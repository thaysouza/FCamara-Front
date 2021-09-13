import '../styles/form.css';
import Button from './btn_global';
import { Link } from 'react-router-dom';

import UserService from '../services/api.service';

const FormLogin = () => {
  return (
    <>
      <section className='FormContainer'>
        <div className="areaOrange">
          <form className='InputContainer' action=''>
            <fieldset>
              {' '}
              <label for='email'>e-mail</label>
              <input
                id='email'
                type='text'
                name='email'
                placeholder='seuemail@fcamara.com.br'
                size='34'
              />
            </fieldset>
            <fieldset>
              {' '}
              <label for='senha'>senha</label>
              <input
                id='senha'
                type='password'
                name='senha'
                placeholder='informe sua senha'
                size='34'
              />
            </fieldset>
            <Button id='cadastroButton' type='submit'>
              ENTRAR
            </Button>
          </form>
          <p>
            Não possui Login? <Link to='/cadastro'>Faça o Cadastro.</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default FormLogin;
