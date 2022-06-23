const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const photoPopup = document.querySelector('.popup_type_photo');

const editFormElement = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_occupation');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const cardsListElement = document.querySelector('.elements__container');
const cardFormElement = document.querySelector('.popup__form_type_add');
const cardInputPlaceElement = cardFormElement.querySelector('.popup__input_type_place');
const cardInputImageElement = cardFormElement.querySelector('.popup__input_type_image');
const cardTemplateElement = document.querySelector('.card-template');

const popupList = document.querySelectorAll('.popup')

/* Функции для открытия и закрытия попапов*/
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener ('keydown', closeByEsc);
};

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener ('keydown', closeByEsc);
};

/* Функция для закрытия по Esc*/
const closeByEsc = (evt) => {
    const openedPopup = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup (openedPopup)
    }
};

/* Функция выбора карточки*/
const getCardByEvent = e => e.currentTarget.closest('.card');

/* Функция удаления карточки*/
const deleteCard = e => {
    const card = getCardByEvent(e);
    card.remove();
}

/* Функция создания карточки*/
const createCard = (nameValue, linkValue) => {
    const card = cardTemplateElement.content
        .querySelector('.card')
        .cloneNode(true);
    const cardImage = card.querySelector('.card__img');
    card.querySelector('.card__title').textContent = nameValue;
    cardImage.src = linkValue;
    card.querySelector('.card__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like_active');
      });
    card.querySelector('.card__trash').addEventListener('click', deleteCard);
    cardImage.addEventListener('click', e => {
        openPhotoPopup(e);
      });
    return card;
};

/* Функция добавления карточки*/
const addCard = (nameValue, linkValue) => {
    const card = createCard(nameValue, linkValue);
    cardsListElement.prepend(card);
};

const handleAddCardSubmit = e => {
    e.preventDefault();
    const nameValue = cardInputPlaceElement.value;
    const linkValue = cardInputImageElement.value;
    addCard(nameValue, linkValue);
    closePopup(addPopup);
    cardFormElement.reset();
};

initialCards.forEach(card => addCard(card.name, card.link));

cardFormElement.addEventListener('submit', handleAddCardSubmit);

/* Открыть попап с картинкой*/
function openPhotoPopup(e) {
    const card = getCardByEvent(e); 
    photoPopup.querySelector(".popup__img").src = card.querySelector('.card__img').src;
    photoPopup.querySelector(".popup__img-title").textContent = card.querySelector('.card__title').textContent;
    photoPopup.querySelector(".popup__img").alt = card.querySelector('.card__title').textContent;
    openPopup(photoPopup);
};




/* Что будет, если ткнуть на кнопку открытия*/
editButton.addEventListener('click', function(){
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(editPopup);
});

addButton.addEventListener('click', function(){
    openPopup(addPopup);
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



editFormElement.addEventListener('submit', function(event){
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(editPopup);
});







enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}); 

