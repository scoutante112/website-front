(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[324,229],{

/***/ 1229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(665);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1216);



function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-screen mx-auto text-center cursor-wait"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.img, {
    src: "https://cdn.bagou450.com/assets/img/bg5.webp",
    className: 'h-44 w-44 mx-auto',
    alt: "Logo",
    animate: {
      rotate: 360
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-2xl'
  }, "Loading...."));
}

/***/ }),

/***/ 6791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Elements_Pagination)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/ArrowLongLeftIcon.js

function ArrowLongLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react.forwardRef(ArrowLongLeftIcon);
/* harmony default export */ const esm_ArrowLongLeftIcon = (ForwardRef);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/ArrowLongRightIcon.js

function ArrowLongRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z",
    clipRule: "evenodd"
  }));
}
const ArrowLongRightIcon_ForwardRef = react.forwardRef(ArrowLongRightIcon);
/* harmony default export */ const esm_ArrowLongRightIcon = (ArrowLongRightIcon_ForwardRef);
;// CONCATENATED MODULE: ./src/components/Elements/Pagination.tsx


const Pagination = function ({
  totalPages,
  page,
  setPage
}) {
  if (totalPages < 2) {
    return /*#__PURE__*/react.createElement(react.Fragment, null);
  }
  const visiblePages = 3;
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
        pages.push( /*#__PURE__*/react.createElement("button", {
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
          pages.push( /*#__PURE__*/react.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: "right-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: totalPages,
          className: `join-item btn ${totalPages === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(totalPages);
          }
        }, totalPages));
      } else if (currentPage > totalPages - visiblePages) {
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: 1,
          className: `join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(1);
          }
        }, 1));
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: "left-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        for (let i = totalPages - visiblePages; i <= totalPages; i++) {
          pages.push( /*#__PURE__*/react.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
      } else {
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: 1,
          className: `join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(1);
          }
        }, 1));
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: "left-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push( /*#__PURE__*/react.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: "right-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        pages.push( /*#__PURE__*/react.createElement("button", {
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
  const generatePageNumbers = function () {
    const currentPage = Math.max(1, Math.min(page, totalPages));
    const ellipsis = '...';
    let pageNumbers = [];
    if (totalPages <= visiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= visiblePages) {
        for (let i = 1; i <= visiblePages + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(0); // Placeholder for ellipsis
        pageNumbers.push(totalPages);
      } else if (currentPage > totalPages - visiblePages) {
        pageNumbers.push(1);
        pageNumbers.push(0); // Placeholder for ellipsis
        for (let i = totalPages - visiblePages; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push(0); // Placeholder for ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(0); // Placeholder for ellipsis
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };
  const pageNumbers = generatePageNumbers();
  return /*#__PURE__*/react.createElement("nav", {
    className: "flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mb-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "-mt-px flex w-0 flex-1 mx-2 lg:mx-8 xl:mx-16"
  }, /*#__PURE__*/react.createElement("button", {
    className: page === 1 ? "inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500" : "inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
    onClick: function () {
      return handlePageChange(page - 1);
    },
    disabled: page === 1
  }, /*#__PURE__*/react.createElement(esm_ArrowLongLeftIcon, {
    className: "mr-3 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), "Previous")), /*#__PURE__*/react.createElement("div", {
    className: "hidden md:-mt-px md:flex mx-2 lg:mx-8 xl:mx-16"
  }, pageNumbers.map(function (pageNumber, index) {
    if (pageNumber === 0) {
      return /*#__PURE__*/react.createElement("span", {
        key: `ellipsis-${index}`,
        className: "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
      }, "...");
    }
    return /*#__PURE__*/react.createElement("button", {
      key: pageNumber,
      className: `inline-flex items-center border-t-2 ${pageNumber === page ? 'border-indigo-500' : 'border-transparent'} px-4 pt-4 text-sm font-medium ${pageNumber === page ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`,
      onClick: function () {
        return handlePageChange(pageNumber);
      }
    }, pageNumber);
  })), /*#__PURE__*/react.createElement("div", {
    className: "-mt-px flex w-0 flex-1 justify-end mx-2 lg:mx-8 xl:mx-16"
  }, /*#__PURE__*/react.createElement("button", {
    className: page === totalPages ? "inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500" : "inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
    onClick: function () {
      return handlePageChange(page + 1);
    },
    disabled: page === totalPages
  }, "Next", /*#__PURE__*/react.createElement(esm_ArrowLongRightIcon, {
    className: "ml-3 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }))));
};
/* harmony default export */ const Elements_Pagination = (Pagination);

/***/ }),

/***/ 1324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3757);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1412);
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9670);
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1229);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(296);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9655);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1216);
/* harmony import */ var _Elements_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6791);









function NewsContainer() {
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    data: blogs,
    error,
    mutate,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(`${_config_config__WEBPACK_IMPORTED_MODULE_2__/* .config */ .v.privateapilink}/blogs?search=${search}&category=${category}&page=${page}`, _api_http__WEBPACK_IMPORTED_MODULE_3__/* .fetcher */ ._i);
  const {
    data: categories,
    error: error2,
    isLoading: isLoading2
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(`${_config_config__WEBPACK_IMPORTED_MODULE_2__/* .config */ .v.privateapilink}/categories`, _api_http__WEBPACK_IMPORTED_MODULE_3__/* .fetcher */ ._i);
  if (!blogs || error || isLoading || !categories || error2 || isLoading2) {
    if (!categories || error2 || isLoading2) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: "text-center text-4xl mt-4 mb-2"
    }, "News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'text-center grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 mb-4'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      placeholder: "Search a product",
      defaultValue: search,
      className: "block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-4 ",
      onChange: function (e) {
        return searchValue(e.target.value);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-4 ",
      onChange: function (e) {
        return setCategory(e.target.value);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      disabled: true,
      selected: true
    }, "Select category"), categories.data.map(function (categorie, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        key: index,
        value: categorie.id
      }, categorie.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }
  const searchValue = (0,debounce__WEBPACK_IMPORTED_MODULE_5__.debounce)(function (value) {
    setSearch(value);
    setPage(1);
    mutate();
  }, 500);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: 'mx-16 '
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-center text-black text-4xl mt-4 mb-2"
  }, "News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-auto flex gap-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "Search a product",
    defaultValue: search,
    className: "block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-screen-xl mb-4 min-w-screen-lg",
    onChange: function (e) {
      return searchValue(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: " block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-screen-xl mb-4 min-w-screen-lg",
    onChange: function (e) {
      return setCategory(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    disabled: true,
    selected: true
  }, "Select category"), categories.data.map(function (categorie, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: categorie.id
    }, categorie.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-2'
  }, blogs.data.map(function (blog, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NewsCard, {
      blog: blog,
      key: index
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "join"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Pagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    setPage: setPage,
    totalPages: blogs.totalPage,
    page: page
  }))));
}
function NewsCard({
  blog
}) {
  const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .Link */ .rU, {
    to: `/news/${blog.id}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 min-h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure", {
    className: 'px-4 pt-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: imageError ? "https://placehold.co/800x418" : "https://beta-api.bagou450.com" + JSON.parse(blog.pictures)[0],
    alt: blog.title + " picture",
    className: "border-base-content bg-base-300 rounded-lg border border-opacity-5",
    onError: function () {
      return setImageError(true);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "text-black text-center"
  }, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-xs opacity-60 text-center'
  }, blog.slug))));
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
//# sourceMappingURL=324.bundle.js.map