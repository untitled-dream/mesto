export const formObject = {
    fieldsetSelector: ".form__fieldset",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button-submit",
    inactiveButtonClass: "form__button-submit_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
}
export const cardsListSelector =".elements__list";

export const templateSelector = {
    card: "#card-template",
    tooltipImage: "#tooltip-image"
}

export const userDataObject = {
    userNameSelector: ".profile__name",
    userDescSelector: ".profile__description",
    userAvatarSelector: ".profile__avatar"
}

export const cardAddPopupElement = document.querySelector("#card-add");
export const cardViewPopupElement = document.querySelector("#card-view");
export const profilePopupElement = document.querySelector("#profile-edit");
export const profileAvatarPopupElement = document.querySelector("#avatar-update");

export const profileNameInput = profilePopupElement.querySelector("#name");
export const profileDescInput = profilePopupElement.querySelector("#about");

export const cardNameInput = cardAddPopupElement.querySelector("#card-name");
export const cardSourceInput = cardAddPopupElement.querySelector("#source");

export const profileFormButton = document.querySelector(".profile__button-edit");
export const profileAvatarFormButton = document.querySelector(".profile__button-avatar")
export const cardNewFormButton = document.querySelector(".profile__button-add");