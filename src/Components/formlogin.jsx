import '../styles/form.css';
import Button from './btn_global';

const FormLogin = () => {
  return (
    <>
      <section className='FormContainer'>
        <div>
          <form className='InputContainer' action=''>
            <fieldset>
              {' '}
              <label for='email'>e-mail</label>
              <input
                id='email'
                type='text'
                name='email'
                placeholder='seuemail@fcamara.com.br'
                size='25'
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
                size='25'
              />
            </fieldset>
            <Button id='cadastroButton' type='submit'>
              ENTRAR
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormLogin;
