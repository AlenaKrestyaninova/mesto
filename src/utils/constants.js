const buttonEdit = document.querySelector('.profile__edit');
const buttonAdd = document.querySelector('.profile__add');
const buttonAvatarEdit = document.querySelector('.profile__avatar');

const formElementEdit = document.querySelector('.popup__form_type_edit');
const formElementAdd = document.querySelector('.popup__form_type_add');
const formElementAvatar = document.querySelector('.popup__form_type_avatar');

const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');


const cardContainer = document.querySelector('.elements__container');

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
};



export {buttonEdit, buttonAdd, buttonAvatarEdit, formElementEdit, formElementAdd, formElementAvatar, nameInput, aboutInput, cardContainer, config};