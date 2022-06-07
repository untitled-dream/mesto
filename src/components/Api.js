export default class API {
    constructor(options) {
        this._baseURL = options.baseURL;
        this._headers = options.headers;
    }

    _response(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialData() {
        return Promise.all([this.getUserData(), this.getInitialCards()]);
    }

    getInitialCards() {
        return fetch(`${this._baseURL}/cards`, {
            headers: this._headers
        }).then(this._response)
    }

    getUserData() {
        return fetch(`${this._baseURL}/users/me`, {
            headers: this._headers
        }).then(this._response)
    }

    setUserData(data) {
        return fetch(`${this._baseURL}cards`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        }).then(this._response)
    }

    setUserAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then(this._handleOriginalResponse)
    }

    sendCard(data) {
        return fetch(`${this._baseURL}cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                linl: data.link
            })
        }).then(this._response)
    }

    setLike(data) {
        return fetch(`${this._baseURL}cards/${data.id}/likes`, {
            method: "PUT",
            headers: this._headers
        }).then(this._response)
    }

    deleteLike(data) {
        return fetch(`${this._baseURL}cards/${data.id}/likes`, {
            method: "DELETE",
            headers: this._headers
        }).then(this._response)
    }

    updateProfilePhoto(data) {
        return fetch(`${this._baseURL}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then(this._response)
    }
}