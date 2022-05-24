import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup) {
        super(popup);
        this._handleFormSubmit = "";
    }

    setEventListeners() {

        super.setEventListeners();
    }

    close() {

        super.close();
    }

    _getInputValues() {

    }

    
}