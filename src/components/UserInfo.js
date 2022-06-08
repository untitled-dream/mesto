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

    setUserInfo(data) {
        this.setUserAvatar(data);
        this._userName.textContent = data.name;
        this._userDesc.textContent = data.about;
        this._userAvatar.alt = data.name;
    }

    setUserAvatar(data) {
        this._userAvatar.src = data.avatar;
    }
}