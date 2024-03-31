"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Products_tsx"],{

/***/ "./src/components/ProductBox.tsx":
/*!***************************************!*\
  !*** ./src/components/ProductBox.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/App.tsx");




function ProductBox({
  product
}) {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_2__.useDark)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: `/product/${product.slug}`,
    className: `mx-auto ${dark ? 'bg-bg450-inputdark hover:bg-bg450-dark' : 'bg-gray-200 hover:bg-base-200'}  p-4 rounded-xl shadow-xs  transition-all duration-200 hover:-translate-y-1`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    key: product.id,
    className: "group relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-2 pt-2 overflow-hidden rounded-md group-hover:opacity-75 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: `${_config_config__WEBPACK_IMPORTED_MODULE_1__.config.iconlink}${product.icon}`,
    alt: product.name + ' icon',
    height: '500px',
    loading: 'lazy',
    width: '500px',
    className: "max-w-[50%] md:max-w-[75%]  object-cover object-center rounded-md mx-auto"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: `${dark ? 'text-slate-200' : 'text-gray-700'} mt-4 text-xl font-semibold text-center`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "absolute inset-0"
  }), product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-300' : 'text-black'} mt-1 text-md text-center`
  }, product.tag)));
}

/***/ }),

/***/ "./src/components/Products.tsx":
/*!*************************************!*\
  !*** ./src/components/Products.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");
/* harmony import */ var _Elements_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Elements/Pagination */ "./src/components/Elements/Pagination.tsx");
/* harmony import */ var _ProductBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductBox */ "./src/components/ProductBox.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App */ "./src/App.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");









const fetcher = function (url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};
function Products() {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_7__.useDark)();
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    data,
    mutate,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_4__.config.privateapilink}/addons/get?page=${page}&search=${search}&perpage=20&category=${category}`, fetcher);
  document.title = 'Bagou450 - Products';
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
      className: dark ? 'bg-bg450-lessdark' : 'bg-white'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: `text-center ${dark ? 'text-white' : 'text-black'} text-4xl py-16 mb-2`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, "Pterodactyl addons")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "mx-4 grid grid-cols-5 gap-x-2 gap-y-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
      className: "min-h-screen"
    }));
  }
  const searchValue = (0,debounce__WEBPACK_IMPORTED_MODULE_2__.debounce)(function (value) {
    setSearch(value);
    setPage(1);
    mutate();
  }, 500);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: dark ? 'bg-bg450-lessdark' : 'bg-white'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "description",
    content: 'Discover Bagou450\'s high-quality Pterodactyl addons, enhancing your gaming experience with Minecraft version changers, plugin installers, and more.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "twitter:description",
    content: 'Discover Bagou450\'s high-quality Pterodactyl addons, enhancing your gaming experience with Minecraft version changers, plugin installers, and more.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    property: "og:description",
    content: 'Discover Bagou450\'s high-quality Pterodactyl addons, enhancing your gaming experience with Minecraft version changers, plugin installers, and more.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-white' : 'text-gray-900'} text-2xl text-center font-bold tracking-tight sm:text-4xl py-4`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, "Pterodactyl addons")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'flex gap-x-2 text-center mx-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    placeholder: "Search a product",
    defaultValue: search,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} ml-auto block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-xs mb-4`,
    onChange: function (e) {
      return searchValue(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("select", {
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} mr-auto block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-screen-xl mb-4 min-w-screen-lg`,
    value: category,
    onChange: function (e) {
      setCategory(e.target.value);
      setPage(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
    disabled: true,
    selected: true
  }, "Select category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
    value: ''
  }, "All categories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
    value: 'Minecraft'
  }, "Minecraft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
    value: 'FiveM'
  }, "FiveM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
    value: 'Management'
  }, "Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
    value: 'Miscellaneous'
  }, "Miscellaneous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
    value: 'Bundles'
  }, "Bundles"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    className: "grid mx-12 md:grid-cols-2 md:mx-24 lg:grid-cols-3 lg:mx-40 2xl:grid-cols-5 2xl:mx-52 gap-x-3 gap-y-4 "
  }, data.data.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      product: product,
      key: product.id
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "text-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "btn-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
    page: page,
    setPage: setPage,
    totalPages: data.totalpage
  }))));
}

/***/ })

}]);
//# sourceMappingURL=src_components_Products_tsx.bundle.js.map