/* Открыть попап*/
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener ('keydown', closeByEsc);
};

/* Закрыть попап*/
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener ('keydown', closeByEsc);
};

/* Функция для закрытия по Esc*/
const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup (openedPopup)
    }
};

/* Открыть попап с картинкой*/
function openPhotoPopup(name, link) {
    const photoPopup = document.querySelector('.popup_type_photo');
    const photoPopupImg = photoPopup.querySelector('.popup__img');
    photoPopupImg.src = link;
    photoPopupImg.alt = name;
    const photoPopupText = photoPopup.querySelector('.popup__img-title');
    photoPopupText.textContent = name;
    openPopup(photoPopup);
};

export {openPopup, closePopup, closeByEsc, openPhotoPopup}