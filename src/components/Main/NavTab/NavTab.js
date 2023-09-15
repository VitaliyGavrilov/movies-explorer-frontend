// ---Импорты
//Библиотеки
import React from 'react';

//Стили
import './NavTab.css';
//компонент с навигацией по странице «О проекте».
function NavTab () {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__block">
        <ul className="nav-tab__links">
          <li className="nav-tab__links_item">
            <a href="#project" className="nav-tab__link">О проекте</a>
          </li>
          <li className="nav-tab__links_item">
            <a href="#technologies" className="nav-tab__link">Технологии</a>
          </li>
          <li className="nav-tab__links_item">
            <a href="#student" className="nav-tab__link">Студент</a>
          </li>
        </ul>
      </nav>
    </section>    
  );
}
  
export default NavTab;