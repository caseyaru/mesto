(()=>{"use strict";var t={174:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},425:(t,e,r)=>{t.exports=r.p+"e65e8ae2093f2a1aa279.png"},937:(t,e,r)=>{t.exports=r.p+"e1792cd1bf55c68d1538.svg"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.p="",r.b=document.baseURI||self.location.href,(()=>{var t={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__error_visible"},e=document.forms.editing,n=document.forms.adding,o=document.forms.avatar,i=document.querySelector(".profile__edit-avatar"),u=document.querySelector(".profile__add-button"),c=document.querySelector(".profile__edit-button"),a=(document.querySelector(".popup__field_type_mesto-name"),document.querySelector(".popup__field_type_mesto-link"),document.querySelector(".popup__field_type_name")),l=document.querySelector(".popup__field_type_text");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var p=function(){function t(e,r,n,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.userId=e,this._card=r,this._name=r.name,this._link=r.link,this._cardId=r._id,this._likes=r.likes,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=u,this._template=n}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".elements__card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".elements__image"),this._like=this._element.querySelector(".elements__heart"),this._image.src=this._link,this._element.querySelector(".elements__text").textContent=this._name,this._image.alt="".concat(this._name),this._buttonDelete=this._element.querySelector(".elements__delete"),this.userId!==this._card.owner._id&&(this._buttonDelete.style.display="none"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._like.addEventListener("click",(function(){t._handleLikeClick(t._cardId)})),this._buttonDelete.addEventListener("click",(function(){t._handleDeleteClick(t._cardId,t._element)})),this._image.addEventListener("click",(function(e){t._handleCardClick(e)}))}},{key:"_handleLikeClick",value:function(){this._like.classList.toggle("elements__heart_active")}},{key:"isLiked",value:function(){return this._like.contains("elements__heart_active")}},{key:"counterLike",value:function(t){this._like.classList.toggle("elements__heart_active"),this._likes.textContent=t.likes.length}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var d=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=r,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonSubmit=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t,e){t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){var e=t.target,r=document.querySelector("#".concat(e.id,"-error"));e.validity.valid?this._hideInputError(e,r):this._showInputError(e,r)}},{key:"_setEventListeners",value:function(){var t=this;this._form.addEventListener("input",(function(e){t._inputList.forEach((function(){t._toggleButton(),t._checkInputValidity(e)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButton()}},{key:"_toggleButton",value:function(){var t=this._form.checkValidity();this._buttonSubmit.disabled=!t,this._buttonSubmit.classList.toggle(this._inactiveButtonClass,!t)}},{key:"resetErrors",value:function(){var t=this;this._inputList.forEach((function(e){var r=t._form.querySelector("#".concat(e.id,"-error"));t._hideInputError(e,r)})),this._toggleButton()}},{key:"deactivateButton",value:function(){this._buttonSubmit.disabled=!0,this._buttonSubmit.classList.add(this._inactiveButtonClass)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}var v=function(){function t(e){var r=e.name,n=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(r),this._about=document.querySelector(n),this._avatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar,o=t.id;this._name.textContent=e,this._about.textContent=r,this._avatar.src=n,this.userId=o}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var S=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"addItemStart",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("click",(function(e){e.target===t._popup&&t.close()}))}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},P.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._description=e._popup.querySelector(".popup__description"),e}return e=u,(r=[{key:"open",value:function(t){P(L(u.prototype),"open",this).call(this),this._image.src=t.target.src,this._image.alt=t.target.alt,this._description.textContent=t.target.alt}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},q.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(n);if(o){var r=B(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleFormSubmit=e,r._form=r._popup.querySelector(".popup__form"),r._inputList=r._popup.querySelectorAll(".popup__field"),r._buttonSubmit=r._popup.querySelector(".popup__submit"),r}return e=u,(r=[{key:"setEventListeners",value:function(){var t=this;q(B(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"renderLoading",value:function(t){this._buttonSubmit.textContent=t?"Сохранение...":this._buttonSubmit.textContent}},{key:"close",value:function(){q(B(u.prototype),"close",this).call(this),this._form.reset()}}])&&R(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},V.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(n);if(o){var r=M(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleDelete=e,r._buttonSubmit=r._popup.querySelector(".popup__submit"),r}return e=u,(r=[{key:"open",value:function(t,e){V(M(u.prototype),"open",this).call(this),this._buttonSubmit.addEventListener("click",this._handleDelete),this.cardId=t,this.card=e}},{key:"close",value:function(){V(M(u.prototype),"close",this).call(this),this._buttonSubmit.removeEventListener("click",this._handleDelete)}}])&&A(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===F(o)?o:String(o)),n)}var o}var H,z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Произошла ошибка (запрос профиля)")}))}},{key:"putUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.profileName,about:t.profileText})}).then((function(t){return t.ok?t.json():Promise.reject("Произошла ошибка (новый профиль)")}))}},{key:"putUserAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t["input-avatar"]})}).then((function(t){return t.ok?t.json():Promise.reject("Произошла ошибка (новый аватар)")}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Произошла ошибка (получение карточек)")}))}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.mestoName,link:t.mestoLink})}).then((function(t){return t.ok?t.json():Promise.reject("Произошла ошибка(добавление карточки)")}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Произошла ошибка(удаление карточки)")}))}},{key:"likeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Произошла ошибка(лайк)")}))}},{key:"unlikeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Произошла ошибка(лайк)")}))}}])&&G(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Q=r(174),$=r.n(Q),K=new URL(r(937),r.b),W=new URL(r(425),r.b);function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}$()(K),$()(W),console.log("версия от 22.04 20:37");var Y=new z({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"5341efdf-0efa-4de4-9e2d-8c8a726218b1","Content-Type":"application/json"}});function Z(t){var e=new p(H,t,"#card",(function(t){return et.open(t)}),(function(t,e){return ut.open(t,e)}),(function(t){e.isLiked?Y.unlikeCard(t).then((function(t){return e.counterLike(t)})).catch(console.log("Ошибка при постановке лайка")):Y.likeCard(t).then((function(t){return e.counterLike(t)})).catch(console.log("Ошибка при удалении лайка"))}));return e.generateCard()}Promise.all([Y.getUserInfo(),Y.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return X(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];H=o._id,ct.setUserInfo(o),tt.renderItems(i)})).catch(console.log);var tt=new S((function(t){tt.addItem(Z(t))}),".elements__cards"),et=new I(".popup_type_image");et.setEventListeners();var rt=new d(t,e),nt=new d(t,n),ot=new d(t,o);rt.enableValidation(),nt.enableValidation(),ot.enableValidation();var it=new U(".popup_type_add",(function(t){it.renderLoading(!0),Y.addCard(t).then((function(t){it.close(),tt.addItemStart(Z(t))})).catch(console.log).finally((function(){return it.renderLoading(!1)}))}));it.setEventListeners(),u.addEventListener("click",(function(){nt.resetErrors(),it.open()}));var ut=new J(".popup_type_delete",(function(){Y.deleteCard(ut.cardId).then((function(){ut.card.remove(),ut.close()})).catch(console.log("Ошибка при удалении"))})),ct=new v({name:".profile__name",about:".profile__text",avatar:".profile__avatar"}),at=new U(".popup_type_edit",(function(t){at.renderLoading(!0),Y.putUserInfo(t).then((function(t){ct.setUserInfo(t),at.close()})).catch(console.log).finally((function(){return at.renderLoading(!1)}))}));at.setEventListeners(),c.addEventListener("click",(function(){a.value=ct.getUserInfo().name,l.value=ct.getUserInfo().about,rt.resetErrors(),at.open()}));var lt=new U(".popup_type_avatar",(function(t){lt.renderLoading(!0),Y.putUserAvatar(t).then((function(t){ct.setUserInfo(t),lt.close()})).catch(console.log).finally((function(){return lt.renderLoading(!1)}))}));lt.setEventListeners(),i.addEventListener("click",(function(){ot.resetErrors(),lt.open()}))})()})();