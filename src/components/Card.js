import tippy from 'tippy.js';

export default class Card {
    constructor(data, ownerID, cardsTemplateSelector, { handleOpenClick, handleDeleteClick, setLike, removeLike } ) {
        this._data = data;
        this._ownerID = ownerID;
        this._templateSelector = cardsTemplateSelector;
        this._activeLikeSelector = "elements__like-button_active";
        this._handleOpenClick = handleOpenClick;
        this._handleDeleteClick = handleDeleteClick;
        this._setLike = setLike;
        this._removeLike = removeLike;
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(true);
    }

    setLikeCount(data) {

        this._likeCounter.textContent = String(data.likes.length);

        if (this._tooltip) {
            this._tooltip.destroy();
        }
        
        this._setTooltip(this._likeButton, data.likes);
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
        
        this._checkIsOwn();
        this._checkLikeState();
        //this.setLikeCount(this._data)
        
        this._setEventListeners();

        return this._element;
    }

    _getTooltipTemplate() {
        return document.querySelector("#tooltip-container").content.querySelector(".tooltip__container").cloneNode(true);
    }

    _getTooltipImageTemplate() {
        return document.querySelector("#tooltip-image").content.querySelector(".tooltip__image").cloneNode(true);
    }

    _getTooltip(data) {
        this._tooltipTemplate = this._getTooltipTemplate();
        
        data.forEach(likeUser => {
            this._tooltipImageTemplate = this._getTooltipImageTemplate();
            
            this._tooltipImageTemplate.src = likeUser.avatar;
            this._tooltipImageTemplate.alt = likeUser.name;
            this._tooltipImageTemplate.title = likeUser.name;

            this._tooltipTemplate.appendChild(this._tooltipImageTemplate)
        })

        return this._tooltipTemplate
    }

    _setTooltip(button, data) {
        if (data.length) {
            this._tooltip = tippy(button);
            this._tooltip.setProps({
                content: () => {
                    return this._getTooltip(data)
                },
                placement: "top",
                allowHTML: true,
                interactive: true,
                delay: 250
            })
        }
    }

    _setEventListeners = () => {
        this._image.addEventListener("click", () => { 
            this._handleOpenClick();
        });
        
        this._deleteCardButton.addEventListener("click", this._handleDeleteClick);
        
        this._likeButton.addEventListener("click", () => {
            if (this._likeButton.classList.contains(this._activeLikeSelector)) {
                this._dislike(this._data);
            } else {
                this._like(this._data);
                
            }
        }); 
    }
}