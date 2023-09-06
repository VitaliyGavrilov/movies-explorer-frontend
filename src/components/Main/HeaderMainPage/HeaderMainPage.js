import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMainPage.css';
import logo from '../../../images/logo.svg';


function HeaderMainPage() {
  return (
    <header className="header-main">
      <div className='header-main__content'>
        <img src={logo} alt="Логотип проекта"/>
        <div className='header-main__links-block'>
          <Link to="/signup" className="header-main__link" >
            Регистрация
          </Link>
          <Link to="/signin" className="header-main__link header-main__link_green" >
            Войти
          </Link>
        </div>
      </div>
    </header>
        
        
  );
}



export default HeaderMainPage;