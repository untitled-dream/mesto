export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    rendererItems(data) {
        data.forEach(element => this._renderer(element));
    }

    addItemOnPage(cardElement, place) {
        if (place == "prepend") {
            this._container.prepend(cardElement);
        } else {
            this._container.append(cardElement);
        }   
    }
}