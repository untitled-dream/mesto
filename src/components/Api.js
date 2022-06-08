export default class API {
    constructor(options) {
        this._baseURL = options.baseURL;
        this._headers = options.headers;
    }

    _defaultResponse(res) {
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
        }).then(this._defaultResponse)
    }

    getUserData() {
        return fetch(`${this._baseURL}/users/me`, {
            headers: this._headers
        }).then(this._defaultResponse)
    }

    setUserData(data) {
        return fetch(`${this._baseURL}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        }).then(this._defaultResponse)
    }

    setUserAvatar(data) {
        return fetch(`${this._baseURL}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then(this._defaultResponse)
    }

    sendCard(data) {
        return fetch(`${this._baseURL}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.place,
                link: data.link
            })
        }).then(this._defaultResponse)
    }

    setLike(data) {
        return fetch(`${this._baseURL}/cards/${data._id}/likes`, {
            method: "PUT",
            headers: this._headers
        }).then(this._defaultResponse)
    }

    removeLike(data) {
        return fetch(`${this._baseURL}/cards/${data._id}/likes`, {
            method: "DELETE",
            headers: this._headers
        }).then(this._defaultResponse)
    }

    removeCard(data) {
        return fetch(`${this._baseURL}/cards/${data._id}`, {
            method: "DELETE",
            headers: this._headers
        }).then(this._defaultResponse)
    }

    updateProfilePhoto(data) {
        return fetch(`${this._baseURL}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then(this._defaultResponse)
    }
}