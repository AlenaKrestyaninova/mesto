class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }

    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); //выбрать span с текстом ошибки
        inputElement.classList.remove(this._config.inputErrorClass); //удалить у инпута класс с ошибкой
        errorElement.classList.remove(this._config.errorClass); //удалить у спана активный класс
        errorElement.textContent = '';
    };

    _showInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); //выбрать span с текстом ошибки
        inputElement.classList.add(this._config.inputErrorClass); //добавить инпуту класс с ошибкой
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._config.errorClass); //добавить спану активный класс
    };
    
    _checkInputValidity (inputElement) {
        
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    };
    
    _hasInvalidInput () {
        const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        return inputList.some(inputElement => !inputElement.validity.valid);
    };

    _setDisabledButton () {
        const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(this._config.inactiveButtonClass);
    };
    
    _setEnabledButton () {
        const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        buttonElement.removeAttribute('disabled', true);
        buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
    
    toggleButtonState () {
        if (this._hasInvalidInput()) {
            this._setDisabledButton()
        } else {
            this._setEnabledButton()
        }
    };
    
    _setEventListeners () {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        inputList.forEach((inputElement) => { 
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement); 
                this.toggleButtonState(); 
            }); 
        });
        //this.toggleButtonState();
    };
    
    enableValidation () {
        this._setEventListeners();
    };
}

export default FormValidator;