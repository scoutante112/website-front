"use strict";
(self["webpackChunknewwebsite"] = self["webpackChunknewwebsite"] || []).push([[153],{

/***/ 3153:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AccountOrderContainer; }
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(5776);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
// EXTERNAL MODULE: ./src/api/shop/getDownloadLink.ts
var getDownloadLink = __webpack_require__(9554);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(5678);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(1955);
;// CONCATENATED MODULE: ./src/api/shop/getInvoiceDownloadLink.ts


var getInvoiceDownloadLink = function getInvoiceDownloadLink(order) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.get("".concat(config/* config */.v.privateapilink, "/orders/downloadInvoiceLink/").concat(order)).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ var shop_getInvoiceDownloadLink = (getInvoiceDownloadLink);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
// EXTERNAL MODULE: ./src/components/Account/AccountRouter.tsx + 10 modules
var AccountRouter = __webpack_require__(5248);
;// CONCATENATED MODULE: ./src/components/Account/Order/AccountOrderContainer.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function AccountOrderContainer() {
  var _useState = (0,compat_module.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var _useSWR = (0,dist/* default */.ZP)("".concat(config/* config */.v.privateapilink, "/orders?page=").concat(page), http/* fetcher */._i),
    data = _useSWR.data,
    error = _useSWR.error,
    isLoading = _useSWR.isLoading;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  var _useContext = (0,compat_module.useContext)(AccountRouter/* NavContext */.Ly),
    setActive = _useContext.setActive;
  (0,compat_module.useEffect)(function () {
    setActive(window.location.pathname);
  }, []);
  if (!data || error || isLoading) {
    return /*#__PURE__*/compat_module["default"].createElement(Loading["default"], null);
  }
  document.title = 'Bagou450 - My orders';
  console.log(data);
  return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:flex sm:items-center"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:flex-auto"
  }, /*#__PURE__*/compat_module["default"].createElement("h1", {
    className: "text-base font-semibold leading-6 text-gray-900"
  }, "Orders"), /*#__PURE__*/compat_module["default"].createElement("p", {
    className: "mt-2 text-sm text-gray-700"
  }, "You are on the ", /*#__PURE__*/compat_module["default"].createElement("strong", {
    className: "font-semibold text-gray-900"
  }, "orders"), " page. You can here see all your orders."))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg"
  }, /*#__PURE__*/compat_module["default"].createElement("table", {
    className: "min-w-full divide-y divide-gray-300"
  }, /*#__PURE__*/compat_module["default"].createElement("thead", null, /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden lg:table-cell"
  }, "Id"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell"
  }, "Product"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell"
  }, "Status"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: " px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell"
  }, "Price"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell"
  }, "Transaction Id"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "relative py-3.5 pl-3 pr-4 sm:pr-6"
  }, /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "sr-only"
  }, "Select")))), /*#__PURE__*/compat_module["default"].createElement("tbody", null, data.data.orders.map(function (order, planIdx) {
    return /*#__PURE__*/compat_module["default"].createElement(OrderRow, {
      order: order,
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
function OrderRow(_ref) {
  var order = _ref.order,
    index = _ref.index;
  var _useState3 = (0,compat_module.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var orderid = order.order_id;
  var downloadProduct = function downloadProduct() {
    setLoading(true);
    react_toastify_esm/* toast */.Am.info('Please wait during the generation of the file...', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    });
    (0,getDownloadLink/* default */.Z)(orderid).then(function (data) {
      fetch("".concat(config/* config */.v.privateapilink).concat(data.data.data), {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(js_cookie/* default */.Z.get('access_token'))
        }
      }).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        if (blob.type === 'application/json') {
          return react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
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
        var url = window.URL.createObjectURL(new Blob([blob]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', "Bagou450-".concat(orderid, ".zip"));
        document.body.appendChild(link);
        link.addEventListener('load', function () {
          URL.revokeObjectURL(url);
        });
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        react_toastify_esm/* toast */.Am.success('Your file is now downloaded!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
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
    });
    setLoading(false);
  };
  var downloadInvoice = function downloadInvoice() {
    setLoading(true);
    shop_getInvoiceDownloadLink(orderid).then(function (data) {
      fetch("".concat(config/* config */.v.privateapilink).concat(data.data.data), {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(js_cookie/* default */.Z.get('access_token'))
        }
      }).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        // Téléchargement du fichier blob
        if (blob.type === 'application/json') {
          return react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
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
        var url = window.URL.createObjectURL(new Blob([blob]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', "".concat(orderid, " - Bagou450.pdf"));
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        react_toastify_esm/* toast */.Am.success('Your invoice is now downloaded!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
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
      });
      setLoading(false);
    });
  };
  return /*#__PURE__*/compat_module["default"].createElement("tr", {
    key: index
  }, /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 hidden lg:table-cell"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "font-medium text-gray-900"
  }, order.order_id)), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, order.products.map(function (item, key) {
    return /*#__PURE__*/compat_module["default"].createElement("p", {
      key: key
    }, item['name']);
  })), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 hidden lg:table-cell ".concat(order['status'] === 'incomplete' ? 'text-red-500' : order['status'] === 'expired' ? 'text-white' : order['status'] === 'complete' ? 'text-green-500' : '')
  }, order.status[0].toUpperCase() + order.status.slice(1, order['status'].length)), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, order.price), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell",
    onClick: function onClick() {
      navigator.clipboard.writeText(order.stripe_id);
      react_toastify_esm/* toast */.Am.success('Transaction id copied to clipboard.', {
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
  }, order.stripe_id.slice(0, 32), order.stripe_id.length > 32 && '...'), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-purple-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function onClick() {
      return downloadInvoice();
    },
    disabled: loading
  }, "Download invoice"), /*#__PURE__*/compat_module["default"].createElement("br", null), /*#__PURE__*/compat_module["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-blue-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function onClick() {
      return downloadProduct();
    },
    disabled: loading
  }, "Download product", order.products.length > 1 && 's')));
}

/***/ })

}]);
//# sourceMappingURL=153.bundle.js.map