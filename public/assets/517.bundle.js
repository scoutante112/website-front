"use strict";
(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[517],{

/***/ 1517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountLinkOauthCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9250);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3757);
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9670);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1955);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6042);
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1229);
/* harmony import */ var _AccountContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1323);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1412);









function AccountLinkOauthCallback() {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useNavigate */ .s0)();
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  const code = urlParams.get('code');
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(`${_config_config__WEBPACK_IMPORTED_MODULE_7__/* .config */ .v.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._i);
  const fetchUrl = `${_config_config__WEBPACK_IMPORTED_MODULE_7__/* .config */ .v.privateapilink}/account/oauthCallback?token=${code}&type=${type}`;
  const fetchData = async function () {
    try {
      const response = await fetch(fetchUrl, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.get('access_token')}`
        }
      });
      const data = await response.json();
      setLoading(false);
      if (data.status === 'success') {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .Am.success(`You have linked your ${type} account successfully!`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        mutate();
      } else {
        const message = data.message ? data.message : 'An unexpected error happened.';
        react_toastify__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .Am.error(`Error: ${message}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        mutate();
      }
    } catch (error) {
      setLoading(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .Am.error('An unexpected error occurred.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
      mutate();
    }
  };
  fetchData();
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-col items-center justify-center h-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccountContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/***/ })

}]);
//# sourceMappingURL=517.bundle.js.map