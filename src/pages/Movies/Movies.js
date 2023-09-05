// Импорты
import SearchForm from '../../components/SearchHorm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//Библиотеки

//Компоненты

//Утилиты

//Контекст

// Основной компонент, который собирает приложение
function Movies() {
  // ---Cтейт-переменные:

  // ---Функции

  // ---Сборка страницы из компонентов
  return (
    <div className='app__page app__page_gray'>
      <Header
        isLoggedIn
      />
      <main className='app__main-block'>
        <SearchForm/> 
        <MoviesCardList />
      </main>
      <Footer />
    </div>

  );
}

export default Movies;