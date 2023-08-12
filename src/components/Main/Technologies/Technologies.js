// Импорты

//Библиотеки

import './Technologies.css';
//Компоненты

//Утилиты

//Контекст

// компонент с описанием дипломного проекта.
function Technologies() {
  // ---Cтейт-переменные:

  // ---Функции

  // компонент с использованными технологиями.
  return (
    <section className="technologies">
      <div className="technologies__block app__section">

        <h2 className="main__subtitle">Технологии</h2>

        <div className='technologies__content'>
          <h3 className='technologies__content-title'>7 технологий</h3>
          <p className='technologies__content-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>

        <ul className='technologies__list'>
          <li className='technologies__list-item'>HTML</li>
          <li className='technologies__list-item'>CSS</li>
          <li className='technologies__list-item'>JS</li>
          <li className='technologies__list-item'>React</li>
          <li className='technologies__list-item'>Git</li>
          <li className='technologies__list-item'>Express.js</li>
          <li className='technologies__list-item'>mongoDB</li>
        </ul>

      </div>  
    </section>    
  );
}
  
export default Technologies ;