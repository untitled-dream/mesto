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

let ownerID = null;
let ownCard = null;

const api = new Api({
    baseURL: 'https://mesto.nomoreparties.co/v1/cohort-43',
    headers: {
        authorization: "c8b0aa60-35b2-4dbb-ac6e-5a0006835602",
        'Content-Type': "application/json"
    }
});

const userData = new UserInfo({
    userNameSelector: ".profile__name",
    userDescSelector: ".profile__description",
    userAvatarSelector: ".profile__avatar"
});

const imageViewPopup = new PopupWithImage("#card-view");

const ProfileFormValidation = new FormValidator(formObject, profilePopupElement);
const ProfileAvatarFormValidation = new FormValidator(formObject, profileAvatarPopupElement);
const AddCardFormValidation = new FormValidator(formObject, cardAddPopupElement);

ProfileFormValidation.enableValidation();
ProfileAvatarFormValidation.enableValidation();
AddCardFormValidation.enableValidation();

function createCard(data) {
    const card = new Card(data, ownerID, cardTemplateSelector, { 
        handleCardOpenClick: () => imageViewPopup.open(data),
        handleCardDeleteClick: () => {
            ownCard = card;
            console.log(ownCard);
            cardDeletePopup.open(data)
        },
        setLike: (data) => {
            api.setLike(data)
                .then(data => card.setLikeCount(data))
            .catch(err => console.log(err))
        },
        removeLike : (data) => {
            api.removeLike(data)
                .then(data => card.setLikeCount(data))
            .catch(err => console.log(err))
        }
    });
    return card;
}

const cardList = new Section({
    renderer: (data) => {
        const card = createCard(data);
        const cardElement = card.getCard();
        card.setLikeCount(data);
        cardList.addItemOnPage(cardElement, "prepend");
    }
}, cardsListSelector);

api.getInitialData()
    .then((data) => {
        const [userInfo, cardsData] = data;
        ownerID = userInfo._id;
        userData.setUserInfo(userInfo);
        cardList.rendererItems(cardsData);
    })
    .catch(err => console.log(err))

const profilePopup = new PopupWithForm({
    popupSelector: "#profile-edit",
    handleFormSubmit: (data) => {
        profilePopup.isLoading(true);
        api.setUserData(data)
            .then((res) => {
                userData.setUserInfo(res);
            })
            .catch(err => console.log(err))
            .finally(() => {
                profilePopup.isLoading(false);
                profilePopup.close();
            })
    }
});

const profileAvatarPopup = new PopupWithForm({
    popupSelector: "#avatar-update",
    handleFormSubmit: (data) => {
        profileAvatarPopup.isLoading(true);
        api.setUserAvatar(data)
            .then((res) => {
                userData.setUserAvatar(res);
            })
            .catch(err => console.log(err))
            .finally(() => {
                profileAvatarPopup.isLoading(false);
                profileAvatarPopup.close();
            })
        profileAvatarPopup.close();
    }
})

const newCardPopup = new PopupWithForm({
    popupSelector: "#card-add",
    handleFormSubmit: (data) => {
        newCardPopup.isLoading(true);
        api.sendCard(data)
            .then(res => {
                const card = createCard(res);
                const cardElement = card.getCard();
                cardList.addItemOnPage(cardElement, "append");
            })
            .catch(err => console.log(err))
            .finally(() => {
                newCardPopup.isLoading(false)
                newCardPopup.close();
            })
    }
});

const cardDeletePopup = new PopupWithConfirmation({
    popupSelector: "#card-delete-confirmation",
    handleFormSubmit: (data) => {
        api.removeCard(data)
            .then(() => ownCard.deleteCard())
            .then(() => {
                ownCard = null;
                cardDeletePopup.close();
            })
        .catch(err => console.log(err))
    }
})

profileFormButton.addEventListener("click", () => {
    const userDataAnswer = userData.getUserInfo();

    profileNameInput.value = userDataAnswer.name;
    profileDescInput.value = userDataAnswer.about;

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