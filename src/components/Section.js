export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    rendererItems(data) {
        console.log(data);
        data.forEach(element => this._renderer(element));
    }

    addItemOnPage(cardElement) {
        this._container.prepend(cardElement);
    }
}