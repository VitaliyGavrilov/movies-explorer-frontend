import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import burger from '../../images/icon-burger.svg';
import Navigation from '../Navigation/Navigation';
import ProfileLink from '../ProfileLink/ProfileLink';


function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

        <img src={logo} alt="Логотип проекта"/>

        <div className='header__links-block'>

          <div className='header__movies-links'>
            <Link to="/movies" className="header__link" >
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__link header__link_margin" >
              Сохраненные фильмы
            </Link>
          </div>

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