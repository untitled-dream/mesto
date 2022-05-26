import Card from "../scripts/components/Card.js";
import Popup from "../scripts/components/Popup.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import FormValidator from "../scripts/components/FormValidator.js"
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
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
} from "../scripts/utils/constants.js"

const userData = new UserInfo({
    userNameSelector: ".profile__name",
    userDescSelector: ".profile__description"
});

const profilePopup = new Popup("#profile-edit");
const newCardPopup = new Popup("#card-add");

const ProfileFormValidation = new FormValidator(formObject, profilePopupElement);
const AddCardFormValidation = new FormValidator(formObject, cardAddPopupElement);

ProfileFormValidation.enableValidation();
AddCardFormValidation.enableValidation();

const cardList = new Section({
    items: defaultCardsArray,
    renderer: (data) => {
        const imageViewPopup = new PopupWithImage("#card-view", data);
        const card = new Card(data, cardTemplateSelector, () => imageViewPopup.open());
        const cardElement = card.getCard();
        cardList.addItemOnPage(cardElement);
    }
}, cardsListSelector);

const addNewCard = new PopupWithForm({
    popupSelector: "#card-add",
    handleFormSubmit: (data) => {
        const imageViewPopup = new PopupWithImage("#card-view", data);
        const card = new Card(data, cardTemplateSelector, () => imageViewPopup.open());
        const cardElement = card.getCard();
        cardList.addItemOnPage(cardElement);
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

profilePopupElement.querySelector("#profile-edit-form").addEventListener("submit", (evt) => {
    evt.preventDefault();

    userData.setUserInfo({
        name: profileNameInput.value,
        description: profileDescInput.value
    });

    profilePopup.close();
});