export const defaultCardsArray = [
    {
        place: "Казанский кремль",
        source: new URL("../images/photo-grid-kazan.jpg", import.meta.url)
    },
    {
        place: "МГУ, Москва",
        source: new URL("../images/photo-grid-moscow-2.jpg", import.meta.url)
    },
    {
        place: "о. Эгина, Греция",
        source: new URL("../images/photo-grid-aegina.jpg", import.meta.url)
    },
    {
        place: "Куршская Коса",
        source: new URL("../images/photo-grid-kurshskaya-kosa.jpg", import.meta.url)
    },
    {
        place: "Москва",
        source: new URL("../images/photo-grid-moscow-1.jpg", import.meta.url)
    },
    {
        place: "Афины",
        source: new URL("../images/photo-grid-athens.jpg", import.meta.url)
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

export const profileNameInput = profilePopupElement.querySelector("#name");
export const profileDescInput = profilePopupElement.querySelector("#description");

export const cardNameInput = cardAddPopupElement.querySelector("#card-name");
export const cardSourceInput = cardAddPopupElement.querySelector("#source");

export const profileFormButton = document.querySelector(".profile__button-edit");
export const cardNewFormButton = document.querySelector(".profile__button-add");