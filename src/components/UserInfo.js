export default class UserInfo {
    constructor({ userNameSelector, userDescSelector, userAvatarSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userDesc = document.querySelector(userDescSelector);
        this._userAvatar = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userDesc.textContent
        }
    }

    setUserInfo({ name, about}) {
        this._userName.textContent = name;
        this._userDesc.textContent = about;
    }

    updateUserAvatar([source, name]) {
        this._userAvatar.src = source;
        this._userAvatar.alt = name;
    }
}