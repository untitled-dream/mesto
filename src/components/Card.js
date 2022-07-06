import tippy from 'tippy.js';
import 'tippy.js/animations/shift-away-subtle.css';

export default class Card {
  constructor(data, ownerID, templateSelector, { handleOpenClick, handleDeleteClick, setLike, removeLike }) {
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

  _getTemplate(data) {
    switch (data) {
      case "card":
        return document.querySelector(this._cardTemplateSelector).content.querySelector(".elements__card").cloneNode(true);
      case "likeTooltipImage":
        return document.querySelector(this._tooltipImageTemlateSelector).content.querySelector(".tooltip__image").cloneNode(true);
    }
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
      if (owner._id === this._ownerID) {
        this._setLikeActiveClass();
      }
    });
  }

  _checkIsOwn() {
    if (this._data.owner._id !== this._ownerID) {
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

  _getLikeTooltip(data) {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.classList.add("tooltip")

    for (let i = 0; i < 5; i++) {
      this._likeTooltipImage = this._getTemplate("likeTooltipImage");

      if (data[i]) {
        this._likeTooltipImage.src = data[i].avatar;
        this._likeTooltipImage.alt = data[i].name;
        this._likeTooltipImage.title = data[i].name;
        this._likeTooltipImage.style.zIndex = i;

        this._tooltipContainer.appendChild(this._likeTooltipImage);
      }
    }

    return this._tooltipContainer
  }

  setLikeTooltip(data) {
    if (this._tooltip) {
      this._tooltip.destroy();
    }

    if (data.length) {
      this._tooltip = tippy(this._likeButton);
      this._tooltip.setProps({
        content: () => {
          return this._getLikeTooltip(data)
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