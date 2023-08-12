// Импорты
import promoLogo from '../../../images/promo-logo.svg';
//Библиотеки
import React from 'react';
import './Promo.css';
//Компоненты

//Утилиты

//Контекст

// компонент с вёрсткой баннера страницы «О проекте».
function Promo() {
  // ---Cтейт-переменные:

  // ---Функции

  // ---Сборка страницы из компонентов
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={ promoLogo } className="promo__logo" alt="Логотип Яндекс.Практикума" />
    </section>    
  );
}
  
export default Promo;