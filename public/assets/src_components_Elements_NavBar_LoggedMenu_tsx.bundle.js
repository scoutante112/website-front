"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Elements_NavBar_LoggedMenu_tsx"],{

/***/ "./src/components/Elements/NavBar/LoggedMenu.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Elements/NavBar/LoggedMenu.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoggedMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blueimp-md5 */ "./node_modules/blueimp-md5/js/md5.js");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blueimp_md5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _api_auth_logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/auth/logout */ "./src/api/auth/logout.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");







function LoggedMenu({
  data,
  mutate
}) {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_4__.useDark)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
    as: "div",
    className: "relative ml-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'h-full relative hidden lg:flex items-center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Button, {
    className: "my-auto relative hidden lg:flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "absolute -inset-1.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Open user menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: `https://www.gravatar.com/avatar/${blueimp_md5__WEBPACK_IMPORTED_MODULE_1___default()(data.data.email)}?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${data.data.name}/128/042049/5271ff`,
    alt: "User logo",
    className: 'rounded-full h-10 w-10 hover:opacity-75 '
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Transition, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "transition ease-out duration-200",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Items, {
    className: `${dark ? 'bg-bg450-dark' : 'bg-white'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    className: `${dark ? 'hover:bg-bg450-inputdark' : 'hover:bg-gray-200'} block px-4 py-2 text-sm `,
    to: '/account/'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: dark ? 'text-slate-200' : 'text-black'
  }, "My account"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
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
        navigate('/');
        mutate();
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'hover:bg-bg450-inputdark' : 'hover:bg-gray-200'} text-red-500 block px-4 py-2 text-sm `
  }, "Logout")))));
}

/***/ })

}]);
//# sourceMappingURL=src_components_Elements_NavBar_LoggedMenu_tsx.bundle.js.map