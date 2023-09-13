// Импорты
import React, { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

// Основной компонент, который собирает секцию SearchForm
function SearchForm({ handleMovieSubmit, isMovieSearched = false, setShortFilm }) {

  const [filmSearch, setFilmSearch] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [isEmptySearch, setEmptySearch] = useState(false);

  const savedSearchParams = localStorage.getItem('searchParams');

  function handleFilmSearch(evt) {
    setFilmSearch(evt.target.value);
  };

  function handleChecked() {
    // Save local check state
    const newCheckParametr = JSON.parse(savedSearchParams);
    newCheckParametr.checked = !isChecked;
    localStorage.setItem('searchParams', JSON.stringify(newCheckParametr));

    setChecked(!isChecked);
    setShortFilm(!isChecked);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    if (filmSearch.length === 0) {
      return setEmptySearch(true);
    }
    else {
      setEmptySearch(false);
    };

    handleMovieSubmit(
      evt.target['1'].value,
      evt.target['3'].checked
    );
  };

  useEffect(() => {
    if (isMovieSearched) {
      const searchParams = JSON.parse(savedSearchParams);

      if (searchParams) {
        setFilmSearch(searchParams.value);
        setChecked(searchParams.checked);
      };
    };
  }, []);

  // ---Сборка страницы из компонентов
  return (
    <section className='search app__content search_width'>
      <form className='search__form' onSubmit={handleSubmit}>
        <fieldset className='search__fieldset'>
          <input className='search__input'
            name="searchField"
            id="search-field"
            value={ filmSearch || '' }
            onChange={ handleFilmSearch }
            type="text"
            placeholder="Фильм"
          />
          <button type="submit" className="search__button"/>
        </fieldset>

        

        <FilterCheckbox 
          checked={ isChecked || '' }
          onChange={ handleChecked }
        />
      </form>
      <p className="search__error">{ isEmptySearch && "Нужно ввести ключевое слово" }</p>

    </section>

  );
}

export default SearchForm;