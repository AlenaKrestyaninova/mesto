const hideInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //выбрать span с текстом ошибки
    inputElement.classList.remove(inputErrorClass); //удалить у инпута класс с ошибкой
    errorElement.classList.remove(errorClass); //удалить у спана активный класс
    errorElement.textContent = '';
};

const showInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //выбрать span с текстом ошибки
    inputElement.classList.add(inputErrorClass); //добавить инпуту класс с ошибкой
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass); //добавить спану активный класс
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
    const { inactiveButtonClass } = config;
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass);
};

const setEnabledButton = (buttonElement, config) => {
    const { inactiveButtonClass } = config;
    buttonElement.removeAttribute('disabled', true);
    buttonElement.classList.remove(inactiveButtonClass);
    
}

const toggleButtonState = (buttonElement, inputList, config) => {
    if (hasInvalidInput(inputList)) {
        setDisabledButton(buttonElement, config)
    } else {
        setEnabledButton(buttonElement, config)
    }
};

const setEventListeners = (formElement, config) => {
    const { inputSelector, submitButtonSelector, ...restConfig} = config;
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, restConfig);
            toggleButtonState(buttonElement, inputList, restConfig);
        });
    });
    toggleButtonState(buttonElement, inputList, restConfig);
};

const enableValidation = (config) => {
    const { formSelector, ...restConfig} = config;
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, restConfig);
    });
};

