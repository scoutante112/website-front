"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Products_OrdersCallback_tsx"],{

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

/***/ "./src/components/Elements/Spinner.tsx":
/*!*********************************************!*\
  !*** ./src/components/Elements/Spinner.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

const Spinner = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "inline mt-8 h-16 w-16 animate-spin fill-primary",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "https://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "currentColor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentFill"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Loading...")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./src/components/Products/OrdersCallback.tsx":
/*!****************************************************!*\
  !*** ./src/components/Products/OrdersCallback.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrdersCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/http */ "./src/api/http.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _api_shop_getDownloadLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/shop/getDownloadLink */ "./src/api/shop/getDownloadLink.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _Elements_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Elements/Spinner */ "./src/components/Elements/Spinner.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");











function OrdersCallback() {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_9__.useDark)();
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://beta-api.bagou450.com/api/client/web/orders/status?id=${id}`, _api_http__WEBPACK_IMPORTED_MODULE_4__.fetcher);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.removeItem('basket');
  }, []);
  const navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }
  if (!data['status']) {
    if (data['message'] === 'You need to be authentificated.') {
      navigation('/login');
      window.location.reload();
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }
  if (!data.data.exist) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: 'text-4xl text-center'
    }, "Order not found.");
  }
  /*
  if (!data.data.exist) {
  navigation("/");
  }*/
  const downloadProduct = function () {
    const order = id;
    if (!order) {
      return;
    }
    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.info('Please wait during the generation of the file...', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: dark ? 'dark' : 'light'
    });
    (0,_api_shop_getDownloadLink__WEBPACK_IMPORTED_MODULE_6__["default"])(order).then(function (data) {
      fetch(`${_config_config__WEBPACK_IMPORTED_MODULE_7__.config.privateapilink}${data.data.data}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get('access_token')}`
        }
      }).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        // Téléchargement du fichier blob

        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `Bagou450 - Order #${order}.zip`);
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Your file is now downloaded!', {
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
    });
  };
  document.title = `Bagou450 - Order #${data.data.order.id}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    className: "text-center justify-center mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: "text-white text-4xl"
  }, "Order #", data.data.order.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: `text-3xl mb-2 ${data.data.order.status === 'complete' ? 'text-green-500' : data.data.order.status === 'expired' ? 'opacity-80' : 'text-orange-500'}`
  }, data.data.order.status === 'complete' ? 'Completed' : data.data.order.status === 'expired' ? 'Expired' : 'Pending'), data.data.order.status === 'incomplete' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: 'text-xl opacity-80'
  }, "Please be aware that an order may take a few minutes to be confirmed.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "overflow-x-auto mx-24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("table", {
    className: "table w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", null, "Description"), data.data.order.status === 'complete' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", null, "License")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", null, "Price"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tbody", null, data.data.order.products.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", {
      className: "hover w-full",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: 'flex w-full gap-x-2'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      src: `${_config_config__WEBPACK_IMPORTED_MODULE_7__.config.privateiconlink}${item.icon}`,
      alt: item.name,
      className: 'h-16 w-16'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: 'my-auto'
    }, item.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, item.tag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
      className: `${item.license ? 'opacity-100' : 'opacity-80'}`
    }, item.license ? item.license : 'No license'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, item.price, "\u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: 'my-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", {
    className: 'text-xl font-bold'
  }, "Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: 'my-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", {
    className: "text-xl font-bold"
  }, data.data.order.products.reduce(function (total, item) {
    return total + item.price;
  }, 0).toFixed(2), "\u20AC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, data.data.order.status === 'complete' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: 'btn btn-outline btn-primary outline-0',
    onClick: function () {
      return downloadProduct();
    }
  }, "Download product", data.data.order.products.length > 1 ? 's' : '') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null)))))), data.data.order.status === 'incomplete' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex justify-end mr-12 my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "btn btn-outline btn-primary outline-0",
    onClick: function () {
      return window.location.assign(data.data.order.checkout);
    }
  }, "Complete order"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "min-h-screen"
  }));
}

/***/ })

}]);
//# sourceMappingURL=src_components_Products_OrdersCallback_tsx.bundle.js.map