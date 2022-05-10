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

const imageViewPopup = document.querySelector("#card-view");

export default class Card {
    constructor(data, cardsTemplateSelector) {
        this._name = data.name;
        this._source = data.source;
        this._cardsTemplateSelector = cardsTemplateSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardsTemplateSelector).content.cloneNode(true);

        return cardElement;
    }

    _renderCard(cardElement) {
        const cardsList = document.querySelector(".elements__list");
        cardsList.prepend(cardElement);
    }

    getCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        const imageAttr = this._element.querySelector(".elements__image");
        imageAttr.src = this._source;
        imageAttr.alt = this._source;
        
        this._element.querySelector(".elements__title").textContent = this._name;   

        imageAttr.addEventListener("click", () => openImagePopup(imageViewPopup, this._name, this._source));
        
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector(".elements__button-like").addEventListener('click', (evt) => {
            this._handleLikeClick(evt);
        });

        this._element.querySelector(".elements__button-trash").addEventListener("click", (evt) => {
            this._handleCardDeleteClick(evt);
        });
    }

    _handleLikeClick(evt) {
        evt.target.classList.toggle("elements__button-like_active");
    }

    _handleCardDeleteClick(evt) {
        evt.target.closest(".elements__card").remove();
    }
}

defaultCards.forEach((cards) => {
    const card = new Card(cards, "#card-template");
    const cardElement = card.getCard();
    card._renderCard(cardElement);
    //document.querySelector(".elements__list").prepend(cardElement);
})