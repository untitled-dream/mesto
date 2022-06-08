export default class FormValidator {
    constructor({ fieldsetSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }, popupWindow) {
        this._formFieldset = fieldsetSelector;
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inactiveButtonClass = inactiveButtonClass;
        this._inputErrorClass = inputErrorClass;
        this._errorClass = errorClass;

        this._popupWindow = popupWindow;
        this._submitButton = this._popupWindow.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._popupWindow.querySelectorAll(this._inputSelector));
    }

    enableValidation() {
        this._setEventListeners(this._popupWindow.querySelector(this._formFieldset));
    }

    setInitialState() {
        this._inputList.forEach((input) => {
            this._hideInputError(input);
        });

        this._toggleButtonState();
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        }
    }

    _showInputError(inputElement, validationErrorMessage) {
        const errorElement = this._popupWindow.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = validationErrorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._popupWindow.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }
}