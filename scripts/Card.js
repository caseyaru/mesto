// import { openPopup, popupImg, mestoName, mestoLink } from './index.js';

export class Card {
	// в карточке название места и изображение
	constructor(name, link) {
		this._name = name;
		this._link = link;
	}
	
	// копирование темплейта из хтмл
    _getTemplate() {
    const cardElement = document
      .querySelector('#card')
      .content
      .querySelector('.elements__card')
      .cloneNode(true);
    
	// вернём DOM-элемент карточки
    return cardElement;
  }

	generateCard() {
	  // в _element будет темплейт
	  this._element = this._getTemplate();
      this._setEventListeners();
	
	  // добавим данные
	  this._element.querySelector('.elements__image').src = this._link;
	  this._element.querySelector('.elements__text').textContent = this._name;
	
	  // вернём элемент наружу
	  return this._element;
	}

    _setEventListeners() {
        // лайк
        this._element.querySelector('.elements__heart').addEventListener('click', (evt) => {
            evt.target.classList.toggle('elements__heart_active')
        });
        // удаление
        this._element.querySelector('.elements__delete').addEventListener('click', (evt) => {
            evt.target.closest('.elements__card').remove();
        });
        // попап с изображением
        this._element.querySelector('.elements__image').addEventListener('click', () => {
            openPopup(popupImg);
            mestoName.textContent = this._name;
            mestoLink.src = this._link;
            mestoLink.alt = `Фотография пользователя; место на фотографии - ${mestoName.textContent}`;
        });
    }
}

