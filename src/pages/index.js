import './../pages/index.css';

import Api from '../components/Api.js';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import {buttonEdit, buttonAdd, buttonAvatarEdit, formElementEdit, formElementAdd, formElementAvatar, nameInput, aboutInput, cardContainer, config} from '../utils/constants.js';

const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar-img');

const api = new Api({
    host: "https://mesto.nomoreparties.co/v1/cohort-47",
    headers: {
        authorization: "c6a18f64-a17b-491d-a60f-79193e16e124",
        "Content-Type": "application/json",
    },
});

let userId; 


const handleCardClick = (name, link) => {
    popupPhoto.open(name, link)
};

/* Создание карточек*/
const createCard = (cardObj) =>{
    const card = new Card(cardObj, '.card-template', handleCardClick, {
        userId: userId,
        handleDeleteCard: ()=>{
            popupDelete.open();
            popupDelete.setSubmitAction({
                handleSubmitAction: ()=>{
                    api.deleteCard(cardObj._id)
                        .then(()=>{
                            card.delete();
                            popupDelete.close()
                        })
                        .catch((err) => console.log(err))
                }
            })
        },
        handleLikeCard: ()=>{
            api.likeCard(cardObj._id)
                .then((res)=>{
                    card.countLikes(res.likes);
                    card.like();
                })
                .catch((err) => console.log(err))
        },
        handleDislikeCard: ()=>{
            api.dislikeCard(cardObj._id)
                .then((res)=>{
                    card.countLikes(res.likes);
                    card.dislike();
                })
                .catch((err) => console.log(err))
        },
    });
    const cardElement = card.generateCard();
    return cardElement;
    
}

// const addCard = (cardObj) => {
//     const cardElement = createCard(cardObj); 
//     cardContainer.prepend(cardElement);
// }


const cardsList = new Section ({
    items: [],
    renderer: (cardItem) => {
        const cardElement = createCard(cardItem);
        cardsList.addItem(cardElement); 
    }},
    '.elements__container'
);



/* Получение данных сервера при загрузке страницы */
Promise.all([api.getUserInfo(), api.getCards()])
    .then(([data, cards]) => {
        userId = data._id;
        userInfo.setUserInfo(data);
        cardsList.setCardInfo(cards);
        cardsList.renderItems(cards);
    })
    .catch((err) => console.log(err));





/* Хендлер сабмита для попапа редактирования профиля*/
function submitEditPopup(formValues){
    popupEdit.showLoading(true, 'Сохранение...');
    api.setUserInfo(formValues)
        .then((res)=>{
            userInfo.setUserInfo(res);
            popupEdit.close()
        })
        .catch((err) => console.log(err))
        .finally(()=>{
            popupEdit.showLoading(false);
        })
}

/* Хендлер сабмита для попапа добавления карточек*/
function submitAddPopup(cardObj){
    popupAdd.showLoading(true, 'Сохранение...');
    api.createCard(cardObj)
        .then((res)=>{
            const cardElement = createCard(res)
            cardsList.addItem(cardElement);
            popupAdd.close()
        })
        .catch((err) => console.log(err))
        .finally(()=>{
            popupAdd.showLoading(false);
        })
}

/* Хендлер сабмита для попапа редактирования аватара*/
function submitAvatarPopup(formValues){
    popupAvatar.showLoading(true, 'Сохранение...');
    api.setAvatar(formValues)
            .then((res)=>{
                userInfo.setUserInfo(res);
                popupAvatar.close()
            })
            .catch((err) => console.log(err))
            .finally(()=>{
                popupAvatar.showLoading(false);
            })
}

/* Создаем экземпляр попапа с картинкой*/
const popupPhoto = new PopupWithImage('.popup_type_photo');
popupPhoto.setEventListeners();

/* Создаем экземпляр попапа для добавления карточек*/
const popupAdd = new PopupWithForm(
    '.popup_type_add', {handleFormSubmit: submitAddPopup}
); 
popupAdd.setEventListeners();

/* Создаем экземпляр попапа для редактирования профиля*/
const popupEdit = new PopupWithForm(
    '.popup_type_edit', {handleFormSubmit: submitEditPopup}
); 
popupEdit.setEventListeners();

/* Создаем экземпляр попапа для удаления карточки*/
const popupDelete = new PopupWithConfirm(
    '.popup_type_delete', {
        handleFormSubmit: () => {},
    }); 
popupDelete.setEventListeners();

/* Создаем экземпляр попапа для редактирования аватара*/
const popupAvatar = new PopupWithForm(
    '.popup_type_avatar', {handleFormSubmit: submitAvatarPopup}
); 
popupAvatar.setEventListeners();



/* Создаем экземпляры классов форм-валидаторов*/
const formValidatorAdd = new FormValidator(config, formElementAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(config, formElementEdit);
formValidatorEdit.enableValidation();

const formValidatorAvatar = new FormValidator(config, formElementAvatar);
formValidatorAvatar.enableValidation();


/* Что будет, если ткнуть на кнопку открытия попапа для профиля*/
buttonEdit.addEventListener('click', function(){
    const dataToForm = userInfo.getUserInfo();
    nameInput.value = dataToForm.name;
    aboutInput.value = dataToForm.about;
    popupEdit.open();
    formValidatorEdit.resetValidation();
});

/* Что будет, если ткнуть на кнопку открытия попапа для карточек*/
buttonAdd.addEventListener('click', function(){
    popupAdd.open();
    formValidatorAdd.resetValidation();
});

/* Что будет, если ткнуть на кнопку редактирования аватара*/
buttonAvatarEdit.addEventListener('click', function(){
    formValidatorAvatar.resetValidation();
    popupAvatar.open();
});


