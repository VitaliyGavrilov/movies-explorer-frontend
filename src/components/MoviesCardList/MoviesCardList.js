import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { moviesNumber, searchFilms } from '../../utils/utils';

function MoviesCardList({
  cardsData,
  isCardDelete = false,
  isPreloader,
  request,
  isShortFilm = false,
  isGetFilmsError,
  saveSearchData = false
}) {
  const [searchedCards, setSearchedCards] = useState([]),
        [visibleCards, setVisibleCards] = useState([]),
        [isCardsButton, setCardsButton] = useState(false),
        [numberVisibleCards, setNumberVisibleCards] = useState(0),
        [numberAdditionalCards, setNumberAdditionalCards] = useState(0),
        [isSearched, setSearched] = useState(false);

  function handleAddCardsButton() {
    setNumberVisibleCards((state) => state + numberAdditionalCards);
  };

  function handleMoviesNumber(visibleNumber, additionalNumber) {
    setNumberVisibleCards(visibleNumber);
    setNumberAdditionalCards(additionalNumber);
  };

  useEffect(() => {
    setSearchedCards(cardsData.filter((film) => {
      return searchFilms(film, request, isShortFilm);
    }));
  }, [cardsData, request, isShortFilm]);

  useEffect(() => {
    if (!isCardDelete) {
      setVisibleCards(searchedCards.slice(0, numberVisibleCards));
    }
    else {
      setVisibleCards(searchedCards);
    }

    if (searchedCards.length > 0 && saveSearchData) {
      localStorage.setItem('searchedMovies', JSON.stringify(searchedCards));
    }
  }, [searchedCards, numberVisibleCards]);

  useEffect(() => {
    if (searchedCards.length === 0 && cardsData.length > 0) {
      setSearched(true);

      if(saveSearchData) {
        localStorage.removeItem('searchedMovies');
      };
    }
    else {
      setSearched(false);
    }
  }, [cardsData, searchedCards]);


  useEffect(() => {
    setCardsButton(searchedCards.length > visibleCards.length);
  }, [searchedCards, visibleCards]);

  useEffect(() => {
    const handleNumber = () => {
      moviesNumber(handleMoviesNumber)
    };

    window.addEventListener('resize', handleNumber);
    return () => window.removeEventListener('resize', handleNumber);
  });

  useEffect(() => {
    moviesNumber(handleMoviesNumber, 0);
  }, []);

  useEffect(() => {
    moviesNumber(handleMoviesNumber, 0);
  }, [searchedCards]);

  return (
    <section className="cards app__content cards_width">
      {isPreloader 
      ? <Preloader/>
      : (
        <>
          {visibleCards.length > 0
          ?
          <div className="cards__list">
            {visibleCards.map((card) => (
              <MoviesCard key={ isCardDelete ? card._id : card.id } card={ card } isCardDelete={ isCardDelete }/>
            ))}
          </div> 
          :
          (<>
            { isSearched ?
              <p className="cards__empty-text">
                { !isGetFilmsError ?
                  'Ничего не найдено'
                  :
                  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                }
              </p>
              :
              ''
            }
            </>)
          }
        </>
      )

      }

      {!isCardDelete &&
        <>
          { isCardsButton &&
            <button
              className="cards__button"
              name="cardsButton"
              id="cards-button"
              onClick={ handleAddCardsButton }
              type="button"
            >
              Ещё
            </button>
          }
        </>
      }  
    </section>
  );
}


export default MoviesCardList;



// import React, { useState, useEffect } from 'react';
// import './MoviesCardList.css';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';
// import { moviesNumber, searchFilms } from '../../utils/utils';

// function MoviesCardList({
//   cardsData,
//   isCardDelete = false,
//   isPreloader,
//   request,
//   isShortFilm = false,
//   isGetFilmsError,
//   saveSearchData = false
// }) {
//   const [searchedCards, setSearchedCards] = useState([]),
//         [visibleCards, setVisibleCards] = useState([]),
//         [isCardsButton, setCardsButton] = useState(false),
//         [numberVisibleCards, setNumberVisibleCards] = useState(0),
//         [numberAdditionalCards, setNumberAdditionalCards] = useState(0),
//         [isSearched, setSearched] = useState(false);

//   function handleAddCardsButton() {
//     setNumberVisibleCards((state) => state + numberAdditionalCards);

//     console.log(window.screen.width)
//   };

//   function handleMoviesNumber(visibleNumber, additionalNumber) {
//     setNumberVisibleCards(visibleNumber);
//     setNumberAdditionalCards(additionalNumber);
//   };

//   useEffect(() => {
//     setSearchedCards(cardsData.filter((film) => {
//       return searchFilms(film, request, isShortFilm);
//     }));
//   }, [cardsData, request, isShortFilm]);

//   useEffect(() => {
//     if (!isCardDelete) {
//       setVisibleCards(searchedCards.slice(0, numberVisibleCards));
//     }
//     else {
//       setVisibleCards(searchedCards);
//     }

//     if (searchedCards.length > 0 && saveSearchData) {
//       localStorage.setItem('searchedMovies', JSON.stringify(searchedCards));
//     }
//   }, [searchedCards, numberVisibleCards]);

//   useEffect(() => {
//     if (searchedCards.length === 0 && cardsData.length > 0) {
//       setSearched(true);

//       if(saveSearchData) {
//         localStorage.removeItem('searchedMovies');
//       };
//     }
//     else {
//       setSearched(false);
//     }
//   }, [cardsData, searchedCards]);


//   useEffect(() => {
//     setCardsButton(searchedCards.length > visibleCards.length);
//   }, [searchedCards, visibleCards]);

//   useEffect(() => {
//     const handleNumber = () => moviesNumber(handleMoviesNumber);

//     window.addEventListener('resize', handleNumber);
//     return () => window.removeEventListener('resize', handleNumber);
//   });

//   useEffect(() => {
//     moviesNumber(handleMoviesNumber, 0);
//   }, []);

//   const w = window.screen.width

//   useEffect(() => {
    
//     console.log(w)
//   }, [w]);

//   return (
//     <section className="cards app__content cards_width">
//       {isPreloader 
//       ? <Preloader/>
//       : (
//         <>
//           {visibleCards.length > 0
//           ?
//           <div className="cards__list">
//             {visibleCards.map((card) => (
//               <MoviesCard key={ isCardDelete ? card._id : card.id } card={ card } isCardDelete={ isCardDelete }/>
//             ))}
//           </div> 
//           :
//           (<>
//             { isSearched ?
//               <p className="cards__empty-text">
//                 { !isGetFilmsError ?
//                   'Ничего не найдено'
//                   :
//                   'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
//                 }
//               </p>
//               :
//               ''
//             }
//             </>)
//           }
//         </>
//       )

//       }

//       {!isCardDelete &&
//         <>
//           { isCardsButton &&
//             <button
//               className="cards__button"
//               name="cardsButton"
//               id="cards-button"
//               onClick={ handleAddCardsButton }
//               type="button"
//             >
//               Ещё
//             </button>
//           }
//         </>
//       }  
//     </section>
//   );
// }


// export default MoviesCardList;