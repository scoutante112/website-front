"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Elements_Home_Features2_tsx"],{

/***/ "./src/components/Elements/Home/Features2.tsx":
/*!****************************************************!*\
  !*** ./src/components/Elements/Home/Features2.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureM: () => (/* binding */ FeatureM),
/* harmony export */   "default": () => (/* binding */ Features2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading */ "./src/components/Elements/Loading.tsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const FeaturesDesktop = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_components_Elements_Home_Features2_FeaturesDesktop_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Features2/FeaturesDesktop */ "./src/components/Elements/Home/Features2/FeaturesDesktop.tsx"));
});
const FeaturesMobile = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_components_Elements_Home_Features2_FeaturesMobile_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Features2/FeaturesMobile */ "./src/components/Elements/Home/Features2/FeaturesMobile.tsx"));
});
function Features2() {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_1__.useDark)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    id: "secondary-features",
    "aria-label": "Features for simplifying everyday business tasks",
    className: "pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mx-auto max-w-2xl md:text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-400' : 'text-slate-900'} font-display text-3xl tracking-tight sm:text-4xl`
  }, "Easy Control with Bagou450 Tools."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: `${dark ? 'text-slate-500' : 'text-slate-700'} mt-4 text-lg tracking-tight`
  }, "Our addons make everything simpler for you.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(FeaturesMobile, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(FeaturesDesktop, null))));
}
function FeatureM({
  feature,
  isActive,
  isDesktop,
  className,
  ...props
}) {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_1__.useDark)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", _extends({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className, !isActive && 'opacity-75 hover:opacity-100')
  }, props), !isDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('w-9 rounded-lg', isActive ? 'bg-blue-600' : 'bg-slate-500')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "h-9 w-9",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(feature.icon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('mt-6 text-sm font-medium', isActive ? 'text-blue-600' : dark ? 'text-slate-400' : 'text-slate-600')
  }, feature.name)) : feature.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-500' : 'text-slate-900'} mt-2 font-display text-xl`
  }, feature.summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-400' : 'text-slate-600'} mt-4 text-sm`
  }, feature.description));
}

/***/ })

}]);
//# sourceMappingURL=src_components_Elements_Home_Features2_tsx.bundle.js.map