import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {      
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;        
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._submitButton = this._popupElement.querySelector('.popup__submit');
        this._submitButtonContent = this._submitButton.textContent;
    };

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        })
        return formValues;
    } 

    close() {
        super.close();
        this._formElement.reset();
    };

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    };

    showLoading(isloading, text) {
        if (isloading) {
            this._submitButton.disabled = true;
            this._submitButton.textContent = text;
        } else {
            this._submitButton.disabled = false;
            this._submitButton.textContent = this._submitButtonContent;
        };
    }
}

