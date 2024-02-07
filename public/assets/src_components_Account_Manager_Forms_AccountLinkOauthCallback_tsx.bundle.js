"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Account_Manager_Forms_AccountLinkOauthCallback_tsx"],{

/***/ "./src/components/Account/Manager/Forms/AccountLinkOauthCallback.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/Account/Manager/Forms/AccountLinkOauthCallback.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountLinkOauthCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/http */ "./src/api/http.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var _AccountContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AccountContainer */ "./src/components/Account/Manager/AccountContainer.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../config/config */ "./src/config/config.ts");








function AccountLinkOauthCallback() {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  const code = urlParams.get('code');
  const {
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_7__.config.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_2__.fetcher);
  const fetchUrl = `${_config_config__WEBPACK_IMPORTED_MODULE_7__.config.privateapilink}/account/oauthCallback?token=${code}&type=${type}`;
  const fetchData = async function () {
    try {
      const response = await fetch(fetchUrl, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get('access_token')}`
        }
      });
      const data = await response.json();
      setLoading(false);
      if (data.status === 'success') {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(`You have linked your ${type} account successfully!`, {
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
      } else {
        const message = data.message ? data.message : 'An unexpected error happened.';
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(`Error: ${message}`, {
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
      }
    } catch (error) {
      setLoading(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('An unexpected error occurred.', {
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
    }
  };
  fetchData();
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'flex flex-col items-center justify-center h-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AccountContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/***/ })

}]);
//# sourceMappingURL=src_components_Account_Manager_Forms_AccountLinkOauthCallback_tsx.bundle.js.map