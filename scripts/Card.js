import { openPopup, popupImg, mestoName, mestoLink } from './index.js';

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

class Card {
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
    this._image = this._element.querySelector('.elements__image');
    this._like = this._element.querySelector('.elements__heart');
    this._setEventListeners();
	
	  // добавим данные
	  this._image.src = this._link;
	  this._element.querySelector('.elements__text').textContent = this._name;
    this._image.alt = `Фотография пользователя; место на фотографии - ${this._name}`;
	
	  // вернём элемент наружу
	  return this._element;
	}

  _setEventListeners() {
    // лайк
    this._like.addEventListener('click', () => {
      this._handleLikeClick();
    });
    // удаление
    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._handleDeleteClick();
    });
    // попап с изображением
    this._image.addEventListener('click', () => {
      this._handlePopupImg();
    });
  }

  _handleLikeClick() {
    this._like.classList.toggle('elements__heart_active');
  }

  _handleDeleteClick(evt) {
    this._element.remove();
  }

  _handlePopupImg() {
    openPopup(popupImg);
    mestoName.textContent = this._name;
    mestoLink.src = this._link;
    mestoLink.alt = `Фотография пользователя; место на фотографии - ${mestoName.textContent}`;
  }
}

export { Card, initialCards };