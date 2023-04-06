import { formValidationConfig, initialCards, formEdit, formCard, mestoNameInput, mestoLinkInput, buttonAddCard, buttonEditProfile, nameInput, jobInput } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import './index.css'

// функция создания карточки для переиспользования
function createCard (name, link, template, handleCardClick) {
  const card = new Card(name, link, template, handleCardClick);
  const newCard = card.generateCard();
  return newCard;
}

// секция и создание карточек
const section = new Section({data: initialCards, 
  renderer:(item) => {
    const card = createCard(item.name, item.link, '#card', (evt) => popupImg.open(evt));
    section.addItem(card);
  }},
  '.elements__cards');
section.renderItems();

// попап с картинкой
const popupImg = new PopupWithImage('.popup_type_image');
popupImg.setEventListeners();

// // валидация форм
const validatorEditForm = new FormValidator(formValidationConfig, formEdit);
const validatorAddForm = new FormValidator(formValidationConfig, formCard);
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();

// добавление карточки
const popupAdd = new PopupWithForm('.popup_type_add', (card) => {
  const newCard = createCard(card.mestoName, card.mestoLink, '#card', (evt) => popupImg.open(evt));
  section.addItem(newCard);}
);
popupAdd.setEventListeners();
buttonAddCard.addEventListener('click', () => {
  validatorAddForm.resetErrors();
  popupAdd.open();
})

// редактировать профиль
const user = new UserInfo('.profile__name', '.profile__text');
const popupEdit = new PopupWithForm('.popup_type_edit', (person) => {
  user.setUserInfo(person.profileName, person.profileText)
});
popupEdit.setEventListeners();
buttonEditProfile.addEventListener('click', () => {
  nameInput.value = user.getUserInfo().name;
  jobInput.value = user.getUserInfo().job;
  validatorEditForm.resetErrors();
  popupEdit.open();
});