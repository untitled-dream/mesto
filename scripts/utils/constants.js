export const defaultCardsArray = [
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

export const formObject = {
    fieldsetSelector: ".form__fieldset",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button-submit",
    inactiveButtonClass: "form__button-submit_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
}

export const cardTemplateSelector = "#card-template";
export const cardsListSelector =".elements__list";

export const profilePopupElement = document.querySelector("#profile-edit");
export const cardAddPopupElement = document.querySelector("#card-add");
export const cardViewPopupElement = document.querySelector("#card-view");

export const profileNameInput = profilePopupElement.querySelector("#profile-name");
export const profileDescInput = profilePopupElement.querySelector("#profile-description");

export const cardNameInput = cardAddPopupElement.querySelector("#name");
export const cardSourceInput = cardAddPopupElement.querySelector("#source");

export const profileFormButton = document.querySelector(".profile__button-edit");
export const cardNewFormButton = document.querySelector(".profile__button-add");