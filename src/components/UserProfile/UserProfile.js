import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './UserProfile.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function UserProfile({currentUser, handleEditProfile}) {
  // Подписка на контекст

  // --Навигация
  const navigate = useNavigate();
  // Стейт-переменные
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);

  const { handleInputChange, errors } = useFormWithValidation();
  
  // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);
  // Режим редактирования/просмотра данных пользователя
  function toggleModeBtn() {
    setButtonStatus(!buttonStatus)
  }
  // Сабмит 
  function handleSubmit(event) {
    event.preventDefault();
    handleEditProfile({ name: name, email: email });
    toggleModeBtn();
  }
  // Функция для выхода из аккаунта
  function signOut () {
    localStorage.removeItem("token");
    navigate("/");
    console.log('Вы вышли из аккаунта')
  }
  function handleName(event) { setName(event.target.value) }
  function handleEmail(event) { setEmail(event.target.value) }

  return (
    <section className="profile-form">
      <h1 className="profile-form__title">{`Привет, ${currentUser.name}!`}</h1>
      <form name="profile" noValidate onSubmit={handleSubmit}>
        <fieldset className="profile-form__set">
          <label htmlFor="name" className="profile-form__label">
            Имя
            <input value={name || ''}
              id="name"
              type="text"
              className={`profile-form__input ${errors.name ? 'profile-form__input_type-error' : ''}`}
              name="name"
              required
              minLength="2"
              maxLength="30"
              placeholder='Имя'
              onChange={handleName}
              disabled={!buttonStatus}
            />
          </label>
          <span className="profile-form__input-error profile-form__input-error_name">{errors.name}</span>
          <label htmlFor="email" className="profile-form__label">
            E-mail
            <input value={email || ''}
              id="email"
              type="text"
              className={`profile-form__input ${errors.email ? 'profile-form__input_type-error' : ''}`}
              name="email"
              required
              placeholder='Email'
              onChange={handleEmail}
              disabled={!buttonStatus}
            />
          </label>
          <span className="profile-form__input-error profile-form__input-error_email">{errors.email}</span>
          {!buttonStatus ? (
            <>
              <button
                className="profile-form__button"
                type="button"
                onClick={toggleModeBtn}
              >
                Редактировать
              </button>
              <button
                className="profile-form__button profile-form__button-signout"
                type="button"
                onClick={signOut}
              >
                Выйти из аккаунта
              </button>
            </>
          ) : (
            <button
              className="profile-form__button-save"
              type="submit"
            >
              Сохранить
            </button>
          )}
        </fieldset>
      </form>
    </section>
  );
}

export default UserProfile;