"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Account_Order_AccountOrderContainer_tsx"],{

/***/ "./src/api/shop/getDownloadLink.ts":
/*!*****************************************!*\
  !*** ./src/api/shop/getDownloadLink.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const getDownloadLink = function (order) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/orders/downloadlink/${order}`).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDownloadLink);

/***/ }),

/***/ "./src/api/shop/getInvoiceDownloadLink.ts":
/*!************************************************!*\
  !*** ./src/api/shop/getInvoiceDownloadLink.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const getInvoiceDownloadLink = function (order) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/orders/downloadInvoiceLink/${order}`).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInvoiceDownloadLink);

/***/ }),

/***/ "./src/components/Account/Order/AccountOrderContainer.tsx":
/*!****************************************************************!*\
  !*** ./src/components/Account/Order/AccountOrderContainer.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountOrderContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/http */ "./src/api/http.ts");
/* harmony import */ var _api_shop_getDownloadLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/shop/getDownloadLink */ "./src/api/shop/getDownloadLink.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _api_shop_getInvoiceDownloadLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../api/shop/getInvoiceDownloadLink */ "./src/api/shop/getInvoiceDownloadLink.ts");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var _AccountRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../AccountRouter */ "./src/components/Account/AccountRouter.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");












function AccountOrderContainer() {
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_11__.useDark)();
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_6__.config.privateapilink}/orders?page=${page}`, _api_http__WEBPACK_IMPORTED_MODULE_3__.fetcher);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {
    setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AccountRouter__WEBPACK_IMPORTED_MODULE_10__.NavContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setActive(window.location.pathname);
  }, []);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  }
  document.title = 'Bagou450 - My orders';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:flex sm:items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:flex-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`
  }, "Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} mt-2 text-sm `
  }, "You are on the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", {
    className: `font-semibold ${dark ? 'text-slate-200' : 'text-gray-600'}`
  }, "orders"), " page. You can here see all your orders."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("table", {
    className: "min-w-full divide-y divide-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm hidden lg:table-cell font-semibold sm:pl-6`
  }, "Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`
  }, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm hidden lg:table-cell font-semibold sm:pl-6`
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6`
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm hidden lg:table-cell font-semibold sm:pl-6`
  }, "Transaction Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: "relative py-3.5 pl-3 pr-4 sm:pr-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Select")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tbody", null, data.data.orders.map(function (order, planIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(OrderRow, {
      order: order,
      index: planIdx,
      key: planIdx
    });
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("nav", {
    className: "flex items-center justify-between lg:border-t lg:border-gray-200 px-4 py-3 sm:px-6 my-2",
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
  }, "Next"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "min-h-screen"
  }));
}
function OrderRow({
  order,
  index
}) {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const orderid = order.order_id;
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_11__.useDark)();
  const downloadProduct = function () {
    setLoading(true);
    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.info('Please wait during the generation of the file...', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: dark ? 'dark' : 'light'
    });
    (0,_api_shop_getDownloadLink__WEBPACK_IMPORTED_MODULE_4__["default"])(orderid).then(function (data) {
      fetch(`${_config_config__WEBPACK_IMPORTED_MODULE_6__.config.privateapilink}${data.data.data}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get('access_token')}`
        }
      }).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        if (blob.type === 'application/json') {
          return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
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
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `Bagou450-${orderid}.zip`);
        document.body.appendChild(link);
        link.addEventListener('load', function () {
          URL.revokeObjectURL(url);
        });
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success('Your file is now downloaded!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      }).catch(function () {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
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
    }).catch(function () {
      react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
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
    setLoading(false);
  };
  const downloadInvoice = function () {
    setLoading(true);
    (0,_api_shop_getInvoiceDownloadLink__WEBPACK_IMPORTED_MODULE_8__["default"])(orderid).then(function (data) {
      fetch(`${_config_config__WEBPACK_IMPORTED_MODULE_6__.config.privateapilink}${data.data.data}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get('access_token')}`
        }
      }).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        // Téléchargement du fichier blob
        if (blob.type === 'application/json') {
          return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
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
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${orderid} - Bagou450.pdf`);
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success('Your invoice is now downloaded!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      }).catch(function () {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
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
      setLoading(false);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm hidden lg:table-cell`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "font-medium "
  }, order.order_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 px-3 py-3.5 text-sm table-cel`
  }, order.products.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      key: key,
      className: dark ? 'text-gray-400' : 'text-gray-500'
    }, item['name']);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 px-3 py-3.5 text-sm hidden lg:table-cell ${order['status'] === 'incomplete' ? 'text-red-500' : order['status'] === 'expired' ? 'text-white' : order['status'] === 'complete' ? 'text-green-500' : ''}`
  }, order.status[0].toUpperCase() + order.status.slice(1, order['status'].length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 px-3 py-3.5 text-sm table-cell`
  }, order.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 hidden px-3 py-3.5 text-sm lg:table-cell`,
    onClick: function () {
      navigator.clipboard.writeText(order.stripe_id);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success('Transaction id copied to clipboard.', {
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
  }, order.stripe_id.slice(0, 32), order.stripe_id.length > 32 && '...'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200 px-3 py-3.5 text-sm table-cell`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-purple-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function () {
      return downloadInvoice();
    },
    disabled: loading
  }, "Download invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("br", null), order['status'] === 'complete' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "inline-flex items-center rounded-md bg-blue-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    onClick: function () {
      return downloadProduct();
    },
    disabled: loading
  }, "Download product", order.products.length > 1 && 's')));
}

/***/ })

}]);
//# sourceMappingURL=src_components_Account_Order_AccountOrderContainer_tsx.bundle.js.map