"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[938,229],{

/***/ 1938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Register)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(9655);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var core_dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
;// CONCATENATED MODULE: ./src/api/auth/register.ts


const registerUser = function (email, name) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/auth/register`, {
      email,
      name
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const register = (registerUser);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
;// CONCATENATED MODULE: ./src/components/Auth/Register.tsx









const fetcher = function (url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};
const Register_form = (0,index_esm/* object */.Ry)({
  email: (0,index_esm/* string */.Z_)().email('This is not a valid email.').required('You need to enter a email.'),
  username: (0,index_esm/* string */.Z_)().required('You need to enter a username.')
});
function Register({
  setRegister,
  setLogin
}) {
  const [loading, setLoading] = (0,react.useState)(false);
  const [showerror, setError] = (0,react.useState)('');
  const [showmessage, setMessage] = (0,react.useState)('');
  const {
    data,
    error,
    isLoading
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/auth/isLogged`, fetcher);
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      email: '',
      username: ''
    },
    validationSchema: Register_form,
    onSubmit: function (values) {
      setLoading(true);
      register(values.email, values.username).then(function (data) {
        if (data.data['status'] === 'error') {
          setError(data.data['message']);
          setMessage('');
          setLoading(false);
        } else {
          setError('');
          setMessage('To complete the authentication process, please check your email and follow the instructions provided.');
        }
      }).catch(function () {
        setError('An unexcepted error happend. Please contact one of our support team.');
        setLoading(false);
      });
    }
  });
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  if (data['status'] === true) {
    return /*#__PURE__*/react.createElement(dist/* Navigate */.Fg, {
      to: "/"
    });
  }
  document.title = 'Bagou450 - Register';
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", {
    className: `text-center ${setRegister ? 'text-xl' : 'text-4xl my-4'}`
  }, "Register"), /*#__PURE__*/react.createElement("h2", {
    className: "text-2xl my-4 text-center text-red-500"
  }, showerror), /*#__PURE__*/react.createElement("h2", {
    className: "text-2xl my-4 text-center text-green-500"
  }, showmessage), /*#__PURE__*/react.createElement("section", {
    className: "my-4 text-center mx-auto"
  }, /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto text-center w-fit"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Username", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.username))), /*#__PURE__*/react.createElement("input", {
    id: "username",
    name: "username",
    type: "username",
    placeholder: "Bagouox",
    onChange: formik.handleChange,
    required: true,
    className: "input input-bordered input-info w-full max-w-xs"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto text-center w-fit"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Your Email", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.email))), /*#__PURE__*/react.createElement("input", {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "exemple@exemple.com",
    onChange: formik.handleChange,
    required: true,
    className: "input input-bordered input-info w-full  max-w-xs"
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-primary mt-4 w-full max-w-[16rem]",
    type: "submit",
    disabled: loading || formik.errors.email ? true : !!formik.errors.username
  }, "Submit"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", null, "You already have a account? ", setRegister && setLogin ? /*#__PURE__*/react.createElement("p", {
    className: 'text-blue-500 hover:underline',
    onClick: function () {
      setRegister(false);
      setLogin(true);
    }
  }, "Login now") : /*#__PURE__*/react.createElement(react_router_dom_dist/* Link */.rU, {
    to: "/login",
    className: "text-blue-500"
  }, "Login now")))), !setRegister && /*#__PURE__*/react.createElement("section", {
    className: "min-h-screen"
  }));
}

/***/ }),

/***/ 1229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=938.bundle.js.map