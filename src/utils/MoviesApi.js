class MoviesApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(res.status)
    }

    getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => this._checkResponse(res));
    };
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co');

export default moviesApi;