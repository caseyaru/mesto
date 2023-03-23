class FormValidator {
    constructor(config, form) {
        this._form = config.formSelector;
        // this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector; // селектор кнопки
        
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        // this._buttonSubmit = 
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
        this._form.addEventListener('input', (evt) => {
            this._toggleButton();
            this._checkInputValidity(evt);
        });
        this._toggleButton();
    }

    // кнопка
    _toggleButton() {
        this._buttonSubmit = this._form.querySelector(this._buttonSelector);
        const isFormValid = this._form.checkValidity();
        this._buttonSubmit.disabled = !isFormValid;
        this._buttonSubmit.classList.toggle(this._inactiveButtonClass, !isFormValid);
    }

    // сброс ошибок валидации при повторном открытии попапа
    // resetErrors(form) {
    //     const inputList = Array.from(form.querySelectorAll(this._inputSelector));
    //     inputList.forEach((input) => {
    //         const errorElement = form.querySelector(`#${input.id}-error`);
    //         this._hideInputError(input, errorElement);
    //     });
    //     this._toggleButton();
    // }
}

export {FormValidator};