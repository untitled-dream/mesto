(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseURL=e.baseURL,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_defaultResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialData",value:function(){return Promise.all([this.getUserData(),this.getInitialCards()])}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseURL,"/cards"),{headers:this._headers}).then(this._defaultResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._baseURL,"/users/me"),{headers:this._headers}).then(this._defaultResponse)}},{key:"setUserData",value:function(e){return fetch("".concat(this._baseURL,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._defaultResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._defaultResponse)}},{key:"sendCard",value:function(e){return fetch("".concat(this._baseURL,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.place,link:e.link})}).then(this._defaultResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._baseURL,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._defaultResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseURL,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then(this._defaultResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseURL,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._defaultResponse)}},{key:"updateProfilePhoto",value:function(e){return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._defaultResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o){var i,a,u=this,s=o.handleCardOpenClick,c=o.handleCardDeleteClick,l=o.setLike,f=o.removeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=function(){u._image.addEventListener("click",(function(){u._handleCardOpenClick()})),u._deleteCardButton.addEventListener("click",u._handleCardDeleteClick),u._likeButton.addEventListener("click",(function(){u._likeButton.classList.contains(u._activeLikeSelector)?u._dislike(u._data):u._like(u._data)}))},(i="_setEventListeners")in this?Object.defineProperty(this,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[i]=a,this._data=t,this._ownerID=n,this._cardsTemplateSelector=r,this._activeLikeSelector="elements__like-button_active",this._handleCardOpenClick=s,this._handleCardDeleteClick=c,this._setLike=l,this._removeLike=f}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardsTemplateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"setLikeCount",value:function(e){this._likeCounter.textContent=String(e.likes.length)}},{key:"_like",value:function(e){this._setLikeActiveClass(),this._setLike(e)}},{key:"_dislike",value:function(e){this._removeLikeActiveClass(),this._removeLike(e)}},{key:"_setLikeActiveClass",value:function(){this._likeButton.classList.add(this._activeLikeSelector)}},{key:"_removeLikeActiveClass",value:function(){this._likeButton.classList.remove(this._activeLikeSelector)}},{key:"_checkLikeState",value:function(){var e=this;this._data.likes.forEach((function(t){t._id===e._ownerID&&e._setLikeActiveClass()}))}},{key:"_checkIsOwn",value:function(){this._data.owner._id!==this._ownerID&&this._deleteCard(this._deleteCardButton)}},{key:"deleteCard",value:function(){this._deleteCard(this._element)}},{key:"_deleteCard",value:function(e){e.remove(),e=null}},{key:"getCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".elements__image"),this._title=this._element.querySelector(".elements__title"),this._likeButton=this._element.querySelector(".elements__like-button"),this._likeCounter=this._element.querySelector(".elements__like-counter"),this._deleteCardButton=this._element.querySelector(".elements__trash-button"),this._image.src=this._data.link,this._image.alt=this._data.name,this._title.textContent=this._data.name,this._element.setAttribute("id","".concat(this._data._id)),this._checkIsOwn(),this._checkLikeState(),this.setLikeCount(this._data),this._setEventListeners(),this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItemOnPage",value:function(e,t){"prepend"==t?this._container.prepend(e):this._container.append(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n=t.userNameSelector,r=t.userDescSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userDesc=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userDesc.textContent}}},{key:"setUserInfo",value:function(e){this.setUserAvatar(e),this._userName.textContent=e.name,this._userDesc.textContent=e.about,this._userAvatar.alt=e.name}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.fieldsetSelector,o=t.inputSelector,i=t.submitButtonSelector,a=t.inactiveButtonClass,u=t.inputErrorClass,s=t.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formFieldset=r,this._inputSelector=o,this._submitButtonSelector=i,this._inactiveButtonClass=a,this._inputErrorClass=u,this._errorClass=s,this._popupWindow=n,this._submitButton=this._popupWindow.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._popupWindow.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners(this._popupWindow.querySelector(this._formFieldset))}},{key:"setInitialState",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"_showInputError",value:function(e,t){var n=this._popupWindow.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._popupWindow.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),f(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup__button-close"),this._boundEscapeCloseHandler=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){var e=this;this._buttonClose.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._handleOverlayClose(t)}))}},{key:"open",value:function(){this.setEventListeners(),document.addEventListener("keydown",this._boundEscapeCloseHandler),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._boundEscapeCloseHandler),this._popup.classList.remove("popup_opened")}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._popup.querySelector(".form"),t._submitButton=t._form.querySelector(".form__button-submit"),t._submitButtonDefaultText=t._submitButton.textContent,t._handleFormSubmit=r,t._boundFormSubmit=t._formSubmit.bind(m(t)),t}return t=a,(n=[{key:"_formSubmit",value:function(e){e.preventDefault(),this._handleFormSubmit(this._getInputValues())}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".form__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){_(k(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._boundFormSubmit)}},{key:"isLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonDefaultText}},{key:"close",value:function(){this._form.reset(),_(k(a.prototype),"close",this).call(this)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function E(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._captionSelector=t._popup.querySelector("#card-caption"),t._imageSelector=t._popup.querySelector("#card-image"),t}return t=a,(n=[{key:"open",value:function(e){C(j(a.prototype),"open",this).call(this),this._imageSelector.alt=e.name,this._imageSelector.src=e.link,this._captionSelector.textContent=e.name}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function T(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._popup.querySelector(".form"),t._handleFormSubmit=r,t._boundFormSubmit=t._formSubmit.bind(A(t)),t}return t=a,(n=[{key:"_formSubmit",value:function(e){e.preventDefault(),this._handleFormSubmit(this._data)}},{key:"setEventListeners",value:function(){B(U(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._boundFormSubmit)}},{key:"open",value:function(e){B(U(a.prototype),"open",this).call(this),this._data=e}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p),F={fieldsetSelector:".form__fieldset",inputSelector:".form__input",submitButtonSelector:".form__button-submit",inactiveButtonClass:"form__button-submit_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},V=document.querySelector("#card-add"),N=(document.querySelector("#card-view"),document.querySelector("#profile-edit")),H=document.querySelector("#avatar-update"),W=N.querySelector("#name"),J=N.querySelector("#about"),M=(V.querySelector("#card-name"),V.querySelector("#source"),document.querySelector(".profile__button-edit")),z=document.querySelector(".profile__button-avatar"),$=document.querySelector(".profile__button-add");function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=null,Q=null,X=new t({baseURL:"https://mesto.nomoreparties.co/v1/cohort-43",headers:{authorization:"c8b0aa60-35b2-4dbb-ac6e-5a0006835602","Content-Type":"application/json"}}),Y=new u({userNameSelector:".profile__name",userDescSelector:".profile__description",userAvatarSelector:".profile__avatar"}),Z=new P("#card-view"),ee=new c(F,N),te=new c(F,H),ne=new c(F,V);function re(e){var t=new r(e,K,"#card-template",{handleCardOpenClick:function(){return Z.open(e)},handleCardDeleteClick:function(){Q=t,se.open(e)},setLike:function(e){X.setLike(e).then((function(e){return t.setLikeCount(e)})).catch((function(e){return console.log(e)}))},removeLike:function(e){X.removeLike(e).then((function(e){return t.setLikeCount(e)})).catch((function(e){return console.log(e)}))}});return t}ee.enableValidation(),te.enableValidation(),ne.enableValidation();var oe=new i({renderer:function(e){var t=re(e),n=t.getCard();t.setLikeCount(e),oe.addItemOnPage(n,"prepend")}},".elements__list");X.getInitialData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K=o._id,Y.setUserInfo(o),oe.rendererItems(i)})).catch((function(e){return console.log(e)}));var ie=new S({popupSelector:"#profile-edit",handleFormSubmit:function(e){ie.isLoading(!0),X.setUserData(e).then((function(e){Y.setUserInfo(e)})).catch((function(e){return console.log(e)})).finally((function(){ie.isLoading(!1),ie.close()}))}}),ae=new S({popupSelector:"#avatar-update",handleFormSubmit:function(e){ae.isLoading(!0),X.setUserAvatar(e).then((function(e){Y.setUserAvatar(e)})).catch((function(e){return console.log(e)})).finally((function(){ae.isLoading(!1),ae.close()})),ae.close()}}),ue=new S({popupSelector:"#card-add",handleFormSubmit:function(e){ue.isLoading(!0),X.sendCard(e).then((function(e){var t=re(e).getCard();oe.addItemOnPage(t,"append")})).catch((function(e){return console.log(e)})).finally((function(){ue.isLoading(!1),ue.close()}))}}),se=new x({popupSelector:"#card-delete-confirmation",handleFormSubmit:function(e){X.removeCard(e).then((function(){return Q.deleteCard()})).then((function(){Q=null,se.close()})).catch((function(e){return console.log(e)}))}});M.addEventListener("click",(function(){var e=Y.getUserInfo();W.value=e.name,J.value=e.about,ee.setInitialState(),ie.open()})),$.addEventListener("click",(function(){ne.setInitialState(),ue.open()})),z.addEventListener("click",(function(){te.setInitialState(),ae.open()}))})();