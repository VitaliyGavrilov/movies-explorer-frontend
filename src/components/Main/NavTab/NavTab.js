// ---Импорты
//Библиотеки
import React from 'react';
import { Link } from 'react-scroll';
//Стили
import './NavTab.css';
//компонент с навигацией по странице «О проекте».
function NavTab () {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__block">
        <ul className="nav-tab__links">
          <li className="nav-tab__links_item">
            <Link to="about-project" className="nav-tab__link">О проекте</Link>
          </li>
          <li className="nav-tab__links_item">
            <Link to="technologies" className="nav-tab__link">Технологии</Link>
          </li>
          <li className="nav-tab__links_item">
            <Link to="about-me" className="nav-tab__link">Студент</Link>
          </li>
        </ul>
      </nav>
    </section>    
  );
}
  
export default NavTab;