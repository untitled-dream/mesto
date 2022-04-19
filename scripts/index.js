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

let newCard;

function renderCard(cardElement) {
    cardsList.prepend(cardElement);
}

defaultCards.forEach(function (card) {
    newCard = getCard(card.name, card.source);
    renderCard(newCard);
})

function handleCardAddFormSubmit(evt) {
    evt.preventDefault();
    
    newCard = getCard(cardNameInput.value, cardSourceInput.value);

    renderCard(newCard);
    closePopup(cardAddPopup);
}

function getCard(name, source) {
    const cardElement = cardsTemplate.cloneNode(true);
    const imageAttr = cardElement.querySelector(".elements__image");

    cardElement.querySelector(".elements__title").textContent = name;
    
    imageAttr.src = source;
    imageAttr.alt = source;
    
    cardElement.querySelector(".elements__button-like").addEventListener('click', handleLikeClick);
    cardElement.querySelector(".elements__button-trash").addEventListener("click", handleCardDeleteClick);
    cardElement.querySelector(".elements__image").addEventListener("click", () => openImagePopup(imageViewPopup, name, source));
    
    return cardElement;
}

function openProfilePopup() {
    nameInput.value = nameCurrent.textContent;
    descriptionInput.value = descriptionCurrent.textContent;
    openPopup(profilePopup);
}

function openNewCardPopup() {
    cardAddForm.reset();
    openPopup(cardAddPopup);
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
    popup.addEventListener("click", backdropClose);
    document.addEventListener("keydown", handleModalEscapePress);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

function backdropClose(evt) {
    const popupClosedByBackdrop = evt.target;
    
    if (evt.target.classList.contains("popup_opened")) {
        handleCloseModal(popupClosedByBackdrop)
    }
}

function handleModalEscapePress(evt) {
    if (evt.key === "Escape") {
        handleCloseModal()
    }
}

function handleCloseModal(popupClosedByBackdrop) {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    document.removeEventListener('keydown', handleModalEscapePress);
    
    if (popupClosedByBackdrop) {
        popupClosedByBackdrop.removeEventListener("click", backdropClose);
    }
  }

function handleProfileFormSubmit(evt) {
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
    closeButton.addEventListener("click", () => closePopup(closeButton.closest(".popup")))
)

/*document.querySelectorAll(".popup").forEach(backdropClick => 
    backdropClick.addEventListener("click", function(evt) {
        if (evt.target.classList.contains("popup_opened")) {
            handleCloseModal()
        }  
    })
);

document.querySelectorAll(".popup").forEach(backdropClick => 
    backdropClick.addEventListener("click", backdropClose)
);*/

profileFormButton.addEventListener("click", () => openProfilePopup());
cardNewFormButton.addEventListener("click", () => openNewCardPopup());

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardAddForm.addEventListener("submit", handleCardAddFormSubmit);