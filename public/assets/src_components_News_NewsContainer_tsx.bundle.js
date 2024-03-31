"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_News_NewsContainer_tsx"],{

/***/ "./src/components/News/NewsContainer.tsx":
/*!***********************************************!*\
  !*** ./src/components/News/NewsContainer.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/http */ "./src/api/http.ts");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var _Elements_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Elements/Pagination */ "./src/components/Elements/Pagination.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");











function NewsContainer() {
  document.title = 'Bagou450 - Blog';
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_8__.useDark)();
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    data: blogs,
    error,
    mutate,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_2__.config.privateapilink}/blogs?search=${search}&category=${category}&page=${page}`, _api_http__WEBPACK_IMPORTED_MODULE_3__.fetcher);
  const {
    data: categories,
    error: error2,
    isLoading: isLoading2
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_2__.config.privateapilink}/categories`, _api_http__WEBPACK_IMPORTED_MODULE_3__.fetcher);
  if (!blogs || error || isLoading || !categories || error2 || isLoading2) {
    if (!categories || error2 || isLoading2) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: dark ? 'bg-bg450-lessdark' : 'bg-white'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
      name: "description",
      content: 'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
      name: "twitter:description",
      content: 'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
      property: "og:description",
      content: 'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: 'text-center text-4xl mt-4 mb-2'
    }, "News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: ' mx-2 text-center grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 mb-4'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
      type: "text",
      placeholder: "Search a product",
      defaultValue: search,
      className: "block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-4 ",
      onChange: function (e) {
        return searchValue(e.target.value);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("select", {
      className: "block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-4 ",
      onChange: function (e) {
        return setCategory(e.target.value);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
      disabled: true,
      selected: true
    }, "Select category"), categories.data.map(function (categorie, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
        key: index,
        value: categorie.id
      }, categorie.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }
  const searchValue = (0,debounce__WEBPACK_IMPORTED_MODULE_5__.debounce)(function (value) {
    setSearch(value);
    setPage(1);
    mutate();
  }, 500);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    className: `${dark ? 'bg-bg450-lessdark' : 'bg-white'} `
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "description",
    content: 'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "twitter:description",
    content: 'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    property: "og:description",
    content: 'Stay up-to-date with the latest news and insights in the world of Pterodactyl hosting and gaming. Explore Bagou450\'s blog for valuable information and updates.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-200' : 'text-black'} text-center text-4xl pt-4 pb-2`
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: ' mx-2 mx-auto flex gap-x-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    placeholder: "Search a product",
    defaultValue: search,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-screen-xl mb-4 min-w-screen-lg`,
    onChange: function (e) {
      return searchValue(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("select", {
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6 max-w-screen-xl mb-4 min-w-screen-lg`,
    onChange: function (e) {
      return setCategory(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
    disabled: true,
    selected: true
  }, "Select category"), categories.data.map(function (categorie, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
      key: index,
      value: categorie.id
    }, categorie.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'mx-16 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-2'
  }, blogs.data.map(function (blog, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(NewsCard, {
      blog: blog,
      key: index
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "text-center pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "join"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setPage: setPage,
    totalPages: blogs.totalPage,
    page: page
  }))));
}
function NewsCard({
  blog
}) {
  const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_8__.useDark)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
    to: `/blog/${blog.id}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 min-h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("figure", {
    className: 'px-4 pt-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: imageError ? 'https://placehold.co/800x418' : 'https://beta-api.bagou450.com' + JSON.parse(blog.pictures)[0],
    alt: blog.title + ' picture',
    className: "border-base-content bg-base-300 rounded-lg border border-opacity-5",
    onError: function () {
      return setImageError(true);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-300' : 'text-black'} text-center`
  }, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-300' : 'text-black'} text-xs opacity-60 text-center`
  }, blog.slug))));
}

/***/ })

}]);
//# sourceMappingURL=src_components_News_NewsContainer_tsx.bundle.js.map