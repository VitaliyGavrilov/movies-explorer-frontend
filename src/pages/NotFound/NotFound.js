import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className='app__page app__page_gray'>
      <main className='app__main-block'>
        <section className="not-found">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">Страница не найдена</p>
          <Link to="/" className="not-found__link">Назад</Link>
        </section>
      </main>
    </div>
    
  );
}

export default NotFound;