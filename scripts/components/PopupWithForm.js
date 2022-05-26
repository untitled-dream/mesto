import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector("#card-add-form");
    }

    _setEventListeners() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })

        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll(".form__input");

        this._formValues = {};
        
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        return this._formValues;
    }

    generateCard() {
        this._setEventListeners()
    }
}