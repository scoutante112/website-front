"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["default-src_components_Auth_Login_tsx-src_components_Auth_LoginForm_tsx"],{

/***/ "./src/api/auth/isAccount.ts":
/*!***********************************!*\
  !*** ./src/api/auth/isAccount.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const isAccount = function (email) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.apilink}/auth/isAccount?email=${email}`).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAccount);

/***/ }),

/***/ "./src/api/auth/login.ts":
/*!*******************************!*\
  !*** ./src/api/auth/login.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const loginUser = function (email) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/auth/login`, {
      email
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginUser);

/***/ }),

/***/ "./src/api/auth/loginOauth.ts":
/*!************************************!*\
  !*** ./src/api/auth/loginOauth.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const loginOauth = function (type) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/auth/oauthlogin`, {
      type
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginOauth);

/***/ }),

/***/ "./src/api/auth/passkeys/addPasskey.ts":
/*!*********************************************!*\
  !*** ./src/api/auth/passkeys/addPasskey.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http */ "./src/api/http.ts");


const addPasskey = function (token) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.apilink}/auth/passkeys/add`, {
      token
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPasskey);

/***/ }),

/***/ "./src/api/auth/passkeys/createOption.ts":
/*!***********************************************!*\
  !*** ./src/api/auth/passkeys/createOption.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http */ "./src/api/http.ts");


const createOption = function (email) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.apilink}/auth/passkeys/options?email=${email}`).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOption);

/***/ }),

/***/ "./src/api/auth/passkeys/usePassKey.ts":
/*!*********************************************!*\
  !*** ./src/api/auth/passkeys/usePassKey.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http */ "./src/api/http.ts");


const usePasskey = function (data, email) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.apilink}/auth/passkeys/use`, {
      data,
      email
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePasskey);

/***/ }),

/***/ "./src/api/auth/passkeys/verificationPasskey.ts":
/*!******************************************************!*\
  !*** ./src/api/auth/passkeys/verificationPasskey.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http */ "./src/api/http.ts");


const verificationPasskey = function (data, email) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.apilink}/auth/passkeys/verification`, {
      data,
      email
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verificationPasskey);

/***/ }),

/***/ "./src/api/auth/register.ts":
/*!**********************************!*\
  !*** ./src/api/auth/register.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const registerUser = function (email, name) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/auth/register`, {
      email,
      name
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerUser);

/***/ }),

/***/ "./src/components/Auth/AskCode.tsx":
/*!*****************************************!*\
  !*** ./src/components/Auth/AskCode.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AskCode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _api_auth_passkeys_addPasskey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/auth/passkeys/addPasskey */ "./src/api/auth/passkeys/addPasskey.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/http */ "./src/api/http.ts");
/* harmony import */ var _Elements_Form_Field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Elements/Form/Field */ "./src/components/Elements/Form/Field.tsx");













const form = (0,yup__WEBPACK_IMPORTED_MODULE_2__.object)({
  code: (0,yup__WEBPACK_IMPORTED_MODULE_2__.string)().required('You need to enter the code.')
});
function AskCode({
  setOpenModal,
  email
}) {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_1__.useDark)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_7__.config.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_8__.fetcher);
  function getEmailAction(email) {
    if (email.includes('@')) {
      const domain = email.split('@')[1].toLowerCase();
      if (domain === 'gmail.com') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Go to your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
          href: "https://mail.google.com",
          target: "_blank",
          rel: "noreferrer",
          className: "text-bg450-logo"
        }, "Gmail mailbox"));
      } else if (domain === 'yahoo.com') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Go to your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
          href: "https://mail.yahoo.com",
          target: "_blank",
          rel: "noreferrer",
          className: "text-bg450-logo"
        }, "Yahoo Mail mailbox"));
      } else if (domain === 'outlook.com' || domain === 'hotmail.com' || domain === 'live.com') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Go to your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
          href: "https://outlook.live.com",
          target: "_blank",
          rel: "noreferrer",
          className: "text-bg450-logo"
        }, "Outlook mailbox"));
      } else if (domain === 'aol.com') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Go to your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
          href: "https://mail.aol.com",
          target: "_blank",
          rel: "noreferrer",
          className: "text-bg450-logo"
        }, "AOL Mail mailbox"));
      } else if (domain === 'icloud.com') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Go to your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
          href: "https://www.icloud.com/mail",
          target: "_blank",
          rel: "noreferrer",
          className: "text-bg450-logo"
        }, "iCloud Mail mailbox"));
      } // Ajoutez d'autres conditions pour d'autres domaines de messagerie ici

      // Si le domaine de messagerie ne correspond à aucun cas connu, retournez null
      return null;
    } else {
      // Si l'e-mail ne contient pas de caractère "@", retournez null
      return null;
    }
  }
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
    initialValues: {
      code: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      if (values.code.length !== 6) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Your code is incorrect.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        return setLoading(false);
      }
      (0,_api_auth_passkeys_addPasskey__WEBPACK_IMPORTED_MODULE_5__["default"])(values.code).then(function (data) {
        document.cookie = `access_token=${data.data.data}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
        setLoading(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('You are now logged in, and your passkey has been successfully linked to your account!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        return mutate().then(function () {
          return navigate('/');
        });
      }).catch(function () {
        setLoading(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('An unexpected error occurred. Do you use the correct code? Code: BagAuth-057', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "fixed inset-0 z-10 w-screen overflow-y-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-100 translate-y-0 sm:scale-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.Dialog.Panel, {
    className: `${dark ? 'bg-bg450-lessdark' : 'bg-white'} relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:flex sm:items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-tellow-100 sm:mx-0 sm:h-10 sm:w-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "h-6 w-6 text-yellow-600",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.Dialog.Title, {
    as: "h3",
    className: "text-base font-semibold leading-6 text-gray-900"
  }, "Add a new PassKey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "text-sm text-gray-500"
  }, "For finish the creation of the passkey you need to enter the code that has been sent to your email.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("br", null), getEmailAction(email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
    className: "space-y-6",
    action: "#",
    method: "POST",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Form_Field__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: 'Enter the code',
    id: 'code',
    type: 'text',
    onChange: formik.handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "submit",
    className: `${loading && 'opacity-50'} bg-bg450-logo px-3 py-1.5 text-white hover:bg-bg450-logohover inline-flex rounded-md text-sm font-semibold shadow-sm sm:w-auto`
  }, "Add PassKey"))))))))));
}

/***/ }),

/***/ "./src/components/Auth/FinalAuthForm.tsx":
/*!***********************************************!*\
  !*** ./src/components/Auth/FinalAuthForm.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FinalAuthForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _api_auth_passkeys_createOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/auth/passkeys/createOption */ "./src/api/auth/passkeys/createOption.ts");
/* harmony import */ var _github_webauthn_json_browser_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @github/webauthn-json/browser-ponyfill */ "./node_modules/@github/webauthn-json/dist/esm/webauthn-json.browser-ponyfill.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _api_auth_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/auth/login */ "./src/api/auth/login.ts");
/* harmony import */ var _api_auth_passkeys_usePassKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/auth/passkeys/usePassKey */ "./src/api/auth/passkeys/usePassKey.ts");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/http */ "./src/api/http.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");
/* harmony import */ var _api_auth_passkeys_verificationPasskey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/auth/passkeys/verificationPasskey */ "./src/api/auth/passkeys/verificationPasskey.ts");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _AskCode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AskCode */ "./src/components/Auth/AskCode.tsx");














function FinalAuthForm({
  email
}) {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_9__.useDark)();
  const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_7__.config.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_8__.fetcher);
  const addKey = function () {
    setLoading(true);
    try {
      (0,_api_auth_passkeys_createOption__WEBPACK_IMPORTED_MODULE_1__["default"])(email).then(async function (data) {
        if (data.data.status !== 'success') {
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-020', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: dark ? 'dark' : 'light'
          });
          setLoading(false);
          return;
        }
        const options = data.data.data;
        if (data.data.isKey) {
          await (0,_github_webauthn_json_browser_ponyfill__WEBPACK_IMPORTED_MODULE_2__.get)((0,_github_webauthn_json_browser_ponyfill__WEBPACK_IMPORTED_MODULE_2__.parseRequestOptionsFromJSON)({
            publicKey: options
          })).then(function (credential) {
            if (!credential) {
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Are you sure that you used the correct key? Code: BagAuth-004', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light'
              });
              setLoading(false);
            }
            (0,_api_auth_passkeys_usePassKey__WEBPACK_IMPORTED_MODULE_5__["default"])(credential, email).then(function (data) {
              document.cookie = `access_token=${data.data['data']}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('Success! Your are now logged.', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light'
              });
              navigate('/');
              mutate();
            }).catch(function () {
              setLoading(false);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Are you sure that you used the correct key? Code: BagAuth-002', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light'
              });
            });
          }).catch(function () {
            setLoading(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-003', {
              position: 'bottom-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: dark ? 'dark' : 'light'
            });
          });
        } else {
          await (0,_github_webauthn_json_browser_ponyfill__WEBPACK_IMPORTED_MODULE_2__.create)((0,_github_webauthn_json_browser_ponyfill__WEBPACK_IMPORTED_MODULE_2__.parseCreationOptionsFromJSON)({
            publicKey: options
          })).then(function (credential) {
            if (!credential) {
              setLoading(false);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. You used the correct key? Code: BagAuth-021', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light'
              });
            }
            (0,_api_auth_passkeys_verificationPasskey__WEBPACK_IMPORTED_MODULE_10__["default"])(credential, email).then(function () {
              setOpenModal(true);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('Please check your email to complete the Passkey addition process.', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light'
              });
            }).catch(function () {
              setLoading(false);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. You used the correct key? Code: BagAuth-021', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: dark ? 'dark' : 'light'
              });
            });
          }).catch(function () {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. You used the correct key? Code: BagAuth-022', {
              position: 'bottom-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: dark ? 'dark' : 'light'
            });
          });
        }
      }).catch(function () {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-027', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      });
    } catch (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-023', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark ? 'dark' : 'light'
      });
    }
  };
  const emailLogin = function () {
    (0,_api_auth_login__WEBPACK_IMPORTED_MODULE_4__["default"])(email).then(function (data) {
      if (data.data['status'] === 'error') {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(`Error: ${data.data['message']} Code: BagAuth-030`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        setLoading(false);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('To complete the authentication process, please check your email and follow the instructions provided.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      }
    }).catch(function (e) {
      if (e.response && e.response.data && e.response.data.message === 'Error during email sending.') {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Our server can\'t send a email to your email address are you sure that you used a valid email? Code: BagAuth-033', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-031', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      }
      setLoading(false);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Transition.Root, {
    show: openModal,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
    as: "div",
    className: "relative z-10",
    onClose: function () {
      return setOpenModal(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AskCode__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setOpenModal: setOpenModal,
    email: email
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-200' : 'text-white'} mb-8 text-center text-2xl font-bold leading-9 tracking-tight`
  }, "Choose a authentification method")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'grid grid-cols-2 gap-4 mx-4 md:lg-8 md:gap-6 lg:mx-24 lg:gap-8 xl:mx-32 xl:gap-12 2xl:mx-44 '
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-inputdark' : 'bg-gray-100'} duration-200 hover:scale-110 p-4 lg:p-8 text-center items-center ${loading && 'opacity-50'}`,
    onClick: function () {
      return addKey();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: 'https://cdn.bagou450.com/assets/img/illustration/keypass.webp',
    className: 'mx-auto my-2 lg:my-4',
    alt: 'KeyPass Illustration Image',
    title: 'KeyPass Illustration Image'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-300' : 'text-gray-700'} text-lg font-bold flex lg:text-2xl`
  }, "PassKey ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "mx-1 lg:mx-2 my-auto inline-flex items-center rounded-md bg-green-50 px-1 lg:px-2 py-1 text-xs lg:text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
  }, "Recommended")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", {
    className: `${dark ? 'text-slate-400' : 'text-gray-600'} hidden lg:flex text-sm text-center text-black font-semibold lg:text-lg`
  }, "Keypass is a more secure login method than traditional passwords, providing enhanced protection for accessing our website."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-inputdark' : 'bg-gray-100'} duration-200 hover:scale-110 p-4 lg:p-8 text-center items-center ${loading && 'opacity-50'}`,
    onClick: function () {
      return emailLogin();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: 'https://cdn.bagou450.com/assets/img/illustration/email.webp',
    className: 'mx-auto my-2 lg:my-4',
    alt: 'Email Illustration Image',
    title: 'Email Illustration Image'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-300' : 'text-gray-700'} text-lg text-black font-bold flex lg:text-2xl`
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", {
    className: `${dark ? 'text-slate-400' : 'text-gray-600'} hidden lg:flex text-sm lg:text-lg text-center  font-semibold`
  }, "Email-based login is a method of accessing your account through a secure link sent to your email address, providing a convenient and secure way to log in.")))));
}

/***/ }),

/***/ "./src/components/Auth/Login.tsx":
/*!***************************************!*\
  !*** ./src/components/Auth/Login.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscordButton: () => (/* binding */ DiscordButton),
/* harmony export */   GitHubButtonClick: () => (/* binding */ GitHubButtonClick),
/* harmony export */   GoogleButtonClick: () => (/* binding */ GoogleButtonClick),
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var _api_auth_loginOauth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/auth/loginOauth */ "./src/api/auth/loginOauth.ts");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ "./src/components/Auth/LoginForm.tsx");
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RegisterForm */ "./src/components/Auth/RegisterForm.tsx");
/* harmony import */ var _FinalAuthForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FinalAuthForm */ "./src/components/Auth/FinalAuthForm.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");












function Login() {
  const fetcher = function (url) {
    return fetch(url).then(function (res) {
      return res.json();
    });
  };
  const [Isregistred, setIsRegistred] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_9__.useDark)();
  document.title = Isregistred ? 'Bagou450 - Login' : 'Bagou450 - Register';
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_5__.config.privateapilink}/auth/isLogged`, fetcher);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }
  if (data['status'] === true) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Navigate, {
      to: "/"
    });
  }
  document.title = 'Bagou450 - Sign In';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: dark ? 'bg-bg450-lessdark' : 'bg-white'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_helmet__WEBPACK_IMPORTED_MODULE_10__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "description",
    content: 'Access Bagou450\'s combined Login and Registration page to create an account or sign in securely. Join our community and unlock exclusive features and benefits.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "twitter:description",
    content: 'Access Bagou450\'s combined Login and Registration page to create an account or sign in securely. Join our community and unlock exclusive features and benefits.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    property: "og:description",
    content: 'Access Bagou450\'s combined Login and Registration page to create an account or sign in securely. Join our community and unlock exclusive features and benefits.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    className: "py-4 text-center mx-auto"
  }, Isregistred && email === '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setEmail: setEmail,
    setIsRegistred: setIsRegistred
  }) : Isregistred && email !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_FinalAuthForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    email: email
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_RegisterForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setEmail: setEmail,
    email: email,
    setIsRegistred: setIsRegistred
  })));
}
function DiscordButton() {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const discordLogin = function () {
    setLoading(true);
    (0,_api_auth_loginOauth__WEBPACK_IMPORTED_MODULE_3__["default"])('discord').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto mt-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "flex w-full items-center justify-center gap-3 rounded-md bg-[#7289DA] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7289DA]",
    disabled: loading,
    onClick: function () {
      return discordLogin();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: "h-5 w-5",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
    clipRule: "evenodd"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "text-sm font-semibold leading-6"
  }, "Discord")));
}
function GoogleButtonClick() {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const googleLogin = function () {
    setLoading(true);
    (0,_api_auth_loginOauth__WEBPACK_IMPORTED_MODULE_3__["default"])('google').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto mt-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "flex w-full items-center justify-center gap-3 rounded-md bg-[#4285F4] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]",
    disabled: loading,
    onClick: function () {
      return googleLogin();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: "h-5 w-5",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
    clipRule: "evenodd"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "text-sm font-semibold leading-6"
  }, "Google")));
}
function GitHubButtonClick() {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const githubLogin = function () {
    setLoading(true);
    (0,_api_auth_loginOauth__WEBPACK_IMPORTED_MODULE_3__["default"])('github').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto mt-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]",
    disabled: loading,
    onClick: function () {
      return githubLogin();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: "h-5 w-5",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
    clipRule: "evenodd"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "text-sm font-semibold leading-6"
  }, "GitHub")));
}

/***/ }),

/***/ "./src/components/Auth/LoginForm.tsx":
/*!*******************************************!*\
  !*** ./src/components/Auth/LoginForm.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ "./src/components/Auth/Login.tsx");
/* harmony import */ var _api_auth_isAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/auth/isAccount */ "./src/api/auth/isAccount.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");







const form = (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({
  email: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required('You need to enter a email/username.')
});
function LoginForm({
  setIsRegistred,
  setEmail
}) {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_6__.useDark)();
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: {
      email: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      (0,_api_auth_isAccount__WEBPACK_IMPORTED_MODULE_5__["default"])(values.email).then(async function (data) {
        if (data.data['status'] === 'error') {
          setLoading(false);
          setEmail(values.email);
          return setIsRegistred(false);
        } else {
          setLoading(false);
          return setEmail(values.email);
        }
      }).catch(function (e) {
        if (e.response && e.response.data && e.response.data.message === 'This username was not found in our database.') {
          setEmail(values.email);
          setIsRegistred(false);
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-001', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: dark ? 'dark' : 'light'
          });
        }
        setLoading(false);
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: " px-6 pb-12 pt-4 sm:rounded-lg sm:px-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-200' : 'text-black'} mb-8 text-center text-2xl font-bold leading-9 tracking-tight`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, "Sign in to your account"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
    className: "space-y-6",
    action: "#",
    method: "POST",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "email",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`
  }, "Email address or username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    id: "email",
    name: "email",
    type: "text",
    onChange: formik.handleChange,
    autoComplete: "email",
    required: true,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "submit",
    className: `${loading && 'opacity-50'} flex w-full justify-center rounded-md bg-bg450-logo px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled`
  }, "Sign in"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "absolute inset-0 flex items-center",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-full border-t border-gray-200"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative flex justify-center text-sm font-medium leading-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: `${dark ? 'bg-bg450-lessdark text-slate-300' : 'bg-white text-gray-700'} px-6 `
  }, "Or continue with"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-6 grid grid-cols-3 gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Login__WEBPACK_IMPORTED_MODULE_4__.DiscordButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Login__WEBPACK_IMPORTED_MODULE_4__.GoogleButtonClick, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Login__WEBPACK_IMPORTED_MODULE_4__.GitHubButtonClick, null))))));
}

/***/ }),

/***/ "./src/components/Auth/RegisterForm.tsx":
/*!**********************************************!*\
  !*** ./src/components/Auth/RegisterForm.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _api_auth_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/auth/register */ "./src/api/auth/register.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");






const form = (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({
  email: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().email('This is not a valid email.').required('You need to enter a email.'),
  username: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().min(8, 'The username needs to have at least 8 characters.').max(32, 'The username needs to have fewer than 32 characters.').required('You need to enter a username.')
});
function RegisterForm({
  setEmail,
  email,
  setIsRegistred
}) {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_5__.useDark)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: {
      email: email,
      username: email.split('@')[0]
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      (0,_api_auth_register__WEBPACK_IMPORTED_MODULE_3__["default"])(values.email, values.username).then(function (data) {
        if (data.data['status'] === 'error') {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(data.data['message'], {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: dark ? 'dark' : 'light'
          });
          setLoading(false);
        }
        setIsRegistred(true);
        setEmail(values.email);
      }).catch(function () {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-010', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        setLoading(false);
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: " px-6 pb-12 pt-4 sm:rounded-lg sm:px-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-200' : 'text-black'} mb-8 text-center text-2xl font-bold leading-9 tracking-tight`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, "Create an account"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
    className: "space-y-6",
    action: "#",
    method: "POST",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "email",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    id: "email",
    name: "email",
    defaultValue: email,
    type: "email",
    onChange: formik.handleChange,
    autoComplete: "email",
    required: true,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "username",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    id: "username",
    name: "username",
    defaultValue: email.split('@')[0],
    type: "text",
    onChange: formik.handleChange,
    autoComplete: "username",
    required: true,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "submit",
    onClick: function () {
      if (formik.errors.username) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(formik.errors.username, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      }
      if (formik.errors.email) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(formik.errors.email, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      }
    },
    className: `${loading && 'opacity-50'} flex w-full justify-center rounded-md bg-bg450-logo px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled`
  }, "Register"))))));
}

/***/ }),

/***/ "./src/components/Elements/Form/Field.tsx":
/*!************************************************!*\
  !*** ./src/components/Elements/Form/Field.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore


function Field({
  name,
  id,
  type,
  onChange,
  defaultValue,
  className,
  placeholder,
  required,
  disabled
}) {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_1__.useDark)();
  const handleChange = function (event) {
    onChange(event);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: className
  }, !required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "street-address",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6 `
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "text-sm leading-6 text-gray-500",
    id: "society-optional"
  }, "Optional")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "email",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-medium`
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    id: id,
    disabled: disabled,
    name: id,
    type: type,
    defaultValue: defaultValue,
    onChange: handleChange,
    autoComplete: type,
    placeholder: placeholder,
    required: required,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  })));
}

/***/ }),

/***/ "./node_modules/@github/webauthn-json/dist/esm/webauthn-json.browser-ponyfill.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@github/webauthn-json/dist/esm/webauthn-json.browser-ponyfill.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   parseCreationOptionsFromJSON: () => (/* binding */ createRequestFromJSON),
/* harmony export */   parseRequestOptionsFromJSON: () => (/* binding */ getRequestFromJSON)
/* harmony export */ });
/* unused harmony export supported */
// src/webauthn-json/base64url.ts
function base64urlToBuffer(baseurl64String) {
  const padding = "==".slice(0, (4 - baseurl64String.length % 4) % 4);
  const base64String = baseurl64String.replace(/-/g, "+").replace(/_/g, "/") + padding;
  const str = atob(base64String);
  const buffer = new ArrayBuffer(str.length);
  const byteView = new Uint8Array(buffer);
  for (let i = 0; i < str.length; i++) {
    byteView[i] = str.charCodeAt(i);
  }
  return buffer;
}
function bufferToBase64url(buffer) {
  const byteView = new Uint8Array(buffer);
  let str = "";
  for (const charCode of byteView) {
    str += String.fromCharCode(charCode);
  }
  const base64String = btoa(str);
  const base64urlString = base64String.replace(/\+/g, "-").replace(
    /\//g,
    "_"
  ).replace(/=/g, "");
  return base64urlString;
}

// src/webauthn-json/convert.ts
var copyValue = "copy";
var convertValue = "convert";
function convert(conversionFn, schema, input) {
  if (schema === copyValue) {
    return input;
  }
  if (schema === convertValue) {
    return conversionFn(input);
  }
  if (schema instanceof Array) {
    return input.map((v) => convert(conversionFn, schema[0], v));
  }
  if (schema instanceof Object) {
    const output = {};
    for (const [key, schemaField] of Object.entries(schema)) {
      if (schemaField.derive) {
        const v = schemaField.derive(input);
        if (v !== void 0) {
          input[key] = v;
        }
      }
      if (!(key in input)) {
        if (schemaField.required) {
          throw new Error(`Missing key: ${key}`);
        }
        continue;
      }
      if (input[key] == null) {
        output[key] = null;
        continue;
      }
      output[key] = convert(
        conversionFn,
        schemaField.schema,
        input[key]
      );
    }
    return output;
  }
}
function derived(schema, derive) {
  return {
    required: true,
    schema,
    derive
  };
}
function required(schema) {
  return {
    required: true,
    schema
  };
}
function optional(schema) {
  return {
    required: false,
    schema
  };
}

// src/webauthn-json/basic/schema.ts
var publicKeyCredentialDescriptorSchema = {
  type: required(copyValue),
  id: required(convertValue),
  transports: optional(copyValue)
};
var simplifiedExtensionsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  credProps: optional(copyValue)
};
var simplifiedClientExtensionResultsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  credProps: optional(copyValue)
};
var credentialCreationOptions = {
  publicKey: required({
    rp: required(copyValue),
    user: required({
      id: required(convertValue),
      name: required(copyValue),
      displayName: required(copyValue)
    }),
    challenge: required(convertValue),
    pubKeyCredParams: required(copyValue),
    timeout: optional(copyValue),
    excludeCredentials: optional([publicKeyCredentialDescriptorSchema]),
    authenticatorSelection: optional(copyValue),
    attestation: optional(copyValue),
    extensions: optional(simplifiedExtensionsSchema)
  }),
  signal: optional(copyValue)
};
var publicKeyCredentialWithAttestation = {
  type: required(copyValue),
  id: required(copyValue),
  rawId: required(convertValue),
  authenticatorAttachment: optional(copyValue),
  response: required({
    clientDataJSON: required(convertValue),
    attestationObject: required(convertValue),
    transports: derived(
      copyValue,
      (response) => {
        var _a;
        return ((_a = response.getTransports) == null ? void 0 : _a.call(response)) || [];
      }
    )
  }),
  clientExtensionResults: derived(
    simplifiedClientExtensionResultsSchema,
    (pkc) => pkc.getClientExtensionResults()
  )
};
var credentialRequestOptions = {
  mediation: optional(copyValue),
  publicKey: required({
    challenge: required(convertValue),
    timeout: optional(copyValue),
    rpId: optional(copyValue),
    allowCredentials: optional([publicKeyCredentialDescriptorSchema]),
    userVerification: optional(copyValue),
    extensions: optional(simplifiedExtensionsSchema)
  }),
  signal: optional(copyValue)
};
var publicKeyCredentialWithAssertion = {
  type: required(copyValue),
  id: required(copyValue),
  rawId: required(convertValue),
  authenticatorAttachment: optional(copyValue),
  response: required({
    clientDataJSON: required(convertValue),
    authenticatorData: required(convertValue),
    signature: required(convertValue),
    userHandle: required(convertValue)
  }),
  clientExtensionResults: derived(
    simplifiedClientExtensionResultsSchema,
    (pkc) => pkc.getClientExtensionResults()
  )
};

// src/webauthn-json/basic/api.ts
function createRequestFromJSON(requestJSON) {
  return convert(base64urlToBuffer, credentialCreationOptions, requestJSON);
}
function createResponseToJSON(credential) {
  return convert(
    bufferToBase64url,
    publicKeyCredentialWithAttestation,
    credential
  );
}
function getRequestFromJSON(requestJSON) {
  return convert(base64urlToBuffer, credentialRequestOptions, requestJSON);
}
function getResponseToJSON(credential) {
  return convert(
    bufferToBase64url,
    publicKeyCredentialWithAssertion,
    credential
  );
}

// src/webauthn-json/basic/supported.ts
function supported() {
  return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential);
}

// src/webauthn-json/browser-ponyfill.ts
async function create(options) {
  const response = await navigator.credentials.create(
    options
  );
  response.toJSON = () => createResponseToJSON(response);
  return response;
}
async function get(options) {
  const response = await navigator.credentials.get(
    options
  );
  response.toJSON = () => getResponseToJSON(response);
  return response;
}

//# sourceMappingURL=webauthn-json.browser-ponyfill.js.map


/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function ExclamationTriangleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ExclamationTriangleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=default-src_components_Auth_Login_tsx-src_components_Auth_LoginForm_tsx.bundle.js.map