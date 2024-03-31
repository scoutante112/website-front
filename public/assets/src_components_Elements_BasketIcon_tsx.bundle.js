"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Elements_BasketIcon_tsx"],{

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

/***/ "./src/components/Elements/BasketIcon.tsx":
/*!************************************************!*\
  !*** ./src/components/Elements/BasketIcon.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasketIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _api_shop_createOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/shop/createOrder */ "./src/api/shop/createOrder.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/esm/XMarkIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");








function BasketIcon() {
  const [basket, setBasket] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_3__.useDark)();
  const [isBasket, setisBacket] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleLocalStorageChange = function () {
    const storedBasket = localStorage.getItem('basket');
    if (!storedBasket || !storedBasket.length) {
      setisBacket(false);
      setOpen(false);
      return;
    }
    const basketArray = JSON.parse(storedBasket);
    setisBacket(true);
    setBasket(basketArray);
  };
  const removeItem = function (id) {
    const storedBasket = localStorage.getItem('basket');
    if (!storedBasket) {
      setOpen(false);
      setisBacket(false);
      return;
    }
    const basketArray = JSON.parse(storedBasket);
    const newBasket = basketArray.filter(function (basketelement) {
      return basketelement.id !== id;
    });
    localStorage.setItem('basket', JSON.stringify(newBasket));
    window.dispatchEvent(new Event('basket'));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    handleLocalStorageChange();
    window.addEventListener('basket', handleLocalStorageChange);
    return function () {
      window.removeEventListener('basket', handleLocalStorageChange);
    };
  }, []);
  if (!isBasket || !basket || !basket.length) {
    setOpen(false);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null);
  }
  const MakeOrder = function () {
    setLoading(true);
    const products = basket.map(function (item) {
      return item.id;
    });
    (0,_api_shop_createOrder__WEBPACK_IMPORTED_MODULE_1__["default"])(products).then(function (data) {
      setLoading(false);
      if (data.data.status === 'success') {
        window.location.href = data.data.data;
      }
      if (data.data.message === 'You need to be authentificated') {
        navigate('/login');
        setOpen(false);
        return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('You need to be logged!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      } else if (data.data.message === 'You need to link a address to your account.') {
        navigate('/account');
        setOpen(false);
        return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('You need to link a address to your account', {
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
      return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagShop-001', {
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
      setLoading(false);
      if (e.response && e.response.data && e.response.data.message === 'You need to be authentificated') {
        navigate('/login');
        setOpen(false);
        return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('You need to be logged!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      } else if (e.response && e.response.data && e.response.data.message === 'You need to link a address to your account.') {
        navigate('/account');
        setOpen(false);
        return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('You need to link a address to your account', {
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
      return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagShop-001', {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'lg:mx-2 h-max my-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Root, {
    show: open,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
    as: "div",
    className: "relative z-10",
    onClose: setOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "ease-in-out duration-500",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-500",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "fixed inset-0 overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "absolute inset-0 overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "transform transition ease-in-out duration-500 sm:duration-700",
    enterFrom: "translate-x-full",
    enterTo: "translate-x-0",
    leave: "transform transition ease-in-out duration-500 sm:duration-700",
    leaveFrom: "translate-x-0",
    leaveTo: "translate-x-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Dialog.Panel, {
    className: "pointer-events-auto w-screen max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-lessdark text-white' : 'bg-white text-gray-900'} flex h-full flex-col overflow-y-scroll shadow-xl`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex-1 overflow-y-auto px-4 py-6 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex items-start justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Dialog.Title, {
    className: "text-lg font-medium"
  }, "Shopping cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "ml-3 flex h-7 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    className: "relative -m-2 p-2 text-gray-400 hover:text-gray-500",
    onClick: function () {
      return setOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "absolute -inset-0.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Close panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flow-root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("ul", {
    role: "list",
    className: "-my-6 divide-y divide-gray-200"
  }, basket.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("li", {
      key: product.id,
      className: "flex py-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      src: product.icon,
      alt: product.name,
      className: "h-full w-full object-cover object-center"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "ml-4 flex flex-1 flex-col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "flex justify-between text-base font-medium"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: dark ? 'ml-4 text-white' : 'ml-4 text-black'
    }, product.price, "\u20AC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: "mt-1 text-sm text-gray-500"
    }, product.tag)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "flex flex-1 items-end justify-between text-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
      type: "button",
      onClick: function () {
        return removeItem(product.id);
      },
      disabled: loading,
      className: `font-medium text-indigo-600 hover:text-indigo-500 ${loading && 'opacity-50'}`
    }, "Remove")))));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "border-t border-gray-200 px-4 py-6 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex justify-between font-medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: dark ? 'text-white' : 'text-black'
  }, "Subtotal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: dark ? 'text-white' : 'text-black'
  }, basket.reduce(function (total, item) {
    return total + item.price;
  }, 0), "\u20AC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "mt-0.5 text-sm text-gray-500"
  }, "Shipping and taxes calculated at checkout."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    onClick: function () {
      return MakeOrder();
    },
    disabled: loading,
    className: `flex w-full items-center justify-center rounded-md border border-transparent bg-bg450-logo px-6 py-3 font-medium text-white shadow-sm hover:bg-bg450-logohover ${loading && 'opacity-50'}`
  }, "Checkout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-6 flex justify-center text-center text-sm text-black opacacity-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: dark ? 'text-white' : 'text-black'
  }, "or", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    className: `font-medium text-bg450-logo hover:text-bg450-logohover mx-2 ${loading && 'opacity-50'}`,
    onClick: function () {
      return setOpen(false);
    }
  }, "Continue Shopping", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    "aria-hidden": "true"
  }, " \u2192"))))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    onClick: function () {
      setOpen(!open);
    },
    className: `${dark ? 'text-white' : 'text-gray-600'} relative items-center hover:opacity-50 opacity-75 duration-300 flex`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "h-6 w-6 mr-2"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: 'hidden lg:flex'
  }, basket.length)))));
}

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function ShoppingCartIcon({
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
    d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ShoppingCartIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_components_Elements_BasketIcon_tsx.bundle.js.map