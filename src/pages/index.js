import { formValidationConfig, initialCards, formEdit, formCard, mestoNameInput, mestoLinkInput, buttonAddCard, buttonEditProfile, nameInput, jobInput } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Api } from '../components/Api.js';
import './index.css'

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '5341efdf-0efa-4de4-9e2d-8c8a726218b1',
    'Content-Type': 'application/json'
  }
});

// промисы для профиля и секции
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    user.setUserInfo(userData);
    section.renderItems(initialCards);
  })
  .catch(console.log('Произошла ошибка'));

  //СТАРЫЙ ВАРИАНТ СОЗДАНИЯ КАРТОЧЕК
// функция создания карточки для переиспользования
// function createCard (id, name, link, template, handleCardClick) {
//   const card = new Card(id, name, link, template, handleCardClick);
//   const newCard = card.generateCard();
//   return newCard;
// }

// общее создание карточки с айдишкой
function createCard(item){
  const card = new Card(
    user.userId,
    item.name, item.link, 
    '#card', 
    (evt) => popupImg.open(evt)
  );
  const newCard = card.generateCard();
  return newCard;
}

// отрисовка карточек секцией
const section = new Section({data: initialCards, 
  renderer:(item) => {
    //const card = createCard(user.userId, item.name, item.link, '#card', (evt) => popupImg.open(evt));
    section.addItem(createCard(item));
  }},
  '.elements__cards');
// section.renderItems();

// попап с картинкой
const popupImg = new PopupWithImage('.popup_type_image');
popupImg.setEventListeners();

// // валидация форм
const validatorEditForm = new FormValidator(formValidationConfig, formEdit);
const validatorAddForm = new FormValidator(formValidationConfig, formCard);
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();

// добавление карточки
// const popupAdd = new PopupWithForm('.popup_type_add', (card) => {
//   const newCard = createCard(card.mestoName, card.mestoLink, '#card', (evt) => popupImg.open(evt));
//   section.addItem(newCard);}
// );

const popupAdd = new PopupWithForm('.popup_type_add', (card) => {
  api.addCard(card)
    .then((res) => {
      popupAdd.close()
      section.addItem(createCard(res))
    })
    .catch(console.log('Произошла ошибка'))
})
//ПОЧЕМУ ТЫ НЕ РАБОТАЕШЬ
popupAdd.setEventListeners();
buttonAddCard.addEventListener('click', () => {
  validatorAddForm.resetErrors();
  popupAdd.open();
})

// редактировать профиль
const user = new UserInfo('.profile__name', '.profile__text', '.profile__avatar');
const popupEdit = new PopupWithForm('.popup_type_edit', (person) => {
  user.setUserInfo(person.profileName, person.profileText)
  //в скобки выше добавить инпут аватара
});
popupEdit.setEventListeners();
buttonEditProfile.addEventListener('click', () => {
  nameInput.value = user.getUserInfo().name;
  jobInput.value = user.getUserInfo().job;
  validatorEditForm.resetErrors();
  popupEdit.open();
});