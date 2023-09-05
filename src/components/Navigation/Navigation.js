import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import close from '../../images/close-btn.svg'
import './Navigation.css';
import ProfileLink from '../ProfileLink/ProfileLink';

function Navigation({closePopup}) {
  const location = useLocation();
  const classMoviesLink = location.pathname === '/movies' ? "navigation__items-link navigation__items-link_border" : "navigation__items-link";
  const classSavedMoviesLink = location.pathname === '/saved-movies' ? "navigation__items-link navigation__items-link_border" : "navigation__items-link";
  return (
    <div className="navigation">
      <button className='navigation__close-btn' onClick={closePopup}>
        <img src={close} alt='Закрыть навигацию'/>
      </button>
      <nav className="navigation__list">
        <ul className="navigation__items">
          <li>
            <Link to="/" className="navigation__items-link">Главная</Link>
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