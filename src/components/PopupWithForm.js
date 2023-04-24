import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor( popup, handleFormSubmit ) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__field'); //достаёт элементы полей
        this._buttonSubmit = this._popup.querySelector('.popup__submit');
    }
    
    setEventListeners() {
        super.setEventListeners();
        // при сабмите формы
        this._popup.addEventListener('submit', (evt) => {
            // отменим стандартное поведение
          evt.preventDefault();
            // передадим ей объект — результат работы _getInputValues
          this._handleFormSubmit(this._getInputValues());
        })
    }
    
        // создание массива полей, обход, добавление
    _getInputValues() {
              // создаём пустой объект
      this._formValues = {};
              // добавляем в этот объект значения всех полей
      this._inputList.forEach((input) => {
        this._formValues[input.name] = input.value;
      });
              // возвращаем объект значений
      return this._formValues;
    }

    renderLoading(isLoading, text){
      if (!this._buttonSubmit) return;
      if (isLoading) {
        this.default = this._buttonSubmit.textContent;
        this._buttonSubmit.textContent = text;
      } else {
        this._buttonSubmit.textContent = this.default;
      }
    }

    close() {
        super.close();
        this._form.reset(); // сброс формы
	}
}