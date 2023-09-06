import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
      <div className="footer__content app__content">
        <p className="footer__content_year">@ 2023</p>
        <ul className="footer__links">
          <li className='footer__link'>
            <a href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer" className="footer__link">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a href="https://github.com/VitaliyGavrilov" target="_blank" rel="noopener noreferrer" className="footer__link">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;