"use strict";
(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[587],{

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

/***/ 5587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Purchase)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 56 modules
var formik_esm = __webpack_require__(3449);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./node_modules/react-country-region-selector/dist/rcrs.es.js
var rcrs_es = __webpack_require__(1021);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
// EXTERNAL MODULE: ./src/api/account/editAccountInformations.ts
var editAccountInformations = __webpack_require__(9537);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(7828);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 168 modules
var motion = __webpack_require__(4937);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
;// CONCATENATED MODULE: ./src/api/shop/createOrder.ts


const createOrder = function (product, promocode) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/orders`, {
      product,
      promocode
    }).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return resolve(data);
    });
  });
};
/* harmony default export */ const shop_createOrder = (createOrder);
// EXTERNAL MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(1955);
// EXTERNAL MODULE: ./src/api/shop/getDownloadLink.ts
var getDownloadLink = __webpack_require__(9554);
;// CONCATENATED MODULE: ./src/components/Elements/Spinner.tsx

const Spinner = function () {
  return /*#__PURE__*/react.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react.createElement("div", {
    role: "status"
  }, /*#__PURE__*/react.createElement("svg", {
    "aria-hidden": "true",
    className: "inline mt-8 h-16 w-16 animate-spin fill-primary",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "currentColor"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentFill"
  })), /*#__PURE__*/react.createElement("span", {
    className: "sr-only"
  }, "Loading...")));
};
/* harmony default export */ const Elements_Spinner = (Spinner);
;// CONCATENATED MODULE: ./src/components/Products/Purchase.tsx
















const Purchase_form = (0,index_esm/* object */.Ry)({
  society: (0,index_esm/* string */.Z_)().nullable(),
  address: (0,index_esm/* string */.Z_)().required(),
  city: (0,index_esm/* string */.Z_)().required(),
  postalcode: (0,index_esm/* string */.Z_)().required().matches(/^\d{5}(?:[-\s]\d{4})?$/, "The postal code is not correct."),
  firstname: (0,index_esm/* string */.Z_)().required(),
  lastname: (0,index_esm/* string */.Z_)().required()
});
function Purchase() {
  const [loading, setLoading] = (0,react.useState)(false);
  const [country, setCountry] = (0,react.useState)("");
  const [region, setRegion] = (0,react.useState)("");
  const [error, setError] = (0,react.useState)("");
  const [accountinfo, setAccinfo] = (0,react.useState)(false);
  const {
    id
  } = (0,react_router_dist/* useParams */.UO)();
  const {
    data,
    error: erros,
    isLoading,
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/account/getinfos`, http/* fetcher */._i);
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
    mutate: mutate2
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/addons/getone?id=${id}`, http/* fetcher */._i);
  const {
    data: data3,
    error: error3,
    isLoading: isLoading3,
    mutate: mutate3
  } = (0,dist/* default */.ZP)(`https://privateapi.bagou450.com/api/client/web/orders/status?id=${id}`, http/* fetcher */._i);
  (0,react.useEffect)(function () {
    async function fetchRegion(data) {
      const response = await fetch("https://ipapi.co/json/");
      const responseData = await response.json();
      setCountry(responseData.country_name && data.data.country === "" ? responseData.country_name : data.data.country !== "" ? data.data.country : "");
      setRegion(responseData.region && data.data.region === "" ? responseData.region : data.data.region !== "" ? data.data.region : "");
    }
    if (data && !erros && !isLoading) {
      formik.setValues({
        society: data.data.society ? data.data.society : "",
        address: data.data.address ? data.data.address : "",
        city: data.data.city ? data.data.city : "",
        postalcode: data.data.postal_code ? data.data.postal_code : "",
        lastname: data.data.lastname ? data.data.lastname : "",
        firstname: data.data.firstname ? data.data.firstname : ""
      });
      setCountry(data.data.country);
      setRegion(data.data.region);
      fetchRegion(data);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const handleCountryChange = function (value) {
    setCountry(value);
  };
  const handleRegionChange = function (value) {
    setRegion(value);
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      society: "",
      address: "",
      city: "",
      postalcode: "",
      firstname: "",
      lastname: ""
    },
    validationSchema: Purchase_form,
    onSubmit: function (values) {
      console.log(region);
      setLoading(true);
      if (region === "" || !region) {
        setError("You need to select a State/Region");
        setLoading(false);
        return;
      }
      if (country === "" || !country) {
        setError("You need to select a Country");
        setLoading(false);
        return;
      }
      setError("");
      (0,editAccountInformations/* default */.Z)(values.society, values.address, values.city, region, values.postalcode, country, values.firstname, values.lastname).then(function (data) {
        if (data.data["status"] === "error") {
          react_toastify_esm/* toast */.Am.error(data.data["message"], {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
          });
          setLoading(false);
        } else {
          mutate();
          setAccinfo(true);
          setLoading(false);
        }
        setLoading(false);
      }).catch(function (e) {
        react_toastify_esm/* toast */.Am.error("An unexcepted error happend. Please contact one of our support team.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
        setLoading(false);
      });
    }
  });
  const navigation = (0,react_router_dist/* useNavigate */.s0)();
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(react.Fragment, null);
  }
  if (!data["status"]) {
    if (data["message"] === "Unauthenticated.") {
      navigation("/login");
      window.location.reload();
    }
    mutate();
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Elements_Spinner, null));
  }
  const makePurchase = function (price) {
    shop_createOrder(data2.data.id).then(function (data) {
      if (data.status === 'error') {
        return react_toastify_esm/* toast */.Am.error(data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      }
      window.location.href = data.data.data;
    }).catch(function (e) {
      react_toastify_esm/* toast */.Am.error("An unexcepted error happend. Please contact one of our support team.", {
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
  };
  const downloadProduct = function (order, name) {
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
        // Téléchargement du fichier blob

        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${name}.zip`);
        document.body.appendChild(link);
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
  if (!data2 || error2 || isLoading2 || !data3 || error3 || isLoading3) {
    return /*#__PURE__*/react.createElement("p", null, "Loading...");
  }
  document.title = "Bagou450 - " + data3.data.exist ? "Order completed" : 0;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("section", {
    className: "text-center justify-center mx-auto"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "text-white text-4xl"
  }, data3.data.exist ? 'Thanks for your order!' : `Purchase ${data2.data.name}`), /*#__PURE__*/react.createElement("ul", {
    className: "steps mx-auto text-center my-4"
  }, /*#__PURE__*/react.createElement("li", {
    className: "step step-primary"
  }, "Enter your informations"), /*#__PURE__*/react.createElement("li", {
    className: accountinfo || data3.data.exist ? "step step-primary" : "step"
  }, "Summary"), /*#__PURE__*/react.createElement("li", {
    className: data3.data.exist ? "step step-primary" : "step"
  }, "Purchase"), /*#__PURE__*/react.createElement("li", {
    className: data3.data.exist ? "step step-primary" : "step"
  }, "Receive Product"))), !data3.data.exist ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(AnimatePresence/* AnimatePresence */.M, null, !accountinfo && /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
    initial: {
      opacity: 0
    },
    transition: {
      duration: 0.5
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "my-4 rounded-lg "
  }, /*#__PURE__*/react.createElement("div", {
    className: error === "" ? "hidden alert alert-warning shadow-lg" : "flex my-4 alert alert-warning shadow-lg"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "stroke-current flex-shrink-0 h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  })), /*#__PURE__*/react.createElement("span", null, error))), /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "grid grid-cols-2 gap-x-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mx-auto w-full max-w-sm"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Society", " ", /*#__PURE__*/react.createElement("span", {
    className: "badge badge-outline"
  }, "optional"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.society))), /*#__PURE__*/react.createElement("input", {
    id: "society",
    name: "society",
    type: "society",
    defaultValue: data.data.society
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full  max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.society))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "City")), /*#__PURE__*/react.createElement("input", {
    id: "city",
    defaultValue: data.data.city,
    name: "city",
    type: "city"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.city))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Adress")), /*#__PURE__*/react.createElement("input", {
    id: "address",
    name: "address",
    type: "address"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: data.data.address,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.address))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Postal code")), /*#__PURE__*/react.createElement("input", {
    id: "postalcode",
    name: "postalcode",
    type: "postalcode",
    defaultValue: data.data.postal_code
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full max-w-sm "
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.postalcode)))), /*#__PURE__*/react.createElement("div", {
    className: "mx-auto"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Country")), /*#__PURE__*/react.createElement(rcrs_es/* CountryDropdown */.Px, {
    id: "country",
    name: "country",
    value: country,
    onChange: handleCountryChange,
    disabled: loading,
    classes: "input w-full input-bordered w-full max-w-sm"
  })), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, country === "" ? "You need to select a country" : "")), /*#__PURE__*/react.createElement("div", {
    className: ""
  }, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "State/Region")), /*#__PURE__*/react.createElement(rcrs_es/* RegionDropdown */.Xz, {
    id: "region",
    name: "region",
    country: country,
    value: region,
    onChange: handleRegionChange,
    disabled: loading,
    classes: "input w-full input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, region === "" ? "You need to select a region" : ""))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "First name")), /*#__PURE__*/react.createElement("input", {
    id: "firstname",
    name: "firstname",
    type: "firstname",
    defaultValue: data.data.firstname
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full max-w-sm "
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.firstname))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Last Name")), /*#__PURE__*/react.createElement("input", {
    id: "lastname",
    name: "lastname",
    type: "lastname",
    defaultValue: data.data.lastname
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full max-w-sm "
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.lastname)))), /*#__PURE__*/react.createElement("div", {
    className: "flex justify-center col-span-2"
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    onClick: function () {
      return formik.submitForm;
    },
    disabled: loading || formik.errors.postalcode ? true :  false || formik.errors.address ? true :  false || formik.errors.city ? true :  false || formik.errors.firstname ? true :  false || formik.errors.lastname ? true : false,
    className: "btn btn-primary btn-outline w-full max-w-sm my-4 self-end "
  }, "Next Step"))))), /*#__PURE__*/react.createElement(AnimatePresence/* AnimatePresence */.M, null, accountinfo && /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
    initial: {
      opacity: 0
    },
    transition: {
      duration: 0.5,
      delay: 0.5
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "overflow-x-auto mx-24"
  }, /*#__PURE__*/react.createElement("table", {
    className: "table w-full"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null), /*#__PURE__*/react.createElement("th", null, "Name"), /*#__PURE__*/react.createElement("th", null, "Description"), /*#__PURE__*/react.createElement("th", null, "Price"))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", {
    className: "hover"
  }, /*#__PURE__*/react.createElement("th", null, "1"), /*#__PURE__*/react.createElement("td", {
    className: "flex gap-x-2"
  }, /*#__PURE__*/react.createElement("img", {
    src: `https://cdn.bagou450.com/assets/img/addons/${data2.data.id}`,
    alt: data2.data.name,
    className: "max-w-12 max-h-12 rounded-lg shadow-2xl"
  }), /*#__PURE__*/react.createElement("span", {
    className: "my-auto"
  }, data2.data.name)), /*#__PURE__*/react.createElement("td", null, data2.data.tag), /*#__PURE__*/react.createElement("th", {
    className: "textbold"
  }, data2.data.price, "\u20AC"))))), /*#__PURE__*/react.createElement("div", {
    className: "grid md:grid:cols-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ml-24"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "text-white text-2xl"
  }, "Your informations:"), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Name:"), " ", data.data.lastname, " ", data.data.lastname), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Country: "), data.data.country), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Region: "), data.data.region), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Address: "), data.data.address), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "City: "), data.data.city), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Postal code: "), data.data.postal_code)), /*#__PURE__*/react.createElement("div", {
    className: "ml-auto mr-24"
  }, /*#__PURE__*/react.createElement("p", {
    className: "my-2"
  }, /*#__PURE__*/react.createElement("strong", null, "Price: "), data2.data.price, "\u20AC"), /*#__PURE__*/react.createElement("p", {
    className: "my-2"
  }, /*#__PURE__*/react.createElement("strong", null, "Fees: "), "0.35\u20AC"), /*#__PURE__*/react.createElement("p", {
    className: "text-xl mt-2"
  }, /*#__PURE__*/react.createElement("strong", null, "Total Price: "), /*#__PURE__*/react.createElement("strong", {
    className: "text-bold"
  }, data2.data.price + 0.35, "\u20AC")))), /*#__PURE__*/react.createElement("div", {
    className: "flex justify-end mr-12 my-4"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-primary",
    onClick: function () {
      return makePurchase(data2.data.price + 0.35);
    }
  }, "Purchase (With bank card)"))))) : /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "text-3xl text-center"
  }, "Order status: ", /*#__PURE__*/react.createElement("span", {
    className: data3.data.order.status === 'complete' ? 'text-green-500' : 'text-red-500'
  }, data3.data.order.status.toUpperCase())), /*#__PURE__*/react.createElement("p", {
    className: "text-2xl text-center"
  }, "Order content:"), /*#__PURE__*/react.createElement("div", {
    className: "overflow-x-auto mx-24"
  }, /*#__PURE__*/react.createElement("table", {
    className: "table w-full"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null), /*#__PURE__*/react.createElement("th", null, "Name"), /*#__PURE__*/react.createElement("th", null, "Description"), /*#__PURE__*/react.createElement("th", null, "Price"), data3.data.order.status === 'complete' && /*#__PURE__*/react.createElement(react.Fragment, null, data3.data.order.license && /*#__PURE__*/react.createElement("th", null, " License"), /*#__PURE__*/react.createElement("th", null, "Download")))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", {
    className: "hover"
  }, /*#__PURE__*/react.createElement("th", null, "1"), /*#__PURE__*/react.createElement("td", {
    className: "flex gap-x-2"
  }, /*#__PURE__*/react.createElement("img", {
    src: `https://cdn.bagou450.com/assets/img/addons/${data2.data.id}`,
    alt: data2.data.name,
    className: "max-w-12 max-h-12 rounded-lg shadow-2xl"
  }), /*#__PURE__*/react.createElement("span", {
    className: "my-auto"
  }, data2.data.name)), /*#__PURE__*/react.createElement("td", null, data2.data.tag), /*#__PURE__*/react.createElement("th", {
    className: "textbold"
  }, data2.data.price, "\u20AC"), data3.data.order.status === 'complete' && /*#__PURE__*/react.createElement(react.Fragment, null, data3.data.order.license && /*#__PURE__*/react.createElement("td", null, " ", data3.data.order.license), /*#__PURE__*/react.createElement("th", null, /*#__PURE__*/react.createElement("button", {
    className: "btn mx-4",
    onClick: function () {
      return downloadProduct(data3.data.order.id, data2.data.name);
    },
    disabled: loading
  }, "Download"))))))), data3.data.order.status === 'incomplete' && /*#__PURE__*/react.createElement("div", {
    className: "flex justify-end mr-12 my-4"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-primary",
    onClick: function () {
      return window.location.assign(data3.data.order.checkout);
    }
  }, "Complete order"))), /*#__PURE__*/react.createElement("div", {
    className: "min-h-screen"
  }));
}

/***/ }),

/***/ 7828:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ AnimatePresence)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/index.mjs + 1 modules
var frameloop = __webpack_require__(3380);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(8868);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs



function useIsMounted() {
    const isMounted = (0,react.useRef)(false);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-force-update.mjs




function useForceUpdate() {
    const isMounted = useIsMounted();
    const [forcedRenderCount, setForcedRenderCount] = (0,react.useState)(0);
    const forceRender = (0,react.useCallback)(() => {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    const deferredForceRender = (0,react.useCallback)(() => frameloop/* frame */.Wi.postRender(forceRender), [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__(240);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(6681);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs



/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = (0,react.useId)();
    const ref = (0,react.useRef)(null);
    const size = (0,react.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react.useInsertionEffect)(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return (react.createElement(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size }, react.cloneElement(children, { ref })));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs






const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = (0,use_constant/* useConstant */.h)(newChildrenMap);
    const id = (0,react.useId)();
    const context = (0,react.useMemo)(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    (0,react.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = react.createElement(PopChild, { isPresent: isPresent }, children);
    }
    return (react.createElement(PresenceContext/* PresenceContext */.O.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__(5364);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs


function useUnmountEffect(callback) {
    return (0,react.useEffect)(() => () => callback(), []);
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/errors.mjs
var errors = __webpack_require__(5487);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs










const getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
    children.forEach((child) => {
        const key = getChildKey(child);
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react.Children.forEach(children, (child) => {
        if ((0,react.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync", }) => {
    (0,errors/* invariant */.k)(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    const forceRender = (0,react.useContext)(LayoutGroupContext/* LayoutGroupContext */.p).forceRender || useForceUpdate()[0];
    const isMounted = useIsMounted();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    const filteredChildren = onlyElements(children);
    let childrenToRender = filteredChildren;
    const exitingChildren = (0,react.useRef)(new Map()).current;
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    const presentChildren = (0,react.useRef)(childrenToRender);
    // A lookup table to quickly reference components by key
    const allChildren = (0,react.useRef)(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    const isInitialRender = (0,react.useRef)(true);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    useUnmountEffect(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exitingChildren.clear();
    });
    if (isInitialRender.current) {
        return (react.createElement(react.Fragment, null, childrenToRender.map((child) => (react.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child)))));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = [...childrenToRender];
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    const presentKeys = presentChildren.current.map(getChildKey);
    const targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    const numPresent = presentKeys.length;
    for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
            exitingChildren.set(key, undefined);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (mode === "wait" && exitingChildren.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exitingChildren.forEach((component, key) => {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        const child = allChildren.get(key);
        if (!child)
            return;
        const insertionIndex = presentKeys.indexOf(key);
        let exitingComponent = component;
        if (!exitingComponent) {
            const onExit = () => {
                allChildren.delete(key);
                exitingChildren.delete(key);
                // Remove this child from the present children
                const removeIndex = presentChildren.current.findIndex((presentChild) => presentChild.key === key);
                presentChildren.current.splice(removeIndex, 1);
                // Defer re-rendering until all exiting children have indeed left
                if (!exitingChildren.size) {
                    presentChildren.current = filteredChildren;
                    if (isMounted.current === false)
                        return;
                    forceRender();
                    onExitComplete && onExitComplete();
                }
            };
            exitingComponent = (react.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
            exitingChildren.set(key, exitingComponent);
        }
        childrenToRender.splice(insertionIndex, 0, exitingComponent);
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exitingChildren.has(key) ? (child) : (react.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    if (false) {}
    return (react.createElement(react.Fragment, null, exitingChildren.size
        ? childrenToRender
        : childrenToRender.map((child) => (0,react.cloneElement)(child))));
};




/***/ })

}]);
//# sourceMappingURL=587.bundle.js.map