"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Auth_AddPasskey_tsx"],{

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

/***/ "./src/components/Auth/AddPasskey.tsx":
/*!********************************************!*\
  !*** ./src/components/Auth/AddPasskey.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPasskey)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _api_auth_passkeys_addPasskey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/auth/passkeys/addPasskey */ "./src/api/auth/passkeys/addPasskey.ts");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/http */ "./src/api/http.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");









function AddPasskey() {
  const {
    token
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_7__.useDark)();
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_4__.config.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_5__.fetcher);
  if (!token) {
    navigate('/');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_auth_passkeys_addPasskey__WEBPACK_IMPORTED_MODULE_2__["default"])(token).then(function (data) {
      document.cookie = `access_token=${data.data.data}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
      navigate('/');
      mutate();
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('You are now logged in, and your passkey has been successfully linked to your account!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark ? 'dark' : 'light'
      });
    }).catch(function (e) {
      console.error(e);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error('An unexpected error occurred. Code: BagAuth-057', {
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
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ })

}]);
//# sourceMappingURL=src_components_Auth_AddPasskey_tsx.bundle.js.map