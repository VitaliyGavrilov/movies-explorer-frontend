import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import close from '../../images/close-btn.svg'
import './Navigation.css';
import ProfileLink from '../ProfileLink/ProfileLink';

function Navigation({closePopup}) {
  const location = useLocation();
  const classMoviesLink = location.pathname === '/movies' ? "header-popup__items_link header-popup__items-link_border" : "header-popup__items_link";
  const classSavedMoviesLink = location.pathname === '/saved-movies' ? "header-popup__items_link header-popup__items-link_border" : "header-popup__items_link";
  return (
    <div className="header-popup">
      <button className='navigation__close-btn' onClick={closePopup}>
        <img src={close} alt='Закрыть навигацию'/>
      </button>
      <nav className="header-popup__list">
        <ul className="header-popup__items">
          <li>
            <Link to="/" className="header-popup__items_link">Главная</Link>
          </li>
          <li>
            <Link to="/movies" className={classMoviesLink}>Фильмы</Link>
          </li>
          <li>
            <Link to="/saved-movies" className={classSavedMoviesLink}>Сохранённые фильмы</Link>
          </li>
        </ul>
        <ProfileLink/>
      </nav>
    </div>
  );
}

export default Navigation;