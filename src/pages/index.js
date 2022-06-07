import "./index.css";
import Api from "../components/Api.js"
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import {
    formObject,
    cardTemplateSelector,
    profilePopupElement,
    profileAvatarPopupElement,
    cardAddPopupElement,
    cardsListSelector,
    profileNameInput,
    profileDescInput,
    profileFormButton,
    profileAvatarFormButton,
    cardNewFormButton,
} from "../utils/constants.js"

let ownerId = null;

const api = new Api({
    baseURL: 'https://mesto.nomoreparties.co/v1/cohort-43',
    headers: {
        authorization: "c8b0aa60-35b2-4dbb-ac6e-5a0006835602",
        contentType: "application/json"
    }
});

const userData = new UserInfo({
    userNameSelector: ".profile__name",
    userDescSelector: ".profile__description",
    userAvatarSelector: ".profile__avatar"
});

const imageViewPopup = new PopupWithImage("#card-view");
imageViewPopup.setEventListeners();

const ProfileFormValidation = new FormValidator(formObject, profilePopupElement);
const ProfileAvatarFormValidation = new FormValidator(formObject, profileAvatarPopupElement);
const AddCardFormValidation = new FormValidator(formObject, cardAddPopupElement);

ProfileFormValidation.enableValidation();
ProfileAvatarFormValidation.enableValidation();
AddCardFormValidation.enableValidation();

function createCard(data) {
    const card = new Card(data, cardTemplateSelector, () => imageViewPopup.open(data));
    const cardElement = card.getCard();
    cardList.addItemOnPage(cardElement);
}

const cardList = new Section({
    renderer: (data) => {
        createCard(data);
    }
}, cardsListSelector);

api.getInitialData()
    .then((data) => {
        const [userInfo, cardsData] = data;

        ownerId = userInfo._id;
        
        userData.setUserInfo(userInfo);
        userData.updateUserAvatar([userInfo.avatar, userInfo.name])
        cardList.rendererItems(cardsData);
    })
    .catch((err) => {
        console.log(err);
    })

const profilePopup = new PopupWithForm({
    popupSelector: "#profile-edit",
    handleFormSubmit: (data) => {
        userData.setUserInfo(data);
        profilePopup.close();
    }
});

const profileAvatarPopup = new PopupWithForm({
    popupSelector: "#avatar-update",
    handleFormSubmit: (source) => {
        userData.updateUserAvatar(source);
        profileAvatarPopup.close();
    }
})

const newCardPopup = new PopupWithForm({
    popupSelector: "#card-add",
    handleFormSubmit: (data) => {
        createCard(data);
        newCardPopup.close();
    }
});

newCardPopup.setEventListeners();
profilePopup.setEventListeners();
profileAvatarPopup.setEventListeners();

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

profileAvatarFormButton.addEventListener("click", () => {
    ProfileAvatarFormValidation.setInitialState();
    profileAvatarPopup.open();
})