"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Account_License_AccountLicenseContainer_tsx"],{

/***/ "./src/api/licenses/linkLicense.ts":
/*!*****************************************!*\
  !*** ./src/api/licenses/linkLicense.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const linkLicense = function (id) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/license/link/${id}`).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return reject(data);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkLicense);

/***/ }),

/***/ "./src/api/shop/createOrder.ts":
/*!*************************************!*\
  !*** ./src/api/shop/createOrder.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const createOrder = function (products, extension) {
  const isExtension = extension ? 1 : 0;
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/orders`, {
      products,
      extension: isExtension
    }).then(function (data) {
      return resolve(data);
    }).catch(function (error) {
      return reject(error);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOrder);

/***/ }),

/***/ "./src/components/Account/License/AccountLicenseContainer.tsx":
/*!********************************************************************!*\
  !*** ./src/components/Account/License/AccountLicenseContainer.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountLicenseContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/http */ "./src/api/http.ts");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _api_admin_licenses_resetLicense__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api/admin/licenses/resetLicense */ "./src/api/admin/licenses/resetLicense.ts");
/* harmony import */ var _api_shop_createOrder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../api/shop/createOrder */ "./src/api/shop/createOrder.ts");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _api_licenses_linkLicense__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../api/licenses/linkLicense */ "./src/api/licenses/linkLicense.ts");
/* harmony import */ var _AccountRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../AccountRouter */ "./src/components/Account/AccountRouter.tsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ArrowDownCircleIcon.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");
















function AccountLicenseContainer() {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_14__.useDark)();
  // @ts-ignore
  const {
    setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AccountRouter__WEBPACK_IMPORTED_MODULE_12__.NavContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setActive(window.location.pathname);
  }, []);
  const {
    data,
    mutate,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_6__.config.privateapilink}/license?search=${search}&page=${page}`, _api_http__WEBPACK_IMPORTED_MODULE_4__.fetcher);
  const form = (0,yup__WEBPACK_IMPORTED_MODULE_9__.object)({
    license: (0,yup__WEBPACK_IMPORTED_MODULE_9__.string)().required('You need to enter a license').min(8)
  });
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_10__.useFormik)({
    initialValues: {
      license: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      (0,_api_licenses_linkLicense__WEBPACK_IMPORTED_MODULE_11__["default"])(values.license).then(function () {
        mutate();
        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('License added successfully.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      }).catch(function (e) {
        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`Error: ${e.response.data.message}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      });
      setOpen(false);
    }
  });
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "px-4 sm:px-6 lg:px-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "sm:flex sm:items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "sm:flex-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`
    }, "Licenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: `${dark ? 'text-slate-300' : 'text-gray-900'} mt-2 text-sm`
    }, "You are on the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", {
      className: `font-semibold ${dark ? 'text-slate-200' : 'text-gray-600'}`
    }, "licenses"), " page. You can here see all your licenses releated to our products.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
      type: "button",
      onClick: function () {
        return setOpen(!open);
      },
      className: "flex rounded-md bg-bg450-logo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled relative"
    }, "Add license", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: `mx-2 h-5 w-5 my-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: `${dark ? 'bg-bg450-dark' : 'bg-white'} shadow sm:rounded-lg mt-2 transition-transform duration-300 ${open ? 'opacity-100 scale-100' : 'hidden opacity-0 scale-0'}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "flex justify-between px-4 py-5 sm:p-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
      className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`
    }, "Add a license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: `${dark ? 'text-slate-300' : 'text-gray-500'} mt-2 max-w-xl text-sm `
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Link a license to your account."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
      className: "mx-2 sm:flex sm:items-center",
      onSubmit: formik.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "w-full sm:max-w-xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
      htmlFor: "email",
      className: "sr-only"
    }, "License"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
      type: "text",
      name: "license",
      id: "license",
      className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 px-1.5 mx-auto shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-xs`,
      placeholder: "bgxw_Dhofd6545564FDijofsids4dsf7"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
      type: "submit",
      className: "inline-flex w-full items-center justify-center rounded-md bg-bg450-logo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled sm:ml-3 sm:mt-0 sm:w-auto"
    }, "Add")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }
  document.title = 'Bagou450 - My license';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:flex sm:items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:flex-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`
  }, "Licenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} mt-2 text-sm`
  }, "You are on the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", {
    className: `font-semibold ${dark ? 'text-slate-200' : 'text-gray-600'}`
  }, "licenses"), " page. You can here see all your licenses releated to our products.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    onClick: function () {
      return setOpen(!open);
    },
    className: "flex rounded-md bg-bg450-logo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled relative"
  }, "Add license", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: `mx-2 h-5 w-5 my-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-dark' : 'bg-white'} shadow sm:rounded-lg mt-2 transition-transform duration-300 ${open ? 'opacity-100 scale-100' : 'hidden opacity-0 scale-0'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex justify-between px-4 py-5 sm:p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`
  }, "Add a license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'text-slate-300' : 'text-gray-500'} mt-2 max-w-xl text-sm `
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Link a license to your account."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
    className: "mx-2 sm:flex sm:items-center",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-full sm:max-w-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "email",
    className: "sr-only"
  }, "License"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    name: "license",
    id: "license",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 px-1.5 mx-auto shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-xs`,
    placeholder: "bgxw_Dhofd6545564FDijofsids4dsf7"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "submit",
    className: "inline-flex w-full items-center justify-center rounded-md bg-bg450-logo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled sm:ml-3 sm:mt-0 sm:w-auto"
  }, "Add")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "search",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} mt-10 block text-sm font-medium leading-6`
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    name: "search",
    onChange: lodash_debounce__WEBPACK_IMPORTED_MODULE_13___default()(function (e) {
      setSearch(e.target.value);
    }, 500),
    id: "search",
    defaultValue: search,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 px-1.5 mx-auto shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`,
    placeholder: "bgxw_Ddf4dg45bfdb54b5df4b5d"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("table", {
    className: "min-w-full divide-y divide-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`
  }, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell`
  }, "License"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`
  }, "Usage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell`
  }, "Ip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`
  }, "Version"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: "relative py-3.5 pl-3 pr-4 sm:pr-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Select")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tbody", null, data.data.license.map(function (plan, planIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(LicenseRow, {
      license: plan,
      mutate: mutate,
      index: planIdx,
      key: planIdx
    });
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("nav", {
    className: "flex items-center justify-between px-4 py-3 sm:px-6 my-2",
    "aria-label": "Pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "hidden sm:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-300' : 'text-gray-700'} text-sm `
  }, "Showing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "font-medium"
  }, page * 10 - 10), " to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "font-medium"
  }, page * 10), " of", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "font-medium"
  }, data.data.total), " results")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex flex-1 justify-between sm:justify-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    onClick: function () {
      return setPage(page - 1);
    },
    disabled: page < 2,
    className: `${page < 2 && 'opacity-50'} relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0`
  }, "Previous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    onClick: function () {
      return setPage(page + 1);
    },
    disabled: page * 10 >= data.data.total,
    className: `${page * 10 >= data.data.total && 'opacity-50'} relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0`
  }, "Next"))));
}
function LicenseRow({
  license,
  mutate,
  index
}) {
  const [ipData, setIpData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_14__.useDark)();
  const resettheLicense = function () {
    setLoading(true);
    (0,_api_admin_licenses_resetLicense__WEBPACK_IMPORTED_MODULE_7__["default"])(license.license).then(function () {
      mutate();
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('License has been reset successfully.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark ? 'dark' : 'light'
      });
      setLoading(false);
    }).catch(function () {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark ? 'dark' : 'light'
      });
      setLoading(false);
    });
  };
  const buyUsage = function () {
    setLoading(true);
    (0,_api_shop_createOrder__WEBPACK_IMPORTED_MODULE_8__["default"])([license.product_id], true).then(function (data) {
      setLoading(false);
      if (data.data.status === 'success') {
        window.location.href = data.data.data;
      }
    }).catch(function () {
      setLoading(false);
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark ? 'dark' : 'light'
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "font-medium"
  }, license['product'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`,
    onClick: function () {
      navigator.clipboard.writeText(license['license']);
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('License copied to clipboard.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark ? 'dark' : 'light'
      });
    }
  }, license['license'].slice(0, 17), license['license'].length > 17 && '...'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`
  }, license['usage'], "/", license['maxusage']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-48"
  }, license['ip'].length === 0 && 'No ip for this license', license['ip'].map(function (thelicense, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
      className: `${dark ? 'bg-bg450-inputdark text-slate-300 hover:bg-bg450-dark' : 'hover:bg-gray-50 bg-white text-gray-900'} block rounded-md  px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white mb-2 truncate`,
      disabled: loading,
      key: index,
      title: thelicense
    }, thelicense.slice(0, 17), thelicense.length > 17 && '...');
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`
  }, license['version']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm  table-cell`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-red-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function () {
      return resettheLicense();
    },
    disabled: loading
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-purple-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function () {
      return buyUsage();
    },
    disabled: loading
  }, "Buy Usage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function () {
      navigator.clipboard.writeText(license['license']);
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('License copied to clipboard.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark ? 'dark' : 'light'
      });
    },
    disabled: loading
  }, "Copy license")));
}

/***/ })

}]);
//# sourceMappingURL=src_components_Account_License_AccountLicenseContainer_tsx.bundle.js.map