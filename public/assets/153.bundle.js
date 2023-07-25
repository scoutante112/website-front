"use strict";
(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[153],{

/***/ 9554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1412);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9670);


const getDownloadLink = function (order) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.privateapilink}/orders/downloadlink/${order}`).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDownloadLink);

/***/ }),

/***/ 3153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AccountOrderContainer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var core_dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
// EXTERNAL MODULE: ./src/api/shop/getDownloadLink.ts
var getDownloadLink = __webpack_require__(9554);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(1955);
;// CONCATENATED MODULE: ./src/api/shop/getInvoiceDownloadLink.ts


const getInvoiceDownloadLink = function (order) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.get(`${config/* config */.v.privateapilink}/orders/downloadInvoiceLink/${order}`).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const shop_getInvoiceDownloadLink = (getInvoiceDownloadLink);
// EXTERNAL MODULE: ./src/components/Account/NavBarAccount.tsx
var NavBarAccount = __webpack_require__(9911);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
;// CONCATENATED MODULE: ./src/components/Account/Order/AccountOrderContainer.tsx












function AccountOrderContainer() {
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    data,
    mutate,
    error,
    isLoading
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/orders`, http/* fetcher */._i);
  const navigation = (0,dist/* useNavigate */.s0)();
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  const downloadProduct = function (order) {
    setLoading(true);
    react_toastify_esm/* toast */.Am.info('Please wait during the generation of the file...', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
    (0,getDownloadLink/* default */.Z)(order).then(function (data) {
      fetch(`${config/* config */.v.privateapilink}${data.data.data}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${js_cookie/* default */.Z.get('access_token')}`
        }
      }).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        console.log(`Bagou450-${order}.zip`);
        link.setAttribute('download', `Bagou450-${order}.zip`);
        document.body.appendChild(link);
        link.addEventListener('load', function () {
          URL.revokeObjectURL(url);
        });
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        react_toastify_esm/* toast */.Am.success('Your file is now downloaded!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      });
    }).catch(function () {
      react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    });
    setLoading(false);
  };
  const downloadInvoice = function (orderid) {
    setLoading(true);
    shop_getInvoiceDownloadLink(orderid).then(function (data) {
      fetch(`${config/* config */.v.privateapilink}${data.data.data}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${js_cookie/* default */.Z.get('access_token')}`
        }
      }).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        // Téléchargement du fichier blob

        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${orderid} - Bagou450.pdf`);
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        react_toastify_esm/* toast */.Am.success('Your invoice is now downloaded!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      }).catch(function () {
        react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      });
      setLoading(false);
    });
  };
  document.title = 'Bagou450 - My orders';
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavBarAccount/* default */.Z, {
    tab: 'orders'
  }), /*#__PURE__*/react.createElement("section", {
    className: "mx-8 my-4"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("table", {
    className: "table w-full max-w-7xl mx-auto border-neutral border-2"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", {
    className: "w-full"
  }, /*#__PURE__*/react.createElement("th", {
    className: 'hidden xl:block'
  }, "Id"), /*#__PURE__*/react.createElement("th", null, "Product"), /*#__PURE__*/react.createElement("th", null, "Price"), /*#__PURE__*/react.createElement("th", {
    className: 'hidden xl:block'
  }, "Stripe Id"), /*#__PURE__*/react.createElement("th", null, "Status"), /*#__PURE__*/react.createElement("th", null))), /*#__PURE__*/react.createElement("tbody", null, data.data.orders.map(function (order, key) {
    return /*#__PURE__*/react.createElement("tr", {
      className: "w-full",
      key: key
    }, /*#__PURE__*/react.createElement("th", {
      className: 'hidden xl:table-cell'
    }, order['order_id']), /*#__PURE__*/react.createElement("th", null, order['products'].map(function (item, key) {
      return /*#__PURE__*/react.createElement(react.Fragment, {
        key: key
      }, key < 3 && /*#__PURE__*/react.createElement("p", null, item['name']), key === 3 && /*#__PURE__*/react.createElement("div", {
        className: "dropdown dropdown-hover"
      }, /*#__PURE__*/react.createElement("label", {
        tabIndex: 0,
        className: 'text-neutral-content ',
        style: {
          color: "hsl(var(--bc) / 0.6)"
        }
      }, "More"), /*#__PURE__*/react.createElement("ul", {
        tabIndex: 0,
        className: "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      }, order['products'].map(function (item, key) {
        return /*#__PURE__*/react.createElement("li", {
          key: key
        }, item['name']);
      }))));
    })), /*#__PURE__*/react.createElement("th", null, order['price'], "\u20AC"), /*#__PURE__*/react.createElement("td", {
      className: 'hidden xl:table-cell'
    }, order['stripe_id']), /*#__PURE__*/react.createElement("td", {
      className: order['status'] === 'incomplete' ? 'text-red-500' : order['status'] === 'expired' ? 'text-white' : order['status'] === 'complete' ? 'text-green-500' : ''
    }, order['status'][0].toUpperCase() + order['status'].slice(1, order['status'].length)), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("button", {
      className: "btn btn-primary btn-outline border-0",
      disabled: loading,
      onClick: function () {
        return downloadInvoice(order['order_id']);
      }
    }, "Download invoice"), order['status'] === 'complete' && /*#__PURE__*/react.createElement("button", {
      disabled: loading,
      className: "btn btn-secondary btn-outline border-0 mx-4",
      onClick: function () {
        return downloadProduct(order['order_id']);
      }
    }, "Download product", order['products'].length > 1 && 's')));
  }))))), /*#__PURE__*/react.createElement("section", {
    className: "min-h-screen"
  }));
}

/***/ })

}]);
//# sourceMappingURL=153.bundle.js.map