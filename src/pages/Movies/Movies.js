// Импорты
import React, { useEffect, useState } from 'react';
//компоненты
import SearchForm from '../../components/SearchHorm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//апи
import moviesApi from '../../utils/MoviesApi';

// сборка страницы фильмы
function Movies({ isLoggedIn }) {
  const [allCards, setAllCards] = useState([]),
        [isPreloader, setPreloader] = useState(false),
        [isGetFilmsError, setGetFilmsError] = useState(false),
        [request, setRequest] = useState(''),
        [isShortFilm, setShortFilm] = useState(false);


  // Get films
  function getFilms() {
    setPreloader(true);
    setGetFilmsError(false);
    const storedMovies = JSON.parse(localStorage.getItem('movies'));

    if (storedMovies) {
      setAllCards(storedMovies);
      setPreloader(false);
      return;
    }

    else {
      moviesApi.getMovies()
      .then((cardsData) => {
        setAllCards(cardsData);
        localStorage.setItem('movies', JSON.stringify(cardsData));
      })
      .catch((err) => {
        console.log(err.message);
        setGetFilmsError(true);
      })
      .finally(() => setPreloader(false))
    };
  };

  // Set and save search parameters
  function handleMovieSubmit(value, checked) {
    getFilms();

    setRequest(value);
    setShortFilm(checked);

    localStorage.setItem('searchParams', JSON.stringify({ value, checked }));
  };


  // Show already searched movies
  useEffect(() => {
    const storedMovies = localStorage.getItem('searchedMovies');

    if (storedMovies) {
      setAllCards(JSON.parse(storedMovies));
    };
  }, []);

  // ---Сборка страницы из компонентов
  return (
    <div className='app__page app__page_gray'>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main className='app__main-block'>
        <SearchForm
          handleMovieSubmit={ handleMovieSubmit }
          isMovieSearched = { true }
          setShortFilm={ setShortFilm }
        /> 
        <MoviesCardList
          cardsData={ allCards }
          isCardDelete={ false }
          isPreloader = { isPreloader }
          request = { request }
          isShortFilm = { isShortFilm }
          isGetFilmsError = { isGetFilmsError }
          saveSearchData={ true }
        />
      </main>
      <Footer />
    </div>

  );
}

export default Movies;