"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Account_Ticket_TicketContainer_tsx"],{

/***/ "./src/api/account/tickets/createTicket.ts":
/*!*************************************************!*\
  !*** ./src/api/account/tickets/createTicket.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http */ "./src/api/http.ts");


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
    _http__WEBPACK_IMPORTED_MODULE_1__.httpMultipart.post(`${_config_config__WEBPACK_IMPORTED_MODULE_0__.config.privateapilink}/tickets`, formData).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTicket);

/***/ }),

/***/ "./src/components/Account/Ticket/CreateTicketForm.tsx":
/*!************************************************************!*\
  !*** ./src/components/Account/Ticket/CreateTicketForm.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTicketForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/DocumentIcon.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/XCircleIcon.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/esm/XMarkIcon.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _api_account_tickets_createTicket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/account/tickets/createTicket */ "./src/api/account/tickets/createTicket.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");








function formatFileSize(sizeInBytes) {
  const sizes = ['B', 'KB', 'MB'];
  let i = 0;
  while (sizeInBytes > 1024 && i < sizes.length - 1) {
    sizeInBytes /= 1024;
    i++;
  }
  return `${Math.round(sizeInBytes * 100) / 100} ${sizes[i]}`;
}
function CreateTicketForm({
  setOpen,
  mutate,
  account
}) {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_5__.useDark)();
  const [licenseChecked, setLicenseChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const form = (0,yup__WEBPACK_IMPORTED_MODULE_1__.object)({
    subject: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required('The subject can\'t be empty.').min(16, 'The subject should have a minimum length of 16 characters').max(64, 'The subject should have a maximum length of 64 characters.'),
    message: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().required('The message can\'t be empty').min(64, 'The message should have a minimum length of 64 characters'),
    license: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().nullable(),
    attachments: (0,yup__WEBPACK_IMPORTED_MODULE_1__.array)().of((0,yup__WEBPACK_IMPORTED_MODULE_1__.mixed)()).nullable(),
    logs_url: (0,yup__WEBPACK_IMPORTED_MODULE_1__.string)().nullable('').url('Logs need to be a url!')
  });
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
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
      if (!values.license && !licenseChecked || !values.logs_url && !checked) {
        setError('Error: All checkbox need to be checked');
        setLoading(false);
        return null;
      }
      (0,_api_account_tickets_createTicket__WEBPACK_IMPORTED_MODULE_3__["default"])(values.subject, values.message, account, values.license, values.attachments, values.logs_url).then(function (data) {
        if (data.data.status === 'error') {
          setError(`Error: ${data.data.message}`);
          setLoading(false);
          return null;
        }
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
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Ticket created successfully.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: dark ? 'dark' : 'light'
        });
        setOpen(false);
      }).catch(function (e) {
        setError(`Error: ${e.response.data.message}`);
        setLoading(false);
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'bg-bg450-dark' : 'bg-white'} shadow sm:rounded-lg mt-4`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-4 py-5 sm:p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`
  }, "Create a ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "mt-5 sm:items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-full sm:max-w-xs my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "subject",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm font-medium leading-6`
  }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    name: "subject",
    onChange: formik.handleChange,
    disabled: loading,
    id: "subject",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`,
    placeholder: "A problem with the product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-full my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "comment",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm font-medium leading-6`
  }, "Your message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("textarea", {
    rows: 4,
    name: "message",
    onChange: formik.handleChange,
    disabled: loading,
    id: "message",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`,
    defaultValue: ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'flex justify-between my-2 gap-x-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-full sm:max-w-xs "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "subject",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm font-medium leading-6`
  }, "License/Order ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: `${dark ? 'bg-bg450-logohover text-white' : 'bg-gray-50 text-gray-600'} my-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10`
  }, "Optional")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    name: "license",
    onChange: formik.handleChange,
    disabled: loading,
    id: "license",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-full sm:max-w-xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "subject",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} my-2 block text-sm font-medium leading-6`
  }, "Logs Url ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: `${dark ? 'bg-bg450-logohover text-white' : 'bg-gray-50 text-gray-600'}inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10`
  }, "Optional")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    name: "logs_url",
    onChange: formik.handleChange,
    disabled: loading,
    id: "logs_url",
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "col-span-full my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "cover-photo",
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm font-medium leading-6`
  }, "Add documents", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: `${dark ? 'bg-bg450-logohover text-white' : 'bg-gray-50 text-gray-600'} my-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10`
  }, "Optional")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: `${dark ? 'border-b450-logo' : 'border-gray-900/25'} mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed  px-6 py-10 space-y-4`,
    id: "file-drop-area",
    onDragOver: function (e) {
      e.preventDefault();
    },
    onDragLeave: function (e) {
      e.preventDefault();
    },
    onDrop: function (e) {
      e.preventDefault();
      const newFiles = Array.from(e.dataTransfer.files ? e.dataTransfer.files : []);
      const updatedAttachments = [...formik.values.attachments, ...newFiles];
      formik.setFieldValue('attachments', updatedAttachments);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "mx-auto h-12 w-12 text-gray-300",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "file-upload",
    className: `${dark ? 'text-bg450-logo hover:text-bg450-logohover' : 'text-indigo-600 hover:text-indigo-500'} relative cursor-pointer rounded-md font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-bg450-logo focus-within:ring-offset-2 `
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Upload a file"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    id: "file-upload",
    name: "file-upload",
    type: "file",
    className: "sr-only",
    multiple: true,
    onChange: function (e) {
      const newFiles = Array.from(e.target.files ? e.target.files : []);
      const updatedAttachments = [...formik.values.attachments, ...newFiles];
      formik.setFieldValue('attachments', updatedAttachments);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "pl-1 my-auto"
  }, "or drag and drop"))), formik.values.attachments.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: " my-2 block text-sm font-medium leading-6 text-gray-900"
  }, "Selected Files:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("ul", {
    role: "file-list",
    className: "grid md:grid-cols-3 justify-between gap-x-2 gap-y-2"
  }, formik.values.attachments.map(function (file, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("li", {
      key: index,
      className: "col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "flex w-full items-center justify-between space-x-6 p-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "flex-1 truncate"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
      className: "truncate text-sm font-medium text-gray-900"
    }, file.name.slice(0, 22), file.name.length > 22 && '...'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: `inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium   ring-1 ring-inset ${file.size > 8388608 ? 'text-red-700  bg-red-50 ring-red-600/20' : file.size > 7340032 ? 'text-orange-700  bg-orange-50 ring-orange-600/20' : 'text-green-700  bg-green-50 ring-green-600/20'}`
    }, formatFileSize(file.size)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: 'text-red-500 rounded-full border-2 border-red-500 w-6 h-6',
      onClick: function () {
        const updatedAttachments = [...formik.values.attachments];
        updatedAttachments.splice(index, 1);
        formik.setFieldValue('attachments', updatedAttachments);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'gap-y-2 my-2'
  }, !formik.values.logs_url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-full "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative flex items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex h-6 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    id: "logs",
    "aria-describedby": "comments-description",
    name: "No logsUrl",
    type: "checkbox",
    checked: checked,
    onClick: function () {
      return setChecked(!checked);
    },
    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "ml-3 text-sm leading-6 lg:flex gap-x-2",
    onClick: function () {
      return setChecked(!checked);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "comments",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} font-medium`
  }, "No logs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    id: "comments-description",
    className: `${dark ? 'text-slate-300' : 'text-gray-500'} my-auto`
  }, "I acknowledge that not providing logs may limit the assistance I receive in most cases.")))), !formik.values.license && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "w-full "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative flex items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex h-6 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    id: "nolicense",
    "aria-describedby": "comments-description",
    name: "No license/order",
    type: "checkbox",
    checked: licenseChecked,
    onClick: function () {
      return setLicenseChecked(!licenseChecked);
    },
    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "ml-3 text-sm leading-6 lg:flex gap-x-2",
    onClick: function () {
      return setLicenseChecked(!licenseChecked);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "comments",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} font-medium`
  }, "No license/order"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    id: "comments-description",
    className: `${dark ? 'text-slate-300' : 'text-gray-500'} my-auto`
  }, "I acknowledge that not providing order/license may limit the assistance I receive in most cases."))))), Object.keys(formik.errors).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "rounded-md bg-red-50 p-4 my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "h-5 w-5 text-red-400",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "ml-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: "text-sm font-medium text-red-800"
  }, "There were ", Object.keys(formik.errors).length, " errors with your submission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-2 text-sm text-red-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("ul", {
    role: "list",
    className: "list-disc space-y-1 pl-5"
  }, Object.values(formik.errors).map(function (error, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("li", {
      key: index
    }, error);
  })))))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "rounded-md bg-red-50 p-4 my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "h-5 w-5 text-red-400",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "ml-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: "text-sm font-medium text-red-800"
  }, " ", error)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "submit",
    disabled: loading,
    className: 'rounded-md bg-bg450-logo px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled'
  }, "Save")))));
}

/***/ }),

/***/ "./src/components/Account/Ticket/TicketContainer.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Account/Ticket/TicketContainer.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TicketContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/http */ "./src/api/http.ts");
/* harmony import */ var _Elements_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Elements/Loading */ "./src/components/Elements/Loading.tsx");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/config */ "./src/config/config.ts");
/* harmony import */ var _AccountRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../AccountRouter */ "./src/components/Account/AccountRouter.tsx");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/ChevronUpDownIcon.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../NavBar */ "./src/components/NavBar.tsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ArrowDownCircleIcon.js");
/* harmony import */ var _CreateTicketForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CreateTicketForm */ "./src/components/Account/Ticket/CreateTicketForm.tsx");
/* harmony import */ var _TicketRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TicketRow */ "./src/components/Account/Ticket/TicketRow.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");
















const sortType = [{
  name: 'Status',
  value: 'status',
  subname: ''
}, {
  name: 'Modified',
  value: 'asc_modified',
  subname: 'Ascending'
}, {
  name: 'Modified',
  value: 'desc_modified',
  subname: 'Descending'
}, {
  name: 'Created',
  value: 'asc_created',
  subname: 'Ascending'
}, {
  name: 'Created',
  value: 'desc_created',
  subname: 'Descending'
}];
function TicketContainer() {
  const [sort, setSort] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('status');
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_11__.useDark)();
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  const {
    setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AccountRouter__WEBPACK_IMPORTED_MODULE_7__.NavContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setActive(window.location.pathname);
  }, []);
  const {
    data,
    mutate,
    error: error3,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_6__.config.privateapilink}/tickets?sort=${sort}&page=${page}&search=${search}`, _api_http__WEBPACK_IMPORTED_MODULE_3__.fetcher);
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2
  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_6__.config.privateapilink}/auth/isLogged?infos=true`, _api_http__WEBPACK_IMPORTED_MODULE_3__.fetcher);
  if (!data || error3 || isLoading || !data2 || error2 || isLoading2) {
    if (data2) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "px-4 sm:px-6 lg:px-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "sm:flex sm:items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "sm:flex-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
        className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`
      }, "Tickets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
        className: `${dark ? 'text-slate-300' : 'text-gray-900'} mt-2 text-sm `
      }, "You are on the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", {
        className: `font-semibold ${dark ? 'text-slate-200' : 'text-gray-600'}`
      }, "tickets"), " page. You can here see all your support tickets.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
        type: "button",
        onClick: function () {
          return setOpen(!open);
        },
        className: "flex rounded-md bg-bg450-logo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled relative"
      }, "New ticket", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: `mx-2 h-5 w-5 my-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`
      })))), open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_CreateTicketForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        mutate: mutate,
        account: account,
        setOpen: setOpen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "mt-10 w-full mb-2 grid grid-cols-3 lg:grid-cols-4 gap-x-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: ' lg:col-span-3'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
        htmlFor: "search",
        className: `${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6`
      }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
        type: "text",
        name: "search",
        id: "search",
        onChange: function (e) {
          return searchValue(e.target.value);
        },
        className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full  rounded-md border-0 py-1.5 shadow-sm ring-1 ring-insetfocus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`,
        placeholder: "Search here"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Listbox, {
        value: sort,
        onChange: setSort
      }, function ({
        open
      }) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
          className: "relative mt-auto col-span-2 lg:col-span-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Listbox.Button, {
          className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} relative w-full mt-1 cursor-default rounded-md py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-bg450-logo sm:text-sm sm:leading-6`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: "inline-flex w-full truncate"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: "truncate"
        }, sortType.find(function (item) {
          return item.value === sort;
        }).name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: "ml-2 truncate text-gray-500"
        }, sortType.find(function (item) {
          return item.value === sort;
        }).subname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_15__["default"], {
          className: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Transition, {
          show: open,
          as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Listbox.Options, {
          className: `${dark ? 'bg-bg450-inputdark text-slate-300' : 'bg-white'} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`
        }, sortType.map(function (sortTyp) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Listbox.Option, {
            key: sortTyp.name,
            className: function ({
              active
            }) {
              return (0,_NavBar__WEBPACK_IMPORTED_MODULE_8__.classNames)(active ? dark ? 'bg-bg450-logo text-white' : 'bg-indigo-600 text-white' : dark ? 'text-slate-200' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9');
            },
            value: sortTyp.value
          }, function ({
            selected,
            active
          }) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
              className: "flex"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
              className: (0,_NavBar__WEBPACK_IMPORTED_MODULE_8__.classNames)(selected ? 'font-semibold' : 'font-normal', 'truncate')
            }, sortTyp.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
              className: (0,_NavBar__WEBPACK_IMPORTED_MODULE_8__.classNames)(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')
            }, sortTyp.subname)), selected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
              className: (0,_NavBar__WEBPACK_IMPORTED_MODULE_8__.classNames)(active ? 'text-white' : 'text-bg450-logo', 'absolute inset-y-0 right-0 flex items-center pr-4')
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "h-5 w-5",
              "aria-hidden": "true"
            })) : null);
          });
        })))));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
        className: "min-h-screen"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Elements_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }
  const account = data2.data;
  document.title = 'Bagou450 - My Tickets';
  const searchValue = (0,debounce__WEBPACK_IMPORTED_MODULE_5__.debounce)(function (value) {
    setSearch(value);
    setPage(1);
  }, 500);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:flex sm:items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "sm:flex-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`
  }, "Tickets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: `${dark ? 'text-slate-300' : 'text-gray-900'} mt-2 text-sm `
  }, "You are on the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", {
    className: `font-semibold ${dark ? 'text-slate-200' : 'text-gray-600'}`
  }, "tickets"), " page. You can here see all your support tickets.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    type: "button",
    onClick: function () {
      return setOpen(!open);
    },
    className: "flex rounded-md bg-bg450-logo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled relative"
  }, "New ticket", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: `mx-2 h-5 w-5 my-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`
  })))), open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_CreateTicketForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    mutate: mutate,
    account: account,
    setOpen: setOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "mt-10 w-full mb-2 grid grid-cols-3 lg:grid-cols-4 gap-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: ' lg:col-span-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: "search",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6`
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "text",
    name: "search",
    id: "search",
    onChange: function (e) {
      return searchValue(e.target.value);
    },
    className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full  rounded-md border-0 py-1.5 shadow-sm ring-1 ring-insetfocus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`,
    placeholder: "Search here"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Listbox, {
    value: sort,
    onChange: setSort
  }, function ({
    open
  }) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "relative mt-auto col-span-2 lg:col-span-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Listbox.Button, {
      className: `${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} relative w-full mt-1 cursor-default rounded-md py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-bg450-logo sm:text-sm sm:leading-6`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "inline-flex w-full truncate"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "truncate"
    }, sortType.find(function (item) {
      return item.value === sort;
    }).name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "ml-2 truncate text-gray-500"
    }, sortType.find(function (item) {
      return item.value === sort;
    }).subname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: "h-5 w-5 text-gray-400",
      "aria-hidden": "true"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Transition, {
      show: open,
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
      leave: "transition ease-in duration-100",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Listbox.Options, {
      className: `${dark ? 'bg-bg450-inputdark text-slate-300' : 'bg-white'} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`
    }, sortType.map(function (sortTyp) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Listbox.Option, {
        key: sortTyp.name,
        className: function ({
          active
        }) {
          return (0,_NavBar__WEBPACK_IMPORTED_MODULE_8__.classNames)(active ? dark ? 'bg-bg450-logo text-white' : 'bg-indigo-600 text-white' : dark ? 'text-slate-200' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9');
        },
        value: sortTyp.value
      }, function ({
        selected,
        active
      }) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
          className: "flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: (0,_NavBar__WEBPACK_IMPORTED_MODULE_8__.classNames)(selected ? 'font-semibold' : 'font-normal', 'truncate')
        }, sortTyp.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: (0,_NavBar__WEBPACK_IMPORTED_MODULE_8__.classNames)(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')
        }, sortTyp.subname)), selected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: (0,_NavBar__WEBPACK_IMPORTED_MODULE_8__.classNames)(active ? 'text-white' : 'text-bg450-logo', 'absolute inset-y-0 right-0 flex items-center pr-4')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: "h-5 w-5",
          "aria-hidden": "true"
        })) : null);
      });
    })))));
  })), data.data.data.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("table", {
    className: "min-w-full divide-y divide-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold hidden lg:table-cell sm:pl-6`
  }, "Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell`
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell`
  }, "Priority"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell`
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell`
  }, "Last Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", {
    scope: "col",
    className: `${dark ? 'text-slate-200' : 'text-gray-900'}  relative py-3.5 pl-3 pr-4 sm:pr-6 hidden lg:table-cell`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "sr-only"
  }, "Select")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tbody", null, data.data.data.map(function (ticket, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_TicketRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      ticket: ticket
    });
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: 'text-center text-black opacity-80'
  }, "No tickets matching these parameters were found for this account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: 'flex w-full max-w-7xl mx-auto'
  }, page > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: 'btn btn-primary btn-outline my-4 ',
    onClick: function () {
      window.scrollTo(0, 0);
      setPage(page - 1);
    }
  }, "Previous page"), page < data.data.last_page && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: 'btn btn-primary btn-outline my-4 text-right ml-auto',
    onClick: function () {
      window.scrollTo(0, 0);
      setPage(page + 1);
    }
  }, "Next page")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    className: "min-h-screen"
  }));
}

/***/ }),

/***/ "./src/components/Account/Ticket/TicketRow.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Account/Ticket/TicketRow.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TicketRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../App */ "./src/App.tsx");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore




function TicketRow({
  ticket
}) {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const {
    dark
  } = (0,_App__WEBPACK_IMPORTED_MODULE_2__.useDark)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", {
    key: ticket.id,
    className: 'hidden lg:table-row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm table-cell`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "font-medium"
  }, ticket.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'}  border-t border-gray-200 px-3 py-3.5 text-sm table-cell`
  }, ticket.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: ` border-t border-gray-200 px-3 py-3.5 text-sm hidden lg:table-cell ${ticket.priority === 'high' ? 'text-red-500' : ticket.priority === 'low' ? 'text-green-500' : 'text-gray-500'}`
  }, ticket.priority[0].toUpperCase(), ticket.priority.slice(1, ticket.priority.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `border-t border-gray-200 px-3 py-3.5 text-sm table-cell ${ticket.status === 'closed' ? 'text-red-500' : ticket.status === 'support_answer' ? 'text-green-500' : 'text-blue-500'}`
  }, ticket.status === 'closed' ? 'Closed' : ticket.status === 'support_answer' ? 'Answered by Support' : 'Answered by Client'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'}  border-t border-gray-200 px-3 py-3.5 text-sm  table-cell`
  }, moment_moment__WEBPACK_IMPORTED_MODULE_1___default()(ticket.updated_at).fromNow()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `${dark ? 'text-gray-400' : 'text-gray-500'}  border-t border-gray-200 px-3 py-3.5 text-sm table-cell`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    className: "inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    to: `/account/ticket/${ticket.id}`
  }, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", {
    key: ticket.id,
    className: 'lg:hidden cursor-pointer',
    onClick: function () {
      return navigate(`/account/ticket/${ticket.id}`);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, ticket.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", {
    className: `border-t border-gray-200 px-3 py-3.5 text-sm table-cell ${ticket.status === 'closed' ? 'text-red-500' : ticket.status === 'support_answer' ? 'text-green-500' : 'text-blue-500'}`
  }, ticket.status === 'closed' ? 'Closed' : ticket.status === 'support_answer' ? 'Answered by Support' : 'Answered by Client')));
}

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function CheckIcon({
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
    d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/ChevronUpDownIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/ChevronUpDownIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function ChevronUpDownIcon({
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
    d: "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronUpDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/DocumentIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/DocumentIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function DocumentIcon({
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
    d: "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DocumentIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/XCircleIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/XCircleIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

function XCircleIcon({
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
    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_components_Account_Ticket_TicketContainer_tsx.bundle.js.map