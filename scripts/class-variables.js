export const defaultCards = [
    {
        name: "Казанский кремль",
        source: "./images/photo-grid-kazan.jpg"
    },
    {
        name: "МГУ, Москва",
        source: "./images/photo-grid-moscow-2.jpg"
    },
    {
        name: "о. Эгина, Греция",
        source: "./images/photo-grid-aegina.jpg"
    },
    {
        name: "Куршская Коса",
        source: "./images/photo-grid-kurshskaya-kosa.jpg"
    },
    {
        name: "Москва",
        source: "./images/photo-grid-moscow-1.jpg"
    },
    {
        name: "Афины",
        source: "./images/photo-grid-athens.jpg"
    }
];

export const templateSelector = "#card-template";
export const imageViewPopup = document.querySelector("#card-view");
export const cardCaption = imageViewPopup.querySelector("#card-caption");
export const cardImage = imageViewPopup.querySelector("#card-image");

export const formObject = {
    formSelector: ".form",
    formFieldset: ".form__fieldset",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button-submit",
    inactiveButtonClass: "form__button-submit_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
}

export const profilePopup = document.querySelector("#profile-edit");
export const cardAddPopup = document.querySelector("#card-add");