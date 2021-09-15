import '../styles/form.css';
import '../styles/btn.css';
import Button from './btn_global';
import { Link } from 'react-router-dom';
import api from '../services/api.service';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useHistory } from 'react-router';

export default function FormLogin() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token] = useState('');

  const storedToken = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.login({
        email,
        password
      });
      token(storedToken)

      toast.success('Login success!');

      history.push('/entry');

    } catch (error) {
      console.log(error.message)
      toast.error('Tente novamente, algo deu errado!');
    }
  }

  return (
    <>
      <section className='FormContainer'>
        <div className="areaOrange btn-large btn-blue">
          <form onSubmit={handleSubmit} className='InputContainer' action=''>
            <fieldset>
              {' '}
              <label for='email'>e-mail</label>
              <input
                required
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                placeholder='seuemail@fcamara.com.br'
                size='34'
              />
            </fieldset>
            <fieldset>
              {' '}
              <label for='senha'>senha</label>
              <input
                required
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
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
