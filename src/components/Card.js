export default class Card {
    constructor(data, ownerID, cardsTemplateSelector, { handleCardOpenClick, handleCardDeleteClick, setLike, removeLike } ) {
        this._data = data;
        this._ownerID = ownerID;
        this._cardsTemplateSelector = cardsTemplateSelector;
        this._activeLikeSelector = "elements__like-button_active";
        this._handleCardOpenClick = handleCardOpenClick;
        this._handleCardDeleteClick = handleCardDeleteClick;
        this._setLike = setLike;
        this._removeLike = removeLike;
    }

    _getTemplate() {
        return document.querySelector(this._cardsTemplateSelector).content.querySelector(".elements__card").cloneNode(true);
    }

    setLikeCount(data) {
        this._likeCounter.textContent = String(data.likes.length);
    }

    _like(data) {
        this._setLikeActiveClass();
        this._setLike(data);
    }

    _dislike(data) {
        this._removeLikeActiveClass()
        this._removeLike(data);
    }

    _setLikeActiveClass() {
        this._likeButton.classList.add(this._activeLikeSelector);
    }

    _removeLikeActiveClass() {
        this._likeButton.classList.remove(this._activeLikeSelector);
    }

    _checkLikeState() {
        this._data.likes.forEach(owner => {
            if(owner._id === this._ownerID) {
                this._setLikeActiveClass();
            }
        });
    }

    _checkIsOwn() {
        if(this._data.owner._id !== this._ownerID) {
            this._deleteCard(this._deleteCardButton);
        }
    }

    deleteCard() {
        this._deleteCard(this._element);
    }

    _deleteCard(card) {
        card.remove();
        card = null;
    }

    getCard() {
        this._element = this._getTemplate();

        this._image = this._element.querySelector(".elements__image");
        this._title = this._element.querySelector(".elements__title");
        this._likeButton = this._element.querySelector(".elements__like-button");
        this._likeCounter = this._element.querySelector(".elements__like-counter");
        this._deleteCardButton = this._element.querySelector(".elements__trash-button");

        this._image.src = this._data.link;
        this._image.alt = this._data.name;
        this._title.textContent = this._data.name;

        this._element.setAttribute("id", `${this._data._id}`);

        this.setLikeCount(this._data)
        this._checkLikeState();
        this._checkIsOwn();
        
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners = () => {
        this._image.addEventListener("click", () => { 
            this._handleCardOpenClick();
        });
        
        this._deleteCardButton.addEventListener("click", this._handleCardDeleteClick);
        
        this._likeButton.addEventListener("click", () => {
            if (this._likeButton.classList.contains(this._activeLikeSelector)) {
                this._dislike(this._data);
            } else {
                this._like(this._data);
            }
        }); 
    }
}