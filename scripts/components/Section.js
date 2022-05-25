export default class Section {
    constructor({ item, renderer}, containerSelector) {
        this._cardData = item;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderer() {
        this._renderer(this._cardData);
    }

    addItemOnPage(cardElement) {
        this._container.prepend(cardElement);
    }
}