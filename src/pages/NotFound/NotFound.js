import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  function backPage() {
    navigate(-1);
  };
  return (
    <div className='app__page app__page_gray'>
      <main className='app__main-block'>
        <section className="not-found">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">Страница не найдена</p>
          <button className="not-found__link" 
            type="button"
            name="notFoundButton"
            onClick={ backPage }>Назад</button>
        </section>
      </main>
    </div>
    
  );
}

export default NotFound;