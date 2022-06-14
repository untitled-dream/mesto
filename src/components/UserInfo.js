export default class UserInfo {
    constructor(data) {
        this._userName = document.querySelector(data.userNameSelector);
        this._userDesc = document.querySelector(data.userDescSelector);
        this._userAvatar = document.querySelector(data.userAvatarSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userDesc.textContent
        }
    }

    setUserInfo(data) {
        this.setUserAvatar(data);

        if (data.name) {
            this._userName.textContent = data.name;
            this._userAvatar.alt = data.name;
        }

        if (data.about) {
            this._userDesc.textContent = data.about;
        }
    }

    setUserAvatar(data) {
        if (data.avatar) {
            this._userAvatar.src = data.avatar;
        }
    }
}