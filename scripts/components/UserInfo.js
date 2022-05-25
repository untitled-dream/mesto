export default class UserInfo {
    constructor({ userNameSelector, userDescSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userDesc = document.querySelector(userDescSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            description: this._userDesc.textContent
        }
    }

    setUserInfo(newData) {
        this._userName.textContent = newData.name;
        this._userDesc.textContent = newData.description;
    }
}