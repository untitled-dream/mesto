export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector(".popup__button-close");
        
        this.boundButtonClose = this.close.bind(this);
        this.boundEscapeCloseHandler = this._handleEscClose.bind(this);
        this.boundOverlayCloseHandler = this._handleOverlayClose.bind(this);
    }

    setEventListeners() {
        document.addEventListener("keydown", this.boundEscapeCloseHandler);
        this._buttonClose.addEventListener("click", this.boundButtonClose);
        this._popup.addEventListener("mousedown", this.boundOverlayCloseHandler);
        
    }

    _removeEventListeners() {
        document.removeEventListener("keydown", this.boundEscapeCloseHandler);
        this._buttonClose.removeEventListener("click", this.boundButtonClose);
        this._popup.removeEventListener("mousedown", this.boundOverlayCloseHandler);
    }

    open() {
        this.setEventListeners();
        this._popup.classList.add("popup_opened");
    }

    close() {
        this._removeEventListeners();
        this._popup.classList.remove("popup_opened");
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    _handleOverlayClose = (evt) => {
        if (evt.target.classList.contains("popup_opened")) {
            this.close();
        }
    }
}