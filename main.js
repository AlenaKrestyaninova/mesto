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
    key: "setSubmitAction",
    value: function setSubmitAction(_ref2) {
      var handleSubmitAction = _ref2.handleSubmitAction;
      this._handleFormSubmit = handleSubmitAction;
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
      this._container.prepend(item);
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
    value: function setUserInfo(_ref) {
      var name = _ref.name,
          about = _ref.about,
          avatar = _ref.avatar,
          _id = _ref._id;
      this._nameElement.textContent = name;
      this._aboutElement.textContent = about;
      this._avatarElement.src = avatar;
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
            popupDelete.close();
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
    userInfo.setUserInfo(res);
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
  handleFormSubmit: function handleFormSubmit() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxJQUFJdkksb0VBQUosQ0FBa0JDLHVEQUFsQixFQUEwQnNGLGdFQUExQixDQUExQjtBQUNBZ0QsaUJBQWlCLENBQUNELGdCQUFsQjtBQUVBLElBQU1FLG1CQUFtQixHQUFHLElBQUl4SSxvRUFBSixDQUFrQkMsdURBQWxCLEVBQTBCd0Ysa0VBQTFCLENBQTVCO0FBQ0ErQyxtQkFBbUIsQ0FBQ0YsZ0JBQXBCO0FBR0E7O0FBQ0FsRCw0RUFBQSxDQUE0QixPQUE1QixFQUFxQyxZQUFVO0VBQzNDLElBQU1xRCxVQUFVLEdBQUczQyxRQUFRLENBQUN1QixXQUFULEVBQW5CO0VBQ0EzQixnRUFBQSxHQUFrQitDLFVBQVUsQ0FBQzVMLElBQTdCO0VBQ0E4SSxpRUFBQSxHQUFtQjhDLFVBQVUsQ0FBQ3hMLEtBQTlCO0VBQ0EySyxTQUFTLENBQUMxQixJQUFWO0VBQ0FxQyxpQkFBaUIsQ0FBQ0csZUFBbEI7QUFDSCxDQU5EO0FBUUE7O0FBQ0FyRCwyRUFBQSxDQUEyQixPQUEzQixFQUFvQyxZQUFVO0VBQzFDMkMsUUFBUSxDQUFDOUIsSUFBVDtFQUNBbUMsZ0JBQWdCLENBQUNLLGVBQWpCO0FBQ0gsQ0FIRDtBQUtBOztBQUNBcEQsa0ZBQUEsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBVTtFQUNqRGtELG1CQUFtQixDQUFDRSxlQUFwQjtFQUNBUixXQUFXLENBQUNoQyxJQUFaO0FBQ0gsQ0FIRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcGkge1xyXG4gICAgY29uc3RydWN0b3Ioe2hvc3QsIGhlYWRlcnN9KXtcclxuICAgICAgICB0aGlzLl9ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcclxuICAgICAgICAvL3RoaXMuX2dldEpzb25PckVycm9yID0gdGhpcy5fZ2V0SnNvbk9yRXJyb3IuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiDQktC10YDQvdGD0YLRjCDRgNC10LfRg9C70YzRgtCw0YIg0LjQu9C4INC+0YjQuNCx0LrRgyovXHJcbiAgICBfZ2V0SnNvbk9yRXJyb3IocmVzKXtcclxuICAgICAgICBpZiAocmVzLm9rKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlcy5zdGF0dXN9YClcclxuICAgIH1cclxuXHJcbiAgICAvKiDQn9C+0LvRg9GH0LjRgtGMINC40LfQvdCw0YfQsNC70YzQvdGL0LUg0LrQsNGA0YLQvtGH0LrQuCDRgSDRgdC10YDQstC10YDQsCovXHJcbiAgICBnZXRDYXJkcygpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9ob3N0fS9jYXJkc2AsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCh0L7Qt9C00LDRgtGMINC90L7QstGD0Y4g0LrQsNGA0YLQvtGH0LrRgyovXHJcbiAgICBjcmVhdGVDYXJkKGNhcmRPYmope1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9ob3N0fS9jYXJkc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGNhcmRPYmoubmFtZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IGNhcmRPYmoubGluayxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCj0LTQsNC70LjRgtGMINC60LDRgNGC0L7Rh9C60YMg0L3QsCDRgdC10YDQstC10YDQtSovXHJcbiAgICBkZWxldGVDYXJkKF9pZCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzLyR7X2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCb0LDQudC60L3Rg9GC0Ywg0LrQsNGA0YLQvtGH0LrRgyDQvdCwINGB0LXRgNCy0LXRgNC1Ki9cclxuICAgIGxpa2VDYXJkKF9pZCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzLyR7X2lkfS9saWtlc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCj0LTQsNC70LjRgtGMINC70LDQudC6INC90LAg0YHQtdGA0LLQtdGA0LUqL1xyXG4gICAgZGlzbGlrZUNhcmQoX2lkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzLyR7X2lkfS9saWtlc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIH0pLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qINCX0LDQv9GA0L7RgdC40YLRjCDQtNCw0L3QvdGL0LUg0L4g0Y7Qt9C10YDQtSovXHJcbiAgICBnZXRVc2VySW5mbygpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9ob3N0fS91c2Vycy9tZWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCX0LDQv9C+0YHRgtC40YLRjCDQtNCw0L3QvdGL0LUg0L4g0Y7Qt9C10YDQtSovXHJcbiAgICBzZXRVc2VySW5mbyhkYXRhKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYWJvdXQ6IGRhdGEuYWJvdXQsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgLyog0JfQsNC/0L7RgdGC0LjRgtGMINCw0LLQsNGC0LDRgCovXHJcbiAgICBzZXRBdmF0YXIoYXZhdGFyKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGF2YXRhcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBpOyIsImNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3IgKGNhcmRPYmosIGNhcmRTZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrLCB7dXNlcklkLCBoYW5kbGVEZWxldGVDYXJkLCBoYW5kbGVMaWtlQ2FyZCwgaGFuZGxlRGlzbGlrZUNhcmR9KXtcclxuICAgICAgdGhpcy5fbmFtZSA9IGNhcmRPYmoubmFtZTtcclxuICAgICAgdGhpcy5fbGluayA9IGNhcmRPYmoubGluaztcclxuICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgICAgIHRoaXMuX2lkID0gdXNlcklkO1xyXG4gICAgICB0aGlzLl9vd25lcklkID0gY2FyZE9iai5vd25lci5faWQ7XHJcbiAgICAgIHRoaXMuX2xpa2VzID0gY2FyZE9iai5saWtlcztcclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCA9IGhhbmRsZURlbGV0ZUNhcmQ7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VDYXJkID0gaGFuZGxlTGlrZUNhcmQ7XHJcbiAgICAgIHRoaXMuX2hhbmRsZURpc2xpa2VDYXJkID0gaGFuZGxlRGlzbGlrZUNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFRlbXBsYXRlKCl7XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXHJcbiAgICAgICAgLmNvbnRlbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcmQnKVxyXG4gICAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGxpa2UoKSB7XHJcbiAgICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FyZF9fbGlrZV9hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNsaWtlKCkge1xyXG4gICAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmRfX2xpa2VfYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudExpa2VzKGxpa2VzKSB7XHJcbiAgICAgIGlmIChsaWtlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLl9saWtlQ291bnRlci50ZXh0Q29udGVudCA9ICcwJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9saWtlQ291bnRlci50ZXh0Q29udGVudCA9IGxpa2VzLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9hY3RpdmVMaWtlKCkge1xyXG4gICAgICB0aGlzLl9saWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lkID09PSBsaWtlLl9pZCkge1xyXG4gICAgICAgICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJkX19saWtlX2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDYXJkKCl7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG5cclxuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fdHJhc2gnKTtcclxuICAgICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UnKTtcclxuICAgICAgdGhpcy5fbGlrZUNvdW50ZXIgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19saWtlLWNvdW50ZXInKTtcclxuICAgICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWcnKTtcclxuXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3RpdGxlJykudGV4dENvbnRlbnQgPXRoaXMuX25hbWU7XHJcbiAgICAgIHRoaXMuX2ltYWdlLnNyYyA9dGhpcy5fbGluaztcclxuICAgICAgdGhpcy5faW1hZ2UuYWx0ID10aGlzLl9uYW1lO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lkICE9PSB0aGlzLl9vd25lcklkKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb3VudExpa2VzKHRoaXMuX2xpa2VzKTtcclxuICAgICAgdGhpcy5fYWN0aXZlTGlrZSgpO1xyXG4gICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkX19saWtlX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICB0aGlzLl9oYW5kbGVEaXNsaWtlQ2FyZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9oYW5kbGVMaWtlQ2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9uYW1lLCB0aGlzLl9saW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fY29uZmlnLmlucHV0U2VsZWN0b3IpKTtcclxuICAgICAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlSW5wdXRFcnJvciAoaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApOyAvL9Cy0YvQsdGA0LDRgtGMIHNwYW4g0YEg0YLQtdC60YHRgtC+0Lwg0L7RiNC40LHQutC4XHJcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7IC8v0YPQtNCw0LvQuNGC0Ywg0YMg0LjQvdC/0YPRgtCwINC60LvQsNGB0YEg0YEg0L7RiNC40LHQutC+0LlcclxuICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuZXJyb3JDbGFzcyk7IC8v0YPQtNCw0LvQuNGC0Ywg0YMg0YHQv9Cw0L3QsCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YFcclxuICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgIH07XHJcblxyXG4gICAgX3Nob3dJbnB1dEVycm9yIChpbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7IC8v0LLRi9Cx0YDQsNGC0Ywgc3BhbiDRgSDRgtC10LrRgdGC0L7QvCDQvtGI0LjQsdC60LhcclxuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuaW5wdXRFcnJvckNsYXNzKTsgLy/QtNC+0LHQsNCy0LjRgtGMINC40L3Qv9GD0YLRgyDQutC70LDRgdGBINGBINC+0YjQuNCx0LrQvtC5XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5lcnJvckNsYXNzKTsgLy/QtNC+0LHQsNCy0LjRgtGMINGB0L/QsNC90YMg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5IChpbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBfaGFzSW52YWxpZElucHV0ICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoaW5wdXRFbGVtZW50ID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfc2V0RGlzYWJsZWRCdXR0b24gKCkge1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBfc2V0RW5hYmxlZEJ1dHRvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX3RvZ2dsZUJ1dHRvblN0YXRlICgpIHtcclxuICAgICAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0RGlzYWJsZWRCdXR0b24oKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEVuYWJsZWRCdXR0b24oKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIF9zZXRFdmVudExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7IFxyXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpOyBcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVuYWJsZVZhbGlkYXRpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHsgICAgICBcclxuICAgICAgICB0aGlzLl9wb3B1cFNlbGVjdG9yID0gcG9wdXBTZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3BvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKVxyXG47ICAgIH07XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyICgna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIH07XHJcblxyXG4gICAgX2hhbmRsZUVzY0Nsb3NlKGV2dCl7XHJcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc092ZXJsYXkgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VCdG4gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZScpO1xyXG4gICAgICAgICAgICBpZiAoaXNPdmVybGF5IHx8IGlzQ2xvc2VCdG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoQ29uZmlybSBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIHtoYW5kbGVGb3JtU3VibWl0fSkgeyAgICAgIFxyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0OyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBzZXRTdWJtaXRBY3Rpb24oeyBoYW5kbGVTdWJtaXRBY3Rpb24gfSkgeyBcclxuICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlU3VibWl0QWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIHtoYW5kbGVGb3JtU3VibWl0fSkgeyAgICAgIFxyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0OyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19zdWJtaXQnKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25Db250ZW50ID0gdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGZvcm1WYWx1ZXM7XHJcbiAgICB9IFxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucmVzZXQoKTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNob3dMb2FkaW5nKGlzbG9hZGluZywgdGV4dCkge1xyXG4gICAgICAgIGlmIChpc2xvYWRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy5fc3VibWl0QnV0dG9uQ29udGVudDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwe1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvcikgeyAgICAgIFxyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwSW1nID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1nJyk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBUaXRsZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltZy10aXRsZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuKG5hbWUsIGxpbmspIHtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBJbWcuc3JjID0gbGluaztcclxuICAgICAgICB0aGlzLl9wb3B1cEltZy5hbHQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FyZEluZm8oaXRlbXMpe1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJdGVtcygpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWVTZWxlY3RvciwgYWJvdXRTZWxlY3RvciwgYXZhdGFyU2VsZWN0b3IpIHsgICAgICBcclxuICAgICAgICB0aGlzLl9uYW1lU2VsZWN0b3IgPSBuYW1lU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fYWJvdXRTZWxlY3RvciA9IGFib3V0U2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyU2VsZWN0b3IgPSBhdmF0YXJTZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl9uYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fbmFtZVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9hYm91dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2Fib3V0U2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2F2YXRhckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2F2YXRhclNlbGVjdG9yKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICBjb25zdCBpbmZvVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgYWJvdXQ6IHRoaXMuX2Fib3V0RWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgYXZhdGFyOiB0aGlzLl9hdmF0YXJFbGVtZW50LnNyY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGluZm9WYWx1ZXNcclxuICAgIH07XHJcblxyXG4gICAgc2V0VXNlckluZm8oeyBuYW1lLCBhYm91dCwgYXZhdGFyLCBfaWQgfSl7XHJcbiAgICAgICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2Fib3V0RWxlbWVudC50ZXh0Q29udGVudCA9IGFib3V0O1xyXG4gICAgICAgIHRoaXMuX2F2YXRhckVsZW1lbnQuc3JjID0gYXZhdGFyO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdCcpO1xyXG5jb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkJyk7XHJcbmNvbnN0IGJ1dHRvbkF2YXRhckVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYXZhdGFyJyk7XHJcblxyXG5jb25zdCBmb3JtRWxlbWVudEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm1fdHlwZV9lZGl0Jyk7XHJcbmNvbnN0IGZvcm1FbGVtZW50QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtX3R5cGVfYWRkJyk7XHJcbmNvbnN0IGZvcm1FbGVtZW50QXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtX3R5cGVfYXZhdGFyJyk7XHJcblxyXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X3R5cGVfbmFtZScpO1xyXG5jb25zdCBhYm91dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX2Fib3V0Jyk7XHJcblxyXG5cclxuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxyXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3N1Ym1pdCcsXHJcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3N1Ym1pdF9kaXNhYmxlZCcsXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9lcnJvcicsXHJcbiAgICBlcnJvckNsYXNzOiAncG9wdXBfX2lucHV0LWVycm9yX2FjdGl2ZScsXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7YnV0dG9uRWRpdCwgYnV0dG9uQWRkLCBidXR0b25BdmF0YXJFZGl0LCBmb3JtRWxlbWVudEVkaXQsIGZvcm1FbGVtZW50QWRkLCBmb3JtRWxlbWVudEF2YXRhciwgbmFtZUlucHV0LCBhYm91dElucHV0LCBjYXJkQ29udGFpbmVyLCBjb25maWd9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLy4uL3BhZ2VzL2luZGV4LmNzcyc7XHJcblxyXG5pbXBvcnQgQXBpIGZyb20gJy4uL2NvbXBvbmVudHMvQXBpLmpzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoQ29uZmlybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm0uanMnO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7XHJcbmltcG9ydCB7YnV0dG9uRWRpdCwgYnV0dG9uQWRkLCBidXR0b25BdmF0YXJFZGl0LCBmb3JtRWxlbWVudEVkaXQsIGZvcm1FbGVtZW50QWRkLCBmb3JtRWxlbWVudEF2YXRhciwgbmFtZUlucHV0LCBhYm91dElucHV0LCBjYXJkQ29udGFpbmVyLCBjb25maWd9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbygnLnByb2ZpbGVfX3RpdGxlJywgJy5wcm9maWxlX19zdWJ0aXRsZScsICcucHJvZmlsZV9fYXZhdGFyLWltZycpO1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgICBob3N0OiBcImh0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNDdcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiBcImM2YTE4ZjY0LWExN2ItNDkxZC1hNjBmLTc5MTkzZTE2ZTEyNFwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5sZXQgdXNlcklkOyBcclxuXHJcblxyXG5jb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAobmFtZSwgbGluaykgPT4ge1xyXG4gICAgcG9wdXBQaG90by5vcGVuKG5hbWUsIGxpbmspXHJcbn07XHJcblxyXG4vKiDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0L7Rh9C10LoqL1xyXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmRPYmopID0+e1xyXG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmRPYmosICcuY2FyZC10ZW1wbGF0ZScsIGhhbmRsZUNhcmRDbGljaywge1xyXG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIGhhbmRsZURlbGV0ZUNhcmQ6ICgpPT57XHJcbiAgICAgICAgICAgIHBvcHVwRGVsZXRlLm9wZW4oKTtcclxuICAgICAgICAgICAgcG9wdXBEZWxldGUuc2V0U3VibWl0QWN0aW9uKHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdEFjdGlvbjogKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBhcGkuZGVsZXRlQ2FyZChjYXJkT2JqLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuZGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cERlbGV0ZS5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlTGlrZUNhcmQ6ICgpPT57XHJcbiAgICAgICAgICAgIGFwaS5saWtlQ2FyZChjYXJkT2JqLl9pZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jb3VudExpa2VzKHJlcy5saWtlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5saWtlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVEaXNsaWtlQ2FyZDogKCk9PntcclxuICAgICAgICAgICAgYXBpLmRpc2xpa2VDYXJkKGNhcmRPYmouX2lkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNvdW50TGlrZXMocmVzLmxpa2VzKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmRpc2xpa2UoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgICBcclxufVxyXG5cclxuLy8gY29uc3QgYWRkQ2FyZCA9IChjYXJkT2JqKSA9PiB7XHJcbi8vICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoY2FyZE9iaik7IFxyXG4vLyAgICAgY2FyZENvbnRhaW5lci5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxuLy8gfVxyXG5cclxuXHJcbmNvbnN0IGNhcmRzTGlzdCA9IG5ldyBTZWN0aW9uICh7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICByZW5kZXJlcjogKGNhcmRJdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGNhcmRJdGVtKTtcclxuICAgICAgICBjYXJkc0xpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7IFxyXG4gICAgfX0sXHJcbiAgICAnLmVsZW1lbnRzX19jb250YWluZXInXHJcbik7XHJcblxyXG5cclxuXHJcbi8qINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0YHQtdGA0LLQtdGA0LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRiyAqL1xyXG5Qcm9taXNlLmFsbChbYXBpLmdldFVzZXJJbmZvKCksIGFwaS5nZXRDYXJkcygpXSlcclxuICAgIC50aGVuKChbZGF0YSwgY2FyZHNdKSA9PiB7XHJcbiAgICAgICAgdXNlcklkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YSk7XHJcbiAgICAgICAgY2FyZHNMaXN0LnNldENhcmRJbmZvKGNhcmRzKTtcclxuICAgICAgICBjYXJkc0xpc3QucmVuZGVySXRlbXMoY2FyZHMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiDQpdC10L3QtNC70LXRgCDRgdCw0LHQvNC40YLQsCDQtNC70Y8g0L/QvtC/0LDQv9CwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y8qL1xyXG5mdW5jdGlvbiBzdWJtaXRFZGl0UG9wdXAoZm9ybVZhbHVlcyl7XHJcbiAgICBwb3B1cEVkaXQuc2hvd0xvYWRpbmcodHJ1ZSwgJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJyk7XHJcbiAgICBhcGkuc2V0VXNlckluZm8oZm9ybVZhbHVlcylcclxuICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXMpO1xyXG4gICAgICAgICAgICBwb3B1cEVkaXQuY2xvc2UoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgLmZpbmFsbHkoKCk9PntcclxuICAgICAgICAgICAgcG9wdXBFZGl0LnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG59XHJcblxyXG4vKiDQpdC10L3QtNC70LXRgCDRgdCw0LHQvNC40YLQsCDQtNC70Y8g0L/QvtC/0LDQv9CwINC00L7QsdCw0LLQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C10LoqL1xyXG5mdW5jdGlvbiBzdWJtaXRBZGRQb3B1cChjYXJkT2JqKXtcclxuICAgIHBvcHVwQWRkLnNob3dMb2FkaW5nKHRydWUsICfQodC+0YXRgNCw0L3QtdC90LjQtS4uLicpO1xyXG4gICAgYXBpLmNyZWF0ZUNhcmQoY2FyZE9iailcclxuICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQocmVzKVxyXG4gICAgICAgICAgICBjYXJkc0xpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHBvcHVwQWRkLmNsb3NlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgIC5maW5hbGx5KCgpPT57XHJcbiAgICAgICAgICAgIHBvcHVwQWRkLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG59XHJcblxyXG4vKiDQpdC10L3QtNC70LXRgCDRgdCw0LHQvNC40YLQsCDQtNC70Y8g0L/QvtC/0LDQv9CwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LDQstCw0YLQsNGA0LAqL1xyXG5mdW5jdGlvbiBzdWJtaXRBdmF0YXJQb3B1cChmb3JtVmFsdWVzKXtcclxuICAgIHBvcHVwQXZhdGFyLnNob3dMb2FkaW5nKHRydWUsICfQodC+0YXRgNCw0L3QtdC90LjQtS4uLicpO1xyXG4gICAgYXBpLnNldEF2YXRhcihmb3JtVmFsdWVzKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzKTtcclxuICAgICAgICAgICAgICAgIHBvcHVwQXZhdGFyLmNsb3NlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT57XHJcbiAgICAgICAgICAgICAgICBwb3B1cEF2YXRhci5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbn1cclxuXHJcbi8qINCh0L7Qt9C00LDQtdC8INGN0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0YEg0LrQsNGA0YLQuNC90LrQvtC5Ki9cclxuY29uc3QgcG9wdXBQaG90byA9IG5ldyBQb3B1cFdpdGhJbWFnZSgnLnBvcHVwX3R5cGVfcGhvdG8nKTtcclxucG9wdXBQaG90by5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLyog0KHQvtC30LTQsNC10Lwg0Y3QutC30LXQvNC/0LvRj9GAINC/0L7Qv9Cw0L/QsCDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LXQuiovXHJcbmNvbnN0IHBvcHVwQWRkID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgICAnLnBvcHVwX3R5cGVfYWRkJywge2hhbmRsZUZvcm1TdWJtaXQ6IHN1Ym1pdEFkZFBvcHVwfVxyXG4pOyBcclxucG9wdXBBZGQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8qINCh0L7Qt9C00LDQtdC8INGN0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y8qL1xyXG5jb25zdCBwb3B1cEVkaXQgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICAgICcucG9wdXBfdHlwZV9lZGl0Jywge2hhbmRsZUZvcm1TdWJtaXQ6IHN1Ym1pdEVkaXRQb3B1cH1cclxuKTsgXHJcbnBvcHVwRWRpdC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLyog0KHQvtC30LTQsNC10Lwg0Y3QutC30LXQvNC/0LvRj9GAINC/0L7Qv9Cw0L/QsCDQtNC70Y8g0YPQtNCw0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4Ki9cclxuY29uc3QgcG9wdXBEZWxldGUgPSBuZXcgUG9wdXBXaXRoQ29uZmlybShcclxuICAgICcucG9wdXBfdHlwZV9kZWxldGUnLCB7XHJcbiAgICAgICAgaGFuZGxlRm9ybVN1Ym1pdDogKCkgPT4ge30sXHJcbiAgICB9KTsgXHJcbnBvcHVwRGVsZXRlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINCw0LLQsNGC0LDRgNCwKi9cclxuY29uc3QgcG9wdXBBdmF0YXIgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICAgICcucG9wdXBfdHlwZV9hdmF0YXInLCB7aGFuZGxlRm9ybVN1Ym1pdDogc3VibWl0QXZhdGFyUG9wdXB9XHJcbik7IFxyXG5wb3B1cEF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuXHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YDRiyDQutC70LDRgdGB0L7QsiDRhNC+0YDQvC3QstCw0LvQuNC00LDRgtC+0YDQvtCyKi9cclxuY29uc3QgZm9ybVZhbGlkYXRvckFkZCA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgZm9ybUVsZW1lbnRBZGQpO1xyXG5mb3JtVmFsaWRhdG9yQWRkLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JFZGl0ID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudEVkaXQpO1xyXG5mb3JtVmFsaWRhdG9yRWRpdC5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdG9yQXZhdGFyID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudEF2YXRhcik7XHJcbmZvcm1WYWxpZGF0b3JBdmF0YXIuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuXHJcbi8qINCn0YLQviDQsdGD0LTQtdGCLCDQtdGB0LvQuCDRgtC60L3Rg9GC0Ywg0L3QsCDQutC90L7Qv9C60YMg0L7RgtC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LAg0LTQu9GPINC/0YDQvtGE0LjQu9GPKi9cclxuYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkYXRhVG9Gb3JtID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9IGRhdGFUb0Zvcm0ubmFtZTtcclxuICAgIGFib3V0SW5wdXQudmFsdWUgPSBkYXRhVG9Gb3JtLmFib3V0O1xyXG4gICAgcG9wdXBFZGl0Lm9wZW4oKTtcclxuICAgIGZvcm1WYWxpZGF0b3JFZGl0LnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbi8qINCn0YLQviDQsdGD0LTQtdGCLCDQtdGB0LvQuCDRgtC60L3Rg9GC0Ywg0L3QsCDQutC90L7Qv9C60YMg0L7RgtC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LAg0LTQu9GPINC60LDRgNGC0L7Rh9C10LoqL1xyXG5idXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcG9wdXBBZGQub3BlbigpO1xyXG4gICAgZm9ybVZhbGlkYXRvckFkZC5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG4vKiDQp9GC0L4g0LHRg9C00LXRgiwg0LXRgdC70Lgg0YLQutC90YPRgtGMINC90LAg0LrQvdC+0L/QutGDINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LDQstCw0YLQsNGA0LAqL1xyXG5idXR0b25BdmF0YXJFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGZvcm1WYWxpZGF0b3JBdmF0YXIucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgICBwb3B1cEF2YXRhci5vcGVuKCk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJBcGkiLCJob3N0IiwiaGVhZGVycyIsIl9ob3N0IiwiX2hlYWRlcnMiLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiZmV0Y2giLCJ0aGVuIiwiX2dldEpzb25PckVycm9yIiwiY2FyZE9iaiIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImxpbmsiLCJfaWQiLCJkYXRhIiwiYWJvdXQiLCJhdmF0YXIiLCJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwidXNlcklkIiwiaGFuZGxlRGVsZXRlQ2FyZCIsImhhbmRsZUxpa2VDYXJkIiwiaGFuZGxlRGlzbGlrZUNhcmQiLCJfbmFtZSIsIl9saW5rIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfb3duZXJJZCIsIm93bmVyIiwiX2xpa2VzIiwibGlrZXMiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9oYW5kbGVMaWtlQ2FyZCIsIl9oYW5kbGVEaXNsaWtlQ2FyZCIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9saWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiX2VsZW1lbnQiLCJsZW5ndGgiLCJfbGlrZUNvdW50ZXIiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJsaWtlIiwiX2dldFRlbXBsYXRlIiwiX2RlbGV0ZUJ1dHRvbiIsIl9pbWFnZSIsInNyYyIsImFsdCIsInN0eWxlIiwiZGlzcGxheSIsImNvdW50TGlrZXMiLCJfYWN0aXZlTGlrZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9jb25maWciLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJfYnV0dG9uRWxlbWVudCIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5wdXRFbGVtZW50IiwiZXJyb3JFbGVtZW50IiwiaWQiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwic29tZSIsInNldEF0dHJpYnV0ZSIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfaGFzSW52YWxpZElucHV0IiwiX3NldERpc2FibGVkQnV0dG9uIiwiX3NldEVuYWJsZWRCdXR0b24iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsImNsb3NlIiwiZSIsImlzT3ZlcmxheSIsInRhcmdldCIsImlzQ2xvc2VCdG4iLCJQb3B1cFdpdGhDb25maXJtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIl9oYW5kbGVGb3JtU3VibWl0IiwiaGFuZGxlU3VibWl0QWN0aW9uIiwiUG9wdXBXaXRoRm9ybSIsIl9zdWJtaXRCdXR0b24iLCJfc3VibWl0QnV0dG9uQ29udGVudCIsImZvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicmVzZXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpc2xvYWRpbmciLCJ0ZXh0IiwiZGlzYWJsZWQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltZyIsIl9wb3B1cFRpdGxlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlZEl0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIml0ZW0iLCJwcmVwZW5kIiwiVXNlckluZm8iLCJuYW1lU2VsZWN0b3IiLCJhYm91dFNlbGVjdG9yIiwiYXZhdGFyU2VsZWN0b3IiLCJfbmFtZVNlbGVjdG9yIiwiX2Fib3V0U2VsZWN0b3IiLCJfYXZhdGFyU2VsZWN0b3IiLCJfbmFtZUVsZW1lbnQiLCJfYWJvdXRFbGVtZW50IiwiX2F2YXRhckVsZW1lbnQiLCJpbmZvVmFsdWVzIiwiYnV0dG9uRWRpdCIsImJ1dHRvbkFkZCIsImJ1dHRvbkF2YXRhckVkaXQiLCJmb3JtRWxlbWVudEVkaXQiLCJmb3JtRWxlbWVudEFkZCIsImZvcm1FbGVtZW50QXZhdGFyIiwibmFtZUlucHV0IiwiYWJvdXRJbnB1dCIsImNhcmRDb250YWluZXIiLCJmb3JtU2VsZWN0b3IiLCJ1c2VySW5mbyIsImFwaSIsImF1dGhvcml6YXRpb24iLCJwb3B1cFBob3RvIiwib3BlbiIsImNyZWF0ZUNhcmQiLCJjYXJkIiwicG9wdXBEZWxldGUiLCJzZXRTdWJtaXRBY3Rpb24iLCJkZWxldGVDYXJkIiwiZGVsZXRlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibGlrZUNhcmQiLCJkaXNsaWtlQ2FyZCIsImRpc2xpa2UiLCJnZW5lcmF0ZUNhcmQiLCJjYXJkc0xpc3QiLCJjYXJkSXRlbSIsImFkZEl0ZW0iLCJhbGwiLCJnZXRVc2VySW5mbyIsImdldENhcmRzIiwiY2FyZHMiLCJzZXRVc2VySW5mbyIsInNldENhcmRJbmZvIiwicmVuZGVySXRlbXMiLCJzdWJtaXRFZGl0UG9wdXAiLCJwb3B1cEVkaXQiLCJzaG93TG9hZGluZyIsImZpbmFsbHkiLCJzdWJtaXRBZGRQb3B1cCIsInBvcHVwQWRkIiwic3VibWl0QXZhdGFyUG9wdXAiLCJwb3B1cEF2YXRhciIsInNldEF2YXRhciIsInNldEV2ZW50TGlzdGVuZXJzIiwiZm9ybVZhbGlkYXRvckFkZCIsImVuYWJsZVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdG9yRWRpdCIsImZvcm1WYWxpZGF0b3JBdmF0YXIiLCJkYXRhVG9Gb3JtIiwicmVzZXRWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==