import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._captionSelector = this._popup.querySelector("#card-caption");
        this._imageSelector = this._popup.querySelector("#card-image");
    }

    open({place, source}) {
        super.open();

        this._imageSelector.alt = place;
        this._imageSelector.src = source;
        this._captionSelector.textContent = place;
    }
}