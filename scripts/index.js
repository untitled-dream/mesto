const profilePopup = document.querySelector("#profile-edit");
const profileForm = document.forms["profile-edit-form"];

const cardAddPopup = document.querySelector("#card-add");
const cardAddForm = document.forms["card-add-form"];

const imageViewPopup = document.querySelector("#card-view");

const profileFormButton = document.querySelector(".profile__button-edit");
const cardNewFormButton = document.querySelector(".profile__button-add");
const imageOpen = document.querySelector(".elements__image");

const nameInput = profilePopup.querySelector("#profile-name")
const descriptionInput = profilePopup.querySelector("#profile-description");

const cardNameInput = cardAddPopup.querySelector("#card-name");
const cardSourceInput = cardAddPopup.querySelector("#card-source");

const cardImage = imageViewPopup.querySelector("#card-image");
const cardCaption = imageViewPopup.querySelector("#card-caption");

const nameCurrent = document.querySelector(".profile__name");
const descriptionCurrent = document.querySelector(".profile__description");

const cardsList = document.querySelector(".elements__list");
const cardsTemplate = document.querySelector("#card-template").content;

defaultCards.forEach(function (card) {
    const cardElement = cardsTemplate.cloneNode(true);
    getCard(cardElement, card.name, card.source);
    
    renderCard(cardElement);
})

function cardAddFormSubmit(evt) {
    evt.preventDefault();
    
    const cardElement = cardsTemplate.cloneNode(true);
    getCard(cardElement, cardNameInput.value, cardSourceInput.value);
    
    renderCard(cardElement);
    closePopup(cardAddPopup);
}

function getCard(cardElement, name, source) {
    cardElement.querySelector(".elements__title").textContent = name;
    cardElement.querySelector(".elements__image").src = source;
    cardElement.querySelector(".elements__image").alt = source;
    
    cardElement.querySelector(".elements__button-like").addEventListener('click', handleLikeClick);
    cardElement.querySelector(".elements__button-trash").addEventListener("click", handleCardDeleteClick);
    cardElement.querySelector(".elements__image").addEventListener("click", () => openImagePopup(imageViewPopup, name, source));
    
    return cardElement;
}

function renderCard(cardElement) {
    cardsList.prepend(cardElement);
}

function openProfilePopup(popup) {
    nameInput.value = nameCurrent.textContent;
    descriptionInput.value = descriptionCurrent.textContent;
    openPopup(popup);
}

function openNewCardPopup(popup) {
    cardNameInput.value = '';
    cardSourceInput.value = '';
    openPopup(popup);
}

function openImagePopup(popup, name, source) {
    popup.style.background = "rgba(0,0,0,.9)";
    cardCaption.textContent = name;
    cardImage.src = source;
    cardImage.alt = name;
    openPopup(popup);
}

function openPopup(popup) {
    popup.classList.add("popup_opened");
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
} 

function profileFormSubmit(evt) {
    evt.preventDefault();
    
    nameCurrent.textContent = nameInput.value;
    descriptionCurrent.textContent = descriptionInput.value;
    closePopup(profilePopup);
}

function handleLikeClick(evt) {
    evt.target.classList.toggle("elements__button-like_active");
}
 
function handleCardDeleteClick(evt) {
    evt.target.closest(".elements__card").remove();
}

document.querySelectorAll(".popup__button-close").forEach(closeButton =>
    closeButton.addEventListener("click", () => closeButton.closest(".popup").classList.remove("popup_opened"))
)

profileFormButton.addEventListener("click", () => openProfilePopup(profilePopup));
cardNewFormButton.addEventListener("click", () => openNewCardPopup(cardAddPopup));

profileForm.addEventListener("submit", profileFormSubmit);
cardAddForm.addEventListener("submit", cardAddFormSubmit);