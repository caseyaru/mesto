export class Section {
    constructor(renderer, containerSelector) {
      //this._renderedItems = data; - убрала из конструктора
      this._renderer = renderer; //функция создания элемента (карточки)
      this._container = document.querySelector(containerSelector); //контейнер
    }
    // добавление карточки в разметку
    addItem(element) {
        this._container.append(element);
    }
    // добавить карточку в начало
    addItemStart(element){
        this._container.prepend(element);
    }
    // создание массива карточек
    renderItems(cards) {
        cards.forEach(item => {
            this._renderer(item);
        });
    }
  }