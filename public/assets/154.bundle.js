"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[154],{

/***/ 7170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1412);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9670);


const resetLicense = function (id) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .v.privateapilink}/admin/licenses/reset/${id}`).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return reject(data);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetLicense);

/***/ }),

/***/ 2154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AccountLicenseContainer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(9655);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var core_dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
;// CONCATENATED MODULE: ./src/api/licenses/deleteLicense.ts


const deleteLicense = function (licenseId, ip) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.delete(`${config/* config */.v.privateapilink}/license/${licenseId}`, {
      params: {
        ip
      }
    }).then(function () {
      return resolve();
    }).catch(reject);
  });
};
/* harmony default export */ const licenses_deleteLicense = (deleteLicense);
// EXTERNAL MODULE: ./src/components/Account/NavBarAccount.tsx
var NavBarAccount = __webpack_require__(9911);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
// EXTERNAL MODULE: ./src/api/admin/licenses/resetLicense.ts
var resetLicense = __webpack_require__(7170);
;// CONCATENATED MODULE: ./src/api/shop/createOrder.ts


const createOrder = function (products, extension) {
  const isExtension = extension ? 1 : 0;
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/orders`, {
      products,
      extension: isExtension
    }).then(function (data) {
      return resolve(data);
    }).catch(function (error) {
      return reject(error);
    });
  });
};
/* harmony default export */ const shop_createOrder = (createOrder);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
;// CONCATENATED MODULE: ./src/api/licenses/linkLicense.ts


const linkLicense = function (id) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/license/link/${id}`).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return reject(data);
    });
  });
};
/* harmony default export */ const licenses_linkLicense = (linkLicense);
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.esm.js
var fa6_index_esm = __webpack_require__(231);
;// CONCATENATED MODULE: ./src/components/Account/License/AccountLicenseContainer.tsx
















function AccountLicenseContainer() {
  const [loading, setLoading] = (0,react.useState)(false);
  const [isHovered, setHovered] = (0,react.useState)(false);
  const {
    data,
    mutate,
    error,
    isLoading
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/license`, http/* fetcher */._i);
  const form = (0,index_esm/* object */.Ry)({
    license: (0,index_esm/* string */.Z_)().required('You need to enter a license').min(8)
  });
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      license: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      licenses_linkLicense(values.license).then(function () {
        mutate();
        setLoading(false);
        react_toastify_esm/* toast */.Am.success(`License added successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        //@ts-ignore
        window.addlicense.close();
      }).catch(function (e) {
        react_toastify_esm/* toast */.Am.error(`Error: ${e.response.data.message}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        setLoading(false);
      });
    }
  });
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  document.title = "Bagou450 - My license";
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavBarAccount/* default */.Z, {
    tab: "licenses"
  }), /*#__PURE__*/react.createElement("section", {
    className: "mx-2 md:mx-8 my-4"
  }, /*#__PURE__*/react.createElement("dialog", {
    id: "addlicense",
    className: "modal"
  }, /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "modal-box"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "font-bold text-lg"
  }, "Add license"), /*#__PURE__*/react.createElement(fa6_index_esm/* FaXmark */._0w, {
    className: `ml-auto text-xl transition-colors duration-200 mt-1 absolute right-2 top-2 ${isHovered ? 'text-red-700' : ''}`,
    onMouseEnter: function () {
      return setHovered(true);
    },
    onMouseLeave: function () {
      return setHovered(false);
    },
    onClick: function () {
      //@ts-ignore
      window.addlicense.close();
    }
  }), /*#__PURE__*/react.createElement("h2", {
    className: 'opacity-80 text-sm'
  }, "You can link a already exist license to this account here."), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "License")), /*#__PURE__*/react.createElement("input", {
    id: "license",
    name: "license",
    type: "license",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full  mx-2"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.license))), /*#__PURE__*/react.createElement("div", {
    className: "modal-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-primary btn-outline mx-2 border-0",
    type: "submit",
    disabled: loading || !formik.dirty || !formik.isValid
  }, "Add license"))), /*#__PURE__*/react.createElement("form", {
    method: "dialog",
    className: "modal-backdrop"
  }, /*#__PURE__*/react.createElement("button", null, "close"))), /*#__PURE__*/react.createElement("div", null, data.data["license"].length > 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("p", {
    className: "text-center text-xl my-6"
  }, "Please notice that these licenses are linked to your account. To transfer a license to another account, please", " ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: "/contact",
    className: "text-blue-500"
  }, "contact us"), "."), /*#__PURE__*/react.createElement("div", {
    className: "alert my-4 mx-auto max-w-1/2"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    className: "stroke-info shrink-0 w-6 h-6"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })), /*#__PURE__*/react.createElement("span", null, "You have a US server? Consider using our US server instead of the European server. For more information, please ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: '/contact',
    className: 'text-blue-500'
  }, "contact us"), ".")), /*#__PURE__*/react.createElement("div", {
    className: 'text-right mb-4 mx-2 md:mx-8'
  }, /*#__PURE__*/react.createElement("button", {
    className: 'btn btn-wide btn-secondary btn-outline outline-0',
    onClick: function () {
      //@ts-ignore
      window.addlicense.showModal();
    }
  }, "Add license")), /*#__PURE__*/react.createElement("table", {
    className: "table w-full border-2 border-solid border-neutral-content dark:border-neutral"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    className: "hidden md:table-cell"
  }), /*#__PURE__*/react.createElement("th", null, "Product"), /*#__PURE__*/react.createElement("th", {
    className: "hidden xl:table-cell"
  }, "Ip"), /*#__PURE__*/react.createElement("th", null, "Usage"), /*#__PURE__*/react.createElement("th", {
    className: "hidden 2xl:table-cell"
  }, "License"), /*#__PURE__*/react.createElement("th", null, "Version"), /*#__PURE__*/react.createElement("th", null, "Action"))), /*#__PURE__*/react.createElement("tbody", null, data.data["license"].map(function (license, key) {
    return /*#__PURE__*/react.createElement(LicenseRow, {
      license: license,
      mutate: mutate,
      index: key
    });
  })))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: 'text-right mb-4 mx-2 md:mx-8'
  }, /*#__PURE__*/react.createElement("button", {
    className: 'btn btn-wide btn-secondary btn-outline outline-0',
    onClick: function () {
      //@ts-ignore
      window.addlicense.showModal();
    }
  }, "Add license")), /*#__PURE__*/react.createElement("p", {
    className: "text-center opacity-80"
  }, "No licenses found for this account.")))), /*#__PURE__*/react.createElement("section", {
    className: "min-h-screen"
  }));
}
function LicenseRow({
  license,
  mutate,
  index
}) {
  const [ipData, setIpData] = (0,react.useState)(null);
  const [loading, setLoading] = (0,react.useState)(false);
  const resettheLicense = function () {
    setLoading(true);
    (0,resetLicense/* default */.Z)(license.license).then(function () {
      mutate();
      react_toastify_esm/* toast */.Am.success('License has been reset successfully.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
      setLoading(false);
    }).catch(function () {
      react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
      setLoading(false);
    });
  };
  const buyUsage = function () {
    setLoading(true);
    shop_createOrder([license.product_id], true).then(function (data) {
      setLoading(false);
      if (data.data.status === 'success') {
        window.location.href = data.data.data;
      }
    }).catch(function () {
      setLoading(false);
      react_toastify_esm/* toast */.Am.error('An unexcepted error happend. Please contact one of our support team.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
    });
  };
  return /*#__PURE__*/react.createElement("tr", {
    key: index
  }, /*#__PURE__*/react.createElement("th", {
    className: "hidden md:table-cell"
  }, index), /*#__PURE__*/react.createElement("td", null, license["product"]), /*#__PURE__*/react.createElement("td", {
    className: "hidden xl:table-cell"
  }, license["ip"] ? license["ip"].length === 0 ? /*#__PURE__*/react.createElement("p", null, "No ip for this license.") : license["ip"].map(function (ip, key) {
    const handleMouseEnter = async function () {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      setIpData(data);
    };
    return /*#__PURE__*/react.createElement("div", {
      className: "dropdown dropdown-right dropdown-hover",
      key: key + 50
    }, /*#__PURE__*/react.createElement("label", {
      tabIndex: 0,
      className: "btn m-1 btn-neutral z-1",
      onMouseEnter: handleMouseEnter
    }, ip), /*#__PURE__*/react.createElement("ul", {
      tabIndex: 0,
      className: "dropdown-content p-2 shadow bg-base-100 rounded-box w-52 z-10"
    }, ipData ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("li", {
      className: "flex"
    }, /*#__PURE__*/react.createElement("strong", null, "Country: "), ipData["country_name"], " ", /*#__PURE__*/react.createElement("img", {
      alt: "Flag",
      src: `https://flagcdn.com/w20/${ipData["country_code"]}.webp`,
      className: "mx-2"
    })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "City: "), ipData["city"]), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Region: "), ipData["region"]), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Asn: "), ipData["asn"]), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Org: "), ipData["org"]), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("button", {
      className: "btn btn-outline btn-error border-0 mt-3",
      onClick: function () {
        licenses_deleteLicense(license["license"], ip).then(function () {
          mutate();
          react_toastify_esm/* toast */.Am.success(`${ip} was removed successfully.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          });
        }).catch(function () {
          react_toastify_esm/* toast */.Am.error("An unexcepted error happend. Please contact one of our support team.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          });
        });
      }
    }, "Delete"))) : /*#__PURE__*/react.createElement("p", null, "Loading...")));
  }) : /*#__PURE__*/react.createElement("p", {
    className: 'my-auto h-full'
  }, "No ip for this license.")), /*#__PURE__*/react.createElement("td", null, license["usage"], "/", license["maxusage"]), /*#__PURE__*/react.createElement("td", {
    className: "hidden 2xl:table-cell"
  }, /*#__PURE__*/react.createElement("strong", null, license["license"])), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", null, license["version"])), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-primary btn-outline outline-0",
    disabled: loading,
    onClick: function () {
      return buyUsage();
    }
  }, "Buy usage"), " ", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
    className: "btn mt-2 btn-error btn-outline outline-0",
    onClick: function () {
      return resettheLicense();
    },
    disabled: loading
  }, "Reset"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
    className: "btn mt-2 btn-secondary btn-outline outline-0 2xl:hidden",
    onClick: function () {
      navigator.clipboard.writeText(license['license']);
      react_toastify_esm/* toast */.Am.success('License copied in clipboard.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      });
    },
    disabled: loading
  }, "Copy License")));
}

/***/ })

}]);
//# sourceMappingURL=154.bundle.js.map