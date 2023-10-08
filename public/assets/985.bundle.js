"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[985],{

/***/ 3985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DiscordButton: () => (/* binding */ DiscordButton),
  GitHubButtonClick: () => (/* binding */ GitHubButtonClick),
  GoogleButtonClick: () => (/* binding */ GoogleButtonClick),
  LoginForm: () => (/* binding */ LoginForm),
  "default": () => (/* binding */ Login)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
;// CONCATENATED MODULE: ./src/api/auth/login.ts


const loginUser = function (email) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/auth/login`, {
      email
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const login = (loginUser);
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
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./src/api/auth/loginOauth.ts


const loginOauth = function (type) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/auth/oauthlogin`, {
      type
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const auth_loginOauth = (loginOauth);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
// EXTERNAL MODULE: ./node_modules/react-google-button/es/index.js
var es = __webpack_require__(6398);
;// CONCATENATED MODULE: ./src/components/Auth/Login.tsx












function Login({
  loginError
}) {
  const fetcher = function (url) {
    return fetch(url).then(function (res) {
      return res.json();
    });
  };
  const {
    data,
    error,
    isLoading
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/auth/isLogged`, fetcher);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  if (data['status'] === true) {
    return /*#__PURE__*/react.createElement(dist/* Navigate */.Fg, {
      to: "/"
    });
  }
  document.title = 'Bagou450 - Sign In';
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", {
    className: "text-4xl my-4 text-center"
  }, "Sign In"), loginError && /*#__PURE__*/react.createElement("div", {
    className: "alert alert-error mx-auto w-2/4 my-4"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "stroke-current shrink-0 h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  })), /*#__PURE__*/react.createElement("span", null, loginError)), /*#__PURE__*/react.createElement("section", {
    className: "my-4 text-center mx-auto"
  }, /*#__PURE__*/react.createElement(LoginForm, null)), /*#__PURE__*/react.createElement("section", {
    className: "my-4 text-center mx-auto"
  }, /*#__PURE__*/react.createElement("div", {
    className: "divider w-1/5 mx-auto"
  }, "OR"), /*#__PURE__*/react.createElement(DiscordButton, null), /*#__PURE__*/react.createElement(GoogleButtonClick, null), /*#__PURE__*/react.createElement(GitHubButtonClick, null)));
}
function LoginForm({
  setRegister,
  setLogin
}) {
  const form = (0,index_esm/* object */.Ry)({
    email: (0,index_esm/* string */.Z_)().email('This is not a valid email.').required('You need to enter a email.')
  });
  const [loading, setLoading] = (0,react.useState)(0);
  const [showerror, setError] = (0,react.useState)('');
  const [showmessage, setMessage] = (0,react.useState)('');
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      email: '',
      username: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(1);
      login(values.email).then(function (data) {
        if (data.data['status'] === 'error') {
          setError(data.data['message']);
          setMessage('');
          setLoading(3);
        } else {
          setError('');
          setLoading(2);
          setMessage('To complete the authentication process, please check your email and follow the instructions provided.');
        }
      }).catch(function () {
        setError('No account found with this email.');
        setLoading(3);
      });
    }
  });
  return /*#__PURE__*/react.createElement("div", null, showerror && /*#__PURE__*/react.createElement("div", {
    className: "alert alert-error mx-auto w-2/4 my-4"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "stroke-current shrink-0 h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  })), /*#__PURE__*/react.createElement("span", null, showerror)), showmessage && /*#__PURE__*/react.createElement("div", {
    className: "alert alert-success mx-auto w-2/4 my-4"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "stroke-current shrink-0 h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  })), /*#__PURE__*/react.createElement("span", null, showmessage)), /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("label", {
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
    className: `btn btn-outline mt-4 w-full max-w-[16rem] mb-4 ${loading === 0 || loading === 1 ? 'btn-primary  border-0' : loading === 2 ? 'btn-success' : 'btn-error '}`,
    type: "submit",
    disabled: !!(loading !== 0 || formik.errors.email)
  }, loading === 0 ? 'Sign in' : loading === 1 ? /*#__PURE__*/react.createElement("span", {
    className: "loading loading-spinner loading-sm text-secondary"
  }) : loading === 2 ? 'Success' : 'Error'), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", null, "You don't have a account? ", setRegister && setLogin ? /*#__PURE__*/react.createElement("p", {
    className: 'text-blue-500 hover:underline',
    onClick: function () {
      setRegister(true);
      setLogin(false);
    }
  }, "Register now") : /*#__PURE__*/react.createElement(react_router_dom_dist/* Link */.rU, {
    to: "/register",
    className: "text-blue-500 hover:underline"
  }, "Register now"))));
}
function DiscordButton() {
  const [loading, setLoading] = (0,react.useState)(false);
  const discordLogin = function () {
    setLoading(true);
    auth_loginOauth('discord').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  return /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("button", {
    className: `btn btn-neutral flex mx-auto`,
    disabled: loading,
    onClick: function () {
      return discordLogin();
    }
  }, /*#__PURE__*/react.createElement(fa_index_esm/* FaDiscord */.j2d, {
    size: '35px'
  }), " ", /*#__PURE__*/react.createElement("p", {
    className: 'my-auto mx-2 text-ml'
  }, loading ? /*#__PURE__*/react.createElement("span", {
    className: "loading loading-spinner loading-sm"
  }) : 'Sign in with Discord')));
}
function GoogleButtonClick() {
  const [loading, setLoading] = (0,react.useState)(false);
  const googleLogin = function () {
    setLoading(true);
    auth_loginOauth('google').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  return /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto mt-4'
  }, /*#__PURE__*/react.createElement(es/* default */.ZP, {
    className: 'mx-auto',
    type: "dark",
    disabled: loading,
    onClick: function () {
      return googleLogin();
    }
  }));
}
function GitHubButtonClick() {
  const [loading, setLoading] = (0,react.useState)(false);
  const githubLogin = function () {
    setLoading(true);
    auth_loginOauth('github').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  return /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto mt-4'
  }, /*#__PURE__*/react.createElement("button", {
    className: `btn flex mx-auto`,
    disabled: loading,
    onClick: function () {
      return githubLogin();
    }
  }, /*#__PURE__*/react.createElement(fa_index_esm/* FaGithub */.hJX, {
    size: '35px'
  }), " ", /*#__PURE__*/react.createElement("p", {
    className: 'my-auto mx-2 text-ml'
  }, loading ? /*#__PURE__*/react.createElement("span", {
    className: "loading loading-spinner loading-sm"
  }) : 'Sign in with GitHub')));
}

/***/ }),

/***/ 8246:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(7294));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _icons = __webpack_require__(4292);

var _styles = __webpack_require__(5004);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(GoogleButton, _PureComponent);

  var _super = _createSuper(GoogleButton);

  function GoogleButton() {
    var _this;

    _classCallCheck(this, GoogleButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hovered: false
    });

    _defineProperty(_assertThisInitialized(_this), "getStyle", function (propStyles) {
      var baseStyle = _this.props.type === 'dark' ? _styles.darkStyle : _styles.lightStyle;

      if (_this.state.hovered) {
        return _objectSpread({}, baseStyle, {}, _styles.hoverStyle, {}, propStyles);
      }

      if (_this.props.disabled) {
        return _objectSpread({}, baseStyle, {}, _styles.disabledStyle, {}, propStyles);
      }

      return _objectSpread({}, baseStyle, {}, propStyles);
    });

    _defineProperty(_assertThisInitialized(_this), "mouseOver", function () {
      if (!_this.props.disabled) {
        _this.setState({
          hovered: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseOut", function () {
      if (!_this.props.disabled) {
        _this.setState({
          hovered: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "click", function (e) {
      if (!_this.props.disabled) {
        _this.props.onClick(e);
      }
    });

    return _this;
  }

  _createClass(GoogleButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          style = _this$props.style,
          otherProps = _objectWithoutProperties(_this$props, ["label", "style"]);

      return /*#__PURE__*/_react.default.createElement("div", _extends({}, otherProps, {
        role: "button",
        onClick: this.click,
        style: this.getStyle(style),
        onMouseOver: this.mouseOver,
        onMouseOut: this.mouseOut
      }), /*#__PURE__*/_react.default.createElement(_icons.GoogleIcon, this.props), /*#__PURE__*/_react.default.createElement("span", null, label));
    }
  }]);

  return GoogleButton;
}(_react.PureComponent);

exports["default"] = GoogleButton;

_defineProperty(GoogleButton, "propTypes", {
  label: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  tabIndex: _propTypes.default.number,
  onClick: _propTypes.default.func,
  type: _propTypes.default.oneOf(['light', 'dark']),
  style: _propTypes.default.object
});

_defineProperty(GoogleButton, "defaultProps", {
  label: 'Sign in with Google',
  disabled: false,
  type: 'dark',
  tabIndex: 0,
  onClick: function onClick() {}
});

/***/ }),

/***/ 4292:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GoogleIcon = void 0;

var _react = _interopRequireDefault(__webpack_require__(7294));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _styles = __webpack_require__(5004);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var darkSvg = /*#__PURE__*/_react.default.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "46px",
  height: "46px",
  viewBox: "0 0 46 46",
  style: _styles.svgStyle
}, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("filter", {
  x: "-50%",
  y: "-50%",
  width: "200%",
  height: "200%",
  filterUnits: "objectBoundingBox",
  id: "filter-1"
}, /*#__PURE__*/_react.default.createElement("feOffset", {
  dx: "0",
  dy: "1",
  in: "SourceAlpha",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
  stdDeviation: "0.5",
  in: "shadowOffsetOuter1",
  result: "shadowBlurOuter1"
}), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",
  in: "shadowBlurOuter1",
  type: "matrix",
  result: "shadowMatrixOuter1"
}), /*#__PURE__*/_react.default.createElement("feOffset", {
  dx: "0",
  dy: "0",
  in: "SourceAlpha",
  result: "shadowOffsetOuter2"
}), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
  stdDeviation: "0.5",
  in: "shadowOffsetOuter2",
  result: "shadowBlurOuter2"
}), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",
  in: "shadowBlurOuter2",
  type: "matrix",
  result: "shadowMatrixOuter2"
}), /*#__PURE__*/_react.default.createElement("feMerge", null, /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "shadowMatrixOuter1"
}), /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "shadowMatrixOuter2"
}), /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "SourceGraphic"
}))), /*#__PURE__*/_react.default.createElement("rect", {
  id: "path-2",
  x: "0",
  y: "0",
  width: "40",
  height: "40",
  rx: "2"
}), /*#__PURE__*/_react.default.createElement("rect", {
  id: "path-3",
  x: "5",
  y: "5",
  width: "38",
  height: "38",
  rx: "1"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "Google-Button",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "9-PATCH",
  transform: "translate(-608.000000, -219.000000)"
}), /*#__PURE__*/_react.default.createElement("g", {
  id: "btn_google_dark_normal",
  transform: "translate(-1.000000, -1.000000)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button",
  transform: "translate(4.000000, 4.000000)",
  filter: "url(#filter-1)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button-bg"
}, /*#__PURE__*/_react.default.createElement("use", {
  fill: "#4285F4",
  fillRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}))), /*#__PURE__*/_react.default.createElement("g", {
  id: "button-bg-copy"
}, /*#__PURE__*/_react.default.createElement("use", {
  fill: "#FFFFFF",
  fillRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "logo_googleg_48dp",
  transform: "translate(15.000000, 15.000000)"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",
  id: "Shape",
  fill: "#4285F4"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",
  id: "Shape",
  fill: "#34A853"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",
  id: "Shape",
  fill: "#FBBC05"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",
  id: "Shape",
  fill: "#EA4335"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M0,0 L18,0 L18,18 L0,18 L0,0 Z",
  id: "Shape"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "handles_square"
}))));

var lightSvg = /*#__PURE__*/_react.default.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "46px",
  height: "46px",
  viewBox: "0 0 46 46",
  style: _styles.svgStyle
}, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("filter", {
  x: "-50%",
  y: "-50%",
  width: "200%",
  height: "200%",
  filterUnits: "objectBoundingBox",
  id: "filter-1"
}, /*#__PURE__*/_react.default.createElement("feOffset", {
  dx: "0",
  dy: "1",
  in: "SourceAlpha",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
  stdDeviation: "0.5",
  in: "shadowOffsetOuter1",
  result: "shadowBlurOuter1"
}), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",
  in: "shadowBlurOuter1",
  type: "matrix",
  result: "shadowMatrixOuter1"
}), /*#__PURE__*/_react.default.createElement("feOffset", {
  dx: "0",
  dy: "0",
  in: "SourceAlpha",
  result: "shadowOffsetOuter2"
}), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
  stdDeviation: "0.5",
  in: "shadowOffsetOuter2",
  result: "shadowBlurOuter2"
}), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",
  in: "shadowBlurOuter2",
  type: "matrix",
  result: "shadowMatrixOuter2"
}), /*#__PURE__*/_react.default.createElement("feMerge", null, /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "shadowMatrixOuter1"
}), /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "shadowMatrixOuter2"
}), /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "SourceGraphic"
}))), /*#__PURE__*/_react.default.createElement("rect", {
  id: "path-2",
  x: "0",
  y: "0",
  width: "40",
  height: "40",
  rx: "2"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "Google-Button",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "9-PATCH",
  transform: "translate(-608.000000, -160.000000)"
}), /*#__PURE__*/_react.default.createElement("g", {
  id: "btn_google_light_normal",
  transform: "translate(-1.000000, -1.000000)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button",
  transform: "translate(4.000000, 4.000000)",
  filter: "url(#filter-1)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button-bg"
}, /*#__PURE__*/_react.default.createElement("use", {
  fill: "#FFFFFF",
  fillRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}))), /*#__PURE__*/_react.default.createElement("g", {
  id: "logo_googleg_48dp",
  transform: "translate(15.000000, 15.000000)"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",
  id: "Shape",
  fill: "#4285F4"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",
  id: "Shape",
  fill: "#34A853"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",
  id: "Shape",
  fill: "#FBBC05"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",
  id: "Shape",
  fill: "#EA4335"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M0,0 L18,0 L18,18 L0,18 L0,0 Z",
  id: "Shape"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "handles_square"
}))));

var disabledSvg = /*#__PURE__*/_react.default.createElement("svg", {
  width: "46px",
  height: "46px",
  viewBox: "0 0 46 46",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  style: _styles.svgStyle
}, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("rect", {
  id: "path-1",
  x: "0",
  y: "0",
  width: "40",
  height: "40",
  rx: "2"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "Google-Button",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "9-PATCH",
  transform: "translate(-788.000000, -219.000000)"
}), /*#__PURE__*/_react.default.createElement("g", {
  id: "btn_google_dark_disabled",
  transform: "translate(-1.000000, -1.000000)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button",
  transform: "translate(4.000000, 4.000000)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button-bg"
}, /*#__PURE__*/_react.default.createElement("use", {
  fillOpacity: "0.08",
  fill: "#000000",
  fillRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}))), /*#__PURE__*/_react.default.createElement("path", {
  d: "M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",
  id: "Shape-Copy",
  fillOpacity: "0.4",
  fill: "#000000"
}), /*#__PURE__*/_react.default.createElement("g", {
  id: "handles_square"
}))));

var GoogleIcon = function GoogleIcon(_ref) {
  var disabled = _ref.disabled,
      type = _ref.type;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: !disabled ? _styles.iconStyle : _objectSpread({}, _styles.iconStyle, {}, _styles.disabledIconStyle)
  }, !disabled ? type === 'dark' ? darkSvg : lightSvg : disabledSvg);
};

exports.GoogleIcon = GoogleIcon;
GoogleIcon.propTypes = {
  disabled: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['light', 'dark'])
};
GoogleIcon.defaultProps = {
  type: 'dark'
};

/***/ }),

/***/ 6398:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _GoogleButton2.default;
  }
});
Object.defineProperty(exports, "ZP", ({
  enumerable: true,
  get: function get() {
    return _GoogleButton2.default;
  }
}));

var _GoogleButton2 = _interopRequireDefault(__webpack_require__(8246));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 5004:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.disabledIconStyle = exports.disabledStyle = exports.hoverStyle = exports.svgStyle = exports.iconStyle = exports.lightStyle = exports.darkStyle = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyle = {
  height: '50px',
  width: '240px',
  border: 'none',
  textAlign: 'center',
  verticalAlign: 'center',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
  fontSize: '16px',
  lineHeight: '48px',
  display: 'block',
  borderRadius: '1px',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s',
  fontFamily: 'Roboto,arial,sans-serif',
  cursor: 'pointer',
  userSelect: 'none'
};

var darkStyle = _objectSpread({
  backgroundColor: '#4285f4',
  color: '#fff'
}, baseStyle);

exports.darkStyle = darkStyle;

var lightStyle = _objectSpread({
  backgroundColor: '#fff',
  color: 'rgba(0,0,0,.54)'
}, baseStyle);

exports.lightStyle = lightStyle;
var iconStyle = {
  width: '48px',
  height: '48px',
  textAlign: 'center',
  verticalAlign: 'center',
  display: 'block',
  marginTop: '1px',
  marginLeft: '1px',
  float: 'left',
  backgroundColor: '#fff',
  borderRadius: '1px',
  whiteSpace: 'nowrap'
};
exports.iconStyle = iconStyle;
var svgStyle = {
  width: '48px',
  height: '48px',
  display: 'block'
};
exports.svgStyle = svgStyle;
var hoverStyle = {
  boxShadow: '0 0 3px 3px rgba(66,133,244,.3)',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s'
}; // export const pressedStyle = {
//   backgroundColor: '#3367D6'
// }

exports.hoverStyle = hoverStyle;
var disabledStyle = {
  backgroundColor: 'rgba(37, 5, 5, .08)',
  color: 'rgba(0, 0, 0, .40)',
  cursor: 'not-allowed'
};
exports.disabledStyle = disabledStyle;
var disabledIconStyle = {
  backgroundColor: 'transparent'
};
exports.disabledIconStyle = disabledIconStyle;

/***/ })

}]);
//# sourceMappingURL=985.bundle.js.map