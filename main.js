/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var host = _ref.host,
        headers = _ref.headers;

    _classCallCheck(this, Api);

    this._host = host;
    this._headers = headers; //this._getJsonOrError = this._getJsonOrError.bind(this);
  }
  /* Вернуть результат или ошибку*/


  _createClass(Api, [{
    key: "_getJsonOrError",
    value: function _getJsonOrError(res) {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
    /* Получить изначальные карточки с сервера*/

  }, {
    key: "getCards",
    value: function getCards() {
      return fetch("".concat(this._host, "/cards"), {
        headers: this._headers
      }).then(this._getJsonOrError);
    }
    /* Создать новую карточку*/

  }, {
    key: "createCard",
    value: function createCard(cardObj) {
      return fetch("".concat(this._host, "/cards"), {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: cardObj.name,
          link: cardObj.link
        })
      }).then(this._getJsonOrError);
    }
    /* Удалить карточку на сервере*/

  }, {
    key: "deleteCard",
    value: function deleteCard(_id) {
      return fetch("".concat(this._host, "/cards/").concat(_id), {
        method: 'DELETE',
        headers: this._headers
      }).then(this._getJsonOrError);
    }
    /* Лайкнуть карточку на сервере*/

  }, {
    key: "likeCard",
    value: function likeCard(_id) {
      return fetch("".concat(this._host, "/cards/").concat(_id, "/likes"), {
        method: 'PUT',
        headers: this._headers
      }).then(this._getJsonOrError);
    }
    /* Удалить лайк на сервере*/

  }, {
    key: "dislikeCard",
    value: function dislikeCard(_id) {
      return fetch("".concat(this._host, "/cards/").concat(_id, "/likes"), {
        method: "DELETE",
        headers: this._headers
      }).then(this._getJsonOrError);
    }
    /* Запросить данные о юзере*/

  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._host, "/users/me"), {
        method: 'GET',
        headers: this._headers
      }).then(this._getJsonOrError);
    }
    /* Запостить данные о юзере*/

  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      return fetch("".concat(this._host, "/users/me"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      }).then(this._getJsonOrError);
    }
    /* Запостить аватар*/

  }, {
    key: "setAvatar",
    value: function setAvatar(avatar) {
      return fetch("".concat(this._host, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(avatar)
      }).then(this._getJsonOrError);
    }
  }]);

  return Api;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

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
  function Card(cardObj, cardSelector, handleCardClick, _ref) {
    var userId = _ref.userId,
        handleDeleteCard = _ref.handleDeleteCard,
        handleLikeCard = _ref.handleLikeCard,
        handleDislikeCard = _ref.handleDislikeCard;

    _classCallCheck(this, Card);

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

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "like",
    value: function like() {
      this._likeButton.classList.add('card__like_active');
    }
  }, {
    key: "dislike",
    value: function dislike() {
      this._likeButton.classList.remove('card__like_active');
    }
  }, {
    key: "delete",
    value: function _delete() {
      this._element.remove();

      this._element = null;
    }
  }, {
    key: "countLikes",
    value: function countLikes(likes) {
      if (likes.length === 0) {
        this._likeCounter.textContent = '0';
      } else {
        this._likeCounter.textContent = likes.length;
      }
    }
  }, {
    key: "_activeLike",
    value: function _activeLike() {
      var _this = this;

      this._likes.forEach(function (like) {
        if (_this._id === like._id) {
          _this._likeButton.classList.add('card__like_active');
        }
      });
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._deleteButton = this._element.querySelector('.card__trash');
      this._likeButton = this._element.querySelector('.card__like');
      this._likeCounter = this._element.querySelector('.card__like-counter');
      this._image = this._element.querySelector('.card__img');
      this._element.querySelector('.card__title').textContent = this._name;
      this._image.src = this._link;
      this._image.alt = this._name;

      if (this._id !== this._ownerId) {
        this._deleteButton.style.display = "none";
      }

      this.countLikes(this._likes);

      this._activeLike();

      this._setEventListeners();

      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      this._deleteButton.addEventListener('click', function () {
        _this2._handleDeleteCard(_this2);
      });

      this._likeButton.addEventListener('click', function () {
        if (_this2._likeButton.classList.contains('card__like_active')) {
          _this2._handleDislikeCard();
        } else {
          _this2._handleLikeCard();
        }
      });

      this._image.addEventListener('click', function () {
        _this2._handleCardClick(_this2._name, _this2._link);
      });
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
    key: "resetValidation",
    value: function resetValidation() {
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

      this._popupElement.addEventListener('mousedown', function (e) {
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

/***/ "./src/components/PopupWithConfirm.js":
/*!********************************************!*\
  !*** ./src/components/PopupWithConfirm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithConfirm)
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



var PopupWithConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirm, _Popup);

  var _super = _createSuper(PopupWithConfirm);

  function PopupWithConfirm(popupSelector, _ref) {
    var _this;

    var handleFormSubmit = _ref.handleFormSubmit;

    _classCallCheck(this, PopupWithConfirm);

    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._formElement = _this._popupElement.querySelector('.popup__form');
    return _this;
  }

  _createClass(PopupWithConfirm, [{
    key: "open",
    value: function open(card) {
      this._card = card;

      _get(_getPrototypeOf(PopupWithConfirm.prototype), "open", this).call(this);
    }
  }, {
    key: "setSubmitAction",
    value: function setSubmitAction(_ref2) {
      var handleSubmitAction = _ref2.handleSubmitAction;
      this.submitAction = handleSubmitAction;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithConfirm.prototype), "setEventListeners", this).call(this);

      this._formElement.addEventListener('submit', function (e) {
        e.preventDefault();

        _this2._handleFormSubmit();
      });
    }
  }]);

  return PopupWithConfirm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
    _this._handleFormSubmit = handleFormSubmit;
    _this._formElement = _this._popupElement.querySelector('.popup__form');
    _this._inputList = _this._popupElement.querySelectorAll('.popup__input');
    _this._submitButton = _this._popupElement.querySelector('.popup__submit');
    _this._submitButtonContent = _this._submitButton.textContent;
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
      });
    }
  }, {
    key: "showLoading",
    value: function showLoading(isloading, text) {
      if (isloading) {
        this._submitButton.disabled = true;
        this._submitButton.textContent = text;
      } else {
        this._submitButton.disabled = false;
        this._submitButton.textContent = this._submitButtonContent;
      }

      ;
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
    key: "setCardInfo",
    value: function setCardInfo(items) {
      this._renderedItems = items;
    }
  }, {
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
  function UserInfo(nameSelector, aboutSelector, avatarSelector) {
    _classCallCheck(this, UserInfo);

    this._nameSelector = nameSelector;
    this._aboutSelector = aboutSelector;
    this._avatarSelector = avatarSelector;
    this._nameElement = document.querySelector(this._nameSelector);
    this._aboutElement = document.querySelector(this._aboutSelector);
    this._avatarElement = document.querySelector(this._avatarSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var infoValues = {
        name: this._nameElement.textContent,
        about: this._aboutElement.textContent,
        avatar: this._avatarElement.src
      };
      return infoValues;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(formValues) {
      this._nameElement.textContent = formValues.name;
      this._aboutElement.textContent = formValues.about;
      this._avatarElement.src = formValues.avatar;
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
/* harmony export */   "aboutInput": () => (/* binding */ aboutInput),
/* harmony export */   "buttonAdd": () => (/* binding */ buttonAdd),
/* harmony export */   "buttonAvatarEdit": () => (/* binding */ buttonAvatarEdit),
/* harmony export */   "buttonEdit": () => (/* binding */ buttonEdit),
/* harmony export */   "cardContainer": () => (/* binding */ cardContainer),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "formElementAdd": () => (/* binding */ formElementAdd),
/* harmony export */   "formElementAvatar": () => (/* binding */ formElementAvatar),
/* harmony export */   "formElementEdit": () => (/* binding */ formElementEdit),
/* harmony export */   "nameInput": () => (/* binding */ nameInput)
/* harmony export */ });
var buttonEdit = document.querySelector('.profile__edit');
var buttonAdd = document.querySelector('.profile__add');
var buttonAvatarEdit = document.querySelector('.profile__avatar');
var formElementEdit = document.querySelector('.popup__form_type_edit');
var formElementAdd = document.querySelector('.popup__form_type_add');
var formElementAvatar = document.querySelector('.popup__form_type_avatar');
var nameInput = document.querySelector('.popup__input_type_name');
var aboutInput = document.querySelector('.popup__input_type_about');
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
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithConfirm.js */ "./src/components/PopupWithConfirm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]('.profile__title', '.profile__subtitle', '.profile__avatar-img');
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  host: "https://mesto.nomoreparties.co/v1/cohort-47",
  headers: {
    authorization: "c6a18f64-a17b-491d-a60f-79193e16e124",
    "Content-Type": "application/json"
  }
});
var userId;

var handleCardClick = function handleCardClick(name, link) {
  popupPhoto.open(name, link);
};
/* Создание карточек*/


var createCard = function createCard(cardObj) {
  var card = new _components_Card__WEBPACK_IMPORTED_MODULE_2__["default"](cardObj, '.card-template', handleCardClick, {
    userId: userId,
    handleDeleteCard: function handleDeleteCard() {
      popupDelete.open();
      popupDelete.setSubmitAction({
        handleSubmitAction: function handleSubmitAction() {
          api.deleteCard(cardObj._id).then(function () {
            card.delete();
          }).catch(function (err) {
            return console.log(err);
          });
        }
      });
    },
    handleLikeCard: function handleLikeCard() {
      api.likeCard(cardObj._id).then(function (res) {
        card.countLikes(res.likes);
        card.like();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    handleDislikeCard: function handleDislikeCard() {
      api.dislikeCard(cardObj._id).then(function (res) {
        card.countLikes(res.likes);
        card.dislike();
      }).catch(function (err) {
        return console.log(err);
      });
    }
  });
  var cardElement = card.generateCard();
  return cardElement;
}; // const addCard = (cardObj) => {
//     const cardElement = createCard(cardObj); 
//     cardContainer.prepend(cardElement);
// }


var cardsList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  items: [],
  renderer: function renderer(cardItem) {
    var cardElement = createCard(cardItem);
    cardsList.addItem(cardElement);
  }
}, '.elements__container');
/* Получение данных сервера при загрузке страницы */

Promise.all([api.getUserInfo(), api.getCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      data = _ref2[0],
      cards = _ref2[1];

  userId = data._id;
  userInfo.setUserInfo(data);
  cardsList.setCardInfo(cards);
  cardsList.renderItems(cards);
}).catch(function (err) {
  return console.log(err);
});
/* Хендлер сабмита для попапа редактирования профиля*/

function submitEditPopup(formValues) {
  popupEdit.showLoading(true, 'Сохранение...');
  api.setUserInfo(formValues).then(function (res) {
    userInfo.setUserInfo(res);
    popupEdit.close();
  }).catch(function (err) {
    return console.log(err);
  }).finally(function () {
    popupEdit.showLoading(false);
  });
}
/* Хендлер сабмита для попапа добавления карточек*/


function submitAddPopup(cardObj) {
  popupAdd.showLoading(true, 'Сохранение...');
  api.createCard(cardObj).then(function (res) {
    var cardElement = createCard(res);
    cardsList.addItem(cardElement);
    popupAdd.close();
  }).catch(function (err) {
    return console.log(err);
  }).finally(function () {
    popupAdd.showLoading(false);
  });
}
/* Хендлер сабмита для попапа редактирования аватара*/


function submitAvatarPopup(formValues) {
  popupAvatar.showLoading(true, 'Сохранение...');
  api.setAvatar(formValues).then(function (res) {
    document.querySelector('.profile__avatar-img').src = res.avatar;
    popupAvatar.close();
  }).catch(function (err) {
    return console.log(err);
  }).finally(function () {
    popupAvatar.showLoading(false);
  });
}
/* Создаем экземпляр попапа с картинкой*/


var popupPhoto = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup_type_photo');
popupPhoto.setEventListeners();
/* Создаем экземпляр попапа для добавления карточек*/

var popupAdd = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_type_add', {
  handleFormSubmit: submitAddPopup
});
popupAdd.setEventListeners();
/* Создаем экземпляр попапа для редактирования профиля*/

var popupEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_type_edit', {
  handleFormSubmit: submitEditPopup
});
popupEdit.setEventListeners();
/* Создаем экземпляр попапа для удаления карточки*/

var popupDelete = new _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_7__["default"]('.popup_type_delete', {
  handleFormSubmit: function handleFormSubmit() {
    popupDelete.submitAction();
    popupDelete.close();
  }
});
popupDelete.setEventListeners();
/* Создаем экземпляр попапа для редактирования аватара*/

var popupAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_type_avatar', {
  handleFormSubmit: submitAvatarPopup
});
popupAvatar.setEventListeners();
/* Создаем экземпляры классов форм-валидаторов*/

var formValidatorAdd = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.config, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.formElementAdd);
formValidatorAdd.enableValidation();
var formValidatorEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.config, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.formElementEdit);
formValidatorEdit.enableValidation();
var formValidatorAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.config, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.formElementAvatar);
formValidatorAvatar.enableValidation();
/* Что будет, если ткнуть на кнопку открытия попапа для профиля*/

_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.buttonEdit.addEventListener('click', function () {
  var dataToForm = userInfo.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.nameInput.value = dataToForm.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.aboutInput.value = dataToForm.about;
  popupEdit.open();
  formValidatorEdit.resetValidation();
});
/* Что будет, если ткнуть на кнопку открытия попапа для карточек*/

_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.buttonAdd.addEventListener('click', function () {
  popupAdd.open();
  formValidatorAdd.resetValidation();
});
/* Что будет, если ткнуть на кнопку редактирования аватара*/

_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.buttonAvatarEdit.addEventListener('click', function () {
  formValidatorAvatar.resetValidation();
  popupAvatar.open();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUExQixDQUF6QjtBQUNBNEMsZ0JBQWdCLENBQUNDLGdCQUFqQjtBQUVBLElBQU1DLGlCQUFpQixHQUFHLElBQUl6SSxvRUFBSixDQUFrQkMsdURBQWxCLEVBQTBCeUYsZ0VBQTFCLENBQTFCO0FBQ0ErQyxpQkFBaUIsQ0FBQ0QsZ0JBQWxCO0FBRUEsSUFBTUUsbUJBQW1CLEdBQUcsSUFBSTFJLG9FQUFKLENBQWtCQyx1REFBbEIsRUFBMEIyRixrRUFBMUIsQ0FBNUI7QUFDQThDLG1CQUFtQixDQUFDRixnQkFBcEI7QUFHQTs7QUFDQWpELDRFQUFBLENBQTRCLE9BQTVCLEVBQXFDLFlBQVU7RUFDM0MsSUFBTW9ELFVBQVUsR0FBRzFDLFFBQVEsQ0FBQ3NCLFdBQVQsRUFBbkI7RUFDQTFCLGdFQUFBLEdBQWtCOEMsVUFBVSxDQUFDOUwsSUFBN0I7RUFDQWlKLGlFQUFBLEdBQW1CNkMsVUFBVSxDQUFDMUwsS0FBOUI7RUFDQTZLLFNBQVMsQ0FBQ3pCLElBQVY7RUFDQW9DLGlCQUFpQixDQUFDRyxlQUFsQjtBQUNILENBTkQ7QUFRQTs7QUFDQXBELDJFQUFBLENBQTJCLE9BQTNCLEVBQW9DLFlBQVU7RUFDMUMwQyxRQUFRLENBQUM3QixJQUFUO0VBQ0FrQyxnQkFBZ0IsQ0FBQ0ssZUFBakI7QUFDSCxDQUhEO0FBS0E7O0FBQ0FuRCxrRkFBQSxDQUFrQyxPQUFsQyxFQUEyQyxZQUFVO0VBQ2pEaUQsbUJBQW1CLENBQUNFLGVBQXBCO0VBQ0FSLFdBQVcsQ0FBQy9CLElBQVo7QUFDSCxDQUhELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoQ29uZmlybS5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aG9zdCwgaGVhZGVyc30pe1xyXG4gICAgICAgIHRoaXMuX2hvc3QgPSBob3N0O1xyXG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgICAgIC8vdGhpcy5fZ2V0SnNvbk9yRXJyb3IgPSB0aGlzLl9nZXRKc29uT3JFcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qINCS0LXRgNC90YPRgtGMINGA0LXQt9GD0LvRjNGC0LDRgiDQuNC70Lgg0L7RiNC40LHQutGDKi9cclxuICAgIF9nZXRKc29uT3JFcnJvcihyZXMpe1xyXG4gICAgICAgIGlmIChyZXMub2spe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCf0L7Qu9GD0YfQuNGC0Ywg0LjQt9C90LDRh9Cw0LvRjNC90YvQtSDQutCw0YDRgtC+0YfQutC4INGBINGB0LXRgNCy0LXRgNCwKi9cclxuICAgIGdldENhcmRzKCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgLyog0KHQvtC30LTQsNGC0Ywg0L3QvtCy0YPRjiDQutCw0YDRgtC+0YfQutGDKi9cclxuICAgIGNyZWF0ZUNhcmQoY2FyZE9iail7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogY2FyZE9iai5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbGluazogY2FyZE9iai5saW5rLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgLyog0KPQtNCw0LvQuNGC0Ywg0LrQsNGA0YLQvtGH0LrRgyDQvdCwINGB0LXRgNCy0LXRgNC1Ki9cclxuICAgIGRlbGV0ZUNhcmQoX2lkKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vY2FyZHMvJHtfaWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgLyog0JvQsNC50LrQvdGD0YLRjCDQutCw0YDRgtC+0YfQutGDINC90LAg0YHQtdGA0LLQtdGA0LUqL1xyXG4gICAgbGlrZUNhcmQoX2lkKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vY2FyZHMvJHtfaWR9L2xpa2VzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgLyog0KPQtNCw0LvQuNGC0Ywg0LvQsNC50Log0L3QsCDRgdC10YDQstC10YDQtSovXHJcbiAgICBkaXNsaWtlQ2FyZChfaWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vY2FyZHMvJHtfaWR9L2xpa2VzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgfSkudGhlbih0aGlzLl9nZXRKc29uT3JFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyog0JfQsNC/0YDQvtGB0LjRgtGMINC00LDQvdC90YvQtSDQviDRjtC30LXRgNC1Ki9cclxuICAgIGdldFVzZXJJbmZvKCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L3VzZXJzL21lYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgLyog0JfQsNC/0L7RgdGC0LjRgtGMINC00LDQvdC90YvQtSDQviDRjtC30LXRgNC1Ki9cclxuICAgIHNldFVzZXJJbmZvKGRhdGEpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9ob3N0fS91c2Vycy9tZWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBhYm91dDogZGF0YS5hYm91dCxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbih0aGlzLl9nZXRKc29uT3JFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICAvKiDQl9Cw0L/QvtGB0YLQuNGC0Ywg0LDQstCw0YLQsNGAKi9cclxuICAgIHNldEF2YXRhcihhdmF0YXIpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9ob3N0fS91c2Vycy9tZS9hdmF0YXJgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYXZhdGFyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcGk7IiwiY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoY2FyZE9iaiwgY2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2ssIHt1c2VySWQsIGhhbmRsZURlbGV0ZUNhcmQsIGhhbmRsZUxpa2VDYXJkLCBoYW5kbGVEaXNsaWtlQ2FyZH0pe1xyXG4gICAgICB0aGlzLl9uYW1lID0gY2FyZE9iai5uYW1lO1xyXG4gICAgICB0aGlzLl9saW5rID0gY2FyZE9iai5saW5rO1xyXG4gICAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgICAgdGhpcy5faWQgPSB1c2VySWQ7XHJcbiAgICAgIHRoaXMuX293bmVySWQgPSBjYXJkT2JqLm93bmVyLl9pZDtcclxuICAgICAgdGhpcy5fbGlrZXMgPSBjYXJkT2JqLmxpa2VzO1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkID0gaGFuZGxlRGVsZXRlQ2FyZDtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUNhcmQgPSBoYW5kbGVMaWtlQ2FyZDtcclxuICAgICAgdGhpcy5faGFuZGxlRGlzbGlrZUNhcmQgPSBoYW5kbGVEaXNsaWtlQ2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VGVtcGxhdGUoKXtcclxuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgICAuY29udGVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpXHJcbiAgICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgbGlrZSgpIHtcclxuICAgICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJkX19saWtlX2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2xpa2UoKSB7XHJcbiAgICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2FyZF9fbGlrZV9hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50TGlrZXMobGlrZXMpIHtcclxuICAgICAgaWYgKGxpa2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gbGlrZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2FjdGl2ZUxpa2UoKSB7XHJcbiAgICAgIHRoaXMuX2xpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5faWQgPT09IGxpa2UuX2lkKSB7XHJcbiAgICAgICAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2xpa2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNhcmQoKXtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcblxyXG4gICAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190cmFzaCcpO1xyXG4gICAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbGlrZScpO1xyXG4gICAgICB0aGlzLl9saWtlQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UtY291bnRlcicpO1xyXG4gICAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltZycpO1xyXG5cclxuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fdGl0bGUnKS50ZXh0Q29udGVudCA9dGhpcy5fbmFtZTtcclxuICAgICAgdGhpcy5faW1hZ2Uuc3JjID10aGlzLl9saW5rO1xyXG4gICAgICB0aGlzLl9pbWFnZS5hbHQgPXRoaXMuX25hbWU7XHJcblxyXG4gICAgICBpZiAodGhpcy5faWQgIT09IHRoaXMuX293bmVySWQpIHtcclxuICAgICAgICB0aGlzLl9kZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvdW50TGlrZXModGhpcy5fbGlrZXMpO1xyXG4gICAgICB0aGlzLl9hY3RpdmVMaWtlKCk7XHJcbiAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmRfX2xpa2VfYWN0aXZlJykpIHtcclxuICAgICAgICAgIHRoaXMuX2hhbmRsZURpc2xpa2VDYXJkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2hhbmRsZUxpa2VDYXJkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5faW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBmb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9jb25maWcuaW5wdXRTZWxlY3RvcikpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVJbnB1dEVycm9yIChpbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7IC8v0LLRi9Cx0YDQsNGC0Ywgc3BhbiDRgSDRgtC10LrRgdGC0L7QvCDQvtGI0LjQsdC60LhcclxuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuaW5wdXRFcnJvckNsYXNzKTsgLy/Rg9C00LDQu9C40YLRjCDRgyDQuNC90L/Rg9GC0LAg0LrQu9Cw0YHRgSDRgSDQvtGI0LjQsdC60L7QuVxyXG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5lcnJvckNsYXNzKTsgLy/Rg9C00LDQu9C40YLRjCDRgyDRgdC/0LDQvdCwINCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBfc2hvd0lucHV0RXJyb3IgKGlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTsgLy/QstGL0LHRgNCw0YLRjCBzcGFuINGBINGC0LXQutGB0YLQvtC8INC+0YjQuNCx0LrQuFxyXG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5pbnB1dEVycm9yQ2xhc3MpOyAvL9C00L7QsdCw0LLQuNGC0Ywg0LjQvdC/0YPRgtGDINC60LvQsNGB0YEg0YEg0L7RiNC40LHQutC+0LlcclxuICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmVycm9yQ2xhc3MpOyAvL9C00L7QsdCw0LLQuNGC0Ywg0YHQv9Cw0L3RgyDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcclxuICAgIH07XHJcbiAgICBcclxuICAgIF9jaGVja0lucHV0VmFsaWRpdHkgKGlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIF9oYXNJbnZhbGlkSW5wdXQgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZShpbnB1dEVsZW1lbnQgPT4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9zZXREaXNhYmxlZEJ1dHRvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIF9zZXRFbmFibGVkQnV0dG9uICgpIHtcclxuICAgICAgICB0aGlzLl9idXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXREaXNhYmxlZEJ1dHRvbigpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0RW5hYmxlZEJ1dHRvbigpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHsgXHJcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7IFxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZW5hYmxlVmFsaWRhdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvcikgeyAgICAgIFxyXG4gICAgICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IgPSBwb3B1cFNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fcG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpXHJcbjsgICAgfTtcclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICgna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIH07XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW5lZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KXtcclxuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT3ZlcmxheSA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXAnKTtcclxuICAgICAgICAgICAgY29uc3QgaXNDbG9zZUJ0biA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIGlmIChpc092ZXJsYXkgfHwgaXNDbG9zZUJ0bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhDb25maXJtIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvciwge2hhbmRsZUZvcm1TdWJtaXR9KSB7ICAgICAgXHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7ICAgICAgICBcclxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuICAgIH07XHJcblxyXG4gICAgb3BlbihjYXJkKSB7XHJcbiAgICAgICAgdGhpcy5fY2FyZCA9IGNhcmQ7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN1Ym1pdEFjdGlvbih7IGhhbmRsZVN1Ym1pdEFjdGlvbiB9KSB7IFxyXG4gICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gaGFuZGxlU3VibWl0QWN0aW9uO1xyXG4gICAgfSBcclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCB7aGFuZGxlRm9ybVN1Ym1pdH0pIHsgICAgICBcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc3VibWl0Jyk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uQ29udGVudCA9IHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgIH07XHJcblxyXG4gICAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBmb3JtVmFsdWVzO1xyXG4gICAgfSBcclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnJlc2V0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzaG93TG9hZGluZyhpc2xvYWRpbmcsIHRleHQpIHtcclxuICAgICAgICBpZiAoaXNsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXMuX3N1Ym1pdEJ1dHRvbkNvbnRlbnQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHsgICAgICBcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9wb3B1cEltZyA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltZycpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwVGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWctdGl0bGUnKTtcclxuICAgIH07XHJcblxyXG4gICAgb3BlbihuYW1lLCBsaW5rKSB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwSW1nLnNyYyA9IGxpbms7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBJbWcuYWx0ID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9wb3B1cFRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmRJbmZvKGl0ZW1zKXtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zID0gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWVTZWxlY3RvciwgYWJvdXRTZWxlY3RvciwgYXZhdGFyU2VsZWN0b3IpIHsgICAgICBcclxuICAgICAgICB0aGlzLl9uYW1lU2VsZWN0b3IgPSBuYW1lU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fYWJvdXRTZWxlY3RvciA9IGFib3V0U2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyU2VsZWN0b3IgPSBhdmF0YXJTZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl9uYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fbmFtZVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9hYm91dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Fib3V0U2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2F2YXRhckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2F2YXRhclNlbGVjdG9yKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICBjb25zdCBpbmZvVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgYWJvdXQ6IHRoaXMuX2Fib3V0RWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgYXZhdGFyOiB0aGlzLl9hdmF0YXJFbGVtZW50LnNyY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGluZm9WYWx1ZXNcclxuICAgIH07XHJcblxyXG4gICAgc2V0VXNlckluZm8oZm9ybVZhbHVlcyl7XHJcbiAgICAgICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBmb3JtVmFsdWVzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fYWJvdXRFbGVtZW50LnRleHRDb250ZW50ID0gZm9ybVZhbHVlcy5hYm91dDtcclxuICAgICAgICB0aGlzLl9hdmF0YXJFbGVtZW50LnNyYyA9IGZvcm1WYWx1ZXMuYXZhdGFyO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdCcpO1xyXG5jb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkJyk7XHJcbmNvbnN0IGJ1dHRvbkF2YXRhckVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYXZhdGFyJyk7XHJcblxyXG5jb25zdCBmb3JtRWxlbWVudEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm1fdHlwZV9lZGl0Jyk7XHJcbmNvbnN0IGZvcm1FbGVtZW50QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtX3R5cGVfYWRkJyk7XHJcbmNvbnN0IGZvcm1FbGVtZW50QXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtX3R5cGVfYXZhdGFyJyk7XHJcblxyXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X3R5cGVfbmFtZScpO1xyXG5jb25zdCBhYm91dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX2Fib3V0Jyk7XHJcblxyXG5cclxuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxyXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3N1Ym1pdCcsXHJcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3N1Ym1pdF9kaXNhYmxlZCcsXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9lcnJvcicsXHJcbiAgICBlcnJvckNsYXNzOiAncG9wdXBfX2lucHV0LWVycm9yX2FjdGl2ZScsXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7YnV0dG9uRWRpdCwgYnV0dG9uQWRkLCBidXR0b25BdmF0YXJFZGl0LCBmb3JtRWxlbWVudEVkaXQsIGZvcm1FbGVtZW50QWRkLCBmb3JtRWxlbWVudEF2YXRhciwgbmFtZUlucHV0LCBhYm91dElucHV0LCBjYXJkQ29udGFpbmVyLCBjb25maWd9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLy4uL3BhZ2VzL2luZGV4LmNzcyc7XHJcblxyXG5pbXBvcnQgQXBpIGZyb20gJy4uL2NvbXBvbmVudHMvQXBpLmpzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoQ29uZmlybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm0uanMnO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7XHJcbmltcG9ydCB7YnV0dG9uRWRpdCwgYnV0dG9uQWRkLCBidXR0b25BdmF0YXJFZGl0LCBmb3JtRWxlbWVudEVkaXQsIGZvcm1FbGVtZW50QWRkLCBmb3JtRWxlbWVudEF2YXRhciwgbmFtZUlucHV0LCBhYm91dElucHV0LCBjYXJkQ29udGFpbmVyLCBjb25maWd9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbygnLnByb2ZpbGVfX3RpdGxlJywgJy5wcm9maWxlX19zdWJ0aXRsZScsICcucHJvZmlsZV9fYXZhdGFyLWltZycpO1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgICBob3N0OiBcImh0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNDdcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiBcImM2YTE4ZjY0LWExN2ItNDkxZC1hNjBmLTc5MTkzZTE2ZTEyNFwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5sZXQgdXNlcklkOyBcclxuXHJcblxyXG5jb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAobmFtZSwgbGluaykgPT4ge1xyXG4gICAgcG9wdXBQaG90by5vcGVuKG5hbWUsIGxpbmspXHJcbn07XHJcblxyXG4vKiDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0L7Rh9C10LoqL1xyXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmRPYmopID0+e1xyXG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmRPYmosICcuY2FyZC10ZW1wbGF0ZScsIGhhbmRsZUNhcmRDbGljaywge1xyXG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIGhhbmRsZURlbGV0ZUNhcmQ6ICgpPT57XHJcbiAgICAgICAgICAgIHBvcHVwRGVsZXRlLm9wZW4oKTtcclxuICAgICAgICAgICAgcG9wdXBEZWxldGUuc2V0U3VibWl0QWN0aW9uKHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdEFjdGlvbjogKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBhcGkuZGVsZXRlQ2FyZChjYXJkT2JqLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVMaWtlQ2FyZDogKCk9PntcclxuICAgICAgICAgICAgYXBpLmxpa2VDYXJkKGNhcmRPYmouX2lkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNvdW50TGlrZXMocmVzLmxpa2VzKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmxpa2UoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZURpc2xpa2VDYXJkOiAoKT0+e1xyXG4gICAgICAgICAgICBhcGkuZGlzbGlrZUNhcmQoY2FyZE9iai5faWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY291bnRMaWtlcyhyZXMubGlrZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuZGlzbGlrZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICAgIFxyXG59XHJcblxyXG4vLyBjb25zdCBhZGRDYXJkID0gKGNhcmRPYmopID0+IHtcclxuLy8gICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY3JlYXRlQ2FyZChjYXJkT2JqKTsgXHJcbi8vICAgICBjYXJkQ29udGFpbmVyLnByZXBlbmQoY2FyZEVsZW1lbnQpO1xyXG4vLyB9XHJcblxyXG5cclxuY29uc3QgY2FyZHNMaXN0ID0gbmV3IFNlY3Rpb24gKHtcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIHJlbmRlcmVyOiAoY2FyZEl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoY2FyZEl0ZW0pO1xyXG4gICAgICAgIGNhcmRzTGlzdC5hZGRJdGVtKGNhcmRFbGVtZW50KTsgXHJcbiAgICB9fSxcclxuICAgICcuZWxlbWVudHNfX2NvbnRhaW5lcidcclxuKTtcclxuXHJcblxyXG5cclxuLyog0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhSDRgdC10YDQstC10YDQsCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLICovXHJcblByb21pc2UuYWxsKFthcGkuZ2V0VXNlckluZm8oKSwgYXBpLmdldENhcmRzKCldKVxyXG4gICAgLnRoZW4oKFtkYXRhLCBjYXJkc10pID0+IHtcclxuICAgICAgICB1c2VySWQgPSBkYXRhLl9pZDtcclxuICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhKTtcclxuICAgICAgICBjYXJkc0xpc3Quc2V0Q2FyZEluZm8oY2FyZHMpO1xyXG4gICAgICAgIGNhcmRzTGlzdC5yZW5kZXJJdGVtcyhjYXJkcyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qINCl0LXQvdC00LvQtdGAINGB0LDQsdC80LjRgtCwINC00LvRjyDQv9C+0L/QsNC/0LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQv9GA0L7RhNC40LvRjyovXHJcbmZ1bmN0aW9uIHN1Ym1pdEVkaXRQb3B1cChmb3JtVmFsdWVzKXtcclxuICAgIHBvcHVwRWRpdC5zaG93TG9hZGluZyh0cnVlLCAn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nKTtcclxuICAgIGFwaS5zZXRVc2VySW5mbyhmb3JtVmFsdWVzKVxyXG4gICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XHJcbiAgICAgICAgICAgIHBvcHVwRWRpdC5jbG9zZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgICAgICAuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICBwb3B1cEVkaXQuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbi8qINCl0LXQvdC00LvQtdGAINGB0LDQsdC80LjRgtCwINC00LvRjyDQv9C+0L/QsNC/0LAg0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LXQuiovXHJcbmZ1bmN0aW9uIHN1Ym1pdEFkZFBvcHVwKGNhcmRPYmope1xyXG4gICAgcG9wdXBBZGQuc2hvd0xvYWRpbmcodHJ1ZSwgJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJyk7XHJcbiAgICBhcGkuY3JlYXRlQ2FyZChjYXJkT2JqKVxyXG4gICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY3JlYXRlQ2FyZChyZXMpXHJcbiAgICAgICAgICAgIGNhcmRzTGlzdC5hZGRJdGVtKGNhcmRFbGVtZW50KTtcclxuICAgICAgICAgICAgcG9wdXBBZGQuY2xvc2UoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgLmZpbmFsbHkoKCk9PntcclxuICAgICAgICAgICAgcG9wdXBBZGQuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbi8qINCl0LXQvdC00LvQtdGAINGB0LDQsdC80LjRgtCwINC00LvRjyDQv9C+0L/QsNC/0LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsCovXHJcbmZ1bmN0aW9uIHN1Ym1pdEF2YXRhclBvcHVwKGZvcm1WYWx1ZXMpe1xyXG4gICAgcG9wdXBBdmF0YXIuc2hvd0xvYWRpbmcodHJ1ZSwgJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJyk7XHJcbiAgICBhcGkuc2V0QXZhdGFyKGZvcm1WYWx1ZXMpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYXZhdGFyLWltZycpLnNyYyA9IHJlcy5hdmF0YXI7XHJcbiAgICAgICAgICAgICAgICBwb3B1cEF2YXRhci5jbG9zZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgcG9wdXBBdmF0YXIuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG59XHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINGBINC60LDRgNGC0LjQvdC60L7QuSovXHJcbmNvbnN0IHBvcHVwUGhvdG8gPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5wb3B1cF90eXBlX3Bob3RvJyk7XHJcbnBvcHVwUGhvdG8uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8qINCh0L7Qt9C00LDQtdC8INGN0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C10LoqL1xyXG5jb25zdCBwb3B1cEFkZCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gICAgJy5wb3B1cF90eXBlX2FkZCcsIHtoYW5kbGVGb3JtU3VibWl0OiBzdWJtaXRBZGRQb3B1cH1cclxuKTsgXHJcbnBvcHVwQWRkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPKi9cclxuY29uc3QgcG9wdXBFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgICAnLnBvcHVwX3R5cGVfZWRpdCcsIHtoYW5kbGVGb3JtU3VibWl0OiBzdWJtaXRFZGl0UG9wdXB9XHJcbik7IFxyXG5wb3B1cEVkaXQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8qINCh0L7Qt9C00LDQtdC8INGN0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINGD0LTQsNC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuCovXHJcbmNvbnN0IHBvcHVwRGVsZXRlID0gbmV3IFBvcHVwV2l0aENvbmZpcm0oXHJcbiAgICAnLnBvcHVwX3R5cGVfZGVsZXRlJywge1xyXG4gICAgICAgIGhhbmRsZUZvcm1TdWJtaXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXBEZWxldGUuc3VibWl0QWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHBvcHVwRGVsZXRlLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9KTsgXHJcbnBvcHVwRGVsZXRlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINCw0LLQsNGC0LDRgNCwKi9cclxuY29uc3QgcG9wdXBBdmF0YXIgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICAgICcucG9wdXBfdHlwZV9hdmF0YXInLCB7aGFuZGxlRm9ybVN1Ym1pdDogc3VibWl0QXZhdGFyUG9wdXB9XHJcbik7IFxyXG5wb3B1cEF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuXHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YDRiyDQutC70LDRgdGB0L7QsiDRhNC+0YDQvC3QstCw0LvQuNC00LDRgtC+0YDQvtCyKi9cclxuY29uc3QgZm9ybVZhbGlkYXRvckFkZCA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgZm9ybUVsZW1lbnRBZGQpO1xyXG5mb3JtVmFsaWRhdG9yQWRkLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JFZGl0ID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudEVkaXQpO1xyXG5mb3JtVmFsaWRhdG9yRWRpdC5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdG9yQXZhdGFyID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudEF2YXRhcik7XHJcbmZvcm1WYWxpZGF0b3JBdmF0YXIuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuXHJcbi8qINCn0YLQviDQsdGD0LTQtdGCLCDQtdGB0LvQuCDRgtC60L3Rg9GC0Ywg0L3QsCDQutC90L7Qv9C60YMg0L7RgtC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LAg0LTQu9GPINC/0YDQvtGE0LjQu9GPKi9cclxuYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkYXRhVG9Gb3JtID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9IGRhdGFUb0Zvcm0ubmFtZTtcclxuICAgIGFib3V0SW5wdXQudmFsdWUgPSBkYXRhVG9Gb3JtLmFib3V0O1xyXG4gICAgcG9wdXBFZGl0Lm9wZW4oKTtcclxuICAgIGZvcm1WYWxpZGF0b3JFZGl0LnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbi8qINCn0YLQviDQsdGD0LTQtdGCLCDQtdGB0LvQuCDRgtC60L3Rg9GC0Ywg0L3QsCDQutC90L7Qv9C60YMg0L7RgtC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LAg0LTQu9GPINC60LDRgNGC0L7Rh9C10LoqL1xyXG5idXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcG9wdXBBZGQub3BlbigpO1xyXG4gICAgZm9ybVZhbGlkYXRvckFkZC5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG4vKiDQp9GC0L4g0LHRg9C00LXRgiwg0LXRgdC70Lgg0YLQutC90YPRgtGMINC90LAg0LrQvdC+0L/QutGDINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LDQstCw0YLQsNGA0LAqL1xyXG5idXR0b25BdmF0YXJFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGZvcm1WYWxpZGF0b3JBdmF0YXIucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgICBwb3B1cEF2YXRhci5vcGVuKCk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJBcGkiLCJob3N0IiwiaGVhZGVycyIsIl9ob3N0IiwiX2hlYWRlcnMiLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiZmV0Y2giLCJ0aGVuIiwiX2dldEpzb25PckVycm9yIiwiY2FyZE9iaiIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImxpbmsiLCJfaWQiLCJkYXRhIiwiYWJvdXQiLCJhdmF0YXIiLCJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwidXNlcklkIiwiaGFuZGxlRGVsZXRlQ2FyZCIsImhhbmRsZUxpa2VDYXJkIiwiaGFuZGxlRGlzbGlrZUNhcmQiLCJfbmFtZSIsIl9saW5rIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfb3duZXJJZCIsIm93bmVyIiwiX2xpa2VzIiwibGlrZXMiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9oYW5kbGVMaWtlQ2FyZCIsIl9oYW5kbGVEaXNsaWtlQ2FyZCIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9saWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiX2VsZW1lbnQiLCJsZW5ndGgiLCJfbGlrZUNvdW50ZXIiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJsaWtlIiwiX2dldFRlbXBsYXRlIiwiX2RlbGV0ZUJ1dHRvbiIsIl9pbWFnZSIsInNyYyIsImFsdCIsInN0eWxlIiwiZGlzcGxheSIsImNvdW50TGlrZXMiLCJfYWN0aXZlTGlrZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9jb25maWciLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJfYnV0dG9uRWxlbWVudCIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5wdXRFbGVtZW50IiwiZXJyb3JFbGVtZW50IiwiaWQiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwic29tZSIsInNldEF0dHJpYnV0ZSIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfaGFzSW52YWxpZElucHV0IiwiX3NldERpc2FibGVkQnV0dG9uIiwiX3NldEVuYWJsZWRCdXR0b24iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsImNsb3NlIiwiZSIsImlzT3ZlcmxheSIsInRhcmdldCIsImlzQ2xvc2VCdG4iLCJQb3B1cFdpdGhDb25maXJtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIl9oYW5kbGVGb3JtU3VibWl0IiwiY2FyZCIsIl9jYXJkIiwiaGFuZGxlU3VibWl0QWN0aW9uIiwic3VibWl0QWN0aW9uIiwiUG9wdXBXaXRoRm9ybSIsIl9zdWJtaXRCdXR0b24iLCJfc3VibWl0QnV0dG9uQ29udGVudCIsImZvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicmVzZXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpc2xvYWRpbmciLCJ0ZXh0IiwiZGlzYWJsZWQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltZyIsIl9wb3B1cFRpdGxlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlZEl0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIml0ZW0iLCJhcHBlbmQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImFib3V0U2VsZWN0b3IiLCJhdmF0YXJTZWxlY3RvciIsIl9uYW1lU2VsZWN0b3IiLCJfYWJvdXRTZWxlY3RvciIsIl9hdmF0YXJTZWxlY3RvciIsIl9uYW1lRWxlbWVudCIsIl9hYm91dEVsZW1lbnQiLCJfYXZhdGFyRWxlbWVudCIsImluZm9WYWx1ZXMiLCJidXR0b25FZGl0IiwiYnV0dG9uQWRkIiwiYnV0dG9uQXZhdGFyRWRpdCIsImZvcm1FbGVtZW50RWRpdCIsImZvcm1FbGVtZW50QWRkIiwiZm9ybUVsZW1lbnRBdmF0YXIiLCJuYW1lSW5wdXQiLCJhYm91dElucHV0IiwiY2FyZENvbnRhaW5lciIsImZvcm1TZWxlY3RvciIsInVzZXJJbmZvIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsInBvcHVwUGhvdG8iLCJvcGVuIiwiY3JlYXRlQ2FyZCIsInBvcHVwRGVsZXRlIiwic2V0U3VibWl0QWN0aW9uIiwiZGVsZXRlQ2FyZCIsImRlbGV0ZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxpa2VDYXJkIiwiZGlzbGlrZUNhcmQiLCJkaXNsaWtlIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZHNMaXN0IiwiY2FyZEl0ZW0iLCJhZGRJdGVtIiwiYWxsIiwiZ2V0VXNlckluZm8iLCJnZXRDYXJkcyIsImNhcmRzIiwic2V0VXNlckluZm8iLCJzZXRDYXJkSW5mbyIsInJlbmRlckl0ZW1zIiwic3VibWl0RWRpdFBvcHVwIiwicG9wdXBFZGl0Iiwic2hvd0xvYWRpbmciLCJmaW5hbGx5Iiwic3VibWl0QWRkUG9wdXAiLCJwb3B1cEFkZCIsInN1Ym1pdEF2YXRhclBvcHVwIiwicG9wdXBBdmF0YXIiLCJzZXRBdmF0YXIiLCJzZXRFdmVudExpc3RlbmVycyIsImZvcm1WYWxpZGF0b3JBZGQiLCJlbmFibGVWYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRvckVkaXQiLCJmb3JtVmFsaWRhdG9yQXZhdGFyIiwiZGF0YVRvRm9ybSIsInJlc2V0VmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=