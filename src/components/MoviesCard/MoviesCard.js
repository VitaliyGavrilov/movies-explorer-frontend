import React, { useState } from 'react';
import './MoviesCard.css';
import image from '../../images/cadr.png';

function MoviesCard() {
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const handleButtonClick = () => {
    setIsSavedMovie(!isSavedMovie);
  };

  return (
    <article className="card">
      <img
        className="card__image"
        alt="Кадр из фильма '33 слова о дизайне'"
        src={image}
      />
      <div className='card__info'>
         <div className="card__text">
          <h2 className="card__name">33&nbsp;слова о&nbsp;дизайне</h2>
          <p className="card__time">1ч&nbsp;47м</p>
        </div>
        <button
          className={`card__save-box_button ${!isSavedMovie ? 'card__save-box_button-inactive' : ''}`}
          type="button"
          title="Сохранить фильм"
          aria-label="Сохранить фильм"
          onClick={handleButtonClick}
        />
      </div>
    </article>
  );
}

export default MoviesCard;