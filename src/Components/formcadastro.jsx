import '../styles/form.css';
import Button from './btn_global';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api.service';
import { useState } from 'react';
import { useHistory } from 'react-router';


export default function FormCadastro () {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (senha !== confirmSenha) {
      toast.error('senhas não conferem');
    }

    try {

      await api.register({
        name,
        email,
        password:senha,
      });
      toast.success('Usuário cadastrado com sucesso');

      history.push('/login');

    } catch (error) {
      console.log(error)
        toast.error('Tente novamente, algo deu errado!');
      }
  }
    return (
      <>
        <section className='FormContainer'>
          <div className='areaBlue'>
            <form onSubmit={handleSubmit} className='InputContainer'>
              <fieldset>
                {' '}
                <label for='name'>nome completo*</label>
                <input
                  type='text'
                  required
                  placeholder='informe seu nome'
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                  size='34'
                />
              </fieldset>
              <fieldset>
                {' '}
                <label for='email'>e-mail*</label>
                <input
                  type='email'
                  required
                  placeholder='seuemail@fcamara.com.br'
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size='34'
                />
              </fieldset>
              <div className='PasswordContainer'>
                <fieldset>
                  {' '}
                  <label for='password'>senha*</label>
                  <input
                    type='password'
                    required
                    placeholder='informe a senha'
                    defaultValue={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    size='10'
                  />
                </fieldset>
                <fieldset>
                  {' '}
                  <label for='confirmPassword'>confirmar senha*</label>
                  <input
                    type='password'
                    required
                    defaultValue={confirmSenha}
                    onChange={(e) => setConfirmSenha(e.target.value)}
                    placeholder='confirme a senha'
                    size='10'
                  />
                </fieldset>
              </div>
              <Button id='cadastroButton' type='submit'>
                CADASTRAR
              </Button>
            </form>
            
            <p>
              Já possui cadastro? <Link to='/login'>Faça Login.</Link>
            </p>
          </div>
        </section>
      </>
    );
  };
