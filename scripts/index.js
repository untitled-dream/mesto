import { Card } from "./Card.js";
import { openPopup, closePopup } from "./utils.js"
import { ProfileFormValidation, AddCardFormValidation } from "./FormValidator.js";
import { profilePopup, cardAddPopup, templateSelector, defaultCards } from "./constants.js"

const profileForm = document.forms["profile-edit-form"];
const profileFormButton = document.querySelector(".profile__button-edit");
const nameInput = profilePopup.querySelector("#profile-name");
const descriptionInput = profilePopup.querySelector("#profile-description");

const cardAddForm = document.forms["card-add-form"];
const cardNewFormButton = document.querySelector(".profile__button-add");
const cardNameInput = cardAddPopup.querySelector("#card-name");
const cardSourceInput = cardAddPopup.querySelector("#card-source");

const nameCurrent = document.querySelector(".profile__name");
const descriptionCurrent = document.querySelector(".profile__description");

function openProfilePopup() {
    nameInput.value = nameCurrent.textContent;
    descriptionInput.value = descriptionCurrent.textContent;

    ProfileFormValidation.setInitialState();
    openPopup(ProfileFormValidation._popupWindow);
}

function openNewCardPopup() {
    cardAddForm.reset();

    AddCardFormValidation.setInitialState();
    openPopup(AddCardFormValidation._popupWindow);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    nameCurrent.textContent = nameInput.value;
    descriptionCurrent.textContent = descriptionInput.value;

    closePopup(ProfileFormValidation._popupWindow);
}

function handleCardAddFormSubmit(evt) {
    evt.preventDefault();

    createCard({ name: cardNameInput.value, source: cardSourceInput.value });

    closePopup(AddCardFormValidation._popupWindow);
}

defaultCards.forEach((cards) => {
    createCard(cards);
})

function createCard(cardData) {
    const card = new Card(cardData, templateSelector);
    const cardElement = card.getCard();
    card.renderCard(cardElement);
}

document.querySelectorAll(".popup__button-close").forEach(closeButton =>
    closeButton.addEventListener("click", () => closePopup(closeButton.closest(".popup")))
)

profileFormButton.addEventListener("click", () => openProfilePopup());
cardNewFormButton.addEventListener("click", () => openNewCardPopup());

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardAddForm.addEventListener("submit", handleCardAddFormSubmit);