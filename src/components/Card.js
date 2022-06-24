import tippy from 'tippy.js';
import 'tippy.js/animations/shift-away-subtle.css';

export default class Card {
    constructor(data, ownerID, templateSelector, { handleOpenClick, handleDeleteClick, setLike, removeLike } ) {
        this._data = data;
        this._ownerID = ownerID;
        this._cardTemplateSelector = templateSelector.card;
        this._tooltipImageTemlateSelector = templateSelector.tooltipImage
        this._activeLikeSelector = "elements__like-button_active";
        this._handleOpenClick = handleOpenClick;
        this._handleDeleteClick = handleDeleteClick;
        this._setLike = setLike;
        this._removeLike = removeLike;
    }

    _getTemplate(param) {
        switch(param) {
            case "card":
                return document.querySelector(this._cardTemplateSelector).content.querySelector(".elements__card").cloneNode(true);
            case "tooltipImage":
                return document.querySelector(this._tooltipImageTemlateSelector).content.querySelector(".tooltip__image").cloneNode(true);
        }
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
        this._element = this._getTemplate("card");

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
        
        this._setEventListeners();

        return this._element;
    }

    _getTooltip(data) {   
        this._tooltipContainer = document.createElement("div");
        this._tooltipContainer.classList.add("tooltip")
        
        for (let i = 0; i < 5; i++) {
            this._tooltipImage = this._getTemplate("tooltipImage");
            
            if (data[i]) {
                this._tooltipImage.src = data[i].avatar;
                this._tooltipImage.alt = data[i].name;
                this._tooltipImage.title = data[i].name;
                this._tooltipImage.style.zIndex = i;

                this._tooltipContainer.appendChild(this._tooltipImage);
            } 
        }

        /*if (data.length > 3) {
            this._tooltipImageMenu = document.createElement("img");
            this._tooltipImageMenu.src = require("../images/tooltip-more.svg")
            this._tooltipImageMenu.alt = "../images/tooltip-more.svg";
            this._tooltipContainer.append(this._tooltipImageMenu);
        }*/

        return this._tooltipContainer
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
                delay: 125,
                animation: "shift-away-subtle"
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