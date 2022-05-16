import { openPopup } from "./utils.js"
import { imageViewPopup, cardCaption, cardImage } from "./class-variables.js"

class Card {
    constructor(data, cardsTemplateSelector) {
        this._data = data;
        this._cardsTemplateSelector = cardsTemplateSelector;
    }

    _getTemplate() {
        return document.querySelector(this._cardsTemplateSelector).content.querySelector(".elements__card").cloneNode(true);
    }

    renderCard(cardElement) {
        const cardsList = document.querySelector(".elements__list");
        cardsList.prepend(cardElement);
    }

    getCard() {
        this._element = this._getTemplate();
        const cardElementSelector = {
            image: this._element.querySelector(".elements__image"),
            title: this._element.querySelector(".elements__title"),
            likeButton: this._element.querySelector(".elements__button-like"),
            trashButton: this._element.querySelector(".elements__button-trash")
        }

        cardElementSelector.image.src = this._data.source;
        cardElementSelector.image.alt = this._data.name;
        cardElementSelector.title.textContent = this._data.name;

        this._setEventListeners(cardElementSelector);

        return this._element;
    }

    _setEventListeners = ({ likeButton, image, trashButton }) => {
        likeButton.addEventListener('click', () => {
            this._handleLikeClick(likeButton);
        });

        image.addEventListener("click", () => {
            this._openImagePopup(imageViewPopup)
        })

        trashButton.addEventListener("click", () => {
            this._handleCardDeleteClick();
        });
    }

    _handleLikeClick(likeButton) {
        likeButton.classList.toggle("elements__button-like_active");
    }

    _handleCardDeleteClick() {
        this._element.remove();
    }

    _openImagePopup(imageViewPopup) {
        cardCaption.textContent = this._data.name;
        cardImage.src = this._data.source;
        cardImage.alt = this._data.name;
        openPopup(imageViewPopup);
    }
}

export { Card }