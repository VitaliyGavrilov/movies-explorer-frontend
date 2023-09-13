import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PageWithForm.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { setCustomNameValidError, setCustomEmailValidError, setErrorText } from '../../utils/utils';
import logo from '../../images/logo.svg';

function PageWithForm({   
  isSignIn,
  handleSubmit,
  preloader,
  submitError,
  submitProcess 
}) {
  const [submitErrorText, setSubmitErrorText] = useState(false)
  const [validity, setValidity] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleNameChange(evt) {
    setCustomNameValidError(evt);
  };

  function handleEmailChange(evt) {
    setCustomEmailValidError(evt);
  };

  function handleFormSubmit(evt) {
    evt.preventDefault();
    handleSubmit(values);
  };


  useEffect(() => {
    setSubmitErrorText(setErrorText(submitError));
  }, [submitError]);

  useEffect(() => {
    setSubmitErrorText('');
  }, [isSignIn]);

  useEffect(() => {
    if (submitProcess) {
      setValidity(true);
    }
    else {
      setValidity(!isValid);
    };
  }, [isValid, submitProcess]);
  // сборка компонента
  return (
    <section className="form">

      <Link to="/" className="logo" title="На главную">
        <img src={logo} alt="На главную" />
      </Link>

      <h1 className="form__title">{ isSignIn ? 'Рады видеть!' : 'Добро пожаловать!' }</h1>

      <form className="form__container" name='authForm' noValidate
        onSubmit={handleFormSubmit} onChange={ handleChange }
      >
        <fieldset className="form__set">

          {!isSignIn && (
          <label htmlFor="name" className="form__label">
            Имя
            <input className='form__input'
              id="auth_input-name"
              name="name"
              type="text"
              value={ values.name || "" }
              autoComplete="off"
              onChange={ handleNameChange }
              disabled={ submitProcess && 'disabled' }
              minLength={ 2 }
              maxLength={ 30 }
              required
              placeholder="Имя пользователя"
            />
            <span className="form__input-error">{ errors.name }</span>
          </label>
          )}

          <label htmlFor="email" className="form__label">
            E-mail
            <input className='form__input'
              id="auth_form-email"
              name="email"
              type="email"
              value={ values.email || "" }
              autoComplete="off"
              onChange={ handleEmailChange }
              disabled={ submitProcess && 'disabled' }
              required
              placeholder="Email"
            />
            <span className="form__input-error">{ errors.email }</span>
          </label>

          <label htmlFor="password" className="form__label">
            Пароль
            <input className='form__input'
              id="auth_form-password"
              name="password"
              type="password"
              value={ values.password || "" }
              onChange={ handleChange }
              disabled={ submitProcess && 'disabled' }
              autoComplete="off"
              minLength={ 8 }
              required
              placeholder="Пароль"
            />
            <span className="form__input-error">{ errors.password  }</span>
          </label>

          <button className='form__button' type="submit" disabled={ validity && 'disabled' }>{ isSignIn ? 'Войти' : 'Зарегистрироваться' }</button>

          <p className="form__redirect">
            { isSignIn ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?' }
            <Link to={ isSignIn ? "/sign-up" : "/sign-in"} className="form__redirect form__redirect_active">
              { isSignIn ? 'Регистрация' : 'Войти' }
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default PageWithForm;
