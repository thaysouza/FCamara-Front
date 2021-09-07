import '../../styles/form.css';

const FormCadastro = () => {
  return (
    <>
      <section className='FormContainer'>
        <h2 className='FormTitle'>Cadastro de Usuário</h2>
        <div>
          <form className='InputContainer' action=''>
            <fieldset>
              {' '}
              <label for='nome'>nome completo</label>
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
              <label for='email'>e-mail</label>
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
                <label for='senha'>senha</label>
                <input
                  id='senha'
                  type='password'
                  name='senha'
                  placeholder='informe sua senha'
                  size='15'
                />
              </fieldset>
              <fieldset>
                {' '}
                <label for='confirmaSenha'>confirmar senha</label>
                <input
                  id='confirmaSenha'
                  type='password'
                  name='senha'
                  placeholder='confirme sua senha'
                  size='15'
                />
              </fieldset>
            </div>
            <button id='cadastroButton' type='submit'>
              Cadastrar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormCadastro;
