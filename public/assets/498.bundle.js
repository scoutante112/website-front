(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[498],{

/***/ 717:
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
// EXTERNAL MODULE: ./src/components/Elements/Pagination.tsx
var Pagination = __webpack_require__(447);
// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__(5761);
// EXTERNAL MODULE: ./node_modules/react-quill/lib/index.js
var lib = __webpack_require__(1167);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 56 modules
var formik_esm = __webpack_require__(3449);
;// CONCATENATED MODULE: ./src/api/admin/products/editProduct.ts


const editProduct = function (id, name, tag, version, price, sxcname, bbb_id, link, licensed, isnew, autoinstaller, recurrent, tab, tabroute, description) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.put(`${config/* config */.v.privateapilink}/admin/products/${id}`, {
      name,
      tag,
      version,
      price,
      sxcname,
      bbb_id,
      link,
      licensed,
      isnew,
      autoinstaller,
      recurrent,
      tab,
      tabroute,
      description
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const products_editProduct = (editProduct);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
;// CONCATENATED MODULE: ./src/components/Admin/Products/EditProductButton.tsx









function EditProductButton(_ref) {
  let {
    product,
    page,
    perpage,
    search
  } = _ref;
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, http/* fetcher */._i);
  const [isLicensed, setLicensed] = (0,react.useState)(product.licensed);
  const [isNew, setNew] = (0,react.useState)(product.new);
  const [isAutoInstaller, setAutoInstaller] = (0,react.useState)(product.autoinstaller);
  const [isTab, setTab] = (0,react.useState)(product.tab);
  const [isRecurrent, setRecurrent] = (0,react.useState)(product.recurrent);
  const form = (0,index_esm/* object */.Ry)({
    name: (0,index_esm/* string */.Z_)().required(),
    tabroute: (0,index_esm/* string */.Z_)().nullable(),
    version: (0,index_esm/* number */.Rx)().required(),
    sxcname: (0,index_esm/* string */.Z_)().nullable(),
    bbb_id: (0,index_esm/* number */.Rx)().nullable(),
    tag: (0,index_esm/* string */.Z_)().required(),
    description: (0,index_esm/* string */.Z_)().required(),
    link: (0,index_esm/* string */.Z_)().optional(),
    price: (0,index_esm/* number */.Rx)().required()
  });
  const initialValues = {
    name: product.name,
    tabroute: product.tabroute ? product.tabroute : '',
    version: product.version,
    bbb_id: product.bbb_id ? product.bbb_id : 0,
    tag: product.tag,
    description: product.description,
    price: product.price,
    sxcname: product.sxcname ? product.sxcname : '',
    link: JSON.stringify(product.link)
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: initialValues,
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      setLoading(false);
      products_editProduct(product.id, values.name, values.tag, values.version, values.price, values.sxcname, values.bbb_id, values.link, isLicensed, isNew, isAutoInstaller, isRecurrent, isTab, values.tabroute, values.description).then(function (data) {
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
          react_toastify_esm/* toast */.Am.success('Success! Product was edited.', {
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
          theme: "dark"
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
  const handleQuillChange = function (value) {
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
    className: 'grid md:grid-cols-4'
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
  })), isTab ? /*#__PURE__*/react.createElement("div", {
    className: 'col-span-3'
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
  }, formik.errors.tabroute))) : /*#__PURE__*/react.createElement(react.Fragment, null)), /*#__PURE__*/react.createElement((lib_default()), {
    value: formik.values.description,
    onChange: handleQuillChange,
    modules: modules,
    className: 'custom-toolbar mt-2',
    formats: ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'list', 'bullet', 'script', 'indent', 'direction', 'size', 'color', 'background', 'font', 'align', 'link', 'image', 'video']
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


const createProduct_editProduct = function (name, tag, version, price, sxcname, bbb_id, link, licensed, isnew, autoinstaller, recurrent, tab, tabroute, description) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/admin/products/create`, {
      name,
      tag,
      version,
      price,
      sxcname,
      bbb_id,
      link,
      licensed,
      isnew,
      autoinstaller,
      recurrent,
      tab,
      tabroute,
      description
    }).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const createProduct = (createProduct_editProduct);
;// CONCATENATED MODULE: ./src/components/Admin/Products/NewProductButton.tsx









function NewProductButton(_ref) {
  let {
    page,
    perpage,
    search
  } = _ref;
  const [loading, setLoading] = (0,react.useState)(false);
  const {
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, http/* fetcher */._i);
  const [isLicensed, setLicensed] = (0,react.useState)(true);
  const [isNew, setNew] = (0,react.useState)(true);
  const [isAutoInstaller, setAutoInstaller] = (0,react.useState)(true);
  const [isTab, setTab] = (0,react.useState)(false);
  const [isRecurrent, setRecurrent] = (0,react.useState)(false);
  const form = (0,index_esm/* object */.Ry)({
    name: (0,index_esm/* string */.Z_)().required(),
    tabroute: (0,index_esm/* string */.Z_)().nullable(),
    version: (0,index_esm/* number */.Rx)().required(),
    sxcname: (0,index_esm/* string */.Z_)().nullable(),
    bbb_id: (0,index_esm/* number */.Rx)().nullable(),
    tag: (0,index_esm/* string */.Z_)().required(),
    description: (0,index_esm/* string */.Z_)().required(),
    link: (0,index_esm/* string */.Z_)().optional(),
    price: (0,index_esm/* number */.Rx)().required()
  });
  const initialValues = {
    name: '',
    tabroute: '',
    version: 1.0,
    bbb_id: 0,
    tag: '',
    description: '',
    price: 0,
    sxcname: '',
    link: ''
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: initialValues,
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      setLoading(false);
      createProduct(values.name, values.tag, values.version, values.price, values.sxcname, values.bbb_id, values.link, isLicensed, isNew, isAutoInstaller, isRecurrent, isTab, values.tabroute, values.description).then(function (data) {
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
          react_toastify_esm/* toast */.Am.success('Success! Product was edited.', {
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
          window.newProductModal.close();
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
  const handleQuillChange = function (value) {
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
    className: 'grid md:grid-cols-4'
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
  })), isTab ? /*#__PURE__*/react.createElement("div", {
    className: 'col-span-3'
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
  }, formik.errors.tabroute))) : /*#__PURE__*/react.createElement(react.Fragment, null)), /*#__PURE__*/react.createElement((lib_default()), {
    value: formik.values.description,
    onChange: handleQuillChange,
    modules: modules,
    className: 'custom-toolbar mt-2',
    formats: ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'list', 'bullet', 'script', 'indent', 'direction', 'size', 'color', 'background', 'font', 'align', 'link', 'image', 'video']
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
  const [perpage, setPerPage] = (0,react.useState)(20);
  const [search, setSearch] = (0,react.useState)('');
  const {
    data,
    error,
    isLoading,
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/admin/products?page=${page}&perpage=${perpage}&search=${search}`, http/* fetcher */._i);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  console.log(data);
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
function ProductRow(_ref) {
  let {
    product,
    index,
    page,
    perpage,
    search
  } = _ref;
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
//# sourceMappingURL=498.bundle.js.map