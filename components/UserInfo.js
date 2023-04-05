export class UserInfo {
    constructor (name, job) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
    }
    // возвращает данные пользователя
    getUserInfo () {
        return ({
            name: this._name.textContent,
            job: this._job.textContent
        });
    }
    // добавляет новые данные на страницу; при создании экземпляра будет указано profile.name и profile.info
    setUserInfo (name, job) {
        this._name.textContent = name;
        this._job.textContent = job;
    }
}