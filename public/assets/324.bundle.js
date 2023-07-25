(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[324],{

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9655);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1216);








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
      className: 'text-center'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      placeholder: "Search a product",
      defaultValue: search,
      className: "input w-full input-bordered max-w-xs mb-4 ",
      onChange: function (e) {
        return searchValue(e.target.value);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "select select-bordered w-full max-w-xs mx-2 mb-4",
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
  console.log(blogs);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: 'mx-16'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-center text-4xl mt-4 mb-2"
  }, "News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "Search a product",
    defaultValue: search,
    className: "input w-full input-bordered max-w-xs mb-4 ",
    onChange: function (e) {
      return searchValue(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "select select-bordered w-full max-w-xs mx-2 mb-4",
    onChange: function (e) {
      return setCategory(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    disabled: true,
    selected: true
  }, "Select category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ''
  }, "All"), categories.data.map(function (categorie, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: categorie.id
    }, categorie.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  }, page > 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "join-item btn btn-square outline-0",
    type: "radio",
    name: "options",
    "aria-label": `${page - 2}`,
    onClick: function () {
      setPage(page - 2);
      mutate();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "join-item btn btn-square outline-0",
    type: "radio",
    name: "options",
    "aria-label": `${page - 1}`,
    onClick: function () {
      setPage(page - 1);
      mutate();
    }
  })) : page > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "join-item btn btn-square outline-0",
    type: "radio",
    name: "options",
    "aria-label": `${page - 1}`,
    onClick: function () {
      setPage(page - 1);
      mutate();
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "join-item btn btn-square outline-0",
    type: "radio",
    name: "options",
    "aria-label": `${page}`,
    checked: true
  }), page + 2 <= blogs.totalPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "join-item btn btn-square outline-0",
    type: "radio",
    name: "options",
    "aria-label": `${page + 1}`,
    onClick: function () {
      setPage(page + 1);
      mutate();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "join-item btn btn-square outline-0",
    type: "radio",
    name: "options",
    "aria-label": `${page + 2}`,
    onClick: function () {
      setPage(page + 2);
      mutate();
    }
  })) : page + 1 <= blogs.totalPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "join-item btn btn-square outline-0",
    type: "radio",
    name: "options",
    "aria-label": `${page + 1}`,
    onClick: function () {
      setPage(page + 1);
      mutate();
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null))));
}
function NewsCard(_ref) {
  let {
    blog
  } = _ref;
  const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  console.log(JSON.parse(blog.pictures)[0]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .rU, {
    to: `/news/${blog.id}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 min-h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure", {
    className: 'px-4 pt-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: imageError ? "https://placehold.co/800x418" : "https://privateapi.bagou450.com" + JSON.parse(blog.pictures)[0],
    alt: blog.title + " picture",
    className: "border-base-content bg-base-300 rounded-lg border border-opacity-5",
    onError: function () {
      return setImageError(true);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "card-title"
  }, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-xs opacity-60'
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