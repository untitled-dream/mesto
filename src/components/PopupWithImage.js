import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._captionSelector = this._popup.querySelector("#card-caption");
        this._imageSelector = this._popup.querySelector("#card-image");
    }

    open({name, source}) {
        super.open();

        this._imageSelector.alt = name;
        this._imageSelector.src = source;
        this._captionSelector.textContent = name;
    }
}