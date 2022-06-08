import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._form = this._popup.querySelector(".form");
        this._submitButton = this._form.querySelector(".form__button-submit");
        this._submitButtonDefaultText = this._submitButton.textContent;
        this._handleFormSubmit = handleFormSubmit;
        this._boundFormSubmit = this._formSubmit.bind(this);
    }

    _formSubmit(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll(".form__input");

        this._formValues = {};

        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", this._boundFormSubmit)
    }

    isLoading(state) {
        if (state) {
            this._submitButton.textContent = "Сохранение...";
        } else {
            this._submitButton.textContent = this._submitButtonDefaultText;
        }
    }

    close() {
        this._form.reset();
        super.close();
    }
}