"use strict";
(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[190],{

/***/ 3370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogsContainer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Account/NavBarAccount.tsx
var NavBarAccount = __webpack_require__(9911);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 56 modules
var formik_esm = __webpack_require__(3449);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
;// CONCATENATED MODULE: ./src/api/admin/blogs/createCategory.ts


const createCategory = function (name, slug) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/admin/categories`, {
      name,
      slug
    }).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return resolve(data.response);
    });
  });
};
/* harmony default export */ const blogs_createCategory = (createCategory);
;// CONCATENATED MODULE: ./src/api/admin/blogs/editCategory.ts


const editCategory = function (id, name, slug) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.put(`${config/* config */.v.privateapilink}/admin/categories/${id}`, {
      name,
      slug
    }).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return resolve(data.response);
    });
  });
};
/* harmony default export */ const blogs_editCategory = (editCategory);
;// CONCATENATED MODULE: ./src/api/admin/blogs/deleteCategory.ts


const deleteCategory = function (id) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.delete(`${config/* config */.v.privateapilink}/admin/categories/${id}`).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return resolve(data.response);
    });
  });
};
/* harmony default export */ const blogs_deleteCategory = (deleteCategory);
;// CONCATENATED MODULE: ./src/components/Admin/Blogs/CategoryContainer.tsx











;
function CategoryContainer() {
  const {
    data: categories,
    error,
    mutate,
    isLoading
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/categories`, http/* fetcher */._i);
  const [errorformik, setError] = (0,react.useState)('');
  const [loading, setLoading] = (0,react.useState)(false);
  const form = (0,index_esm/* object */.Ry)({
    name: (0,index_esm/* string */.Z_)().required('The name can\'t be empty.'),
    slug: (0,index_esm/* string */.Z_)().required('The slug can\'t be empty')
  });
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      name: '',
      slug: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      setError('');
      blogs_createCategory(values.name, values.slug).then(function (data) {
        if (data.data.status === 'error') {
          setError(`Error: ${data.data.message}`);
          setLoading(false);
          return null;
        }
        // @ts-ignore
        window.createCateModal.close();
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
        react_toastify_esm/* toast */.Am.success(`Category created successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      }).catch(function (e) {
        setError(`Error: ${e}`);
        setLoading(false);
      });
    }
  });
  if (!categories || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  return /*#__PURE__*/react.createElement("section", {
    className: 'mx-8 my-4'
  }, /*#__PURE__*/react.createElement("h2", {
    className: 'text-xl text-center'
  }, "Categories"), /*#__PURE__*/react.createElement("dialog", {
    id: "createCateModal",
    className: "modal"
  }, /*#__PURE__*/react.createElement("form", {
    method: "dialog",
    className: "modal-box",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("h3", {
    className: "font-bold text-lg"
  }, "Create category:"), errorformik && /*#__PURE__*/react.createElement("div", {
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
  })), /*#__PURE__*/react.createElement("span", null, errorformik)), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs my-4"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Name")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    onChange: formik.handleChange,
    placeholder: "name",
    id: "name",
    name: "name",
    className: "input input-bordered w-full max-w-xs"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Slug")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    onChange: formik.handleChange,
    placeholder: "slug",
    id: "slug",
    name: "slug",
    className: "input input-bordered w-full max-w-xs"
  })), /*#__PURE__*/react.createElement("div", {
    className: "modal-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-secondary mx-2",
    type: 'submit',
    disabled: loading
  }, "Create category"), /*#__PURE__*/react.createElement("button", {
    className: "btn",
    onClick: function () {
      // @ts-ignore
      window.createCateModal.close();
    },
    disabled: loading
  }, "Close")))), /*#__PURE__*/react.createElement("div", {
    className: "flex w-full mb-4"
  }, /*#__PURE__*/react.createElement("label", {
    className: "btn btn-primary ml-auto",
    onClick: function () {
      // @ts-ignore
      window.createCateModal.showModal();
    }
  }, "Create new")), categories.data.map(function (categorie, index) {
    return /*#__PURE__*/react.createElement(CategoryRow, {
      categorie: categorie,
      key: index
    });
  }));
}
function CategoryRow(_ref) {
  let {
    categorie
  } = _ref;
  const {
    mutate
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/categories`, http/* fetcher */._i);
  const [errorformik, setError] = (0,react.useState)('');
  const [loading, setLoading] = (0,react.useState)(false);
  const form = (0,index_esm/* object */.Ry)({
    name: (0,index_esm/* string */.Z_)().required('The name can\'t be empty.'),
    slug: (0,index_esm/* string */.Z_)().required('The slug can\'t be empty')
  });
  const removeCat = function () {
    setLoading(true);
    blogs_deleteCategory(categorie.id).then(function (data) {
      if (data.data.status === 'error') {
        setError(`Error: ${data.data.message}`);
        setLoading(false);
        return null;
      }
      setLoading(false);
      react_toastify_esm/* toast */.Am.success(`Category removed successfully.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
      mutate();
    }).catch(function (e) {
      setError(`Error: ${e}`);
      setLoading(false);
    });
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      name: '',
      slug: ''
    },
    validationSchema: form,
    onSubmit: function (values) {
      setLoading(true);
      setError('');
      blogs_editCategory(categorie.id, values.name, values.slug).then(function (data) {
        if (data.data.status === 'error') {
          setError(`Error: ${data.data.message}`);
          setLoading(false);
          return null;
        }
        // @ts-ignore
        window[theId].close();
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
        react_toastify_esm/* toast */.Am.success(`Category edited successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      }).catch(function (e) {
        setError(`Error: ${e}`);
        setLoading(false);
      });
    }
  });
  const theId = `editCateModal-${categorie.name}`;
  return /*#__PURE__*/react.createElement("div", {
    className: "grid card bg-neutral-800 rounded-box place-items-center grid grid-cols-1 md:grid-cols-3 my-2 py-8 gap-y-8"
  }, /*#__PURE__*/react.createElement("dialog", {
    id: theId,
    className: "modal"
  }, /*#__PURE__*/react.createElement("form", {
    method: "dialog",
    className: "modal-box",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("h3", {
    className: "font-bold text-lg"
  }, "Edit category:"), errorformik && /*#__PURE__*/react.createElement("div", {
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
  })), /*#__PURE__*/react.createElement("span", null, errorformik)), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs my-4"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Name")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    onChange: formik.handleChange,
    placeholder: "name",
    id: "name",
    name: "name",
    className: "input input-bordered w-full max-w-xs"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Slug")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    onChange: formik.handleChange,
    placeholder: "slug",
    id: "slug",
    name: "slug",
    className: "input input-bordered w-full max-w-xs"
  })), /*#__PURE__*/react.createElement("div", {
    className: "modal-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-secondary mx-2",
    type: 'submit',
    disabled: loading
  }, "Edit category"), /*#__PURE__*/react.createElement("button", {
    className: "btn",
    onClick: function () {
      // @ts-ignore
      window[theId].close();
    },
    disabled: loading
  }, "Close")))), /*#__PURE__*/react.createElement("div", {
    className: 'mx-2'
  }, /*#__PURE__*/react.createElement("p", {
    className: 'text-left'
  }, "Name:"), /*#__PURE__*/react.createElement("p", {
    className: 'text-left'
  }, categorie.name)), /*#__PURE__*/react.createElement("div", {
    className: 'mx-2'
  }, /*#__PURE__*/react.createElement("p", {
    className: 'text-left'
  }, "Slug:"), /*#__PURE__*/react.createElement("p", {
    className: 'text-left'
  }, categorie.slug)), /*#__PURE__*/react.createElement("div", {
    className: 'justify-end mx-2 grid grid-cols-1 md:grid-cols-2'
  }, /*#__PURE__*/react.createElement("button", {
    className: 'btn btn-secondary btn-outline border-0',
    onClick: function () {
      return (
        // @ts-ignore
        window[theId].showModal()
      );
    }
  }, "Edit"), /*#__PURE__*/react.createElement("button", {
    className: 'btn btn-error mx-4 my-4 md:my-0',
    onClick: function () {
      return (
        // @ts-ignore
        removeCat()
      );
    }
  }, "Remove")));
}
;// CONCATENATED MODULE: ./src/api/admin/blogs/createNews.ts


const createNews = function (title, category, tags, slug, data, pictures) {
  return new Promise(function (resolve, reject) {
    http/* httpMultipart */.Pg.post(`${config/* config */.v.privateapilink}/admin/blogs`, {
      title,
      category,
      tags,
      slug,
      data,
      pictures
    }).then(function (data) {
      return resolve(data.data);
    }).catch(function (data) {
      return resolve(data.response);
    });
  });
};
/* harmony default export */ const blogs_createNews = (createNews);
// EXTERNAL MODULE: ./node_modules/react-quill/lib/index.js
var lib = __webpack_require__(1167);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__(5761);
// EXTERNAL MODULE: ./src/components/Admin/Blogs/toolBar.scss
var toolBar = __webpack_require__(4695);
;// CONCATENATED MODULE: ./src/api/admin/blogs/deleteNews.ts


const deleteNews = function (id) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.delete(`${config/* config */.v.privateapilink}/admin/blogs/${id}`).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return resolve(data.response);
    });
  });
};
/* harmony default export */ const blogs_deleteNews = (deleteNews);
;// CONCATENATED MODULE: ./src/api/admin/blogs/editNews.ts


const editNews = function (id, title, category, tags, slug, data, pictures) {
  return new Promise(function (resolve, reject) {
    http/* httpMultipart */.Pg.post(`${config/* config */.v.privateapilink}/admin/blogs/${id}`, {
      title,
      category,
      tags,
      slug,
      data,
      pictures
    }).then(function (data) {
      return resolve(data);
    }).catch(function (data) {
      return resolve(data.response);
    });
  });
};
/* harmony default export */ const blogs_editNews = (editNews);
;// CONCATENATED MODULE: ./src/components/Admin/Blogs/NewsContainer.tsx














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
function NewsContainer() {
  const [search, setSearch] = (0,react.useState)('');
  const [category, setCategory] = (0,react.useState)('');
  const [page, setPage] = (0,react.useState)('1');
  const [loading, setLoading] = (0,react.useState)(false);
  const [errorformik, setError] = (0,react.useState)();
  const {
    data: blogs,
    error,
    mutate,
    isLoading
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/blogs?search${search}&category=${category}&${page}`, http/* fetcher */._i);
  const {
    data: categories,
    error: error2,
    isLoading: isLoading2
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/categories`, http/* fetcher */._i);
  const form = (0,index_esm/* object */.Ry)({
    title: (0,index_esm/* string */.Z_)().required('The title can\'t be empty.'),
    category: (0,index_esm/* number */.Rx)().required('The category can\'t be empty'),
    tags: (0,index_esm/* string */.Z_)().required('The tag can\'t be empty'),
    slug: (0,index_esm/* string */.Z_)().required('The slug can\'t be empty'),
    data: (0,index_esm/* string */.Z_)().required('The data can\'t be empty'),
    pictures: (0,index_esm/* array */.IX)().of((0,index_esm/* mixed */.nK)()).nullable()
  });
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      title: '',
      category: -1,
      tags: '',
      slug: '',
      data: '',
      pictures: []
    },
    validationSchema: form,
    onSubmit: function (values) {
      if (values.category === -1) {
        setError('Error: Need to select a category');
      }
      setLoading(true);
      setError('');
      const tag = values.tags.split(',');
      blogs_createNews(values.title, values.category, tag, values.slug, values.data, values.pictures).then(function (data) {
        console.log(data);
        if (data.status !== 'success') {
          setError(`Error: ${data.message}`);
          setLoading(false);
          return null;
        }
        // @ts-ignore
        window.createNewsModal.close();
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
        react_toastify_esm/* toast */.Am.success(`News created successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      }).catch(function (e) {
        setError(`Error: ${e}`);
        setLoading(false);
      });
    }
  });
  const handleQuillChange = function (value) {
    formik.setFieldValue('data', value); // Mettre à jour la valeur de l'éditeur de texte dans Formik
  };

  if (!blogs || error || isLoading || !categories || error2 || isLoading2) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  return /*#__PURE__*/react.createElement("section", {
    className: 'mx-8 my-4'
  }, /*#__PURE__*/react.createElement("dialog", {
    id: "createNewsModal",
    className: "modal"
  }, /*#__PURE__*/react.createElement("form", {
    method: "dialog",
    className: "modal-box w-11/12 max-w-5xl",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("h3", {
    className: "font-bold text-lg"
  }, "Create category:"), errorformik && /*#__PURE__*/react.createElement("div", {
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
  })), /*#__PURE__*/react.createElement("span", null, errorformik)), /*#__PURE__*/react.createElement("div", {
    className: 'grid grid-cols-2 md:grid-cols-2 my-4 gap-x-2'
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Title")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    onChange: formik.handleChange,
    placeholder: "title",
    id: "title",
    name: "title",
    className: "input input-bordered w-full max-w-xs"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Slug")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    onChange: formik.handleChange,
    placeholder: "slug",
    id: "slug",
    name: "slug",
    className: "input input-bordered w-full max-w-xs"
  }))), /*#__PURE__*/react.createElement("div", {
    className: 'grid grid-cols-2 md:grid-cols-2 my-4 gap-x-2'
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Tag (comma separated)")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    onChange: formik.handleChange,
    placeholder: "tags",
    id: "tags",
    name: "tags",
    className: "input input-bordered w-full max-w-xs"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Category")), /*#__PURE__*/react.createElement("select", {
    className: "select select-bordered w-full max-w-xs ",
    onChange: function (e) {
      return formik.setFieldValue('category', e.target.value);
    }
  }, /*#__PURE__*/react.createElement("option", {
    disabled: true,
    selected: true
  }, "Select category"), categories.data.map(function (categorie, index) {
    return /*#__PURE__*/react.createElement("option", {
      key: index,
      value: categorie.id
    }, categorie.name);
  }))), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Picture")), /*#__PURE__*/react.createElement("input", {
    type: "file",
    className: "file-input file-input-bordered w-full max-w-xs",
    multiple: true,
    onChange: function (e) {
      const files = Array.from(e.target.files ? e.target.files : []);
      formik.setFieldValue('pictures', files);
    }
  }))), /*#__PURE__*/react.createElement((lib_default()), {
    value: formik.values.data,
    onChange: handleQuillChange,
    modules: modules,
    className: 'h-1/4 custom-toolbar',
    formats: ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'list', 'bullet', 'script', 'indent', 'direction', 'size', 'color', 'background', 'font', 'align', 'link', 'image', 'video']
  }), /*#__PURE__*/react.createElement("div", {
    className: "modal-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-secondary mx-2",
    type: 'submit',
    disabled: loading
  }, "Create category"), /*#__PURE__*/react.createElement("button", {
    className: "btn",
    onClick: function () {
      // @ts-ignore
      window.createNewsModal.close();
    },
    disabled: loading
  }, "Close")))), /*#__PURE__*/react.createElement("h2", {
    className: 'text-center my-4 text-xl'
  }, "News"), /*#__PURE__*/react.createElement("div", {
    className: "w-full max-w-7xl mx-auto mb-2 grid grid-cols-3 md:grid-cols-5 gap-x-2"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    placeholder: "Search",
    className: "input input-bordered w-full md:col-span-3"
  }), /*#__PURE__*/react.createElement("select", {
    className: "select select-bordered w-full max-w-xs ",
    onChange: function (e) {
      return setCategory(e.target.value);
    }
  }, /*#__PURE__*/react.createElement("option", {
    disabled: true,
    selected: true
  }, "Select category"), categories.data.map(function (categorie, index) {
    return /*#__PURE__*/react.createElement("option", {
      key: index,
      value: categorie.id
    }, categorie.name);
  })), /*#__PURE__*/react.createElement("p", {
    className: 'btn btn-primary btn-outline',
    onClick: function () {
      return (
        //@ts-ignore
        window.createNewsModal.showModal()
      );
    }
  }, "New Blog")), /*#__PURE__*/react.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/react.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null), /*#__PURE__*/react.createElement("th", null, "Title"), /*#__PURE__*/react.createElement("th", null, "Author"), /*#__PURE__*/react.createElement("th", null, "Slug"), /*#__PURE__*/react.createElement("th", null, "Category"), /*#__PURE__*/react.createElement("th", null, "Pictures"), /*#__PURE__*/react.createElement("th", null, "Views"), /*#__PURE__*/react.createElement("th", null))), /*#__PURE__*/react.createElement("tbody", null, blogs.data.map(function (blog, index) {
    return /*#__PURE__*/react.createElement(BlogRow, {
      blog: blog,
      key: index,
      categories: categories
    });
  })))));
}
function BlogRow(_ref) {
  let {
    blog,
    categories
  } = _ref;
  const [errorformik, setError] = (0,react.useState)('');
  const [loading, setLoading] = (0,react.useState)(false);
  const form = (0,index_esm/* object */.Ry)({
    title: (0,index_esm/* string */.Z_)().required('The title can\'t be empty.'),
    category: (0,index_esm/* number */.Rx)().required('The category can\'t be empty'),
    tags: (0,index_esm/* string */.Z_)().required('The tag can\'t be empty'),
    slug: (0,index_esm/* string */.Z_)().required('The slug can\'t be empty'),
    data: (0,index_esm/* string */.Z_)().required('The data can\'t be empty'),
    pictures: (0,index_esm/* array */.IX)().of((0,index_esm/* mixed */.nK)()).nullable()
  });
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      title: blog.title,
      category: blog.category_id,
      tags: blog.tags,
      slug: blog.slug,
      data: blog.content,
      pictures: []
    },
    validationSchema: form,
    onSubmit: function (values) {
      if (values.category === -1) {
        setError('Error: Need to select a category');
      }
      console.log(values);
      setLoading(true);
      setError('');
      const tag = values.tags.split(',');
      blogs_editNews(blog.id, values.title, values.category, tag, values.slug, values.data, values.pictures).then(function (data) {
        console.log(data);
        if (data.status !== 'success') {
          setError(`Error: ${data.message}`);
          setLoading(false);
          return null;
        }
        // @ts-ignore
        window[theId].close();
        const inputs = document.querySelectorAll('input:not(#search)');
        const textareas = document.querySelectorAll('textarea');
        inputs.forEach(function (input) {
          input.value = '';
        });
        textareas.forEach(function (textarea) {
          textarea.value = '';
        });
        setLoading(false);
        react_toastify_esm/* toast */.Am.success(`News created successfully.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      }).catch(function (e) {
        setError(`Error: ${e}`);
        setLoading(false);
      });
    }
  });
  const handleQuillChange = function (value) {
    formik.setFieldValue('data', value);
  };
  const theId = `editCateModal-${blog.title}`;
  return /*#__PURE__*/react.createElement("tr", {
    className: "hover"
  }, /*#__PURE__*/react.createElement("th", null, blog.id), /*#__PURE__*/react.createElement("td", null, blog.title), /*#__PURE__*/react.createElement("td", null, blog.author), /*#__PURE__*/react.createElement("td", null, blog.slug), /*#__PURE__*/react.createElement("td", null, blog.category_id), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("ul", {
    className: "list-disc"
  }, JSON.parse(blog.pictures).map(function (picture, index) {
    return /*#__PURE__*/react.createElement("li", {
      key: index,
      className: 'hover:text-blue-600',
      onClick: function () {
        return window.open(`https://api.bagou450.com${picture}`, '_blank');
      }
    }, picture);
  }))), /*#__PURE__*/react.createElement("td", null, blog.views), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("div", {
    className: 'justify-end mx-2 grid grid-cols-1 md:grid-cols-2'
  }, /*#__PURE__*/react.createElement("dialog", {
    id: theId,
    className: "modal"
  }, /*#__PURE__*/react.createElement("form", {
    method: "dialog",
    className: "modal-box w-11/12 max-w-5xl",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("h3", {
    className: "font-bold text-lg"
  }, "Edit category:"), errorformik && /*#__PURE__*/react.createElement("div", {
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
  })), /*#__PURE__*/react.createElement("span", null, errorformik)), /*#__PURE__*/react.createElement("div", {
    className: 'grid grid-cols-2 md:grid-cols-2 my-4 gap-x-2'
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Title")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    defaultValue: blog.title,
    onChange: formik.handleChange,
    placeholder: "title",
    id: "title",
    name: "title",
    className: "input input-bordered w-full max-w-xs"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Slug")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    defaultValue: blog.slug,
    onChange: formik.handleChange,
    placeholder: "slug",
    id: "slug",
    name: "slug",
    className: "input input-bordered w-full max-w-xs"
  }))), /*#__PURE__*/react.createElement("div", {
    className: 'grid grid-cols-2 md:grid-cols-2 my-4 gap-x-2'
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Tag (comma separated)")), /*#__PURE__*/react.createElement("input", {
    type: "text",
    defaultValue: JSON.parse(blog.tags).join(','),
    onChange: formik.handleChange,
    placeholder: "tags",
    id: "tags",
    name: "tags",
    className: "input input-bordered w-full max-w-xs"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Category")), /*#__PURE__*/react.createElement("select", {
    className: "select select-bordered w-full max-w-xs ",
    defaultValue: blog.category_id,
    onChange: function (e) {
      return formik.setFieldValue('category', e.target.value);
    }
  }, /*#__PURE__*/react.createElement("option", {
    disabled: true,
    selected: true
  }, "Select category"), categories.data.map(function (categorie, index) {
    return /*#__PURE__*/react.createElement("option", {
      key: index,
      value: categorie.id
    }, categorie.name);
  }))), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-full max-w-xs"
  }, /*#__PURE__*/react.createElement("label", {
    className: "label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "Picture")), /*#__PURE__*/react.createElement("input", {
    type: "file",
    className: "file-input file-input-bordered w-full max-w-xs",
    multiple: true,
    onChange: function (e) {
      const files = Array.from(e.target.files ? e.target.files : []);
      formik.setFieldValue('pictures', files);
    }
  }))), /*#__PURE__*/react.createElement((lib_default()), {
    value: formik.values.data,
    onChange: handleQuillChange,
    modules: modules,
    className: 'h-1/4 custom-toolbar',
    formats: ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'list', 'bullet', 'script', 'indent', 'direction', 'size', 'color', 'background', 'font', 'align', 'link', 'image', 'video']
  }), /*#__PURE__*/react.createElement("div", {
    className: "modal-action"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-secondary mx-2",
    type: 'submit',
    disabled: loading
  }, "Edit category"), /*#__PURE__*/react.createElement("button", {
    className: "btn",
    onClick: function () {
      // @ts-ignore
      window[theId].close();
    },
    disabled: loading
  }, "Close")))), /*#__PURE__*/react.createElement("button", {
    className: 'btn btn-secondary btn-outline border-0',
    onClick: function () {
      return (
        // @ts-ignore
        window[theId].showModal()
      );
    }
  }, "Edit"), /*#__PURE__*/react.createElement("button", {
    className: 'btn btn-error mx-4 my-4 md:my-0',
    onClick: function () {
      // @ts-ignore
      blogs_deleteNews(blog.id);
    }
  }, "Remove"))));
}
;// CONCATENATED MODULE: ./src/components/Admin/Blogs/BlogsContainer.tsx




function BlogsContainer() {
  const [category, setCategory] = (0,react.useState)(false);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavBarAccount/* default */.Z, {
    tab: 'blogs'
  }), /*#__PURE__*/react.createElement("div", {
    className: "form-control w-52 mx-auto"
  }, /*#__PURE__*/react.createElement("label", {
    className: "cursor-pointer label"
  }, /*#__PURE__*/react.createElement("span", {
    className: "label-text"
  }, "News/Categories"), /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    className: "toggle toggle-accent",
    checked: category,
    onClick: function () {
      return setCategory(!category);
    }
  }))), category ? /*#__PURE__*/react.createElement(CategoryContainer, null) : /*#__PURE__*/react.createElement(NewsContainer, null));
}

/***/ }),

/***/ 8372:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.custom-toolbar .ql-toolbar{background-color:white}.ql-align-center{text-align:center}.ql h1{font-size:3rem;line-height:1}.ql h2{font-size:2.25rem;line-height:2.5rem}.ql h3{font-size:1.875rem;line-height:2.25rem}.ql h4{font-size:1.5rem;line-height:2rem}.ql h5{font-size:1.25rem;line-height:1.75rem}.ql h6{font-size:1.125rem;line-height:1.75rem}.ql .ql-align-right{text-align:right}.ql blockquote{font-size:1.4em;width:60%;font-family:Open Sans, serif;font-style:italic;color:white;padding:1.2em 30px 1.2em 75px;border-left:8px solid #78C0A8;line-height:1.6;position:relative}.ql blockquote::before{font-family:Arial, serif;content:"\\201C";color:#78C0A8;font-size:4em;position:absolute;left:10px;top:-10px}.ql blockquote::after{content:''}.ql pre.ql-syntax.ql-align-justify{border-radius:4px;padding:1em;overflow-x:auto}.ql .ql-size-huge{font-size:3rem;line-height:1}.ql .ql-size-large{font-size:1.875rem;line-height:2.25rem}.ql .ql-size-small{font-size:1.125rem;line-height:1.75rem}
`, "",{"version":3,"sources":["webpack://./src/components/Admin/Blogs/toolBar.scss"],"names":[],"mappings":"AAAA,4BACI,sBAAuB,CAC1B,iBAEG,iBAAkB,CACrB,OAIO,cAAe,CACf,aAAc,CAHtB,OAMI,iBAAkB,CAClB,kBAAmB,CAPvB,OAUI,kBAAmB,CACnB,mBAAoB,CAXxB,OAcI,gBAAiB,CACjB,gBAAiB,CAfrB,OAkBI,iBAAkB,CAClB,mBAAoB,CAnBxB,OAsBI,kBAAmB,CACnB,mBAAoB,CAvBxB,oBA0BQ,gBAAiB,CA1BzB,eA6BQ,eAAgB,CAChB,SAAS,CACT,4BAA6B,CAC7B,iBAAiB,CACjB,WAAY,CACZ,6BAA6B,CAC7B,6BAA8B,CAC9B,eAAe,CACf,iBAAkB,CArC1B,uBAyCQ,wBAAyB,CACzB,eAAgB,CAChB,aAAa,CACb,aAAa,CACb,iBAAkB,CAClB,SAAU,CACV,SAAS,CA/CjB,sBAmDQ,UAAW,CAnDnB,mCAuDQ,iBAAkB,CAClB,WAAY,CACZ,eAAgB,CAzDxB,kBA4DQ,cAAe,CACf,aAAc,CA7DtB,mBAgEQ,kBAAmB,CACnB,mBAAoB,CAjE5B,mBAoEQ,kBAAmB,CACnB,mBAAoB","sourcesContent":[".custom-toolbar .ql-toolbar {\n    background-color: white;\n}\n.ql-align-center {\n    text-align: center;\n}\n\n.ql {\n    h1 {\n        font-size: 3rem; /* 48px */\n        line-height: 1;\n    }\n    h2 {\n    font-size: 2.25rem; /* 36px */\n    line-height: 2.5rem; /* 40px */\n    }\n    h3 {\n    font-size: 1.875rem; /* 30px */\n    line-height: 2.25rem; /* 36px */\n    }\n    h4 {\n    font-size: 1.5rem; /* 24px */\n    line-height: 2rem; /* 32px */\n    }\n    h5 {\n    font-size: 1.25rem; /* 20px */\n    line-height: 1.75rem; /* 28px */\n    }\n    h6 {\n    font-size: 1.125rem; /* 18px */\n    line-height: 1.75rem; /* 28px */\n    }\n    .ql-align-right {\n        text-align: right;\n    }\n    blockquote{\n        font-size: 1.4em;\n        width:60%;\n        font-family: Open Sans, serif;\n        font-style:italic;\n        color: white;\n        padding:1.2em 30px 1.2em 75px;\n        border-left:8px solid #78C0A8 ;\n        line-height:1.6;\n        position: relative;\n    }\n\n    blockquote::before{\n        font-family: Arial, serif;\n        content: \"\\201C\";\n        color:#78C0A8;\n        font-size:4em;\n        position: absolute;\n        left: 10px;\n        top:-10px;\n    }\n\n    blockquote::after{\n        content: '';\n    }\n\n    pre.ql-syntax.ql-align-justify {\n        border-radius: 4px;\n        padding: 1em;\n        overflow-x: auto;\n    }\n    .ql-size-huge {\n        font-size: 3rem; /* 48px */\n        line-height: 1;\n    }\n    .ql-size-large {\n        font-size: 1.875rem; /* 30px */\n        line-height: 2.25rem; /* 36px */\n    }\n    .ql-size-small {\n        font-size: 1.125rem; /* 18px */\n        line-height: 1.75rem; /* 28px */\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4695:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toolBar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8372);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toolBar_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toolBar_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toolBar_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toolBar_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);
//# sourceMappingURL=190.bundle.js.map