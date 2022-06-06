export default class Section {
    constructor({ items, renderer}, containerSelector) {
        this._cardData = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    rendererItems() {
        this._cardData.forEach(element => this._renderer(element));
    }

    addItemOnPage(cardElement) {
        this._container.prepend(cardElement);
    }
}