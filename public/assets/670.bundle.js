"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[670],{

/***/ 6154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Licenses)
});

// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
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
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(8868);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs



function useIsMounted() {
    const isMounted = (0,react.useRef)(false);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/frame.mjs + 2 modules
var frameloop_frame = __webpack_require__(5618);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-force-update.mjs




function useForceUpdate() {
    const isMounted = useIsMounted();
    const [forcedRenderCount, setForcedRenderCount] = (0,react.useState)(0);
    const forceRender = (0,react.useCallback)(() => {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    const deferredForceRender = (0,react.useCallback)(() => frameloop_frame/* frame */.Wi.postRender(forceRender), [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__(240);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(6681);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs



/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = (0,react.useId)();
    const ref = (0,react.useRef)(null);
    const size = (0,react.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react.useInsertionEffect)(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return (react.createElement(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size }, react.cloneElement(children, { ref })));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs






const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = (0,use_constant/* useConstant */.h)(newChildrenMap);
    const id = (0,react.useId)();
    const context = (0,react.useMemo)(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    (0,react.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = react.createElement(PopChild, { isPresent: isPresent }, children);
    }
    return (react.createElement(PresenceContext/* PresenceContext */.O.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__(5364);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs


function useUnmountEffect(callback) {
    return (0,react.useEffect)(() => () => callback(), []);
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/errors.mjs
var errors = __webpack_require__(5487);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs










const getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
    children.forEach((child) => {
        const key = getChildKey(child);
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react.Children.forEach(children, (child) => {
        if ((0,react.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync", }) => {
    (0,errors/* invariant */.k)(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    const forceRender = (0,react.useContext)(LayoutGroupContext/* LayoutGroupContext */.p).forceRender || useForceUpdate()[0];
    const isMounted = useIsMounted();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    const filteredChildren = onlyElements(children);
    let childrenToRender = filteredChildren;
    const exitingChildren = (0,react.useRef)(new Map()).current;
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    const presentChildren = (0,react.useRef)(childrenToRender);
    // A lookup table to quickly reference components by key
    const allChildren = (0,react.useRef)(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    const isInitialRender = (0,react.useRef)(true);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    useUnmountEffect(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exitingChildren.clear();
    });
    if (isInitialRender.current) {
        return (react.createElement(react.Fragment, null, childrenToRender.map((child) => (react.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child)))));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = [...childrenToRender];
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    const presentKeys = presentChildren.current.map(getChildKey);
    const targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    const numPresent = presentKeys.length;
    for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
            exitingChildren.set(key, undefined);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (mode === "wait" && exitingChildren.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exitingChildren.forEach((component, key) => {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        const child = allChildren.get(key);
        if (!child)
            return;
        const insertionIndex = presentKeys.indexOf(key);
        let exitingComponent = component;
        if (!exitingComponent) {
            const onExit = () => {
                allChildren.delete(key);
                exitingChildren.delete(key);
                // Remove this child from the present children
                const removeIndex = presentChildren.current.findIndex((presentChild) => presentChild.key === key);
                presentChildren.current.splice(removeIndex, 1);
                // Defer re-rendering until all exiting children have indeed left
                if (!exitingChildren.size) {
                    presentChildren.current = filteredChildren;
                    if (isMounted.current === false)
                        return;
                    forceRender();
                    onExitComplete && onExitComplete();
                }
            };
            exitingComponent = (react.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
            exitingChildren.set(key, exitingComponent);
        }
        childrenToRender.splice(insertionIndex, 0, exitingComponent);
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exitingChildren.has(key) ? (child) : (react.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    if (false) {}
    return (react.createElement(react.Fragment, null, exitingChildren.size
        ? childrenToRender
        : childrenToRender.map((child) => (0,react.cloneElement)(child))));
};



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 192 modules
var motion = __webpack_require__(665);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js

function CheckIcon({
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
    d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react.forwardRef(CheckIcon);
/* harmony default export */ const esm_CheckIcon = (ForwardRef);
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
      });
    }
  });
  document.title = "Bagou450 - Licenses";
  const [selected, setSelected] = (0,react.useState)(false);
  const [license, setLicense] = (0,react.useState)(false);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "text-center my-4"
  }, /*#__PURE__*/react.createElement(react_toastify_esm/* ToastContainer */.Ix, null), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: "text-white text-4xl"
  }, "Licenses"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "lg:border-b lg:border-t lg:border-gray-200 mb-4"
  }, /*#__PURE__*/react.createElement("nav", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    "aria-label": "Progress"
  }, /*#__PURE__*/react.createElement("ol", {
    role: "list",
    className: "overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
  }, /*#__PURE__*/react.createElement("li", {
    className: "relative overflow-hidden lg:flex-1"
  }, /*#__PURE__*/react.createElement("div", {
    className: "overflow-hidden border border-gray-200 lg:border-0"
  }, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "group"
  }, /*#__PURE__*/react.createElement("span", {
    className: "absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
    "aria-hidden": "true"
  }), /*#__PURE__*/react.createElement("span", {
    className: "flex items-center px-6 py-5 text-sm font-medium"
  }, /*#__PURE__*/react.createElement("span", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/react.createElement("span", {
    className: "flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600"
  }, /*#__PURE__*/react.createElement(esm_CheckIcon, {
    className: "h-6 w-6 text-white",
    "aria-hidden": "true"
  }))), /*#__PURE__*/react.createElement("span", {
    className: "ml-4 flex min-w-0 flex-col"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-sm font-medium"
  }, "Select the store")))))), /*#__PURE__*/react.createElement("li", {
    className: "relative overflow-hidden lg:flex-1"
  }, /*#__PURE__*/react.createElement("div", {
    className: "overflow-hidden border border-gray-200 lg:border-0"
  }, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: selected ? 'group' : 'group'
  }, /*#__PURE__*/react.createElement("span", {
    className: "absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
    "aria-hidden": "true"
  }), /*#__PURE__*/react.createElement("span", {
    className: "flex items-center px-6 py-5 text-sm font-medium"
  }, /*#__PURE__*/react.createElement("span", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/react.createElement("span", {
    className: `flex h-10 w-10 items-center justify-center rounded-full border-2 ${selected ? 'border-indigo-600' : 'border-gray-300'}`
  }, /*#__PURE__*/react.createElement("span", {
    className: selected ? 'text-indigo-600' : 'text-gray-500'
  }, "2"))), /*#__PURE__*/react.createElement("span", {
    className: "ml-4 flex min-w-0 flex-col"
  }, /*#__PURE__*/react.createElement("span", {
    className: `text-sm font-medium ${selected ? 'text-indigo-600' : 'text-gray-500'}`
  }, "Enter your informations")))))), /*#__PURE__*/react.createElement("li", {
    className: "relative overflow-hidden lg:flex-1"
  }, /*#__PURE__*/react.createElement("div", {
    className: "overflow-hidden border border-gray-200 lg:border-0"
  }, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: license ? 'group' : 'group'
  }, /*#__PURE__*/react.createElement("span", {
    className: "absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
    "aria-hidden": "true"
  }), /*#__PURE__*/react.createElement("span", {
    className: "flex items-center px-6 py-5 text-sm font-medium"
  }, /*#__PURE__*/react.createElement("span", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/react.createElement("span", {
    className: `flex h-10 w-10 items-center justify-center rounded-full border-2 ${license ? 'border-indigo-600' : 'border-gray-300'}`
  }, /*#__PURE__*/react.createElement("span", {
    className: license ? 'text-indigo-600' : 'text-gray-500'
  }, "3"))), /*#__PURE__*/react.createElement("span", {
    className: "ml-4 flex min-w-0 flex-col"
  }, /*#__PURE__*/react.createElement("span", {
    className: `text-sm font-medium ${license ? 'text-indigo-600' : 'text-gray-500'}`
  }, "Get your license"))))))))), /*#__PURE__*/react.createElement(AnimatePresence, null, "  ", !selected ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
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
    className: " grid xl:grid-cols-2 gap-x-8 gap-y-8 mx-16"
  }, /*#__PURE__*/react.createElement("div", {
    id: "slide1",
    className: "carousel-item relative w-full bg-gray-300 p-8 rounded-lg hover:bg-gray-200 hover:scale-105 duration-200 shadow-xl",
    onClick: function () {
      setSelected(true);
      setBoughtlocation('bgshop');
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://cdn.bagou450.com/assets/img/bgshop.webp",
    alt: "Bagou450 Shop",
    className: "mx-auto max-w-screen-md"
  })), /*#__PURE__*/react.createElement("div", {
    id: "slide2",
    className: "carousel-item relative w-full bg-gray-300 p-8 rounded-lg hover:bg-gray-200 hover:scale-105 duration-200 shadow-xl",
    onClick: function () {
      setSelected(true);
      setBoughtlocation('bbb');
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://cdn.bagou450.com/assets/img/bbb.webp",
    alt: "BuiltByBits",
    className: "mx-auto max-w-screen-md"
  })), /*#__PURE__*/react.createElement("div", {
    id: "slide3",
    className: "carousel-item relative w-full bg-gray-300 p-8 flex items-center justify-center rounded-lg hover:bg-gray-200 hover:scale-105 duration-200 shadow-xl",
    onClick: function () {
      setSelected(true);
      setBoughtlocation('ssx');
    }
  }, /*#__PURE__*/react.createElement("p", {
    className: "mx-auto font-bold max-w-screen-md text-4xl"
  }, "sourceXchange")), /*#__PURE__*/react.createElement("div", {
    id: "slide4",
    className: "carousel-item relative w-full bg-gray-300 p-8 rounded-lg hover:bg-gray-200 hover:scale-105 duration-200 shadow-xl"
  }, /*#__PURE__*/react.createElement("img", {
    src: "https://cdn.bagou450.com/assets/img/pm.webp",
    alt: "Pterodactyl Market",
    onClick: function () {
      setSelected(true);
      setBoughtlocation('pm');
    },
    className: "mx-auto max-w-screen-md"
  })))) : null), /*#__PURE__*/react.createElement(AnimatePresence, null, boughtlocation === "bgshop" && selected ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
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
    },
    className: 'text-black'
  }, "Sorry but this is not available for the moment") : boughtlocation === "ssx" && selected ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
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
    className: "mb-2 mt-2 text-black text-2xl"
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
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-4 "
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
    className: "rounded bg-blue-50 px-12 py-4 text-xl font-semibold text-blue-600 shadow-sm hover:bg-blue-100",
    type: "submit",
    disabled: license
  }, "Submit")))) : boughtlocation === "pm" && selected ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
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
    },
    className: 'text-black'
  }, "If you bought it on Pterodactyl Market please just use your PayPal transaction id as License") : boughtlocation === "bbb" && selected ? /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
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
    className: "mb-2 mt-2 text-black text-2xl"
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
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 mx-auto shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs mb-2 "
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("button", {
    className: " my-2 rounded bg-blue-50 px-12 py-4 text-xl font-semibold text-blue-600 shadow-sm hover:bg-blue-100",
    type: "submit",
    disabled: license
  }, "Submit"))), /*#__PURE__*/react.createElement("div", {
    className: "text-center mx-auto"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "text-black text-2xl"
  }, "How to find your UserId?"), /*#__PURE__*/react.createElement("p", {
    className: 'text-black opacity-90'
  }, "For find your user id go on ", /*#__PURE__*/react.createElement("a", {
    href: "https://builtbybits.com",
    target: "_blank",
    rel: "noreferrer"
  }, "BuiltByBits"), " and click on your account.", /*#__PURE__*/react.createElement("br", null), " After click on your username for go on your account page.", /*#__PURE__*/react.createElement("br", null), "When you are on the account page check the url you normally see at end something like \"bagou450.", /*#__PURE__*/react.createElement("span", {
    className: "font-bold"
  }, "187451"), "\".", /*#__PURE__*/react.createElement("br", null), "You need to take the number after your username.", /*#__PURE__*/react.createElement("br", null), "Here with this exemple the id is 187451! If you need more help see the screenshot. "), /*#__PURE__*/react.createElement("img", {
    src: "https://cdn.bagou450.com/assets/img/findbbbuserid.webp",
    className: "h-[50%] w-[50%] mx-auto text-center",
    alt: "Find BuiltByBits username"
  }))) : selected && /*#__PURE__*/react.createElement(motion/* motion */.E.div, {
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
    className: "bg-white py-24 sm:py-32"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-8"
  }, /*#__PURE__*/react.createElement("dl", {
    className: "grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mx-auto flex max-w-xs flex-col gap-y-4"
  }, /*#__PURE__*/react.createElement("dt", {
    className: "text-base leading-7 text-gray-600"
  }, "Licenses"), /*#__PURE__*/react.createElement("dd", {
    className: "order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
  }, "750")), /*#__PURE__*/react.createElement("div", {
    className: "mx-auto flex max-w-xs flex-col gap-y-4"
  }, /*#__PURE__*/react.createElement("dt", {
    className: "text-base leading-7 text-gray-600"
  }, "Daily usage"), /*#__PURE__*/react.createElement("dd", {
    className: "order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
  }, "25 000")), /*#__PURE__*/react.createElement("div", {
    className: "mx-auto flex max-w-xs flex-col gap-y-4"
  }, /*#__PURE__*/react.createElement("dt", {
    className: "text-base leading-7 text-gray-600"
  }, "Uptime"), /*#__PURE__*/react.createElement("dd", {
    className: "order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
  }, "99.99%")))))));
}

/***/ })

}]);
//# sourceMappingURL=670.bundle.js.map