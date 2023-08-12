// Импорты
//Библиотеки
import React from 'react';
import './NavTab.css';
import { Link } from 'react-scroll';
//Компоненты

//Утилиты

//Контекст

// компонент с вёрсткой баннера страницы «О проекте».
function NavTab () {
  // ---Cтейт-переменные:

  // ---Функции

  // ---Сборка страницы из компонентов
  return (
    <section className="nav-tab">
      <nav className="nav-tab__block">
        <ul className="nav-tab__links">
          <li className="nav-tab__links_item">
            <Link to="/about-project" className="nav-tab__link">О&nbsp;проекте</Link>
          </li>
          <li className="nav-tab__links_item">
            <Link to="/techs" className="nav-tab__link">Технологии</Link>
          </li>
          <li className="nav-tab__links_item">
            <Link to="/about-me" className="nav-tab__link">Студент</Link>
          </li>
        </ul>
      </nav>
    </section>    
  );
}
  
export default NavTab ;