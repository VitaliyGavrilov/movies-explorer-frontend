//  ИМПОРТЫ
//библиотеки
import { useState, useEffect, useRef, useContext } from 'react';
//стили
import './UserProfile.css';
//контекст
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
//хуки
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
//утилиты
import { setCustomNameValidError, setCustomEmailValidError, setErrorText } from '../../utils/utils';
import mainApi from '../../utils/MainApi.js';

function UserProfile({ handleLogout }) {
  //  ПЕРЕМЕННЫЕ
  //стейт переменные
  const [isEditing, setEditing] = useState(false)
  const [errorCode, setErrorCode] = useState(false)
  const [submitErrorText, setSubmitErrorText] = useState('')
  const [validity, setValidity] = useState(false)
  const [inputAccess, setInputAccess] = useState(false)
  const [submitProcess, setSubmitProcess] = useState(false);
  //рефы
  const profileName = useRef()
  const profileEmail = useRef();
  //контекст
  const {
    currentUser, setCurrentUser, setPopupOpened, setPopupError } = useContext(CurrentUserContext);
  //валидация
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  //  ФУНКЦИИ
  function handleNameChange(evt) {
    setCustomNameValidError(evt);
  };

  function handleEmailChange(evt) {
    setCustomEmailValidError(evt);
  };

  function handleFormSubmit(evt) {
    evt.preventDefault();
    setSubmitProcess(true);

    mainApi.patchUserInfo(values.name, values.email)
      .then((newData) => {
        values.name = newData.name;
        values.email = newData.email;
        setCurrentUser(newData);

        setEditing(false);
        setErrorCode(false);
        setPopupOpened(true);
        setPopupError(false);
        setSubmitProcess(false);
      })
      .catch((err) => {
        console.log(err.message);
        setErrorCode(err.status);
        setPopupOpened(true);
        setPopupError(true);
        setSubmitProcess(false);
      });
  };

  function setValues() {
    values.name = currentUser.name;
    values.email = currentUser.email;
  };

  function handleEditing() {
    setEditing(true);
    profileName.current.focus();
    profileEmail.current.focus();
  };

  function handleStopEditing() {
    setValues();
    setEditing(false);
    setErrorCode(false);
    errors.name = '';
    errors.email = '';
  };

  function logout() {
    handleLogout();
  };


  useEffect(() => {
    setValues();
  }, []);

  useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setValidity(true);
    }
    else {
      setValidity(!isValid);
    };
  }, [values.name, currentUser.name, values.email, currentUser.email]);

  // Disable form during request process
  useEffect(() => {
    if(submitProcess) {
      setValidity(true);
      setInputAccess(true);
    }
    else {
      setValidity(!isValid);
      setInputAccess(!isEditing);
    };
  }, [submitProcess, isValid, isEditing]);

  useEffect(() => {
    setSubmitErrorText(setErrorText(errorCode));
  }, [errorCode]);

  return (
    <section className="profile-form">

      <h1 className="profile-form__title">{`Привет, ${currentUser.name}!`}</h1>

      <form 
        name="profile__form"
        noValidate
        onChange={ handleChange }
        onSubmit={ handleFormSubmit }
      >

        <fieldset className="profile-form__set">

          <label htmlFor="name" className="profile-form__label">
            Имя
            <input className='profile-form__input'
              id="profile_field-name"
              name="name"
              type="text"
              value={values.name || ""}
              ref={profileName}
              disabled={inputAccess && 'disabled'}
              onChange={handleNameChange}
              minLength={2}
              maxLength={40}
              required
            />
          </label>
          <span className="profile-form__input-error profile-form__input-error_name">{errors.name}</span>

          <label htmlFor="email" className="profile-form__label">
            E-mail
            <input className='profile-form__input'
              id="profile_field-email"
              name="email"
              type="email"
              value={values.email || ""}
              ref={profileEmail}
              disabled={inputAccess && 'disabled'}
              onChange={handleEmailChange}
              required
            />
          </label>
          <span className="profile-form__input-error profile-form__input-error_email">{errors.email}</span>

          <span className="profile__error-text">{ errorCode && submitErrorText }</span>

          { !isEditing  ? (
            <>
              <button
                className="profile-form__button"
                type="button"
                name="profileEditButton"
                onClick={ handleEditing }
              >
                Редактировать
              </button>

              <button
                className="profile-form__button profile-form__button-signout"
                type="button"
                onClick={ logout }
              >
                Выйти из аккаунта
              </button>
            </>
          ) : (
            <>
              <button
                className={ `profile-form__button-save ${ validity ? 'profile-form__button-save_error' : '' }` }
                type="submit"
                disabled={ validity && 'disabled' }
              >
                Сохранить
              </button>

              <button
                className="profile-form__button"
                type="button"
                name="profileEditButton"
                onClick={ handleStopEditing }
              >
                Отмена
              </button>
            </>
            
          )}
        </fieldset>
      </form>
    </section>
  );
}

export default UserProfile;