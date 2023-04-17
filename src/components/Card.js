class Card {
	// в карточке название места, изображение, открытие по клику
	constructor(id, name, link, template, handleCardClick) {
    this.userId = id;
		this._name = name;
		this._link = link;
    this._handleCardClick = handleCardClick;
    this._template = template;
	}

  //
  getId(){
    return this._cardId
  }
	
	// копирование темплейта из хтмл
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
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
    this._image.alt = `${this._name}`;
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
    this._image.addEventListener('click', (evt) => {
      this._handleCardClick(evt);
    });
  }

  _handleLikeClick() {
    this._like.classList.toggle('elements__heart_active');
  }

  _handleDeleteClick(evt) {
    this._element.remove();
  }
}

export { Card };