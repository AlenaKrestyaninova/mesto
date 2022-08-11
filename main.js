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
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._deleteButton.addEventListener('click', function () {
        _this._handleDeleteCard(_this);
      });

      this._likeButton.addEventListener('click', function () {
        if (_this._likeButton.classList.contains('card__like_active')) {
          _this._handleDislikeCard();
        } else {
          _this._handleLikeCard();
        }
      });

      this._element.querySelector('.card__img').addEventListener('click', function () {
        _this._handleCardClick(_this._name, _this._link);
      });
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
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector('.card__title').textContent = this._name;
      this._element.querySelector('.card__img').src = this._link;
      this._element.querySelector('.card__img').alt = this._name;
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

        _this2.close();
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
    _this._popupSelector = popupSelector;
    _this._popupElement = document.querySelector(_this._popupSelector);
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

        _this2.close();

        _this2._formElement.reset();
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

/***/ "./src/scripts/Api.js":
/*!****************************!*\
  !*** ./src/scripts/Api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(host, token) {
    _classCallCheck(this, Api);

    this._host = host;
    this._token = token;
    this._getJsonOrError = this._getJsonOrError.bind(this);
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
        headers: {
          authorization: this._token
        }
      }).then(this._getJsonOrError);
    }
    /* Создать новую карточку*/

  }, {
    key: "createCard",
    value: function createCard(cardObj) {
      return fetch("".concat(this._host, "/cards"), {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardObj)
      }).then(this._getJsonOrError);
    }
    /* Удалить карточку на сервере*/

  }, {
    key: "deleteCard",
    value: function deleteCard(_id) {
      return fetch("".concat(this._host, "/cards/").concat(_id), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(this._getJsonOrError);
    }
    /* Лайкнуть карточку на сервере*/

  }, {
    key: "likeCard",
    value: function likeCard(_id) {
      return fetch("".concat(this._host, "/cards/").concat(_id, "/likes"), {
        method: 'PUT',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      }).then(this._getJsonOrError);
    }
    /* Удалить лайк на сервере*/

  }, {
    key: "dislikeCard",
    value: function dislikeCard(_id) {
      return fetch("".concat(this._host, "/cards/").concat(_id, "/likes"), {
        method: "DELETE",
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      }).then(this._getJsonOrError);
    }
    /* Запросить данные о юзере*/

  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._host, "/users/me"), {
        method: 'GET',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      }).then(this._getJsonOrError);
    }
    /* Запостить данные о юзере*/

  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      return fetch("".concat(this._host, "/users/me"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
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
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(avatar)
      }).then(this._getJsonOrError);
    }
  }]);

  return Api;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutInput": () => (/* binding */ aboutInput),
/* harmony export */   "avatarInput": () => (/* binding */ avatarInput),
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
var avatarInput = document.querySelector('.popup__input_type_avatar');
var cardContainer = document.querySelector('.elements__container');
var config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  host: 'https://mesto.nomoreparties.co/v1/cohort-47',
  token: 'c6a18f64-a17b-491d-a60f-79193e16e124'
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
/* harmony import */ var _scripts_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/Api.js */ "./src/scripts/Api.js");
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

 //import {initialCards} from '../utils/initialCards.js';










var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]('.profile__title', '.profile__subtitle', '.profile__avatar-img');
var api = new _scripts_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.config.host, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.config.token);
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
          });
        }
      });
    },
    handleLikeCard: function handleLikeCard() {
      api.likeCard(cardObj._id).then(function (res) {
        card.countLikes(res.likes);
        card.like();
      });
    },
    handleDislikeCard: function handleDislikeCard() {
      api.dislikeCard(cardObj._id).then(function (res) {
        card.countLikes(res.likes);
        card.dislike();
      });
    }
  });
  var cardElement = card.generateCard();
  return cardElement;
};

var addCard = function addCard(cardObj) {
  var cardElement = createCard(cardObj);
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardContainer.prepend(cardElement);
};

var cardsList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  items: [],
  renderer: function renderer(cardItem) {
    addCard(cardItem);
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
  }).finally(function () {
    popupEdit.showLoading(false);
  });
}
/* Хендлер сабмита для попапа добавления карточек*/


function submitAddPopup(formValues) {
  popupAdd.showLoading(true, 'Сохранение...');
  api.createCard(formValues).then(function (res) {
    addCard(res);
  }).finally(function () {
    popupAdd.showLoading(false);
  });
}
/* Хендлер сабмита для попапа редактирования аватара*/


function submitAvatarPopup(formValues) {
  popupAvatar.showLoading(true, 'Сохранение...');
  api.setAvatar(formValues).then(function (res) {
    document.querySelector('.profile__avatar-img').src = res.avatar;
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
  formValidatorEdit.resetError();
});
/* Что будет, если ткнуть на кнопку открытия попапа для карточек*/

_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.buttonAdd.addEventListener('click', function () {
  popupAdd.open();
  formValidatorAdd.resetError();
});
/* Что будет, если ткнуть на кнопку редактирования аватара*/

_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.buttonAvatarEdit.addEventListener('click', function () {
  formValidatorAvatar.resetError();
  popupAvatar.open();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFVO0VBQzNDLElBQU1zRCxVQUFVLEdBQUczQyxRQUFRLENBQUNtQixXQUFULEVBQW5CO0VBQ0F4QixnRUFBQSxHQUFrQmdELFVBQVUsQ0FBQ3pNLElBQTdCO0VBQ0EwSixpRUFBQSxHQUFtQitDLFVBQVUsQ0FBQzdFLEtBQTlCO0VBQ0FnRSxTQUFTLENBQUMzQixJQUFWO0VBQ0FzQyxpQkFBaUIsQ0FBQ0csVUFBbEI7QUFDSCxDQU5EO0FBUUE7O0FBQ0F0RCwyRUFBQSxDQUEyQixPQUEzQixFQUFvQyxZQUFVO0VBQzFDNEMsUUFBUSxDQUFDL0IsSUFBVDtFQUNBb0MsZ0JBQWdCLENBQUNLLFVBQWpCO0FBQ0gsQ0FIRDtBQUtBOztBQUNBckQsa0ZBQUEsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBVTtFQUNqRG1ELG1CQUFtQixDQUFDRSxVQUFwQjtFQUNBUixXQUFXLENBQUNqQyxJQUFaO0FBQ0gsQ0FIRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhDb25maXJtLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9zY3JpcHRzL0FwaS5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3lhbmRleF9wcmFrdGlrdW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95YW5kZXhfcHJha3Rpa3VtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8veWFuZGV4X3ByYWt0aWt1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yIChjYXJkT2JqLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaywge3VzZXJJZCwgaGFuZGxlRGVsZXRlQ2FyZCwgaGFuZGxlTGlrZUNhcmQsIGhhbmRsZURpc2xpa2VDYXJkfSl7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBjYXJkT2JqLm5hbWU7XHJcbiAgICAgIHRoaXMuX2xpbmsgPSBjYXJkT2JqLmxpbms7XHJcbiAgICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgICB0aGlzLl9pZCA9IHVzZXJJZDtcclxuICAgICAgdGhpcy5fb3duZXJJZCA9IGNhcmRPYmoub3duZXIuX2lkO1xyXG4gICAgICB0aGlzLl9saWtlcyA9IGNhcmRPYmoubGlrZXM7XHJcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQgPSBoYW5kbGVEZWxldGVDYXJkO1xyXG4gICAgICB0aGlzLl9oYW5kbGVMaWtlQ2FyZCA9IGhhbmRsZUxpa2VDYXJkO1xyXG4gICAgICB0aGlzLl9oYW5kbGVEaXNsaWtlQ2FyZCA9IGhhbmRsZURpc2xpa2VDYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUZW1wbGF0ZSgpe1xyXG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAgIC5jb250ZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcclxuICAgICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkX19saWtlX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICB0aGlzLl9oYW5kbGVEaXNsaWtlQ2FyZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9oYW5kbGVMaWtlQ2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9uYW1lLCB0aGlzLl9saW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlrZSgpIHtcclxuICAgICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJkX19saWtlX2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2xpa2UoKSB7XHJcbiAgICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2FyZF9fbGlrZV9hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50TGlrZXMobGlrZXMpIHtcclxuICAgICAgaWYgKGxpa2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gbGlrZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDYXJkKCl7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG5cclxuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fdGl0bGUnKS50ZXh0Q29udGVudCA9dGhpcy5fbmFtZTtcclxuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1nJykuc3JjID10aGlzLl9saW5rO1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWcnKS5hbHQgPXRoaXMuX25hbWU7XHJcblxyXG4gICAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190cmFzaCcpO1xyXG4gICAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbGlrZScpO1xyXG4gICAgICB0aGlzLl9saWtlQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UtY291bnRlcicpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lkICE9PSB0aGlzLl9vd25lcklkKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb3VudExpa2VzKHRoaXMuX2xpa2VzKTtcclxuICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2NvbmZpZy5pbnB1dFNlbGVjdG9yKSk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZUlucHV0RXJyb3IgKGlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTsgLy/QstGL0LHRgNCw0YLRjCBzcGFuINGBINGC0LXQutGB0YLQvtC8INC+0YjQuNCx0LrQuFxyXG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5pbnB1dEVycm9yQ2xhc3MpOyAvL9GD0LTQsNC70LjRgtGMINGDINC40L3Qv9GD0YLQsCDQutC70LDRgdGBINGBINC+0YjQuNCx0LrQvtC5XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmVycm9yQ2xhc3MpOyAvL9GD0LTQsNC70LjRgtGMINGDINGB0L/QsNC90LAg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIF9zaG93SW5wdXRFcnJvciAoaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApOyAvL9Cy0YvQsdGA0LDRgtGMIHNwYW4g0YEg0YLQtdC60YHRgtC+0Lwg0L7RiNC40LHQutC4XHJcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7IC8v0LTQvtCx0LDQstC40YLRjCDQuNC90L/Rg9GC0YMg0LrQu9Cw0YHRgSDRgSDQvtGI0LjQsdC60L7QuVxyXG4gICAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuZXJyb3JDbGFzcyk7IC8v0LTQvtCx0LDQstC40YLRjCDRgdC/0LDQvdGDINCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eSAoaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgX2hhc0ludmFsaWRJbnB1dCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKGlucHV0RWxlbWVudCA9PiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgX3NldERpc2FibGVkQnV0dG9uICgpIHtcclxuICAgICAgICB0aGlzLl9idXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgX3NldEVuYWJsZWRCdXR0b24gKCkge1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF90b2dnbGVCdXR0b25TdGF0ZSAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldERpc2FibGVkQnV0dG9uKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRFbmFibGVkQnV0dG9uKClcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4geyBcclxuICAgICAgICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTsgXHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzZXRFcnJvcigpIHtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZW5hYmxlVmFsaWRhdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvcikgeyAgICAgIFxyXG4gICAgICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IgPSBwb3B1cFNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fcG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpXHJcbjsgICAgfTtcclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICgna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIH07XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW5lZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KXtcclxuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNPdmVybGF5ID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cCcpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0Nsb3NlQnRuID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fY2xvc2UnKTtcclxuICAgICAgICAgICAgaWYgKGlzT3ZlcmxheSB8fCBpc0Nsb3NlQnRuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aENvbmZpcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCB7aGFuZGxlRm9ybVN1Ym1pdH0pIHsgICAgICBcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuKGNhcmQpIHtcclxuICAgICAgICB0aGlzLl9jYXJkID0gY2FyZDtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3VibWl0QWN0aW9uKHsgaGFuZGxlU3VibWl0QWN0aW9uIH0pIHsgXHJcbiAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24gPSBoYW5kbGVTdWJtaXRBY3Rpb247XHJcbiAgICB9IFxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvciwge2hhbmRsZUZvcm1TdWJtaXR9KSB7ICAgICAgXHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBTZWxlY3RvciA9IHBvcHVwU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9wb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc3VibWl0Jyk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uQ29udGVudCA9IHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgIH07XHJcblxyXG4gICAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBmb3JtVmFsdWVzO1xyXG4gICAgfSBcclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnJlc2V0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNob3dMb2FkaW5nKGlzbG9hZGluZywgdGV4dCkge1xyXG4gICAgICAgIGlmIChpc2xvYWRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy5fc3VibWl0QnV0dG9uQ29udGVudDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwe1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvcikgeyAgICAgIFxyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fcG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBJbWcgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWcnKTtcclxuICAgICAgICB0aGlzLl9wb3B1cFRpdGxlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1nLXRpdGxlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW4obmFtZSwgbGluaykge1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgICAgICB0aGlzLl9wb3B1cEltZy5zcmMgPSBsaW5rO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwSW1nLmFsdCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJkSW5mbyhpdGVtcyl7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcyA9IGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChpdGVtKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lU2VsZWN0b3IsIGFib3V0U2VsZWN0b3IsIGF2YXRhclNlbGVjdG9yKSB7ICAgICAgXHJcbiAgICAgICAgdGhpcy5fbmFtZVNlbGVjdG9yID0gbmFtZVNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuX2Fib3V0U2VsZWN0b3IgPSBhYm91dFNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuX2F2YXRhclNlbGVjdG9yID0gYXZhdGFyU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX25hbWVTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fYWJvdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9hYm91dFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9hdmF0YXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9hdmF0YXJTZWxlY3Rvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFVzZXJJbmZvKCl7XHJcbiAgICAgICAgY29uc3QgaW5mb1ZhbHVlcyA9IHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIGFib3V0OiB0aGlzLl9hYm91dEVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIGF2YXRhcjogdGhpcy5fYXZhdGFyRWxlbWVudC5zcmNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBpbmZvVmFsdWVzXHJcbiAgICB9O1xyXG5cclxuICAgIHNldFVzZXJJbmZvKGZvcm1WYWx1ZXMpe1xyXG4gICAgICAgIHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50ID0gZm9ybVZhbHVlcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2Fib3V0RWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1WYWx1ZXMuYWJvdXQ7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyRWxlbWVudC5zcmMgPSBmb3JtVmFsdWVzLmF2YXRhcjtcclxuICAgIH1cclxufVxyXG4iLCJjbGFzcyBBcGkge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgdG9rZW4pe1xyXG4gICAgICAgIHRoaXMuX2hvc3QgPSBob3N0O1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgdGhpcy5fZ2V0SnNvbk9yRXJyb3IgPSB0aGlzLl9nZXRKc29uT3JFcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qINCS0LXRgNC90YPRgtGMINGA0LXQt9GD0LvRjNGC0LDRgiDQuNC70Lgg0L7RiNC40LHQutGDKi9cclxuICAgIF9nZXRKc29uT3JFcnJvcihyZXMpe1xyXG4gICAgICAgIGlmIChyZXMub2spe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCf0L7Qu9GD0YfQuNGC0Ywg0LjQt9C90LDRh9Cw0LvRjNC90YvQtSDQutCw0YDRgtC+0YfQutC4INGBINGB0LXRgNCy0LXRgNCwKi9cclxuICAgIGdldENhcmRzKCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX3Rva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgLyog0KHQvtC30LTQsNGC0Ywg0L3QvtCy0YPRjiDQutCw0YDRgtC+0YfQutGDKi9cclxuICAgIGNyZWF0ZUNhcmQoY2FyZE9iail7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlbixcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyZE9iailcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCj0LTQsNC70LjRgtGMINC60LDRgNGC0L7Rh9C60YMg0L3QsCDRgdC10YDQstC10YDQtSovXHJcbiAgICBkZWxldGVDYXJkKF9pZCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzLyR7X2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCb0LDQudC60L3Rg9GC0Ywg0LrQsNGA0YLQvtGH0LrRgyDQvdCwINGB0LXRgNCy0LXRgNC1Ki9cclxuICAgIGxpa2VDYXJkKF9pZCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzLyR7X2lkfS9saWtlc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlbixcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgLyog0KPQtNCw0LvQuNGC0Ywg0LvQsNC50Log0L3QsCDRgdC10YDQstC10YDQtSovXHJcbiAgICBkaXNsaWtlQ2FyZChfaWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vY2FyZHMvJHtfaWR9L2xpa2VzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiDQl9Cw0L/RgNC+0YHQuNGC0Ywg0LTQsNC90L3Ri9C1INC+INGO0LfQtdGA0LUqL1xyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIC8qINCX0LDQv9C+0YHRgtC40YLRjCDQtNCw0L3QvdGL0LUg0L4g0Y7Qt9C10YDQtSovXHJcbiAgICBzZXRVc2VySW5mbyhkYXRhKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlbixcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYWJvdXQ6IGRhdGEuYWJvdXQsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5fZ2V0SnNvbk9yRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgLyog0JfQsNC/0L7RgdGC0LjRgtGMINCw0LLQsNGC0LDRgCovXHJcbiAgICBzZXRBdmF0YXIoYXZhdGFyKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGF2YXRhcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aGVuKHRoaXMuX2dldEpzb25PckVycm9yKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBpOyIsImNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdCcpO1xyXG5jb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkJyk7XHJcbmNvbnN0IGJ1dHRvbkF2YXRhckVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYXZhdGFyJyk7XHJcblxyXG5jb25zdCBmb3JtRWxlbWVudEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm1fdHlwZV9lZGl0Jyk7XHJcbmNvbnN0IGZvcm1FbGVtZW50QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtX3R5cGVfYWRkJyk7XHJcbmNvbnN0IGZvcm1FbGVtZW50QXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtX3R5cGVfYXZhdGFyJyk7XHJcblxyXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X3R5cGVfbmFtZScpO1xyXG5jb25zdCBhYm91dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX2Fib3V0Jyk7XHJcbmNvbnN0IGF2YXRhcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX2F2YXRhcicpO1xyXG5cclxuXHJcbmNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2NvbnRhaW5lcicpO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcclxuICAgIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcclxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zdWJtaXQnLFxyXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19zdWJtaXRfZGlzYWJsZWQnLFxyXG4gICAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxyXG4gICAgZXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dC1lcnJvcl9hY3RpdmUnLFxyXG4gICAgaG9zdDogJ2h0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNDcnLFxyXG4gICAgdG9rZW46ICdjNmExOGY2NC1hMTdiLTQ5MWQtYTYwZi03OTE5M2UxNmUxMjQnXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7YnV0dG9uRWRpdCwgYnV0dG9uQWRkLCBidXR0b25BdmF0YXJFZGl0LCBmb3JtRWxlbWVudEVkaXQsIGZvcm1FbGVtZW50QWRkLCBmb3JtRWxlbWVudEF2YXRhciwgbmFtZUlucHV0LCBhYm91dElucHV0LCBhdmF0YXJJbnB1dCwgY2FyZENvbnRhaW5lciwgY29uZmlnfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi8uLi9wYWdlcy9pbmRleC5jc3MnO1xyXG5cclxuLy9pbXBvcnQge2luaXRpYWxDYXJkc30gZnJvbSAnLi4vdXRpbHMvaW5pdGlhbENhcmRzLmpzJztcclxuaW1wb3J0IEFwaSBmcm9tICcuLi9zY3JpcHRzL0FwaS5qcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aENvbmZpcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhDb25maXJtLmpzJztcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xyXG5pbXBvcnQge2J1dHRvbkVkaXQsIGJ1dHRvbkFkZCwgYnV0dG9uQXZhdGFyRWRpdCwgZm9ybUVsZW1lbnRFZGl0LCBmb3JtRWxlbWVudEFkZCwgZm9ybUVsZW1lbnRBdmF0YXIsIG5hbWVJbnB1dCwgYWJvdXRJbnB1dCwgYXZhdGFySW5wdXQsIGNhcmRDb250YWluZXIsIGNvbmZpZ30gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJztcclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKCcucHJvZmlsZV9fdGl0bGUnLCAnLnByb2ZpbGVfX3N1YnRpdGxlJywgJy5wcm9maWxlX19hdmF0YXItaW1nJyk7XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKGNvbmZpZy5ob3N0LCBjb25maWcudG9rZW4pO1xyXG5cclxubGV0IHVzZXJJZDtcclxuXHJcblxyXG5jb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAobmFtZSwgbGluaykgPT4ge1xyXG4gICAgcG9wdXBQaG90by5vcGVuKG5hbWUsIGxpbmspXHJcbn07XHJcblxyXG4vKiDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0L7Rh9C10LoqL1xyXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmRPYmopID0+e1xyXG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmRPYmosICcuY2FyZC10ZW1wbGF0ZScsIGhhbmRsZUNhcmRDbGljaywge1xyXG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIGhhbmRsZURlbGV0ZUNhcmQ6ICgpPT57XHJcbiAgICAgICAgICAgIHBvcHVwRGVsZXRlLm9wZW4oKTtcclxuICAgICAgICAgICAgcG9wdXBEZWxldGUuc2V0U3VibWl0QWN0aW9uKHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdEFjdGlvbjogKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBhcGkuZGVsZXRlQ2FyZChjYXJkT2JqLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUxpa2VDYXJkOiAoKT0+e1xyXG4gICAgICAgICAgICBhcGkubGlrZUNhcmQoY2FyZE9iai5faWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY291bnRMaWtlcyhyZXMubGlrZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQubGlrZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZURpc2xpa2VDYXJkOiAoKT0+e1xyXG4gICAgICAgICAgICBhcGkuZGlzbGlrZUNhcmQoY2FyZE9iai5faWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY291bnRMaWtlcyhyZXMubGlrZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuZGlzbGlrZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgYWRkQ2FyZCA9IChjYXJkT2JqKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoY2FyZE9iaik7IFxyXG4gICAgY2FyZENvbnRhaW5lci5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNhcmRzTGlzdCA9IG5ldyBTZWN0aW9uICh7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICByZW5kZXJlcjogKGNhcmRJdGVtKSA9PiB7XHJcbiAgICAgICAgYWRkQ2FyZChjYXJkSXRlbSk7IFxyXG4gICAgfX0sXHJcbiAgICAnLmVsZW1lbnRzX19jb250YWluZXInXHJcbik7XHJcblxyXG5cclxuXHJcbi8qINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0YHQtdGA0LLQtdGA0LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRiyAqL1xyXG5Qcm9taXNlLmFsbChbYXBpLmdldFVzZXJJbmZvKCksIGFwaS5nZXRDYXJkcygpXSlcclxuICAgIC50aGVuKChbZGF0YSwgY2FyZHNdKSA9PiB7XHJcbiAgICAgICAgdXNlcklkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YSk7XHJcbiAgICAgICAgY2FyZHNMaXN0LnNldENhcmRJbmZvKGNhcmRzKTtcclxuICAgICAgICBjYXJkc0xpc3QucmVuZGVySXRlbXMoY2FyZHMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiDQpdC10L3QtNC70LXRgCDRgdCw0LHQvNC40YLQsCDQtNC70Y8g0L/QvtC/0LDQv9CwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y8qL1xyXG5mdW5jdGlvbiBzdWJtaXRFZGl0UG9wdXAoZm9ybVZhbHVlcyl7XHJcbiAgICBwb3B1cEVkaXQuc2hvd0xvYWRpbmcodHJ1ZSwgJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJyk7XHJcbiAgICBhcGkuc2V0VXNlckluZm8oZm9ybVZhbHVlcylcclxuICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCk9PntcclxuICAgICAgICAgICAgcG9wdXBFZGl0LnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG59XHJcblxyXG4vKiDQpdC10L3QtNC70LXRgCDRgdCw0LHQvNC40YLQsCDQtNC70Y8g0L/QvtC/0LDQv9CwINC00L7QsdCw0LLQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C10LoqL1xyXG5mdW5jdGlvbiBzdWJtaXRBZGRQb3B1cChmb3JtVmFsdWVzKXtcclxuICAgIHBvcHVwQWRkLnNob3dMb2FkaW5nKHRydWUsICfQodC+0YXRgNCw0L3QtdC90LjQtS4uLicpO1xyXG4gICAgYXBpLmNyZWF0ZUNhcmQoZm9ybVZhbHVlcylcclxuICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBhZGRDYXJkKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICBwb3B1cEFkZC5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuLyog0KXQtdC90LTQu9C10YAg0YHQsNCx0LzQuNGC0LAg0LTQu9GPINC/0L7Qv9Cw0L/QsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINCw0LLQsNGC0LDRgNCwKi9cclxuZnVuY3Rpb24gc3VibWl0QXZhdGFyUG9wdXAoZm9ybVZhbHVlcyl7XHJcbiAgICBwb3B1cEF2YXRhci5zaG93TG9hZGluZyh0cnVlLCAn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nKTtcclxuICAgIGFwaS5zZXRBdmF0YXIoZm9ybVZhbHVlcylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hdmF0YXItaW1nJykuc3JjID0gcmVzLmF2YXRhclxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpPT57XHJcbiAgICAgICAgICAgIHBvcHVwQXZhdGFyLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG59XHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINGBINC60LDRgNGC0LjQvdC60L7QuSovXHJcbmNvbnN0IHBvcHVwUGhvdG8gPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5wb3B1cF90eXBlX3Bob3RvJyk7XHJcbnBvcHVwUGhvdG8uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8qINCh0L7Qt9C00LDQtdC8INGN0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C10LoqL1xyXG5jb25zdCBwb3B1cEFkZCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gICAgJy5wb3B1cF90eXBlX2FkZCcsIHtoYW5kbGVGb3JtU3VibWl0OiBzdWJtaXRBZGRQb3B1cH1cclxuKTsgXHJcbnBvcHVwQWRkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPKi9cclxuY29uc3QgcG9wdXBFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgICAnLnBvcHVwX3R5cGVfZWRpdCcsIHtoYW5kbGVGb3JtU3VibWl0OiBzdWJtaXRFZGl0UG9wdXB9XHJcbik7IFxyXG5wb3B1cEVkaXQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8qINCh0L7Qt9C00LDQtdC8INGN0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINGD0LTQsNC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuCovXHJcbmNvbnN0IHBvcHVwRGVsZXRlID0gbmV3IFBvcHVwV2l0aENvbmZpcm0oXHJcbiAgICAnLnBvcHVwX3R5cGVfZGVsZXRlJywge1xyXG4gICAgICAgIGhhbmRsZUZvcm1TdWJtaXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXBEZWxldGUuc3VibWl0QWN0aW9uKClcclxuICAgICAgICB9XHJcbiAgICB9KTsgXHJcbnBvcHVwRGVsZXRlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINCw0LLQsNGC0LDRgNCwKi9cclxuY29uc3QgcG9wdXBBdmF0YXIgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICAgICcucG9wdXBfdHlwZV9hdmF0YXInLCB7aGFuZGxlRm9ybVN1Ym1pdDogc3VibWl0QXZhdGFyUG9wdXB9XHJcbik7IFxyXG5wb3B1cEF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuXHJcblxyXG4vKiDQodC+0LfQtNCw0LXQvCDRjdC60LfQtdC80L/Qu9GP0YDRiyDQutC70LDRgdGB0L7QsiDRhNC+0YDQvC3QstCw0LvQuNC00LDRgtC+0YDQvtCyKi9cclxuY29uc3QgZm9ybVZhbGlkYXRvckFkZCA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgZm9ybUVsZW1lbnRBZGQpO1xyXG5mb3JtVmFsaWRhdG9yQWRkLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JFZGl0ID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudEVkaXQpO1xyXG5mb3JtVmFsaWRhdG9yRWRpdC5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdG9yQXZhdGFyID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudEF2YXRhcik7XHJcbmZvcm1WYWxpZGF0b3JBdmF0YXIuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuXHJcbi8qINCn0YLQviDQsdGD0LTQtdGCLCDQtdGB0LvQuCDRgtC60L3Rg9GC0Ywg0L3QsCDQutC90L7Qv9C60YMg0L7RgtC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LAg0LTQu9GPINC/0YDQvtGE0LjQu9GPKi9cclxuYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkYXRhVG9Gb3JtID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9IGRhdGFUb0Zvcm0ubmFtZTtcclxuICAgIGFib3V0SW5wdXQudmFsdWUgPSBkYXRhVG9Gb3JtLmFib3V0O1xyXG4gICAgcG9wdXBFZGl0Lm9wZW4oKTtcclxuICAgIGZvcm1WYWxpZGF0b3JFZGl0LnJlc2V0RXJyb3IoKTtcclxufSk7XHJcblxyXG4vKiDQp9GC0L4g0LHRg9C00LXRgiwg0LXRgdC70Lgg0YLQutC90YPRgtGMINC90LAg0LrQvdC+0L/QutGDINC+0YLQutGA0YvRgtC40Y8g0L/QvtC/0LDQv9CwINC00LvRjyDQutCw0YDRgtC+0YfQtdC6Ki9cclxuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBvcHVwQWRkLm9wZW4oKTtcclxuICAgIGZvcm1WYWxpZGF0b3JBZGQucmVzZXRFcnJvcigpO1xyXG59KTtcclxuXHJcbi8qINCn0YLQviDQsdGD0LTQtdGCLCDQtdGB0LvQuCDRgtC60L3Rg9GC0Ywg0L3QsCDQutC90L7Qv9C60YMg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsCovXHJcbmJ1dHRvbkF2YXRhckVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZm9ybVZhbGlkYXRvckF2YXRhci5yZXNldEVycm9yKCk7XHJcbiAgICBwb3B1cEF2YXRhci5vcGVuKCk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiY2FyZE9iaiIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsInVzZXJJZCIsImhhbmRsZURlbGV0ZUNhcmQiLCJoYW5kbGVMaWtlQ2FyZCIsImhhbmRsZURpc2xpa2VDYXJkIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaWQiLCJfb3duZXJJZCIsIm93bmVyIiwiX2xpa2VzIiwibGlrZXMiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9oYW5kbGVMaWtlQ2FyZCIsIl9oYW5kbGVEaXNsaWtlQ2FyZCIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9kZWxldGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiX2xpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9lbGVtZW50IiwiYWRkIiwicmVtb3ZlIiwibGVuZ3RoIiwiX2xpa2VDb3VudGVyIiwidGV4dENvbnRlbnQiLCJfZ2V0VGVtcGxhdGUiLCJzcmMiLCJhbHQiLCJzdHlsZSIsImRpc3BsYXkiLCJjb3VudExpa2VzIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiRm9ybVZhbGlkYXRvciIsImNvbmZpZyIsImZvcm1FbGVtZW50IiwiX2NvbmZpZyIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRTZWxlY3RvciIsIl9idXR0b25FbGVtZW50Iiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbnB1dEVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJpZCIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJzb21lIiwic2V0QXR0cmlidXRlIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsInJlbW92ZUF0dHJpYnV0ZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfc2V0RGlzYWJsZWRCdXR0b24iLCJfc2V0RW5hYmxlZEJ1dHRvbiIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsImNsb3NlIiwiZSIsImlzT3ZlcmxheSIsInRhcmdldCIsImlzQ2xvc2VCdG4iLCJQb3B1cFdpdGhDb25maXJtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIl9oYW5kbGVGb3JtU3VibWl0IiwiY2FyZCIsIl9jYXJkIiwiaGFuZGxlU3VibWl0QWN0aW9uIiwic3VibWl0QWN0aW9uIiwiUG9wdXBXaXRoRm9ybSIsIl9zdWJtaXRCdXR0b24iLCJfc3VibWl0QnV0dG9uQ29udGVudCIsImZvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicmVzZXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpc2xvYWRpbmciLCJ0ZXh0IiwiZGlzYWJsZWQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltZyIsIl9wb3B1cFRpdGxlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlZEl0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIml0ZW0iLCJhcHBlbmQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImFib3V0U2VsZWN0b3IiLCJhdmF0YXJTZWxlY3RvciIsIl9uYW1lU2VsZWN0b3IiLCJfYWJvdXRTZWxlY3RvciIsIl9hdmF0YXJTZWxlY3RvciIsIl9uYW1lRWxlbWVudCIsIl9hYm91dEVsZW1lbnQiLCJfYXZhdGFyRWxlbWVudCIsImluZm9WYWx1ZXMiLCJhYm91dCIsImF2YXRhciIsIkFwaSIsImhvc3QiLCJ0b2tlbiIsIl9ob3N0IiwiX3Rva2VuIiwiX2dldEpzb25PckVycm9yIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsImZldGNoIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ0aGVuIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiYnV0dG9uRWRpdCIsImJ1dHRvbkFkZCIsImJ1dHRvbkF2YXRhckVkaXQiLCJmb3JtRWxlbWVudEVkaXQiLCJmb3JtRWxlbWVudEFkZCIsImZvcm1FbGVtZW50QXZhdGFyIiwibmFtZUlucHV0IiwiYWJvdXRJbnB1dCIsImF2YXRhcklucHV0IiwiY2FyZENvbnRhaW5lciIsImZvcm1TZWxlY3RvciIsInVzZXJJbmZvIiwiYXBpIiwicG9wdXBQaG90byIsIm9wZW4iLCJjcmVhdGVDYXJkIiwicG9wdXBEZWxldGUiLCJzZXRTdWJtaXRBY3Rpb24iLCJkZWxldGVDYXJkIiwiZGVsZXRlIiwibGlrZUNhcmQiLCJsaWtlIiwiZGlzbGlrZUNhcmQiLCJkaXNsaWtlIiwiZ2VuZXJhdGVDYXJkIiwiYWRkQ2FyZCIsInByZXBlbmQiLCJjYXJkc0xpc3QiLCJjYXJkSXRlbSIsImFsbCIsImdldFVzZXJJbmZvIiwiZ2V0Q2FyZHMiLCJjYXJkcyIsInNldFVzZXJJbmZvIiwic2V0Q2FyZEluZm8iLCJyZW5kZXJJdGVtcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdEVkaXRQb3B1cCIsInBvcHVwRWRpdCIsInNob3dMb2FkaW5nIiwiZmluYWxseSIsInN1Ym1pdEFkZFBvcHVwIiwicG9wdXBBZGQiLCJzdWJtaXRBdmF0YXJQb3B1cCIsInBvcHVwQXZhdGFyIiwic2V0QXZhdGFyIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJmb3JtVmFsaWRhdG9yQWRkIiwiZW5hYmxlVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0b3JFZGl0IiwiZm9ybVZhbGlkYXRvckF2YXRhciIsImRhdGFUb0Zvcm0iLCJyZXNldEVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==