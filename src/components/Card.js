export class Card {
	constructor(userId, data, template, handleCardClick, handleDelete, handleAddLike, handleRemoveLike) {
    this.userId = userId;

    this._card = data;
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._likes = data.likes;
    this._likesCounter = data.likes.length;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDelete;

    this._addLike = handleAddLike;
    this._removeLike = handleRemoveLike;

    this._template = template;
	}
	
	// копирование темплейта из хтмл
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.elements__card')
      .cloneNode(true);
    return cardElement;
  }

	generateCard() {
	  this._element = this._getTemplate();
    this._image = this._element.querySelector('.elements__image');
    
	  this._image.src = this._link;
	  this._element.querySelector('.elements__text').textContent = this._name;
    this._image.alt = `${this._name}`;

    // удаление
    this._buttonDelete = this._element.querySelector('.elements__delete');
    // чтобы удаление было только на своих карточках
    if (this.userId !== this._card.owner._id) {
      this._buttonDelete.style.display = 'none'
    }

    // лайки
    this._like = this._element.querySelector('.elements__heart');
    this._counter = this._element.querySelector('.elements__like-counter');
    this.counterLike(this._card);

    this._setEventListeners();
	  return this._element;
	}

  // удаление карточки (вызывать в index)
  delete(){
    this._element.remove();
    this._element = null;
  }

  // проверка на наличие лайка на карточке
  isLiked(){
    return this._likes.some(item => item._id === this.userId);
  }

  // поставить/убрать лайк
  handleLike(){
    if (this.isLiked()){
      this._removeLike(this._cardId)
    } else {
      this._addLike(this._cardId)
    }
  }

  // поставить лайк + количество лайков
  counterLike(card){
    this._likes = card.likes;
    if(this._likes.length === 0) {
      this._counter.textContent = '0';
    } else {
      this._counter.textContent = this._likes.length
    }

    if (this.isLiked()) {
      this._like.classList.add('elements__heart_active');
    } else {
      this._like.classList.remove('elements__heart_active');
    }
  }

  _setEventListeners() {
    // лайк
    this._like.addEventListener('click', () => this.handleLike());
    
    // удаление
    this._buttonDelete.addEventListener('click', () => {
        this._handleDeleteClick(this, this._cardId);
    });

    // попап с изображением
    this._image.addEventListener('click', (evt) => {
      this._handleCardClick(evt);
    });
  }
}