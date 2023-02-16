// для всего попапа
const profileEditButton = document.querySelector('.profile__edit-button'); //редактировать профиль

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');

const popupImg = document.querySelector('.popup_type_image');

// const closeButton = popup.querySelector('.popup__close'); //закрыть редактирование профиля

const closeEditButton = popupEdit.querySelector('.popup__close');
const closeAddButton = popupAdd.querySelector('.popup__close');


// для формы
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_text');

let nameStart = document.querySelector('.profile__name');
let jobStart = document.querySelector('.profile__text');




// открытие-закрытие
function handleProfileEditButton () {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameStart.textContent;
  jobInput.value = jobStart.textContent;
}

// const closeButton = popup.querySelector('.popup__close'); //закрыть редактирование профиля
// function handleCloseButton () {
//   popup.classList.remove('popup_opened');
// }
// closeButton.addEventListener ('click', handleCloseButton);

function handleCloseEditButton () {
  popupEdit.classList.remove('popup_opened');
}


profileEditButton.addEventListener ('click', handleProfileEditButton);

closeEditButton.addEventListener ('click', handleCloseEditButton);



// отправка формы
function handleFormSubmit (evt) {
    evt.preventDefault(); // дефолт отправки, сейчас не важно

    nameStart.textContent = nameInput.value;
    jobStart.textContent = jobInput.value;

    handleCloseEditButton();
}

formElement.addEventListener('submit', handleFormSubmit);

// попап карточек

const cardAddButton = document.querySelector('.profile__add-button'); //добавить место

let mestoNameInput = document.querySelector('.popup__field_type_mesto-name');
let mestoLinkInput = document.querySelector('.popup__field_type_mesto-link');

function handleAddButton () {
  popupAdd.classList.add('popup_opened');
  mestoNameInput.value = '';
  mestoLinkInput.value = '';
}

function handleCloseAddButton () {
  popupAdd.classList.remove('popup_opened');
}

cardAddButton.addEventListener('click', handleAddButton);
closeAddButton.addEventListener ('click', handleCloseAddButton);

//итого: он закрывается, открывается

// создание карточек

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
  likeButton.addEventListener('click', (event) => event.target.classList.add('elements__heart_active'));

  // возможность удалить
  const deleteCardButton = cardElement.querySelector('.elements__delete');
  deleteCardButton.addEventListener('click', (event) => {
    const cardItem = event.target.closest('.elements__card');
    cardItem.remove();
  });

  // открыть изображение увеличенно
  cardElement.querySelector('.elements__image').addEventListener('click', () => {
    popupImg.classList.add('popup_opened');
     popupImg.querySelector('.popup__image').src = item.link;
     popupImg.querySelector('.popup__description').textContent = item.name;
  });
  popupImg.querySelector('.popup__close').addEventListener('click', () => {
    popupImg.classList.remove('popup_opened');
  });

  cardsList.prepend(cardElement);
}

initialCards.forEach(function(item) {
  getCard(item);
});

function addNewCard (evt) {

  evt.preventDefault(); // дефолт отправки, сейчас не важно

  const newName = mestoNameInput.value;
  const newLink = mestoLinkInput.value;

  const newCard = {
    name: newName,
    link: newLink
  }

  cardsList.append(getCard(newCard));
  handleCloseAddButton(); //ОБЪЕДИНИТЬ ДЕЛИТЫ
}

formCard.addEventListener('submit', addNewCard);

// const saveButton = document.querySelector('.popup__submit-mesto');
// saveButton.addEventListener('click', () => {
//   popupAdd.classList.remove('popup_opened');
// });