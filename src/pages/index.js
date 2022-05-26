import "./index.css";

import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
    formObject,
    cardTemplateSelector,
    defaultCardsArray,
    profilePopupElement,
    cardAddPopupElement,
    cardsListSelector,
    profileNameInput,
    profileDescInput,
    profileFormButton,
    cardNewFormButton
} from "../utils/constants.js"

const userData = new UserInfo({
    userNameSelector: ".profile__name",
    userDescSelector: ".profile__description"
});

const newCardPopup = new Popup("#card-add");
const profilePopup = new Popup("#profile-edit");
const imageViewPopup = new PopupWithImage("#card-view");

profilePopup.setEventListeners();
imageViewPopup.setEventListeners();

const ProfileFormValidation = new FormValidator(formObject, profilePopupElement);
const AddCardFormValidation = new FormValidator(formObject, cardAddPopupElement);

ProfileFormValidation.enableValidation();
AddCardFormValidation.enableValidation();

function createCard(data) {
    const card = new Card(data, cardTemplateSelector, () => imageViewPopup.open(data));
    const cardElement = card.getCard();
    cardList.addItemOnPage(cardElement);
}

const cardList = new Section({
    items: defaultCardsArray,
    renderer: (data) => {
        createCard(data);
    }
}, cardsListSelector);

const addNewCard = new PopupWithForm({
    popupSelector: "#card-add",
    handleFormSubmit: (data) => {
        createCard(data);
        addNewCard.close();
    }
});

addNewCard.generateCard();
cardList.rendererItems();

profileFormButton.addEventListener("click", () => {
    const userDataAnswer = userData.getUserInfo();

    profileNameInput.value = userDataAnswer.name;
    profileDescInput.value = userDataAnswer.description;

    ProfileFormValidation.setInitialState();
    profilePopup.open();
    
});

cardNewFormButton.addEventListener("click", () => {
    AddCardFormValidation.setInitialState();
    newCardPopup.open();
});

profilePopupElement.querySelector("#profile-edit-form").addEventListener("submit", () => {
    userData.setUserInfo({
        name: profileNameInput.value,
        description: profileDescInput.value
    });

    profilePopup.close();
});