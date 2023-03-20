import { initialCards } from './cards.js';
import { formValidationConfig, resetErrors } from './validate.js';
// import { hi } from './Card.js';
// import { hi } from './FormValidator.js';
// модули подключены, умничка

// окошки
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_image');

// кнопки
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

// формы
const formEdit = document.forms.editing; // редактирование профиля
const formCard = document.forms.adding; // добавление карточки

// if (popup.classList.contains('popup_opened')) {
//   closePopup(popup)
// }

// открытие и закрытие попапа
const openPopup = (popup) => { 
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', closeByEsc);
}
const closePopup = (popup) => { 
  popup.classList.remove('popup_opened'); 
  document.removeEventListener('keydown', closeByEsc);
}

// закрытие по нажатию на оверлей
const popupList = document.querySelectorAll('.popup');
popupList.forEach((item) => {
   item.addEventListener('click', (evt) => {
    closePopup(evt.target);
   });
});

// закрытие по нажатию на esc
const closeByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const buttonsCloseList = document.querySelectorAll('.popup__close');
buttonsCloseList.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// РЕДАКТ ПРОФИЛЯ
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_text');

const nameStart = document.querySelector('.profile__name');
const jobStart = document.querySelector('.profile__text');

function openProfileEditPopup () {
  nameInput.value = nameStart.textContent;
  jobInput.value = jobStart.textContent;
  resetErrors(formEdit, formValidationConfig);
  openPopup(popupEdit);
}
buttonEditProfile.addEventListener ('click', openProfileEditPopup);

function handleFormEditSubmit (evt) {
    evt.preventDefault(); // дефолт отправки
    nameStart.textContent = nameInput.value;
    jobStart.textContent = jobInput.value;
    closePopup(popupEdit);
}
formEdit.addEventListener('submit', handleFormEditSubmit);

// КАРТОЧКИ
const mestoNameInput = document.querySelector('.popup__field_type_mesto-name');
const mestoLinkInput = document.querySelector('.popup__field_type_mesto-link');

buttonAddCard.addEventListener('click', () => { openPopup(popupAdd); });

const cardsContainer = document.querySelector('.elements__cards');
const cardTemplate = document.getElementById('card');

const mestoLink = popupImg.querySelector('.popup__image');
const mestoName = popupImg.querySelector('.popup__description');

const createCard = (card) => {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardName = cardElement.querySelector('.elements__text');
  const cardImage = cardElement.querySelector('.elements__image');

  cardName.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = `Фотография пользователя; место на фотографии - ${cardName.textContent}`;

  const buttonLike = cardElement.querySelector('.elements__heart');
  buttonLike.addEventListener('click', (event) => event.target.classList.toggle('elements__heart_active'));
  
  const buttonDelete = cardElement.querySelector('.elements__delete');
  buttonDelete.addEventListener('click', (event) => {
    const cardItem = event.target.closest('.elements__card');
    cardItem.remove();
  });
  
  cardImage.addEventListener('click', () => {
    openPopup(popupImg);
    mestoName.textContent = card.name;
    mestoLink.src = card.link;
    mestoLink.alt = `Фотография пользователя; место на фотографии - ${mestoName.textContent}`;
  });
  return cardElement;
}

const renderCard = (card) => {
  const cardElement = createCard(card);
  cardsContainer.prepend(cardElement);
}

initialCards.forEach(renderCard);

const handleAddNewCard = (evt) => {
  evt.preventDefault(); // дефолт отправки
  const newName = mestoNameInput.value;
  const newLink = mestoLinkInput.value;
  const newCard = {
    name: newName,
    link: newLink
  }
  renderCard(newCard);
  evt.target.reset();
  resetErrors(formCard, formValidationConfig);
  closePopup(popupAdd);
}
formCard.addEventListener('submit', handleAddNewCard);
