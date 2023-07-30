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

/***/ 9911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavBarAccount)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9250);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9655);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9670);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3757);
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1229);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1412);






function NavBarAccount(tab) {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useLocation */ .TH)();
  const [admin, showAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(location.pathname.startsWith('/admin/'));
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(`${_config_config__WEBPACK_IMPORTED_MODULE_4__/* .config */ .v.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_1__/* .fetcher */ ._i);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-4xl my-4 text-center"
  }, "Hello, ", !data || error || isLoading ? 'User' : data.data.name[0].toUpperCase() + data.data.name.slice(1, data.data.name.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "mx-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "menu menu-horizontal rounded-box gap-x-2"
  }, !admin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'manage' ? 'bg-neutral-focus disabled' : '',
    to: '/account/manage'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  })), "Manage Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'licenses' ? 'bg-neutral-focus disabled' : '',
    to: '/account/licenses'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })), "Licenses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    to: '/account/orders',
    className: tab.tab === 'orders' ? 'bg-neutral-focus disabled' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  })), "Orders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'tickets' ? 'bg-neutral-focus disabled' : '',
    to: '/account/tickets'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-5 h-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })), "Tickets"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'users' ? 'bg-neutral-focus disabled' : '',
    to: '/admin/users'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: "w-5 h-5",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
  })), "Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'products' ? 'bg-neutral-focus disabled' : '',
    to: '/admin/products'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-5 h-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
  })), "Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'invoices' ? 'bg-neutral-focus disabled' : '',
    to: '/admin/invoices'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-5 h-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
  })), "Invoices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'blogs' ? 'bg-neutral-focus disabled' : '',
    to: '/admin/blogs'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    className: "w-5 h-5",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm5 3h6M7 10h10M7 14h10M7 18h7"
  })), "Blog"))), data.data.role ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    className: "toggle toggle-success ml-8 my-auto",
    checked: admin,
    onClick: function () {
      return showAdmin(!admin);
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mx-2 my-auto"
  }, "Show admin")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)), admin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-center text-red-500 text-xl font-semibold"
  }, "ADMINISTRATOR MODE")));
}

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
  }, /*#__PURE__*/react.createElement("div", null, data.data.orders.length > 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("table", {
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
  })))) : /*#__PURE__*/react.createElement("p", {
    className: 'text-center opacity-80'
  }, "No orders found for this account."))), /*#__PURE__*/react.createElement("section", {
    className: "min-h-screen"
  }));
}

/***/ })

}]);
//# sourceMappingURL=153.bundle.js.map