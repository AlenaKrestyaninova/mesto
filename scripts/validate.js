const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //выбрать span с текстом ошибки
    inputElement.classList.remove(config.inputErrorClass); //удалить у инпута класс с ошибкой
    errorElement.classList.remove(config.errorClass); //удалить у спана активный класс
    errorElement.textContent = '';
};

const showInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //выбрать span с текстом ошибки
    inputElement.classList.add(config.inputErrorClass); //добавить инпуту класс с ошибкой
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(config.errorClass); //добавить спану активный класс
};

const checkInputValidity = (formElement, inputElement, config) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid);
};

const setDisabledButton = (buttonElement, config) => {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(config.inactiveButtonClass);
};

const setEnabledButton = (buttonElement, config) => {
    buttonElement.removeAttribute('disabled', true);
    buttonElement.classList.remove(config.inactiveButtonClass);
    
}

const toggleButtonState = (buttonElement, inputList, config) => {
    if (hasInvalidInput(inputList)) {
        setDisabledButton(buttonElement, config)
    } else {
        setEnabledButton(buttonElement, config)
    }
};

const setEventListeners = (formElement, config) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(buttonElement, inputList, config);
        });
    });
    toggleButtonState(buttonElement, inputList, config);
};

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, config);
    });
};

