const profilePopup = document.querySelector("#profile-edit");
const profileForm = document.forms["profile-edit-form"];

const addCardPopup = document.querySelector("#card-add");
const addCardForm = document.forms["card-add-form"];

const viewImagePopup = document.querySelector("#card-view");

const openProfileForm = document.querySelector(".profile__button-edit");
const openAddingCardForm = document.querySelector(".profile__button-add");
const openImage = document.querySelector(".elements__image");

const nameInput = document.getElementById("profile-name");
const descriptionInput = document.getElementById("profile-description");

let cardNameInput = document.getElementById("card-name");
let cardSourceInput = document.getElementById("card-source");
let cardImage = document.getElementById("card-image");
let cardTitle = document.getElementById("test");

const nameCurrent = document.querySelector(".profile__name");
const descriptionCurrent = document.querySelector(".profile__description");

const cardsList = document.querySelector(".elements__list");
const cardsTemplate = document.querySelector("#card-template").content;
const defaultCards = [
    {
      name: "Казанский кремль",
      source: "./images/photo-grid-kazan.jpg"
    },
    {
      name: "МГУ, Москва",
      source: "./images/photo-grid-moscow-2.jpg"
    },
    {
      name: "о. Эгина, Греция",
      source: "./images/photo-grid-aegina.jpg"
    },
    {
      name: "Куршская Коса",
      source: "./images/photo-grid-kurshskaya-kosa.jpg"
    },
    {
      name: "Москва",
      source: "./images/photo-grid-moscow-1.jpg"
    },
    {
      name: "Афины",
      source: "./images/photo-grid-athens.jpg"
    }
  ];

  
  defaultCards.forEach(function (card) {
    const cardElement = cardsTemplate.cloneNode(true);
    
    cardElement.querySelector(".elements__title").textContent = card.name;
    cardElement.querySelector(".elements__image").src = card.source;
    cardElement.querySelector(".elements__image").alt = card.name;

    cardElement.querySelector(".elements__button-like").addEventListener('click', setLikeHandler);
    cardElement.querySelector(".elements__button-trash").addEventListener("click", deleteCardHandler);
    cardElement.querySelector(".elements__image").addEventListener("click", formOpenHandler);
    
    cardsList.appendChild(cardElement);  
  })


function formOpenHandler(evt) {
    evt.preventDefault();
    console.log(evt.target.alt)
    if (evt.target.classList.value === 'profile__button-edit') {
        profilePopup.classList.add("popup_opened");
    
        nameInput.value = nameCurrent.textContent;
        descriptionInput.value = descriptionCurrent.textContent;
    } else if (evt.target.classList.value === 'profile__button-add') {
        addCardPopup.classList.add("popup_opened");
        cardNameInput.value = '';
        cardSourceInput.value = '';
    } else if (evt.target.classList.value === 'elements__image') {
        viewImagePopup.classList.add("popup_opened");
        cardTitle.textContent = evt.target.alt;
        cardImage.src = evt.target.src;
        cardImage.alt = evt.target.alt;
    }
}

function profileFormSubmit(evt) {
    evt.preventDefault();
    
    nameCurrent.textContent = nameInput.value;
    descriptionCurrent.textContent = descriptionInput.value;

    closeForm(evt);
}

function addCardformSubmit(evt) {
    evt.preventDefault();
    const newCardElement = cardsTemplate.cloneNode(true);

    newCardElement.querySelector(".elements__title").textContent = cardNameInput.value;
    newCardElement.querySelector(".elements__image").src = cardSourceInput.value;
    newCardElement.querySelector(".elements__image").alt = cardNameInput.value;

    newCardElement.querySelector(".elements__button-like").addEventListener('click', setLikeHandler);
    newCardElement.querySelector(".elements__button-trash").addEventListener("click", deleteCardHandler);
    newCardElement.querySelector(".elements__image").addEventListener("click", formOpenHandler);    
    
    cardsList.prepend(newCardElement);
    closeForm(evt);
}

function setLikeHandler(evt) {
    evt.target.classList.toggle("elements__button-like_active");
}
 
function deleteCardHandler(evt) {
    evt.target.closest(".elements__card").remove();
}

function closeForm(evt) {
    evt.target.closest(".popup").classList.remove("popup_opened");
}

document.querySelectorAll(".popup__button-close").forEach(closeButton =>
    closeButton.addEventListener("click", () => closeButton.closest(".popup").classList.remove("popup_opened"))
)


openProfileForm.addEventListener("click", formOpenHandler);
openAddingCardForm.addEventListener("click", formOpenHandler);

profileForm.addEventListener("submit", profileFormSubmit);
addCardForm.addEventListener("submit", addCardformSubmit);
