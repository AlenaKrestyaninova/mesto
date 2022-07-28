import {openPhotoPopup} from './../utils/utils.js';
import PopupWithImage from './../components/PopupWithImage.js';
//import popupPhoto from './../scripts/index.js';
//const popupPhoto = new PopupWithImage('.popup_type_photo');
import {handleCardClick} from './../scripts/index.js';

class Card {
    constructor (name, link, cardSelector, handleCardClick){
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
    }

    _getTemplate(){
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
      return cardElement;
    }

    _setEventListeners(){
      this._element.querySelector('.card__trash')
        .addEventListener('click', (evt) => {
          this._deleteCard(evt);
        });
      this._element.querySelector('.card__like')
        .addEventListener('click', (evt) => {
          this._likeCard(evt);
        });
      this._element.querySelector('.card__img')
        .addEventListener('click', () => {
          handleCardClick(this._name, this._link);
        });
    }

    _likeCard(evt){
      evt.preventDefault();
      evt.target.classList.toggle('card__like_active');
    }

    _deleteCard(evt){
      evt.preventDefault();
      this._element.remove();
    }

    generateCard(){
      this._element = this._getTemplate();

      this._element.querySelector('.card__title').textContent =this._name;
      this._element.querySelector('.card__img').src =this._link;
      this._element.querySelector('.card__img').alt =this._name;

      this._setEventListeners();

      return this._element;
    }
}



export default Card;