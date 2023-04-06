import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor( popup, handleFormSubmit ) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__field'); //достаёт элементы полей
    }
    
    setEventListeners() {
        super.setEventListeners();
        // при сабмите формы
        this._popup.addEventListener('submit', (evt) => {
            // отменим стандартное поведение
          evt.preventDefault();
            // передадим ей объект — результат работы _getInputValues
          this._handleFormSubmit(this._getInputValues());
            // и закроем
          this.close();
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

    close() {
        super.close();
        this._form.reset(); // сброс формы
	}
}