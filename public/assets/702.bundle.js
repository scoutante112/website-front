"use strict";
(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[702],{

/***/ 2702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9655);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1216);
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1229);




function ProductBox(_ref) {
  let {
    element,
    key
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .rU, {
    to: `/product/${element.id}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-compact bg-neutral  hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure", {
    className: 'px-4 pt-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: `https://cdn.bagou450.com/assets/img/addons/${element.id}.webp`,
    alt: element.name + " icon",
    className: "mt-6 h-52 w-52",
    width: "500",
    height: "500"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "card-title"
  }, element.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, element.tag))));
}

/***/ })

}]);
//# sourceMappingURL=702.bundle.js.map