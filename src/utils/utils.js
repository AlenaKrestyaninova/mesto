import {photoPopup, photoPopupImg, photoPopupText} from './constants.js';

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

// /* Функция для закрытия по Esc*/
// const closeByEsc = (evt) => {
//     if (evt.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened');
//         closePopup (openedPopup)
//     }
// };

// /* Открыть попап с картинкой*/
// function openPhotoPopup(name, link) {
//     photoPopupImg.src = link;
//     photoPopupImg.alt = name;
//     photoPopupText.textContent = name;
//     openPopup(photoPopup);
// };

export {openPopup, closePopup}