import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {      
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;        
        this._formElement = this._popupElement.querySelector('.popup__form');
    };


    setSubmitAction({ handleSubmitAction }) { 
        this._handleFormSubmit = handleSubmitAction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleFormSubmit();
        });
    }
}
