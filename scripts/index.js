const profilePopup = document.querySelector("#profile-edit");
const profileForm = document.forms["profile-edit-form"];

const openProfileFormButton = document.querySelector(".profile__button-edit");
const closeProfileFormButton = document.querySelector(".popup__button-close");

const nameInput = document.getElementById("profile-name");
const descriptionInput = document.getElementById("profile-description");

const nameCurrent = document.querySelector(".profile__name");
const descriptionCurrent = document.querySelector(".profile__description");

/* default cards */ 
const cardsList = document.querySelector('.elements__list');
const cardsTemplate = document.querySelector("#card-template").content;
const defaultCards = [
    {
      name: 'Казанский кремль',
      source: './images/photo-grid-kazan.jpg'
    },
    {
      name: 'МГУ, Москва',
      source: './images/photo-grid-moscow-2.jpg'
    },
    {
      name: 'о. Эгина, Греция',
      source: './images/photo-grid-aegina.jpg'
    },
    {
      name: 'Куршская Коса',
      source: './images/photo-grid-kurshskaya-kosa.jpg'
    },
    {
      name: 'Москва',
      source: './images/photo-grid-moscow-1.jpg'
    },
    {
      name: 'Афины',
      source: './images/photo-grid-athens.jpg'
    }
  ];

  defaultCards.forEach(function (card) {
    const cardElement = cardsTemplate.cloneNode(true);
    
    cardElement.querySelector(".elements__title").textContent = card.name;
    cardElement.querySelector(".elements__image").src = card.source;
    cardElement.querySelector(".elements__image").alt = card.name;

    cardElement.querySelector('.elements__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle("elements__button-like_active");
    });

    cardsList.appendChild(cardElement);  
  })

/* profile form opening */
function formOpenHandler(evt) {
    evt.preventDefault();
    profilePopup.classList.add("popup_opened");
    
    nameInput.value = nameCurrent.textContent;
    descriptionInput.value = descriptionCurrent.textContent;
}

/* form submit */
function formSubmitHandler(evt) {
    evt.preventDefault();
    
    nameCurrent.textContent = nameInput.value;
    descriptionCurrent.textContent = descriptionInput.value;
    
    formCloseHandler(evt);
}

/* form closing */
function formCloseHandler(evt) {
    evt.preventDefault();
    profilePopup.classList.remove("popup_opened");
}

openProfileFormButton.addEventListener("click", formOpenHandler);
profileForm.addEventListener("submit", formSubmitHandler);
closeProfileFormButton.addEventListener("click", formCloseHandler);