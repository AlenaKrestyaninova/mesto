import './../pages/index.css';

import {initialCards} from './../utils/initialCards.js';
import Card from './../components/Card';
import FormValidator from './../components/FormValidator.js';
import Section from './../components/Section.js';
import PopupWithImage from './../components/PopupWithImage.js';
import PopupWithForm from './../components/PopupWithForm.js';
import UserInfo from './../components/UserInfo.js';


const buttonEdit = document.querySelector('.profile__edit');
const buttonAdd = document.querySelector('.profile__add');


const formElementEdit = document.querySelector('.popup__form_type_edit');
const formElementAdd = document.querySelector('.popup__form_type_add');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_occupation');

const cardContainer = document.querySelector('.elements__container');



/* Создание карточек*/
const createCard = (nameValue, linkValue) =>{
    const card = new Card(nameValue, linkValue, '.card-template');
    const cardElement = card.generateCard();
    return cardElement;
}

const addCard = (nameValue, linkValue) =>{
    const cardElement = createCard(nameValue, linkValue);
    cardContainer.prepend(cardElement);
}


const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

/* Что будет, если ткнуть на кнопку открытия попапа для профиля*/
buttonEdit.addEventListener('click', function(){
    const dataToForm = userInfo.getUserInfo();
    nameInput.value = dataToForm.name;
    jobInput.value = dataToForm.job;
    popupEdit.open();
    formValidatorEdit.resetError();
});

/* Что будет, если ткнуть на кнопку открытия попапа для карточек*/
buttonAdd.addEventListener('click', function(){
    popupAdd.open();
    formValidatorAdd.resetError();
});


/* Создаем экземпляр секции*/
const cardsList = new Section ({
    items: initialCards,
    renderer: (cardItem) => {
        addCard(cardItem.name, cardItem.link);
    }},
    '.elements__container'
);

cardsList.renderItems();

/* Создаем экземпляр попапа с картинкой*/
const popupPhoto = new PopupWithImage('.popup_type_photo');
popupPhoto.setEventListeners();

export const handleCardClick = (name, link) => {
    popupPhoto.open(name, link)
};

/* Создаем экземпляр попапа для добавления карточек*/
const popupAdd = new PopupWithForm(
    '.popup_type_add', {
        handleFormSubmit: (formValues) => {
            addCard(formValues.name, formValues.link);
        }
    }); 
popupAdd.setEventListeners();

/* Создаем экземпляр попапа для редактирования профиля*/
const popupEdit = new PopupWithForm(
    '.popup_type_edit', {
        handleFormSubmit: (formValues) => {
            userInfo.setUserInfo(formValues);
        }
    }); 
popupEdit.setEventListeners();


const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};


/* Создаем экземпляры классов форм-валидаторов*/
export const formValidatorAdd = new FormValidator(config, formElementAdd);
formValidatorAdd.enableValidation();

export const formValidatorEdit = new FormValidator(config, formElementEdit);
formValidatorEdit.enableValidation();