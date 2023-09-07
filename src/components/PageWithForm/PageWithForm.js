import React from 'react';
import { Link } from 'react-router-dom';
import './PageWithForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import logo from '../../images/logo.svg';

function PageWithForm({
  name,
  buttonText,
  title,
  registerStatus,
  linkText,
  children,
  link,
  errorClass,
}) {
  const { handleInputChange, errors } = useFormWithValidation();

  return (
    <section className="form">
      <Link to="/" className="logo" title="На главную">
        <img src={logo} alt="На главную" />
      </Link>
      <h1 className="form__title">{title}</h1>
      <form name={name} noValidate className="form__container">
        <fieldset className="form__set">
          {children}
          <label htmlFor="email" className="form__label">
            E-mail
            <input
              id="email"
              type="text"
              className={`form__input ${errors.email ? 'form__input_type-error' : ''}`}
              name="email"
              required
              placeholder="Email"
              pattern='[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'
              onChange={handleInputChange}
            />
            <span className="form__input-error">{errors.email}</span>
          </label>
          <label htmlFor="password" className="form__label">
            Пароль
            <input
              id="password"
              type="password"
              className={`form__input form__input_password ${errors.password ? 'form__input_type-error' : ''}`}
              name="password"
              required
              placeholder="Пароль"
              pattern='\d+[a-zA-Z]+|[a-zA-Z]+\d+' 
              minLength="8" 
              maxLength="20"
              onChange={handleInputChange}
            />
            <span className={`form__input-error ${errorClass}`}>{errors.password}</span>
          </label>
          <button
            className="form__button"
            type="submit"
          >
            {buttonText}
          </button>
          <p className="form__redirect">
            {registerStatus}
            <Link
              to={link}
              className="form__redirect form__redirect_active"
            >
              {linkText}
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default PageWithForm;