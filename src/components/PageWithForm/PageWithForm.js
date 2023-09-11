import React, { useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import './PageWithForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import logo from '../../images/logo.svg';

function PageWithForm({ name, text, link, errorClass, onSubmit }) {

  const { pathname } = useLocation();
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [pathname, resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (name === 'login') {
      console.log(values.email, values.password);
      onSubmit(values.email, values.password);
    } else {
      console.log(values.name, values.email, values.password);
      onSubmit(values.name, values.email, values.password);
    }
    
  }
  // сборка компонента
  return (
    <section className="form">

      <Link to="/" className="logo" title="На главную">
        <img src={logo} alt="На главную" />
      </Link>

      <h1 className="form__title">{text.title}</h1>

      <form name={`form-${name}`} noValidate className="form__container" onSubmit={handleSubmit}>
        <fieldset className="form__set">

          {name === 'register' && (
          <label htmlFor="name" className="form__label">
            Имя
            <input className={`form__input ${errors.name ? 'form__input_type-error' : ''}`}
              onChange={handleChange} value={values.name || ''}
              id="name" type="text" name="name" minLength="2" maxLength="30" required
              placeholder="Виталий"
            />
            <span className="form__input-error form__input-error_name">{errors.name || ''}</span>
          </label>
          )}

          <label htmlFor="email" className="form__label">
            E-mail
            <input className={`form__input ${errors.email ? 'form__input_type-error' : ''}`}
              onChange={handleChange} value={values.email || ''}
              id="email" type="email" name="email" required
              placeholder="Email" pattern='[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'
            />
            <span className="form__input-error">{errors.email || ''}</span>
          </label>

          <label htmlFor="password" className="form__label">
            Пароль
            <input className={`form__input form__input_password ${errors.password ? 'form__input_type-error' : ''}`}
              onChange={handleChange} value={values.password || ''}
              id="password" type="password" name="password" required
              placeholder="Пароль" pattern='\d+[a-zA-Z]+|[a-zA-Z]+\d+' minLength="8" maxLength="20"
              
            />
            <span className={`form__input-error ${errorClass}`}>{errors.password || ''}</span>
          </label>

          <button className='form__button' type="submit" disabled={!isValid}>{text.btn}</button>

          <p className="form__redirect">
            {text.question}
            <Link
              to={link}
              className="form__redirect form__redirect_active"
            >
              {text.link}
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default PageWithForm;
