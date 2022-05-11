import { Card, templateSelector } from './Card.js';
import { ProfileFormValidation, AddCardFormValidation, formObject } from './FormValidator.js';

const profileForm = document.forms["profile-edit-form"];
const profileFormButton = document.querySelector(".profile__button-edit");
const nameInput = ProfileFormValidation._formElement.querySelector("#profile-name");
const descriptionInput = ProfileFormValidation._formElement.querySelector("#profile-description");

const cardAddForm = document.forms["card-add-form"];
const cardNewFormButton = document.querySelector(".profile__button-add");
const cardNameInput = AddCardFormValidation._formElement.querySelector("#card-name");
const cardSourceInput = AddCardFormValidation._formElement.querySelector("#card-source");

const nameCurrent = document.querySelector(".profile__name");
const descriptionCurrent = document.querySelector(".profile__description");

function openProfilePopup() {
    nameInput.value = nameCurrent.textContent;
    descriptionInput.value = descriptionCurrent.textContent;
    
    ProfileFormValidation._toggleButtonState(Array.from(ProfileFormValidation._formElement.querySelectorAll(formObject.inputSelector)), ProfileFormValidation._formElement.querySelector(formObject.submitButtonSelector));

    openPopup(ProfileFormValidation._formElement);
}

function openNewCardPopup() {
    cardAddForm.reset();

    AddCardFormValidation._toggleButtonState(Array.from(AddCardFormValidation._formElement.querySelectorAll(formObject.inputSelector)), AddCardFormValidation._formElement.querySelector(formObject.submitButtonSelector));

    openPopup(AddCardFormValidation._formElement);
}

function openPopup(popup) {
    popup.classList.add("popup_opened");
    
    popup.addEventListener("mousedown", handleOverlayClose);
    document.addEventListener("keydown", handleModalEscapePress);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");

    popup.removeEventListener("mousedown", handleOverlayClose);
    document.removeEventListener('keydown', handleModalEscapePress);
}

function handleOverlayClose(evt) {
    const popupClosedByBackdrop = evt.target;
    
    if (popupClosedByBackdrop.classList.contains("popup_opened")) {
        closePopup(popupClosedByBackdrop);
    }
}

function handleModalEscapePress(evt) {
    if (evt.key === "Escape") {
        const currentOpenPopup = document.querySelector(".popup_opened");
        closePopup(currentOpenPopup)
    }
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    
    nameCurrent.textContent = nameInput.value;
    descriptionCurrent.textContent = descriptionInput.value;
    
    closePopup(ProfileFormValidation._formElement);
}

function handleCardAddFormSubmit(evt) {
    evt.preventDefault();
    
    const card = new Card({ name: cardNameInput.value, source: cardSourceInput.value }, templateSelector);
    const cardElement = card.getCard();
    card._renderCard(cardElement);

    closePopup(AddCardFormValidation._formElement);
}

document.querySelectorAll(".popup__button-close").forEach(closeButton =>
    closeButton.addEventListener("click", () => closePopup(closeButton.closest(".popup")))
)

profileFormButton.addEventListener("click", () => openProfilePopup());
cardNewFormButton.addEventListener("click", () => openNewCardPopup());

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardAddForm.addEventListener("submit", handleCardAddFormSubmit);

export { openPopup }