import { formValidationConfig, initialCards, formEdit, formCard, mestoNameInput, mestoLinkInput, buttonAddCard, buttonEditProfile, nameInput, jobInput } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

// секция и создание карточек
const section = new Section({data: initialCards, 
  renderer:(item) => {
    const card = new Card(item.name, item.link, (evt) => popupImg.open(evt));
    const newCard = card.generateCard();
    section.addItem(newCard);
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
const popupAdd = new PopupWithForm('.popup_type_add', () => {
  const card = new Card(mestoNameInput.value, mestoLinkInput.value, (evt) => popupImg.open(evt))
  const newCard = card.generateCard();
  section.addItem(newCard);}
);
popupAdd.setEventListeners();
buttonAddCard.addEventListener('click', () => {
  validatorAddForm.resetErrors();
  popupAdd.open();
})

// редактировать профиль
const user = new UserInfo('.profile__name', '.profile__text');
const popupEdit = new PopupWithForm('.popup_type_edit', () => {
  user.setUserInfo(nameInput.value, jobInput.value)
});
popupEdit.setEventListeners();
buttonEditProfile.addEventListener('click', () => {
  nameInput.value = user.getUserInfo().name;
  jobInput.value = user.getUserInfo().job;
  validatorEditForm.resetErrors();
  popupEdit.open();
});