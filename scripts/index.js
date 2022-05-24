import { Card } from "./Card.js";
import { Popup } from "./Popup.js";
import { FormValidator} from "./FormValidator.js"
import { PopupWithImage } from "./PopupWithImage.js";

import {
    templateSelector,
    defaultCards,
    formObject,
    profilePopupElement,
    cardAddPopupElement,
    cardViewPopupElement
} from "./constants.js"

const profilePopup = new Popup(profilePopupElement);
const newCardPopup = new Popup(cardAddPopupElement);

const ProfileFormValidation = new FormValidator(formObject, profilePopupElement);
ProfileFormValidation.enableValidation();

const AddCardFormValidation = new FormValidator(formObject, cardAddPopupElement);
AddCardFormValidation.enableValidation();

defaultCards.forEach((cards) => {
    createCard(cards);
})

function createCard(cardData) {
    const card = new Card(cardData, templateSelector, () => imageViewPopup.open());
    const imageViewPopup = new PopupWithImage(cardViewPopupElement, cardData);

    const cardElement = card.getCard();
    card.renderCard(cardElement);
}

/* -------------------------------------------------------- */

const profileForm = document.forms["profile-edit-form"];
const cardAddForm = document.forms["card-add-form"];

// Open Popup Button
const profileFormButton = document.querySelector(".profile__button-edit");
const cardNewFormButton = document.querySelector(".profile__button-add");

// Inputs
const nameInput = profilePopupElement.querySelector("#profile-name");
const descriptionInput = profilePopupElement.querySelector("#profile-description");

const cardNameInput = cardAddPopupElement.querySelector("#card-name");
const cardSourceInput = cardAddPopupElement.querySelector("#card-source");


const nameCurrent = document.querySelector(".profile__name");
const descriptionCurrent = document.querySelector(".profile__description");

function openProfilePopup() {
    nameInput.value = nameCurrent.textContent;
    descriptionInput.value = descriptionCurrent.textContent;
    
    ProfileFormValidation.setInitialState();
    profilePopup.open();
}

function openNewCardPopup() {
    cardAddForm.reset();

    AddCardFormValidation.setInitialState();
    newCardPopup.open();
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    nameCurrent.textContent = nameInput.value;
    descriptionCurrent.textContent = descriptionInput.value;

    profilePopup.close();
}

function handleCardAddFormSubmit(evt) {
    evt.preventDefault();

    createCard({ name: cardNameInput.value, source: cardSourceInput.value });

    newCardPopup.close();
}

profileFormButton.addEventListener("click", () => openProfilePopup());
cardNewFormButton.addEventListener("click", () => openNewCardPopup());

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardAddForm.addEventListener("submit", handleCardAddFormSubmit);