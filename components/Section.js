export class Section {
    constructor({ data, renderer }, containerSelector) {
      this._renderedItems = data;
      this._renderer = renderer; //функция создания элемента (карточки)
      this._container = document.querySelector(containerSelector); //контейнер
    }
    // добавление карточки в разметку
    addItem(element) {
        this._container.prepend(element);
    }
    // создание массива карточек
    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    }
  }