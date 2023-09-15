import React, { useState, useEffect, useContext  } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

import { calcDuration } from '../../utils/utils';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import  mainApi  from '../../utils/MainApi';

function MoviesCard({ card, isCardDelete = false }) {
  //переменные
  const [isCardSaved, setCardSaved] = useState(false);
  const moviesUrl = 'https://api.nomoreparties.co/';
  //контекст
  const { storedMovies, setStoredMovies, setPopupOpened, setPopupError } = useContext(SavedMoviesContext);
  //калькулятор длительности
  const duration = calcDuration(card.duration);

  const location = useLocation();
  //клас для кнопки удаления сохр.фильма на стр. сохраненных фильмов
  const classDeleteBtn = location.pathname === '/saved-movies' ? "card__save-box_button card__save-box_button-cross" : "card__save-box_button";
  //Функции
  //обработчик ошибки лайка
  function handleLikeError(err) {
    console.log(err.message)
    setPopupOpened(true);
    setPopupError(true);
  }
  //лайк
  function handleSave() {
    const movieData = {
      ...card,
      movieId: card.id,
      image: `${moviesUrl}${card.image.url}`,
      thumbnail: `${moviesUrl}${card.image.formats.thumbnail.url}`,
    };
    delete movieData.id;
    delete movieData.created_at;
    delete movieData.updated_at;

    console.log(movieData)

    mainApi.postSavedMovie(movieData)
      .then((movie) => {
        setCardSaved(!isCardSaved);
        setStoredMovies((state) => ([...state, movie]));
      })
      .catch((err) => handleLikeError(err));
  };
  //дизлайк
  function handleDelete() {
    const savedMovie = storedMovies.find((movie) => movie.movieId === card.id);
    const movieForDelete = isCardDelete ? card : savedMovie;

    mainApi.deleteSavedMovie(movieForDelete._id)
      .then((movie) => {
        setCardSaved(!isCardSaved);
        setStoredMovies((state) => state.filter((m) => m._id !== movie._id));

      })
      .catch((err) => handleLikeError(err));
  };
  //Эффекты
  useEffect(() => {
    if (isCardDelete) {
      setCardSaved(true);
    }
    else {
      setCardSaved(false);
    };
  }, [isCardDelete]);

  useEffect(() => {
    const isMovieSaved = storedMovies.some((movie) => {
      return movie.movieId === card.id;
    });

    if (isMovieSaved && !isCardDelete) {
      setCardSaved(true);
    }
  }, []);

  return (
    <article className="card">
      <a className="card__link" href={ card.trailerLink } target="_blank" rel="noreferrer">
        <img
          className="card__image"
          alt={`Кадр из фильма ${card.nameRU}`}
          src={ isCardDelete ? card.image : `${ moviesUrl }${ card.image.url }` }
        />
      </a>
      
      <div className='card__info'>
        <div className="card__text">
          <h2 className="card__name" title={card.nameRU}>{card.nameRU}</h2>
          <p className="card__time">{ duration }</p>
        </div>
        {isCardSaved  ? ( 
          <button
            className={classDeleteBtn}
            type="button"
            title="Удалить фильм из сохраненных"
            aria-label="Удалить фильм из сохраненных"
            onClick={handleDelete }
          />
        ) : (
          <button
            className='card__save-box_button card__save-box_button-inactive'
            type="button"
            title="Сохранить фильм"
            aria-label="Сохранить фильм"
            onClick={handleSave}
          />
        )}
        
      </div>
    </article>
  );
}

export default MoviesCard;