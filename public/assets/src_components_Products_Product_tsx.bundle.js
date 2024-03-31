"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Products_Product_tsx"],{

/***/ "./src/api/shop/getDownloadOneLink.ts":
/*!********************************************!*\
  !*** ./src/api/shop/getDownloadOneLink.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./src/api/http.ts");


const getDownloadOneLink = function (id) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/orders/downloadOnelink/${id}`).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDownloadOneLink);

/***/ }),

/***/ "./src/components/Products/Product.tsx":
/*!*********************************************!*\
  !*** ./src/components/Products/Product.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/http */ "./src/api/http.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _api_shop_getDownloadOneLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/shop/getDownloadOneLink */ "./src/api/shop/getDownloadOneLink.ts");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _Admin_Blogs_toolBar_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Admin/Blogs/toolBar.scss */ "./src/components/Admin/Blogs/toolBar.scss");
/* harmony import */ var yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! yet-another-react-lightbox */ "./node_modules/yet-another-react-lightbox/dist/index.js");
/* harmony import */ var yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yet-another-react-lightbox/styles.css */ "./node_modules/yet-another-react-lightbox/dist/styles.css");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/CheckCircleIcon.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/CheckBadgeIcon.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/CogIcon.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/StarIcon.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../App */ "./src/App.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_14__);



















function Product() {
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_12__.useDark)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useNavigate)();
  if (!id) {
    navigate('/');
  }
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_3__.config.privateapilink}/addons/getone?id=${id}`, _api_http__WEBPACK_IMPORTED_MODULE_4__.fetcher);
  const [basket, setBasket] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [inBasket, setInBasket] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_0__["default"].useState(-1);
  const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const retrieveImages = function () {
    const imageElements = document.querySelectorAll('#lightbox img');
    const imageUrls = Array.from(imageElements).map(function (img) {
      return {
        type: 'image',
        src: img.getAttribute('src') || '',
        alt: img.getAttribute('alt') || ''
      };
    });
    setImages(imageUrls);
  };
  react__WEBPACK_IMPORTED_MODULE_0__["default"].useEffect(function () {
    if (data && (!error || !isLoading)) {
      retrieveImages();
    }
  }, [data, error, isLoading]);
  const handleLocalStorageChange = function () {
    const storedBasket = localStorage.getItem('basket');
    if (!storedBasket) {
      setInBasket(false);
      setBasket([]);
      return;
    }
    const basketArray = JSON.parse(storedBasket);
    setInBasket(basketArray.some(function (basketelement) {
      return basketelement.longId.toString() === id;
    }));
    setBasket(basketArray);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    handleLocalStorageChange();
    window.addEventListener('basket', handleLocalStorageChange);
    return function () {
      window.removeEventListener('basket', handleLocalStorageChange);
    };
  }, []);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  }
  if (data.status === 'error') {
    if (data.message === 'No product found') {
      react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error('The referenced product is currently non-existent.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark ? 'dark' : 'light'
      });
      return navigate('/');
    }
  }
  const addon = data.data;
  const downloadProduct = function () {
    setLoading(true);
    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.info('Please wait during the generation of the file...', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: dark ? 'dark' : 'light'
    });
    if (addon.id != null) {
      (0,_api_shop_getDownloadOneLink__WEBPACK_IMPORTED_MODULE_7__["default"])(addon.id).then(function (data) {
        fetch(`${_config_config__WEBPACK_IMPORTED_MODULE_3__.config.privateapilink}${data.data.data}?product=${addon.id}`, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].get('access_token')}`
          }
        }).then(function (response) {
          return response.blob();
        }).then(function (blob) {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `Bagou450-${addon.name}.zip`);
          document.body.appendChild(link);
          link.addEventListener('load', function () {
            URL.revokeObjectURL(url);
          });
          link.click();
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success('Your file is now downloaded!', {
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
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error('An unexcepted error happend. Please contact one of our support team.', {
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
    setLoading(false);
  };
  const addBasket = function () {
    const elements = localStorage.getItem('basket');
    if (elements) {
      const basketArray = JSON.parse(elements);
      setBasket(basketArray);
    } else {
      setBasket([]);
    }
    const newItem = {
      id: addon.id,
      name: addon.name,
      price: addon.price,
      tag: addon.tag,
      icon: `${_config_config__WEBPACK_IMPORTED_MODULE_3__.config.iconlink}${addon.icon}`,
      longId: id
    };
    if (!basket || !basket.length) {
      localStorage.setItem('basket', JSON.stringify([newItem]));
      window.dispatchEvent(new Event('basket'));
      return;
    }
    if (basket.some(function (basketelement) {
      return basketelement.id === addon.id;
    })) {
      return;
    }
    basket.push(newItem);
    const updatedBasket = JSON.stringify(basket);
    localStorage.setItem('basket', updatedBasket);
    window.dispatchEvent(new Event('basket'));
  };
  const findParentWithId = function (node, id) {
    if (!node) {
      return null;
    }
    if (node.attribs && node.attribs.id === id) {
      return node;
    }
    return findParentWithId(node.parent, id);
  };
  const transformImg = function (node) {
    const lightboxParent = findParentWithId(node.parent, 'lightbox');
    if (node.name === 'img' && lightboxParent && lightboxParent.name === 'div') {
      const {
        alt
      } = node.attribs;
      if (alt) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('img', {
          ...node.attribs,
          onClick: function () {
            return setIndex(parseInt(alt));
          }
        });
      }
    }
  };
  document.title = 'Bagou450 - ' + addon.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    className: dark ? 'bg-bg450-lessdark' : 'bg-white'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_helmet__WEBPACK_IMPORTED_MODULE_13__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "description",
    content: addon.tag
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "twitter:description",
    content: addon.tag
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "twitter:title",
    content: 'Bagou450 addon - Pterodactyl ' + addon.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    property: "og:description",
    content: addon.tag
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "twitter:title",
    content: 'Bagou450 addon - Pterodactyl ' + addon.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("main", {
    className: "mx-auto px-4 pb-4 pt-14 sm:px-6 sm:pb-6 sm:pt-16 lg:max-w-7xl lg:px-8"
  }, dark && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2d67d3] to-[#224fa3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
    style: {
      clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "lg:col-span-4 lg:row-end-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: `${_config_config__WEBPACK_IMPORTED_MODULE_3__.config.iconlink}${addon.icon}`,
    alt: addon.name,
    height: '500px',
    width: '500px',
    className: "object-cover object-center",
    onError: function (e) {
      e.target.src = 'https://i0.wp.com/nigoun.fr/wp-content/uploads/2022/04/placeholder.png?ssl=1';
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex flex-col-reverse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-2xl font-bold tracking-tight sm:text-3xl`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, addon.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    id: "information-heading",
    className: "sr-only"
  }, "Pterodactyl addon product information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "mt-2 text-sm text-gray-500"
  }, "Version ", addon.version, `${addon.version}`.length === 1 && '.0'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "mt-2 text-sm text-gray-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dl", {
    className: "mx-auto grid grid-cols-1 gap-px lg:grid-cols-2 gap-x-2 gap-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-inputdark' : 'bg-white'} overflow-hidden rounded-lg px-4 py-5 sm:p-6 shadow-lg`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dt", {
    className: "truncate text-sm font-medium text-gray-500 flex gap-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: 'h-6 w-6  text-indigo-700 '
  }), " Compatible"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dd", {
    className: "mt-1 text-3xl font-semibold tracking-tight text-indigo-700"
  }, "1.X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-inputdark' : 'bg-white'} overflow-hidden rounded-lg px-4 py-5 sm:p-6 shadow-lg`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dt", {
    className: "truncate text-sm font-medium text-gray-500 flex gap-x-2"
  }, addon.isWings ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: 'h-6 w-6  text-yellow-700'
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: 'h-6 w-6  text-green-700'
  }), "Wings Modification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dd", {
    className: `mt-1 text-xl font-semibold tracking-tight ${addon.isWings ? 'text-yellow-700' : 'text-green-700'}`
  }, !addon.isWings ? 'No wings modification required' : 'You need to edit wings!')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-inputdark' : 'bg-white'} lg:col-span-2 overflow-hidden rounded-lg px-4 py-5 sm:p-6 shadow-lg`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dt", {
    className: "truncate text-sm font-medium text-gray-500 flex gap-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: `h-6 w-6 ${addon.autoinstaller ? 'text-green-500' : 'text-red-500'}`
  }), "Auto Installer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dd", {
    className: `mt-1 text-3xl font-semibold tracking-tight text-gray-900  ${addon.autoinstaller ? 'text-green-500' : 'text-red-500'}`
  }, addon.autoinstaller ? 'Available' : 'N/A'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: "sr-only"
  }, "Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex items-center"
  }, [0, 1, 2, 3, 4].map(function (_, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: 'text-yellow-400 h-5 w-5 flex-shrink-0',
      "aria-hidden": "true",
      key: key
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "mt-6 text-gray-500"
  }, addon.tag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    onClick: function () {
      if (!inBasket && !data.owned && addon.price !== 0) {
        addBasket();
      }
      if (data.owned || addon.price === 0) {
        downloadProduct();
      }
    },
    className: "flex w-full items-center justify-center rounded-md border border-transparent bg-bg450-logo px-8 py-3 text-base font-medium text-white hover:bg-bg450-logohover focus:outline-none focus:ring-2 focus:ring-bg450-logo focus:ring-offset-2 focus:ring-offset-gray-50"
  }, inBasket ? 'Already in basket' : data.owned ? 'Download' : addon.price === 0 ? 'Download' : `Pay ${addon.price}€`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
    href: 'https://demo.bagou450.com',
    target: '_blaknk',
    rel: 'referrer',
    className: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
  }, "Demo"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "absolute inset-0 flex items-center",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-full border-t border-gray-300"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: `${dark ? 'bg-bg450-lessdark text-slate-300' : 'bg-white text-base '} px-3 font-semibold leading-6 text-gray-900`
  }, "Description"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    className: "my-4 ql w-full h-full overflow-y-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: dark ? 'dark-content' : 'light-content'
  }, (0,react_html_parser__WEBPACK_IMPORTED_MODULE_8__["default"])((0,dompurify__WEBPACK_IMPORTED_MODULE_14__.sanitize)(addon.description.replaceAll('rel="noopener noreferrer" target="_blank"', '')), {
    transform: transformImg
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_21__["default"], {
    index: index,
    slides: images,
    open: index >= 0,
    close: function () {
      return setIndex(-1);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2d67d3] to-[#224fa3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",
    style: {
      clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
    }
  })));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/yet-another-react-lightbox/dist/styles.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/yet-another-react-lightbox/dist/styles.css ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.yarl__fullsize{height:100%;width:100%}.yarl__relative{position:relative}.yarl__portal{bottom:0;left:0;opacity:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(--yarl__fade_animation_duration,.25s) var(--yarl__fade_animation_timing_function,ease);z-index:var(--yarl__portal_zindex,9999)}.yarl__portal_open{opacity:1}.yarl__container{background-color:var(--yarl__container_background_color,var(--yarl__color_backdrop,#000));bottom:0;left:0;outline:0;overflow:hidden;overscroll-behavior:var(--yarl__controller_overscroll-behavior,contain);position:absolute;right:0;top:0;touch-action:var(--yarl__controller_touch_action,none);-webkit-user-select:none;user-select:none}.yarl__carousel{align-content:center;align-items:stretch;display:flex;flex:0 0 auto;height:100%;justify-content:center;opacity:var(--yarl__pull_down_opacity,1);transform:translate(var(--yarl__swipe_offset,0),var(--yarl__pull_down_offset,0));width:calc(100% + (var(--yarl__carousel_slides_count) - 1)*(100% + var(--yarl__carousel_spacing_px, 0)*1px + var(--yarl__carousel_spacing_percent, 0)*1%))}.yarl__carousel_with_slides{column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%)}.yarl__flex_center{align-content:center;align-items:center;display:flex;justify-content:center}.yarl__slide{flex:1;overflow:hidden;padding:calc(var(--yarl__carousel_padding_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_padding_percent, 0)*1%);position:relative}[dir=rtl] .yarl__slide{--yarl__direction:-1}.yarl__slide_image{-webkit-touch-callout:none;max-height:100%;max-width:100%;object-fit:contain;touch-action:var(--yarl__controller_touch_action,none);user-select:none;-webkit-user-select:none}@media screen and (min-width:800px){.yarl__slide_image{-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);-webkit-transform-style:preserve-3d}}.yarl__slide_image_cover{height:100%;object-fit:cover;width:100%}.yarl__slide_image_loading{opacity:0}.yarl__slide_placeholder{left:50%;line-height:0;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%)}.yarl__slide_loading{animation:yarl__delayed_fadein 1s linear;color:var(--yarl__slide_icon_loading_color,var(--yarl__color_button,hsla(0,0%,100%,.8)))}.yarl__slide_loading line{animation:yarl__stroke_opacity 1s linear infinite}.yarl__slide_loading line:first-of-type{animation-delay:-1.875s}.yarl__slide_loading line:nth-of-type(2){animation-delay:-1.75s}.yarl__slide_loading line:nth-of-type(3){animation-delay:-1.625s}.yarl__slide_loading line:nth-of-type(4){animation-delay:-1.5s}.yarl__slide_loading line:nth-of-type(5){animation-delay:-1.375s}.yarl__slide_loading line:nth-of-type(6){animation-delay:-1.25s}.yarl__slide_loading line:nth-of-type(7){animation-delay:-1.125s}.yarl__slide_loading line:nth-of-type(8){animation-delay:-1s}.yarl__slide_error{color:var(--yarl__slide_icon_error_color,red);height:var(--yarl__slide_icon_error_size,48px);width:var(--yarl__slide_icon_error_size,48px)}@media (prefers-reduced-motion){.yarl__portal,.yarl__slide{transition:unset}.yarl__slide_loading,.yarl__slide_loading line{animation:unset}}.yarl__toolbar{bottom:auto;display:flex;justify-content:flex-end;left:auto;padding:var(--yarl__toolbar_padding,8px);position:absolute;right:0;top:0}[dir=rtl] .yarl__toolbar{bottom:auto;left:0;right:auto;top:0}.yarl__icon{height:var(--yarl__icon_size,32px);width:var(--yarl__icon_size,32px)}.yarl__button{-webkit-tap-highlight-color:transparent;appearance:none;background-color:var(--yarl__button_background_color,transparent);border:var(--yarl__button_border,0);color:var(--yarl__color_button,hsla(0,0%,100%,.8));cursor:pointer;filter:var(--yarl__button_filter,drop-shadow(2px 2px 2px rgba(0,0,0,.8)));line-height:0;margin:var(--yarl__button_margin,0);outline:none;padding:var(--yarl__button_padding,8px)}.yarl__button:focus{color:var(--yarl__color_button_active,#fff)}.yarl__button:focus:not(:focus-visible){color:var(--yarl__color_button,hsla(0,0%,100%,.8))}.yarl__button:focus-visible{color:var(--yarl__color_button_active,#fff)}@media (hover:hover){.yarl__button:focus-visible:hover,.yarl__button:focus:hover,.yarl__button:hover{color:var(--yarl__color_button_active,#fff)}}.yarl__button:disabled{color:var(--yarl__color_button_disabled,hsla(0,0%,100%,.4));cursor:default}.yarl__navigation_next,.yarl__navigation_prev{padding:var(--yarl__navigation_button_padding,24px 16px);position:absolute;top:50%;transform:translateY(-50%)}.yarl__navigation_prev{left:0}[dir=rtl] .yarl__navigation_prev{left:unset;right:0;transform:translateY(-50%) rotate(180deg)}.yarl__navigation_next{right:0}[dir=rtl] .yarl__navigation_next{left:0;right:unset;transform:translateY(-50%) rotate(180deg)}.yarl__no_scroll{height:100%;overflow:hidden;overscroll-behavior:none}@keyframes yarl__delayed_fadein{0%{opacity:0}80%{opacity:0}to{opacity:1}}@keyframes yarl__stroke_opacity{0%{stroke-opacity:1}to{stroke-opacity:.125}}`, "",{"version":3,"sources":["webpack://./node_modules/yet-another-react-lightbox/dist/styles.css"],"names":[],"mappings":"AAAA,gBAAgB,WAAW,CAAC,UAAU,CAAC,gBAAgB,iBAAiB,CAAC,cAAc,QAAQ,CAAC,MAAM,CAAC,SAAS,CAAC,eAAe,CAAC,cAAc,CAAC,OAAO,CAAC,KAAK,CAAC,6GAA6G,CAAC,uCAAuC,CAAC,mBAAmB,SAAS,CAAC,iBAAiB,yFAAyF,CAAC,QAAQ,CAAC,MAAM,CAAC,SAAS,CAAC,eAAe,CAAC,uEAAuE,CAAC,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,sDAAsD,CAAC,wBAAwB,CAAuB,gBAAgB,CAAC,gBAAgB,oBAAoB,CAAC,mBAAmB,CAAC,YAAY,CAAC,aAAa,CAAC,WAAW,CAAC,sBAAsB,CAAC,wCAAwC,CAA0F,gFAAgF,CAAC,0JAA0J,CAAC,4BAAyf,uOAAuO,CAAC,mBAAmB,oBAAoB,CAAC,kBAAkB,CAAC,YAAY,CAAC,sBAAsB,CAAC,aAAa,MAAM,CAAC,eAAe,CAAC,oOAAoO,CAAC,iBAAiB,CAAC,uBAAuB,oBAAoB,CAAC,mBAAmB,0BAA0B,CAAC,eAAe,CAAC,cAAc,CAAuB,kBAAkB,CAAC,sDAAsD,CAAuB,gBAAgB,CAAC,wBAAwB,CAAC,oCAAoC,mBAAmB,kCAAkC,CAAC,+BAA+B,CAAC,mCAAmC,CAAC,CAAC,yBAAyB,WAAW,CAAqB,gBAAgB,CAAC,UAAU,CAAC,2BAA2B,SAAS,CAAC,yBAAyB,QAAQ,CAAC,aAAa,CAAC,iBAAiB,CAAC,OAAO,CAAqD,2CAA2C,CAAC,qBAAsE,wCAAwC,CAAC,wFAAwF,CAAC,0BAAoF,iDAAiD,CAAC,wCAAwE,uBAAuB,CAAC,yCAAwE,sBAAsB,CAAC,yCAAyE,uBAAuB,CAAC,yCAAuE,qBAAqB,CAAC,yCAAyE,uBAAuB,CAAC,yCAAwE,sBAAsB,CAAC,yCAAyE,uBAAuB,CAAC,yCAAqE,mBAAmB,CAAC,mBAAmB,6CAA6C,CAAC,8CAA8C,CAAC,6CAA6C,CAAC,gCAAgC,2BAA2B,gBAAgB,CAAC,+CAAuE,eAAe,CAAC,CAAC,eAAe,WAAW,CAAC,YAAY,CAAC,wBAAwB,CAAC,SAAS,CAAC,wCAAwC,CAAC,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,yBAAyB,WAAW,CAAC,MAAM,CAAC,UAAU,CAAC,KAAK,CAAC,YAAY,kCAAkC,CAAC,iCAAiC,CAAC,cAAc,uCAAuC,CAA8C,eAAe,CAAC,iEAAiE,CAAC,mCAAmC,CAAC,kDAAkD,CAAC,cAAc,CAAmF,yEAAyE,CAAC,aAAa,CAAC,mCAAmC,CAAC,YAAY,CAAC,uCAAuC,CAAC,oBAAoB,2CAA2C,CAAC,wCAAwC,kDAAkD,CAAC,4BAA4B,2CAA2C,CAAC,qBAAqB,gFAAgF,2CAA2C,CAAC,CAAC,uBAAuB,2DAA2D,CAAC,cAAc,CAAC,8CAA8C,wDAAwD,CAAC,iBAAiB,CAAC,OAAO,CAAoC,0BAA0B,CAAC,uBAAuB,MAAM,CAAC,iCAAiC,UAAU,CAAC,OAAO,CAAmD,yCAAyC,CAAC,uBAAuB,OAAO,CAAC,iCAAiC,MAAM,CAAC,WAAW,CAAmD,yCAAyC,CAAC,iBAAiB,WAAW,CAAC,eAAe,CAAC,wBAAwB,CAAkF,gCAAgC,GAAG,SAAS,CAAC,IAAI,SAAS,CAAC,GAAG,SAAS,CAAC,CAAqF,gCAAgC,GAAG,gBAAgB,CAAC,GAAG,mBAAmB,CAAC","sourcesContent":[".yarl__fullsize{height:100%;width:100%}.yarl__relative{position:relative}.yarl__portal{bottom:0;left:0;opacity:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(--yarl__fade_animation_duration,.25s) var(--yarl__fade_animation_timing_function,ease);z-index:var(--yarl__portal_zindex,9999)}.yarl__portal_open{opacity:1}.yarl__container{background-color:var(--yarl__container_background_color,var(--yarl__color_backdrop,#000));bottom:0;left:0;outline:0;overflow:hidden;overscroll-behavior:var(--yarl__controller_overscroll-behavior,contain);position:absolute;right:0;top:0;touch-action:var(--yarl__controller_touch_action,none);-webkit-user-select:none;-moz-user-select:none;user-select:none}.yarl__carousel{align-content:center;align-items:stretch;display:flex;flex:0 0 auto;height:100%;justify-content:center;opacity:var(--yarl__pull_down_opacity,1);-webkit-transform:translate(var(--yarl__swipe_offset,0),var(--yarl__pull_down_offset,0));transform:translate(var(--yarl__swipe_offset,0),var(--yarl__pull_down_offset,0));width:calc(100% + (var(--yarl__carousel_slides_count) - 1)*(100% + var(--yarl__carousel_spacing_px, 0)*1px + var(--yarl__carousel_spacing_percent, 0)*1%))}.yarl__carousel_with_slides{-webkit-column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%);-moz-column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%);column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%)}.yarl__flex_center{align-content:center;align-items:center;display:flex;justify-content:center}.yarl__slide{flex:1;overflow:hidden;padding:calc(var(--yarl__carousel_padding_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_padding_percent, 0)*1%);position:relative}[dir=rtl] .yarl__slide{--yarl__direction:-1}.yarl__slide_image{-webkit-touch-callout:none;max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain;touch-action:var(--yarl__controller_touch_action,none);-moz-user-select:none;user-select:none;-webkit-user-select:none}@media screen and (min-width:800px){.yarl__slide_image{-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);-webkit-transform-style:preserve-3d}}.yarl__slide_image_cover{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.yarl__slide_image_loading{opacity:0}.yarl__slide_placeholder{left:50%;line-height:0;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.yarl__slide_loading{-webkit-animation:yarl__delayed_fadein 1s linear;animation:yarl__delayed_fadein 1s linear;color:var(--yarl__slide_icon_loading_color,var(--yarl__color_button,hsla(0,0%,100%,.8)))}.yarl__slide_loading line{-webkit-animation:yarl__stroke_opacity 1s linear infinite;animation:yarl__stroke_opacity 1s linear infinite}.yarl__slide_loading line:first-of-type{-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.yarl__slide_loading line:nth-of-type(2){-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.yarl__slide_loading line:nth-of-type(3){-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.yarl__slide_loading line:nth-of-type(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.yarl__slide_loading line:nth-of-type(5){-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.yarl__slide_loading line:nth-of-type(6){-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.yarl__slide_loading line:nth-of-type(7){-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.yarl__slide_loading line:nth-of-type(8){-webkit-animation-delay:-1s;animation-delay:-1s}.yarl__slide_error{color:var(--yarl__slide_icon_error_color,red);height:var(--yarl__slide_icon_error_size,48px);width:var(--yarl__slide_icon_error_size,48px)}@media (prefers-reduced-motion){.yarl__portal,.yarl__slide{transition:unset}.yarl__slide_loading,.yarl__slide_loading line{-webkit-animation:unset;animation:unset}}.yarl__toolbar{bottom:auto;display:flex;justify-content:flex-end;left:auto;padding:var(--yarl__toolbar_padding,8px);position:absolute;right:0;top:0}[dir=rtl] .yarl__toolbar{bottom:auto;left:0;right:auto;top:0}.yarl__icon{height:var(--yarl__icon_size,32px);width:var(--yarl__icon_size,32px)}.yarl__button{-webkit-tap-highlight-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--yarl__button_background_color,transparent);border:var(--yarl__button_border,0);color:var(--yarl__color_button,hsla(0,0%,100%,.8));cursor:pointer;-webkit-filter:var(--yarl__button_filter,drop-shadow(2px 2px 2px rgba(0,0,0,.8)));filter:var(--yarl__button_filter,drop-shadow(2px 2px 2px rgba(0,0,0,.8)));line-height:0;margin:var(--yarl__button_margin,0);outline:none;padding:var(--yarl__button_padding,8px)}.yarl__button:focus{color:var(--yarl__color_button_active,#fff)}.yarl__button:focus:not(:focus-visible){color:var(--yarl__color_button,hsla(0,0%,100%,.8))}.yarl__button:focus-visible{color:var(--yarl__color_button_active,#fff)}@media (hover:hover){.yarl__button:focus-visible:hover,.yarl__button:focus:hover,.yarl__button:hover{color:var(--yarl__color_button_active,#fff)}}.yarl__button:disabled{color:var(--yarl__color_button_disabled,hsla(0,0%,100%,.4));cursor:default}.yarl__navigation_next,.yarl__navigation_prev{padding:var(--yarl__navigation_button_padding,24px 16px);position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.yarl__navigation_prev{left:0}[dir=rtl] .yarl__navigation_prev{left:unset;right:0;-webkit-transform:translateY(-50%) rotate(180deg);transform:translateY(-50%) rotate(180deg)}.yarl__navigation_next{right:0}[dir=rtl] .yarl__navigation_next{left:0;right:unset;-webkit-transform:translateY(-50%) rotate(180deg);transform:translateY(-50%) rotate(180deg)}.yarl__no_scroll{height:100%;overflow:hidden;overscroll-behavior:none}@-webkit-keyframes yarl__delayed_fadein{0%{opacity:0}80%{opacity:0}to{opacity:1}}@keyframes yarl__delayed_fadein{0%{opacity:0}80%{opacity:0}to{opacity:1}}@-webkit-keyframes yarl__stroke_opacity{0%{stroke-opacity:1}to{stroke-opacity:.125}}@keyframes yarl__stroke_opacity{0%{stroke-opacity:1}to{stroke-opacity:.125}}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/yet-another-react-lightbox/dist/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/yet-another-react-lightbox/dist/styles.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/yet-another-react-lightbox/dist/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function ExclamationTriangleIcon({
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
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ExclamationTriangleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/CheckBadgeIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/CheckBadgeIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function CheckBadgeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckBadgeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/CheckCircleIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/CheckCircleIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function CheckCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/StarIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/StarIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function StarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(StarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/yet-another-react-lightbox/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/yet-another-react-lightbox/dist/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lightbox)
/* harmony export */ });
/* unused harmony exports Carousel, CarouselModule, CloseIcon, Controller, ControllerContext, ControllerModule, ErrorIcon, EventsContext, EventsProvider, IconButton, ImageSlide, Lightbox, LightboxDefaultProps, LightboxDispatchContext, LightboxPropsContext, LightboxPropsProvider, LightboxStateContext, LightboxStateProvider, LoadingIcon, Navigation, NavigationButton, NavigationModule, NextIcon, NoScroll, NoScrollModule, Portal, PortalModule, PreviousIcon, Root, RootModule, SwipeState, TimeoutsContext, TimeoutsProvider, Toolbar, ToolbarModule, addToolbarButton, cleanup, clsx, composePrefix, computeSlideRect, createIcon, createIconDisabled, createModule, createNode, cssClass, cssVar, devicePixelRatio, getSlide, getSlideIfPresent, getSlideIndex, hasSlides, hasWindow, isImageFitCover, isImageSlide, label, makeComposePrefix, makeUseContext, parseLengthPercentage, round, setRef, stopNavigationEventsPropagation, useAnimation, useContainerRect, useController, useDelay, useEventCallback, useEvents, useForkRef, useLayoutEffect, useLightboxDispatch, useLightboxProps, useLightboxState, useLoseFocus, useMotionPreference, usePointerEvents, usePointerSwipe, usePreventSwipeNavigation, useRTL, useSensors, useThrottle, useTimeouts, useWheelSwipe, withPlugins */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/yet-another-react-lightbox/dist/types.js");
'use client';





const LightboxDefaultProps = {
    open: false,
    close: () => { },
    index: 0,
    slides: [],
    render: {},
    plugins: [],
    toolbar: { buttons: [_types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_CLOSE] },
    labels: {},
    animation: {
        fade: 250,
        swipe: 500,
        easing: {
            fade: "ease",
            swipe: "ease-out",
            navigation: "ease-in-out",
        },
    },
    carousel: {
        finite: false,
        preload: 2,
        padding: "16px",
        spacing: "30%",
        imageFit: _types_js__WEBPACK_IMPORTED_MODULE_1__.IMAGE_FIT_CONTAIN,
        imageProps: {},
    },
    controller: {
        ref: null,
        focus: true,
        aria: false,
        touchAction: "none",
        closeOnPullDown: false,
        closeOnBackdropClick: false,
    },
    portal: {},
    on: {},
    styles: {},
    className: "",
};

function createModule(name, component) {
    return { name, component };
}
function createNode(module, children) {
    return { module, children };
}
function traverseNode(node, target, apply) {
    if (node.module.name === target) {
        return apply(node);
    }
    if (node.children) {
        return [
            createNode(node.module, node.children.flatMap((n) => { var _a; return (_a = traverseNode(n, target, apply)) !== null && _a !== void 0 ? _a : []; })),
        ];
    }
    return [node];
}
function traverse(nodes, target, apply) {
    return nodes.flatMap((node) => { var _a; return (_a = traverseNode(node, target, apply)) !== null && _a !== void 0 ? _a : []; });
}
function withPlugins(root, plugins = [], augmentations = []) {
    let config = root;
    const contains = (target) => {
        const nodes = [...config];
        while (nodes.length > 0) {
            const node = nodes.pop();
            if ((node === null || node === void 0 ? void 0 : node.module.name) === target)
                return true;
            if (node === null || node === void 0 ? void 0 : node.children)
                nodes.push(...node.children);
        }
        return false;
    };
    const addParent = (target, module) => {
        if (target === "") {
            config = [createNode(module, config)];
            return;
        }
        config = traverse(config, target, (node) => [createNode(module, [node])]);
    };
    const append = (target, module) => {
        config = traverse(config, target, (node) => [createNode(node.module, [createNode(module, node.children)])]);
    };
    const addChild = (target, module, precede) => {
        config = traverse(config, target, (node) => {
            var _a;
            return [
                createNode(node.module, [
                    ...(precede ? [createNode(module)] : []),
                    ...((_a = node.children) !== null && _a !== void 0 ? _a : []),
                    ...(!precede ? [createNode(module)] : []),
                ]),
            ];
        });
    };
    const addSibling = (target, module, precede) => {
        config = traverse(config, target, (node) => [
            ...(precede ? [createNode(module)] : []),
            node,
            ...(!precede ? [createNode(module)] : []),
        ]);
    };
    const addModule = (module) => {
        append(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_CONTROLLER, module);
    };
    const replace = (target, module) => {
        config = traverse(config, target, (node) => [createNode(module, node.children)]);
    };
    const remove = (target) => {
        config = traverse(config, target, (node) => node.children);
    };
    const augment = (augmentation) => {
        augmentations.push(augmentation);
    };
    plugins.forEach((plugin) => {
        plugin({
            contains,
            addParent,
            append,
            addChild,
            addSibling,
            addModule,
            replace,
            remove,
            augment,
        });
    });
    return {
        config,
        augmentation: (props) => augmentations.reduce((acc, augmentation) => augmentation(acc), props),
    };
}

const clsx = (...classes) => [...classes].filter((cls) => Boolean(cls)).join(" ");
const cssPrefix$3 = "yarl__";
const cssClass = (name) => `${cssPrefix$3}${name}`;
const cssVar = (name) => `--${cssPrefix$3}${name}`;
const composePrefix = (base, prefix) => `${base}${prefix ? `_${prefix}` : ""}`;
const makeComposePrefix = (base) => (prefix) => composePrefix(base, prefix);
const label = (labels, lbl) => (labels && labels[lbl] ? labels[lbl] : lbl);
const cleanup = (...cleaners) => () => {
    cleaners.forEach((cleaner) => {
        cleaner();
    });
};
const makeUseContext = (name, contextName, context) => () => {
    const ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(context);
    if (!ctx) {
        throw new Error(`${name} must be used within a ${contextName}.Provider`);
    }
    return ctx;
};
const hasWindow = () => typeof window !== "undefined";
function round(value, decimals = 0) {
    const factor = 10 ** decimals;
    return Math.round((value + Number.EPSILON) * factor) / factor;
}
const isImageSlide = (slide) => slide.type === undefined || slide.type === "image";
const isImageFitCover = (image, imageFit) => image.imageFit === _types_js__WEBPACK_IMPORTED_MODULE_1__.IMAGE_FIT_COVER || (image.imageFit !== _types_js__WEBPACK_IMPORTED_MODULE_1__.IMAGE_FIT_CONTAIN && imageFit === _types_js__WEBPACK_IMPORTED_MODULE_1__.IMAGE_FIT_COVER);
function parseLengthPercentage(input) {
    if (typeof input === "number") {
        return { pixel: input };
    }
    if (typeof input === "string") {
        const value = parseInt(input, 10);
        return input.endsWith("%") ? { percent: value } : { pixel: value };
    }
    return { pixel: 0 };
}
function computeSlideRect(containerRect, padding) {
    const paddingValue = parseLengthPercentage(padding);
    const paddingPixels = paddingValue.percent !== undefined ? (containerRect.width / 100) * paddingValue.percent : paddingValue.pixel;
    return {
        width: Math.max(containerRect.width - 2 * paddingPixels, 0),
        height: Math.max(containerRect.height - 2 * paddingPixels, 0),
    };
}
const devicePixelRatio = () => (hasWindow() ? window === null || window === void 0 ? void 0 : window.devicePixelRatio : undefined) || 1;
const getSlideIndex = (index, slidesCount) => slidesCount > 0 ? ((index % slidesCount) + slidesCount) % slidesCount : 0;
const hasSlides = (slides) => slides.length > 0;
const getSlide = (slides, index) => slides[getSlideIndex(index, slides.length)];
const getSlideIfPresent = (slides, index) => hasSlides(slides) ? getSlide(slides, index) : undefined;
function addToolbarButton(toolbar, key, button) {
    if (!button)
        return toolbar;
    const { buttons, ...restToolbar } = toolbar;
    const index = buttons.findIndex((item) => item === key);
    const buttonWithKey = react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(button) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(button, { key }, null) : button;
    if (index >= 0) {
        const result = [...buttons];
        result.splice(index, 1, buttonWithKey);
        return { buttons: result, ...restToolbar };
    }
    return { buttons: [buttonWithKey, ...buttons], ...restToolbar };
}
function stopNavigationEventsPropagation() {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    return { onPointerDown: stopPropagation, onKeyDown: stopPropagation, onWheel: stopPropagation };
}

const EventsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useEvents = makeUseContext("useEvents", "EventsContext", EventsContext);
function EventsProvider({ children }) {
    const [subscriptions] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        Object.keys(subscriptions).forEach((topic) => delete subscriptions[topic]);
    }, [subscriptions]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const unsubscribe = (topic, callback) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.splice(0, subscriptions[topic].length, ...subscriptions[topic].filter((cb) => cb !== callback));
        };
        const subscribe = (topic, callback) => {
            if (!subscriptions[topic]) {
                subscriptions[topic] = [];
            }
            subscriptions[topic].push(callback);
            return () => unsubscribe(topic, callback);
        };
        const publish = (...[topic, event]) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(event));
        };
        return { publish, subscribe, unsubscribe };
    }, [subscriptions]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventsContext.Provider, { value: context }, children);
}

const LightboxPropsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxProps = makeUseContext("useLightboxProps", "LightboxPropsContext", LightboxPropsContext);
function LightboxPropsProvider({ children, ...props }) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxPropsContext.Provider, { value: props }, children);
}

const LightboxStateContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxState = makeUseContext("useLightboxState", "LightboxStateContext", LightboxStateContext);
const LightboxDispatchContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxDispatch = makeUseContext("useLightboxDispatch", "LightboxDispatchContext", LightboxDispatchContext);
function reducer(state, action) {
    switch (action.type) {
        case "swipe": {
            const { slides } = state;
            const increment = (action === null || action === void 0 ? void 0 : action.increment) || 0;
            const globalIndex = state.globalIndex + increment;
            const currentIndex = getSlideIndex(globalIndex, slides.length);
            const currentSlide = getSlideIfPresent(slides, currentIndex);
            const animation = increment || action.duration
                ? {
                    increment,
                    duration: action.duration,
                    easing: action.easing,
                }
                : undefined;
            return { slides, currentIndex, globalIndex, currentSlide, animation };
        }
        case "update":
            return {
                slides: action.slides,
                currentIndex: action.index,
                globalIndex: action.index,
                currentSlide: getSlideIfPresent(action.slides, action.index),
            };
        default:
            throw new Error(_types_js__WEBPACK_IMPORTED_MODULE_1__.UNKNOWN_ACTION_TYPE);
    }
}
function LightboxStateProvider({ slides, index, children }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(reducer, {
        slides,
        currentIndex: index,
        globalIndex: index,
        currentSlide: getSlideIfPresent(slides, index),
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        dispatch({ type: "update", slides, index });
    }, [slides, index]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ ...state, state, dispatch }), [state, dispatch]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxDispatchContext.Provider, { value: dispatch },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxStateContext.Provider, { value: context }, children)));
}

const TimeoutsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useTimeouts = makeUseContext("useTimeouts", "TimeoutsContext", TimeoutsContext);
function TimeoutsProvider({ children }) {
    const [timeouts] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        timeouts.forEach((tid) => window.clearTimeout(tid));
        timeouts.splice(0, timeouts.length);
    }, [timeouts]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const removeTimeout = (id) => {
            timeouts.splice(0, timeouts.length, ...timeouts.filter((tid) => tid !== id));
        };
        const setTimeout = (fn, delay) => {
            const id = window.setTimeout(() => {
                removeTimeout(id);
                fn();
            }, delay);
            timeouts.push(id);
            return id;
        };
        const clearTimeout = (id) => {
            if (id !== undefined) {
                removeTimeout(id);
                window.clearTimeout(id);
            }
        };
        return { setTimeout, clearTimeout };
    }, [timeouts]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TimeoutsContext.Provider, { value: context }, children);
}

const IconButton = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function IconButton({ label: label$1, className, icon: Icon, renderIcon, onClick, style, ...rest }, ref) {
    const { styles, labels } = useLightboxProps();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { ref: ref, type: "button", "aria-label": label(labels, label$1), className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.ELEMENT_BUTTON), className), onClick: onClick, style: { ...style, ...styles.button }, ...rest }, renderIcon ? renderIcon() : react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, { className: cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.ELEMENT_ICON), style: styles.icon })));
});

function svgIcon(name, children) {
    const icon = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...props }, children));
    icon.displayName = name;
    return icon;
}
function createIcon(name, glyph) {
    return svgIcon(name, react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        glyph));
}
function createIconDisabled(name, glyph) {
    return svgIcon(name, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", { id: "strike" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "white" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0L24 24", stroke: "black", strokeWidth: 4 }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0.70707 2.121320L21.878680 23.292883", stroke: "currentColor", strokeWidth: 2 }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "currentColor", mask: "url(#strike)" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            glyph)));
}
const CloseIcon = createIcon("Close", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
const PreviousIcon = createIcon("Previous", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }));
const NextIcon = createIcon("Next", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }));
const LoadingIcon = createIcon("Loading", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Array.from({ length: 8 }).map((_, index, array) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { key: index, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: (1 / array.length) * (index + 1), transform: `rotate(${(360 / array.length) * index}, 12, 12)` })))));
const ErrorIcon = createIcon("Error", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" }));

const useLayoutEffect = hasWindow() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useMotionPreference() {
    const [reduceMotion, setReduceMotion] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a, _b;
        const mediaQuery = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)");
        setReduceMotion(mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches);
        const listener = (event) => setReduceMotion(event.matches);
        (_b = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener) === null || _b === void 0 ? void 0 : _b.call(mediaQuery, "change", listener);
        return () => { var _a; return (_a = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(mediaQuery, "change", listener); };
    }, []);
    return reduceMotion;
}

function currentTransformation(node) {
    let x = 0;
    let y = 0;
    let z = 0;
    const matrix = window.getComputedStyle(node).transform;
    const matcher = matrix.match(/matrix.*\((.+)\)/);
    if (matcher) {
        const values = matcher[1].split(",").map((str) => Number.parseInt(str, 10));
        if (values.length === 6) {
            x = values[4];
            y = values[5];
        }
        else if (values.length === 16) {
            x = values[12];
            y = values[13];
            z = values[14];
        }
    }
    return { x, y, z };
}
function useAnimation(nodeRef, computeAnimation) {
    const snapshot = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const animation = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const reduceMotion = useMotionPreference();
    useLayoutEffect(() => {
        var _a, _b, _c;
        if (nodeRef.current && snapshot.current !== undefined && !reduceMotion) {
            const { keyframes, duration, easing, onfinish } = computeAnimation(snapshot.current, nodeRef.current.getBoundingClientRect(), currentTransformation(nodeRef.current)) || {};
            if (keyframes && duration) {
                (_a = animation.current) === null || _a === void 0 ? void 0 : _a.cancel();
                animation.current = undefined;
                try {
                    animation.current = (_c = (_b = nodeRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, keyframes, { duration, easing });
                }
                catch (err) {
                    console.error(err);
                }
                if (animation.current) {
                    animation.current.onfinish = () => {
                        animation.current = undefined;
                        onfinish === null || onfinish === void 0 ? void 0 : onfinish();
                    };
                }
            }
        }
        snapshot.current = undefined;
    });
    return {
        prepareAnimation: (currentSnapshot) => {
            snapshot.current = currentSnapshot;
        },
        isAnimationPlaying: () => { var _a; return ((_a = animation.current) === null || _a === void 0 ? void 0 : _a.playState) === "running"; },
    };
}

function useContainerRect() {
    const [containerRect, setContainerRect] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const observerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const setContainerRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        containerRef.current = node;
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = undefined;
        }
        const updateContainerRect = () => {
            if (node) {
                const styles = window.getComputedStyle(node);
                const parse = (value) => parseFloat(value) || 0;
                setContainerRect({
                    width: Math.round(node.clientWidth - parse(styles.paddingLeft) - parse(styles.paddingRight)),
                    height: Math.round(node.clientHeight - parse(styles.paddingTop) - parse(styles.paddingBottom)),
                });
            }
            else {
                setContainerRect(undefined);
            }
        };
        updateContainerRect();
        if (node && typeof ResizeObserver !== "undefined") {
            observerRef.current = new ResizeObserver(updateContainerRect);
            observerRef.current.observe(node);
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        setContainerRef,
        containerRef,
        containerRect,
    }), [setContainerRef, containerRef, containerRect]);
}

function useDelay() {
    const timeoutId = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const { setTimeout, clearTimeout } = useTimeouts();
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((callback, delay) => {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(callback, delay > 0 ? delay : 0);
    }, [setTimeout, clearTimeout]);
}

function useEventCallback(fn) {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
    useLayoutEffect(() => {
        ref.current = fn;
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args); }, []);
}

function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
}
function useForkRef(refA, refB) {
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => refA == null && refB == null
        ? null
        : (refValue) => {
            setRef(refA, refValue);
            setRef(refB, refValue);
        }, [refA, refB]);
}

function useLoseFocus(focus, disabled = false) {
    const focused = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    useLayoutEffect(() => {
        if (disabled && focused.current) {
            focused.current = false;
            focus();
        }
    }, [disabled, focus]);
    const onFocus = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        focused.current = true;
    }, []);
    const onBlur = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        focused.current = false;
    }, []);
    return { onFocus, onBlur };
}

function useRTL() {
    const [isRTL, setIsRTL] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    useLayoutEffect(() => {
        setIsRTL(window.getComputedStyle(window.document.documentElement).direction === "rtl");
    }, []);
    return isRTL;
}

function useSensors() {
    const [subscribers] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const notifySubscribers = (type, event) => {
            var _a;
            (_a = subscribers[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => {
                if (!event.isPropagationStopped())
                    listener(event);
            });
        };
        return {
            registerSensors: {
                onPointerDown: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_DOWN, event),
                onPointerMove: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_MOVE, event),
                onPointerUp: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_UP, event),
                onPointerLeave: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_LEAVE, event),
                onPointerCancel: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_CANCEL, event),
                onKeyDown: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_KEY_DOWN, event),
                onKeyUp: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_KEY_UP, event),
                onWheel: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_WHEEL, event),
            },
            subscribeSensors: (type, callback) => {
                if (!subscribers[type]) {
                    subscribers[type] = [];
                }
                subscribers[type].unshift(callback);
                return () => {
                    const listeners = subscribers[type];
                    if (listeners) {
                        listeners.splice(0, listeners.length, ...listeners.filter((el) => el !== callback));
                    }
                };
            },
        };
    }, [subscribers]);
}

function useThrottle(callback, delay) {
    const lastCallbackTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const delayCallback = useDelay();
    const executeCallback = useEventCallback((...args) => {
        lastCallbackTime.current = Date.now();
        callback(args);
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => {
        delayCallback(() => {
            executeCallback(args);
        }, delay - (Date.now() - lastCallbackTime.current));
    }, [delay, executeCallback, delayCallback]);
}

const slidePrefix = makeComposePrefix("slide");
const slideImagePrefix = makeComposePrefix("slide_image");
function ImageSlide({ slide: image, offset, render, rect, imageFit, imageProps, onClick, onLoad, style, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState(_types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_LOADING);
    const { publish } = useEvents();
    const { setTimeout } = useTimeouts();
    const imageRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (offset === 0) {
            publish((0,_types_js__WEBPACK_IMPORTED_MODULE_1__.activeSlideStatus)(status));
        }
    }, [offset, status, publish]);
    const handleLoading = useEventCallback((img) => {
        ("decode" in img ? img.decode() : Promise.resolve())
            .catch(() => { })
            .then(() => {
            if (!img.parentNode) {
                return;
            }
            setStatus(_types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_COMPLETE);
            setTimeout(() => {
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(img);
            }, 0);
        });
    });
    const setImageRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((img) => {
        imageRef.current = img;
        if (img === null || img === void 0 ? void 0 : img.complete) {
            handleLoading(img);
        }
    }, [handleLoading]);
    const handleOnLoad = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        handleLoading(event.currentTarget);
    }, [handleLoading]);
    const onError = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        setStatus(_types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_ERROR);
    }, []);
    const cover = isImageFitCover(image, imageFit);
    const nonInfinite = (value, fallback) => (Number.isFinite(value) ? value : fallback);
    const maxWidth = nonInfinite(Math.max(...((_b = (_a = image.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) !== null && _b !== void 0 ? _b : []).concat(image.width ? [image.width] : [])), ((_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalWidth) || 0);
    const maxHeight = nonInfinite(Math.max(...((_e = (_d = image.srcSet) === null || _d === void 0 ? void 0 : _d.map((x) => x.height)) !== null && _e !== void 0 ? _e : []).concat(image.height ? [image.height] : [])), ((_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.naturalHeight) || 0);
    const defaultStyle = maxWidth && maxHeight
        ? {
            maxWidth: `min(${maxWidth}px, 100%)`,
            maxHeight: `min(${maxHeight}px, 100%)`,
        }
        : {
            maxWidth: "100%",
            maxHeight: "100%",
        };
    const srcSet = (_g = image.srcSet) === null || _g === void 0 ? void 0 : _g.sort((a, b) => a.width - b.width).map((item) => `${item.src} ${item.width}w`).join(", ");
    const estimateActualWidth = () => rect && !cover && image.width && image.height ? (rect.height / image.height) * image.width : Number.MAX_VALUE;
    const sizes = srcSet && rect && hasWindow() ? `${Math.round(Math.min(estimateActualWidth(), rect.width))}px` : undefined;
    const { style: imagePropsStyle, className: imagePropsClassName, ...restImageProps } = imageProps || {};
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { ref: setImageRef, onLoad: handleOnLoad, onError: onError, onClick: onClick, draggable: false, className: clsx(cssClass(slideImagePrefix()), cover && cssClass(slideImagePrefix("cover")), status !== _types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_COMPLETE && cssClass(slideImagePrefix("loading")), imagePropsClassName), style: { ...defaultStyle, ...style, ...imagePropsStyle }, ...restImageProps, alt: image.alt, sizes: sizes, srcSet: srcSet, src: image.src }),
        status !== _types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_COMPLETE && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_PLACEHOLDER)) },
            status === _types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_LOADING &&
                ((render === null || render === void 0 ? void 0 : render.iconLoading) ? (render.iconLoading()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingIcon, { className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.ELEMENT_ICON), cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_LOADING))) }))),
            status === _types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_ERROR &&
                ((render === null || render === void 0 ? void 0 : render.iconError) ? (render.iconError()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorIcon, { className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.ELEMENT_ICON), cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_1__.SLIDE_STATUS_ERROR))) })))))));
}

var SwipeState;
(function (SwipeState) {
    SwipeState[SwipeState["NONE"] = 0] = "NONE";
    SwipeState[SwipeState["SWIPE"] = 1] = "SWIPE";
    SwipeState[SwipeState["PULL_DOWN"] = 2] = "PULL_DOWN";
    SwipeState[SwipeState["ANIMATION"] = 3] = "ANIMATION";
})(SwipeState || (SwipeState = {}));

function usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (disabled)
            return () => { };
        return cleanup(subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_DOWN, onPointerDown), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_MOVE, onPointerMove), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_UP, onPointerUp), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_LEAVE, onPointerUp), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_POINTER_CANCEL, onPointerUp));
    }, [subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled]);
}

var Gesture;
(function (Gesture) {
    Gesture[Gesture["NONE"] = 0] = "NONE";
    Gesture[Gesture["SWIPE"] = 1] = "SWIPE";
    Gesture[Gesture["PULL_DOWN"] = 2] = "PULL_DOWN";
})(Gesture || (Gesture = {}));
const SWIPE_THRESHOLD = 30;
function usePointerSwipe(subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel, pullDownEnabled, onPullDownStart, onPullDownProgress, onPullDownFinish, onPullDownCancel) {
    const offset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pointers = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const activePointer = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const startTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const gesture = react__WEBPACK_IMPORTED_MODULE_0__.useRef(Gesture.NONE);
    const clearPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        if (activePointer.current === event.pointerId) {
            activePointer.current = undefined;
            gesture.current = Gesture.NONE;
        }
        const currentPointers = pointers.current;
        currentPointers.splice(0, currentPointers.length, ...currentPointers.filter((p) => p.pointerId !== event.pointerId));
    }, []);
    const addPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        clearPointer(event);
        event.persist();
        pointers.current.push(event);
    }, [clearPointer]);
    const onPointerDown = useEventCallback((event) => {
        addPointer(event);
    });
    const onPointerUp = useEventCallback((event) => {
        if (pointers.current.find((x) => x.pointerId === event.pointerId) &&
            activePointer.current === event.pointerId) {
            const duration = Date.now() - startTime.current;
            const currentOffset = offset.current;
            if (gesture.current === Gesture.SWIPE) {
                if (Math.abs(currentOffset) > 0.3 * containerWidth ||
                    (Math.abs(currentOffset) > 5 && duration < swipeAnimationDuration)) {
                    onSwipeFinish(currentOffset, duration);
                }
                else {
                    onSwipeCancel(currentOffset);
                }
            }
            else if (gesture.current === Gesture.PULL_DOWN) {
                if (currentOffset > 2 * SWIPE_THRESHOLD) {
                    onPullDownFinish(currentOffset, duration);
                }
                else {
                    onPullDownCancel(currentOffset);
                }
            }
            offset.current = 0;
            gesture.current = Gesture.NONE;
        }
        clearPointer(event);
    });
    const onPointerMove = useEventCallback((event) => {
        const pointer = pointers.current.find((p) => p.pointerId === event.pointerId);
        if (pointer) {
            const isCurrentPointer = activePointer.current === event.pointerId;
            if (event.buttons === 0) {
                if (isCurrentPointer && offset.current !== 0) {
                    onPointerUp(event);
                }
                else {
                    clearPointer(pointer);
                }
                return;
            }
            const deltaX = event.clientX - pointer.clientX;
            const deltaY = event.clientY - pointer.clientY;
            if (activePointer.current === undefined) {
                const startGesture = (newGesture) => {
                    addPointer(event);
                    activePointer.current = event.pointerId;
                    startTime.current = Date.now();
                    gesture.current = newGesture;
                };
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD && isSwipeValid(deltaX)) {
                    startGesture(Gesture.SWIPE);
                    onSwipeStart();
                }
                else if (pullDownEnabled && Math.abs(deltaY) > Math.abs(deltaX) && deltaY > SWIPE_THRESHOLD) {
                    startGesture(Gesture.PULL_DOWN);
                    onPullDownStart();
                }
            }
            else if (isCurrentPointer) {
                if (gesture.current === Gesture.SWIPE) {
                    offset.current = deltaX;
                    onSwipeProgress(deltaX);
                }
                else if (gesture.current === Gesture.PULL_DOWN) {
                    offset.current = deltaY;
                    onPullDownProgress(deltaY);
                }
            }
        }
    });
    usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp);
}

const WHEEL = "wheel";
function preventDefault(event) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.ctrlKey) {
        event.preventDefault();
    }
}
function usePreventSwipeNavigation() {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        var _a;
        if (node) {
            node.addEventListener(WHEEL, preventDefault, { passive: false });
        }
        else {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(WHEEL, preventDefault);
        }
        ref.current = node;
    }, []);
}

function useWheelSwipe(swipeState, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
    const offset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const intent = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const intentCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const resetCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const wheelResidualMomentum = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const startTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const { setTimeout, clearTimeout } = useTimeouts();
    const cancelSwipeIntentCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (intentCleanup.current) {
            clearTimeout(intentCleanup.current);
            intentCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const cancelSwipeResetCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (resetCleanup.current) {
            clearTimeout(resetCleanup.current);
            resetCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const handleCleanup = useEventCallback(() => {
        if (swipeState !== SwipeState.SWIPE) {
            offset.current = 0;
            startTime.current = 0;
            cancelSwipeIntentCleanup();
            cancelSwipeResetCleanup();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(handleCleanup, [swipeState, handleCleanup]);
    const handleCancelSwipe = useEventCallback((currentSwipeOffset) => {
        resetCleanup.current = undefined;
        if (offset.current === currentSwipeOffset) {
            onSwipeCancel(offset.current);
        }
    });
    const onWheel = useEventCallback((event) => {
        if (event.ctrlKey) {
            return;
        }
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            return;
        }
        if (swipeState === SwipeState.NONE) {
            if (Math.abs(event.deltaX) <= 1.2 * Math.abs(wheelResidualMomentum.current)) {
                wheelResidualMomentum.current = event.deltaX;
                return;
            }
            if (!isSwipeValid(-event.deltaX)) {
                return;
            }
            intent.current += event.deltaX;
            cancelSwipeIntentCleanup();
            if (Math.abs(intent.current) > 30) {
                intent.current = 0;
                wheelResidualMomentum.current = 0;
                startTime.current = Date.now();
                onSwipeStart();
            }
            else {
                const currentSwipeIntent = intent.current;
                intentCleanup.current = setTimeout(() => {
                    intentCleanup.current = undefined;
                    if (currentSwipeIntent === intent.current) {
                        intent.current = 0;
                    }
                }, swipeAnimationDuration);
            }
        }
        else if (swipeState === SwipeState.SWIPE) {
            let newSwipeOffset = offset.current - event.deltaX;
            newSwipeOffset = Math.min(Math.abs(newSwipeOffset), containerWidth) * Math.sign(newSwipeOffset);
            offset.current = newSwipeOffset;
            onSwipeProgress(newSwipeOffset);
            cancelSwipeResetCleanup();
            if (Math.abs(newSwipeOffset) > 0.2 * containerWidth) {
                wheelResidualMomentum.current = event.deltaX;
                onSwipeFinish(newSwipeOffset, Date.now() - startTime.current);
                return;
            }
            resetCleanup.current = setTimeout(() => handleCancelSwipe(newSwipeOffset), 2 * swipeAnimationDuration);
        }
        else {
            wheelResidualMomentum.current = event.deltaX;
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_WHEEL, onWheel), [subscribeSensors, onWheel]);
}

const cssContainerPrefix = makeComposePrefix("container");
const ControllerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useController = makeUseContext("useController", "ControllerContext", ControllerContext);
function Controller({ children, ...props }) {
    var _a;
    const { carousel, animation, controller, on, styles, render } = props;
    const [toolbarWidth, setToolbarWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const state = useLightboxState();
    const dispatch = useLightboxDispatch();
    const [swipeState, setSwipeState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(SwipeState.NONE);
    const swipeOffset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pullDownOffset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pullDownOpacity = react__WEBPACK_IMPORTED_MODULE_0__.useRef(1);
    const { registerSensors, subscribeSensors } = useSensors();
    const { subscribe, publish } = useEvents();
    const cleanupAnimationIncrement = useDelay();
    const cleanupSwipeOffset = useDelay();
    const cleanupPullDownOffset = useDelay();
    const { containerRef, setContainerRef, containerRect } = useContainerRect();
    const handleContainerRef = useForkRef(usePreventSwipeNavigation(), setContainerRef);
    const carouselRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const setCarouselRef = useForkRef(carouselRef, undefined);
    const isRTL = useRTL();
    const rtl = (value) => (isRTL ? -1 : 1) * (typeof value === "number" ? value : 1);
    const focus = useEventCallback(() => { var _a; return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
    const getLightboxProps = useEventCallback(() => props);
    const getLightboxState = useEventCallback(() => state);
    const prev = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((params) => publish(_types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_PREV, params), [publish]);
    const next = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((params) => publish(_types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_NEXT, params), [publish]);
    const close = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => publish(_types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_CLOSE), [publish]);
    const isSwipeValid = (offset) => !(carousel.finite &&
        ((rtl(offset) > 0 && state.currentIndex === 0) ||
            (rtl(offset) < 0 && state.currentIndex === state.slides.length - 1)));
    const setSwipeOffset = (offset) => {
        var _a;
        swipeOffset.current = offset;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("swipe_offset"), `${Math.round(offset)}px`);
    };
    const pullDownEnabled = controller.closeOnPullDown;
    const setPullDownOffset = (offset) => {
        var _a, _b;
        pullDownOffset.current = offset;
        pullDownOpacity.current = (() => {
            const threshold = 60;
            const minOpacity = 0.5;
            return Math.min(Math.max(round(1 - (offset / threshold) * (1 - minOpacity), 2), minOpacity), 1);
        })();
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("pull_down_offset"), `${Math.round(offset)}px`);
        (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty(cssVar("pull_down_opacity"), `${pullDownOpacity.current}`);
    };
    const { prepareAnimation: preparePullDownAnimation } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        if (carouselRef.current && containerRect) {
            return {
                keyframes: [
                    {
                        transform: `translate(0, ${snapshot.rect.y - rect.y + translate.y}px)`,
                        opacity: snapshot.opacity,
                    },
                    { transform: "translate(0, 0)", opacity: 1 },
                ],
                duration: snapshot.duration,
                easing: animation.easing.fade,
            };
        }
        return undefined;
    });
    const pullDown = (offset, cancel) => {
        if (pullDownEnabled) {
            setPullDownOffset(offset);
            let duration = 0;
            if (carouselRef.current) {
                duration = animation.fade * (cancel ? 2 : 1);
                preparePullDownAnimation({
                    rect: carouselRef.current.getBoundingClientRect(),
                    opacity: pullDownOpacity.current,
                    duration,
                });
            }
            cleanupPullDownOffset(() => {
                setPullDownOffset(0);
                setSwipeState(SwipeState.NONE);
            }, duration);
            setSwipeState(SwipeState.ANIMATION);
            if (!cancel) {
                close();
            }
        }
    };
    const { prepareAnimation, isAnimationPlaying } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        var _a;
        if (carouselRef.current && containerRect && ((_a = state.animation) === null || _a === void 0 ? void 0 : _a.duration)) {
            const parsedSpacing = parseLengthPercentage(carousel.spacing);
            const spacingValue = (parsedSpacing.percent
                ? (parsedSpacing.percent * containerRect.width) / 100
                : parsedSpacing.pixel) || 0;
            return {
                keyframes: [
                    {
                        transform: `translate(${rtl(state.globalIndex - snapshot.index) * (containerRect.width + spacingValue) +
                            snapshot.rect.x -
                            rect.x +
                            translate.x}px, 0)`,
                    },
                    { transform: "translate(0, 0)" },
                ],
                duration: state.animation.duration,
                easing: state.animation.easing,
            };
        }
        return undefined;
    });
    const swipe = useEventCallback((action) => {
        var _a, _b;
        const currentSwipeOffset = action.offset || 0;
        const swipeDuration = !currentSwipeOffset ? (_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe : animation.swipe;
        const swipeEasing = !currentSwipeOffset && !isAnimationPlaying() ? animation.easing.navigation : animation.easing.swipe;
        let { direction } = action;
        const count = (_b = action.count) !== null && _b !== void 0 ? _b : 1;
        let newSwipeState = SwipeState.ANIMATION;
        let newSwipeAnimationDuration = swipeDuration * count;
        if (!direction) {
            const containerWidth = containerRect === null || containerRect === void 0 ? void 0 : containerRect.width;
            const elapsedTime = action.duration || 0;
            const expectedTime = containerWidth
                ? (swipeDuration / containerWidth) * Math.abs(currentSwipeOffset)
                : swipeDuration;
            if (count !== 0) {
                if (elapsedTime < expectedTime) {
                    newSwipeAnimationDuration =
                        (newSwipeAnimationDuration / expectedTime) * Math.max(elapsedTime, expectedTime / 5);
                }
                else if (containerWidth) {
                    newSwipeAnimationDuration =
                        (swipeDuration / containerWidth) * (containerWidth - Math.abs(currentSwipeOffset));
                }
                direction = rtl(currentSwipeOffset) > 0 ? _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_PREV : _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_NEXT;
            }
            else {
                newSwipeAnimationDuration = swipeDuration / 2;
            }
        }
        let increment = 0;
        if (direction === _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_PREV) {
            if (isSwipeValid(rtl(1))) {
                increment = -count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        else if (direction === _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_NEXT) {
            if (isSwipeValid(rtl(-1))) {
                increment = count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        newSwipeAnimationDuration = Math.round(newSwipeAnimationDuration);
        cleanupSwipeOffset(() => {
            setSwipeOffset(0);
            setSwipeState(SwipeState.NONE);
        }, newSwipeAnimationDuration);
        if (carouselRef.current) {
            prepareAnimation({
                rect: carouselRef.current.getBoundingClientRect(),
                index: state.globalIndex,
            });
        }
        setSwipeState(newSwipeState);
        publish(_types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_SWIPE, {
            type: "swipe",
            increment,
            duration: newSwipeAnimationDuration,
            easing: swipeEasing,
        });
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a, _b;
        if (((_a = state.animation) === null || _a === void 0 ? void 0 : _a.increment) && ((_b = state.animation) === null || _b === void 0 ? void 0 : _b.duration)) {
            cleanupAnimationIncrement(() => dispatch({ type: "swipe", increment: 0 }), state.animation.duration);
        }
    }, [state.animation, dispatch, cleanupAnimationIncrement]);
    const swipeParams = [
        subscribeSensors,
        isSwipeValid,
        (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) || 0,
        animation.swipe,
        () => setSwipeState(SwipeState.SWIPE),
        (offset) => setSwipeOffset(offset),
        (offset, duration) => swipe({ offset, duration, count: 1 }),
        (offset) => swipe({ offset, count: 0 }),
    ];
    const pullDownParams = [
        () => {
            if (pullDownEnabled) {
                setSwipeState(SwipeState.PULL_DOWN);
            }
        },
        (offset) => setPullDownOffset(offset),
        (offset) => pullDown(offset),
        (offset) => pullDown(offset, true),
    ];
    usePointerSwipe(...swipeParams, pullDownEnabled, ...pullDownParams);
    useWheelSwipe(swipeState, ...swipeParams);
    const focusOnMount = useEventCallback(() => {
        var _a;
        if (controller.focus) {
            (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(focusOnMount, [focusOnMount]);
    const onViewCallback = useEventCallback(() => {
        var _a;
        (_a = on.view) === null || _a === void 0 ? void 0 : _a.call(on, { index: state.currentIndex });
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(onViewCallback, [state.globalIndex, onViewCallback]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => cleanup(subscribe(_types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_PREV, (action) => swipe({ direction: _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_PREV, ...action })), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_NEXT, (action) => swipe({ direction: _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_NEXT, ...action })), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_SWIPE, (action) => dispatch(action))), [subscribe, swipe, dispatch]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_KEY_UP, (event) => {
        if (event.key === _types_js__WEBPACK_IMPORTED_MODULE_1__.VK_ESCAPE) {
            close();
        }
    }), [subscribeSensors, close]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        prev,
        next,
        close,
        focus,
        slideRect: containerRect ? computeSlideRect(containerRect, carousel.padding) : { width: 0, height: 0 },
        containerRect: containerRect || { width: 0, height: 0 },
        subscribeSensors,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
    }), [
        prev,
        next,
        close,
        focus,
        subscribeSensors,
        containerRect,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
        carousel.padding,
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(controller.ref, () => ({
        prev,
        next,
        close,
        focus,
        getLightboxProps,
        getLightboxState,
    }), [prev, next, close, focus, getLightboxProps, getLightboxState]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: handleContainerRef, className: clsx(cssClass(cssContainerPrefix()), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.CLASS_FLEX_CENTER)), style: {
            ...(swipeState === SwipeState.SWIPE
                ? { [cssVar("swipe_offset")]: `${Math.round(swipeOffset.current)}px` }
                : null),
            ...(swipeState === SwipeState.PULL_DOWN
                ? {
                    [cssVar("pull_down_offset")]: `${Math.round(pullDownOffset.current)}px`,
                    [cssVar("pull_down_opacity")]: `${pullDownOpacity.current}`,
                }
                : null),
            ...(controller.touchAction !== "none"
                ? { [cssVar("controller_touch_action")]: controller.touchAction }
                : null),
            ...styles.container,
        }, ...(controller.aria ? { role: "presentation", "aria-live": "polite" } : null), tabIndex: -1, ...registerSensors }, containerRect && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ControllerContext.Provider, { value: context },
        children, (_a = render.controls) === null || _a === void 0 ? void 0 :
        _a.call(render)))));
}
const ControllerModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_CONTROLLER, Controller);

function cssPrefix$2(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_CAROUSEL, value);
}
function cssSlidePrefix(value) {
    return composePrefix("slide", value);
}
function CarouselSlide({ slide, offset }) {
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { currentIndex } = useLightboxState();
    const { slideRect, close } = useController();
    const { render, carousel: { imageFit, imageProps }, on: { click: onClick }, controller: { closeOnBackdropClick }, styles: { slide: style }, } = useLightboxProps();
    const renderSlide = () => {
        var _a, _b, _c, _d;
        let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect: slideRect });
        if (!rendered && isImageSlide(slide)) {
            rendered = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageSlide, { slide: slide, offset: offset, render: render, rect: slideRect, imageFit: imageFit, imageProps: imageProps, onClick: offset === 0 ? () => onClick === null || onClick === void 0 ? void 0 : onClick({ index: currentIndex }) : undefined }));
        }
        return rendered ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (_b = render.slideHeader) === null || _b === void 0 ? void 0 :
            _b.call(render, { slide }),
            ((_c = render.slideContainer) !== null && _c !== void 0 ? _c : (({ children }) => children))({ slide, children: rendered }), (_d = render.slideFooter) === null || _d === void 0 ? void 0 :
            _d.call(render, { slide }))) : null;
    };
    const handleBackdropClick = (event) => {
        const container = containerRef.current;
        const target = event.target instanceof HTMLElement ? event.target : undefined;
        if (closeOnBackdropClick &&
            target &&
            container &&
            (target === container ||
                (Array.from(container.children).find((x) => x === target) &&
                    target.classList.contains(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.CLASS_FULLSIZE))))) {
            close();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: containerRef, className: clsx(cssClass(cssSlidePrefix()), offset === 0 && cssClass(cssSlidePrefix("current")), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.CLASS_FLEX_CENTER)), onClick: handleBackdropClick, style: style }, renderSlide()));
}
function Placeholder() {
    const style = useLightboxProps().styles.slide;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClass("slide"), style: style });
}
function Carousel({ carousel: { finite, preload, padding, spacing } }) {
    const { slides, currentIndex, globalIndex } = useLightboxState();
    const { setCarouselRef } = useController();
    const spacingValue = parseLengthPercentage(spacing);
    const paddingValue = parseLengthPercentage(padding);
    const items = [];
    if ((slides === null || slides === void 0 ? void 0 : slides.length) > 0) {
        for (let i = currentIndex - preload; i < currentIndex; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i >= 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: key, slide: slides[(i + preload * slides.length) % slides.length], offset: i - currentIndex })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Placeholder, { key: key })));
        }
        items.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: globalIndex, slide: slides[currentIndex], offset: 0 }));
        for (let i = currentIndex + 1; i <= currentIndex + preload; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i <= slides.length - 1 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: key, slide: slides[i % slides.length], offset: i - currentIndex })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Placeholder, { key: key })));
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: setCarouselRef, className: clsx(cssClass(cssPrefix$2()), items.length > 0 && cssClass(cssPrefix$2("with_slides"))), style: {
            [`${cssVar(cssPrefix$2("slides_count"))}`]: items.length,
            [`${cssVar(cssPrefix$2("spacing_px"))}`]: spacingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("spacing_percent"))}`]: spacingValue.percent || 0,
            [`${cssVar(cssPrefix$2("padding_px"))}`]: paddingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("padding_percent"))}`]: paddingValue.percent || 0,
        } }, items));
}
const CarouselModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_CAROUSEL, Carousel);

function NavigationButton({ label, icon, renderIcon, action, onClick, disabled, style }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButton, { label: label, icon: icon, renderIcon: renderIcon, className: cssClass(`navigation_${action}`), disabled: disabled, onClick: onClick, style: style, ...useLoseFocus(useController().focus, disabled) }));
}
function Navigation({ carousel: { finite }, animation, render: { buttonPrev, buttonNext, iconPrev, iconNext }, styles, }) {
    var _a;
    const { slides, currentIndex } = useLightboxState();
    const { prev, next, subscribeSensors } = useController();
    const isRTL = useRTL();
    const prevDisabled = slides.length === 0 || (finite && currentIndex === 0);
    const nextDisabled = slides.length === 0 || (finite && currentIndex === slides.length - 1);
    const throttle = ((_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe) / 2;
    const prevThrottled = useThrottle(prev, throttle);
    const nextThrottled = useThrottle(next, throttle);
    const handleKeyDown = useEventCallback((event) => {
        if (event.key === _types_js__WEBPACK_IMPORTED_MODULE_1__.VK_ARROW_LEFT && !(isRTL ? nextDisabled : prevDisabled)) {
            (isRTL ? nextThrottled : prevThrottled)();
        }
        if (event.key === _types_js__WEBPACK_IMPORTED_MODULE_1__.VK_ARROW_RIGHT && !(isRTL ? prevDisabled : nextDisabled)) {
            (isRTL ? prevThrottled : nextThrottled)();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_1__.EVENT_ON_KEY_DOWN, handleKeyDown), [subscribeSensors, handleKeyDown]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        buttonPrev ? (buttonPrev()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationButton, { label: "Previous", action: _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_PREV, icon: PreviousIcon, renderIcon: iconPrev, style: styles.navigationPrev, disabled: prevDisabled, onClick: prev })),
        buttonNext ? (buttonNext()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationButton, { label: "Next", action: _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_NEXT, icon: NextIcon, renderIcon: iconNext, style: styles.navigationNext, disabled: nextDisabled, onClick: next }))));
}
const NavigationModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_NAVIGATION, Navigation);

const noScroll = cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.CLASS_NO_SCROLL);
const noScrollPadding = cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.CLASS_NO_SCROLL_PADDING);
function isHTMLElement(element) {
    return "style" in element;
}
function padScrollbar(element, padding, rtl) {
    const styles = window.getComputedStyle(element);
    const property = rtl ? "padding-left" : "padding-right";
    const computedValue = rtl ? styles.paddingLeft : styles.paddingRight;
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, `${(parseInt(computedValue, 10) || 0) + padding}px`);
    return () => {
        if (originalValue) {
            element.style.setProperty(property, originalValue);
        }
        else {
            element.style.removeProperty(property);
        }
    };
}
function NoScroll({ children }) {
    const rtl = useRTL();
    useLayoutEffect(() => {
        const cleanup = [];
        const { body, documentElement } = document;
        const scrollbar = Math.round(window.innerWidth - documentElement.clientWidth);
        if (scrollbar > 0) {
            cleanup.push(padScrollbar(body, scrollbar, rtl));
            const elements = body.getElementsByTagName("*");
            for (let i = 0; i < elements.length; i += 1) {
                const element = elements[i];
                if (isHTMLElement(element) &&
                    window.getComputedStyle(element).getPropertyValue("position") === "fixed" &&
                    !element.classList.contains(noScrollPadding)) {
                    cleanup.push(padScrollbar(element, scrollbar, rtl));
                }
            }
        }
        body.classList.add(noScroll);
        return () => {
            body.classList.remove(noScroll);
            cleanup.forEach((clean) => clean());
        };
    }, [rtl]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}
const NoScrollModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_NO_SCROLL, NoScroll);

function cssPrefix$1(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_PORTAL, value);
}
function setAttribute(element, attribute, value) {
    const previousValue = element.getAttribute(attribute);
    element.setAttribute(attribute, value);
    return () => {
        if (previousValue) {
            element.setAttribute(attribute, previousValue);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
}
function Portal({ children, animation, styles, className, on, portal, close }) {
    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const cleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const { setTimeout } = useTimeouts();
    const { subscribe } = useEvents();
    const reduceMotion = useMotionPreference();
    const animationDuration = !reduceMotion ? animation.fade : 0;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
            setVisible(false);
        };
    }, []);
    const handleClose = useEventCallback(() => {
        var _a;
        setVisible(false);
        (_a = on.exiting) === null || _a === void 0 ? void 0 : _a.call(on);
        setTimeout(() => {
            var _a;
            (_a = on.exited) === null || _a === void 0 ? void 0 : _a.call(on);
            close();
        }, animationDuration);
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribe(_types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_CLOSE, handleClose), [subscribe, handleClose]);
    const handleEnter = useEventCallback((node) => {
        var _a, _b, _c;
        node.scrollTop;
        setVisible(true);
        (_a = on.entering) === null || _a === void 0 ? void 0 : _a.call(on);
        const elements = (_c = (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
        for (let i = 0; i < elements.length; i += 1) {
            const element = elements[i];
            if (["TEMPLATE", "SCRIPT", "STYLE"].indexOf(element.tagName) === -1 && element !== node) {
                cleanup.current.push(setAttribute(element, "inert", "true"));
                cleanup.current.push(setAttribute(element, "aria-hidden", "true"));
            }
        }
        setTimeout(() => {
            var _a;
            (_a = on.entered) === null || _a === void 0 ? void 0 : _a.call(on);
        }, animationDuration);
    });
    const handleExit = useEventCallback(() => {
        cleanup.current.forEach((clean) => clean());
        cleanup.current = [];
    });
    const handleRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        if (node) {
            handleEnter(node);
        }
        else {
            handleExit();
        }
    }, [handleEnter, handleExit]);
    return mounted
        ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: handleRef, className: clsx(className, cssClass("root"), cssClass(cssPrefix$1()), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_1__.CLASS_NO_SCROLL_PADDING), visible && cssClass(cssPrefix$1("open"))), role: "presentation", "aria-live": "polite", style: {
                ...(animation.fade !== LightboxDefaultProps.animation.fade
                    ? { [cssVar("fade_animation_duration")]: `${animationDuration}ms` }
                    : null),
                ...(animation.easing.fade !== LightboxDefaultProps.animation.easing.fade
                    ? { [cssVar("fade_animation_timing_function")]: animation.easing.fade }
                    : null),
                ...styles.root,
            } }, children), portal.root || document.body)
        : null;
}
const PortalModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_PORTAL, Portal);

function Root({ children }) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}
const RootModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_ROOT, Root);

function cssPrefix(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_TOOLBAR, value);
}
function Toolbar({ toolbar: { buttons }, render: { buttonClose, iconClose }, styles }) {
    const { close, setToolbarWidth } = useController();
    const { setContainerRef, containerRect } = useContainerRect();
    useLayoutEffect(() => {
        setToolbarWidth(containerRect === null || containerRect === void 0 ? void 0 : containerRect.width);
    }, [setToolbarWidth, containerRect === null || containerRect === void 0 ? void 0 : containerRect.width]);
    const renderCloseButton = () => {
        if (buttonClose)
            return buttonClose();
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButton, { key: _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_CLOSE, label: "Close", icon: CloseIcon, renderIcon: iconClose, onClick: close });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: setContainerRef, style: styles.toolbar, className: cssClass(cssPrefix()), ...stopNavigationEventsPropagation() }, buttons === null || buttons === void 0 ? void 0 : buttons.map((button) => (button === _types_js__WEBPACK_IMPORTED_MODULE_1__.ACTION_CLOSE ? renderCloseButton() : button))));
}
const ToolbarModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_1__.MODULE_TOOLBAR, Toolbar);

function renderNode(node, props) {
    var _a;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(node.module.component, { key: node.module.name, ...props }, (_a = node.children) === null || _a === void 0 ? void 0 : _a.map((child) => renderNode(child, props)));
}
function mergeAnimation(defaultAnimation, animation = {}) {
    const { easing: defaultAnimationEasing, ...restDefaultAnimation } = defaultAnimation;
    const { easing, ...restAnimation } = animation;
    return {
        easing: { ...defaultAnimationEasing, ...easing },
        ...restDefaultAnimation,
        ...restAnimation,
    };
}
function Lightbox({ carousel, animation, render, toolbar, controller, on, plugins, slides, index, ...restProps }) {
    const { animation: defaultAnimation, carousel: defaultCarousel, render: defaultRender, toolbar: defaultToolbar, controller: defaultController, on: defaultOn, slides: defaultSlides, index: defaultIndex, plugins: defaultPlugins, ...restDefaultProps } = LightboxDefaultProps;
    const { config, augmentation } = withPlugins([
        createNode(PortalModule, [
            createNode(NoScrollModule, [
                createNode(ControllerModule, [
                    createNode(CarouselModule),
                    createNode(ToolbarModule),
                    createNode(NavigationModule),
                ]),
            ]),
        ]),
    ], plugins || defaultPlugins);
    const props = augmentation({
        animation: mergeAnimation(defaultAnimation, animation),
        carousel: { ...defaultCarousel, ...carousel },
        render: { ...defaultRender, ...render },
        toolbar: { ...defaultToolbar, ...toolbar },
        controller: { ...defaultController, ...controller },
        on: { ...defaultOn, ...on },
        ...restDefaultProps,
        ...restProps,
    });
    if (!props.open)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxPropsProvider, { ...props },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxStateProvider, { slides: slides || defaultSlides, index: index || defaultIndex },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(TimeoutsProvider, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventsProvider, null, renderNode(createNode(RootModule, config), props))))));
}



/***/ }),

/***/ "./node_modules/yet-another-react-lightbox/dist/types.js":
/*!***************************************************************!*\
  !*** ./node_modules/yet-another-react-lightbox/dist/types.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_CLOSE: () => (/* binding */ ACTION_CLOSE),
/* harmony export */   ACTION_NEXT: () => (/* binding */ ACTION_NEXT),
/* harmony export */   ACTION_PREV: () => (/* binding */ ACTION_PREV),
/* harmony export */   ACTION_SWIPE: () => (/* binding */ ACTION_SWIPE),
/* harmony export */   CLASS_FLEX_CENTER: () => (/* binding */ CLASS_FLEX_CENTER),
/* harmony export */   CLASS_FULLSIZE: () => (/* binding */ CLASS_FULLSIZE),
/* harmony export */   CLASS_NO_SCROLL: () => (/* binding */ CLASS_NO_SCROLL),
/* harmony export */   CLASS_NO_SCROLL_PADDING: () => (/* binding */ CLASS_NO_SCROLL_PADDING),
/* harmony export */   ELEMENT_BUTTON: () => (/* binding */ ELEMENT_BUTTON),
/* harmony export */   ELEMENT_ICON: () => (/* binding */ ELEMENT_ICON),
/* harmony export */   EVENT_ON_KEY_DOWN: () => (/* binding */ EVENT_ON_KEY_DOWN),
/* harmony export */   EVENT_ON_KEY_UP: () => (/* binding */ EVENT_ON_KEY_UP),
/* harmony export */   EVENT_ON_POINTER_CANCEL: () => (/* binding */ EVENT_ON_POINTER_CANCEL),
/* harmony export */   EVENT_ON_POINTER_DOWN: () => (/* binding */ EVENT_ON_POINTER_DOWN),
/* harmony export */   EVENT_ON_POINTER_LEAVE: () => (/* binding */ EVENT_ON_POINTER_LEAVE),
/* harmony export */   EVENT_ON_POINTER_MOVE: () => (/* binding */ EVENT_ON_POINTER_MOVE),
/* harmony export */   EVENT_ON_POINTER_UP: () => (/* binding */ EVENT_ON_POINTER_UP),
/* harmony export */   EVENT_ON_WHEEL: () => (/* binding */ EVENT_ON_WHEEL),
/* harmony export */   IMAGE_FIT_CONTAIN: () => (/* binding */ IMAGE_FIT_CONTAIN),
/* harmony export */   IMAGE_FIT_COVER: () => (/* binding */ IMAGE_FIT_COVER),
/* harmony export */   MODULE_CAROUSEL: () => (/* binding */ MODULE_CAROUSEL),
/* harmony export */   MODULE_CONTROLLER: () => (/* binding */ MODULE_CONTROLLER),
/* harmony export */   MODULE_NAVIGATION: () => (/* binding */ MODULE_NAVIGATION),
/* harmony export */   MODULE_NO_SCROLL: () => (/* binding */ MODULE_NO_SCROLL),
/* harmony export */   MODULE_PORTAL: () => (/* binding */ MODULE_PORTAL),
/* harmony export */   MODULE_ROOT: () => (/* binding */ MODULE_ROOT),
/* harmony export */   MODULE_TOOLBAR: () => (/* binding */ MODULE_TOOLBAR),
/* harmony export */   SLIDE_STATUS_COMPLETE: () => (/* binding */ SLIDE_STATUS_COMPLETE),
/* harmony export */   SLIDE_STATUS_ERROR: () => (/* binding */ SLIDE_STATUS_ERROR),
/* harmony export */   SLIDE_STATUS_LOADING: () => (/* binding */ SLIDE_STATUS_LOADING),
/* harmony export */   SLIDE_STATUS_PLACEHOLDER: () => (/* binding */ SLIDE_STATUS_PLACEHOLDER),
/* harmony export */   UNKNOWN_ACTION_TYPE: () => (/* binding */ UNKNOWN_ACTION_TYPE),
/* harmony export */   VK_ARROW_LEFT: () => (/* binding */ VK_ARROW_LEFT),
/* harmony export */   VK_ARROW_RIGHT: () => (/* binding */ VK_ARROW_RIGHT),
/* harmony export */   VK_ESCAPE: () => (/* binding */ VK_ESCAPE),
/* harmony export */   activeSlideStatus: () => (/* binding */ activeSlideStatus)
/* harmony export */ });
/* unused harmony exports ACTIVE_SLIDE_COMPLETE, ACTIVE_SLIDE_ERROR, ACTIVE_SLIDE_LOADING, ACTIVE_SLIDE_PLAYING, PLUGIN_CAPTIONS, PLUGIN_COUNTER, PLUGIN_DOWNLOAD, PLUGIN_FULLSCREEN, PLUGIN_INLINE, PLUGIN_SHARE, PLUGIN_SLIDESHOW, PLUGIN_THUMBNAILS, PLUGIN_ZOOM, SLIDE_STATUS_PLAYING */
const MODULE_CAROUSEL = "carousel";
const MODULE_CONTROLLER = "controller";
const MODULE_NAVIGATION = "navigation";
const MODULE_NO_SCROLL = "no-scroll";
const MODULE_PORTAL = "portal";
const MODULE_ROOT = "root";
const MODULE_TOOLBAR = "toolbar";
const PLUGIN_CAPTIONS = "captions";
const PLUGIN_COUNTER = "counter";
const PLUGIN_DOWNLOAD = "download";
const PLUGIN_FULLSCREEN = "fullscreen";
const PLUGIN_INLINE = "inline";
const PLUGIN_SHARE = "share";
const PLUGIN_SLIDESHOW = "slideshow";
const PLUGIN_THUMBNAILS = "thumbnails";
const PLUGIN_ZOOM = "zoom";
const SLIDE_STATUS_LOADING = "loading";
const SLIDE_STATUS_PLAYING = "playing";
const SLIDE_STATUS_ERROR = "error";
const SLIDE_STATUS_COMPLETE = "complete";
const SLIDE_STATUS_PLACEHOLDER = "placeholder";
const activeSlideStatus = (status) => `active-slide-${status}`;
const ACTIVE_SLIDE_LOADING = activeSlideStatus(SLIDE_STATUS_LOADING);
const ACTIVE_SLIDE_PLAYING = activeSlideStatus(SLIDE_STATUS_PLAYING);
const ACTIVE_SLIDE_ERROR = activeSlideStatus(SLIDE_STATUS_ERROR);
const ACTIVE_SLIDE_COMPLETE = activeSlideStatus(SLIDE_STATUS_COMPLETE);
const CLASS_FULLSIZE = "fullsize";
const CLASS_FLEX_CENTER = "flex_center";
const CLASS_NO_SCROLL = "no_scroll";
const CLASS_NO_SCROLL_PADDING = "no_scroll_padding";
const ACTION_PREV = "prev";
const ACTION_NEXT = "next";
const ACTION_SWIPE = "swipe";
const ACTION_CLOSE = "close";
const EVENT_ON_POINTER_DOWN = "onPointerDown";
const EVENT_ON_POINTER_MOVE = "onPointerMove";
const EVENT_ON_POINTER_UP = "onPointerUp";
const EVENT_ON_POINTER_LEAVE = "onPointerLeave";
const EVENT_ON_POINTER_CANCEL = "onPointerCancel";
const EVENT_ON_KEY_DOWN = "onKeyDown";
const EVENT_ON_KEY_UP = "onKeyUp";
const EVENT_ON_WHEEL = "onWheel";
const VK_ESCAPE = "Escape";
const VK_ARROW_LEFT = "ArrowLeft";
const VK_ARROW_RIGHT = "ArrowRight";
const ELEMENT_BUTTON = "button";
const ELEMENT_ICON = "icon";
const IMAGE_FIT_CONTAIN = "contain";
const IMAGE_FIT_COVER = "cover";
const UNKNOWN_ACTION_TYPE = "Unknown action type";




/***/ })

}]);
//# sourceMappingURL=src_components_Products_Product_tsx.bundle.js.map