// Импорты
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
//Библиотеки

//Компоненты

//Утилиты

//Контекст

// Основной компонент, который собирает секцию SearchForm
function SearchForm() {
  // ---Cтейт-переменные:

  // ---Функции

  // ---Сборка страницы из компонентов
  return (
    <section className='search app__content'>
      <form className='search__form'>
        <fieldset className='search__fieldset'>
          <input
            type='text'
            className='search__input'
            placeholder='Фильм'
            required  
          />
          <button type="submit" className="search__button"/>
        </fieldset>
        <FilterCheckbox/>
      </form>  

    </section>

  );
}

export default SearchForm;