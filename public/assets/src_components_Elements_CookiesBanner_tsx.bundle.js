"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Elements_CookiesBanner_tsx"],{

/***/ "./src/components/Elements/CookiesBanner.tsx":
/*!***************************************************!*\
  !*** ./src/components/Elements/CookiesBanner.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CookiesBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");



function CookiesBanner({
  setCookieConsent
}) {
  const acceptCookies = function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set('CookieConsent', 'true');
    setCookieConsent(true);
    (0,_App__WEBPACK_IMPORTED_MODULE_2__.loadScript)();
    (0,_App__WEBPACK_IMPORTED_MODULE_2__.loadGA4)();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "fixed bottom-0 left-0 right-0 bg-bg450-logo p-4 z-50",
    "aria-label": "Cookie consent banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "text-white",
    role: "alert"
  }, "We use cookies to improve your experience on our site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    onClick: acceptCookies,
    className: "bg-white text-slate-900 px-4 py-2 rounded hover:bg-blue-50",
    "aria-label": "Accept cookies"
  }, "Accept")));
}

/***/ })

}]);
//# sourceMappingURL=src_components_Elements_CookiesBanner_tsx.bundle.js.map