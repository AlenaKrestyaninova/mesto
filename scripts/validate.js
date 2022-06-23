const hideInputError = (formElement, inputElement) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const showInputError = (formElement, inputElement) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
};

const checkInputValidity = (formElement, inputElement, config) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid)
};

const setDisabledButton = (buttonElement) => {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__submit_disabled');
};

const setEnabledButton = (buttonElement) => {
    buttonElement.removeAttribute('disabled', true);
    buttonElement.classList.remove('popup__submit_disabled');
}

const toggleButtonState = (buttonElement, inputList) => {
    if (hasInvalidInput(inputList)) {
        setDisabledButton(buttonElement)
    } else {
        setEnabledButton(buttonElement)
    }
};

const setEventListeners = (formElement, config) => {
    const { inputSelector, submitButtonSelector, ... restConfig } = config;
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, restConfig);
            toggleButtonState(buttonElement, inputList);
        });
    });
    toggleButtonState(buttonElement, inputList);
};

const enableValidation = (config) => {
    const { formSelector, ...restConfig } = config;
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, restConfig);
    });
};

