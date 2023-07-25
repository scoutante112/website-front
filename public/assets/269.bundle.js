"use strict";
(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[269],{

/***/ 3269:
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
;// CONCATENATED MODULE: ./src/components/Account/License/AccountLicenseContainer.tsx










function AccountLicenseContainer() {
  const [ipData, setIpData] = (0,react.useState)(null);
  const {
    data,
    mutate,
    error,
    isLoading
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/license`, http/* fetcher */._i);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  console.log(data);
  document.title = 'Bagou450 - My license';
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavBarAccount/* default */.Z, {
    tab: 'licenses'
  }), /*#__PURE__*/react.createElement("section", {
    className: "mx-8 my-4"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "text-center text-xl my-6"
  }, "Please notice that these licenses are linked to your account. To transfer a license to another account, please ", /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: '/contact',
    className: "text-blue-500"
  }, "contact us"), "."), /*#__PURE__*/react.createElement("table", {
    className: "table w-full border-2 border-solid border-neutral"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null), /*#__PURE__*/react.createElement("th", null, "Product"), /*#__PURE__*/react.createElement("th", {
    className: 'hidden xl:block'
  }, "Ip"), /*#__PURE__*/react.createElement("th", null, "Usage"), /*#__PURE__*/react.createElement("th", null, "License"), /*#__PURE__*/react.createElement("th", {
    className: 'hidden 2xl:block'
  }, "Version"), /*#__PURE__*/react.createElement("th", null, "Action"))), /*#__PURE__*/react.createElement("tbody", null, data.data['license'].map(function (license, key) {
    return /*#__PURE__*/react.createElement("tr", {
      key: key
    }, /*#__PURE__*/react.createElement("th", null, key), /*#__PURE__*/react.createElement("td", null, license['product']), /*#__PURE__*/react.createElement("td", {
      className: 'hidden xl:block'
    }, license['ip'] ? license['ip'].length === 0 ? /*#__PURE__*/react.createElement("p", null, "No ip for this license.") : license['ip'].map(function (ip, key) {
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
      }, /*#__PURE__*/react.createElement("strong", null, "Country: "), ipData['country_name'], " ", /*#__PURE__*/react.createElement("img", {
        alt: "Flag",
        src: `https://flagcdn.com/w20/${ipData['country_code']}.webp`,
        className: 'mx-2'
      })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "City: "), ipData['city']), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Region: "), ipData['region']), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Asn: "), ipData['asn']), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("strong", null, "Org: "), ipData['org']), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("button", {
        className: "btn btn-outline btn-error border-0 mt-3",
        onClick: function () {
          licenses_deleteLicense(license['license'], ip).then(function () {
            mutate();
            react_toastify_esm/* toast */.Am.success(`${ip} was removed successfully.`, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark"
            });
          }).catch(function (e) {
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
        }
      }, "Delete"))) : /*#__PURE__*/react.createElement("p", null, "Loading...")));
    }) : /*#__PURE__*/react.createElement("p", null, "No ip for this license.")), /*#__PURE__*/react.createElement("td", null, license['usage'], "/", license['maxusage']), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("strong", null, license['license'])), /*#__PURE__*/react.createElement("td", {
      className: 'hidden 2xl:block'
    }, license['version']), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("button", {
      className: 'btn btn-primary btn-outline outline-0'
    }, "Buy usage"), " ", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
      className: 'btn mt-2 btn-error btn-outline outline-0'
    }, "Reset")));
  }))))), /*#__PURE__*/react.createElement("section", {
    className: "min-h-screen"
  }));
}

/***/ })

}]);
//# sourceMappingURL=269.bundle.js.map