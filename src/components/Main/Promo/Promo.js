// ---Импорты
//Библиотеки
import React from 'react';
//Изображения
import promoLogo from '../../../images/promo-logo.svg';
//Стили
import './Promo.css';
// компонент с вёрсткой баннера страницы «О проекте».
function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={ promoLogo } className="promo__logo" alt="Логотип Яндекс.Практикума" />
    </section>    
  );
}
  
export default Promo;