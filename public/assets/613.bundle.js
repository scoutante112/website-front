"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[613,229],{

/***/ 209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1412);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9670);


const tokenLogin = function (token) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.privateapilink}/auth/tokenlogin`, {
      token
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenLogin);

/***/ }),

/***/ 9613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9250);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3757);
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9670);
/* harmony import */ var _api_auth_tokenLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(209);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6042);
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9560);
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(blueimp_md5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1229);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1412);









const TokenLogin = function () {
  const {
    token
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useParams */ .UO)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useNavigate */ .s0)();
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(`${_config_config__WEBPACK_IMPORTED_MODULE_7__/* .config */ .v.privateapilink}/auth/tokendata?token=${token}`, _api_http__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._i);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }
  if (data.data['status'] === 'error' || !token) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "text-center"
    }, "Invalid token.");
  }
  const sendLogin = function () {
    (0,_api_auth_tokenLogin__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(token).then(function (data) {
      if (data.data['status'] === 'error') {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .Am.error('Error. Can\'t get your account data with this token.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      } else {
        document.cookie = `access_token=${data.data['data']['access_token']}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
        react_toastify__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .Am.success('Success! Your are now logged.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        navigate('/');
        window.location.reload();
      }
      setLoading(false);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-col items-center justify-center h-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: `https://www.gravatar.com/avatar/${blueimp_md5__WEBPACK_IMPORTED_MODULE_5___default()(data.data['email'])}?d=404`,
    alt: "test",
    onError: function ({
      currentTarget
    }) {
      currentTarget.onerror = null; // prevents looping
      currentTarget.src = `https://ui-avatars.com/api/?background=042049&color=5271ff&name=${data.data['name']}`;
    },
    className: 'rounded-md h-64 w-64 my-4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-4xl'
  }, "Login as ", data.data['name']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: 'btn btn-primary mt-4 btn-lg',
    disabled: loading,
    onClick: function () {
      return sendLogin();
    }
  }, "Login"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenLogin);

/***/ }),

/***/ 1229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(665);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1216);



function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-screen mx-auto text-center cursor-wait"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.img, {
    src: "https://cdn.bagou450.com/assets/img/bg5.webp",
    className: 'h-44 w-44 mx-auto',
    alt: "Logo",
    animate: {
      rotate: 360
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-2xl'
  }, "Loading...."));
}

/***/ })

}]);
//# sourceMappingURL=613.bundle.js.map