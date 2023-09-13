//Библиотеки
import { useState, useContext } from 'react';
// Импорты
import './SavedMovies.css';
//Компоненты
import SearchForm from '../../components/SearchHorm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//Контекст
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

// Основной компонент, который собирает приложение
function SavedMovies() {
  const [request, setRequest] = useState(''),
        [isShortFilm, setShortFilm] = useState(false);

  const { storedMovies } = useContext(SavedMoviesContext);


  function handleSavedMovieSubmit(value, checked) {
    setRequest(value);
    setShortFilm(checked);
  };

  // ---Сборка страницы из компонентов
  return (
    <div className='app__page app__page_gray'>
      <Header
        isLoggedIn={ true }
      />
      <main className='app__main-block'>
        <SearchForm handleMovieSubmit={ handleSavedMovieSubmit }/> 
        <MoviesCardList 
          cardsData={ storedMovies }
          isCardDelete={ true }
          request={ request }
          isShortFilm={ isShortFilm }
        />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;