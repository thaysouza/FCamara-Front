import '../styles/form.css';
import Button from './btn_global';
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import api from '../services/api.service';

class FormCadastro extends Component {
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
        this.setState({
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
      console.log(error)
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
            <form
            onSubmit={this.handleSubmit} 
            className='InputContainer' 
            >
              <fieldset>
                {' '}
                <small>nome completo*</small>
                <input
                  type='text'
                  required
                  name='name'
                  placeholder='informe seu nome'
                  value={this.state.name}
                  onChange={this.handleInput}
                  size='34'
                />
              </fieldset>
              <fieldset>
                {' '}
                <small>e-mail*</small>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='seuemail@fcamara.com.br'
                  value={this.state.email}
                  onChange={this.handleInput}
                  size='34'
                />
              </fieldset>
              <div className='PasswordContainer'>
                <fieldset>
                  {' '}
                  <small>senha*</small>
                  <input
                    type='password'
                    name='password'
                    required
                    placeholder='informe a senha'
                    value={this.state.password}
                    onChange={this.handleInput}
                    size='10'
                  />
                </fieldset>
                <fieldset>
                  {' '}
                  <small>confirmar senha*</small>
                  <input
                    type='password'
                    name='confirmPassword'
                    required
                    value={this.state.confirmPassword}
                    onChange={this.handleInput}
                    placeholder='confirme a senha'
                    size='10'
                  />
                </fieldset>
              </div>
              <Button id='cadastroButton' type='submit'>
                CADASTRAR
              </Button>
            </form>
            {this.state.message && (
              <div>{this.state.message}</div>
            )}
            <p>
              Já possui cadastro? <Link to='/login'>Faça Login.</Link>
            </p>
          </div>
        </section>
      </>
    );
  }
  
};

export default withRouter(FormCadastro);