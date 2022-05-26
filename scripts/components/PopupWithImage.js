import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, {name, source}) {
        super(popupSelector);
        this._name = name;
        this._source = source;
        this._captionSelector = this._popup.querySelector("#card-caption");
        this._imageSelector = this._popup.querySelector("#card-image");
    }

    open() {
        super.open();
        this._captionSelector.textContent = this._name;
        this._imageSelector.src = this._source;
        this._imageSelector.alt = this._name;
    }
}