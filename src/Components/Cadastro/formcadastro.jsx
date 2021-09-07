const FormCadastro = () => {
  return (
    <>
      <section>
        <h2>Cadastro de Usuário</h2>
        <div>
          <form action=''>
            <fieldset>
              {' '}
              <label for='nome'>Nome completo</label>
              <input
                id='nome'
                type='text'
                name='nome'
                placeholder='Informe seu nome'
              />
            </fieldset>
            <fieldset>
              {' '}
              <label for='email'>E-mail</label>
              <input
                id='email'
                type='text'
                name='email'
                placeholder='meuemail@fcamara.com.br'
              />
            </fieldset>
            <fieldset>
              {' '}
              <label for='senha'>Senha</label>
              <input
                id='senha'
                type='password'
                name='senha'
                placeholder='Informe sua senha'
              />
              <small>
                Tamanho mínimo de 6 caracteres; utilize ao menos um caractere
                especial e um número.
              </small>
            </fieldset>
            <fieldset>
              {' '}
              <label for='confirmaSenha'>Confirmar Senha</label>
              <input
                id='confirmaSenha'
                type='password'
                name='senha'
                placeholder='Confirme sua senha'
              />
            </fieldset>
            <button type='submit'>Cadastrar</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormCadastro;
