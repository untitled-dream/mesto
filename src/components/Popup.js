export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector(".popup__button-close");
        this._boundEscapeCloseHandler = this._handleEscClose.bind(this);
    }

    setEventListeners() {
        this._buttonClose.addEventListener("click", () => this.close());
        this._popup.addEventListener("mousedown", (evt) => this._handleOverlayClose(evt));
    }

    open() {
        this.setEventListeners();
        document.addEventListener("keydown", this._boundEscapeCloseHandler);
        this._popup.classList.add("popup_opened");
    }

    close() {
        document.removeEventListener("keydown", this._boundEscapeCloseHandler);
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