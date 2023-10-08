(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[124],{

/***/ 2124:
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
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/react-country-region-selector/dist/rcrs.es.js
var rcrs_es = __webpack_require__(1021);
// EXTERNAL MODULE: ./node_modules/debounce/index.js
var debounce = __webpack_require__(296);
// EXTERNAL MODULE: ./src/components/Elements/Pagination.tsx + 2 modules
var Pagination = __webpack_require__(6791);
;// CONCATENATED MODULE: ./src/components/Admin/Users/UsersContainer.tsx













function UsersContainer() {
  const [page, setPage] = (0,react.useState)(1);
  const [perpage] = (0,react.useState)(20);
  const [search, setSearch] = (0,react.useState)('');
  const {
    data,
    error,
    isLoading
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
function UserRow({
  user,
  index,
  page,
  perpage,
  search
}) {
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, http/* fetcher */._i);
  const [country, setCountry] = (0,react.useState)('');
  const [region, setRegion] = (0,react.useState)('');
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
      setLoading(true);
      if (region === '' || !region) {
        setLoading(false);
        return;
      }
      if (country === '' || !country) {
        setLoading(false);
        return;
      }
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
            theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
            theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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

/***/ 6791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Elements_Pagination)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/ArrowLongLeftIcon.js

function ArrowLongLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react.forwardRef(ArrowLongLeftIcon);
/* harmony default export */ const esm_ArrowLongLeftIcon = (ForwardRef);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/ArrowLongRightIcon.js

function ArrowLongRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z",
    clipRule: "evenodd"
  }));
}
const ArrowLongRightIcon_ForwardRef = react.forwardRef(ArrowLongRightIcon);
/* harmony default export */ const esm_ArrowLongRightIcon = (ArrowLongRightIcon_ForwardRef);
;// CONCATENATED MODULE: ./src/components/Elements/Pagination.tsx


const Pagination = function ({
  totalPages,
  page,
  setPage
}) {
  if (totalPages < 2) {
    return /*#__PURE__*/react.createElement(react.Fragment, null);
  }
  const visiblePages = 3;
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
        pages.push( /*#__PURE__*/react.createElement("button", {
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
          pages.push( /*#__PURE__*/react.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: "right-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: totalPages,
          className: `join-item btn ${totalPages === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(totalPages);
          }
        }, totalPages));
      } else if (currentPage > totalPages - visiblePages) {
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: 1,
          className: `join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(1);
          }
        }, 1));
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: "left-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        for (let i = totalPages - visiblePages; i <= totalPages; i++) {
          pages.push( /*#__PURE__*/react.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
      } else {
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: 1,
          className: `join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
          onClick: function () {
            return handlePageChange(1);
          }
        }, 1));
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: "left-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push( /*#__PURE__*/react.createElement("button", {
            key: i,
            className: `join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`,
            onClick: function () {
              return handlePageChange(i);
            }
          }, i));
        }
        pages.push( /*#__PURE__*/react.createElement("button", {
          key: "right-ellipsis",
          className: "join-item btn btn-disabled outline-0"
        }, ellipsis));
        pages.push( /*#__PURE__*/react.createElement("button", {
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
  const generatePageNumbers = function () {
    const currentPage = Math.max(1, Math.min(page, totalPages));
    const ellipsis = '...';
    let pageNumbers = [];
    if (totalPages <= visiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= visiblePages) {
        for (let i = 1; i <= visiblePages + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(0); // Placeholder for ellipsis
        pageNumbers.push(totalPages);
      } else if (currentPage > totalPages - visiblePages) {
        pageNumbers.push(1);
        pageNumbers.push(0); // Placeholder for ellipsis
        for (let i = totalPages - visiblePages; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push(0); // Placeholder for ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(0); // Placeholder for ellipsis
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };
  const pageNumbers = generatePageNumbers();
  return /*#__PURE__*/react.createElement("nav", {
    className: "flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mb-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "-mt-px flex w-0 flex-1 mx-2 lg:mx-8 xl:mx-16"
  }, /*#__PURE__*/react.createElement("button", {
    className: page === 1 ? "inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500" : "inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
    onClick: function () {
      return handlePageChange(page - 1);
    },
    disabled: page === 1
  }, /*#__PURE__*/react.createElement(esm_ArrowLongLeftIcon, {
    className: "mr-3 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), "Previous")), /*#__PURE__*/react.createElement("div", {
    className: "hidden md:-mt-px md:flex mx-2 lg:mx-8 xl:mx-16"
  }, pageNumbers.map(function (pageNumber, index) {
    if (pageNumber === 0) {
      return /*#__PURE__*/react.createElement("span", {
        key: `ellipsis-${index}`,
        className: "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
      }, "...");
    }
    return /*#__PURE__*/react.createElement("button", {
      key: pageNumber,
      className: `inline-flex items-center border-t-2 ${pageNumber === page ? 'border-indigo-500' : 'border-transparent'} px-4 pt-4 text-sm font-medium ${pageNumber === page ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`,
      onClick: function () {
        return handlePageChange(pageNumber);
      }
    }, pageNumber);
  })), /*#__PURE__*/react.createElement("div", {
    className: "-mt-px flex w-0 flex-1 justify-end mx-2 lg:mx-8 xl:mx-16"
  }, /*#__PURE__*/react.createElement("button", {
    className: page === totalPages ? "inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500" : "inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
    onClick: function () {
      return handlePageChange(page + 1);
    },
    disabled: page === totalPages
  }, "Next", /*#__PURE__*/react.createElement(esm_ArrowLongRightIcon, {
    className: "ml-3 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }))));
};
/* harmony default export */ const Elements_Pagination = (Pagination);

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