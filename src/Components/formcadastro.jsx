import '../styles/form.css';
import Button from './btn_global';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import api from '../services/api.service';

export default class FormCadastro extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    message: ''
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, email, password, confirmPassword } = this.state;
      
      if (password !== confirmPassword) {
        this.state({
          message: 'As senhas não correspondem, tente novamente!'
        });
        return;
      }

      this.setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: ''
      });

      await api.register({
        name,
        email,
        password
      });
      this.props.history.push('/login'); 
      
    } catch (error) {
      this.setState({
        message: 'error.response.data'
      });
    }
  }

  render () {
    return (
      <>
        <section className='FormContainer'>
          <div className='areaBlue'>
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
  }
  
};