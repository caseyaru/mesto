// ОТКРЫТИЕ-ЗАКРЫТИЕ ПОПАПА 

const submitButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

function toggleOpenPopup () {
    popup.classList.toggle('popup_opened');
  };

function handleSubmitButton () {
    toggleOpenPopup();
}
function handleCloseButton () {
    toggleOpenPopup();
}

function handleOverlayClick (event) {
    if (event.target === event.currentTarget) {
      toggleOpenPopup();
    }
  };

submitButton.addEventListener ('click', handleSubmitButton);
closeButton.addEventListener ('click', handleCloseButton);
popup.addEventListener('click', handleOverlayClick);

// ОТПРАВКА ФОРМЫ

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__text');

let nameStart = document.querySelector('.profile__name');
let jobStart = document.querySelector('.profile__text');

console.log(formElement, nameInput, jobInput, nameStart, jobStart); // всё работает

function handleFormSubmit (evt) {
    evt.preventDefault(); // дефолт отправки, сейчас не важно

    nameStart.textContent = nameInput.value;
    jobStart.textContent = jobInput.value;

    nameInput.value = "Жак-Ив Кусто";
    jobInput.value = "Исследователь океана";

    handleCloseButton();
}

formElement.addEventListener('submit', handleFormSubmit);

