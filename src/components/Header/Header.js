import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import burger from '../../images/icon-burger.svg';
import Navigation from '../Navigation/Navigation';
import ProfileLink from '../ProfileLink/ProfileLink';


function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();

  const classMoviesLink = location.pathname === '/movies' ? "header__link header__link_border" : "header__link";
  const classSavedMoviesLink = location.pathname === '/saved-movies' ? "header__link header__link_margin header__link_border" : "header__link header__link_margin";

  const toggleMenu = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  };
  return (
    <header className="header">
      <div className='header__content app__content header__content_width'>

        
        <Link to="/">
          <img src={logo} alt="Логотип проекта"/> 
        </Link>

        <div className='header__links-block'>

          <nav className='header__movies-links'>
            <Link to="/movies" className={classMoviesLink} >
              Фильмы
            </Link>
            <Link to="/saved-movies" className={classSavedMoviesLink} >
              Сохраненные фильмы
            </Link>
          </nav>

          <ProfileLink/>

        </div>

        <button className='header__btn-burger'  onClick={toggleMenu} onKeyDown={handleKeyDown}>
          <img src={burger} alt="Вызов навигации"/>
        </button>
      </div>

      {isPopupOpen && (
        <Navigation closePopup = {toggleMenu}/>
      )}
    </header>
  );
}



export default Header;