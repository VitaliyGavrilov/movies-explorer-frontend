// Импорты
//Библиотеки
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import './Main.css';
//Компоненты
import NavTab from './NavTab/NavTab.js';
import Promo from './Promo/Promo.js';
import Technologies from './Technologies/Technologies';
//Утилиты

//Контекст

// Основной компонент, который собирает компонент Main
function Main() {
  // ---Cтейт-переменные:

  // ---Функции

  // ---Сборка страницы из компонентов
  return (
    <div className="main">
      < Promo />
      < NavTab />
      < AboutProject />
      < Technologies />
      < AboutMe />
    </div>
  );
}

export default Main;