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
      <div className="technologies__block app__content">

        <h2 className="app__subtitle">Технологии</h2>

        <div className='technologies__content'>
          <h3 className='technologies__content-title'>7 технологий</h3>
          <p className='technologies__content-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>

        <ul className='technologies__list'>
          <li className='technologies__list-item'>
            <p className="technologies__list-text">HTML</p>
          </li>
          <li className='technologies__list-item'>
            <p className="technologies__list-text">CSS</p>
          </li>
          <li className='technologies__list-item'>
            <p className="technologies__list-text">JS</p>
          </li>
          <li className='technologies__list-item'>
            <p className="technologies__list-text">React</p>
          </li>
          <li className='technologies__list-item'>
            <p className="technologies__list-text">Git</p>
          </li>
          <li className='technologies__list-item'>
            <p className="technologies__list-text">Express.js</p>
          </li>
          <li className='technologies__list-item'>
            <p className="technologies__list-text">mongoDB</p>
          </li>
        </ul>

      </div>  
    </section>    
  );
}
  
export default Technologies ;