const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
};

const showInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add('popup__input-error_active');
};

const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement);
    } else {
        showInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid)
};

const setDisabledButton = (buttonElement) => {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__submit_disabled');
};

const setEnabledButton = (buttonElement) => {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__submit_disabled');
}

const toggleButtonState = (buttonElement, inputList) => {
    if (hasInvalidInput(inputList)) {
        setDisabledButton(buttonElement)
    } else {
        setEnabledButton(buttonElement)
    }
};

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(`.popup__input`));
    const buttonElement = formElement.querySelector('.popup__submit');
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(buttonElement, inputList);
        });
    });
    toggleButtonState(buttonElement, inputList);
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(formElement => {
        setEventListeners(formElement);
    });
};

