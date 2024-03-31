"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_News_NewsCard_tsx"],{

/***/ "./src/api/news/getNews.ts":
/*!*********************************!*\
  !*** ./src/api/news/getNews.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const getNews = function (id) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/blogs/${id}`).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNews);

/***/ }),

/***/ "./src/components/News/NewsCard.tsx":
/*!******************************************!*\
  !*** ./src/components/News/NewsCard.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _api_news_getNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/news/getNews */ "./src/api/news/getNews.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _Admin_Blogs_toolBar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Admin/Blogs/toolBar.scss */ "./src/components/Admin/Blogs/toolBar.scss");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_10__);












function NewsCard() {
  const [news, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_9__.useDark)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (id) {
      (0,_api_news_getNews__WEBPACK_IMPORTED_MODULE_3__["default"])(id).then(function (data) {
        if (data.data.status === 'success') {
          setNews(data.data.data);
          return;
        }
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Sorry a unexpected error occurred.', {
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
    }
  }, []);
  if (!news) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  }
  document.title = `Bagou450 - ${news.title}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "description",
    content: `Tags: ${JSON.parse(news.tags).join(', ')}`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-300' : 'text-black'} text-center text-4xl mt-4`
  }, news.title, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: 'text-2xl opacity-60'
  }, "by ", news.author), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: 'text-xl opacity-40'
  }, moment__WEBPACK_IMPORTED_MODULE_7___default()(news.created_at).fromNow())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-300' : 'text-black'} text-center text-black text-2xl mt-4 opacity-80`
  }, news.slug), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    className: 'mx-8 my-8 ql'
  }, (0,react_html_parser__WEBPACK_IMPORTED_MODULE_2__["default"])((0,dompurify__WEBPACK_IMPORTED_MODULE_10__.sanitize)(news.content))));
}

/***/ })

}]);
//# sourceMappingURL=src_components_News_NewsCard_tsx.bundle.js.map