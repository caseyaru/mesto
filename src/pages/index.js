import { formValidationConfig, formEdit, formCard, formAvatar, mestoNameInput, mestoLinkInput, buttonAddCard, buttonEditProfile, buttonEditAvatar, nameInput, jobInput } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupDelete } from '../components/PopupDelete.js';
import { Api } from '../components/Api.js';
import './index.css'
import '../index.html'

// переменная для айди пользователя
let userId;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '5341efdf-0efa-4de4-9e2d-8c8a726218b1',
    'Content-Type': 'application/json'
  }
});

// валидация форм
const validatorEditForm = new FormValidator(formValidationConfig, formEdit);
const validatorAddForm = new FormValidator(formValidationConfig, formCard);
const validatorAvatarForm = new FormValidator(formValidationConfig, formAvatar);
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();
validatorAvatarForm.enableValidation();

//================= сервер

// промисы для профиля и секции
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userId = userData._id;
    user.setUserInfo(userData);
    section.renderItems(cardsData);
  })
  .catch(console.log);

//================= карточки

// общее создание карточки с айдишкой
function createCard(item){
  const card = new Card(
    userId,
    item,
    // item.name, item.link, 
    '#card', 
    (evt) => popupImg.open(evt),
    (card, cardId) => { popupDelete.open(card, cardId) },
    //handleAddCard
    (cardId) => {
      api.likeCard(cardId)
        .then((res) => card.counterLike(res))
        .catch(console.log('Ошибка при удалении лайка'))
    },
    //handleRemoveLike
    (cardId) => {
      api.unlikeCard(cardId)
        .then((res) => card.counterLike(res))
        .catch(console.log('Ошибка при постановке лайка'))
    }
  );
  const newCard = card.generateCard();
  return newCard;
}

// отрисовка карточек секцией
const section = new Section(
  (item) => {
    section.addItem(createCard(item));
  },
  '.elements__cards');

// добавление карточки
const popupAdd = new PopupWithForm('.popup_type_add', (card) => {
  popupAdd.renderLoading(true);
  api.addCard(card)
    .then((res) => {
      popupAdd.close()
      section.addItemStart(createCard(res))
    })
    .catch(console.log)
    .finally(() => popupAdd.renderLoading(false))
})
popupAdd.setEventListeners();
buttonAddCard.addEventListener('click', () => {
  validatorAddForm.resetErrors();
  popupAdd.open();
})

// удаление карточки
const popupDelete = new PopupDelete('.popup_type_delete', (card, cardId) => {
  api.deleteCard(cardId)
    .then(() => {
      card.delete();
      popupDelete.close();
    })
    .catch(console.log('Ошибка при удалении'));
})
popupDelete.setEventListeners();

// попап с картинкой
const popupImg = new PopupWithImage('.popup_type_image');
popupImg.setEventListeners();

//================= профиль

// редактировать профиль
const user = new UserInfo({name: '.profile__name', about: '.profile__text', avatar: '.profile__avatar'});
const popupEdit = new PopupWithForm('.popup_type_edit', (person) => {
  popupEdit.renderLoading(true);
  api.putUserInfo(person)
  .then((data) => {
    user.setUserInfo(data)
    popupEdit.close()
  })
  .catch(console.log)
  .finally(() => popupEdit.renderLoading(false))
});
popupEdit.setEventListeners();
buttonEditProfile.addEventListener('click', () => {
  nameInput.value = user.getUserInfo().name;
  jobInput.value = user.getUserInfo().about;
  validatorEditForm.resetErrors();
  popupEdit.open();
});

// обновить аватар
const popupAvatar = new PopupWithForm('.popup_type_avatar', (data) => {
  popupAvatar.renderLoading(true);
  api.putUserAvatar(data)
  .then((res) => {
    user.setUserInfo(res)
    popupAvatar.close()
  })
  .catch(console.log)
  .finally(() => popupAvatar.renderLoading(false))
})
popupAvatar.setEventListeners();
buttonEditAvatar.addEventListener('click', () => {
  validatorAvatarForm.resetErrors();
  popupAvatar.open();
})