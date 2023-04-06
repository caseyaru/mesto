class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonSubmit = this._form.querySelector(this._submitButtonSelector);
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

    // слушатели
    _setEventListeners() {
        this._form.addEventListener('input', (evt) => {
            this._inputList.forEach(() => {
                this._toggleButton();
                this._checkInputValidity(evt);
            })
        });
    }

    // валидация всех форм
    enableValidation() {
        this._setEventListeners();
        this._toggleButton();
    }

    // кнопка
    _toggleButton() {
        const isFormValid = this._form.checkValidity();
        this._buttonSubmit.disabled = !isFormValid;
        this._buttonSubmit.classList.toggle(this._inactiveButtonClass, !isFormValid);
    }

    // сброс ошибок валидации при повторном открытии попапа
    resetErrors() {
        this._inputList.forEach((input) => {
            const errorElement = this._form.querySelector(`#${input.id}-error`);
            this._hideInputError(input, errorElement);
        });
        this._toggleButton();
    }

    // выключение кнопки
    deactivateButton(){
		this._buttonSubmit.disabled = true;
		this._buttonSubmit.classList.add(this._inactiveButtonClass);
	}
}

export {FormValidator};