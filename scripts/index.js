const editButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_occupation');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle')

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
};

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', function(){
    openPopup(popup);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
});

closePopupButton.addEventListener('click', function() {
    closePopup(popup)
});

formElement.addEventListener('submit', function(event){
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popup);
});
