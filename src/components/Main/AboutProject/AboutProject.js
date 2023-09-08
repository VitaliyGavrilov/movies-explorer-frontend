// Импорты

//Библиотеки

import './AboutProject.css';
//Компоненты

//Утилиты

//Контекст

// компонент с описанием дипломного проекта.
function AboutProject() {
  // ---Cтейт-переменные:

  // ---Функции

  // ---Сборка страницы из компонентов
  return (
    <section className="about-project">
      <div className="about-project__block app__content">

        <h2 className="app__subtitle">О проекте</h2>

        <div className="about-project__contents">
          
          <div className="about-project__content-block">
            <h3 className="about-project__content-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__content-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
          </div>

          <div className="about-project__content-block about-project__content-block_margin-mod">
            <h3 className="about-project__content-title">На&nbsp;выполнение диплома ушло 5 недель</h3>
            <p className="about-project__content-text">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>

        </div>

        <div className="about-project__duration">
          <span className="about-project__duration-title about-project__duration-title_green">1&nbsp;неделя</span>
          <span className="about-project__duration-title">4&nbsp;недели</span>
          <span className="about-project__duration-text">Back-end</span>
          <span className="about-project__duration-text">Front-end</span>
        </div>

      </div>  
    </section>    
  );
}
  
export default AboutProject ;