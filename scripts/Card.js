import { openPopup } from "./utils.js"
import { imageViewPopup, cardCaption, cardImage } from "./class-variables.js"

class Card {
    constructor(data, cardsTemplateSelector) {
        this._name = data.name;
        this._source = data.source;
        this._cardsTemplateSelector = cardsTemplateSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardsTemplateSelector).content.querySelector(".elements__card").cloneNode(true);

        return cardElement;
    }

    _renderCard(cardElement) {
        const cardsList = document.querySelector(".elements__list");
        cardsList.prepend(cardElement);
    }

    getCard() {
        this._element = this._getTemplate();

        const imageAttr = this._element.querySelector(".elements__image");
        imageAttr.src = this._source;
        imageAttr.alt = this._name;

        this._element.querySelector(".elements__title").textContent = this._name;

        imageAttr.addEventListener("click", () => {
            this._openImagePopup(imageViewPopup, this._name, this._source)
        });
                
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector(".elements__button-like").addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._element.querySelector(".elements__button-trash").addEventListener("click", () => {
            this._handleCardDeleteClick();
        });
    }

    _handleLikeClick() {
        this._element.querySelector(".elements__button-like").classList.toggle("elements__button-like_active");
    }

    _handleCardDeleteClick() {
        this._element.remove();
    }

    _openImagePopup(popup, name, source) {
        cardCaption.textContent = name;
        cardImage.src = source;
        cardImage.alt = name;
        openPopup(popup);
    }
}

export { Card }