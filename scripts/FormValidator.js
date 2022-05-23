import { profilePopup, cardAddPopup, formObject } from "./constants.js"

class FormValidator {
    constructor({ formFieldset, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }, formElement) {
        this._formFieldset = formFieldset;
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inactiveButtonClass = inactiveButtonClass;
        this._inputErrorClass = inputErrorClass;
        this._errorClass = errorClass;

        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(this._formElement.querySelector(this._formFieldset));
    }

    setInitialState({ formElement }) {
        this._inputList.forEach((input) => {
            this._hideInputError(this._formElement.querySelector(this._formFieldset), input);
        });

        this._toggleButtonState(formElement.querySelector(this._submitButtonSelector))
    }

    _setEventListeners(formElement) {
        const buttonElement = formElement.querySelector(this._submitButtonSelector);

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement);
                this._toggleButtonState(buttonElement);
            });
        });
    }

    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    };

    _toggleButtonState(buttonElement) {
        if (this._hasInvalidInput(this._inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        }
    }

    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }
}

const ProfileFormValidation = new FormValidator(formObject, profilePopup);
ProfileFormValidation.enableValidation();

const AddCardFormValidation = new FormValidator(formObject, cardAddPopup);
AddCardFormValidation.enableValidation();

export { ProfileFormValidation, AddCardFormValidation }