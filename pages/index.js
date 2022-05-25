import Card from "../scripts/components/Card.js";
import { Section } from "../scripts/components/Section.js"
import { Popup } from "../scripts/components/Popup.js";
import { FormValidator} from "../scripts/components/FormValidator.js"
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import {
    templateSelector,
    defaultCardsArray,
    formObject,
    profilePopupElement,
    cardAddPopupElement,
    cardViewPopupElement,
    cardsListSelector
} from "../scripts/utils/constants.js"

const profilePopup = new Popup(profilePopupElement);
const newCardPopup = new Popup(cardAddPopupElement);

const ProfileFormValidation = new FormValidator(formObject, profilePopupElement);
const AddCardFormValidation = new FormValidator(formObject, cardAddPopupElement);

AddCardFormValidation.enableValidation();
ProfileFormValidation.enableValidation();

/* -------------------------------------------------------- */

const profileForm = document.forms["profile-edit-form"];
const cardAddForm = document.forms["card-add-form"];

// Inputs
const nameInput = profilePopupElement.querySelector("#profile-name");
const descriptionInput = profilePopupElement.querySelector("#profile-description");

const cardNameInput = cardAddPopupElement.querySelector("#card-name");
const cardSourceInput = cardAddPopupElement.querySelector("#card-source");

const nameCurrent = document.querySelector(".profile__name");
const descriptionCurrent = document.querySelector(".profile__description");

/* -------------------------------------------------------- */

/* USER PROFILE POPUP */
const profileFormButton = document.querySelector(".profile__button-edit");

/* OPENING THE USER PROFILE POPUP */
profileFormButton.addEventListener("click", () => {
    nameInput.value = nameCurrent.textContent;
    descriptionInput.value = descriptionCurrent.textContent;

    ProfileFormValidation.setInitialState();
    profilePopup.open();
});

/* FORM CONFIRMATION */
profileForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    nameCurrent.textContent = nameInput.value;
    descriptionCurrent.textContent = descriptionInput.value;

    profilePopup.close();
});

/* ADDING NEW CARD POPUP */
const cardNewFormButton = document.querySelector(".profile__button-add");

/* OPENING THE POPUP FOR ADDING A NEW CARD */
cardNewFormButton.addEventListener("click", () => {
    cardAddForm.reset();

    AddCardFormValidation.setInitialState();
    newCardPopup.open();
});

/* FORM CONFIRMATION */
cardAddForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    createCard({ name: cardNameInput.value, source: cardSourceInput.value });

    newCardPopup.close();
});

defaultCardsArray.forEach((defaultCardData) => {
    createCard(defaultCardData);
})

function createCard(data) {
    const newCard = new Section({
        item: data,
        renderer: (cardData) => {
            const imageViewPopup = new PopupWithImage(cardViewPopupElement, cardData);
            const card = new Card(cardData, templateSelector, () => imageViewPopup.open());
            const cardElement = card.getCard();
            newCard.addItemOnPage(cardElement);
        }
    }, cardsListSelector);

    newCard.renderer();
}