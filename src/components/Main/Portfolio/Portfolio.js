import './Portfolio.css';

function Portfolio() {
  return (
      <section className="portfolio">
        <div className='portfolio__block app__content'>

          <h2 className='portfolio__title'>Портфолио</h2>

          <ul className='portfolio__list'>
            <li className="portfolio__list-item">
              <p className='portfolio__text'>Статичный сайт</p>
              <a className='portfolio__link' href="https://github.com/VitaliyGavrilov/learn-to-learn-plus">↗</a>
            </li>
            <li className="portfolio__list-item">
              <p className='portfolio__text'>Адаптивный сайт</p>
              <a className='portfolio__link' href="https://github.com/VitaliyGavrilov/russian-travel">↗</a>
            </li>
            <li className="portfolio__list-item">
              <p className='portfolio__text'>Одностраничное приложение</p>
              <a className='portfolio__link' href="https://github.com/VitaliyGavrilov/react-mesto-auth">↗</a>
            </li>  
          </ul>

        </div>
      </section>      
  );
}
  
export default Portfolio ;