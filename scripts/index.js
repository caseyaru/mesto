// для всего попапа
const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

// для формы
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_text');

let nameStart = document.querySelector('.profile__name');
let jobStart = document.querySelector('.profile__text');

// открытие-закрытие
function handleProfileEditButton () {
  popup.classList.add('popup_opened');
  nameInput.value = nameStart.textContent;
  jobInput.value = jobStart.textContent;
}

function handleCloseButton () {
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener ('click', handleProfileEditButton);
closeButton.addEventListener ('click', handleCloseButton);

// отправка формы
function handleFormSubmit (evt) {
    evt.preventDefault(); // дефолт отправки, сейчас не важно

    nameStart.textContent = nameInput.value;
    jobStart.textContent = jobInput.value;

    handleCloseButton();
}

formElement.addEventListener('submit', handleFormSubmit);

