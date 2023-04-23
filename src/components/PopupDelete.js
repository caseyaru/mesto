import { Popup } from './Popup.js';

export class PopupDelete extends Popup {
    constructor(popup, handleDelete) {
        super(popup);
        this._handleDelete = handleDelete;
        this._buttonSubmit = this._popup.querySelector('.popup__form');
    }

    open(card, cardId){
        // переданные данные
        this._card = card;
        this._cardId = cardId;
        super.open();
    }

    setEventListeners(){
        this._buttonSubmit.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleDelete(this._card, this._cardId);
        });
        super.setEventListeners();
    }
}