// ---Импорты
//Библиотеки
//Компоненты
import HeaderMainPage from '../../components/Main/HeaderMainPage/HeaderMainPage';
import Promo from '../../components/Main/Promo/Promo.js';//компонент с вёрсткой баннера страницы «О проекте».
import NavTab from '../../components/Main/NavTab/NavTab.js';//компонент с навигацией по странице «О проекте».
import AboutProject from '../../components/Main/AboutProject/AboutProject';// компонент с описанием дипломного проекта.
import Technologies from '../../components/Main/Technologies/Technologies';// компонент с использованными технологиями.
import AboutMe from '../../components/Main/AboutMe/AboutMe';//компонент с информацией о студенте.
import Portfolio from '../../components/Main/Portfolio/Portfolio';//компонент со ссылками на другие проекты.
import Footer from '../../components/Footer/Footer';
//Утилиты

//Контекст

// Основной компонент, который собирает странницу Main
function Main() {
  // ---Cтейт-переменные:
  // ---Функции
  // ---Сборка страницы из компонентов
  return (
    <div className='app__page'>
      <HeaderMainPage />
      <main className='app__main-block'>
        < Promo />
        < NavTab />
        < AboutProject />
        < Technologies />
        < AboutMe />
        < Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default Main;