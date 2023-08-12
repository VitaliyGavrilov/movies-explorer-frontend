// Импорты
//Библиотеки
import './Main.css';
//Компоненты
import NavTab from './NavTab/NavTab.js';
import Promo from './Promo/Promo.js';
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
    </div>
  );
}

export default Main;