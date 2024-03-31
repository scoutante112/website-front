"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Contact_tsx"],{

/***/ "./src/api/sendcontact.ts":
/*!********************************!*\
  !*** ./src/api/sendcontact.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ "./src/api/http.ts");


const setndContact = function (firstname, lastname, email, message, society, phone) {
  return new Promise(function (resolve, reject) {
    _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/sendContact`, {
      firstname,
      lastname,
      email,
      phone,
      message,
      society
    }).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return reject(data);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setndContact);

/***/ }),

/***/ "./src/components/Contact.tsx":
/*!************************************!*\
  !*** ./src/components/Contact.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/BuildingOffice2Icon.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/PhoneIcon.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/esm/EnvelopeIcon.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _api_sendcontact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/sendcontact */ "./src/api/sendcontact.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App */ "./src/App.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");









const form = (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({
  firstname: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required('You need to enter your first name.'),
  lastname: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required('You need to enter your last name.'),
  email: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required('You need to enter your email.'),
  message: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required('You need to enter a message.'),
  phonenumber: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().optional(),
  society: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().optional()
});
function Contact() {
  document.title = 'Bagou450 - Contact';
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_5__.useDark)();
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      society: '',
      phonenumber: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      if ([values.firstname, values.lastname, values.email, values.message].includes('')) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('You need to fill all required field!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        return setLoading(false);
      }
      let society = null;
      let phonenumber = null;
      if (values.society !== '') {
        society = values.society;
      }
      if (values.phonenumber !== '') {
        phonenumber = values.phonenumber;
      }
      (0,_api_sendcontact__WEBPACK_IMPORTED_MODULE_4__["default"])(values.firstname, values.lastname, values.email, values.message, society, phonenumber).then(function (data) {
        if (data.data.status === 'success') {
          return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('Your message has been successfully sent. A member of our team will get in touch with you shortly.', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: dark ? 'dark' : 'light'
          });
        }
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-001', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        return setLoading(false);
      }).catch(function (e) {
        console.error(e);
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('An unexpected error occurred. Please contact an administrator. Code: BagAuth-001', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        return setLoading(false);
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "description",
    content: 'Have questions or need assistance? Contact Bagou450\'s support team at +33 (0)6 51 97 50 31 / +1 603-600-3503 or email contact@bagou450.com.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    name: "twitter:description",
    content: 'Have questions or need assistance? Contact Bagou450\'s support team at +33 (0)6 51 97 50 31 / +1 603-600-3503 or email contact@bagou450.com.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("meta", {
    property: "og:description",
    content: 'Have questions or need assistance? Contact Bagou450\'s support team at +33 (0)6 51 97 50 31 / +1 603-600-3503 or email contact@bagou450.com.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-lessdark' : 'bg-white'} relative isolate h-screen`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 lg:h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mx-auto max-w-xl lg:mx-0 lg:max-w-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-lessdark' : 'bg-gray-100'} absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-900/10 lg:w-1/2`
  }, !dark ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: "absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("pattern", {
    id: "83fd4e5a-9d52-42fc-97b6-718e5d7ee527",
    width: 200,
    height: 200,
    x: "100%",
    y: -1,
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M130 200V.5M.5 .5H200",
    fill: "none"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("rect", {
    width: "100%",
    height: "100%",
    strokeWidth: 0,
    fill: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    x: "100%",
    y: -1,
    className: "overflow-visible fill-gray-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M-470.5 0h201v201h-201Z",
    strokeWidth: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("rect", {
    width: "100%",
    height: "100%",
    strokeWidth: 0,
    fill: "url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2d67d3] to-[#224fa3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
    style: {
      clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-3xl font-bold tracking-tight`
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: `${dark ? 'text-slate-300' : 'text-gray-600'} mt-6 text-lg leading-8`
  }, "Do you have any questions or need assistance? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("br", null), "Don't hesitate to get in touch with our dedicated support team."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dl", {
    className: "mt-10 space-y-4 text-base leading-7 text-gray-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex gap-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dt", {
    className: "flex-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "h-7 w-6 text-gray-400",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
    href: 'https://maps.app.goo.gl/VXDEzSbwpMxVtqvm8',
    target: '_blank',
    rel: "noreferrer",
    className: dark ? 'text-slate-400' : 'text-gray-700'
  }, " 2 rue des orchid\xE9es", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("br", null), "35450 Dourdain, France"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex gap-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dt", {
    className: "flex-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Telephone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: `${dark ? 'text-slate-400' : 'text-gray-700'} h-7 w-6`,
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: dark ? 'text-slate-400' : 'text-gray-700'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
    href: "tel:+33651975031"
  }, "+33 (0)6 51 97 50 31"), " / ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
    href: "tel:+1 603-600-3503"
  }, "+1 603-600-3503")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex gap-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dt", {
    className: "flex-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: `${dark ? 'text-slate-400' : 'text-gray-700'} h-7 w-6`,
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
    className: dark ? 'text-slate-400' : 'text-gray-700',
    href: "mailto:contact@bagou450.com"
  }, "contact@bagou450.com")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
    action: "#",
    method: "POST",
    onSubmit: formik.handleSubmit,
    className: "px-6 pb-24 pt-12 sm:pb-32 lg:px-8 lg:py-48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mx-auto max-w-xl lg:mr-0 lg:max-w-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "firstname",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`
  }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    name: "firstname",
    onChange: formik.handleChange,
    id: "firstname",
    autoComplete: "given-name",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "lastname",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`
  }, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    name: "lastname",
    onChange: formik.handleChange,
    id: "lastname",
    autoComplete: "family-name",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "society",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`
  }, "Society (Optional)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    name: "society",
    onChange: formik.handleChange,
    id: "society",
    autoComplete: "society",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "email",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "email",
    name: "email",
    onChange: formik.handleChange,
    id: "email",
    autoComplete: "email",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "phonenumber",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`
  }, "Phone number (Optional)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "tel",
    name: "phonenumber",
    onChange: formik.handleChange,
    id: "phonenumber",
    autoComplete: "tel",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "message",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-bold`
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("textarea", {
    name: "message",
    onChange: formik.handleChange,
    id: "message",
    rows: 4,
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`,
    defaultValue: ''
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-8 flex justify-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "submit",
    disabled: loading,
    onClick: function () {
      if (formik.errors.firstname || formik.errors.lastname || formik.errors.message || formik.errors.email) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('You need to fill all required field!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
      }
    },
    className: ` rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${loading ? 'bg-b450-logodisabled' : 'bg-bg450-logo'}`
  }, "Send message")))))));
}

/***/ }),

/***/ "./node_modules/@heroicons/react/20/solid/esm/EnvelopeIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/20/solid/esm/EnvelopeIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function EnvelopeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EnvelopeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/BuildingOffice2Icon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/BuildingOffice2Icon.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function BuildingOffice2Icon({
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
    d: "M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(BuildingOffice2Icon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/PhoneIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/PhoneIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function PhoneIcon({
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
    d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PhoneIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_components_Contact_tsx.bundle.js.map