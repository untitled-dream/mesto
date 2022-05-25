import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popup, handleFormSubmit}) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        this._element.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());

            this._element.reset();
        })

        super.setEventListeners();
    }

    close() {

        super.close();
    }

    _getInputValues() {
        this._inputList = this._element.querySelectorAll(".form__input");
        
        this._formValues = {};

        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        return this._formValues;
    }

    generate() {
        this._element = this._getElement();
        this._setEventListeners();

        return this._element;
    }
}