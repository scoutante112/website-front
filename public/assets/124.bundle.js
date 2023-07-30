(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[124],{

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

/***/ 486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UsersContainer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
// EXTERNAL MODULE: ./src/components/Account/NavBarAccount.tsx
var NavBarAccount = __webpack_require__(9911);
;// CONCATENATED MODULE: ./src/api/admin/users/editUser.ts


const editUser = function (id, name, email, society, address, city, country, region, postal_code, phone_number, firstname, lastname, role) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/admin/users/${id}`, {
      name,
      email,
      society,
      address,
      city,
      country,
      region,
      postal_code,
      phone_number,
      firstname,
      lastname,
      role
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const users_editUser = (editUser);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 56 modules
var formik_esm = __webpack_require__(3449);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/react-country-region-selector/dist/rcrs.es.js
var rcrs_es = __webpack_require__(1021);
// EXTERNAL MODULE: ./node_modules/debounce/index.js
var debounce = __webpack_require__(296);
// EXTERNAL MODULE: ./src/components/Elements/Pagination.tsx
var Pagination = __webpack_require__(447);
;// CONCATENATED MODULE: ./src/components/Admin/Users/UsersContainer.tsx













function UsersContainer() {
  const [page, setPage] = (0,react.useState)(1);
  const [perpage, setPerPage] = (0,react.useState)(20);
  const [search, setSearch] = (0,react.useState)('');
  const {
    data,
    error,
    isLoading,
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, http/* fetcher */._i);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  const searchValue = (0,debounce.debounce)(function (value) {
    setSearch(value);
    setPage(1);
  }, 500);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavBarAccount/* default */.Z, {
    tab: 'users'
  }), /*#__PURE__*/react.createElement("h1", {
    className: "text-center text-4xl my-2"
  }, "Users"), /*#__PURE__*/react.createElement("div", {
    className: "w-full max-w-7xl mx-auto mb-2"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    id: 'search',
    defaultValue: search,
    placeholder: "Search here",
    className: `input input-bordered input-md w-full `,
    onChange: function (e) {
      return searchValue(e.target.value);
    }
  })), /*#__PURE__*/react.createElement("table", {
    className: "table w-full max-w-7xl mx-auto border-neutral border-2"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null), /*#__PURE__*/react.createElement("th", null), /*#__PURE__*/react.createElement("th", null, "Username"), /*#__PURE__*/react.createElement("th", null, "First Name"), /*#__PURE__*/react.createElement("th", null, "Last Name"), /*#__PURE__*/react.createElement("th", null, "Email"), /*#__PURE__*/react.createElement("th", null, "Discord"), /*#__PURE__*/react.createElement("th", null, "Action"))), /*#__PURE__*/react.createElement("tbody", null, data.data.map(function (user, index) {
    return /*#__PURE__*/react.createElement(UserRow, {
      user: user,
      index: index,
      page: page,
      perpage: perpage,
      search: search
    });
  }))), /*#__PURE__*/react.createElement("div", {
    className: 'text-center mt-2'
  }, /*#__PURE__*/react.createElement(Pagination/* default */.Z, {
    totalPages: data.total,
    page: page,
    setPage: setPage
  })));
}
const UsersContainer_form = (0,index_esm/* object */.Ry)({
  name: (0,index_esm/* string */.Z_)().required(),
  email: (0,index_esm/* string */.Z_)().required(),
  phone_number: (0,index_esm/* string */.Z_)().optional().nullable(),
  role: (0,index_esm/* string */.Z_)().required(),
  society: (0,index_esm/* string */.Z_)().nullable(),
  address: (0,index_esm/* string */.Z_)().optional().nullable(),
  city: (0,index_esm/* string */.Z_)().optional().nullable(),
  firstname: (0,index_esm/* string */.Z_)().optional().nullable(),
  lastname: (0,index_esm/* string */.Z_)().optional().nullable(),
  postal_code: (0,index_esm/* string */.Z_)().optional().nullable().matches(/^\d{5}(?:[-\s]\d{4})?$/, 'The postal code is not correct.')
});
function UserRow(_ref) {
  let {
    user,
    index,
    page,
    perpage,
    search
  } = _ref;
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, http/* fetcher */._i);
  const [country, setCountry] = (0,react.useState)('');
  const [region, setRegion] = (0,react.useState)('');
  const [error, setError] = (0,react.useState)('');
  (0,react.useEffect)(function () {
    async function fetchRegion(data) {
      const response = await fetch('https://ipapi.co/json/');
      const responseData = await response.json();
      setCountry(responseData.country_name && data.data.country === '' ? responseData.country_name : data.data.country !== '' ? data.data.country : '');
      setRegion(responseData.region && data.data.region === '' ? responseData.region : data.data.region !== '' ? data.data.region : '');
    }
    formik.setValues({
      name: user.name ? user.name : '',
      email: user.email ? user.email : '',
      phone_number: user.phone_number ? user.phone_number : '',
      role: user.role ? `${user.role}` : '0',
      society: user.society ? user.society : '',
      address: user.address ? user.address : '',
      city: user.city ? user.city : '',
      postal_code: user.postal_code ? user.postal_code : '',
      lastname: user.lastname ? user.lastname : '',
      firstname: user.firstname ? user.firstname : ''
    });
    setCountry(user.country);
    setRegion(user.region);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCountryChange = function (value) {
    setCountry(value);
  };
  const handleRegionChange = function (value) {
    setRegion(value);
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      name: '',
      email: '',
      society: '',
      address: '',
      city: '',
      postal_code: '',
      firstname: '',
      lastname: '',
      phone_number: '',
      role: ''
    },
    validationSchema: UsersContainer_form,
    onSubmit: function (values) {
      console.log(values);
      setLoading(true);
      if (region === '' || !region) {
        setError('You need to select a State/Region');
        setLoading(false);
        return;
      }
      if (country === '' || !country) {
        setError('You need to select a Country');
        setLoading(false);
        return;
      }
      setError('');
      users_editUser(user.id, values.name, values.email, values.society, values.address, values.city, country, region, values.postal_code, values.phone_number, values.firstname, values.lastname, values.role).then(function (data) {
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
          setLoading(false);
        } else {
          mutate();
          react_toastify_esm/* toast */.Am.success('Success! Your informations was edited.', {
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
          // @ts-ignore
          window["edituserModal" + user.id].close();
        }
        setLoading(false);
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
    }
  });
  // @ts-ignore
  return /*#__PURE__*/react.createElement("tr", {
    key: index
  }, /*#__PURE__*/react.createElement("dialog", {
    id: "edituserModal" + user.id,
    className: "modal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal-box"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "font-bold text-lg"
  }, "Edit User (Admin):"), /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "grid md:grid-cols-2 gap-x-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mx-auto w-full max-w-sm"
  }, /*#__PURE__*/react.createElement("div", {
    className: 'grid grid-cols-1'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Society ", /*#__PURE__*/react.createElement("span", {
    className: "badge badge-outline"
  }, "optional"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.society))), /*#__PURE__*/react.createElement("input", {
    id: "society",
    name: "society",
    type: "society",
    defaultValue: user.society ? user.society : ''
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
    defaultValue: user.city,
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
  }, "Address")), /*#__PURE__*/react.createElement("input", {
    id: "address",
    name: "address",
    type: "address"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: user.address,
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
    defaultValue: user.postal_code
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
  }, formik.errors.postal_code))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Fist name")), /*#__PURE__*/react.createElement("input", {
    id: "firstname",
    name: "firstname",
    type: "firstname"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: user.firstname,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.firstname))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Last name")), /*#__PURE__*/react.createElement("input", {
    id: "lastname",
    name: "lastname",
    type: "lastname"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: user.lastname,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.lastname)))), /*#__PURE__*/react.createElement("div", {
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
  }, country === '' ? 'You need to select a country' : '')), /*#__PURE__*/react.createElement("div", {
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
  }, region === '' ? 'You need to select a region' : ''))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Username")), /*#__PURE__*/react.createElement("input", {
    id: "name",
    name: "name",
    type: "name"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: user.name,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.name))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Email")), /*#__PURE__*/react.createElement("input", {
    id: "email",
    name: "email",
    type: "email"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: user.email,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.email))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Phone Number")), /*#__PURE__*/react.createElement("input", {
    id: "phone_number",
    name: "phone_number",
    type: "phone_number"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    defaultValue: user.phone_number ? user.phone_number : '',
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.phone_number))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto "
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Role")), /*#__PURE__*/react.createElement("input", {
    id: "role",
    name: "role",
    type: "role"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    defaultValue: user.role,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.role)))), /*#__PURE__*/react.createElement("div", {
    className: "flex justify-end col-span-2 mx-4"
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    disabled: loading || formik.errors.postal_code ? true : formik.errors.address ? true : formik.errors.city ? true : formik.errors.firstname ? true : !!formik.errors.lastname,
    className: "btn btn-primary btn-outline outline-0 self-end mx-4"
  }, "Submit"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn",
    onClick: function () {
      // @ts-ignore
      window["edituserModal" + user.id].close();
    }
  }, "Close"))))), /*#__PURE__*/react.createElement("th", null, user.id), /*#__PURE__*/react.createElement("td", null, user.name), /*#__PURE__*/react.createElement("td", null, user.firstname), /*#__PURE__*/react.createElement("td", null, user.lastname), /*#__PURE__*/react.createElement("td", null, user.email), /*#__PURE__*/react.createElement("td", null, user.discord?.discord_id, " (", user.discord?.username, ")"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("button", {
    className: 'btn btn-primary btn-outline outline-0',
    onClick: function () {
      // @ts-ignore
      window["edituserModal" + user.id].showModal();
    }
  }, "Edit")));
}

/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

const Pagination = function (_ref) {
  let {
    totalPages,
    page,
    setPage
  } = _ref;
  const visiblePages = 3; // Number of visible pages on each side of the current page.

  const handlePageChange = function (newPage) {
    window.scrollTo(0, 0);
    setPage(newPage);
  };
  const renderPagination = function () {
    const currentPage = Math.max(1, Math.min(page, totalPages));
    const ellipsis = '...';
    let pages = [];
    if (totalPages <= visiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: i,
          className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(i);
          }
        }, i));
      }
    } else {
      if (currentPage <= visiblePages) {
        for (let i = 1; i <= visiblePages + 1; i++) {
          pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "right-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: totalPages,
          className: `join-item btn ${totalPages === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(totalPages);
          }
        }, totalPages));
      } else if (currentPage > totalPages - visiblePages) {
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: 1,
          className: `join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(1);
          }
        }, 1));
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "left-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        for (let i = totalPages - visiblePages; i <= totalPages; i++) {
          pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
      } else {
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: 1,
          className: `join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(1);
          }
        }, 1));
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "left-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: "right-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          key: totalPages,
          className: `join-item btn ${totalPages === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(totalPages);
          }
        }, totalPages));
      }
    }
    return pages;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "join"
  }, renderPagination());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

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
//# sourceMappingURL=124.bundle.js.map