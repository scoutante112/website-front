"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Auth_OauthCallback_tsx"],{

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

/***/ "./src/components/Auth/OauthCallback.tsx":
/*!***********************************************!*\
  !*** ./src/components/Auth/OauthCallback.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http */ "./src/api/http.ts");
/* harmony import */ var _api_auth_tokenLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/auth/tokenLogin */ "./src/api/auth/tokenLogin.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login */ "./src/components/Auth/Login.tsx");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");










const OauthCallback = function () {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_8__.useDark)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  const code = urlParams.get('code');
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_7__.config.privateapilink}/auth/oauthloginCallback?token=${code}&type=${type}`, _api_http__WEBPACK_IMPORTED_MODULE_2__.fetcher);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }
  if (data['status'] === 'error' || !data.data) {
    let message = '';
    if (data['status'] !== 'error') {
      message = 'A unexcepted error happend.';
    } else {
      message = data['message'];
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
      loginError: message
    });
  }
  const sendLogin = function (token) {
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
        navigate('/');
        window.location.reload();
      }
      setLoading(false);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'flex flex-col items-center justify-center h-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: data.data['google_id'] ? data.data['avatar'] : `https://cdn.discordapp.com/avatars/${data.data['discord_id']}/${data.data['avatar']}.png`,
    alt: "test",
    onError: function ({
      currentTarget
    }) {
      currentTarget.onerror = null; // prevents looping
      currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data['name']}`;
    },
    className: 'rounded-md h-64 w-64 my-4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: 'text-4xl text-black mb-2'
  }, "Login as ", data.data['name']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: 'flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
    disabled: loading,
    onClick: function () {
      return sendLogin(data.data['access_token']);
    }
  }, "Login"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OauthCallback);

/***/ })

}]);
//# sourceMappingURL=src_components_Auth_OauthCallback_tsx.bundle.js.map