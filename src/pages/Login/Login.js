import React from 'react';
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import { loginText } from '../../utils/const'

function Login({ handleLogin }) {
  return (
    <div className='app__page app__page_gray'>
      <main>
        <PageWithForm
          name="login"
          text={loginText}
          link="/signup"
          errorClass="form__input-error_login"
          onSubmit={handleLogin}
        />
      </main>
    </div>
    
  );
}

export default Login;