const mestoNameInput = document.querySelector('.popup__field_type_mesto-name');
const mestoLinkInput = document.querySelector('.popup__field_type_mesto-link');



const cardsContainer = document.querySelector('.elements__cards');
const cardTemplate = document.getElementById('card');



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