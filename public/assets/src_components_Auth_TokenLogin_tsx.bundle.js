"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Auth_TokenLogin_tsx"],{

/***/ "./src/api/auth/tokenLogin.ts":
/*!************************************!*\
  !*** ./src/api/auth/tokenLogin.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const tokenLogin = function (token) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/auth/tokenlogin`, {
      token
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenLogin);

/***/ }),

/***/ "./src/components/Auth/TokenLogin.tsx":
/*!********************************************!*\
  !*** ./src/components/Auth/TokenLogin.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TokenLogin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http */ "./src/api/http.ts");
/* harmony import */ var _api_auth_tokenLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/auth/tokenLogin */ "./src/api/auth/tokenLogin.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");









function TokenLogin() {
  const {
    token
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_7__.useDark)();
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_6__.config.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_2__.fetcher);
  if (!token) {
    navigate('/');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_auth_tokenLogin__WEBPACK_IMPORTED_MODULE_3__["default"])(token).then(function (data) {
      if (data.data['status'] === 'error') {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Error. Can\'t get your account data with this token.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        return navigate('/');
      } else {
        document.cookie = `access_token=${data.data['data']['access_token']}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Success! Your are now logged.', {
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
        navigate('/');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null);
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
}
;

/***/ })

}]);
//# sourceMappingURL=src_components_Auth_TokenLogin_tsx.bundle.js.map