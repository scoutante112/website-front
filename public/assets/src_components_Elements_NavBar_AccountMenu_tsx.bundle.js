"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Elements_NavBar_AccountMenu_tsx"],{

/***/ "./src/components/Elements/NavBar/AccountMenu.tsx":
/*!********************************************************!*\
  !*** ./src/components/Elements/NavBar/AccountMenu.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blueimp-md5 */ "./node_modules/blueimp-md5/js/md5.js");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blueimp_md5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_auth_logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/auth/logout */ "./src/api/auth/logout.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore






function AccountMenu({
  data,
  mutate
}) {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_4__.useDark)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'flex'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
    to: '/account/',
    className: "relative my-4 flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "absolute -inset-1.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Open user menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: `https://www.gravatar.com/avatar/${blueimp_md5__WEBPACK_IMPORTED_MODULE_1___default()(data.data.email)}?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${data.data.name}/128/042049/5271ff`,
    alt: "User Logo",
    className: 'rounded-full h-10 w-10 hover:opacity-75 mx-2'
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: `${dark ? 'text-slate-300' : 'text-black'} my-auto`
  }, "My account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
    to: '/',
    onClick: function () {
      return (0,_api_auth_logout__WEBPACK_IMPORTED_MODULE_2__["default"])().then(function () {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('You are now logged out.', {
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
      });
    },
    className: 'block px-4 py-2 text-sm text-red-700 ml-auto my-auto'
  }, "Logout"));
}

/***/ })

}]);
//# sourceMappingURL=src_components_Elements_NavBar_AccountMenu_tsx.bundle.js.map