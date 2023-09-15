// ИМПОРТЫ
//Стили
import './App.css';
//Библиотеки
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
//Компоненты
import Main from '../../pages/Main/Main.js';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import NotFound from '../../pages/NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../Popup/InfoTooltip/InfoTooltip'
//API
import * as auth from '../../utils/MainApiAuth';
import mainApi from '../../utils/MainApi';
//Контекст
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
// СБОРКА
function App() {
  //  ПЕРЕМЕННЫЕ:
  //состояния
  const [isLoggedIn, setLoggedIn] = useState(true)
  const [checkedIn, setCheckedIn] = useState(false)
  const [authFormPreloader, setAuthFormPreloader] = useState(false)
  const [submitProcess, setSubmitProcess] = useState(false)
  const [isPopupOpened, setPopupOpened] = useState(false)
  const [popupError, setPopupError] = useState(false)
  //данные
  const [currentUser, setCurrentUser] = useState({})
  const [authFormError, setAuthFormError] = useState('')
  const [storedMovies, setStoredMovies] = useState([])
  //навигация
  const navigate = useNavigate();;
  //  ФУНКЦИИ обработчики
  //получение данных пользователя
  function getUser() {
    mainApi.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
        setLoggedIn(true);
        setCheckedIn(true);
      })
      .catch((err) => {
        console.log(err.message);
        setCheckedIn(true);
        handleLogout();
      });
  };
  //получение сохран.фильмов
  function getSavedMovies() {
    mainApi.getSavedMovies()
      .then((movies) => {
        setStoredMovies(movies);
        localStorage.setItem('savedMovies', JSON.stringify(movies));
      })
      .catch((err) => console.log(err.message));
  };
  //авторизация
  function handleAuthorization() {
    setLoggedIn(true);
    getSavedMovies();
    navigate('/movies', { replace: true });
  };
  //полная авторизация
  function handleFullAuthorization() {
    getUser();
    handleAuthorization();
  };
  //ошибка авторизации
  function handleAuthFormError(err) {
    console.log(err.message);
    setAuthFormError(err.status);
    setSubmitProcess(false);
  };
  //логин
  function handleLogin(email, password, handleAuth) {
    auth.login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setSubmitProcess(false);

        setPopupOpened(true);
        setPopupError(false);
      })
      .then(() => handleAuth())
      .catch((err) => {
        handleAuthFormError(err);

        setPopupOpened(true);
        setPopupError(true);
      })
      .finally(() => setAuthFormPreloader(false));
  };
  //выход из аккаунта
  function handleLogout() {
    setLoggedIn(false);
    setCurrentUser({ name: '', email: '' });
    localStorage.clear();
    navigate('/', { replace: true });
  };
  //  ФУНКЦИИ сабмита
  // Регистрация
  function signUp({ name, email, password }) {
    setAuthFormError(false);
    setAuthFormPreloader(true);
    setSubmitProcess(true);

    auth.register( name, email, password )
      .then((userData) => {
        setCurrentUser(userData);
        handleLogin(email, password, handleAuthorization);
        setSubmitProcess(false);

        setPopupOpened(true);
        setPopupError(false);
      })
      .catch((err) => {
        handleAuthFormError(err);

        setPopupOpened(true);
        setPopupError(true);
      })
      .finally(() => setAuthFormPreloader(false));
  };
  // Логин
  function signIn({ email, password }) {
    setAuthFormError(false);
    setAuthFormPreloader(true);
    setSubmitProcess(true);
    handleLogin(email, password, handleFullAuthorization);
  };
  // ЭФФЕКТЫ
  //проверка токена
  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      getUser();
      getSavedMovies();
      setLoggedIn(true);
    }
    else {
      handleLogout()
      setCheckedIn(true);
      setLoggedIn(false);
    };
  }, []);
  // ---Сборка сприложения
  return (
    <CurrentUserContext.Provider value={ { currentUser, setCurrentUser, setPopupOpened, setPopupError } }>
      <SavedMoviesContext.Provider value={ { storedMovies, setStoredMovies, setPopupOpened, setPopupError } }>
        < Routes >
          {/* РОУТ страницы МЕЙН */}
          < Route path="/" element={ 
            < Main
              isLoggedIn={isLoggedIn}
            />} 
          />

          {/* РОУТ страницы ЛОГИН */}
          <Route
            path="sign-in"
            element={
              <ProtectedRoute
              loggedIn={ !isLoggedIn }
              checkedIn={ true }
              element={
                <Login
                  isSignIn={true}
                  handleSubmit={signIn}
                  preloader={authFormPreloader}
                  submitError={authFormError}
                  submitProcess={submitProcess}
                />
              } />
            }
          />
          {/* РОУТ страницы РЕГИСТРАЦИЯ */}
          <Route
            path="sign-up"
            element={
              <ProtectedRoute
              loggedIn={ !isLoggedIn }
              checkedIn={ true }
              element={
                <Register
                  isSignIn={false}
                  handleSubmit={signUp}
                  preloader={authFormPreloader}
                  submitError={authFormError}
                  submitProcess={submitProcess}
                />
              } />
            }
          />
          {/* РОУТ страницы ПРОФИЛЬ */}
          <Route
            path="profile"
            element={
              <ProtectedRoute
                loggedIn={ isLoggedIn }
                checkedIn={ checkedIn }
                element={
                  <Profile isLoggedIn={isLoggedIn} handleLogout={handleLogout}  />
                }
              />
            }
          />
          {/* РОУТ страницы ФИЛЬМЫ */}
          <Route
            path="movies"
            element={
              <ProtectedRoute
                loggedIn={ isLoggedIn }
                checkedIn={ checkedIn }
                element={
                  <Movies />
                }
              />
            }
          />
          {/* РОУТ страницы СОХРАН.ФИЛЬМЫ */}
          <Route
            path="saved-movies"
            element={
              <ProtectedRoute
                loggedIn={ isLoggedIn }
                checkedIn={ checkedIn }
                element={
                  <SavedMovies />
                }
              />
            }
            />
          {/* РОУТ страницы NOTFOUND */}
          < Route path="/*" element={< NotFound />} />

        </ Routes >
        <InfoTooltip
            isOpen={ isPopupOpened }
            setIsOpen={ setPopupOpened }
            submitError={ popupError }
          />
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
