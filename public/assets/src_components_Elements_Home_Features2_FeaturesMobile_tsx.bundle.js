"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Elements_Home_Features2_FeaturesMobile_tsx"],{

/***/ "./src/components/Elements/Home/Features2/FeaturesMobile.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/Elements/Home/Features2/FeaturesMobile.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeaturesMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../App */ "./src/App.tsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CommandLineIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/WrenchIcon.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/CogIcon.js");
/* harmony import */ var _Features2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Features2 */ "./src/components/Elements/Home/Features2.tsx");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore





function FeaturesMobile() {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_1__.useDark)();
  const features2 = [{
    name: 'Bagou Center',
    summary: 'Centralized Product and Support Management.',
    description: 'Manage your product versions, licenses, and settings directly from a user-friendly interface. Stay updated on support contacts and Bagou450 server status, all from one place.',
    image: 'https://cdn.bagou450.com/assets/img/presentation/bagoucenter.webp',
    height: '939',
    width: '1920',
    icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    name: 'Auto Installer',
    summary: 'One-command Addon Installation.',
    description: 'Use our intuitive auto installer to seamlessly set up our products on your panel. Just key in your license, and the installer takes care of file adjustments and additions for you.',
    image: 'https://cdn.bagou450.com/assets/img/presentation/autoinstaller.webp',
    height: '964',
    width: '1920',
    icon: _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    name: 'Simple dashboard',
    summary: 'Unified Management for Orders, Licenses, and Tickets.',
    description: 'Navigate through a user-friendly dashboard to oversee your orders, licenses, and tickets. Additionally, access and download your products with ease.',
    image: !dark ? 'https://cdn.bagou450.com/assets/img/presentation/dashboard_dark.webp' : 'https://cdn.bagou450.com/assets/img/presentation/dashboard_white.webp',
    height: '939',
    width: '1920',
    icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"]
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden"
  }, features2.map(function (feature) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      key: feature.summary
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Features2__WEBPACK_IMPORTED_MODULE_2__.FeatureM, {
      feature: feature,
      className: "mx-auto max-w-2xl",
      isActive: true,
      isDesktop: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "relative mt-10 pb-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: `absolute -inset-x-4 bottom-0 top-8 ${dark ? 'bg-bg450-dark' : 'bg-white'} sm:-inset-x-6`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: `relative mx-auto overflow-hidden rounded-xl shadow-lg  ring-1 ${dark ? 'bg-bg450-inputdark shadow-bg450-inputdark ring-bg450-inputdark' : 'bg-white shadow-slate-900/5 ring-slate-500/10'}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      loading: 'lazy',
      className: "w-full",
      src: feature.image,
      alt: feature.name ? feature.name : 'Img',
      sizes: "52.75rem",
      height: feature.height,
      width: feature.width
    }))));
  }));
}

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/CommandLineIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/CommandLineIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function CommandLineIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CommandLineIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/WrenchIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/WrenchIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function WrenchIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.867 19.125h.008v.008h-.008v-.008z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(WrenchIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_components_Elements_Home_Features2_FeaturesMobile_tsx.bundle.js.map