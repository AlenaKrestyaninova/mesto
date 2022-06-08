const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const photoPopup = document.querySelector('.popup_type_photo');
const closeEditPopupButton = document.querySelector('.popup__close_type_edit');
const closeAddPopupButton = document.querySelector('.popup__close_type_add');
const closePhotoPopupButton = document.querySelector('.popup__close_type_photo');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_occupation');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle')

/* Функции для открытия и закрытия попапов*/
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

/* Что будет, если ткнуть на кнопку открытия*/
editButton.addEventListener('click', function(){
    openPopup(editPopup);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
});

addButton.addEventListener('click', function(){
    openPopup(addPopup);
});

/* Что будет, если ткнуть на кнопку закрытия*/
closeEditPopupButton.addEventListener('click', function() {
    closePopup(editPopup)
});

closeAddPopupButton.addEventListener('click', function() {
    closePopup(addPopup)
});

closePhotoPopupButton.addEventListener('click', function() {
    closePopup(photoPopup)
});



formElement.addEventListener('submit', function(event){
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(editPopup);
});

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const cardListElement = document.querySelector('.elements__container');
const cardFormElement = document.querySelector('.popup__form_type_add');
const cardInputPlaceElement = cardFormElement.querySelector('.popup__input_type_place');
const cardInputImageElement = cardFormElement.querySelector('.popup__input_type_image');
const cardTemplateElement = document.querySelector('.card-template');

const getCardByEvent = e => e.currentTarget.closest('.card');

const deleteCard = e => {
    const card = getCardByEvent(e);
    card.remove();
}

const createCard = (nameValue, linkValue) => {
    const card = cardTemplateElement.content
        .querySelector('.card')
        .cloneNode(true);
    card.querySelector('.card__title').textContent = nameValue;
    card.querySelector('.card__img').src = linkValue;
    card.querySelector('.card__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like_active');
      });
    card.querySelector('.card__trash').addEventListener('click', deleteCard);
    card.querySelector('.card__img').addEventListener('click', e => {
        openPhotoPopup(e);
      });
    return card;
};

const addCard = (nameValue, linkValue) => {
    const card = createCard(nameValue, linkValue);
    cardListElement.prepend(card);
};

const handleCardSubmit = e => {
    e.preventDefault();
    const nameValue = cardInputPlaceElement.value;
    const linkValue = cardInputImageElement.value;
    addCard(nameValue, linkValue);
    closePopup(addPopup);
    cardFormElement.reset();
}

initialCards.forEach(card => addCard(card.name, card.link))

cardFormElement.addEventListener('submit', handleCardSubmit);

/* Открыть попап с картинкой*/
function openPhotoPopup(e) {
  const card = getCardByEvent(e); 
    photoPopup.querySelector(".popup__img").src = card.querySelector('.card__img').src;
    photoPopup.querySelector(".popup__img-title").textContent = card.querySelector('.card__title').textContent;
    openPopup(photoPopup)
}