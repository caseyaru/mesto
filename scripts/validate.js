const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__error_visible'
}

// дефолт
const disableSubmit = (evt) => {
    evt.preventDefault()
}

// показать сообщение об ошибке
const showInputError = (input, config, errorElement) => {
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(config.errorClass);
}

// скрыть сообщение об ошибке
const hideInputError = (input, config, errorElement) => {
    input.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
}

// проверить валидность формы
const checkInputValidity = (evt, config) => {
    const input = evt.target;
    const errorElement = document.querySelector(`#${input.id}-error`);
    
    if (input.validity.valid) {
        hideInputError(input, config, errorElement)
    } else {
        showInputError(input, config, errorElement)
    }
}

// валидация всех форм
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
        form.addEventListener('submit', disableSubmit);
        form.addEventListener('input', () => {
            toggleButton(form, config);
        });
        setEventListeners(form, config);
        toggleButton(form, config);
    });
}

// кнопка
const toggleButton = (form, config) => {
    const buttonSubmit = form.querySelector(config.submitButtonSelector);
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

// слушатели на все поля
const setEventListeners = (form, config) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach((item) => {
        item.addEventListener('input', (evt) => {
            checkInputValidity(evt, config);
        });
    });
};

enableValidation(formValidationConfig)

// сброс ошибок валидации при повторном открытии попапа
const resetErrors = (form, config) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach((input) => {
        const errorElement = form.querySelector(`#${input.id}-error`);
        input.classList.remove(config.inputErrorClass);
        errorElement.classList.remove(config.errorClass);
        errorElement.textContent = '';
    });
    toggleButton (form, config);
}