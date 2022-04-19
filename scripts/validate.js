const formObject = {
    formSelector: ".form",
    formFieldset: ".form__fieldset",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button-submit",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
}

const showInputError = (formElement, inputElement, errorMessage, formObject) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(formObject["inputErrorClass"]);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(formObject["errorClass"]);
};
  
 
const hideInputError = (formElement, inputElement, formObject) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(formObject["inputErrorClass"]);
    errorElement.classList.remove(formObject["errorClass"]);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, formObject) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, formObject);
    } else {
      hideInputError(formElement, inputElement, formObject);
    }
};

const setEventListeners = (formElement, formObject) => {
    const inputList = Array.from(formElement.querySelectorAll(formObject["inputSelector"]));
    const buttonElement = formElement.querySelector(formObject["submitButtonSelector"]);
    toggleButtonState(inputList, buttonElement, formObject);
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, formObject);
        toggleButtonState(inputList, buttonElement, formObject);
      });
    });
};

const toggleButtonState = (inputList, buttonElement, formObject) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(formObject["inactiveButtonClass"]);
    } else {
        buttonElement.classList.remove(formObject["inactiveButtonClass"]);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const enableValidation = (formObject) => {
    const formList = Array.from(document.querySelectorAll(formObject["formSelector"]));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll(formObject["formFieldset"]));
        
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset, formObject);
        });
    })
};