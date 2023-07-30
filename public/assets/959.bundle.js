(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[959],{

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

const Pagination = function (_ref) {
  let {
    totalPages,
    page,
    setPage
  } = _ref;
  const visiblePages = 3; // Number of visible pages on each side of the current page.

  const handlePageChange = function (newPage) {
    window.scrollTo(0, 0);
    setPage(newPage);
  };
  const renderPagination = function () {
    const currentPage = Math.max(1, Math.min(page, totalPages));
    const ellipsis = '...';
    let pages = [];
    if (totalPages <= visiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: i,
          className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(i);
          }
        }, i));
      }
    } else {
      if (currentPage <= visiblePages) {
        for (let i = 1; i <= visiblePages + 1; i++) {
          pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "right-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: totalPages,
          className: `join-item btn ${totalPages === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(totalPages);
          }
        }, totalPages));
      } else if (currentPage > totalPages - visiblePages) {
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: 1,
          className: `join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(1);
          }
        }, 1));
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "left-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        for (let i = totalPages - visiblePages; i <= totalPages; i++) {
          pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
      } else {
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: 1,
          className: `join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(1);
          }
        }, 1));
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "left-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "right-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: totalPages,
          className: `join-item btn ${totalPages === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(totalPages);
          }
        }, totalPages));
      }
    }
    return pages;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "join"
  }, renderPagination());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ 4959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3757);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1229);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1412);
/* harmony import */ var _Elements_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(447);






const ProductBox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/* import() */ 702).then(__webpack_require__.bind(__webpack_require__, 2702));
});
const fetcher = function (url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};
function Products() {
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    data,
    mutate,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(`${_config_config__WEBPACK_IMPORTED_MODULE_4__/* .config */ .v.privateapilink}/addons/get?page=${page}&search=${search}&perpage=21`, fetcher);
  document.title = "Bagou450 - Products";
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: "text-center text-4xl mt-16 mb-2"
    }, "Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mx-4 grid grid-cols-5 gap-x-2 gap-y-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "min-h-screen"
    }));
  }
  const pageNumbers = [];
  for (let i = 1; i <= data.page; i++) {
    pageNumbers.push(i);
  }
  const searchValue = (0,debounce__WEBPACK_IMPORTED_MODULE_2__.debounce)(function (value) {
    setSearch(value);
    setPage(1);
    mutate();
  }, 500);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-center text-4xl mt-4 mb-2"
  }, "Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "Search a product",
    defaultValue: search,
    className: "input w-full input-bordered max-w-xs mb-4 ",
    onChange: function (e) {
      return searchValue(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "mx-4 grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-3 gap-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, data.data.map(function (element, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      key: key,
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: `https://cdn.bagou450.com/assets/img/addons/${element.id}.webp`,
        alt: element.name + " icon",
        className: "mt-6 h-52 w-52",
        width: "500",
        height: "500"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProductBox, {
      element: element,
      key: key
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Pagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    page: page,
    setPage: setPage,
    totalPages: data.totalpage
  }))));
}

/***/ }),

/***/ 296:
/***/ ((module) => {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ })

}]);
//# sourceMappingURL=959.bundle.js.map