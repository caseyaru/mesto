export class UserInfo {
    constructor ({name, about, avatar}) {
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
        this._avatar = document.querySelector(avatar);
    }
    // возвращает данные пользователя
    getUserInfo () {
        return ({
            name: this._name.textContent,
            about: this._about.textContent
        });
    }
    // добавляет новые данные на страницу
    setUserInfo ({name, about, avatar, id}) {
        this._name.textContent = name;
        this._about.textContent = about;
        this._avatar.src = avatar;
        this.userId = id;
        
    }
}

//this._avatar.style.backgroundImage = `url(${avatar})`;