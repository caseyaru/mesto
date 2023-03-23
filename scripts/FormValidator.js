class FormValidator {
    constructor(config) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

    _showInputError(input, errorElement) {
        input.classList.add(this._inputErrorClass);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(input, errorElement) {
        input.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    // проверить валидность формы
    _checkInputValidity(evt) {
        const input = evt.target;
        const errorElement = document.querySelector(`#${input.id}-error`);
        
        if (input.validity.valid) {
            this._hideInputError(input, errorElement);
        } else {
            this._showInputError(input, errorElement);
        }
    }

    // валидация всех форм
    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._formSelector));
        formList.forEach((form) => {
            const buttonSubmit = form.querySelector(this._submitButtonSelector);
            form.addEventListener('input', (evt) => {
                this._toggleButton(buttonSubmit, form);
                this._checkInputValidity(evt);
            });
            this._toggleButton(buttonSubmit, form);
        });
    }

    // кнопка
    _toggleButton (buttonSubmit, form) {
        const isFormValid = form.checkValidity();
        buttonSubmit.disabled = !isFormValid;
        buttonSubmit.classList.toggle(this._inactiveButtonClass, !isFormValid);
    }

    // сброс ошибок валидации при повторном открытии попапа
    resetErrors(form) {
        const inputList = Array.from(form.querySelectorAll(this._inputSelector));
        inputList.forEach((input) => {
            const errorElement = form.querySelector(`#${input.id}-error`);
            this._hideInputError(input, errorElement);
        });
        const buttonSubmit = form.querySelector(this._submitButtonSelector);
        this._toggleButton(buttonSubmit, form);
    }
}

export {FormValidator};