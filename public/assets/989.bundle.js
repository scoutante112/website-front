(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[989],{

/***/ 7989:
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










function EditAccountForm({
  account
}) {
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      }
      setLoading(false);
      mutate();
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      }
      setLoading(false);
      mutate();
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
function Discord({
  account
}) {
  const discord = account.discord;
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,core_dist/* default */.ZP)(`https://beta-api.bagou450.com/api/client/web/auth/isLogged?infos=true`, http/* fetcher */._i);
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
    alt: 'Discord avatar',
    src: discord.data.avatar
  })))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: 'mt-2'
  }, discord.data.username, discord.data.discriminator !== '0' && `#${discord.data.discriminator}`), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-error border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return discordUnlink();
    }
  }, "Unlink Discord account"))) : /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn-neutral btn-outline btn border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return discordLink();
    }
  }, "Link Discord account"))));
}
function Google({
  account
}) {
  const google = account.google;
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,core_dist/* default */.ZP)(`https://beta-api.bagou450.com/api/client/web/auth/isLogged?infos=true`, http/* fetcher */._i);
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
    alt: 'Google Avatar',
    src: google.data.avatar
  })))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: 'mt-2'
  }, google.data.username), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-error border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return googleUnlink();
    }
  }, "Unlink Google account"))) : /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn-outline btn-neutral btn border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return googleLink();
    }
  }, "Link Google account"))));
}
function Github({
  account
}) {
  const github = account.github;
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,core_dist/* default */.ZP)(`https://beta-api.bagou450.com/api/client/web/auth/isLogged?infos=true`, http/* fetcher */._i);
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
    alt: 'Github Avatar',
    src: github.data.avatar
  })))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: 'mt-2'
  }, github.data.username, " ", github.data.plan === 'pro' && /*#__PURE__*/react.createElement("span", {
    className: "badge badge-secondary badge-outline mr-2"
  }, "Pro")), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-error border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return githubUnlink();
    }
  }, "Unlink Github account"))) : /*#__PURE__*/react.createElement("div", {
    className: 'mx-auto'
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn-outline btn-neutral btn border-0 mt-4",
    disabled: loading,
    onClick: function () {
      return githubLink();
    }
  }, "Link Github account"))));
}
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/react-country-region-selector/dist/rcrs.es.js
var rcrs_es = __webpack_require__(1021);
;// CONCATENATED MODULE: ./src/api/account/editAccountInformations.ts


const editAccountInfos = function (society, address, city, region, postalcode, country, firstname, lastname) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/account/editinfos`, {
      society,
      address,
      city,
      region,
      postalcode,
      country,
      firstname,
      lastname
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const editAccountInformations = (editAccountInfos);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
;// CONCATENATED MODULE: ./src/components/Account/Manager/Forms/EditAccountInfosForm.tsx











const EditAccountInfosForm_form = (0,index_esm/* object */.Ry)({
  society: (0,index_esm/* string */.Z_)().nullable(),
  address: (0,index_esm/* string */.Z_)().required(""),
  city: (0,index_esm/* string */.Z_)().required(""),
  firstname: (0,index_esm/* string */.Z_)().required(""),
  lastname: (0,index_esm/* string */.Z_)().required(""),
  postalcode: (0,index_esm/* string */.Z_)().required("").matches(/^\d{5}(?:[-\s]\d{4})?$/, "The postal code is not correct.")
});
function EditAccountInfosForm({
  setAddress
}) {
  const [loading, setLoading] = (0,react.useState)(false);
  const [country, setCountry] = (0,react.useState)("");
  const [region, setRegion] = (0,react.useState)("");
  const [error, setError] = (0,react.useState)("");
  const {
    data,
    error: erros,
    isLoading,
    mutate
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/account/getinfos`, http/* fetcher */._i);
  (0,react.useEffect)(function () {
    async function fetchRegion(data) {
      const response = await fetch("https://ipapi.co/json/");
      const responseData = await response.json();
      setCountry(responseData.country_name && data.data.country === "" ? responseData.country_name : data.data.country !== "" ? data.data.country : "");
      setRegion(responseData.region && data.data.region === "" ? responseData.region : data.data.region !== "" ? data.data.region : "");
    }
    if (data && !erros && !isLoading) {
      formik.setValues({
        society: data.data.society,
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
    validationSchema: EditAccountInfosForm_form,
    onSubmit: function (values) {
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
      editAccountInformations(values.society, values.address, values.city, region, values.postalcode, country, values.firstname, values.lastname).then(function (data) {
        if (data.data["status"] === "error") {
          react_toastify_esm/* toast */.Am.error(data.data["message"], {
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
          react_toastify_esm/* toast */.Am.success("Success! Your informations was edited.", {
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
          if (setAddress) {
            setAddress(false);
          }
        }
        setLoading(false);
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
        setLoading(false);
      });
    }
  });
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  return /*#__PURE__*/react.createElement("section", {
    className: "my-4 rounded-lg"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "text-2xl my-4 text-center"
  }, "Edit your account informations"), /*#__PURE__*/react.createElement("div", {
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
    className: "lg:grid lg:grid-cols-2 gap-x-4"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
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
    defaultValue: data.data.society
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full"
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
    defaultValue: data.data.city ? data.data.city : "",
    name: "city",
    type: "city"
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full"
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
    defaultValue: data.data.address ? data.data.address : "",
    className: "input input-bordered w-full"
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
    defaultValue: data.data.postal_code ? data.data.postal_code : ""
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ,
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.postalcode))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label mx-auto"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Country")), /*#__PURE__*/react.createElement(rcrs_es/* CountryDropdown */.Px, {
    id: "country",
    name: "country",
    value: country,
    onChange: handleCountryChange,
    disabled: loading,
    classes: "input w-full input-bordered"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, country === "" ? "You need to select a country" : ""))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
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
    classes: "input w-full input-bordered"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, region === "" ? "You need to select a region" : ""))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
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
    defaultValue: data.data.firstname ? data.data.firstname : "",
    className: "input input-bordered w-full"
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
    defaultValue: data.data.lastname ? data.data.lastname : "",
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.lastname))), /*#__PURE__*/react.createElement("div", {
    className: "flex justify-end col-span-2 mx-2"
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    disabled: loading || formik.errors.postalcode ? true : formik.errors.address ? true : formik.errors.city ? true : formik.errors.firstname ? true : !!formik.errors.lastname,
    className: "btn btn-primary btn-outline border-0 w-full lg:max-w-sm my-4 self-end "
  }, "Submit"))));
}
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
  }), /*#__PURE__*/react.createElement(EditAccountInfosForm, null)), /*#__PURE__*/react.createElement("section", {
    className: "min-h-screen"
  }));
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
//# sourceMappingURL=989.bundle.js.map