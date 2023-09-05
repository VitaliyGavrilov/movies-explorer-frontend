// Импорты
import './App.css';
//Библиотеки
import { Routes, Route } from "react-router-dom";
//Компоненты
import Main from '../../pages/Main/Main.js';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import NotFound from '../../pages/NotFound/NotFound';
//Утилиты

//Контекст

// Основной компонент, который собирает приложение
function App() {
  // ---Cтейт-переменные:

  // ---Функции

  // ---Сборка страницы из компонентов
  return (
    < Routes >
      < Route path="/" element={< Main />} />
      < Route path="/movies" element={< Movies />} />
      < Route path="/saved-movies" element={<SavedMovies/>} />
      < Route path="/profile" element={< Profile />} />
      < Route path="/signin" element={< Login />} />
      < Route path="/signup" element={< Register />} />
      < Route path="/*" element={< NotFound />} />
    </ Routes >
  );
}

export default App;
