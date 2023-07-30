(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[323],{

/***/ 1323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AccountContainer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var core_dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
;// CONCATENATED MODULE: ./src/api/account/editAccount.ts


const editAccount = function (data, type) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/account/edit`, {
      data,
      type
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const account_editAccount = (editAccount);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(1296);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
;// CONCATENATED MODULE: ./src/api/account/linkOauth.ts


const loginOauth = function (type) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/account/oauth`, {
      type
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const linkOauth = (loginOauth);
;// CONCATENATED MODULE: ./src/api/account/deleteOauth.ts


const deleteOauth = function (type) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.delete(`${config/* config */.v.privateapilink}/account/oauth`, {
      data: {
        type
      }
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const account_deleteOauth = (deleteOauth);
;// CONCATENATED MODULE: ./src/components/Account/Manager/Forms/EditAccountForm.tsx











const EditAccountForm_form = (0,index_esm/* object */.Ry)({
  email: (0,index_esm/* string */.Z_)().email('This is not a valid email.').required('')
});
/**const { mutate } = useSWR(
  `https://privateapi.bagou450.com/api/client/web/auth/isLogged`,
  fetcher
);**/
function EditAccountForm(_ref) {
  let {
    account
  } = _ref;
  const [loading, setLoading] = (0,react.useState)(false);
  const [error, showError] = (0,react.useState)();
  const [error2, showError2] = (0,react.useState)();
  const {
    mutate
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/auth/isLogged?infos=true`, http/* fetcher */._i);
  const changeEmail = lodash_debounce_default()(function (value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError('This email is invalid.');
      return;
    }
    showError('');
    if (value === account.email) {
      return;
    }
    setLoading(true);
    account_editAccount(value, 'email').then(function (data) {
      if (data.data['status'] === 'error') {
        react_toastify_esm/* toast */.Am.error(data.data['message'], {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      } else {
        react_toastify_esm/* toast */.Am.success('Success! Your email was edited.', {
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
      setLoading(false);
      mutate();
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
      setLoading(false);
    });
  }, 500);
  const changeUsername = lodash_debounce_default()(function (value) {
    if (value === '') {
      showError2('Can\'t use a empty username.');
      return;
    }
    showError2('');
    if (value === account.name) {
      return;
    }
    setLoading(true);
    account_editAccount(value, 'name').then(function (data) {
      if (data.data['status'] === 'error') {
        react_toastify_esm/* toast */.Am.error(data.data['message'], {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      } else {
        react_toastify_esm/* toast */.Am.success('Success! Your username was edited.', {
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
      setLoading(false);
      mutate();
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
      setLoading(false);
    });
  }, 500);
  return /*#__PURE__*/react.createElement("section", {
    className: "my-4 rounded-lg"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "text-2xl my-4 text-center"
  }, "Edit your address information"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Your Email")), /*#__PURE__*/react.createElement("input", {
    id: "email",
    name: "email",
    defaultValue: account.email,
    type: "email",
    disabled: loading,
    placeholder: "exemple@exemple.com",
    onChange: function (e) {
      return changeEmail(e.target.value);
    },
    required: true,
    className: "input input-bordered w-full mr-4"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, error))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Username")), /*#__PURE__*/react.createElement("input", {
    id: "name",
    name: "name",
    defaultValue: account.name,
    type: "name",
    disabled: loading,
    placeholder: "Bagou450",
    onChange: function (e) {
      return changeUsername(e.target.value);
    },
    required: true,
    className: "input input-bordered w-full mr-4"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, error2))), /*#__PURE__*/react.createElement("div", {
    className: 'grid grid-cols-1 gap-y-2 md:grid-cols-3 md:gap-x-2 md:gap-y-0'
  }, /*#__PURE__*/react.createElement(Discord, {
    account: account
  }), /*#__PURE__*/react.createElement(Google, {
    account: account
  }), /*#__PURE__*/react.createElement(Github, {
    account: account
  })));
}
function Discord(_ref2) {
  let {
    account
  } = _ref2;
  const discord = account.discord;
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,core_dist/* default */.ZP)(`https://privateapi.bagou450.com/api/client/web/auth/isLogged?infos=true`, http/* fetcher */._i);
  const discordLink = function () {
    setLoading(true);
    linkOauth('discord').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  const discordUnlink = function () {
    setLoading(true);
    account_deleteOauth('discord').then(function (data) {
      if (data.data['status'] === 'success') {
        react_toastify_esm/* toast */.Am.success(`You have unlinked your Discord account successfully!`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        mutate();
        setLoading(false);
      } else {
        react_toastify_esm/* toast */.Am.error(`Error: ${data.data['message']}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        mutate();
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: "text-2xl my-4 text-center"
  }, discord.status ? "Your Discord account" : "Link your Discord Account"), /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto text-center mt-4 flex space-x-8 w-full'
  }, discord.status ? /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
  }, /*#__PURE__*/react.createElement("img", {
    src: discord.data.avatar
  })))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: 'mt-2'
  }, discord.data.username, discord.data.discriminator !== '0' && `#${discord.data.discriminator}`), /*#__PURE__*/react.createElement("button", {
    className: "mt-2 btn btn-outline btn-error border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return discordUnlink();
    }
  }, "Unlink Discord account"))) : /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("button", {
    className: "mt-2 btn-neutral btn-outline btn border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return discordLink();
    }
  }, "Link Discord account"))));
}
function Google(_ref3) {
  let {
    account
  } = _ref3;
  const google = account.google;
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,core_dist/* default */.ZP)(`https://privateapi.bagou450.com/api/client/web/auth/isLogged?infos=true`, http/* fetcher */._i);
  const googleLink = function () {
    setLoading(true);
    linkOauth('google').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  const googleUnlink = function () {
    setLoading(true);
    account_deleteOauth('google').then(function (data) {
      if (data.data['status'] === 'success') {
        react_toastify_esm/* toast */.Am.success(`You have unlinked your Google account successfully!`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        mutate();
        setLoading(false);
      } else {
        react_toastify_esm/* toast */.Am.error(`Error: ${data.data['message']}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        mutate();
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: "text-2xl my-4 text-center"
  }, google.status ? "Your Google account" : "Link your Google Account"), /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto text-center mt-4 flex space-x-8 w-full'
  }, google.status ? /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
  }, /*#__PURE__*/react.createElement("img", {
    src: google.data.avatar
  })))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: 'mt-2'
  }, google.data.username), /*#__PURE__*/react.createElement("button", {
    className: "mt-2 btn btn-outline btn-error border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return googleUnlink();
    }
  }, "Unlink Google account"))) : /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("button", {
    className: "mt-2 btn-outline btn-neutral btn border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return googleLink();
    }
  }, "Link Google account"))));
}
function Github(_ref4) {
  let {
    account
  } = _ref4;
  const github = account.github;
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,core_dist/* default */.ZP)(`https://privateapi.bagou450.com/api/client/web/auth/isLogged?infos=true`, http/* fetcher */._i);
  const githubLink = function () {
    setLoading(true);
    linkOauth('github').then(function (data) {
      window.location.href = data.data.data.url;
    });
  };
  const githubUnlink = function () {
    setLoading(true);
    account_deleteOauth('github').then(function (data) {
      if (data.data['status'] === 'success') {
        react_toastify_esm/* toast */.Am.success(`You have unlinked your Github account successfully!`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        mutate();
        setLoading(false);
      } else {
        react_toastify_esm/* toast */.Am.error(`Error: ${data.data['message']}`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        mutate();
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: "text-2xl my-4 text-center"
  }, github.status ? "Your Github account" : "Link your Github Account"), /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto text-center mt-4 flex space-x-8 w-full'
  }, github.status ? /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
  }, /*#__PURE__*/react.createElement("img", {
    src: github.data.avatar
  })))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: 'mt-2'
  }, github.data.username, " ", github.data.plan === 'pro' && /*#__PURE__*/react.createElement("span", {
    className: "badge badge-secondary badge-outline mr-2"
  }, "Pro")), /*#__PURE__*/react.createElement("button", {
    className: "mt-2 btn btn-outline btn-error border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return githubUnlink();
    }
  }, "Unlink Github account"))) : /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("button", {
    className: "mt-2 btn-outline btn-neutral btn border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return githubLink();
    }
  }, "Link Github account"))));
}
// EXTERNAL MODULE: ./src/components/Account/Manager/Forms/EditAccountInfosForm.tsx + 1 modules
var EditAccountInfosForm = __webpack_require__(563);
// EXTERNAL MODULE: ./src/components/Account/NavBarAccount.tsx
var NavBarAccount = __webpack_require__(9911);
;// CONCATENATED MODULE: ./src/components/Account/Manager/AccountContainer.tsx









function AccountContainer() {
  const location = (0,dist/* useLocation */.TH)();
  const infos = location.pathname.startsWith('/account/manage');
  const {
    data,
    error,
    isLoading
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/auth/isLogged?infos=${infos}`, http/* fetcher */._i);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(react.Fragment, null);
  }
  const myaccount = {
    email: data.data.email,
    name: data.data.name,
    role: data.data.role,
    discord: data.data.discord,
    github: data.data.github,
    google: data.data.google
  };
  document.title = 'Bagou450 - My account';
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavBarAccount/* default */.Z, {
    tab: 'manage'
  }), /*#__PURE__*/react.createElement("section", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-x-4 mx-12"
  }, /*#__PURE__*/react.createElement(EditAccountForm, {
    account: myaccount
  }), /*#__PURE__*/react.createElement(EditAccountInfosForm/* default */.Z, null)), /*#__PURE__*/react.createElement("section", {
    className: "min-h-screen"
  }));
}

/***/ }),

/***/ 9911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavBarAccount)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9250);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9655);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9670);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3757);
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1229);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1412);






function NavBarAccount(tab) {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useLocation */ .TH)();
  const [admin, showAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(location.pathname.startsWith('/admin/'));
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(`${_config_config__WEBPACK_IMPORTED_MODULE_4__/* .config */ .v.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_1__/* .fetcher */ ._i);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-4xl my-4 text-center"
  }, "Hello, ", !data || error || isLoading ? 'User' : data.data.name[0].toUpperCase() + data.data.name.slice(1, data.data.name.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "mx-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "menu menu-horizontal rounded-box gap-x-2"
  }, !admin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'manage' ? 'bg-neutral-focus disabled' : '',
    to: '/account/manage'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  })), "Manage Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'licenses' ? 'bg-neutral-focus disabled' : '',
    to: '/account/licenses'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })), "Licenses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    to: '/account/orders',
    className: tab.tab === 'orders' ? 'bg-neutral-focus disabled' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  })), "Orders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'tickets' ? 'bg-neutral-focus disabled' : '',
    to: '/account/tickets'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-5 h-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })), "Tickets"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'users' ? 'bg-neutral-focus disabled' : '',
    to: '/admin/users'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: "w-5 h-5",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
  })), "Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'products' ? 'bg-neutral-focus disabled' : '',
    to: '/admin/products'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-5 h-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
  })), "Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'invoices' ? 'bg-neutral-focus disabled' : '',
    to: '/admin/invoices'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-5 h-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
  })), "Invoices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU, {
    className: tab.tab === 'blogs' ? 'bg-neutral-focus disabled' : '',
    to: '/admin/blogs'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    className: "w-5 h-5",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm5 3h6M7 10h10M7 14h10M7 18h7"
  })), "Blog"))), data.data.role ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    className: "toggle toggle-success ml-8 my-auto",
    checked: admin,
    onClick: function () {
      return showAdmin(!admin);
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mx-2 my-auto"
  }, "Show admin")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)), admin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-center text-red-500 text-xl font-semibold"
  }, "ADMINISTRATOR MODE")));
}

/***/ }),

/***/ 1296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ })

}]);
//# sourceMappingURL=323.bundle.js.map