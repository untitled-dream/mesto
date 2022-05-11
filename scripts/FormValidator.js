import { profilePopup, cardAddPopup, formObject } from "./class-variables.js"

class FormValidator {
    constructor(formObject, formElement) {
        this._formObject = formObject;
        this._formElement = formElement;
    }    

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(this._formElement.querySelector(this._formObject.formFieldset));
    }

    _setEventListeners(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this._formObject.inputSelector));
        const buttonElement = formElement.querySelector(this._formObject.submitButtonSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement);
                this.toggleButtonState(inputList, buttonElement);
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

    toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._formObject.inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._formObject.inactiveButtonClass);
            buttonElement.disabled = false;
        }
    }

    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._formObject.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._formObject.errorClass);
    };

    _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._formObject.inputErrorClass);
        errorElement.classList.remove(this._formObject.errorClass);
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