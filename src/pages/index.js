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
  userDataObject,
  templateSelector,
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

const userData = new UserInfo(userDataObject);

const imageViewPopup = new PopupWithImage("#card-view");

const profileFormValidation = new FormValidator(formObject, profilePopupElement);
const profileAvatarFormValidation = new FormValidator(formObject, profileAvatarPopupElement);
const addCardFormValidation = new FormValidator(formObject, cardAddPopupElement);

profileFormValidation.enableValidation();
profileAvatarFormValidation.enableValidation();
addCardFormValidation.enableValidation();

function createCard(data) {
  const card = new Card(data, ownerID, templateSelector, {
    handleOpenClick: () => imageViewPopup.open(data),
    handleDeleteClick: () => {
      ownCard = card;
      cardDeletePopup.open(data)
    },
    setLike: (data) => {
      api.setLike(data)
        .then(data => {
          card.setLikeCount(data);
          card.setLikeTooltip(data.likes);
        })
        .catch(err => console.log(err))
    },
    removeLike: (data) => {
      api.removeLike(data)
        .then(data => {
          card.setLikeCount(data);
          card.setLikeTooltip(data.likes);
        })
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
    card.setLikeTooltip(data.likes);
    cardList.addItemOnPage(cardElement, "append");
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
        profilePopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        profilePopup.isLoading(false);
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
        profileAvatarPopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        profileAvatarPopup.isLoading(false);
      })
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
        cardList.addItemOnPage(cardElement, "prepend");
        newCardPopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        newCardPopup.isLoading(false)
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

  profileFormValidation.setInitialState();
  profilePopup.open();

});

cardNewFormButton.addEventListener("click", () => {
  addCardFormValidation.setInitialState();
  newCardPopup.open();
});

profileAvatarFormButton.addEventListener("click", () => {
  profileAvatarFormValidation.setInitialState();
  profileAvatarPopup.open();
})