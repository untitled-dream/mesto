export default class Card {
    constructor({ name, link }, cardsTemplateSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._cardsTemplateSelector = cardsTemplateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        return document.querySelector(this._cardsTemplateSelector).content.querySelector(".elements__card").cloneNode(true);
    }

    _setLike() {

    }

    getCard() {
        this._element = this._getTemplate();

        const cardElementSelector = {
            image: this._element.querySelector(".elements__image"),
            title: this._element.querySelector(".elements__title"),
            likeButton: this._element.querySelector(".elements__like-button"),
            trashButton: this._element.querySelector(".elements__trash-button")
        }

        cardElementSelector.image.src = this._link;
        cardElementSelector.image.alt = this._name;
        cardElementSelector.title.textContent = this._name;

        this._setEventListeners(cardElementSelector);

        return this._element;
    }

    _setEventListeners = ({ likeButton, image, trashButton }) => {
        image.addEventListener("click", () => this._handleCardClick());
        trashButton.addEventListener("click", () => this._handleCardDeleteClick());
        likeButton.addEventListener('click', () => this._handleLikeClick(likeButton)); 
    }

    _handleLikeClick = (likeButton) => likeButton.classList.toggle("elements__like-button_active");

    _handleCardDeleteClick = () => this._element.remove();
}