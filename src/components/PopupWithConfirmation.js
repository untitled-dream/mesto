import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._form = this._popup.querySelector(".form");
        this._handleFormSubmit = handleFormSubmit;
        this._boundFormSubmit = this._formSubmit.bind(this);
    }

    _formSubmit(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._data);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", this._boundFormSubmit);
    }

    open(data) {
        super.open();
        this._data = data;
    }
}