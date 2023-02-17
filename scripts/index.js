// окошки
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_image');

// кнопки
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

// открытие попапа
const openPopup = (popup) => { popup.classList.add('popup_opened'); }

// сокрытие попапа
const closePopup = (popup) => { popup.classList.remove('popup_opened'); }

const closeEditButton = popupEdit.querySelector('.popup__close');
const closeAddButton = popupAdd.querySelector('.popup__close');
const closeImgButton = popupImg.querySelector('.popup__close');

closeEditButton.addEventListener ('click', () => { closePopup(popupEdit); });
closeAddButton.addEventListener ('click', () => { closePopup(popupAdd); });
closeImgButton.addEventListener('click', () => { closePopup(popupImg); });

// для формы
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_text');

let nameStart = document.querySelector('.profile__name');
let jobStart = document.querySelector('.profile__text');

// РЕДАКТ ПРОФИЛЯ
function handleProfileEditButton () {
  openPopup(popupEdit);
  nameInput.value = nameStart.textContent;
  jobInput.value = jobStart.textContent;
}
profileEditButton.addEventListener ('click', handleProfileEditButton);

function handleFormSubmit (evt) {
    evt.preventDefault(); // дефолт отправки, сейчас не важно

    nameStart.textContent = nameInput.value;
    jobStart.textContent = jobInput.value;

    closePopup(popupEdit);
}
formElement.addEventListener('submit', handleFormSubmit);

// КАРТОЧКИ
let mestoNameInput = document.querySelector('.popup__field_type_mesto-name');
let mestoLinkInput = document.querySelector('.popup__field_type_mesto-link');

function handleAddButton () {
  openPopup(popupAdd);
  mestoNameInput.value = '';
  mestoLinkInput.value = '';
}
cardAddButton.addEventListener('click', handleAddButton);

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

const formCard = document.querySelector('.popup__form_type_card');

const getCard = (item) => {
  const cardElement = template.content.cloneNode(true);
  cardElement.querySelector('.elements__text').textContent = item.name;
  cardElement.querySelector('.elements__image').src = item.link;
  const likeButton = cardElement.querySelector('.elements__heart');
  likeButton.addEventListener('click', (event) => event.target.classList.toggle('elements__heart_active'));
  // возможность удалить
  const deleteCardButton = cardElement.querySelector('.elements__delete');
  deleteCardButton.addEventListener('click', (event) => {
    const cardItem = event.target.closest('.elements__card');
    cardItem.remove();
  });
  // открыть изображение увеличенно
  cardElement.querySelector('.elements__image').addEventListener('click', () => {
    openPopup(popupImg);
     popupImg.querySelector('.popup__image').src = item.link;
     popupImg.querySelector('.popup__description').textContent = item.name;
  });
  cardsList.prepend(cardElement);
}

initialCards.forEach(item => { getCard(item); });

const addNewCard = (evt) => {
  evt.preventDefault(); // дефолт отправки, сейчас не важно
  const newName = mestoNameInput.value;
  const newLink = mestoLinkInput.value;
  const newCard = {
    name: newName,
    link: newLink
  }
  cardsList.append(getCard(newCard));
  closePopup(popupAdd);
}
formCard.addEventListener('submit', addNewCard);