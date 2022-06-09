import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._placeSelector = this._popup.querySelector("#card-place");
        this._authorSelector = this._popup.querySelector("#card-author")
        this._imageSelector = this._popup.querySelector("#card-image");
    }

    open(data) {
        super.open();
        this._imageSelector.alt = data.name;
        this._imageSelector.src = data.link;
        this._placeSelector.textContent = data.name;
        this._authorSelector.textContent = data.owner.name;
    }
}