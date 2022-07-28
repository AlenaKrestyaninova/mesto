export default class UserInfo {
    constructor(nameSelector, jobSelector) {      
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;
        this._nameElement = document.querySelector(this._nameSelector);
        this._jobElement = document.querySelector(this._jobSelector);
    };

    getUserInfo(){
        const infoValues = {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        };
        return infoValues
    };

    setUserInfo(formValues){
        this._nameElement.textContent = formValues.name;
        this._jobElement.textContent = formValues.job;
    }
}
