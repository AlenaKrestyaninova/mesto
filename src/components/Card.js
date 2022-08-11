class Card {
    constructor (cardObj, cardSelector, handleCardClick, {userId, handleDeleteCard, handleLikeCard, handleDislikeCard}){
      this._name = cardObj.name;
      this._link = cardObj.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._id = userId;
      this._ownerId = cardObj.owner._id;
      this._likes = cardObj.likes;
      this._handleDeleteCard = handleDeleteCard;
      this._handleLikeCard = handleLikeCard;
      this._handleDislikeCard = handleDislikeCard;
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
      this._deleteButton.addEventListener('click', () => {
          this._handleDeleteCard(this);
        });
      this._likeButton.addEventListener('click', () => {
        if (this._likeButton.classList.contains('card__like_active')) {
          this._handleDislikeCard();
        } else {
          this._handleLikeCard();
        }
      });
      this._element.querySelector('.card__img').addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
    }

    like() {
      this._likeButton.classList.add('card__like_active');
    }

    dislike() {
      this._likeButton.classList.remove('card__like_active');
    }

    delete() {
      this._element.remove();
      this._element = null;
    }

    countLikes(likes) {
      if (likes.length === 0) {
        this._likeCounter.textContent = '0';
      } else {
        this._likeCounter.textContent = likes.length;
      }
    }

    generateCard(){
      this._element = this._getTemplate();

      this._element.querySelector('.card__title').textContent =this._name;
      this._element.querySelector('.card__img').src =this._link;
      this._element.querySelector('.card__img').alt =this._name;

      this._deleteButton = this._element.querySelector('.card__trash');
      this._likeButton = this._element.querySelector('.card__like');
      this._likeCounter = this._element.querySelector('.card__like-counter');

      if (this._id !== this._ownerId) {
        this._deleteButton.style.display = "none";
      }

      this.countLikes(this._likes);
      this._setEventListeners();

      return this._element;
    }
}



export default Card;