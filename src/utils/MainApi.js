class MainApi {
  constructor({ baseUrl }) {
    // тело конструктора, принимает:
    this._baseUrl = baseUrl;//ссылка на сервер
  }
  //--публичные методы:
  //-информация пльзователя:
  //для загрузки информации о пользователе с сервера
  getUserInfo() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
  //для изменения информации о пользователе
  patchUserInfo(name, email) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        name: name,
        email: email
      }),
    }).then(this._checkResponse);
  }
  //-Сохраненные фильмы:
  //Фильмы мы берем на другом сервере, добавляя в сохрпненные они попадают на наш бекенд
  //для загрузки сохр.фильмов с нашего сервера
  getSavedMovies() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
  //добавленеи в сохран.фильма(для загрузки сохр.фильмов на наш сервер)
  postSavedMovie(movie) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    }).then(this._checkResponse);
  }

  //удаление сохран.фильма
  deleteSavedMovie(id) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
  //--приватные методы:
  //для проверки ответа с сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new MainApi({
  baseUrl: 'https://diplom.api.vit.nomoreparties.co',
})

export default api;