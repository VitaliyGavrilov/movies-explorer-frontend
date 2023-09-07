// Импорты
import photo from '../../../images/stydent-portret.png';
//Библиотеки

import './AboutMe.css';

//Компоненты

//Утилиты

//Контекст

// компонент с описанием дипломного проекта.
function AboutMe() {
  // ---Cтейт-переменные:

  // ---Функции

  // компонент с использованными технологиями.
  return (
    <section className="about-me">
      <div className="about-me__block app__content about-me__block_width">

        <h2 className="app__subtitle about-me__title">Студент</h2>

        <div className='about-me__content'>

          <div className='about-me__info-block'>
            <h3 className='about-me__content-title'>Виталий</h3>
            <p className='about-me__content-subtitle'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__content-text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className='about-me__content-link' href='https://github.com/VitaliyGavrilov' target="_blank" rel="noopener noreferrer">Github</a>
          </div>

          <img className='about-me__content-img' alt='Фото студента' src={ photo }/>

        </div>
      </div>
    </section>    
  );
}
  
export default AboutMe ;