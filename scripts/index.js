
import { formValidationConfig, resetErrors } from './validate.js';
import { Card, initialCards } from './Card.js';
// модули подключены

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

buttonAddCard.addEventListener('click', () => { openPopup(popupAdd); });
const mestoLink = popupImg.querySelector('.popup__image');
const mestoName = popupImg.querySelector('.popup__description');

const cardsContainer = document.querySelector('.elements__cards');

// создание карточки
initialCards.forEach((item) => {
  // создаём экземпляр карточки
  const card = new Card(item.name, item.link);
  // создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // добавляем в DOM
  cardsContainer.append(cardElement);
});

export { openPopup, popupImg, mestoName, mestoLink };