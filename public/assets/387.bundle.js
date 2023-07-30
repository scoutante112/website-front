"use strict";
(globalThis["__LOADABLE_LOADED_CHUNKS__"] = globalThis["__LOADABLE_LOADED_CHUNKS__"] || []).push([[387],{

/***/ 8387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Licenses)
});

// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 56 modules
var formik_esm = __webpack_require__(3449);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
;// CONCATENATED MODULE: ./src/api/licenses/getLicenses.ts


const createLicense = function (email, boughtlocation) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.post(`${config/* config */.v.privateapilink}/license`, {
      userid: email,
      type: boughtlocation
    }).then(function () {
      return resolve();
    }).catch(reject);
  });
};
/* harmony default export */ const getLicenses = (createLicense);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(7828);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 168 modules
var motion = __webpack_require__(4937);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/errors.mjs
var errors = __webpack_require__(5487);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/ReorderContext.mjs


const ReorderContext = (0,react.createContext)(null);



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(6681);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/array.mjs
var array = __webpack_require__(10);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/mix.mjs
var mix = __webpack_require__(22);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs



function checkReorder(order, value, offset, velocity) {
    if (!velocity)
        return order;
    const index = order.findIndex((item) => item.value === value);
    if (index === -1)
        return order;
    const nextOffset = velocity > 0 ? 1 : -1;
    const nextItem = order[index + nextOffset];
    if (!nextItem)
        return order;
    const item = order[index];
    const nextLayout = nextItem.layout;
    const nextItemCenter = (0,mix/* mix */.C)(nextLayout.min, nextLayout.max, 0.5);
    if ((nextOffset === 1 && item.layout.max + offset > nextItemCenter) ||
        (nextOffset === -1 && item.layout.min + offset < nextItemCenter)) {
        return (0,array/* moveItem */.uo)(order, index, index + nextOffset);
    }
    return order;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/Reorder/Group.mjs








function ReorderGroup({ children, as = "ul", axis = "y", onReorder, values, ...props }, externalRef) {
    const Component = (0,use_constant/* useConstant */.h)(() => (0,motion/* motion */.E)(as));
    const order = [];
    const isReordering = (0,react.useRef)(false);
    (0,errors/* invariant */.k)(Boolean(values), "Reorder.Group must be provided a values prop");
    const context = {
        axis,
        registerItem: (value, layout) => {
            /**
             * Ensure entries can't add themselves more than once
             */
            if (layout &&
                order.findIndex((entry) => value === entry.value) === -1) {
                order.push({ value, layout: layout[axis] });
                order.sort(compareMin);
            }
        },
        updateOrder: (id, offset, velocity) => {
            if (isReordering.current)
                return;
            const newOrder = checkReorder(order, id, offset, velocity);
            if (order !== newOrder) {
                isReordering.current = true;
                onReorder(newOrder
                    .map(getValue)
                    .filter((value) => values.indexOf(value) !== -1));
            }
        },
    };
    (0,react.useEffect)(() => {
        isReordering.current = false;
    });
    return (react.createElement(Component, { ...props, ref: externalRef, ignoreStrict: true },
        react.createElement(ReorderContext.Provider, { value: context }, children)));
}
const Group = (0,react.forwardRef)(ReorderGroup);
function getValue(item) {
    return item.value;
}
function compareMin(a, b) {
    return a.layout.min - b.layout.min;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/index.mjs
var es_value = __webpack_require__(3234);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__(6014);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-motion-value.mjs





/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    const value = (0,use_constant/* useConstant */.h)(() => (0,es_value/* motionValue */.B)(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    const { isStatic } = (0,react.useContext)(MotionConfigContext/* MotionConfigContext */._);
    if (isStatic) {
        const [, setLatest] = (0,react.useState)(initial);
        (0,react.useEffect)(() => value.on("change", setLatest), []);
    }
    return value;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/interpolate.mjs + 3 modules
var interpolate = __webpack_require__(5367);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/transform.mjs


const isCustomValueType = (v) => {
    return typeof v === "object" && v.mix;
};
const getMixer = (v) => (isCustomValueType(v) ? v.mix : undefined);
function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0,interpolate/* interpolate */.s)(inputRange, outputRange, {
        mixer: getMixer(outputRange[0]),
        ...options,
    });
    return useImmediate ? interpolator(inputValue) : interpolator;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/index.mjs + 1 modules
var frameloop = __webpack_require__(3380);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(8868);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-combine-values.mjs




function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    const value = useMotionValue(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    const updateValue = () => value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        const scheduleUpdate = () => frameloop/* frame */.Wi.update(updateValue, false, true);
        const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
        return () => {
            subscriptions.forEach((unsubscribe) => unsubscribe());
            (0,frameloop/* cancelFrame */.Pn)(updateValue);
        };
    });
    return value;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-transform.mjs




function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    const transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : transform(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
    const latest = (0,use_constant/* useConstant */.h)(() => []);
    return useCombineMotionValues(values, () => {
        latest.length = 0;
        const numValues = values.length;
        for (let i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var is_motion_value = __webpack_require__(406);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/Reorder/Item.mjs










function useDefaultMotionValue(value, defaultValue = 0) {
    return (0,is_motion_value/* isMotionValue */.i)(value) ? value : useMotionValue(defaultValue);
}
function ReorderItem({ children, style = {}, value, as = "li", onDrag, layout = true, ...props }, externalRef) {
    const Component = (0,use_constant/* useConstant */.h)(() => (0,motion/* motion */.E)(as));
    const context = (0,react.useContext)(ReorderContext);
    const point = {
        x: useDefaultMotionValue(style.x),
        y: useDefaultMotionValue(style.y),
    };
    const zIndex = useTransform([point.x, point.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
    const measuredLayout = (0,react.useRef)(null);
    (0,errors/* invariant */.k)(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
    const { axis, registerItem, updateOrder } = context;
    (0,react.useEffect)(() => {
        registerItem(value, measuredLayout.current);
    }, [context]);
    return (react.createElement(Component, { drag: axis, ...props, dragSnapToOrigin: true, style: { ...style, x: point.x, y: point.y, zIndex }, layout: layout, onDrag: (event, gesturePoint) => {
            const { velocity } = gesturePoint;
            velocity[axis] &&
                updateOrder(value, point[axis].get(), velocity[axis]);
            onDrag && onDrag(event, gesturePoint);
        }, onLayoutMeasure: (measured) => {
            measuredLayout.current = measured;
        }, ref: externalRef, ignoreStrict: true }, children));
}
const Item = (0,react.forwardRef)(ReorderItem);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/Reorder/index.mjs



const Reorder = {
    Group: Group,
    Item: Item,
};



// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
;// CONCATENATED MODULE: ./src/components/Licenses.tsx







const Licenses_form = (0,index_esm/* object */.Ry)({
  userid: (0,index_esm/* string */.Z_)().required("This field is required")
});
function Licenses() {
  const [boughtlocation, setBoughtlocation] = (0,react.useState)("bgshop");
  const formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      userid: ""
    },
    validationSchema: Licenses_form,
    onSubmit: function (values) {
      setLicense(true);
      getLicenses(values.userid, boughtlocation).then(function () {
        react_toastify_esm/* toast */.Am.success(boughtlocation === "bbb" ? "Your license has been set trough BuiltByBit conversation. Please check your BuiltByBit message center." : "Your license has been sent to your email (check your spam)!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      }).catch(function () {
        react_toastify_esm/* toast */.Am.error("Error from the api. Maybe you selected the bad store? Refresh the page and retry!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      });
    }
  });
  document.title = "Bagou450 - Licenses";
  const isAscending = function (thelist) {
    return thelist.every(function (x, i) {
      return i === 0 || x >= thelist[i - 1];
    });
  };
  const [selected, setSelected] = (0,react.useState)(false);
  const [info, setInfo] = (0,react.useState)(false);
  const [license, setLicense] = (0,react.useState)(false);
  let liste = [0, 1, 2, 3, 4];
  while (isAscending(liste) === true) {
    liste = liste.slice().sort(function () {
      return Math.random() - 0.5;
    });
  }
  const [captcha, setCaptcha] = (0,react.useState)(liste);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "text-center my-4"
  }, /*#__PURE__*/react.createElement(react_toastify_esm/* ToastContainer */.Ix, null), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "text-white text-4xl"
  }, "Licenses"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
    className: "steps steps-vertical lg:steps-horizontal mb-4"
  }, /*#__PURE__*/react.createElement("li", {
    className: "step step-primary"
  }, "Select the store"), /*#__PURE__*/react.createElement("li", {
    className: selected ? "step step-primary" : "step"
  }, "Resolve the captcha"), /*#__PURE__*/react.createElement("li", {
    className: info ? "step step-primary" : "step"
  }, "Enter your informations"), /*#__PURE__*/react.createElement("li", {
    className: license ? "step step-primary" : "step"
  }, "Get your license")), /*#__PURE__*/react.createElement(AnimatePresence/* AnimatePresence */.M, null, "  ", !selected ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
    initial: {
      opacity: 0
    },
    transition: {
      duration: 0.5
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/react.createElement("p", {
    className: "mb-2 mt-2 text-white text-2xl"
  }, "Where you bought it?:"), /*#__PURE__*/react.createElement("div", {
    className: "carousel max-h-96 my-4 w-full"
  }, /*#__PURE__*/react.createElement("div", {
    id: "slide1",
    className: "carousel-item relative w-full"
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://cdn.bagou450.com/assets/img/bgshop.webp",
    alt: "Bagou450 Shop",
    className: "mx-auto max-w-screen-md"
  }), /*#__PURE__*/react.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /*#__PURE__*/react.createElement("a", {
    href: "/licenses#slide4",
    className: "btn btn-circle",
    onClick: function () {
      setBoughtlocation("pm");
      window.scrollTo(0, 0);
    }
  }, "\u276E"), /*#__PURE__*/react.createElement("a", {
    href: "/licenses#slide2",
    className: "btn btn-circle",
    onClick: function () {
      setBoughtlocation("bbb");
      window.scrollTo(0, 0);
    }
  }, "\u276F"))), /*#__PURE__*/react.createElement("div", {
    id: "slide2",
    className: "carousel-item relative w-full"
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://cdn.bagou450.com/assets/img/bbb.webp",
    alt: "BuiltByBits",
    className: "mx-auto max-w-screen-md"
  }), /*#__PURE__*/react.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /*#__PURE__*/react.createElement("a", {
    href: "/licenses#slide1",
    className: "btn btn-circle",
    onClick: function () {
      setBoughtlocation("bgshop");
      window.scrollTo(0, 0);
    }
  }, "\u276E"), /*#__PURE__*/react.createElement("a", {
    href: "/licenses#slide3",
    className: "btn btn-circle",
    onClick: function () {
      setBoughtlocation("ssx");
      window.scrollTo(0, 0);
    }
  }, "\u276F"))), /*#__PURE__*/react.createElement("div", {
    id: "slide3",
    className: "carousel-item relative w-full"
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://cdn.bagou450.com/assets/img/ssx.webp",
    alt: "SourceXChange",
    className: "mx-auto max-w-screen-md"
  }), /*#__PURE__*/react.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /*#__PURE__*/react.createElement("a", {
    href: "/licenses#slide2",
    className: "btn btn-circle",
    onClick: function () {
      setBoughtlocation("bbb");
      window.scrollTo(0, 0);
    }
  }, "\u276E"), /*#__PURE__*/react.createElement("a", {
    href: "/licenses#slide4",
    className: "btn btn-circle",
    onClick: function () {
      setBoughtlocation("pm");
      window.scrollTo(0, 0);
    }
  }, "\u276F"))), /*#__PURE__*/react.createElement("div", {
    id: "slide4",
    className: "carousel-item relative w-full"
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://cdn.bagou450.com/assets/img/pm.webp",
    alt: "Pterodactyl Market",
    className: "mx-auto max-w-screen-md"
  }), /*#__PURE__*/react.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /*#__PURE__*/react.createElement("a", {
    href: "/licenses#slide3",
    className: "btn btn-circle",
    onClick: function () {
      setBoughtlocation("ssx");
      window.scrollTo(0, 0);
    }
  }, "\u276E"), /*#__PURE__*/react.createElement("a", {
    href: "/licenses#slide1",
    className: "btn btn-circle",
    onClick: function () {
      setBoughtlocation("bgshop");
      window.scrollTo(0, 0);
    }
  }, "\u276F")))), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-primary mb-4",
    onClick: function () {
      return setSelected(!selected);
    }
  }, "Select this shop")) : null), /*#__PURE__*/react.createElement(AnimatePresence/* AnimatePresence */.M, null, selected && !info && /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
    initial: {
      opacity: 0
    },
    transition: {
      duration: 0.5,
      delay: 0.5
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/react.createElement("p", {
    className: "my-2"
  }, "Sort in ascending order"), /*#__PURE__*/react.createElement(Reorder.Group, {
    axis: "y",
    values: captcha,
    onReorder: setCaptcha
  }, captcha.map(function (item, key) {
    return /*#__PURE__*/react.createElement(Reorder.Item, {
      key: item,
      value: item,
      className: "mx-auto border-2 border-solid border-blue-700 w-32 py-2 my-2"
    }, item);
  }), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-primary",
    onClick: function () {
      if (isAscending(captcha) === true) {
        setInfo(true);
        setSelected(true);
      } else {
        react_toastify_esm/* toast */.Am.error(["You need to learn how to count no?", "No you are serious here?", "Nope that can't work.", "So if i understand 2 > 5 that right?", "Please read again.", "Hello robot sorry but i can't let you continue."][Math.floor(Math.random() * 5)], {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
        console.log("error");
      }
    }
  }, "Submit")))), /*#__PURE__*/react.createElement(AnimatePresence/* AnimatePresence */.M, null, boughtlocation === "bgshop" && info ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
    initial: {
      opacity: 0
    },
    transition: {
      duration: 0.5,
      delay: 1
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, "Sorry but this is not available for the moment") : boughtlocation === "ssx" && info ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
    initial: {
      opacity: 0
    },
    transition: {
      duration: 0.5,
      delay: 1
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/react.createElement("p", {
    className: "mb-2 mt-2 text-white text-2xl"
  }, "Enter your email:"), /*#__PURE__*/react.createElement("div", {
    className: "mt-4 justify-center"
  }, /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("input", {
    id: "userid",
    name: "userid",
    type: "userid",
    placeholder: "email@exemple.com",
    onChange: formik.handleChange,
    required: true,
    className: "input input-bordered input-info w-full input-lg max-w-xs"
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-primary mt-4",
    type: "submit",
    disabled: license
  }, "Submit")))) : boughtlocation === "pm" && info ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
    initial: {
      opacity: 0
    },
    transition: {
      duration: 0.5,
      delay: 1
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, "If you bought it on Pterodactyl Market please just use your PayPal transaction id as License") : boughtlocation === "bbb" && info ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
    initial: {
      opacity: 0
    },
    transition: {
      duration: 0.5,
      delay: 1
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/react.createElement("p", {
    className: "mb-2 mt-2 text-white text-2xl"
  }, "Enter your User id:"), /*#__PURE__*/react.createElement("div", {
    className: "mt-4 justify-center"
  }, /*#__PURE__*/react.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react.createElement("input", {
    id: "userid",
    name: "userid",
    type: "userid",
    placeholder: "187451",
    onChange: formik.handleChange,
    required: true,
    className: "input input-bordered input-info w-full input-lg max-w-xs"
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline btn-primary mt-4",
    type: "submit",
    disabled: license
  }, "Submit"))), /*#__PURE__*/react.createElement("div", {
    className: "text-center mx-auto"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "text-white text-2xl"
  }, "How to find your UserId?"), /*#__PURE__*/react.createElement("p", null, "For find your user id go on ", /*#__PURE__*/react.createElement("a", {
    href: "https://builtbybits.com",
    target: "_blank",
    rel: "noreferrer"
  }, "BuiltByBits"), " and click on your account.", /*#__PURE__*/react.createElement("br", null), " After click on your username for go on your account page.", /*#__PURE__*/react.createElement("br", null), "When you are on the account page check the url you normally see at end something like \"bagou450.", /*#__PURE__*/react.createElement("span", {
    className: "font-bold"
  }, "187451"), "\".", /*#__PURE__*/react.createElement("br", null), "You need to take the number after your username.", /*#__PURE__*/react.createElement("br", null), "Here with this exemple the id is 187451! If you need more help see the screenshot. "), /*#__PURE__*/react.createElement("img", {
    src: "https://cdn.bagou450.com/assets/img/findbbbuserid.webp",
    className: "h-[50%] w-[50%] mx-auto text-center",
    alt: "Find BuiltByBits username"
  }))) : info && /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
    initial: {
      opacity: 0
    },
    transition: {
      duration: 0.5,
      delay: 1
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-red-500"
  }, "Error 784-481 : Please reload the page")))))), /*#__PURE__*/react.createElement("div", {
    className: "mx-auto text-center "
  }, /*#__PURE__*/react.createElement("h2", {
    className: "text-white text-2xl mb-4"
  }, "Some statistics"), /*#__PURE__*/react.createElement("div", {
    className: "stats shadow my-4 bg-base-300"
  }, /*#__PURE__*/react.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/react.createElement("div", {
    className: "stat-figure text-secondary"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    className: "inline-block w-8 h-8 stroke-current"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "stat-title"
  }, "Licenses"), /*#__PURE__*/react.createElement("div", {
    className: "stat-value"
  }, "+750")), /*#__PURE__*/react.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/react.createElement("div", {
    className: "stat-figure text-secondary"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    className: "inline-block w-8 h-8 stroke-current"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "stat-title"
  }, "Daily usage"), /*#__PURE__*/react.createElement("div", {
    className: "stat-value"
  }, "+25 000")), /*#__PURE__*/react.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/react.createElement("div", {
    className: "stat-figure text-secondary"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    className: "inline-block w-8 h-8 stroke-current"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "stat-title"
  }, "Uptime"), /*#__PURE__*/react.createElement("div", {
    className: "stat-value"
  }, "99.99%")))), /*#__PURE__*/react.createElement("div", {
    className: "grid grid-cols-2"
  }));
}

/***/ })

}]);
//# sourceMappingURL=387.bundle.js.map