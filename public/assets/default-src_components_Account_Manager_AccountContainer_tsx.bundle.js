"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["default-src_components_Account_Manager_AccountContainer_tsx"],{

/***/ "./src/api/account/deleteOauth.ts":
/*!****************************************!*\
  !*** ./src/api/account/deleteOauth.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const deleteOauth = function (type) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].delete(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/account/oauth`, {
      data: {
        type
      }
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteOauth);

/***/ }),

/***/ "./src/api/account/editAccount.ts":
/*!****************************************!*\
  !*** ./src/api/account/editAccount.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const editAccount = function (data, type) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/account/edit`, {
      data,
      type
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editAccount);

/***/ }),

/***/ "./src/api/account/editAccountInformations.ts":
/*!****************************************************!*\
  !*** ./src/api/account/editAccountInformations.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const editAccountInfos = function (society, address, city, region, postalcode, country, firstname, lastname) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/account/editinfos`, {
      society,
      address,
      city,
      region,
      postalcode,
      country,
      firstname,
      lastname
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editAccountInfos);

/***/ }),

/***/ "./src/api/account/linkOauth.ts":
/*!**************************************!*\
  !*** ./src/api/account/linkOauth.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const loginOauth = function (type) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/account/oauth`, {
      type
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginOauth);

/***/ }),

/***/ "./src/components/Account/Manager/AccountContainer.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Account/Manager/AccountContainer.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var _Forms_EditAccountForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Forms/EditAccountForm */ "./src/components/Account/Manager/Forms/EditAccountForm.tsx");
/* harmony import */ var _Forms_EditAccountInfosForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Forms/EditAccountInfosForm */ "./src/components/Account/Manager/Forms/EditAccountInfosForm.tsx");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/http */ "./src/api/http.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _AccountRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../AccountRouter */ "./src/components/Account/AccountRouter.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");









function AccountContainer() {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_8__.useDark)();
  const {
    setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AccountRouter__WEBPACK_IMPORTED_MODULE_7__.NavContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setActive(window.location.pathname);
  }, []);
  const infos = window.location.pathname === '/account/';
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_6__.config.privateapilink}/auth/isLogged?infos=${infos}`, _api_http__WEBPACK_IMPORTED_MODULE_5__.fetcher);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null);
  }
  const myaccount = {
    email: data.data.email,
    name: data.data.name,
    role: data.data.role,
    discord: data.data.discord,
    github: data.data.github,
    google: data.data.google
  };
  document.title = 'Bagou450 - My account';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'space-y-10 divide-y divide-gray-900/10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-4 sm:px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-7`
  }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-400' : 'text-gray-600'} -1 text-sm leading-6`
  }, "Use a permanent address where you can receive mail. The username can be displayed publicly.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-dark' : 'bg-white'}  shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Forms_EditAccountForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    account: myaccount
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-4 sm:px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-7`
  }, "Personal Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-400' : 'text-gray-600'} -1 text-sm leading-6`
  }, "Use a correct address. These informations are not going to be displayed publicly")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Forms_EditAccountInfosForm__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-4 sm:px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-7`
  }, "Connected Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-400' : 'text-gray-600'} -1 text-sm leading-6`
  }, "You can here connect external account to your Bagou450 account.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-dark' : 'bg-white'} shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'grid grid-cols-1 gap-y-2 md:grid-cols-3 md:gap-x-2 md:gap-y-0 px-4 py-6 sm:p-8'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Forms_EditAccountForm__WEBPACK_IMPORTED_MODULE_3__.Discord, {
    account: myaccount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Forms_EditAccountForm__WEBPACK_IMPORTED_MODULE_3__.Google, {
    account: myaccount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Forms_EditAccountForm__WEBPACK_IMPORTED_MODULE_3__.Github, {
    account: myaccount
  })))));
}

/***/ }),

/***/ "./src/components/Account/Manager/Forms/EditAccountForm.tsx":
/*!******************************************************************!*\
  !*** ./src/components/Account/Manager/Forms/EditAccountForm.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Discord: () => (/* binding */ Discord),
/* harmony export */   Github: () => (/* binding */ Github),
/* harmony export */   Google: () => (/* binding */ Google),
/* harmony export */   "default": () => (/* binding */ EditAccountForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var _api_account_editAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/account/editAccount */ "./src/api/account/editAccount.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api/http */ "./src/api/http.ts");
/* harmony import */ var _api_account_linkOauth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../api/account/linkOauth */ "./src/api/account/linkOauth.ts");
/* harmony import */ var _api_account_deleteOauth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../api/account/deleteOauth */ "./src/api/account/deleteOauth.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../App */ "./src/App.tsx");
/* harmony import */ var _Elements_Form_Field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Elements/Form/Field */ "./src/components/Elements/Form/Field.tsx");












function EditAccountForm({
  account
}) {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, showError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [error2, showError2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_10__.useDark)();
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_9__.config.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_6__.fetcher);
  const changeEmail = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(function (value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError('This email is invalid.');
      return;
    }
    showError('');
    if (value === account.email) {
      return;
    }
    setLoading(true);
    (0,_api_account_editAccount__WEBPACK_IMPORTED_MODULE_2__["default"])(value, 'email').then(function (data) {
      if (data.data['status'] === 'error') {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(data.data['message'], {
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
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('Success! Your email was edited.', {
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
      mutate();
    }).catch(function () {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
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
  }, 500);
  const changeUsername = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(function (value) {
    if (value === '') {
      showError2('Can\'t use a empty username.');
      return;
    }
    showError2('');
    if (value === account.name) {
      return;
    }
    setLoading(true);
    (0,_api_account_editAccount__WEBPACK_IMPORTED_MODULE_2__["default"])(value, 'name').then(function (data) {
      if (data.data['status'] === 'error') {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(data.data['message'], {
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
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('Success! Your username was edited.', {
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
      mutate();
    }).catch(function () {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
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
  }, 500);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-4 py-6 sm:p-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Form_Field__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "sm:col-span-4",
    name: 'Email',
    id: 'email',
    type: 'email',
    placeholder: "mail.exemple.com",
    required: true,
    onChange: function (e) {
      return changeEmail(e.target.value);
    },
    defaultValue: account.email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Form_Field__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "sm:col-span-4",
    name: 'Username',
    id: 'username',
    type: 'text',
    placeholder: "Micheal",
    required: true,
    onChange: function (e) {
      return changeUsername(e.target.value);
    },
    defaultValue: account.name
  })));
}
function Discord({
  account
}) {
  const discord = account.discord;
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_10__.useDark)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])('https://beta-api.bagou450.com/api/client/web/auth/isLogged?infos=true', _api_http__WEBPACK_IMPORTED_MODULE_6__.fetcher);
  const discordLink = function () {
    setLoading(true);
    (0,_api_account_linkOauth__WEBPACK_IMPORTED_MODULE_7__["default"])('discord').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  const discordUnlink = function () {
    setLoading(true);
    (0,_api_account_deleteOauth__WEBPACK_IMPORTED_MODULE_8__["default"])('discord').then(function (data) {
      if (data.data['status'] === 'success') {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('You have unlinked your Discord account successfully!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(`Error: ${data.data['message']}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-200' : 'text-black'} text-2xl my-4 text-center`
  }, discord.status ? 'Your Discord account' : 'Link your Discord Account'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto text-center mt-4 flex space-x-8 w-full'
  }, discord.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    alt: 'Discord avatar',
    className: "inline-block h-24 w-24 rounded-full",
    src: discord.data.avatar
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-300' : 'text-black'} my-2`
  }, discord.data.username, discord.data.discriminator !== '0' && `#${discord.data.discriminator}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function () {
      return discordLink();
    },
    className: "rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Unlink Discord account"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function () {
      return discordLink();
    },
    className: "rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Link Discord account"))));
}
function Google({
  account
}) {
  const google = account.google;
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_10__.useDark)();
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])('https://beta-api.bagou450.com/api/client/web/auth/isLogged?infos=true', _api_http__WEBPACK_IMPORTED_MODULE_6__.fetcher);
  const googleLink = function () {
    setLoading(true);
    (0,_api_account_linkOauth__WEBPACK_IMPORTED_MODULE_7__["default"])('google').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  const googleUnlink = function () {
    setLoading(true);
    (0,_api_account_deleteOauth__WEBPACK_IMPORTED_MODULE_8__["default"])('google').then(function (data) {
      if (data.data['status'] === 'success') {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('You have unlinked your Google account successfully!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(`Error: ${data.data['message']}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-200' : 'text-black'} text-2xl my-4 text-center`
  }, google.status ? 'Your Google account' : 'Link your Google Account'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto text-center mt-4 flex space-x-8 w-full'
  }, google.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    alt: 'Google Avatar',
    className: "inline-block h-24 w-24 rounded-full",
    src: google.data.avatar
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-300' : 'text-black'} my-2`
  }, google.data.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function () {
      return googleUnlink();
    },
    className: "rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Unlink Google account"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function () {
      return googleLink();
    },
    className: "rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Link Google account"))));
}
function Github({
  account
}) {
  const github = account.github;
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_10__.useDark)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])('https://beta-api.bagou450.com/api/client/web/auth/isLogged?infos=true', _api_http__WEBPACK_IMPORTED_MODULE_6__.fetcher);
  const githubLink = function () {
    setLoading(true);
    (0,_api_account_linkOauth__WEBPACK_IMPORTED_MODULE_7__["default"])('github').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  const githubUnlink = function () {
    setLoading(true);
    (0,_api_account_deleteOauth__WEBPACK_IMPORTED_MODULE_8__["default"])('github').then(function (data) {
      if (data.data['status'] === 'success') {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('You have unlinked your Github account successfully!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(`Error: ${data.data['message']}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-200' : 'text-black'} text-2xl my-4 text-center`
  }, github.status ? 'Your Github account' : 'Link your Github Account'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto text-center mt-4 flex space-x-8 w-full'
  }, github.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    alt: 'Github Avatar',
    className: "inline-block h-24 w-24 rounded-full",
    src: github.data.avatar
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-300' : 'text-black'} my-2`
  }, github.data.username, " ", github.data.plan === 'pro' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: `${dark ? 'bg-bg450-logodisabled text-white ring-bg450-logohover' : 'bg-purple-50 text-purple-700 ring-purple-700/10'} inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset `
  }, "Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function () {
      return githubUnlink();
    },
    className: "rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Unlink Github account"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function () {
      return githubLink();
    },
    className: "rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Link Github account"))));
}

/***/ }),

/***/ "./src/components/Account/Manager/Forms/EditAccountInfosForm.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/Account/Manager/Forms/EditAccountInfosForm.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditAccountInfosForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_country_region_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-country-region-selector */ "./node_modules/react-country-region-selector/dist/rcrs.es.js");
/* harmony import */ var _api_account_editAccountInformations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../api/account/editAccountInformations */ "./src/api/account/editAccountInformations.ts");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../api/http */ "./src/api/http.ts");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../App */ "./src/App.tsx");
/* harmony import */ var _Elements_Form_Field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Elements/Form/Field */ "./src/components/Elements/Form/Field.tsx");













const form = (0,yup__WEBPACK_IMPORTED_MODULE_3__.object)({
  society: (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)().nullable(),
  address: (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)().required(''),
  city: (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)().required(''),
  firstname: (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)().required(''),
  lastname: (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)().required(''),
  postalcode: (0,yup__WEBPACK_IMPORTED_MODULE_3__.string)().required('')
});
function EditAccountInfosForm({
  setAddress
}) {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [region, setRegion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_11__.useDark)();
  const {
    data,
    error: erros,
    isLoading,
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_10__.config.privateapilink}/account/getinfos`, _api_http__WEBPACK_IMPORTED_MODULE_8__.fetcher);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    async function fetchRegion(data) {
      const response = await fetch('https://ipapi.co/json/');
      const responseData = await response.json();
      setCountry(responseData.country_name && data.data.country === '' ? responseData.country_name : data.data.country !== '' ? data.data.country : '');
      setRegion(responseData.region && data.data.region === '' ? responseData.region : data.data.region !== '' ? data.data.region : '');
    }
    if (data && !erros && !isLoading) {
      formik.setValues({
        society: data.data.society,
        address: data.data.address ? data.data.address : '',
        city: data.data.city ? data.data.city : '',
        postalcode: data.data.postal_code ? data.data.postal_code : '',
        lastname: data.data.lastname ? data.data.lastname : '',
        firstname: data.data.firstname ? data.data.firstname : ''
      });
      setCountry(data.data.country);
      setRegion(data.data.region);
      fetchRegion(data);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const handleCountryChange = function (value) {
    setCountry(value);
  };
  const handleRegionChange = function (value) {
    setRegion(value);
  };
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: {
      society: '',
      address: '',
      city: '',
      postalcode: '',
      firstname: '',
      lastname: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      if (region === '' || !region) {
        setError('You need to select a State/Region');
        setLoading(false);
        return;
      }
      if (country === '' || !country) {
        setError('You need to select a Country');
        setLoading(false);
        return;
      }
      setError('');
      (0,_api_account_editAccountInformations__WEBPACK_IMPORTED_MODULE_7__["default"])(values.society, values.address, values.city, region, values.postalcode, country, values.firstname, values.lastname).then(function (data) {
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
        } else {
          mutate();
          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Success! Your informations was edited.', {
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
          if (setAddress) {
            setAddress(false);
          }
        }
        setLoading(false);
      }).catch(function () {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
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
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
    onSubmit: formik.handleSubmit,
    className: `${dark ? 'bg-bg450-dark' : 'bg-white'}  shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-4 py-6 sm:p-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: error === '' ? 'hidden alert alert-warning shadow-lg' : 'flex my-4 alert alert-warning shadow-lg'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    className: "stroke-current flex-shrink-0 h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, error))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Form_Field__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "sm:col-span-3",
    name: 'First name',
    id: 'firstname',
    type: 'text',
    required: true,
    onChange: formik.handleChange,
    disabled: loading,
    defaultValue: data.data.firstname ? data.data.firstname : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Form_Field__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "sm:col-span-3",
    name: 'Last name',
    id: 'lastname',
    type: 'text',
    required: true,
    onChange: formik.handleChange,
    disabled: loading,
    defaultValue: data.data.lastname ? data.data.lastname : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Form_Field__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "col-span-full",
    name: 'Society',
    id: 'society',
    type: 'text',
    onChange: formik.handleChange,
    disabled: loading,
    defaultValue: data.data.society ? data.data.society : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: " sm:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "country",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6 `
  }, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_country_region_selector__WEBPACK_IMPORTED_MODULE_6__.CountryDropdown, {
    id: "country",
    name: "country",
    value: country,
    onChange: handleCountryChange,
    disabled: loading,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "region",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6 `
  }, "State / Province"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_country_region_selector__WEBPACK_IMPORTED_MODULE_6__.RegionDropdown, {
    id: "region",
    name: "region",
    country: country,
    value: region,
    onChange: handleRegionChange,
    disabled: loading,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Form_Field__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "sm:col-span-2",
    name: 'Street address',
    id: 'address',
    type: 'text',
    required: true,
    onChange: formik.handleChange,
    disabled: loading,
    defaultValue: data.data.address ? data.data.address : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Form_Field__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "sm:col-span-2",
    name: 'City',
    id: 'city',
    type: 'text',
    required: true,
    onChange: formik.handleChange,
    disabled: loading,
    defaultValue: data.data.city ? data.data.city : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Form_Field__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "sm:col-span-2",
    name: 'ZIP / Postal code',
    id: 'postalcode',
    type: 'text',
    required: true,
    onChange: formik.handleChange,
    disabled: loading,
    defaultValue: data.data.postal_code ? data.data.postal_code : ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'border-b450-logo' : 'border-gray-900/10'} flex items-center justify-end gap-x-6 border-t px-4 py-4 sm:px-8`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} text-sm font-semibold leading-6`
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "submit",
    disabled: loading || formik.errors.postalcode ? true : formik.errors.address ? true : formik.errors.city ? true : formik.errors.firstname ? true : !!formik.errors.lastname,
    className: "rounded-md bg-bg450-logo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled"
  }, "Save")));
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

/***/ })

}]);
//# sourceMappingURL=default-src_components_Account_Manager_AccountContainer_tsx.bundle.js.map