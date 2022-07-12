import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {openPopup, closePopup} from './utils.js';


const buttonEdit = document.querySelector('.profile__edit');
const buttonAdd = document.querySelector('.profile__add');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');


const formElementEdit = document.querySelector('.popup__form_type_edit');
const formElementAdd = document.querySelector('.popup__form_type_add');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_occupation');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const cardInputPlaceElement = formElementAdd.querySelector('.popup__input_type_place');
const cardInputImageElement = formElementAdd.querySelector('.popup__input_type_image');
const cardContainer = document.querySelector('.elements__container');

const popupList = document.querySelectorAll('.popup');


const handleAddCardSubmit = e => {
    e.preventDefault();
    const nameValue = cardInputPlaceElement.value;
    const linkValue = cardInputImageElement.value;
    const card = new Card(nameValue, linkValue);
    const cardElement = card.generateCard();
    cardContainer.prepend(cardElement);
    closePopup(popupAdd);
    formElementAdd.reset();
    formValidator.toggleButtonState();
};

/* Сабмит попапа для профиля*/
formElementEdit.addEventListener('submit', function(event){
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEdit);
});

/* Сабмит попапа для карточек*/
formElementAdd.addEventListener('submit', handleAddCardSubmit);

/* Что будет, если ткнуть на кнопку открытия попапа для профиля*/
buttonEdit.addEventListener('click', function(){
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupEdit);
});

/* Что будет, если ткнуть на кнопку открытия попапа для карточек*/
buttonAdd.addEventListener('click', function(){
    openPopup(popupAdd);
});

/* Что будет, если ткнуть на кнопку закрытия или на оверлей*/
popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', e => {
        const isOverlay = e.target.classList.contains('popup');
        const isCloseBtn = e.target.classList.contains('popup__close');
        if (isOverlay || isCloseBtn) {
            closePopup(popupElement);
        }
    })
})


const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

const formList = document.querySelectorAll('.popup__form');

formList.forEach(formElement => {
    const formValidator = new FormValidator(config, formElement);
    formValidator.enableValidation();
})