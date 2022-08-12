import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {      
        super(popupSelector);
        this._popupImg = this._popupElement.querySelector('.popup__img');
        this._popupTitle = this._popupElement.querySelector('.popup__img-title');
    };

    open(name, link) {
        super.open();
        this._popupImg.src = link;
        this._popupImg.alt = name;
        this._popupTitle.textContent = name;
    };
}
