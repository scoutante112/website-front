"use strict";
(self["webpackChunknewwebsite"] = self["webpackChunknewwebsite"] || []).push([[989],{

/***/ 7989:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AccountContainer; }
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(5776);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var core_dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
;// CONCATENATED MODULE: ./src/api/account/editAccount.ts


var editAccount = function editAccount(data, type) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post("".concat(config/* config */.v.privateapilink, "/account/edit"), {
      data: data,
      type: type
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ var account_editAccount = (editAccount);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(5678);
// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(1296);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
;// CONCATENATED MODULE: ./src/api/account/linkOauth.ts


var loginOauth = function loginOauth(type) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post("".concat(config/* config */.v.privateapilink, "/account/oauth"), {
      type: type
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ var linkOauth = (loginOauth);
;// CONCATENATED MODULE: ./src/api/account/deleteOauth.ts


var deleteOauth = function deleteOauth(type) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.delete("".concat(config/* config */.v.privateapilink, "/account/oauth"), {
      data: {
        type: type
      }
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ var account_deleteOauth = (deleteOauth);
;// CONCATENATED MODULE: ./src/components/Account/Manager/Forms/EditAccountForm.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function EditAccountForm(_ref) {
  var account = _ref.account;
  var _useState = (0,compat_module.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,compat_module.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    showError = _useState4[1];
  var _useState5 = (0,compat_module.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    error2 = _useState6[0],
    showError2 = _useState6[1];
  var _useSWR = (0,core_dist/* default */.ZP)("".concat(config/* config */.v.privateapilink, "/auth/isLogged?infos=true"), http/* fetcher */._i),
    mutate = _useSWR.mutate;
  var changeEmail = lodash_debounce_default()(function (value) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError('This email is invalid.');
      return;
    }
    showError('');
    if (value === account.email) {
      return;
    }
    setLoading(true);
    account_editAccount(value, 'email').then(function (data) {
      if (data.data['status'] === 'error') {
        react_toastify_esm/* toast */.Am.error(data.data['message'], {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      } else {
        react_toastify_esm/* toast */.Am.success('Success! Your email was edited.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      }
      setLoading(false);
      mutate();
    }).catch(function () {
      react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
      setLoading(false);
    });
  }, 500);
  var changeUsername = lodash_debounce_default()(function (value) {
    if (value === '') {
      showError2('Can\'t use a empty username.');
      return;
    }
    showError2('');
    if (value === account.name) {
      return;
    }
    setLoading(true);
    account_editAccount(value, 'name').then(function (data) {
      if (data.data['status'] === 'error') {
        react_toastify_esm/* toast */.Am.error(data.data['message'], {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      } else {
        react_toastify_esm/* toast */.Am.success('Success! Your username was edited.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      }
      setLoading(false);
      mutate();
    }).catch(function () {
      react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
      setLoading(false);
    });
  }, 500);
  return /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "px-4 py-6 sm:p-8"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:col-span-4"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "website",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Email"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    onChange: function onChange(e) {
      return changeEmail(e.target.value);
    },
    required: true,
    defaultValue: account.email,
    className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
    placeholder: "mail.exemple.com"
  })))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "col-span-full"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "website",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Username"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "username",
    id: "username",
    onChange: function onChange(e) {
      return changeUsername(e.target.value);
    },
    defaultValue: account.name,
    className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
    placeholder: "Micheal"
  }))))));
}
function Discord(_ref2) {
  var account = _ref2.account;
  var discord = account.discord;
  var _useState7 = (0,compat_module.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useSWR2 = (0,core_dist/* default */.ZP)('https://beta-api.bagou450.com/api/client/web/auth/isLogged?infos=true', http/* fetcher */._i),
    mutate = _useSWR2.mutate;
  var discordLink = function discordLink() {
    setLoading(true);
    linkOauth('discord').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  var discordUnlink = function discordUnlink() {
    setLoading(true);
    account_deleteOauth('discord').then(function (data) {
      if (data.data['status'] === 'success') {
        react_toastify_esm/* toast */.Am.success('You have unlinked your Discord account successfully!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      } else {
        react_toastify_esm/* toast */.Am.error("Error: ".concat(data.data['message']), {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("h2", {
    className: "text-2xl my-4 text-center text-black"
  }, discord.status ? 'Your Discord account' : 'Link your Discord Account'), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'mx-auto text-center mt-4 flex space-x-8 w-full'
  }, discord.status ? /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/compat_module["default"].createElement("img", {
    alt: 'Discord avatar',
    className: "inline-block h-24 w-24 rounded-full",
    src: discord.data.avatar
  }))), /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("h2", {
    className: 'my-2 text-black'
  }, discord.data.username, discord.data.discriminator !== '0' && "#".concat(discord.data.discriminator)), /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function onClick() {
      return discordLink();
    },
    className: "rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Unlink Discord account"))) : /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function onClick() {
      return discordLink();
    },
    className: "rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Link Discord account"))));
}
function Google(_ref3) {
  var account = _ref3.account;
  var google = account.google;
  var _useState9 = (0,compat_module.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var _useSWR3 = (0,core_dist/* default */.ZP)('https://beta-api.bagou450.com/api/client/web/auth/isLogged?infos=true', http/* fetcher */._i),
    mutate = _useSWR3.mutate;
  var googleLink = function googleLink() {
    setLoading(true);
    linkOauth('google').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  var googleUnlink = function googleUnlink() {
    setLoading(true);
    account_deleteOauth('google').then(function (data) {
      if (data.data['status'] === 'success') {
        react_toastify_esm/* toast */.Am.success('You have unlinked your Google account successfully!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      } else {
        react_toastify_esm/* toast */.Am.error("Error: ".concat(data.data['message']), {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("h2", {
    className: "text-2xl my-4 text-center text-black"
  }, google.status ? 'Your Google account' : 'Link your Google Account'), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'mx-auto text-center mt-4 flex space-x-8 w-full'
  }, google.status ? /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/compat_module["default"].createElement("img", {
    alt: 'Google Avatar',
    className: "inline-block h-24 w-24 rounded-full",
    src: google.data.avatar
  }))), /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("h2", {
    className: 'my-2 text-black'
  }, google.data.username), /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function onClick() {
      return googleUnlink();
    },
    className: "rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Unlink Google account"))) : /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function onClick() {
      return googleLink();
    },
    className: "rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Link Google account"))));
}
function Github(_ref4) {
  var account = _ref4.account;
  var github = account.github;
  var _useState11 = (0,compat_module.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var _useSWR4 = (0,core_dist/* default */.ZP)('https://beta-api.bagou450.com/api/client/web/auth/isLogged?infos=true', http/* fetcher */._i),
    mutate = _useSWR4.mutate;
  var githubLink = function githubLink() {
    setLoading(true);
    linkOauth('github').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  var githubUnlink = function githubUnlink() {
    setLoading(true);
    account_deleteOauth('github').then(function (data) {
      if (data.data['status'] === 'success') {
        react_toastify_esm/* toast */.Am.success('You have unlinked your Github account successfully!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      } else {
        react_toastify_esm/* toast */.Am.error("Error: ".concat(data.data['message']), {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        mutate();
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("h2", {
    className: "text-2xl my-4 text-center text-black"
  }, github.status ? 'Your Github account' : 'Link your Github Account'), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'mx-auto text-center mt-4 flex space-x-8 w-full'
  }, github.status ? /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/compat_module["default"].createElement("img", {
    alt: 'Github Avatar',
    className: "inline-block h-24 w-24 rounded-full",
    src: github.data.avatar
  }))), /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("h2", {
    className: 'my-2 text-black'
  }, github.data.username, " ", github.data.plan === 'pro' && /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
  }, "Pro")), /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function onClick() {
      return githubUnlink();
    },
    className: "rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Unlink Github account"))) : /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "button",
    disabled: loading,
    onClick: function onClick() {
      return githubLink();
    },
    className: "rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Link Github account"))));
}
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/react-country-region-selector/dist/rcrs.es.js
var rcrs_es = __webpack_require__(7944);
;// CONCATENATED MODULE: ./src/api/account/editAccountInformations.ts


var editAccountInfos = function editAccountInfos(society, address, city, region, postalcode, country, firstname, lastname) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post("".concat(config/* config */.v.privateapilink, "/account/editinfos"), {
      society: society,
      address: address,
      city: city,
      region: region,
      postalcode: postalcode,
      country: country,
      firstname: firstname,
      lastname: lastname
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ var editAccountInformations = (editAccountInfos);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
;// CONCATENATED MODULE: ./src/components/Account/Manager/Forms/EditAccountInfosForm.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function EditAccountInfosForm_slicedToArray(arr, i) { return EditAccountInfosForm_arrayWithHoles(arr) || EditAccountInfosForm_iterableToArrayLimit(arr, i) || EditAccountInfosForm_unsupportedIterableToArray(arr, i) || EditAccountInfosForm_nonIterableRest(); }
function EditAccountInfosForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function EditAccountInfosForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return EditAccountInfosForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return EditAccountInfosForm_arrayLikeToArray(o, minLen); }
function EditAccountInfosForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function EditAccountInfosForm_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function EditAccountInfosForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var EditAccountInfosForm_form = (0,index_esm/* object */.Ry)({
  society: (0,index_esm/* string */.Z_)().nullable(),
  address: (0,index_esm/* string */.Z_)().required(''),
  city: (0,index_esm/* string */.Z_)().required(''),
  firstname: (0,index_esm/* string */.Z_)().required(''),
  lastname: (0,index_esm/* string */.Z_)().required(''),
  postalcode: (0,index_esm/* string */.Z_)().required('').matches(/^\d{5}(?:[-\s]\d{4})?$/, 'The postal code is not correct.')
});
function EditAccountInfosForm(_ref) {
  var setAddress = _ref.setAddress;
  var _useState = (0,compat_module.useState)(false),
    _useState2 = EditAccountInfosForm_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,compat_module.useState)(''),
    _useState4 = EditAccountInfosForm_slicedToArray(_useState3, 2),
    country = _useState4[0],
    setCountry = _useState4[1];
  var _useState5 = (0,compat_module.useState)(''),
    _useState6 = EditAccountInfosForm_slicedToArray(_useState5, 2),
    region = _useState6[0],
    setRegion = _useState6[1];
  var _useState7 = (0,compat_module.useState)(''),
    _useState8 = EditAccountInfosForm_slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var _useSWR = (0,core_dist/* default */.ZP)("".concat(config/* config */.v.privateapilink, "/account/getinfos"), http/* fetcher */._i),
    data = _useSWR.data,
    erros = _useSWR.error,
    isLoading = _useSWR.isLoading,
    mutate = _useSWR.mutate;
  (0,compat_module.useEffect)(function () {
    function fetchRegion(_x2) {
      return _fetchRegion.apply(this, arguments);
    }
    function _fetchRegion() {
      _fetchRegion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        var response, responseData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://ipapi.co/json/');
            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();
            case 5:
              responseData = _context.sent;
              setCountry(responseData.country_name && data.data.country === '' ? responseData.country_name : data.data.country !== '' ? data.data.country : '');
              setRegion(responseData.region && data.data.region === '' ? responseData.region : data.data.region !== '' ? data.data.region : '');
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _fetchRegion.apply(this, arguments);
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
  var handleCountryChange = function handleCountryChange(value) {
    setCountry(value);
  };
  var handleRegionChange = function handleRegionChange(value) {
    setRegion(value);
  };
  var formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      society: '',
      address: '',
      city: '',
      postalcode: '',
      firstname: '',
      lastname: ''
    },
    validationSchema: EditAccountInfosForm_form,
    onSubmit: function onSubmit(values) {
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
      editAccountInformations(values.society, values.address, values.city, region, values.postalcode, country, values.firstname, values.lastname).then(function (data) {
        if (data.data['status'] === 'error') {
          react_toastify_esm/* toast */.Am.error(data.data['message'], {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          });
          setLoading(false);
        } else {
          mutate();
          react_toastify_esm/* toast */.Am.success('Success! Your informations was edited.', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          });
          setLoading(false);
          if (setAddress) {
            setAddress(false);
          }
        }
        setLoading(false);
      }).catch(function () {
        react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        setLoading(false);
      });
    }
  });
  if (!data || error || isLoading) {
    return /*#__PURE__*/compat_module["default"].createElement(Loading["default"], null);
  }
  return /*#__PURE__*/compat_module["default"].createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "px-4 py-6 sm:p-8"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: error === '' ? 'hidden alert alert-warning shadow-lg' : 'flex my-4 alert alert-warning shadow-lg'
  }, /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "stroke-current flex-shrink-0 h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/compat_module["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  })), /*#__PURE__*/compat_module["default"].createElement("span", null, error))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:col-span-3"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "first-name",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "First name"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    id: "firstname",
    name: "firstname",
    type: "text",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: data.data.firstname ? data.data.firstname : '',
    autoComplete: "given-name",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:col-span-3"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "last-name",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Last name"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    autoComplete: "family-name",
    id: "lastname",
    name: "lastname",
    type: "text"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: data.data.lastname ? data.data.lastname : '',
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "col-span-full"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "street-address",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Society"), /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "text-sm leading-6 text-gray-500",
    id: "society-optional"
  }, "Optional")), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    id: "society",
    name: "society",
    type: "text",
    defaultValue: data.data.society,
    onChange: formik.handleChange,
    disabled: loading,
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: " sm:col-span-3"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "country",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Country"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement(rcrs_es/* CountryDropdown */.Px, {
    id: "country",
    name: "country",
    value: country,
    onChange: handleCountryChange,
    disabled: loading,
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:col-span-3"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "region",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "State / Province"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement(rcrs_es/* RegionDropdown */.Xz, {
    id: "region",
    name: "region",
    country: country,
    value: region,
    onChange: handleRegionChange,
    disabled: loading,
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "col-span-full"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "street-address",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Street address"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "address",
    id: "address",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: data.data.address ? data.data.address : '',
    autoComplete: "street-address",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:col-span-3 sm:col-start-1"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "city",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "City"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "city",
    id: "city",
    defaultValue: data.data.city ? data.data.city : '',
    onChange: formik.handleChange,
    disabled: loading,
    autoComplete: "address-level2",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:col-span-3"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "postalcode",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "ZIP / Postal code"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "postalcode",
    id: "postalcode",
    defaultValue: data.data.postal_code ? data.data.postal_code : ''
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    autoComplete: "postal-code",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "button",
    className: "text-sm font-semibold leading-6 text-gray-900"
  }, "Cancel"), /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "submit",
    disabled: loading || formik.errors.postalcode ? true : formik.errors.address ? true : formik.errors.city ? true : formik.errors.firstname ? true : !!formik.errors.lastname,
    className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Save")));
}
// EXTERNAL MODULE: ./src/components/Account/AccountRouter.tsx + 10 modules
var AccountRouter = __webpack_require__(5248);
;// CONCATENATED MODULE: ./src/components/Account/Manager/AccountContainer.tsx









function AccountContainer() {
  var location = (0,dist/* useLocation */.TH)();
  var _useContext = (0,compat_module.useContext)(AccountRouter/* NavContext */.Ly),
    setActive = _useContext.setActive;
  (0,compat_module.useEffect)(function () {
    setActive(window.location.pathname);
  }, []);
  var infos = window.location.pathname === '/account/';
  var _useSWR = (0,core_dist/* default */.ZP)("".concat(config/* config */.v.privateapilink, "/auth/isLogged?infos=").concat(infos), http/* fetcher */._i),
    data = _useSWR.data,
    error = _useSWR.error,
    isLoading = _useSWR.isLoading;
  if (!data || error || isLoading) {
    return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null);
  }
  var myaccount = {
    email: data.data.email,
    name: data.data.name,
    role: data.data.role,
    discord: data.data.discord,
    github: data.data.github,
    google: data.data.google
  };
  document.title = 'Bagou450 - My account';
  return /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "space-y-10 divide-y divide-gray-900/10"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "px-4 sm:px-0"
  }, /*#__PURE__*/compat_module["default"].createElement("h2", {
    className: "text-base font-semibold leading-7 text-gray-900"
  }, "Profile"), /*#__PURE__*/compat_module["default"].createElement("p", {
    className: "mt-1 text-sm leading-6 text-gray-600"
  }, "Use a permanent address where you can receive mail. The username can be displayed publicly.")), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
  }, /*#__PURE__*/compat_module["default"].createElement(EditAccountForm, {
    account: myaccount
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "px-4 sm:px-0"
  }, /*#__PURE__*/compat_module["default"].createElement("h2", {
    className: "text-base font-semibold leading-7 text-gray-900"
  }, "Personal Information"), /*#__PURE__*/compat_module["default"].createElement("p", {
    className: "mt-1 text-sm leading-6 text-gray-600"
  }, "Use a correct address. These informations are not going to be displayed publicly")), /*#__PURE__*/compat_module["default"].createElement(EditAccountInfosForm, null)), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "px-4 sm:px-0"
  }, /*#__PURE__*/compat_module["default"].createElement("h2", {
    className: "text-base font-semibold leading-7 text-gray-900"
  }, "Connected Account"), /*#__PURE__*/compat_module["default"].createElement("p", {
    className: "mt-1 text-sm leading-6 text-gray-600"
  }, "You can here connect external account to your Bagou450 account.")), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2'
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'grid grid-cols-1 gap-y-2 md:grid-cols-3 md:gap-x-2 md:gap-y-0 px-4 py-6 sm:p-8'
  }, /*#__PURE__*/compat_module["default"].createElement(Discord, {
    account: myaccount
  }), /*#__PURE__*/compat_module["default"].createElement(Google, {
    account: myaccount
  }), /*#__PURE__*/compat_module["default"].createElement(Github, {
    account: myaccount
  })))));
}

/***/ })

}]);
//# sourceMappingURL=989.bundle.js.map