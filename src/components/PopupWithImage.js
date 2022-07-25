import {photoPopupImg, photoPopupText} from './constants.js';

class PopupWithImage extends Popup{
    constructor(popupSelector) {      
        super(popupSelector);
        this._name = this.querySelector('.popup__img');
        this._link = this.querySelector('.popup__img-title');
    };

    open(name, link) {
        super.open();
        this.photoPopupImg.src = link;
        this.photoPopupImg.alt = name;
        this.photoPopupText.textContent = name;
    };
}

export default PopupWithImage;