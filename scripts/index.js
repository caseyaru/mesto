// окошки
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_image');

// кнопки
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

// формы
const formEdit = document.forms.editing; // редактирование профиля
const formCard = document.forms.adding; // добавление карточки


// открытие и закрытие попапа
const openPopup = (popup) => { popup.classList.add('popup_opened'); }
const closePopup = (popup) => { popup.classList.remove('popup_opened'); }

// закрытие по нажатию на оверлей
const popupList = document.querySelectorAll('.popup');
popupList.forEach((item) => {
   item.addEventListener('click', (evt) => {
    closePopup(evt.target)
   });
});

// закрытие по нажатию на esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
});

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// РЕДАКТ ПРОФИЛЯ
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_text');

const nameStart = document.querySelector('.profile__name');
const jobStart = document.querySelector('.profile__text');

function handleProfileEditButton () {
  nameInput.value = nameStart.textContent;
  jobInput.value = jobStart.textContent;
  resetErrors(formEdit, formValidationConfig);
  openPopup(popupEdit);
}
profileEditButton.addEventListener ('click', handleProfileEditButton);

function handleFormEditSubmit (evt) {
    evt.preventDefault(); // дефолт отправки, сейчас не важно

    nameStart.textContent = nameInput.value;
    jobStart.textContent = jobInput.value;
    
    closePopup(popupEdit);
}
formEdit.addEventListener('submit', handleFormEditSubmit);

// КАРТОЧКИ
const mestoNameInput = document.querySelector('.popup__field_type_mesto-name');
const mestoLinkInput = document.querySelector('.popup__field_type_mesto-link');

cardAddButton.addEventListener('click', () => { openPopup(popupAdd); });

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

const cardsList = document.querySelector('.elements__cards');
const template = document.getElementById('card');

const mestoLink = popupImg.querySelector('.popup__image');
const mestoName = popupImg.querySelector('.popup__description');

const createCard = (item) => {
  const cardElement = template.content.cloneNode(true);
  const cardName = cardElement.querySelector('.elements__text');
  const cardImage = cardElement.querySelector('.elements__image');

  cardName.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = `Фотография пользователя; место на фотографии - ${cardName.textContent}`;

  const likeButton = cardElement.querySelector('.elements__heart');
  likeButton.addEventListener('click', (event) => event.target.classList.toggle('elements__heart_active'));
  
  const deleteCardButton = cardElement.querySelector('.elements__delete');
  deleteCardButton.addEventListener('click', (event) => {
    const cardItem = event.target.closest('.elements__card');
    cardItem.remove();
  });
  
  cardImage.addEventListener('click', () => {
    openPopup(popupImg);
    mestoName.textContent = item.name;
    mestoLink.src = item.link;
    mestoLink.alt = `Фотография пользователя; место на фотографии - ${mestoName.textContent}`;
  });
  return cardElement;
}

const getCard = (item) => {
  const cardElement = createCard(item);
  cardsList.prepend(cardElement);
}

initialCards.forEach(getCard);

const addNewCard = (evt) => {
  evt.preventDefault(); // дефолт отправки, сейчас не важно
  const newName = mestoNameInput.value;
  const newLink = mestoLinkInput.value;
  const newCard = {
    name: newName,
    link: newLink
  }
  cardsList.append(getCard(newCard));
  evt.target.reset();
  resetErrors(formCard, formValidationConfig);
  closePopup(popupAdd);
}
formCard.addEventListener('submit', addNewCard);