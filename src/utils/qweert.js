//   // ---Запрос на получение данных пользователя и карточек, только при успешном входе в систему
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies(), moviesApi.getMovies()])
//         .then(([userInfo, savedMovies, allMovies]) => {
//           setCurrentUser(userInfo);
//           setSavedMovies(savedMovies);
//           setMovies(allMovies);
//           // console.log(userInfo);
//           // console.log(savedMovies);
//           // console.log(allMovies);
//         })
//         .catch((err) => { console.log(`Возникла ошибка при загрузке данных, ${err}`) })
//     }
//   }, [loggedIn]);
//   // ---Если токен есть в локальном хранилише то переходим на базовую страницу
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       auth
//         .checkToken()
//         .then((res) => {
//           setLoggedIn(true);
//           // navigate("/movies");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [navigate]);
//   // ---Функции для логина и регистрации:
//   // --Функция для логина
//   function handleLogin (email, password) {
//     auth
//       .login(email, password)
//       .then((res) => {
//         localStorage.setItem("token", res.token);
//         setLoggedIn(true);
//         navigate("/movies");
//         console.log('Вы успешно вошли в аккаунт')
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   // --Функция для регистрации
//   function handleRegister (name, email, password) {
//     auth
//       .register(name, email, password)
//       .then(() => {
//         console.log('Вы успешно зарегистрировались')
//       })
//       .then(() => {
//         handleLogin(email, password)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   // -Обработчик редактирования данных пользователя
//   function handleEditProfile(userItem) {
//     mainApi.patchUserInfo(userItem.name, userItem.email)
//       .then((res) => { 
//         setCurrentUser(res); 
//       })
//       .catch((err) => { console.log(`Возникла ошибка при редактировании профиля, ${err}`) })
//   }
//   // Обработчик удаления фильма из сохран.
//   function handleDeleteMovie (movie) {
//     mainApi.deleteSavedMovie(movie._id)
//       .then(() => {
//         const newSavedMovies = savedMovies.filter((i) => i.movieId !== movie.movieId);
//         setSavedMovies(newSavedMovies); 
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }
//   // Обработтчик добавления фильма в сохран.
//   function handleSaveMovie (movie) {
//     mainApi.postSavedMovie (movie)
//       .then((movie) => {
//         setSavedMovies([...savedMovies, movie]);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
    
//   }





        //   {/* РОУТ страницы ФИЛЬМЫ */}
        //   <Route path="/movies" element={(
        //     < ProtectedRoute Component={Movies}
        //       currentUser={currentUser}
        //       isLoading={isLoading}
        //       setIsLoading={setIsLoading}
        //       movies={movies}
        //       setMovies={setMovies}
        //       savedMovies={savedMovies}
        //       setSavedMovies={setSavedMovies}
        //       handleSaveMovie={handleSaveMovie}
        //       handleDeleteMovie={handleDeleteMovie}
        //       isShortMovies={isShortMovies}
        //       error={error}
        //       setError={setError} 
        //     /> )} 
        //   />

        //   {/* РОУТ страницы СОХРАНЕННЫЕ ФИЛЬМЫ */}
        //   < Route path="/saved-movies" element={<SavedMovies/>} />
        //   {/* РОУТ страницы ПРОФИЛЬ */}
        //   < Route path="/profile" element={
        //     < Profile
        //       currentUser={currentUser}
        //       handleEditProfile={handleEditProfile}
        //       setLoggedIn={setLoggedIn}
        //     />} 
        //   />