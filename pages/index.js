import Card from "../scripts/components/Card.js";
import Popup from "../scripts/components/Popup.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import FormValidator from "../scripts/components/FormValidator.js"
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import {
    formObject,
    profileForm,
    cardAddForm,
    userDataSelector,
    templateSelector,
    defaultCardsArray,
    profilePopupElement,
    cardAddPopupElement,
    cardViewPopupElement,
    cardsListSelector,
    profileNameInput,
    profileDescInput,
    cardNameInput,
    cardSourceInput
} from "../scripts/utils/constants.js"
import PopupWithForm from "../scripts/components/PopupWithForm.js";

const userData = new UserInfo(userDataSelector);

const profilePopup = new Popup(profilePopupElement);
const newCardPopup = new Popup(cardAddPopupElement);

const ProfileFormValidation = new FormValidator(formObject, profilePopupElement);
const AddCardFormValidation = new FormValidator(formObject, cardAddPopupElement);

AddCardFormValidation.enableValidation();
ProfileFormValidation.enableValidation();

defaultCardsArray.forEach((defaultCardData) => {
    createCard(defaultCardData);
})

function createCard(data) {
    const newCard = new Section({
        item: data,
        renderer: () => {
            const imageViewPopup = new PopupWithImage(cardViewPopupElement, data);
            const card = new Card(data, templateSelector, () => imageViewPopup.open());
            const cardElement = card.getCard();
            newCard.addItemOnPage(cardElement);
        }
    }, cardsListSelector);
    newCard.renderer();
}

const profileFormButton = document.querySelector(".profile__button-edit");
profileFormButton.addEventListener("click", () => {
    
    const userDataAnswer = userData.getUserInfo();

    profileNameInput.value = userDataAnswer.name;
    profileDescInput.value = userDataAnswer.description;

    ProfileFormValidation.setInitialState();
    profilePopup.open();
});

const cardNewFormButton = document.querySelector(".profile__button-add");
cardNewFormButton.addEventListener("click", () => {
    cardAddForm.reset();

    AddCardFormValidation.setInitialState();
    newCardPopup.open();
});

profileForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const newUserData = {
        name: profileNameInput.value,
        description: profileDescInput.value
    }

    userData.setUserInfo(newUserData);

    profilePopup.close();
});

const addForm = new PopupWithForm(cardAddPopupElement,
    () => {
        createCard(addForm.generate());
        addForm.close();
    } 
);

addForm.generate();