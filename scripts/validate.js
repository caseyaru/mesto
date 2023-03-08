const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__error_visible'
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
        hideInputError(input, config, errorElement);
    } else {
        showInputError(input, config, errorElement);
    }
}

// валидация всех форм
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
        const buttonSubmit = form.querySelector(config.submitButtonSelector);
        form.addEventListener('input', (evt) => {
            toggleButton(buttonSubmit, form, config);
            checkInputValidity(evt, config);
        });
        toggleButton(buttonSubmit, form, config);
    });
}

// кнопка
const toggleButton = (buttonSubmit, form, config) => {
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

enableValidation(formValidationConfig);

// сброс ошибок валидации при повторном открытии попапа
const resetErrors = (form, config) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach((input) => {
        const errorElement = form.querySelector(`#${input.id}-error`);
        hideInputError(input, config, errorElement);
    });
    const buttonSubmit = form.querySelector(config.submitButtonSelector);
    toggleButton (buttonSubmit, form, config);
}