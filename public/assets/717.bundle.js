(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[717],{

/***/ 8717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductsContainer)
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
// EXTERNAL MODULE: ./node_modules/debounce/index.js
var debounce = __webpack_require__(296);
// EXTERNAL MODULE: ./src/components/Elements/Pagination.tsx + 2 modules
var Pagination = __webpack_require__(6791);
// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__(5761);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
;// CONCATENATED MODULE: ./src/api/admin/products/editProduct.ts


const editProduct = function (id, name, tag, version, price, sxcname, bbb_id, link, licenseda, isnewa, autoinstallera, recurrenta, taba, tabroute, description, hidea, extension, extension_product, logo, zip) {
  const licensedString = licenseda ? 1 : 0;
  const isNewString = isnewa ? 1 : 0;
  const extensionString = extension ? 1 : 0;
  const autoinstallerString = autoinstallera ? 1 : 0;
  const recurrentString = recurrenta ? 1 : 0;
  const tabString = taba ? 1 : 0;
  const hideString = hidea ? 1 : 0;
  return new Promise(function (resolve, reject) {
    http/* httpMultipart */.Pg.post(`${config/* config */.v.privateapilink}/admin/products/${id}`, {
      name,
      tag,
      version,
      price,
      sxcname,
      bbb_id,
      link,
      licensed: licensedString,
      isnew: isNewString,
      autoinstaller: autoinstallerString,
      recurrent: recurrentString,
      tab: tabString,
      tabroute,
      description,
      hide: hideString,
      logo,
      zip,
      extension: extensionString,
      extension_product
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const products_editProduct = (editProduct);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/react-codemirror2/index.js
var react_codemirror2 = __webpack_require__(9656);
// EXTERNAL MODULE: ./node_modules/codemirror/mode/htmlmixed/htmlmixed.js
var htmlmixed = __webpack_require__(6531);
// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.css
var codemirror = __webpack_require__(4143);
// EXTERNAL MODULE: ./node_modules/codemirror/theme/dracula.css
var dracula = __webpack_require__(8502);
;// CONCATENATED MODULE: ./src/components/Admin/Products/EditProductButton.tsx












function EditProductButton({
  product,
  page,
  perpage,
  search
}) {
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, http/* fetcher */._i);
  const [isLicensed, setLicensed] = (0,react.useState)(product.licensed);
  const [isNew, setNew] = (0,react.useState)(product.new);
  const [isAutoInstaller, setAutoInstaller] = (0,react.useState)(product.autoinstaller);
  const [isTab, setTab] = (0,react.useState)(product.tab);
  const [isRecurrent, setRecurrent] = (0,react.useState)(product.recurrent);
  const [isHidded, setHide] = (0,react.useState)(product.hide);
  const [isExtension, setExtension] = (0,react.useState)(product.extension);
  const form = (0,index_esm/* object */.Ry)({
    name: (0,index_esm/* string */.Z_)().required(),
    tabroute: (0,index_esm/* string */.Z_)().nullable(),
    version: (0,index_esm/* number */.Rx)().required(),
    sxcname: (0,index_esm/* string */.Z_)().nullable(),
    bbb_id: (0,index_esm/* number */.Rx)().nullable(),
    tag: (0,index_esm/* string */.Z_)().required(),
    description: (0,index_esm/* string */.Z_)().required(),
    link: (0,index_esm/* string */.Z_)().optional(),
    price: (0,index_esm/* number */.Rx)().required(),
    logo: (0,index_esm/* mixed */.nK)().optional().nullable(),
    zip: (0,index_esm/* mixed */.nK)().optional().nullable(),
    extensionProduct: (0,index_esm/* number */.Rx)().nullable()
  });
  const initialValues = {
    name: product.name,
    tabroute: product.tabroute ? product.tabroute : '',
    version: product.version,
    bbb_id: product.bbb_id ? product.bbb_id : 0,
    tag: product.tag,
    description: product.description,
    price: product.price,
    extensionProduct: product.extension_product,
    sxcname: product.sxcname ? product.sxcname : '',
    link: JSON.stringify(product.link),
    logo: null,
    zip: null
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: initialValues,
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      setLoading(false);
      products_editProduct(product.id, values.name, values.tag, values.version, values.price, values.sxcname, values.bbb_id, values.link, isLicensed, isNew, isAutoInstaller, isRecurrent, isTab, values.tabroute, values.description, isHidded, isExtension, values.extensionProduct, values.logo, values.zip).then(function (data) {
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
          react_toastify_esm/* toast */.Am.success('Success! Product was edited.', {
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
          window["editProductModal" + product.id].close();
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
  const modules = {
    toolbar: {
      container: [[{
        'header': [1, 2, 3, 4, 5, 6, false]
      }], ['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }], [{
        'script': 'sub'
      }, {
        'script': 'super'
      }], [{
        'indent': '-1'
      }, {
        'indent': '+1'
      }], [{
        'direction': 'rtl'
      }], [{
        'size': ['small', false, 'large', 'huge']
      }], [{
        'header': [1, 2, 3, 4, 5, 6, false]
      }], [{
        'color': []
      }, {
        'background': []
      }], [{
        'font': []
      }], [{
        'align': []
      }], ['link', 'image', 'video'], ['clean']]
    },
    clipboard: {
      matchVisual: false
    }
  };
  const handleContentChange = function (editor, data, value) {
    formik.setFieldValue('description', value);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, "    ", /*#__PURE__*/react.createElement("dialog", {
    id: "editProductModal" + product.id,
    className: "modal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal-box w-11/12 max-w-5xl"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "font-bold text-lg"
  }, "Edit product (Admin):"), /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "grid md:grid-cols-4 gap-x-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: 'col-span-2'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Name")), /*#__PURE__*/react.createElement("input", {
    id: "name",
    defaultValue: product.name,
    name: "name",
    type: "name",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.name))), /*#__PURE__*/react.createElement("div", {
    className: 'col-span-2'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Tag")), /*#__PURE__*/react.createElement("input", {
    id: "tag",
    defaultValue: product.tag,
    name: "tag",
    type: "tag",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.tag))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Version")), /*#__PURE__*/react.createElement("input", {
    id: "version",
    defaultValue: product.version,
    name: "version",
    type: "version",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.version))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Price")), /*#__PURE__*/react.createElement("input", {
    id: "price",
    defaultValue: product.price,
    name: "price",
    type: "price",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.price))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "SxcName")), /*#__PURE__*/react.createElement("input", {
    id: "sxcname",
    defaultValue: product.sxcname ? product.sxcname : '',
    name: "sxcname",
    type: "sxcname",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.sxcname))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "BBB Id")), /*#__PURE__*/react.createElement("input", {
    id: "bbb_id",
    defaultValue: product.bbb_id ? product.bbb_id : '',
    name: "bbb_id",
    type: "bbb_id",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.bbb_id)))), /*#__PURE__*/react.createElement("div", {
    className: 'my-2'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text",
    onClick: function () {
      return navigator.clipboard.writeText('[{"name":"ssx","link":""},{"name":"pm","link":""},{"name":"bbb","link":""}]');
    }
  }, "Link")), /*#__PURE__*/react.createElement("input", {
    id: "link",
    defaultValue: product.link ? JSON.stringify(product.link) : '',
    name: "link",
    type: "link",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.link))), /*#__PURE__*/react.createElement("div", {
    className: 'grid md:grid-cols-7 w-full'
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Licensed")), /*#__PURE__*/react.createElement("input", {
    id: "licensed",
    defaultChecked: isLicensed,
    name: "licensed",
    type: "checkbox",
    onChange: function () {
      return setLicensed(!isLicensed);
    },
    disabled: loading,
    className: "toggle "
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "New")), /*#__PURE__*/react.createElement("input", {
    id: "new",
    defaultChecked: isNew,
    name: "new",
    type: "checkbox",
    onChange: function () {
      return setNew(!isNew);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "AutoInstaller")), /*#__PURE__*/react.createElement("input", {
    id: "autoinstaller",
    defaultChecked: isAutoInstaller,
    name: "autoinstaller",
    type: "checkbox",
    onChange: function () {
      return setAutoInstaller(!isAutoInstaller);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Recurrent")), /*#__PURE__*/react.createElement("input", {
    id: "recurrent",
    defaultChecked: isRecurrent,
    name: "recurrent",
    type: "checkbox",
    onChange: function () {
      return setRecurrent(!isRecurrent);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Hidded")), /*#__PURE__*/react.createElement("input", {
    id: "hidded",
    defaultChecked: isHidded,
    name: "hidded",
    type: "checkbox",
    onChange: function () {
      return setHide(!isHidded);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Tab")), /*#__PURE__*/react.createElement("input", {
    id: "tab",
    defaultChecked: isTab,
    name: "tab",
    type: "checkbox",
    onChange: function () {
      return setTab(!isTab);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Extension")), /*#__PURE__*/react.createElement("input", {
    id: "tab",
    defaultChecked: isExtension,
    name: "tab",
    type: "checkbox",
    onChange: function () {
      return setExtension(!isExtension);
    },
    disabled: loading,
    className: "toggle"
  })), isTab ? /*#__PURE__*/react.createElement("div", {
    className: 'col-span-7'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Tab Route")), /*#__PURE__*/react.createElement("input", {
    id: "tabroute",
    defaultValue: product.tabroute ? product.tabroute : '',
    name: "tabroute",
    type: "tabroute",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.tabroute))) : /*#__PURE__*/react.createElement(react.Fragment, null), isExtension ? /*#__PURE__*/react.createElement("div", {
    className: 'col-span-7'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Extension product Id")), /*#__PURE__*/react.createElement("input", {
    id: "extensionProduct",
    defaultValue: product.extension_product ? product.extension_product : 0,
    name: "extensionProduct",
    type: "extensionProduct",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.extensionProduct))) : /*#__PURE__*/react.createElement(react.Fragment, null)), /*#__PURE__*/react.createElement("div", {
    className: "grid md:grid-cols-2 mx-auto"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full flex flex-col justify-center items-center"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Zip")), /*#__PURE__*/react.createElement("input", {
    type: "file",
    id: "zip",
    name: "zip",
    onChange: function (e) {
      if (e.target.files) {
        const file = e.target.files[0];
        if (file) {
          formik.setFieldValue('zip', file);
        }
      }
    },
    className: "file-input file-input-bordered file-input-primary w-full max-w-xs mx-auto"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full flex flex-col justify-center items-center"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Icon ", /*#__PURE__*/react.createElement("strong", null, "WEBP"))), /*#__PURE__*/react.createElement("input", {
    type: "file",
    id: "logo",
    onChange: function (e) {
      if (e.target.files) {
        const file = e.target.files[0];
        if (file) {
          formik.setFieldValue('logo', file);
        }
      }
    },
    name: "logo",
    className: "file-input file-input-bordered file-input-secondary w-full max-w-xs mx-auto"
  }))), /*#__PURE__*/react.createElement(react_codemirror2/* Controlled */.fk, {
    value: formik.values.description,
    options: {
      mode: 'htmlmixed',
      theme: 'dracula',
      lineNumbers: true
    },
    className: 'mt-2',
    onBeforeChange: handleContentChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "flex justify-end col-span-2 mx-4 mt-4"
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    disabled: loading || !formik.errors,
    className: "btn btn-primary btn-outline outline-0 self-end mx-4"
  }, "Submit"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn",
    onClick: function () {
      // @ts-ignore
      window["editProductModal" + product.id].close();
    }
  }, "Close"))))), /*#__PURE__*/react.createElement("button", {
    className: 'btn btn-primary btn-outline outline-0',
    onClick: function () {
      // @ts-ignore
      window["editProductModal" + product.id].showModal();
    }
  }, "Edit"));
}
;// CONCATENATED MODULE: ./src/api/admin/products/createProduct.ts


const createProduct = function (name, tag, version, price, sxcname, bbb_id, link, licenseda, isnewa, autoinstallera, recurrenta, taba, tabroute, description, hidea, logo, zip, extension, extension_product) {
  const licensedString = licenseda ? 1 : 0;
  const isNewString = isnewa ? 1 : 0;
  const autoinstallerString = autoinstallera ? 1 : 0;
  const recurrentString = recurrenta ? 1 : 0;
  const tabString = taba ? 1 : 0;
  const hideString = hidea ? 1 : 0;
  const extensionString = extension ? 1 : 0;
  return new Promise(function (resolve, reject) {
    http/* httpMultipart */.Pg.post(`${config/* config */.v.privateapilink}/admin/products/create`, {
      name,
      tag,
      version,
      price,
      sxcname,
      bbb_id,
      link,
      licensed: licensedString,
      isnew: isNewString,
      autoinstaller: autoinstallerString,
      recurrent: recurrentString,
      tab: tabString,
      tabroute,
      description,
      hide: hideString,
      logo,
      zip,
      extension: extensionString,
      extension_product
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const products_createProduct = (createProduct);
;// CONCATENATED MODULE: ./src/components/Admin/Products/NewProductButton.tsx












const modules = {
  toolbar: {
    container: [[{
      'header': [1, 2, 3, 4, 5, 6, false]
    }], ['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
      'list': 'ordered'
    }, {
      'list': 'bullet'
    }], [{
      'script': 'sub'
    }, {
      'script': 'super'
    }], [{
      'indent': '-1'
    }, {
      'indent': '+1'
    }], [{
      'direction': 'rtl'
    }], [{
      'size': ['small', false, 'large', 'huge']
    }], [{
      'header': [1, 2, 3, 4, 5, 6, false]
    }], [{
      'color': []
    }, {
      'background': []
    }], [{
      'font': []
    }], [{
      'align': []
    }], ['link', 'image', 'video'], ['clean']]
  },
  clipboard: {
    matchVisual: false
  }
};
function NewProductButton({
  page,
  perpage,
  search
}) {
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, http/* fetcher */._i);
  const [isLicensed, setLicensed] = (0,react.useState)(true);
  const [isNew, setNew] = (0,react.useState)(true);
  const [isAutoInstaller, setAutoInstaller] = (0,react.useState)(true);
  const [isTab, setTab] = (0,react.useState)(false);
  const [isRecurrent, setRecurrent] = (0,react.useState)(false);
  const [isHidded, setHide] = (0,react.useState)(false);
  const [isExtension, setExtension] = (0,react.useState)(false);
  const form = (0,index_esm/* object */.Ry)({
    name: (0,index_esm/* string */.Z_)().required(),
    tabroute: (0,index_esm/* string */.Z_)().nullable(),
    version: (0,index_esm/* number */.Rx)().required(),
    sxcname: (0,index_esm/* string */.Z_)().nullable(),
    bbb_id: (0,index_esm/* number */.Rx)().nullable(),
    tag: (0,index_esm/* string */.Z_)().required(),
    description: (0,index_esm/* string */.Z_)().required(),
    link: (0,index_esm/* string */.Z_)().optional(),
    price: (0,index_esm/* number */.Rx)().required(),
    logo: (0,index_esm/* mixed */.nK)().required(),
    zip: (0,index_esm/* mixed */.nK)().required(),
    extensionProduct: (0,index_esm/* number */.Rx)().nullable()
  });
  const initialValues = {
    name: '',
    tabroute: '',
    version: 1.0,
    bbb_id: 0,
    tag: '',
    description: '<div class="flex flex-col w-full">\n' + '    <h4 class="ql-align-center">The Pterodactyl addon "Minecraft mods installer" allow you to download Minecraft mods from CurseForge and Modrinth website.</h4>\n' + '    <div class="divider mx-6">Functionalities</div>\n' + '    <div class="grid h-20 card rounded-box place-items-center grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-2 mx-8">\n' + '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' + '            <div class="card-body">\n' + '                <h2 class="card-title">\n' + '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' + '                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />\n' + '                    </svg>\n' + '                    Automatic download</h2>\n' + '                <p>Mods are automatically downloaded to the "mods" folder</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' + '            <div class="card-body">\n' + '                <h2 class="card-title">\n' + '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' + '                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />\n' + '                    </svg>\n' + '                    Versions management</h2>\n' + '                <p>You can retrieve the list of mod versions to install a specific version</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' + '            <div class="card-body">\n' + '                <h2 class="card-title">\n' + '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' + '                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />\n' + '                    </svg>\n' + '                    Down protection</h2>\n' + '                <p>A built-in cache system is incorporated into the addon to ensure 100% uptime, providing seamless access to CurseForge and Modrinth servers in the event of any issues</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' + '            <div class="card-body">\n' + '                <h2 class="card-title">\n' + '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' + '                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />\n' + '                    </svg>\n' + '                    Real time fetching</h2>\n' + '                <p>This addon take all mods in real time from CurseForge and Modrinth</p>\n' + '            </div>\n' + '        </div>\n' + '\n' + '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' + '            <div class="card-body">\n' + '                <h2 class="card-title">\n' + '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' + '                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />\n' + '                    </svg>\n' + '\n' + '                    Compatibility</h2>\n' + '                <p>This addons work on Pterodactyl 1.X and work also on all themes</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' + '            <div class="card-body">\n' + '                <h2 class="card-title">\n' + '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' + '                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />\n' + '                    </svg>\n' + '                    No wings modification</h2>\n' + '                <p>You can install this addon without any modifications to your existing nodes. It streamlines the process and does not require manual editing for each addons installation</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' + '            <div class="card-body">\n' + '                <h2 class="card-title">\n' + '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' + '                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />\n' + '                    </svg>\n' + '                    Our servers</h2>\n' + '                <p>This addon utilizes our API to optimize server load and cache storage, significantly reducing the need for code edits. Additionally, it enables you to conveniently check for new addon versions directly from the panel</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' + '            <div class="card-body">\n' + '                <h2 class="card-title">\n' + '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' + '                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />\n' + '                    </svg>\n' + '                    Frequent update</h2>\n' + '                <p>We regularly provide updates to ensure the addon remains up-to-date and to add new functionalities. Rest assured, this addon will remain fully compatible with future versions of Pterodactyl, including Pterodactyl 2.X</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' + '            <div class="card-body">\n' + '                <h2 class="card-title">\n' + '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' + '                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />\n' + '                    </svg>\n' + '\n' + '                    Support</h2>\n' + '                <p>We provide a support through Discord, Email, and SMS. We offer a quick responses within 6 hours.</p>\n' + '            </div>\n' + '        </div>\n' + '    </div>\n' + '    <div class="divider mx-6">Overview</div>\n' + '    <p class="text-center text-xl my-2 font-semibold">Click on one of these previews to view it.</p>\n' + '    <div class="mx-16">\n' + '    <div class="flex w-full max-w-full" id="lightbox">\n' + '        <div class="flex-grow card rounded-box place-items-center">\n' + '            <div class="mockup-browser border bg-base-300 w-48">\n' + '                <div class="mockup-browser-toolbar">\n' + '                    <div class="input">https:/demo.bagou450.com</div>\n' + '                </div>\n' + '                <div class="flex justify-center px-4 py-2 bg-base-200 h-auto">\n' + '                    <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/computer/1.png" alt="0" class="max-w-full h-auto cursor-pointer" /> <!-- Utilisez la classe max-w-[taille] ici -->\n' + '                    <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/computer/2.png" alt="1" class="max-w-full h-auto cursor-pointer hidden" />\n' + '                    <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/computer/3.png" alt="2" class="max-w-full h-auto cursor-pointer hidden" />\n' + '                </div>\n' + '            </div>\n' + '        </div>\n' + '        <div class="my-auto mx-4">OR</div>\n' + '        <div class="flex-grow card rounded-box place-items-center">\n' + '            <div class="mockup-phone w-48 my-auto">\n' + '                <div class="camera"></div>\n' + '                <div class="display">\n' + '                    <div class="artboard artboard-demo phone-1">\n' + '                        <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/mobile/1.png" alt="3" class="max-w-full h-full cursor-pointer" /> <!-- Utilisez la classe max-w-[taille] ici -->\n' + '                        <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/mobile/2.png" alt="4" class="max-w-full h-full cursor-pointer hidden" />\n' + '                        <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/mobile/3.png" alt="5" class="max-w-full h-full cursor-pointer hidden" />\n' + '                    </div>\n' + '                </div>\n' + '            </div>\n' + '        </div>\n' + '    </div>\n' + '    </div>\n' + '\n' + '    <div class="divider mx-6">Frequently Asked Questions</div>\n' + '    <div class="mx-8">\n' + '    <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' + '        <input type="radio" name="my-accordion-2"/>\n' + '        <div class="collapse-title text-xl font-medium w-full">\n' + '            Is it possible to hide the mod addon from servers that are not running Minecraft?\n' + '        </div>\n' + '        <div class="collapse-content">\n' + '            <p>Sure! By default, our addon is hidden on servers that are not in the first nestId (Default Minecraft nestId of Pterodactyl). However, you have the flexibility to modify this behavior in the resources/scripts/routers/routes.ts file.</p>\n' + '        </div>\n' + '    </div>\n' + '    <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' + '        <input type="radio" name="my-accordion-2" />\n' + '        <div class="collapse-title text-xl font-medium w-full">\n' + '            My servers are located in the USA. Will this cause any latency with your European servers?\n' + '        </div>\n' + '        <div class="collapse-content">\n' + '            <p>That\'s true, this can introduce some latency. In such cases, you can contact us to gain access to the US API.</p>\n' + '        </div>\n' + '    </div>\n' + '        <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' + '            <input type="radio" name="my-accordion-2" />\n' + '            <div class="collapse-title text-xl font-medium w-full">\n' + '                What happend in case of a down of your servers?\n' + '            </div>\n' + '            <div class="collapse-content">\n' + '                <p>Our API has been open since 2021, and so far, we have experienced no downtime. In the event of a downtime on your main servers, we have two backup servers that can take over at any time.</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' + '            <input type="radio" name="my-accordion-2" />\n' + '            <div class="collapse-title text-xl font-medium w-full">\n' + '                Can I use the addon on multiple panels?\n' + '            </div>\n' + '            <div class="collapse-content">\n' + '                <p>A license can be used on 2 panels by default. If you need to use it on more panels, you can purchase additional licenses usage on your customer space.</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' + '            <input type="radio" name="my-accordion-2" />\n' + '            <div class="collapse-title text-xl font-medium w-full">\n' + '                What is the "BagouCenter"?\n' + '            </div>\n' + '            <div class="collapse-content">\n' + '                <p>The BagouCenter is a centralized space where you can manage all your Bagou450 addons. From this page, you can configure settings, check the API/CDN status, and update the addons directly from the panel. You can access the BagouCenter from the Admin page of your Pterodactyl panel.</p>\n' + '            </div>\n' + '        </div>\n' + '        <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' + '            <input type="radio" name="my-accordion-2" />\n' + '            <div class="collapse-title text-xl font-medium w-full">\n' + '                What payment methods do you accept?\n' + '            </div>\n' + '            <div class="collapse-content">\n' + '                <p>We accept multiple payment methods, including bank cards, PayPal, and bank transfer.</p>\n' + '            </div>\n' + '        </div>\n' + '\n' + '    <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' + '        <input type="radio" name="my-accordion-2" />\n' + '        <div class="collapse-title text-xl font-medium w-full">\n' + '            Can I see a demo of the addon before purchase it?\n' + '        </div>\n' + '        <div class="collapse-content">\n' + '            <p>Yes sure you can test our addons on the<a href="https://demo.bagou450.com" rel="noreferrer" target="_blank">demo panel</a> </p>\n' + '        </div>\n' + '    </div>\n' + '    </div>\n' + '</div>',
    price: 0,
    sxcname: '',
    link: '',
    extensionProduct: null,
    logo: new File([], ''),
    zip: new File([], '')
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: initialValues,
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      setLoading(false);
      products_createProduct(values.name, values.tag, values.version, values.price, values.sxcname, values.bbb_id, values.link, isLicensed, isNew, isAutoInstaller, isRecurrent, isTab, values.tabroute, values.description, isHidded, values.logo, values.zip, isExtension, values.extensionProduct).then(function (data) {
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
          react_toastify_esm/* toast */.Am.success('Success! Product was edited.', {
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
          window.newProductModal.close();
        }
        setLoading(false);
      }).catch(function (e) {
        react_toastify_esm/* toast */.Am.error(`An unexcepted error happend. Please contact one of our support team. ${e}`, {
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
  const handleContentChange = function (editor, data, value) {
    formik.setFieldValue('description', value);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, "    ", /*#__PURE__*/react.createElement("dialog", {
    id: "newProductModal",
    className: "modal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal-box w-11/12 max-w-5xl"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "font-bold text-lg"
  }, "New product (Admin):"), /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("div", {
    className: "grid md:grid-cols-4 gap-x-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: 'col-span-2'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Name")), /*#__PURE__*/react.createElement("input", {
    id: "name",
    defaultValue: '',
    name: "name",
    type: "name",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.name))), /*#__PURE__*/react.createElement("div", {
    className: 'col-span-2'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Tag")), /*#__PURE__*/react.createElement("input", {
    id: "tag",
    defaultValue: '',
    name: "tag",
    type: "tag",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.tag))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Version")), /*#__PURE__*/react.createElement("input", {
    id: "version",
    defaultValue: 0,
    name: "version",
    type: "version",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.version))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Price")), /*#__PURE__*/react.createElement("input", {
    id: "price",
    defaultValue: 0,
    name: "price",
    type: "price",
    onChange: formik.handleChange,
    disabled: loading,
    required: true,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.price))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "SxcName")), /*#__PURE__*/react.createElement("input", {
    id: "sxcname",
    defaultValue: '',
    name: "sxcname",
    type: "sxcname",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.sxcname))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "BBB Id")), /*#__PURE__*/react.createElement("input", {
    id: "bbb_id",
    defaultValue: '',
    name: "bbb_id",
    type: "bbb_id",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full max-w-sm"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.bbb_id)))), /*#__PURE__*/react.createElement("div", {
    className: 'my-2'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text",
    onClick: function () {
      return navigator.clipboard.writeText('[{"name":"ssx","link":""},{"name":"pm","link":""},{"name":"bbb","link":""}]');
    }
  }, "Link")), /*#__PURE__*/react.createElement("input", {
    id: "link",
    defaultValue: '',
    name: "link",
    type: "link",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.link))), /*#__PURE__*/react.createElement("div", {
    className: 'grid md:grid-cols-7 w-full'
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Licensed")), /*#__PURE__*/react.createElement("input", {
    id: "licensed",
    defaultChecked: isLicensed,
    name: "licensed",
    type: "checkbox",
    onChange: function () {
      return setLicensed(!isLicensed);
    },
    disabled: loading,
    className: "toggle "
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "New")), /*#__PURE__*/react.createElement("input", {
    id: "new",
    defaultChecked: isNew,
    name: "new",
    type: "checkbox",
    onChange: function () {
      return setNew(!isNew);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "AutoInstaller")), /*#__PURE__*/react.createElement("input", {
    id: "autoinstaller",
    defaultChecked: isAutoInstaller,
    name: "autoinstaller",
    type: "checkbox",
    onChange: function () {
      return setAutoInstaller(!isAutoInstaller);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Recurrent")), /*#__PURE__*/react.createElement("input", {
    id: "recurrent",
    defaultChecked: isRecurrent,
    name: "recurrent",
    type: "checkbox",
    onChange: function () {
      return setRecurrent(!isRecurrent);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Hidded")), /*#__PURE__*/react.createElement("input", {
    id: "hidded",
    defaultChecked: isHidded,
    name: "hidded",
    type: "checkbox",
    onChange: function () {
      return setHide(!isHidded);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Tab")), /*#__PURE__*/react.createElement("input", {
    id: "tab",
    defaultChecked: isTab,
    name: "tab",
    type: "checkbox",
    onChange: function () {
      return setTab(!isTab);
    },
    disabled: loading,
    className: "toggle"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Extension")), /*#__PURE__*/react.createElement("input", {
    id: "tab",
    defaultChecked: isExtension,
    name: "tab",
    type: "checkbox",
    onChange: function () {
      return setExtension(!isExtension);
    },
    disabled: loading,
    className: "toggle"
  })), isTab ? /*#__PURE__*/react.createElement("div", {
    className: 'col-span-7'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Tab Route")), /*#__PURE__*/react.createElement("input", {
    id: "tabroute",
    defaultValue: '',
    name: "tabroute",
    type: "tabroute",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.tabroute))) : /*#__PURE__*/react.createElement(react.Fragment, null), isExtension ? /*#__PURE__*/react.createElement("div", {
    className: 'col-span-7'
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Extension product Id")), /*#__PURE__*/react.createElement("input", {
    id: "extensionProduct",
    defaultValue: '',
    name: "extensionProduct",
    type: "extensionProduct",
    onChange: formik.handleChange,
    disabled: loading,
    className: "input input-bordered w-full"
  }), /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-red-500"
  }, formik.errors.extensionProduct))) : /*#__PURE__*/react.createElement(react.Fragment, null)), /*#__PURE__*/react.createElement("div", {
    className: "grid md:grid-cols-2 mx-auto"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full flex flex-col justify-center items-center"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Zip")), /*#__PURE__*/react.createElement("input", {
    type: "file",
    id: "zip",
    name: "zip",
    onChange: function (e) {
      if (e.target.files) {
        const file = e.target.files[0];
        if (file) {
          formik.setFieldValue('zip', file);
        }
      }
    },
    className: "file-input file-input-bordered file-input-primary w-full max-w-xs mx-auto"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full flex flex-col justify-center items-center"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Icon ", /*#__PURE__*/react.createElement("strong", null, "WEBP"))), /*#__PURE__*/react.createElement("input", {
    type: "file",
    id: "logo",
    onChange: function (e) {
      if (e.target.files) {
        const file = e.target.files[0];
        if (file) {
          formik.setFieldValue('logo', file);
        }
      }
    },
    name: "logo",
    className: "file-input file-input-bordered file-input-secondary w-full max-w-xs mx-auto"
  }))), /*#__PURE__*/react.createElement(react_codemirror2/* Controlled */.fk, {
    value: formik.values.description,
    options: {
      mode: 'htmlmixed',
      theme: 'dracula',
      lineNumbers: true
    },
    className: 'mt-2',
    onBeforeChange: handleContentChange
  }), /*#__PURE__*/react.createElement("div", {
    className: "flex justify-end col-span-2 mx-4 mt-4"
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    disabled: loading || !formik.errors,
    className: "btn btn-primary btn-outline outline-0 self-end mx-4"
  }, "Submit"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn",
    onClick: function () {
      // @ts-ignore
      window.newProductModal.close();
    }
  }, "Close"))))), /*#__PURE__*/react.createElement("button", {
    className: 'btn btn-primary btn-outline outline-0',
    onClick: function () {
      // @ts-ignore
      window.newProductModal.showModal();
    }
  }, "New product"));
}
;// CONCATENATED MODULE: ./src/components/Admin/Products/ProductsContainer.tsx











function ProductsContainer() {
  const [page, setPage] = (0,react.useState)(1);
  const [perpage] = (0,react.useState)(20);
  const [search, setSearch] = (0,react.useState)('');
  const {
    data,
    error,
    isLoading
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/admin/products?page=${page}&perpage=${perpage}&search=${search}`, http/* fetcher */._i);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  const searchValue = (0,debounce.debounce)(function (value) {
    setSearch(value);
    setPage(1);
  }, 500);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavBarAccount/* default */.Z, {
    tab: 'products'
  }), /*#__PURE__*/react.createElement("h1", {
    className: "text-center text-4xl my-2"
  }, "Products"), /*#__PURE__*/react.createElement("div", {
    className: "w-full max-w-7xl mx-auto mb-2 md:flex md:gap-x-2"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    id: 'search',
    defaultValue: search,
    placeholder: "Search here",
    className: `input input-bordered input-md w-full `,
    onChange: function (e) {
      return searchValue(e.target.value);
    }
  }), /*#__PURE__*/react.createElement(NewProductButton, {
    page: page,
    perpage: perpage,
    search: search
  })), /*#__PURE__*/react.createElement("table", {
    className: "table w-full max-w-7xl mx-auto border-neutral border-2"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "Id"), /*#__PURE__*/react.createElement("th", null, "Name"), /*#__PURE__*/react.createElement("th", null, "Admin tab"), /*#__PURE__*/react.createElement("th", null, "New"), /*#__PURE__*/react.createElement("th", null, "Version"), /*#__PURE__*/react.createElement("th", null, "Licensed"), /*#__PURE__*/react.createElement("th", null, "Tag"), /*#__PURE__*/react.createElement("th", null, "AutoInstaller"), /*#__PURE__*/react.createElement("th", null, "Price"), /*#__PURE__*/react.createElement("th", null, "Recurrent"), /*#__PURE__*/react.createElement("th", null))), /*#__PURE__*/react.createElement("tbody", null, data.data.map(function (product, index) {
    return /*#__PURE__*/react.createElement(ProductRow, {
      product: product,
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
function ProductRow({
  product,
  index,
  page,
  perpage,
  search
}) {
  return /*#__PURE__*/react.createElement("tr", {
    key: index
  }, /*#__PURE__*/react.createElement("th", null, product.id), /*#__PURE__*/react.createElement("td", null, product.name), /*#__PURE__*/react.createElement("td", {
    className: product.tab ? 'text-green-500' : 'text-red-500'
  }, product.tab ? 'Yes' : 'No'), /*#__PURE__*/react.createElement("td", {
    className: product.new ? 'text-green-500' : 'text-red-500'
  }, product.new ? 'Yes' : 'No'), /*#__PURE__*/react.createElement("td", null, product.version), /*#__PURE__*/react.createElement("td", {
    className: product.licensed ? 'text-green-500' : 'text-red-500'
  }, product.licensed ? 'Yes' : 'No'), /*#__PURE__*/react.createElement("td", null, product.tag), /*#__PURE__*/react.createElement("td", {
    className: product.autoinstaller ? 'text-green-500' : 'text-red-500'
  }, product.autoinstaller ? 'Yes' : 'No'), /*#__PURE__*/react.createElement("td", null, product.price), /*#__PURE__*/react.createElement("td", {
    className: product.recurrent ? 'text-green-500' : 'text-red-500'
  }, product.recurrent ? 'Yes' : 'No'), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement(EditProductButton, {
    product: product,
    page: page,
    perpage: perpage,
    search: search
  })));
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
//# sourceMappingURL=717.bundle.js.map