export class UserInfo {
    constructor (name, job, avatar) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
        this._avatar = document.querySelector(avatar)
    }
    // возвращает данные пользователя
    getUserInfo () {
        return ({
            name: this._name.textContent,
            job: this._job.textContent
        });
    }
    // добавляет новые данные на страницу; при создании экземпляра будет указано profile.name и profile.info
    setUserInfo ({name, job, avatar, id}) {
        this._name.textContent = name;
        this._job.textContent = job;
        this._avatar.src = avatar;
        this.userId = id;
        //this._avatar.style.backgroundImage = `url(${avatar})`;
    }
}