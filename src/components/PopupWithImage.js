import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popup){
        super(popup);
        this._image = this._popup.querySelector('.popup__image');
        this._description = this._popup.querySelector('.popup__description');
    }
    open(evt){
        super.open();
        this._image.src = evt.target.src;
        this._image.alt = evt.target.alt;
        this._description.textContent = evt.target.alt;
    }
}