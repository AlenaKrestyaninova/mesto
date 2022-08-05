/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(name, link, cardSelector, handleCardClick) {
    _classCallCheck(this, Card);

    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.querySelector('.card__trash').addEventListener('click', function () {
        _this._deleteCard();
      });

      this._element.querySelector('.card__like').addEventListener('click', function (evt) {
        _this._likeCard(evt);
      });

      this._element.querySelector('.card__img').addEventListener('click', function () {
        _this._handleCardClick(_this._name, _this._link);
      });
    }
  }, {
    key: "_likeCard",
    value: function _likeCard(evt) {
      evt.target.classList.toggle('card__like_active');
    }
  }, {
    key: "_deleteCard",
    value: function _deleteCard() {
      this._element.remove();
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector('.card__title').textContent = this._name;
      this._element.querySelector('.card__img').src = this._link;
      this._element.querySelector('.card__img').alt = this._name;

      this._setEventListeners();

      return this._element;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    _classCallCheck(this, FormValidator);

    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _createClass(FormValidator, [{
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error")); //выбрать span с текстом ошибки


      inputElement.classList.remove(this._config.inputErrorClass); //удалить у инпута класс с ошибкой

      errorElement.classList.remove(this._config.errorClass); //удалить у спана активный класс

      errorElement.textContent = '';
    }
  }, {
    key: "_showInputError",
    value: function _showInputError(inputElement) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error")); //выбрать span с текстом ошибки


      inputElement.classList.add(this._config.inputErrorClass); //добавить инпуту класс с ошибкой

      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._config.errorClass); //добавить спану активный класс
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (inputElement.validity.valid) {
        this._hideInputError(inputElement);
      } else {
        this._showInputError(inputElement);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_setDisabledButton",
    value: function _setDisabledButton() {
      this._buttonElement.setAttribute('disabled', true);

      this._buttonElement.classList.add(this._config.inactiveButtonClass);
    }
  }, {
    key: "_setEnabledButton",
    value: function _setEnabledButton() {
      this._buttonElement.removeAttribute('disabled', true);

      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._setDisabledButton();
      } else {
        this._setEnabledButton();
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });

      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this._checkInputValidity(inputElement);

          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "resetError",
    value: function resetError() {
      var _this2 = this;

      this._inputList.forEach(function (inputElement) {
        _this2._hideInputError(inputElement);
      });

      this._toggleButtonState();
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add('popup_opened');

      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove('popup_opened');

      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popupElement.addEventListener('click', function (e) {
        var isOverlay = e.target.classList.contains('popup');
        var isCloseBtn = e.target.classList.contains('popup__close');

        if (isOverlay || isCloseBtn) {
          _this.close();
        }
      });
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, _ref) {
    var _this;

    var handleFormSubmit = _ref.handleFormSubmit;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._popupSelector = popupSelector;
    _this._popupElement = document.querySelector(_this._popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._formElement = _this._popupElement.querySelector('.popup__form');
    _this._inputList = _this._popupElement.querySelectorAll('.popup__input');
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var formValues = {};

      this._inputList.forEach(function (input) {
        formValues[input.name] = input.value;
      });

      return formValues;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._formElement.reset();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._formElement.addEventListener('submit', function (e) {
        e.preventDefault();

        _this2._handleFormSubmit(_this2._getInputValues());

        _this2.close();

        _this2._formElement.reset();
      });
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._popupElement = document.querySelector(_this._popupSelector);
    _this._popupImg = _this._popupElement.querySelector('.popup__img');
    _this._popupTitle = _this._popupElement.querySelector('.popup__img-title');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);

      this._popupImg.src = link;
      this._popupImg.alt = name;
      this._popupTitle.textContent = name;
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._renderedItems.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      this._container.append(item);
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(nameSelector, jobSelector) {
    _classCallCheck(this, UserInfo);

    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._nameElement = document.querySelector(this._nameSelector);
    this._jobElement = document.querySelector(this._jobSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var infoValues = {
        name: this._nameElement.textContent,
        job: this._jobElement.textContent
      };
      return infoValues;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(formValues) {
      this._nameElement.textContent = formValues.name;
      this._jobElement.textContent = formValues.job;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonAdd": () => (/* binding */ buttonAdd),
/* harmony export */   "buttonEdit": () => (/* binding */ buttonEdit),
/* harmony export */   "cardContainer": () => (/* binding */ cardContainer),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "formElementAdd": () => (/* binding */ formElementAdd),
/* harmony export */   "formElementEdit": () => (/* binding */ formElementEdit),
/* harmony export */   "jobInput": () => (/* binding */ jobInput),
/* harmony export */   "nameInput": () => (/* binding */ nameInput)
/* harmony export */ });
var buttonEdit = document.querySelector('.profile__edit');
var buttonAdd = document.querySelector('.profile__add');
var formElementEdit = document.querySelector('.popup__form_type_edit');
var formElementAdd = document.querySelector('.popup__form_type_add');
var nameInput = document.querySelector('.popup__input_type_name');
var jobInput = document.querySelector('.popup__input_type_occupation');
var cardContainer = document.querySelector('.elements__container');
var config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};


/***/ }),

/***/ "./src/utils/initialCards.js":
/*!***********************************!*\
  !*** ./src/utils/initialCards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards)
/* harmony export */ });
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formValidatorAdd": () => (/* binding */ formValidatorAdd),
/* harmony export */   "formValidatorEdit": () => (/* binding */ formValidatorEdit)
/* harmony export */ });
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_initialCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/initialCards.js */ "./src/utils/initialCards.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");









var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]('.profile__title', '.profile__subtitle');

var handleCardClick = function handleCardClick(name, link) {
  popupPhoto.open(name, link);
};
/* Создание карточек*/


var createCard = function createCard(nameValue, linkValue) {
  var card = new _components_Card__WEBPACK_IMPORTED_MODULE_2__["default"](nameValue, linkValue, '.card-template', handleCardClick);
  var cardElement = card.generateCard();
  return cardElement;
};

var addCard = function addCard(nameValue, linkValue) {
  var cardElement = createCard(nameValue, linkValue);
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.cardContainer.prepend(cardElement);
};
/* Создаем экземпляр секции*/


var cardsList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  items: _utils_initialCards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards,
  renderer: function renderer(cardItem) {
    addCard(cardItem.name, cardItem.link);
  }
}, '.elements__container');
cardsList.renderItems();
/* Создаем экземпляр попапа с картинкой*/

var popupPhoto = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup_type_photo');
popupPhoto.setEventListeners();
/* Создаем экземпляр попапа для добавления карточек*/

var popupAdd = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_type_add', {
  handleFormSubmit: function handleFormSubmit(formValues) {
    addCard(formValues.name, formValues.link);
  }
});
popupAdd.setEventListeners();
/* Создаем экземпляр попапа для редактирования профиля*/

var popupEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_type_edit', {
  handleFormSubmit: function handleFormSubmit(formValues) {
    userInfo.setUserInfo(formValues);
  }
});
popupEdit.setEventListeners();
/* Создаем экземпляры классов форм-валидаторов*/

var formValidatorAdd = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.config, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formElementAdd);
formValidatorAdd.enableValidation();
var formValidatorEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.config, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formElementEdit);
formValidatorEdit.enableValidation();
/* Что будет, если ткнуть на кнопку открытия попапа для профиля*/

_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.buttonEdit.addEventListener('click', function () {
  var dataToForm = userInfo.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.nameInput.value = dataToForm.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.jobInput.value = dataToForm.job;
  popupEdit.open();
  formValidatorEdit.resetError();
});
/* Что будет, если ткнуть на кнопку открытия попапа для карточек*/

_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.buttonAdd.addEventListener('click', function () {
  popupAdd.open();
  formValidatorAdd.resetError();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNaLElBQVQ7RUFDQWUsZ0JBQWdCLENBQUNLLFVBQWpCO0FBQ0gsQ0FIRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy91dGlscy9pbml0aWFsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbGluaywgY2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spe1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fbGluayA9IGxpbms7XHJcbiAgICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUZW1wbGF0ZSgpe1xyXG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAgIC5jb250ZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcclxuICAgICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3RyYXNoJylcclxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9kZWxldGVDYXJkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UnKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2xpa2VDYXJkKGV2dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltZycpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9saWtlQ2FyZChldnQpe1xyXG4gICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRfX2xpa2VfYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2RlbGV0ZUNhcmQoKXtcclxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNhcmQoKXtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcblxyXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190aXRsZScpLnRleHRDb250ZW50ID10aGlzLl9uYW1lO1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWcnKS5zcmMgPXRoaXMuX2xpbms7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltZycpLmFsdCA9dGhpcy5fbmFtZTtcclxuXHJcbiAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBmb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9jb25maWcuaW5wdXRTZWxlY3RvcikpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVJbnB1dEVycm9yIChpbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7IC8v0LLRi9Cx0YDQsNGC0Ywgc3BhbiDRgSDRgtC10LrRgdGC0L7QvCDQvtGI0LjQsdC60LhcclxuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuaW5wdXRFcnJvckNsYXNzKTsgLy/Rg9C00LDQu9C40YLRjCDRgyDQuNC90L/Rg9GC0LAg0LrQu9Cw0YHRgSDRgSDQvtGI0LjQsdC60L7QuVxyXG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5lcnJvckNsYXNzKTsgLy/Rg9C00LDQu9C40YLRjCDRgyDRgdC/0LDQvdCwINCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBfc2hvd0lucHV0RXJyb3IgKGlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTsgLy/QstGL0LHRgNCw0YLRjCBzcGFuINGBINGC0LXQutGB0YLQvtC8INC+0YjQuNCx0LrQuFxyXG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5pbnB1dEVycm9yQ2xhc3MpOyAvL9C00L7QsdCw0LLQuNGC0Ywg0LjQvdC/0YPRgtGDINC60LvQsNGB0YEg0YEg0L7RiNC40LHQutC+0LlcclxuICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmVycm9yQ2xhc3MpOyAvL9C00L7QsdCw0LLQuNGC0Ywg0YHQv9Cw0L3RgyDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcclxuICAgIH07XHJcbiAgICBcclxuICAgIF9jaGVja0lucHV0VmFsaWRpdHkgKGlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIF9oYXNJbnZhbGlkSW5wdXQgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZShpbnB1dEVsZW1lbnQgPT4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9zZXREaXNhYmxlZEJ1dHRvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIF9zZXRFbmFibGVkQnV0dG9uICgpIHtcclxuICAgICAgICB0aGlzLl9idXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXREaXNhYmxlZEJ1dHRvbigpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0RW5hYmxlZEJ1dHRvbigpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHsgXHJcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7IFxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlc2V0RXJyb3IoKSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVuYWJsZVZhbGlkYXRpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHsgICAgICBcclxuICAgICAgICB0aGlzLl9wb3B1cFNlbGVjdG9yID0gcG9wdXBTZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3BvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKVxyXG47ICAgIH07XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyICgna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIH07XHJcblxyXG4gICAgX2hhbmRsZUVzY0Nsb3NlKGV2dCl7XHJcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT3ZlcmxheSA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXAnKTtcclxuICAgICAgICAgICAgY29uc3QgaXNDbG9zZUJ0biA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIGlmIChpc092ZXJsYXkgfHwgaXNDbG9zZUJ0bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvciwge2hhbmRsZUZvcm1TdWJtaXR9KSB7ICAgICAgXHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBTZWxlY3RvciA9IHBvcHVwU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9wb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZm9ybVZhbHVlcztcclxuICAgIH0gXHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudC5yZXNldCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JtRWxlbWVudC5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7ICAgICAgXHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9wb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9wb3B1cEltZyA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltZycpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwVGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWctdGl0bGUnKTtcclxuICAgIH07XHJcblxyXG4gICAgb3BlbihuYW1lLCBsaW5rKSB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwSW1nLnNyYyA9IGxpbms7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBJbWcuYWx0ID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9wb3B1cFRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChpdGVtKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lU2VsZWN0b3IsIGpvYlNlbGVjdG9yKSB7ICAgICAgXHJcbiAgICAgICAgdGhpcy5fbmFtZVNlbGVjdG9yID0gbmFtZVNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuX2pvYlNlbGVjdG9yID0gam9iU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX25hbWVTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fam9iRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fam9iU2VsZWN0b3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRVc2VySW5mbygpe1xyXG4gICAgICAgIGNvbnN0IGluZm9WYWx1ZXMgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBqb2I6IHRoaXMuX2pvYkVsZW1lbnQudGV4dENvbnRlbnRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBpbmZvVmFsdWVzXHJcbiAgICB9O1xyXG5cclxuICAgIHNldFVzZXJJbmZvKGZvcm1WYWx1ZXMpe1xyXG4gICAgICAgIHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50ID0gZm9ybVZhbHVlcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2pvYkVsZW1lbnQudGV4dENvbnRlbnQgPSBmb3JtVmFsdWVzLmpvYjtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBidXR0b25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQnKTtcclxuY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2FkZCcpO1xyXG5cclxuXHJcbmNvbnN0IGZvcm1FbGVtZW50RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybV90eXBlX2VkaXQnKTtcclxuY29uc3QgZm9ybUVsZW1lbnRBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm1fdHlwZV9hZGQnKTtcclxuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX25hbWUnKTtcclxuY29uc3Qgam9iSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X3R5cGVfb2NjdXBhdGlvbicpO1xyXG5cclxuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxyXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3N1Ym1pdCcsXHJcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3N1Ym1pdF9kaXNhYmxlZCcsXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9lcnJvcicsXHJcbiAgICBlcnJvckNsYXNzOiAncG9wdXBfX2lucHV0LWVycm9yX2FjdGl2ZSdcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHtidXR0b25FZGl0LCBidXR0b25BZGQsIGZvcm1FbGVtZW50RWRpdCwgZm9ybUVsZW1lbnRBZGQsIG5hbWVJbnB1dCwgam9iSW5wdXQsIGNhcmRDb250YWluZXIsIGNvbmZpZ307IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ9CQ0YDRhdGL0LcnLFxyXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2Fya2h5ei5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAn0KfQtdC70Y/QsdC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCcsXHJcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvY2hlbHlhYmluc2stb2JsYXN0LmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICfQmNCy0LDQvdC+0LLQvicsXHJcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvaXZhbm92by5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAn0JrQsNC80YfQsNGC0LrQsCcsXHJcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2FtY2hhdGthLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICfQpdC+0LvQvNC+0LPQvtGA0YHQutC40Lkg0YDQsNC50L7QvScsXHJcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2hvbG1vZ29yc2t5LXJheW9uLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICfQkdCw0LnQutCw0LsnLFxyXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2JhaWthbC5qcGcnXHJcbiAgICB9XHJcbl07IFxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi8uLi9wYWdlcy9pbmRleC5jc3MnO1xyXG5cclxuaW1wb3J0IHtpbml0aWFsQ2FyZHN9IGZyb20gJy4uL3V0aWxzL2luaXRpYWxDYXJkcy5qcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzJztcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xyXG5pbXBvcnQge2J1dHRvbkVkaXQsIGJ1dHRvbkFkZCwgZm9ybUVsZW1lbnRFZGl0LCBmb3JtRWxlbWVudEFkZCwgbmFtZUlucHV0LCBqb2JJbnB1dCwgY2FyZENvbnRhaW5lciwgY29uZmlnfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnO1xyXG5cclxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oJy5wcm9maWxlX190aXRsZScsICcucHJvZmlsZV9fc3VidGl0bGUnKTtcclxuXHJcbmNvbnN0IGhhbmRsZUNhcmRDbGljayA9IChuYW1lLCBsaW5rKSA9PiB7XHJcbiAgICBwb3B1cFBob3RvLm9wZW4obmFtZSwgbGluaylcclxufTtcclxuXHJcbi8qINCh0L7Qt9C00LDQvdC40LUg0LrQsNGA0YLQvtGH0LXQuiovXHJcbmNvbnN0IGNyZWF0ZUNhcmQgPSAobmFtZVZhbHVlLCBsaW5rVmFsdWUpID0+e1xyXG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKG5hbWVWYWx1ZSwgbGlua1ZhbHVlLCAnLmNhcmQtdGVtcGxhdGUnLCBoYW5kbGVDYXJkQ2xpY2spO1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBhZGRDYXJkID0gKG5hbWVWYWx1ZSwgbGlua1ZhbHVlKSA9PntcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY3JlYXRlQ2FyZChuYW1lVmFsdWUsIGxpbmtWYWx1ZSk7XHJcbiAgICBjYXJkQ29udGFpbmVyLnByZXBlbmQoY2FyZEVsZW1lbnQpO1xyXG59XHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YAg0YHQtdC60YbQuNC4Ki9cclxuY29uc3QgY2FyZHNMaXN0ID0gbmV3IFNlY3Rpb24gKHtcclxuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgICByZW5kZXJlcjogKGNhcmRJdGVtKSA9PiB7XHJcbiAgICAgICAgYWRkQ2FyZChjYXJkSXRlbS5uYW1lLCBjYXJkSXRlbS5saW5rKTtcclxuICAgIH19LFxyXG4gICAgJy5lbGVtZW50c19fY29udGFpbmVyJ1xyXG4pO1xyXG5cclxuY2FyZHNMaXN0LnJlbmRlckl0ZW1zKCk7XHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINGBINC60LDRgNGC0LjQvdC60L7QuSovXHJcbmNvbnN0IHBvcHVwUGhvdG8gPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5wb3B1cF90eXBlX3Bob3RvJyk7XHJcbnBvcHVwUGhvdG8uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcblxyXG5cclxuLyog0KHQvtC30LTQsNC10Lwg0Y3QutC30LXQvNC/0LvRj9GAINC/0L7Qv9Cw0L/QsCDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LXQuiovXHJcbmNvbnN0IHBvcHVwQWRkID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgICAnLnBvcHVwX3R5cGVfYWRkJywge1xyXG4gICAgICAgIGhhbmRsZUZvcm1TdWJtaXQ6IChmb3JtVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZENhcmQoZm9ybVZhbHVlcy5uYW1lLCBmb3JtVmFsdWVzLmxpbmspO1xyXG4gICAgICAgIH1cclxuICAgIH0pOyBcclxucG9wdXBBZGQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8qINCh0L7Qt9C00LDQtdC8INGN0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y8qL1xyXG5jb25zdCBwb3B1cEVkaXQgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICAgICcucG9wdXBfdHlwZV9lZGl0Jywge1xyXG4gICAgICAgIGhhbmRsZUZvcm1TdWJtaXQ6IChmb3JtVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGZvcm1WYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pOyBcclxucG9wdXBFZGl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyog0KHQvtC30LTQsNC10Lwg0Y3QutC30LXQvNC/0LvRj9GA0Ysg0LrQu9Cw0YHRgdC+0LIg0YTQvtGA0Lwt0LLQsNC70LjQtNCw0YLQvtGA0L7QsiovXHJcbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdG9yQWRkID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudEFkZCk7XHJcbmZvcm1WYWxpZGF0b3JBZGQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0b3JFZGl0ID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudEVkaXQpO1xyXG5mb3JtVmFsaWRhdG9yRWRpdC5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5cclxuLyog0KfRgtC+INCx0YPQtNC10YIsINC10YHQu9C4INGC0LrQvdGD0YLRjCDQvdCwINC60L3QvtC/0LrRgyDQvtGC0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsCDQtNC70Y8g0L/RgNC+0YTQuNC70Y8qL1xyXG5idXR0b25FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGRhdGFUb0Zvcm0gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gICAgbmFtZUlucHV0LnZhbHVlID0gZGF0YVRvRm9ybS5uYW1lO1xyXG4gICAgam9iSW5wdXQudmFsdWUgPSBkYXRhVG9Gb3JtLmpvYjtcclxuICAgIHBvcHVwRWRpdC5vcGVuKCk7XHJcbiAgICBmb3JtVmFsaWRhdG9yRWRpdC5yZXNldEVycm9yKCk7XHJcbn0pO1xyXG5cclxuLyog0KfRgtC+INCx0YPQtNC10YIsINC10YHQu9C4INGC0LrQvdGD0YLRjCDQvdCwINC60L3QvtC/0LrRgyDQvtGC0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsCDQtNC70Y8g0LrQsNGA0YLQvtGH0LXQuiovXHJcbmJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBwb3B1cEFkZC5vcGVuKCk7XHJcbiAgICBmb3JtVmFsaWRhdG9yQWRkLnJlc2V0RXJyb3IoKTtcclxufSk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJuYW1lIiwibGluayIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9kZWxldGVDYXJkIiwiZXZ0IiwiX2xpa2VDYXJkIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiX2dldFRlbXBsYXRlIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwiZm9ybUVsZW1lbnQiLCJfY29uZmlnIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwiX2J1dHRvbkVsZW1lbnQiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0RWxlbWVudCIsImVycm9yRWxlbWVudCIsImlkIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oaWRlSW5wdXRFcnJvciIsIl9zaG93SW5wdXRFcnJvciIsInNvbWUiLCJzZXRBdHRyaWJ1dGUiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwicmVtb3ZlQXR0cmlidXRlIiwiX2hhc0ludmFsaWRJbnB1dCIsIl9zZXREaXNhYmxlZEJ1dHRvbiIsIl9zZXRFbmFibGVkQnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5IiwiY2xvc2UiLCJlIiwiaXNPdmVybGF5IiwiY29udGFpbnMiLCJpc0Nsb3NlQnRuIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsImZvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicmVzZXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltZyIsIl9wb3B1cFRpdGxlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlZEl0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIml0ZW0iLCJhcHBlbmQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX25hbWVTZWxlY3RvciIsIl9qb2JTZWxlY3RvciIsIl9uYW1lRWxlbWVudCIsIl9qb2JFbGVtZW50IiwiaW5mb1ZhbHVlcyIsImpvYiIsImJ1dHRvbkVkaXQiLCJidXR0b25BZGQiLCJmb3JtRWxlbWVudEVkaXQiLCJmb3JtRWxlbWVudEFkZCIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwiY2FyZENvbnRhaW5lciIsImZvcm1TZWxlY3RvciIsImluaXRpYWxDYXJkcyIsInVzZXJJbmZvIiwicG9wdXBQaG90byIsIm9wZW4iLCJjcmVhdGVDYXJkIiwibmFtZVZhbHVlIiwibGlua1ZhbHVlIiwiY2FyZCIsImdlbmVyYXRlQ2FyZCIsImFkZENhcmQiLCJwcmVwZW5kIiwiY2FyZHNMaXN0IiwiY2FyZEl0ZW0iLCJyZW5kZXJJdGVtcyIsInNldEV2ZW50TGlzdGVuZXJzIiwicG9wdXBBZGQiLCJwb3B1cEVkaXQiLCJzZXRVc2VySW5mbyIsImZvcm1WYWxpZGF0b3JBZGQiLCJlbmFibGVWYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRvckVkaXQiLCJkYXRhVG9Gb3JtIiwiZ2V0VXNlckluZm8iLCJyZXNldEVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==