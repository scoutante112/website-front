(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[885],{

/***/ 3885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TicketContainer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(9655);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var core_dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
// EXTERNAL MODULE: ./src/components/Account/NavBarAccount.tsx
var NavBarAccount = __webpack_require__(9911);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/debounce/index.js
var debounce = __webpack_require__(296);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
;// CONCATENATED MODULE: ./src/api/account/tickets/createTicket.ts


const createTicket = function (subject, message, account, license, attachments, logs_url) {
  const formData = new FormData();
  formData.append('subject', subject);
  formData.append('message', message);
  if (license) {
    formData.append('license', license);
  }
  if (logs_url) {
    formData.append('logs_url', logs_url);
  }
  if (attachments && attachments.length > 0) {
    attachments.forEach(function (file) {
      formData.append('attachments[]', file, file.name);
    });
  }
  if (account.discord) {
    if (account.discord.data) {
      formData.append('discord_user_id', account.discord.data.id);
    }
  }
  return new Promise(function (resolve, reject) {
    http/* httpMultipart */.Pg.post(`${config/* config */.v.privateapilink}/tickets`, formData).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const tickets_createTicket = (createTicket);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.esm.js
var fa6_index_esm = __webpack_require__(231);
;// CONCATENATED MODULE: ./src/components/Account/Ticket/TicketContainer.tsx















function TicketContainer() {
  const [loading, setLoading] = (0,react.useState)(false);
  const [sort, setSort] = (0,react.useState)('status');
  const [page, setPage] = (0,react.useState)(1);
  const [search, setSearch] = (0,react.useState)('');
  const [error, setError] = (0,react.useState)('');
  const [checked, setChecked] = (0,react.useState)(false);
  const [licenseChecked, setLicenseChecked] = (0,react.useState)(false);
  const [isChecked, setIsChecked] = (0,react.useState)(false);
  const [isHovered, setIsHovered] = (0,react.useState)(false);
  const navigate = (0,dist/* useNavigate */.s0)();
  const form = (0,index_esm/* object */.Ry)({
    subject: (0,index_esm/* string */.Z_)().required('The subject can\'t be empty.').min(16, 'The subject should have a minimum length of 16 characters').max(64, 'The subject should have a maximum length of 64 characters.'),
    message: (0,index_esm/* string */.Z_)().required('The message can\'t be empty').min(64, 'The message should have a minimum length of 64 characters'),
    license: (0,index_esm/* string */.Z_)().nullable(),
    attachments: (0,index_esm/* array */.IX)().of((0,index_esm/* mixed */.nK)()).nullable(),
    logs_url: (0,index_esm/* string */.Z_)().nullable('').url('Logs need to be a url!')
  });
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      subject: '',
      message: '',
      attachments: [],
      license: '',
      logs_url: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      values.attachments.map(function (file) {
        setError('');
        if (file.size > 8388608) {
          setError('Error: File size should be less than 8MB');
          setLoading(false);
          return null;
        }
        return null;
      });
      tickets_createTicket(values.subject, values.message, account, values.license, values.attachments, values.logs_url).then(function (data) {
        if (data.data.status === 'error') {
          setError(`Error: ${data.data.message}`);
          setLoading(false);
          return null;
        }
        setIsChecked(false);
        mutate();
        const inputs = document.querySelectorAll('input:not(#search)');
        const textareas = document.querySelectorAll('textarea');
        inputs.forEach(function (input) {
          input.value = '';
        });
        textareas.forEach(function (textarea) {
          textarea.value = '';
        });
        setLoading(false);
        react_toastify_esm/* toast */.Am.success(`Ticket created successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      }).catch(function (e) {
        setError(`Error: ${e.response.data.message}`);
        setLoading(false);
      });
    }
  });
  const {
    data,
    mutate,
    error: error3,
    isLoading
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/tickets?sort=${sort}&page=${page}&search=${search}`, http/* fetcher */._i);
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2
  } = (0,core_dist/* default */.ZP)(`${config/* config */.v.privateapilink}/auth/isLogged?infos=true`, http/* fetcher */._i);
  if (!data || error3 || isLoading || !data2 || error2 || isLoading2) {
    if (data2) {
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavBarAccount/* default */.Z, {
        tab: 'tickets'
      }), /*#__PURE__*/react.createElement("section", {
        className: "mx-8 my-4"
      }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
        className: "w-full max-w-7xl mx-auto mb-2 grid grid-cols-3 md:grid-cols-5 gap-x-2"
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        placeholder: "Search here",
        className: "input input-bordered input-md w-full col-span-3",
        defaultValue: search,
        onChange: function (e) {
          return searchValue(e.target.value);
        }
      }), /*#__PURE__*/react.createElement("select", {
        className: "select select-bordered w-full max-w-xs",
        onChange: function (e) {
          return setSort(e.target.value);
        }
      }, /*#__PURE__*/react.createElement("option", {
        value: "status",
        selected: true
      }, "Status"), /*#__PURE__*/react.createElement("option", {
        value: "asc_modified"
      }, "Modified (Ascending)"), /*#__PURE__*/react.createElement("option", {
        value: "desc_modified"
      }, "Modified (Descending)"), /*#__PURE__*/react.createElement("option", {
        value: "asc_created"
      }, "Created (Ascending)"), /*#__PURE__*/react.createElement("option", {
        value: "desc_created"
      }, "Created (Descending)")), /*#__PURE__*/react.createElement("p", {
        className: 'btn btn-primary btn-outline'
      }, "New ticket")), /*#__PURE__*/react.createElement(Loading["default"], null))), /*#__PURE__*/react.createElement("section", {
        className: "min-h-screen"
      }));
    }
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  const account = data2.data;
  document.title = 'Bagou450 - My Tickets';
  const searchValue = (0,debounce.debounce)(function (value) {
    setSearch(value);
    setPage(1);
  }, 500);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavBarAccount/* default */.Z, {
    tab: 'tickets'
  }), /*#__PURE__*/react.createElement("section", {
    className: "mx-8 my-4"
  }, /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    id: "new",
    className: "modal-toggle",
    checked: isChecked
  }), /*#__PURE__*/react.createElement("dialog", {
    id: "new",
    className: "modal modal-bottom sm:modal-middle"
  }, /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit,
    method: "dialog",
    className: "modal-box"
  }, /*#__PURE__*/react.createElement("div", {
    className: 'flex'
  }, /*#__PURE__*/react.createElement("h3", {
    className: "font-bold text-lg"
  }, "Create new ticket"), /*#__PURE__*/react.createElement(fa6_index_esm/* FaXmark */._0w, {
    className: `ml-auto text-xl transition-colors duration-200 mt-1 ${isHovered ? 'text-red-700' : ''}`,
    onMouseEnter: function () {
      return setIsHovered(true);
    },
    onMouseLeave: function () {
      return setIsHovered(false);
    },
    onClick: function () {
      return setIsChecked(false);
    }
  })), error && /*#__PURE__*/react.createElement("div", {
    className: "alert alert-error"
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
  })), /*#__PURE__*/react.createElement("span", null, error)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Subject")), /*#__PURE__*/react.createElement("input", {
    id: "subject",
    name: "subject",
    type: "subject",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full  mx-2"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.subject))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Message")), /*#__PURE__*/react.createElement("textarea", {
    placeholder: "Hello...",
    className: "textarea textarea-bordered textarea-lg w-full mx-2",
    id: "message",
    name: "message",
    onChange: formik.handleChange,
    disabled: loading
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.message))), /*#__PURE__*/react.createElement("div", {
    className: `grid grid-cols-2 gap-x-2`
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "License/Order ", /*#__PURE__*/react.createElement("div", {
    className: "badge badge-neutral my-auto ml-2"
  }, "Optional"))), /*#__PURE__*/react.createElement("input", {
    id: "license",
    name: "license",
    type: "license",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full  mx-2"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.license))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Logs Url ", /*#__PURE__*/react.createElement("div", {
    className: "badge badge-neutral my-auto ml-2"
  }, "Optional"))), /*#__PURE__*/react.createElement("input", {
    id: "logs_url",
    name: "logs_url",
    type: "logs_url",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full  mx-2"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.logs_url)))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Files ", /*#__PURE__*/react.createElement("div", {
    className: "badge badge-neutral my-auto ml-2"
  }, "Optional"))), /*#__PURE__*/react.createElement("input", {
    type: "file",
    className: "file-input file-input-bordered w-full mx-2",
    multiple: true,
    onChange: function (e) {
      const files = Array.from(e.target.files ? e.target.files : []);
      formik.setFieldValue('attachments', files);
    }
  }))), !formik.values.logs_url && /*#__PURE__*/react.createElement("label", {
    className: "cursor-pointer label mt-2"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "I acknowledge that not providing logs may limit the assistance", /*#__PURE__*/react.createElement("br", null), "I receive in most cases."), /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    checked: checked,
    className: "checkbox checkbox-secondary",
    onClick: function () {
      return setChecked(!checked);
    }
  })), !formik.values.license && /*#__PURE__*/react.createElement("label", {
    className: "cursor-pointer label mt-2"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "I acknowledge that not providing order/license may limit the assistance I receive in most cases."), /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    checked: licenseChecked,
    className: "checkbox checkbox-secondary",
    onClick: function () {
      return setLicenseChecked(!licenseChecked);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "modal-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-primary btn-outline mx-2 border-0",
    type: "submit",
    disabled: loading || !formik.dirty || !formik.isValid || !formik.values.logs_url && !checked || !formik.values.license && !licenseChecked
  }, "Create Ticket")))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "w-full max-w-7xl mx-auto mb-2 grid grid-cols-3 md:grid-cols-5 gap-x-2"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    id: 'search',
    defaultValue: search,
    placeholder: "Search here",
    className: `input input-bordered input-md w-full col-span-3 ${data.data.data.length < 1 ? 'disabled' : ''}`,
    onChange: function (e) {
      return searchValue(e.target.value);
    }
  }), /*#__PURE__*/react.createElement("select", {
    className: "select select-bordered w-full col-span-2 mt-2 md:col-span-1 md:max-w-xs md:mt-0",
    onChange: function (e) {
      return setSort(e.target.value);
    }
  }, /*#__PURE__*/react.createElement("option", {
    value: "status",
    selected: true
  }, "Status"), /*#__PURE__*/react.createElement("option", {
    value: "asc_modified"
  }, "Modified (Ascending)"), /*#__PURE__*/react.createElement("option", {
    value: "desc_modified"
  }, "Modified (Descending)"), /*#__PURE__*/react.createElement("option", {
    value: "asc_created"
  }, "Created (Ascending)"), /*#__PURE__*/react.createElement("option", {
    value: "desc_created"
  }, "Created (Descending)")), /*#__PURE__*/react.createElement("p", {
    className: 'btn btn-primary btn-outline mt-2 md:mt-0',
    onClick: function () {
      setIsChecked(true);
    }
  }, "New ticket")), data.data.data.length > 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("table", {
    className: "table w-full sm:table-xs md:table-sm lg:table-md max-w-screen-sm md:max-w-7xl mx-auto border-neutral-content dark:border-neutral border-2"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", {
    className: "w-full"
  }, /*#__PURE__*/react.createElement("th", {
    className: 'hidden xl:block'
  }, "Id"), /*#__PURE__*/react.createElement("th", null, "Name"), /*#__PURE__*/react.createElement("th", null, "Priority"), /*#__PURE__*/react.createElement("th", {
    className: 'hidden xl:block'
  }, "Status"), /*#__PURE__*/react.createElement("th", null, "Last Update"), /*#__PURE__*/react.createElement("th", {
    className: 'hidden md:table-column'
  }))), /*#__PURE__*/react.createElement("tbody", null, data.data.data.map(function (ticket, key) {
    return /*#__PURE__*/react.createElement("tr", {
      className: `w-full ${window.innerWidth < 768 ? 'cursor-pointer' : ''}`,
      key: key,
      onClick: window.innerWidth < 768 ? function () {
        return navigate(`/account/ticket/${ticket.id}`);
      } : function () {
        return null;
      }
    }, /*#__PURE__*/react.createElement("th", {
      className: 'hidden xl:table-cell'
    }, ticket.id), /*#__PURE__*/react.createElement("th", null, ticket.name), /*#__PURE__*/react.createElement("th", {
      className: ticket.priority === 'high' ? 'text-red-700' : ticket.priority === 'low' ? 'text-green-700' : ''
    }, ticket.priority[0].toUpperCase(), ticket.priority.slice(1, ticket.priority.length)), /*#__PURE__*/react.createElement("td", {
      className: 'hidden xl:table-cell' + (ticket.status === 'closed' ? ' text-red-700' : ticket.status === 'support_answer' ? ' text-green-700' : ' text-blue-700')
    }, ticket.status === 'closed' ? 'Closed' : ticket.status === 'support_answer' ? 'Answered by Support' : 'Answered by Client'), /*#__PURE__*/react.createElement("td", null, moment_default()(ticket.updated_at).fromNow()), window.innerWidth >= 768 ? /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.OL, {
      to: `/account/ticket/${ticket.id}`,
      className: 'hidden md:table-cell'
    }, /*#__PURE__*/react.createElement("td", {
      className: 'btn btn-primary btn-outline my-4'
    }, "View")) : null);
  })))) : /*#__PURE__*/react.createElement("p", {
    className: 'text-center opacity-80'
  }, "No tickets matching these parameters were found for this account."), /*#__PURE__*/react.createElement("div", {
    className: 'flex w-full max-w-7xl mx-auto'
  }, page > 1 && /*#__PURE__*/react.createElement("p", {
    className: 'btn btn-primary btn-outline my-4 ',
    onClick: function () {
      window.scrollTo(0, 0);
      setPage(page - 1);
    }
  }, "Previous page"), page < data.data.last_page && /*#__PURE__*/react.createElement("p", {
    className: 'btn btn-primary btn-outline my-4 text-right ml-auto',
    onClick: function () {
      window.scrollTo(0, 0);
      setPage(page + 1);
    }
  }, "Next page")))), /*#__PURE__*/react.createElement("section", {
    className: "min-h-screen"
  }));
}

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
//# sourceMappingURL=885.bundle.js.map