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

        this._image = this._element.querySelector(".elements__image");
        this._title = this._element.querySelector(".elements__title");
        this._likeButton = this._element.querySelector(".elements__like-button");
        this._trashButton = this._element.querySelector(".elements__trash-button");

        this._image.src = this._link;
        this._image.alt = this._name;
        this._title.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners = () => {
        this._image.addEventListener("click", () => this._handleCardClick());
        this._trashButton.addEventListener("click", () => this._handleCardDeleteClick());
        this._likeButton.addEventListener('click', () => this._handleLikeClick(this._likeButton)); 
    }

    _handleLikeClick = () => this._likeButton.classList.toggle("elements__like-button_active");

    _handleCardDeleteClick = () => this._element.remove();
}