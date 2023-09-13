import React, { useState, useEffect, useContext  } from 'react';

import './MoviesCard.css';

import { calcDuration } from '../../utils/utils';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import  mainApi  from '../../utils/MainApi';

function MoviesCard({ card, isCardDelete = false }) {
  const [isCardSaved, setCardSaved] = useState(false),
        [buttonClass, setButtonClass] = useState('');

  const { storedMovies,
    setStoredMovies,
    setPopupOpened,
    setPopupError
  } = useContext(SavedMoviesContext);
  const moviesUrl = 'https://api.nomoreparties.co/';
  const duration = calcDuration(card.duration);

  function handleLikeError(err) {
    console.log(err.message)
    setPopupOpened(true);
    setPopupError(true);
  }

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

    mainApi.likeCard(movieData)
      .then((movie) => {
        setCardSaved(!isCardSaved);
        setStoredMovies((state) => ([...state, movie]));
      })
      .catch((err) => handleLikeError(err));
  };

  function handleDelete() {
    const savedMovie = storedMovies.find((movie) => movie.movieId === card.id);
    const movieForDelete = isCardDelete ? card : savedMovie;

    mainApi.dislikeCard(movieForDelete._id)
      .then((movie) => {
        setCardSaved(!isCardSaved);
        setStoredMovies((state) => state.filter((m) => m._id !== movie._id));

      })
      .catch((err) => handleLikeError(err));
  };


  useEffect(() => {
    if (isCardDelete) {
      setButtonClass('card__button_for_delete');
      setCardSaved(true);
    }
    else {
      setButtonClass('card__button_for_save');
      setCardSaved(false);
    };
  }, [isCardDelete]);

  useEffect(() => {
    const isMovieSaved = storedMovies.some((movie) => {
      return movie.movieId === card.id;
    });

    if (isMovieSaved && !isCardDelete) {
      setCardSaved(true);
      setButtonClass('card__button_for_save');
    }
  }, []);

  return (
    <article className="card">
      <img
        className="card__image"
        alt={`Кадр из фильма ${card.nameRU}`}
        src={ isCardDelete ? card.image : `${ moviesUrl }${ card.image.url }` }
      />
      <div className='card__info'>
        <div className="card__text">
          <h2 className="card__name" title={card.nameRU}>{card.nameRU}</h2>
          <p className="card__time">{ duration }</p>
        </div>
        {isCardSaved  ? ( 
          <button
            className='card__save-box_button'
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