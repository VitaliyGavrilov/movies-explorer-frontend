import React from 'react';
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import { registerText } from '../../utils/const'

function Register({ handleRegister }) {
  return (
    <div className='app__page app__page_gray'>
      <main>
        <PageWithForm
           name="register"
           text={registerText}
           link="/signin"
           errorClass="form__input-error_register"
           onSubmit={handleRegister}
        />
      </main>
    </div>
    
  );
}

export default Register;