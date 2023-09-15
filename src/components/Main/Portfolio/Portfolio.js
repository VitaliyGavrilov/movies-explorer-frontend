import './Portfolio.css';

function Portfolio() {
  return (
      <section className="portfolio">
        <div className='portfolio__block app__content portfolio__block_width'>

          <h2 className='portfolio__title'>Портфолио</h2>

          <ul className='portfolio__list'>
            <li className="portfolio__list-item">
              <a className='portfolio__text' href="https://github.com/VitaliyGavrilov/learn-to-learn-plus" target="_blank" rel="noopener noreferrer">Статичный сайт</a>
              <a className='portfolio__link' href="https://github.com/VitaliyGavrilov/learn-to-learn-plus" target="_blank" rel="noopener noreferrer">↗</a>
            </li>
            <li className="portfolio__list-item">
              <a className='portfolio__text' href="https://github.com/VitaliyGavrilov/russian-travel" target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
              <a className='portfolio__link' href="https://github.com/VitaliyGavrilov/russian-travel" target="_blank" rel="noopener noreferrer">↗</a>
            </li>
            <li className="portfolio__list-item">
              <a className='portfolio__text'  href="https://github.com/VitaliyGavrilov/react-mesto-auth" target="_blank" rel="noopener noreferrer">Одностраничное приложение</a>
              <a className='portfolio__link' href="https://github.com/VitaliyGavrilov/react-mesto-auth" target="_blank" rel="noopener noreferrer">↗</a>
            </li>  
          </ul>

        </div>
      </section>      
  );
}
  
export default Portfolio ;