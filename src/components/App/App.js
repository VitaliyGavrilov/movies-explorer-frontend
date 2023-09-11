// Импорты
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
//Утилиты
//API
import * as auth from '../../utils/MainApiAuth';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

//Контекст

// Основной компонент, который собирает приложение
function App() {
  // ---Cтейт-переменные:
  const [loggedIn, setLoggedIn] = useState(false);        // состояние-Вход в акаунт
  const [currentUser, setCurrentUser] = useState({});     // данные-Данные текущего пользователя
  const [savedMovies, setSavedMovies] = useState([]);     // данные-Сохраненные фильмы
  const [movies, setMovies] = useState([]);               // данные-Фильмы
  const navigate = useNavigate();

  // ---Функции
    // ---Запрос на получение данных пользователя и карточек, только при успешном входе в систему
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies(), moviesApi.getMovies()])
          .then(([userInfo, savedMovies, allMovies]) => {
            setCurrentUser(userInfo);
            setSavedMovies(savedMovies);
            setMovies(allMovies);
            // console.log(userInfo);
            // console.log(savedMovies);
            // console.log(allMovies);
          })
          .catch((err) => { console.log(`Возникла ошибка при загрузке данных, ${err}`) })
      }
    }, [loggedIn]);
    // ---Если токен есть в локальном хранилише то переходим на базовую страницу
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        auth
          .checkToken()
          .then((res) => {
            setLoggedIn(true);
            // navigate("/movies");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [navigate]);
  // ---Функции для логина и регистрации:
  // --Функция для логина
  function handleLogin (email, password) {
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        navigate("/movies");
        console.log('Вы успешно вошли в аккаунт')
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // --Функция для регистрации
  function handleRegister (name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        console.log('Вы успешно зарегистрировались')
      })
      .then(() => {
        handleLogin(email, password)
      })
      .catch((err) => {
        console.log(err);
      });
  }
    // -Обработчик сабмита данных пользователя
    function handleEditProfile(userItem) {
      mainApi.patchUserInfo(userItem.name, userItem.email)
        .then((res) => { 
          setCurrentUser(res); 
        })
        .catch((err) => { console.log(`Возникла ошибка при редактировании профиля, ${err}`) })
    }

  // ---Сборка страницы из компонентов
  return (
    < Routes >
      < Route path="/" element={< Main />} />
      < Route path="/movies" element={< Movies />} />
      < Route path="/saved-movies" element={<SavedMovies/>} />
      < Route path="/profile" element={
        < Profile
          currentUser={currentUser}
          handleEditProfile={handleEditProfile}
        />} 
      />
      < Route path="/signin" element={
        < Login
          handleLogin={handleLogin}
        />} 
      />
      < Route path="/signup" element={
        < Register
          handleRegister={handleRegister}
        />} 
      />
      < Route path="/*" element={< NotFound />} />
    </ Routes >
  );
}

export default App;
