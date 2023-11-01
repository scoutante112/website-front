"use strict";
(self["webpackChunknewwebsite"] = self["webpackChunknewwebsite"] || []).push([[378],{

/***/ 3378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AccountLicenseContainer; }
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(5776);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(5678);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/admin/licenses/resetLicense.ts
var resetLicense = __webpack_require__(7170);
// EXTERNAL MODULE: ./src/api/shop/createOrder.ts
var createOrder = __webpack_require__(4592);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
;// CONCATENATED MODULE: ./src/api/licenses/linkLicense.ts


var linkLicense = function linkLicense(id) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post("".concat(config/* config */.v.privateapilink, "/license/link/").concat(id)).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return reject(data);
    });
  });
};
/* harmony default export */ var licenses_linkLicense = (linkLicense);
// EXTERNAL MODULE: ./src/components/Account/AccountRouter.tsx + 10 modules
var AccountRouter = __webpack_require__(5248);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowDownCircleIcon.js
var ArrowDownCircleIcon = __webpack_require__(6454);
// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(1296);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
;// CONCATENATED MODULE: ./src/components/Account/License/AccountLicenseContainer.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function AccountLicenseContainer() {
  var _useState = (0,compat_module.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,compat_module.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    search = _useState4[0],
    setSearch = _useState4[1];
  var _useState5 = (0,compat_module.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    page = _useState6[0],
    setPage = _useState6[1];

  // @ts-ignore
  var _useContext = (0,compat_module.useContext)(AccountRouter/* NavContext */.Ly),
    setActive = _useContext.setActive;
  (0,compat_module.useEffect)(function () {
    setActive(window.location.pathname);
  }, []);
  var _useSWR = (0,dist/* default */.ZP)("".concat(config/* config */.v.privateapilink, "/license?search=").concat(search, "&page=").concat(page), http/* fetcher */._i),
    data = _useSWR.data,
    mutate = _useSWR.mutate,
    error = _useSWR.error,
    isLoading = _useSWR.isLoading;
  var form = (0,index_esm/* object */.Ry)({
    license: (0,index_esm/* string */.Z_)().required('You need to enter a license').min(8)
  });
  var formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      license: ''
    },
    validationSchema: form,
    onSubmit: function onSubmit(values) {
      licenses_linkLicense(values.license).then(function () {
        mutate();
        react_toastify_esm/* toast */.Am.success('License added successfully.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      }).catch(function (e) {
        react_toastify_esm/* toast */.Am.error("Error: ".concat(e.response.data.message), {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      });
      setOpen(false);
    }
  });
  if (!data || error || isLoading) {
    return /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "px-4 sm:px-6 lg:px-8"
    }, /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "sm:flex sm:items-center "
    }, /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "sm:flex-auto"
    }, /*#__PURE__*/compat_module["default"].createElement("h1", {
      className: "text-base font-semibold leading-6 text-gray-900"
    }, "Licenses"), /*#__PURE__*/compat_module["default"].createElement("p", {
      className: "mt-2 text-sm text-black"
    }, "You are on the ", /*#__PURE__*/compat_module["default"].createElement("strong", {
      className: "font-semibold text-black"
    }, "licenses"), " page. You can here see all your licenses releated to our products.")), /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none"
    }, /*#__PURE__*/compat_module["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return setOpen(!open);
      },
      className: "flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative"
    }, "Add license", /*#__PURE__*/compat_module["default"].createElement(ArrowDownCircleIcon/* default */.Z, {
      className: "mx-2 h-5 w-5 my-auto transform transition-transform ".concat(open ? 'rotate-180' : 'rotate-0')
    })))), /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "bg-white shadow sm:rounded-lg mt-2 transition-transform duration-300 ".concat(open ? 'opacity-100 scale-100' : 'hidden opacity-0 scale-0')
    }, /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "flex justify-between px-4 py-5 sm:p-6"
    }, /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("h3", {
      className: "text-base font-semibold leading-6 text-gray-900"
    }, "Add a license"), /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "mt-2 max-w-xl text-sm text-gray-500"
    }, /*#__PURE__*/compat_module["default"].createElement("p", null, "Link a license to your account."))), /*#__PURE__*/compat_module["default"].createElement("form", {
      className: "mx-2 sm:flex sm:items-center",
      onSubmit: formik.handleSubmit
    }, /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "w-full sm:max-w-xl"
    }, /*#__PURE__*/compat_module["default"].createElement("label", {
      htmlFor: "email",
      className: "sr-only"
    }, "License"), /*#__PURE__*/compat_module["default"].createElement("input", {
      type: "text",
      name: "license",
      id: "license",
      className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
      placeholder: "bgxw_Dhofd6545564FDijofsids4dsf7"
    })), /*#__PURE__*/compat_module["default"].createElement("button", {
      type: "submit",
      className: "mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
    }, "Add"))), /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("label", {
      htmlFor: "search",
      className: "sr-only"
    }, "Search"), /*#__PURE__*/compat_module["default"].createElement("input", {
      type: "text",
      name: "search",
      onChange: lodash_debounce_default()(function (e) {
        setSearch(e.target.value);
      }, 500),
      id: "search",
      defaultValue: search,
      className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
      placeholder: "bgxw_Ddf4dg45bfdb54b5df4b5d"
    }))), /*#__PURE__*/compat_module["default"].createElement(Loading["default"], null));
  }
  document.title = 'Bagou450 - My license';
  console.log(page);
  return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:flex sm:items-center"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:flex-auto"
  }, /*#__PURE__*/compat_module["default"].createElement("h1", {
    className: "text-base font-semibold leading-6 text-gray-900"
  }, "Licenses"), /*#__PURE__*/compat_module["default"].createElement("p", {
    className: "mt-2 text-sm text-gray-700"
  }, "You are on the ", /*#__PURE__*/compat_module["default"].createElement("strong", {
    className: "font-semibold text-gray-900"
  }, "licenses"), " page. You can here see all your licenses releated to our products")), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none"
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: "flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative"
  }, "Add license", /*#__PURE__*/compat_module["default"].createElement(ArrowDownCircleIcon/* default */.Z, {
    className: "mx-2 h-5 w-5 my-auto transform transition-transform ".concat(open ? 'rotate-180' : 'rotate-0')
  })))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "bg-white shadow sm:rounded-lg mt-2 transition-transform duration-300 ".concat(open ? 'opacity-100 scale-100' : 'hidden opacity-0 scale-0')
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex justify-between px-4 py-5 sm:p-6"
  }, /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("h3", {
    className: "text-base font-semibold leading-6 text-gray-900"
  }, "Add a license"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2 max-w-xl text-sm text-gray-500"
  }, /*#__PURE__*/compat_module["default"].createElement("p", null, "Link a license to your account."))), /*#__PURE__*/compat_module["default"].createElement("form", {
    className: "mx-2 sm:flex sm:items-center",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "w-full sm:max-w-xl"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "email",
    className: "sr-only"
  }, "License"), /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "license",
    id: "license",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
    placeholder: "bgxw_Dhofd6545564FDijofsids4dsf7"
  })), /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "submit",
    className: "mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
  }, "Add")))), /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "search",
    className: "mt-10 block text-sm font-medium leading-6 text-gray-900"
  }, "Search")), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "search",
    onChange: lodash_debounce_default()(function (e) {
      setSearch(e.target.value);
    }, 500),
    id: "search",
    defaultValue: search,
    className: " block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
    placeholder: "bgxw_Ddf4dg45bfdb54b5df4b5d"
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg"
  }, /*#__PURE__*/compat_module["default"].createElement("table", {
    className: "min-w-full divide-y divide-gray-300"
  }, /*#__PURE__*/compat_module["default"].createElement("thead", null, /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
  }, "Product"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
  }, "License"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell"
  }, "Usage"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
  }, "Ip"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell"
  }, "Version"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "relative py-3.5 pl-3 pr-4 sm:pr-6"
  }, /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "sr-only"
  }, "Select")))), /*#__PURE__*/compat_module["default"].createElement("tbody", null, data.data.license.map(function (plan, planIdx) {
    return /*#__PURE__*/compat_module["default"].createElement(LicenseRow, {
      license: plan,
      mutate: mutate,
      index: planIdx,
      key: planIdx
    });
  }))))), /*#__PURE__*/compat_module["default"].createElement("nav", {
    className: "flex items-center justify-between lg:border-t lg:border-gray-200 px-4 py-3 sm:px-6 my-2",
    "aria-label": "Pagination"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "hidden sm:block"
  }, /*#__PURE__*/compat_module["default"].createElement("p", {
    className: "text-sm text-gray-700"
  }, "Showing ", /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "font-medium"
  }, page * 10 - 10), " to ", /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "font-medium"
  }, page * 10), " of", ' ', /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "font-medium"
  }, data.data.total), " results")), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex flex-1 justify-between sm:justify-end"
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    onClick: function onClick() {
      return setPage(page - 1);
    },
    disabled: page < 2,
    className: "".concat(page < 2 && 'opacity-50', " relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0")
  }, "Previous"), /*#__PURE__*/compat_module["default"].createElement("button", {
    onClick: function onClick() {
      return setPage(page + 1);
    },
    disabled: page * 10 >= data.data.total,
    className: "".concat(page * 10 >= data.data.total && 'opacity-50', " relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0")
  }, "Next"))));
}
function LicenseRow(_ref) {
  var license = _ref.license,
    mutate = _ref.mutate,
    index = _ref.index;
  var _useState7 = (0,compat_module.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    ipData = _useState8[0],
    setIpData = _useState8[1];
  var _useState9 = (0,compat_module.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var resettheLicense = function resettheLicense() {
    setLoading(true);
    (0,resetLicense/* default */.Z)(license.license).then(function () {
      mutate();
      react_toastify_esm/* toast */.Am.success('License has been reset successfully.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
      setLoading(false);
    }).catch(function () {
      react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
      setLoading(false);
    });
  };
  var buyUsage = function buyUsage() {
    setLoading(true);
    (0,createOrder/* default */.Z)([license.product_id], true).then(function (data) {
      setLoading(false);
      if (data.data.status === 'success') {
        window.location.href = data.data.data;
      }
    }).catch(function () {
      setLoading(false);
      react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
    });
  };
  return /*#__PURE__*/compat_module["default"].createElement("tr", {
    key: index
  }, /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "font-medium text-gray-900"
  }, license['product'])), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell",
    onClick: function onClick() {
      navigator.clipboard.writeText(license['license']);
      react_toastify_esm/* toast */.Am.success('License copied to clipboard.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
    }
  }, license['license'].slice(0, 17), license['license'].length > 17 && '...'), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, license['usage'], "/", license['maxusage']), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "w-48"
  }, license['ip'].length === 0 && 'No ip for this license', license['ip'].map(function (thelicense, index) {
    return /*#__PURE__*/compat_module["default"].createElement("button", {
      className: "block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white mb-2 truncate",
      disabled: loading,
      key: index,
      title: thelicense
    }, thelicense.slice(0, 17), thelicense.length > 17 && '...');
  }))), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, license['version']), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-red-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function onClick() {
      return resettheLicense();
    },
    disabled: loading
  }, "Reset"), /*#__PURE__*/compat_module["default"].createElement("br", null), /*#__PURE__*/compat_module["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-purple-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function onClick() {
      return buyUsage();
    },
    disabled: loading
  }, "Buy Usage"), /*#__PURE__*/compat_module["default"].createElement("br", null), /*#__PURE__*/compat_module["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function onClick() {
      navigator.clipboard.writeText(license['license']);
      react_toastify_esm/* toast */.Am.success('License copied to clipboard.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
    },
    disabled: loading
  }, "Copy license")));
}

/***/ }),

/***/ 6454:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5776);

function ArrowDownCircleIcon({
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
    d: "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowDownCircleIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=378.bundle.js.map