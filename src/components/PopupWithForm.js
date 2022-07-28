import Popup from './Popup.js';
import {formValidatorAdd} from './../scripts/index.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {      
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector);
        this._handleFormSubmit = handleFormSubmit;        
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
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
        formValidatorAdd.resetError();
        this._formElement.reset();
    };

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
            this._formElement.reset();
        });
    }
}
