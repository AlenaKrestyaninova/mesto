import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector) {      
        this._popupSelector = popupSelector;
    };

    open() {
        this.classList.add('popup_opened');
        document.addEventListener ('keydown', closeByEsc);
    };

    close() {
        this.classList.remove('popup_opened');
        document.removeEventListener ('keydown', closeByEsc);
    };

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_opened');
            close(openedPopup)
        }
    };

    setEventListeners(){
        popupElement.addEventListener('click', e => {
            const isOverlay = e.target.classList.contains('popup');
            const isCloseBtn = e.target.classList.contains('popup__close');
            if (isOverlay || isCloseBtn) {
                close(popupElement);
            }
        })
    }
}
