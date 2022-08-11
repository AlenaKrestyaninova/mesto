export default class UserInfo {
    constructor(nameSelector, aboutSelector, avatarSelector) {      
        this._nameSelector = nameSelector;
        this._aboutSelector = aboutSelector;
        this._avatarSelector = avatarSelector;
        this._nameElement = document.querySelector(this._nameSelector);
        this._aboutElement = document.querySelector(this._aboutSelector);
        this._avatarElement = document.querySelector(this._avatarSelector);
    };

    getUserInfo(){
        const infoValues = {
            name: this._nameElement.textContent,
            about: this._aboutElement.textContent,
            avatar: this._avatarElement.src
        };
        return infoValues
    };

    setUserInfo(formValues){
        this._nameElement.textContent = formValues.name;
        this._aboutElement.textContent = formValues.about;
        this._avatarElement.src = formValues.avatar;
    }
}
