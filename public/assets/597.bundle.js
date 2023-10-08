"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([[597],{

/***/ 439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Product)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(6042);
// EXTERNAL MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(1955);
;// CONCATENATED MODULE: ./src/api/shop/getDownloadOneLink.ts


const getDownloadOneLink = function (id) {
  return new Promise(function (resolve, reject) {
    http/* default */.ZP.get(`${config/* config */.v.privateapilink}/orders/downloadOnelink/${id}`).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ const shop_getDownloadOneLink = (getDownloadOneLink);
// EXTERNAL MODULE: ./node_modules/react-html-parser/lib/index.js
var lib = __webpack_require__(653);
// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__(5761);
// EXTERNAL MODULE: ./src/components/Admin/Blogs/toolBar.scss
var toolBar = __webpack_require__(4695);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/types.js
const MODULE_CAROUSEL = "carousel";
const MODULE_CONTROLLER = "controller";
const MODULE_NAVIGATION = "navigation";
const MODULE_NO_SCROLL = "no-scroll";
const MODULE_PORTAL = "portal";
const MODULE_ROOT = "root";
const MODULE_TOOLBAR = "toolbar";
const PLUGIN_CAPTIONS = "captions";
const PLUGIN_COUNTER = "counter";
const PLUGIN_DOWNLOAD = "download";
const PLUGIN_FULLSCREEN = "fullscreen";
const PLUGIN_INLINE = "inline";
const PLUGIN_SHARE = "share";
const PLUGIN_SLIDESHOW = "slideshow";
const PLUGIN_THUMBNAILS = "thumbnails";
const PLUGIN_ZOOM = "zoom";
const SLIDE_STATUS_LOADING = "loading";
const SLIDE_STATUS_PLAYING = "playing";
const SLIDE_STATUS_ERROR = "error";
const SLIDE_STATUS_COMPLETE = "complete";
const SLIDE_STATUS_PLACEHOLDER = "placeholder";
const activeSlideStatus = (status) => `active-slide-${status}`;
const ACTIVE_SLIDE_LOADING = activeSlideStatus(SLIDE_STATUS_LOADING);
const ACTIVE_SLIDE_PLAYING = activeSlideStatus(SLIDE_STATUS_PLAYING);
const ACTIVE_SLIDE_ERROR = activeSlideStatus(SLIDE_STATUS_ERROR);
const ACTIVE_SLIDE_COMPLETE = activeSlideStatus(SLIDE_STATUS_COMPLETE);
const CLASS_FULLSIZE = "fullsize";
const CLASS_FLEX_CENTER = "flex_center";
const CLASS_NO_SCROLL = "no_scroll";
const CLASS_NO_SCROLL_PADDING = "no_scroll_padding";
const ACTION_PREV = "prev";
const ACTION_NEXT = "next";
const ACTION_SWIPE = "swipe";
const ACTION_CLOSE = "close";
const EVENT_ON_POINTER_DOWN = "onPointerDown";
const EVENT_ON_POINTER_MOVE = "onPointerMove";
const EVENT_ON_POINTER_UP = "onPointerUp";
const EVENT_ON_POINTER_LEAVE = "onPointerLeave";
const EVENT_ON_POINTER_CANCEL = "onPointerCancel";
const EVENT_ON_KEY_DOWN = "onKeyDown";
const EVENT_ON_KEY_UP = "onKeyUp";
const EVENT_ON_WHEEL = "onWheel";
const VK_ESCAPE = "Escape";
const VK_ARROW_LEFT = "ArrowLeft";
const VK_ARROW_RIGHT = "ArrowRight";
const ELEMENT_BUTTON = "button";
const ELEMENT_ICON = "icon";
const IMAGE_FIT_CONTAIN = "contain";
const IMAGE_FIT_COVER = "cover";
const UNKNOWN_ACTION_TYPE = "Unknown action type";



// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/index.js
'use client';





const LightboxDefaultProps = {
    open: false,
    close: () => { },
    index: 0,
    slides: [],
    render: {},
    plugins: [],
    toolbar: { buttons: [ACTION_CLOSE] },
    labels: {},
    animation: {
        fade: 250,
        swipe: 500,
        easing: {
            fade: "ease",
            swipe: "ease-out",
            navigation: "ease-in-out",
        },
    },
    carousel: {
        finite: false,
        preload: 2,
        padding: "16px",
        spacing: "30%",
        imageFit: IMAGE_FIT_CONTAIN,
        imageProps: {},
    },
    controller: {
        ref: null,
        focus: true,
        aria: false,
        touchAction: "none",
        closeOnPullDown: false,
        closeOnBackdropClick: false,
    },
    portal: {},
    on: {},
    styles: {},
    className: "",
};

function createModule(name, component) {
    return { name, component };
}
function createNode(module, children) {
    return { module, children };
}
function traverseNode(node, target, apply) {
    if (node.module.name === target) {
        return apply(node);
    }
    if (node.children) {
        return [
            createNode(node.module, node.children.flatMap((n) => { var _a; return (_a = traverseNode(n, target, apply)) !== null && _a !== void 0 ? _a : []; })),
        ];
    }
    return [node];
}
function traverse(nodes, target, apply) {
    return nodes.flatMap((node) => { var _a; return (_a = traverseNode(node, target, apply)) !== null && _a !== void 0 ? _a : []; });
}
function withPlugins(root, plugins = [], augmentations = []) {
    let config = root;
    const contains = (target) => {
        const nodes = [...config];
        while (nodes.length > 0) {
            const node = nodes.pop();
            if ((node === null || node === void 0 ? void 0 : node.module.name) === target)
                return true;
            if (node === null || node === void 0 ? void 0 : node.children)
                nodes.push(...node.children);
        }
        return false;
    };
    const addParent = (target, module) => {
        if (target === "") {
            config = [createNode(module, config)];
            return;
        }
        config = traverse(config, target, (node) => [createNode(module, [node])]);
    };
    const append = (target, module) => {
        config = traverse(config, target, (node) => [createNode(node.module, [createNode(module, node.children)])]);
    };
    const addChild = (target, module, precede) => {
        config = traverse(config, target, (node) => {
            var _a;
            return [
                createNode(node.module, [
                    ...(precede ? [createNode(module)] : []),
                    ...((_a = node.children) !== null && _a !== void 0 ? _a : []),
                    ...(!precede ? [createNode(module)] : []),
                ]),
            ];
        });
    };
    const addSibling = (target, module, precede) => {
        config = traverse(config, target, (node) => [
            ...(precede ? [createNode(module)] : []),
            node,
            ...(!precede ? [createNode(module)] : []),
        ]);
    };
    const addModule = (module) => {
        append(MODULE_CONTROLLER, module);
    };
    const replace = (target, module) => {
        config = traverse(config, target, (node) => [createNode(module, node.children)]);
    };
    const remove = (target) => {
        config = traverse(config, target, (node) => node.children);
    };
    const augment = (augmentation) => {
        augmentations.push(augmentation);
    };
    plugins.forEach((plugin) => {
        plugin({
            contains,
            addParent,
            append,
            addChild,
            addSibling,
            addModule,
            replace,
            remove,
            augment,
        });
    });
    return {
        config,
        augmentation: (props) => augmentations.reduce((acc, augmentation) => augmentation(acc), props),
    };
}

const clsx = (...classes) => [...classes].filter((cls) => Boolean(cls)).join(" ");
const cssPrefix$3 = "yarl__";
const cssClass = (name) => `${cssPrefix$3}${name}`;
const cssVar = (name) => `--${cssPrefix$3}${name}`;
const composePrefix = (base, prefix) => `${base}${prefix ? `_${prefix}` : ""}`;
const makeComposePrefix = (base) => (prefix) => composePrefix(base, prefix);
const label = (labels, lbl) => (labels && labels[lbl] ? labels[lbl] : lbl);
const cleanup = (...cleaners) => () => {
    cleaners.forEach((cleaner) => {
        cleaner();
    });
};
const makeUseContext = (name, contextName, context) => () => {
    const ctx = react.useContext(context);
    if (!ctx) {
        throw new Error(`${name} must be used within a ${contextName}.Provider`);
    }
    return ctx;
};
const hasWindow = () => typeof window !== "undefined";
function round(value, decimals = 0) {
    const factor = 10 ** decimals;
    return Math.round((value + Number.EPSILON) * factor) / factor;
}
const isImageSlide = (slide) => slide.type === undefined || slide.type === "image";
const isImageFitCover = (image, imageFit) => image.imageFit === IMAGE_FIT_COVER || (image.imageFit !== IMAGE_FIT_CONTAIN && imageFit === IMAGE_FIT_COVER);
function parseLengthPercentage(input) {
    if (typeof input === "number") {
        return { pixel: input };
    }
    if (typeof input === "string") {
        const value = parseInt(input, 10);
        return input.endsWith("%") ? { percent: value } : { pixel: value };
    }
    return { pixel: 0 };
}
function computeSlideRect(containerRect, padding) {
    const paddingValue = parseLengthPercentage(padding);
    const paddingPixels = paddingValue.percent !== undefined ? (containerRect.width / 100) * paddingValue.percent : paddingValue.pixel;
    return {
        width: Math.max(containerRect.width - 2 * paddingPixels, 0),
        height: Math.max(containerRect.height - 2 * paddingPixels, 0),
    };
}
const devicePixelRatio = () => (hasWindow() ? window === null || window === void 0 ? void 0 : window.devicePixelRatio : undefined) || 1;
const getSlideIndex = (index, slidesCount) => slidesCount > 0 ? ((index % slidesCount) + slidesCount) % slidesCount : 0;
const hasSlides = (slides) => slides.length > 0;
const getSlide = (slides, index) => slides[getSlideIndex(index, slides.length)];
const getSlideIfPresent = (slides, index) => hasSlides(slides) ? getSlide(slides, index) : undefined;
function addToolbarButton(toolbar, key, button) {
    if (!button)
        return toolbar;
    const { buttons, ...restToolbar } = toolbar;
    const index = buttons.findIndex((item) => item === key);
    const buttonWithKey = React.isValidElement(button) ? React.cloneElement(button, { key }, null) : button;
    if (index >= 0) {
        const result = [...buttons];
        result.splice(index, 1, buttonWithKey);
        return { buttons: result, ...restToolbar };
    }
    return { buttons: [buttonWithKey, ...buttons], ...restToolbar };
}
function stopNavigationEventsPropagation() {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    return { onPointerDown: stopPropagation, onKeyDown: stopPropagation, onWheel: stopPropagation };
}

const EventsContext = react.createContext(null);
const useEvents = makeUseContext("useEvents", "EventsContext", EventsContext);
function EventsProvider({ children }) {
    const [subscriptions] = react.useState({});
    react.useEffect(() => () => {
        Object.keys(subscriptions).forEach((topic) => delete subscriptions[topic]);
    }, [subscriptions]);
    const context = react.useMemo(() => {
        const unsubscribe = (topic, callback) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.splice(0, subscriptions[topic].length, ...subscriptions[topic].filter((cb) => cb !== callback));
        };
        const subscribe = (topic, callback) => {
            if (!subscriptions[topic]) {
                subscriptions[topic] = [];
            }
            subscriptions[topic].push(callback);
            return () => unsubscribe(topic, callback);
        };
        const publish = (...[topic, event]) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(event));
        };
        return { publish, subscribe, unsubscribe };
    }, [subscriptions]);
    return react.createElement(EventsContext.Provider, { value: context }, children);
}

const LightboxPropsContext = react.createContext(null);
const useLightboxProps = makeUseContext("useLightboxProps", "LightboxPropsContext", LightboxPropsContext);
function LightboxPropsProvider({ children, ...props }) {
    return react.createElement(LightboxPropsContext.Provider, { value: props }, children);
}

const LightboxStateContext = react.createContext(null);
const useLightboxState = makeUseContext("useLightboxState", "LightboxStateContext", LightboxStateContext);
const LightboxDispatchContext = react.createContext(null);
const useLightboxDispatch = makeUseContext("useLightboxDispatch", "LightboxDispatchContext", LightboxDispatchContext);
function reducer(state, action) {
    switch (action.type) {
        case "swipe": {
            const { slides } = state;
            const increment = (action === null || action === void 0 ? void 0 : action.increment) || 0;
            const globalIndex = state.globalIndex + increment;
            const currentIndex = getSlideIndex(globalIndex, slides.length);
            const currentSlide = getSlideIfPresent(slides, currentIndex);
            const animation = increment || action.duration
                ? {
                    increment,
                    duration: action.duration,
                    easing: action.easing,
                }
                : undefined;
            return { slides, currentIndex, globalIndex, currentSlide, animation };
        }
        case "update":
            return {
                slides: action.slides,
                currentIndex: action.index,
                globalIndex: action.index,
                currentSlide: getSlideIfPresent(action.slides, action.index),
            };
        default:
            throw new Error(UNKNOWN_ACTION_TYPE);
    }
}
function LightboxStateProvider({ slides, index, children }) {
    const [state, dispatch] = react.useReducer(reducer, {
        slides,
        currentIndex: index,
        globalIndex: index,
        currentSlide: getSlideIfPresent(slides, index),
    });
    react.useEffect(() => {
        dispatch({ type: "update", slides, index });
    }, [slides, index]);
    const context = react.useMemo(() => ({ ...state, state, dispatch }), [state, dispatch]);
    return (react.createElement(LightboxDispatchContext.Provider, { value: dispatch },
        react.createElement(LightboxStateContext.Provider, { value: context }, children)));
}

const TimeoutsContext = react.createContext(null);
const useTimeouts = makeUseContext("useTimeouts", "TimeoutsContext", TimeoutsContext);
function TimeoutsProvider({ children }) {
    const [timeouts] = react.useState([]);
    react.useEffect(() => () => {
        timeouts.forEach((tid) => window.clearTimeout(tid));
        timeouts.splice(0, timeouts.length);
    }, [timeouts]);
    const context = react.useMemo(() => {
        const removeTimeout = (id) => {
            timeouts.splice(0, timeouts.length, ...timeouts.filter((tid) => tid !== id));
        };
        const setTimeout = (fn, delay) => {
            const id = window.setTimeout(() => {
                removeTimeout(id);
                fn();
            }, delay);
            timeouts.push(id);
            return id;
        };
        const clearTimeout = (id) => {
            if (id !== undefined) {
                removeTimeout(id);
                window.clearTimeout(id);
            }
        };
        return { setTimeout, clearTimeout };
    }, [timeouts]);
    return react.createElement(TimeoutsContext.Provider, { value: context }, children);
}

const IconButton = react.forwardRef(function IconButton({ label: label$1, className, icon: Icon, renderIcon, onClick, style, ...rest }, ref) {
    const { styles, labels } = useLightboxProps();
    return (react.createElement("button", { ref: ref, type: "button", "aria-label": label(labels, label$1), className: clsx(cssClass(ELEMENT_BUTTON), className), onClick: onClick, style: { ...style, ...styles.button }, ...rest }, renderIcon ? renderIcon() : react.createElement(Icon, { className: cssClass(ELEMENT_ICON), style: styles.icon })));
});

function svgIcon(name, children) {
    const icon = (props) => (react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...props }, children));
    icon.displayName = name;
    return icon;
}
function createIcon(name, glyph) {
    return svgIcon(name, react.createElement("g", { fill: "currentColor" },
        react.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        glyph));
}
function createIconDisabled(name, glyph) {
    return svgIcon(name, React.createElement(React.Fragment, null,
        React.createElement("defs", null,
            React.createElement("mask", { id: "strike" },
                React.createElement("path", { d: "M0 0h24v24H0z", fill: "white" }),
                React.createElement("path", { d: "M0 0L24 24", stroke: "black", strokeWidth: 4 }))),
        React.createElement("path", { d: "M0.70707 2.121320L21.878680 23.292883", stroke: "currentColor", strokeWidth: 2 }),
        React.createElement("g", { fill: "currentColor", mask: "url(#strike)" },
            React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            glyph)));
}
const CloseIcon = createIcon("Close", react.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
const PreviousIcon = createIcon("Previous", react.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }));
const NextIcon = createIcon("Next", react.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }));
const LoadingIcon = createIcon("Loading", react.createElement(react.Fragment, null, Array.from({ length: 8 }).map((_, index, array) => (react.createElement("line", { key: index, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: (1 / array.length) * (index + 1), transform: `rotate(${(360 / array.length) * index}, 12, 12)` })))));
const ErrorIcon = createIcon("Error", react.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" }));

const useLayoutEffect = hasWindow() ? react.useLayoutEffect : react.useEffect;

function useMotionPreference() {
    const [reduceMotion, setReduceMotion] = react.useState(false);
    react.useEffect(() => {
        var _a, _b;
        const mediaQuery = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)");
        setReduceMotion(mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches);
        const listener = (event) => setReduceMotion(event.matches);
        (_b = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener) === null || _b === void 0 ? void 0 : _b.call(mediaQuery, "change", listener);
        return () => { var _a; return (_a = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(mediaQuery, "change", listener); };
    }, []);
    return reduceMotion;
}

function currentTransformation(node) {
    let x = 0;
    let y = 0;
    let z = 0;
    const matrix = window.getComputedStyle(node).transform;
    const matcher = matrix.match(/matrix.*\((.+)\)/);
    if (matcher) {
        const values = matcher[1].split(",").map((str) => Number.parseInt(str, 10));
        if (values.length === 6) {
            x = values[4];
            y = values[5];
        }
        else if (values.length === 16) {
            x = values[12];
            y = values[13];
            z = values[14];
        }
    }
    return { x, y, z };
}
function useAnimation(nodeRef, computeAnimation) {
    const snapshot = react.useRef();
    const animation = react.useRef();
    const reduceMotion = useMotionPreference();
    useLayoutEffect(() => {
        var _a, _b, _c;
        if (nodeRef.current && snapshot.current !== undefined && !reduceMotion) {
            const { keyframes, duration, easing, onfinish } = computeAnimation(snapshot.current, nodeRef.current.getBoundingClientRect(), currentTransformation(nodeRef.current)) || {};
            if (keyframes && duration) {
                (_a = animation.current) === null || _a === void 0 ? void 0 : _a.cancel();
                animation.current = undefined;
                try {
                    animation.current = (_c = (_b = nodeRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, keyframes, { duration, easing });
                }
                catch (err) {
                    console.error(err);
                }
                if (animation.current) {
                    animation.current.onfinish = () => {
                        animation.current = undefined;
                        onfinish === null || onfinish === void 0 ? void 0 : onfinish();
                    };
                }
            }
        }
        snapshot.current = undefined;
    });
    return {
        prepareAnimation: (currentSnapshot) => {
            snapshot.current = currentSnapshot;
        },
        isAnimationPlaying: () => { var _a; return ((_a = animation.current) === null || _a === void 0 ? void 0 : _a.playState) === "running"; },
    };
}

function useContainerRect() {
    const [containerRect, setContainerRect] = react.useState();
    const containerRef = react.useRef(null);
    const observerRef = react.useRef();
    const setContainerRef = react.useCallback((node) => {
        containerRef.current = node;
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = undefined;
        }
        const updateContainerRect = () => {
            if (node) {
                const styles = window.getComputedStyle(node);
                const parse = (value) => parseFloat(value) || 0;
                setContainerRect({
                    width: Math.round(node.clientWidth - parse(styles.paddingLeft) - parse(styles.paddingRight)),
                    height: Math.round(node.clientHeight - parse(styles.paddingTop) - parse(styles.paddingBottom)),
                });
            }
            else {
                setContainerRect(undefined);
            }
        };
        updateContainerRect();
        if (node && typeof ResizeObserver !== "undefined") {
            observerRef.current = new ResizeObserver(updateContainerRect);
            observerRef.current.observe(node);
        }
    }, []);
    return react.useMemo(() => ({
        setContainerRef,
        containerRef,
        containerRect,
    }), [setContainerRef, containerRef, containerRect]);
}

function useDelay() {
    const timeoutId = react.useRef();
    const { setTimeout, clearTimeout } = useTimeouts();
    return react.useCallback((callback, delay) => {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(callback, delay > 0 ? delay : 0);
    }, [setTimeout, clearTimeout]);
}

function useEventCallback(fn) {
    const ref = react.useRef(fn);
    useLayoutEffect(() => {
        ref.current = fn;
    });
    return react.useCallback((...args) => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args); }, []);
}

function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
}
function useForkRef(refA, refB) {
    return react.useMemo(() => refA == null && refB == null
        ? null
        : (refValue) => {
            setRef(refA, refValue);
            setRef(refB, refValue);
        }, [refA, refB]);
}

function useLoseFocus(focus, disabled = false) {
    const focused = react.useRef();
    useLayoutEffect(() => {
        if (disabled && focused.current) {
            focused.current = false;
            focus();
        }
    }, [disabled, focus]);
    const onFocus = react.useCallback(() => {
        focused.current = true;
    }, []);
    const onBlur = react.useCallback(() => {
        focused.current = false;
    }, []);
    return { onFocus, onBlur };
}

function useRTL() {
    const [isRTL, setIsRTL] = react.useState(false);
    useLayoutEffect(() => {
        setIsRTL(window.getComputedStyle(window.document.documentElement).direction === "rtl");
    }, []);
    return isRTL;
}

function useSensors() {
    const [subscribers] = react.useState({});
    return react.useMemo(() => {
        const notifySubscribers = (type, event) => {
            var _a;
            (_a = subscribers[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => {
                if (!event.isPropagationStopped())
                    listener(event);
            });
        };
        return {
            registerSensors: {
                onPointerDown: (event) => notifySubscribers(EVENT_ON_POINTER_DOWN, event),
                onPointerMove: (event) => notifySubscribers(EVENT_ON_POINTER_MOVE, event),
                onPointerUp: (event) => notifySubscribers(EVENT_ON_POINTER_UP, event),
                onPointerLeave: (event) => notifySubscribers(EVENT_ON_POINTER_LEAVE, event),
                onPointerCancel: (event) => notifySubscribers(EVENT_ON_POINTER_CANCEL, event),
                onKeyDown: (event) => notifySubscribers(EVENT_ON_KEY_DOWN, event),
                onKeyUp: (event) => notifySubscribers(EVENT_ON_KEY_UP, event),
                onWheel: (event) => notifySubscribers(EVENT_ON_WHEEL, event),
            },
            subscribeSensors: (type, callback) => {
                if (!subscribers[type]) {
                    subscribers[type] = [];
                }
                subscribers[type].unshift(callback);
                return () => {
                    const listeners = subscribers[type];
                    if (listeners) {
                        listeners.splice(0, listeners.length, ...listeners.filter((el) => el !== callback));
                    }
                };
            },
        };
    }, [subscribers]);
}

function useThrottle(callback, delay) {
    const lastCallbackTime = react.useRef(0);
    const delayCallback = useDelay();
    const executeCallback = useEventCallback((...args) => {
        lastCallbackTime.current = Date.now();
        callback(args);
    });
    return react.useCallback((...args) => {
        delayCallback(() => {
            executeCallback(args);
        }, delay - (Date.now() - lastCallbackTime.current));
    }, [delay, executeCallback, delayCallback]);
}

const slidePrefix = makeComposePrefix("slide");
const slideImagePrefix = makeComposePrefix("slide_image");
function ImageSlide({ slide: image, offset, render, rect, imageFit, imageProps, onClick, onLoad, style, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const [status, setStatus] = react.useState(SLIDE_STATUS_LOADING);
    const { publish } = useEvents();
    const { setTimeout } = useTimeouts();
    const imageRef = react.useRef(null);
    react.useEffect(() => {
        if (offset === 0) {
            publish(activeSlideStatus(status));
        }
    }, [offset, status, publish]);
    const handleLoading = useEventCallback((img) => {
        ("decode" in img ? img.decode() : Promise.resolve())
            .catch(() => { })
            .then(() => {
            if (!img.parentNode) {
                return;
            }
            setStatus(SLIDE_STATUS_COMPLETE);
            setTimeout(() => {
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(img);
            }, 0);
        });
    });
    const setImageRef = react.useCallback((img) => {
        imageRef.current = img;
        if (img === null || img === void 0 ? void 0 : img.complete) {
            handleLoading(img);
        }
    }, [handleLoading]);
    const handleOnLoad = react.useCallback((event) => {
        handleLoading(event.currentTarget);
    }, [handleLoading]);
    const onError = react.useCallback(() => {
        setStatus(SLIDE_STATUS_ERROR);
    }, []);
    const cover = isImageFitCover(image, imageFit);
    const nonInfinite = (value, fallback) => (Number.isFinite(value) ? value : fallback);
    const maxWidth = nonInfinite(Math.max(...((_b = (_a = image.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) !== null && _b !== void 0 ? _b : []).concat(image.width ? [image.width] : [])), ((_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalWidth) || 0);
    const maxHeight = nonInfinite(Math.max(...((_e = (_d = image.srcSet) === null || _d === void 0 ? void 0 : _d.map((x) => x.height)) !== null && _e !== void 0 ? _e : []).concat(image.height ? [image.height] : [])), ((_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.naturalHeight) || 0);
    const defaultStyle = maxWidth && maxHeight
        ? {
            maxWidth: `min(${maxWidth}px, 100%)`,
            maxHeight: `min(${maxHeight}px, 100%)`,
        }
        : {
            maxWidth: "100%",
            maxHeight: "100%",
        };
    const srcSet = (_g = image.srcSet) === null || _g === void 0 ? void 0 : _g.sort((a, b) => a.width - b.width).map((item) => `${item.src} ${item.width}w`).join(", ");
    const estimateActualWidth = () => rect && !cover && image.width && image.height ? (rect.height / image.height) * image.width : Number.MAX_VALUE;
    const sizes = srcSet && rect && hasWindow() ? `${Math.round(Math.min(estimateActualWidth(), rect.width))}px` : undefined;
    const { style: imagePropsStyle, className: imagePropsClassName, ...restImageProps } = imageProps || {};
    return (react.createElement(react.Fragment, null,
        react.createElement("img", { ref: setImageRef, onLoad: handleOnLoad, onError: onError, onClick: onClick, draggable: false, className: clsx(cssClass(slideImagePrefix()), cover && cssClass(slideImagePrefix("cover")), status !== SLIDE_STATUS_COMPLETE && cssClass(slideImagePrefix("loading")), imagePropsClassName), style: { ...defaultStyle, ...style, ...imagePropsStyle }, ...restImageProps, alt: image.alt, sizes: sizes, srcSet: srcSet, src: image.src }),
        status !== SLIDE_STATUS_COMPLETE && (react.createElement("div", { className: cssClass(slidePrefix(SLIDE_STATUS_PLACEHOLDER)) },
            status === SLIDE_STATUS_LOADING &&
                ((render === null || render === void 0 ? void 0 : render.iconLoading) ? (render.iconLoading()) : (react.createElement(LoadingIcon, { className: clsx(cssClass(ELEMENT_ICON), cssClass(slidePrefix(SLIDE_STATUS_LOADING))) }))),
            status === SLIDE_STATUS_ERROR &&
                ((render === null || render === void 0 ? void 0 : render.iconError) ? (render.iconError()) : (react.createElement(ErrorIcon, { className: clsx(cssClass(ELEMENT_ICON), cssClass(slidePrefix(SLIDE_STATUS_ERROR))) })))))));
}

var SwipeState;
(function (SwipeState) {
    SwipeState[SwipeState["NONE"] = 0] = "NONE";
    SwipeState[SwipeState["SWIPE"] = 1] = "SWIPE";
    SwipeState[SwipeState["PULL_DOWN"] = 2] = "PULL_DOWN";
    SwipeState[SwipeState["ANIMATION"] = 3] = "ANIMATION";
})(SwipeState || (SwipeState = {}));

function usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled) {
    react.useEffect(() => {
        if (disabled)
            return () => { };
        return cleanup(subscribeSensors(EVENT_ON_POINTER_DOWN, onPointerDown), subscribeSensors(EVENT_ON_POINTER_MOVE, onPointerMove), subscribeSensors(EVENT_ON_POINTER_UP, onPointerUp), subscribeSensors(EVENT_ON_POINTER_LEAVE, onPointerUp), subscribeSensors(EVENT_ON_POINTER_CANCEL, onPointerUp));
    }, [subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled]);
}

var Gesture;
(function (Gesture) {
    Gesture[Gesture["NONE"] = 0] = "NONE";
    Gesture[Gesture["SWIPE"] = 1] = "SWIPE";
    Gesture[Gesture["PULL_DOWN"] = 2] = "PULL_DOWN";
})(Gesture || (Gesture = {}));
const SWIPE_THRESHOLD = 30;
function usePointerSwipe(subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel, pullDownEnabled, onPullDownStart, onPullDownProgress, onPullDownFinish, onPullDownCancel) {
    const offset = react.useRef(0);
    const pointers = react.useRef([]);
    const activePointer = react.useRef();
    const startTime = react.useRef(0);
    const gesture = react.useRef(Gesture.NONE);
    const clearPointer = react.useCallback((event) => {
        if (activePointer.current === event.pointerId) {
            activePointer.current = undefined;
            gesture.current = Gesture.NONE;
        }
        const currentPointers = pointers.current;
        currentPointers.splice(0, currentPointers.length, ...currentPointers.filter((p) => p.pointerId !== event.pointerId));
    }, []);
    const addPointer = react.useCallback((event) => {
        clearPointer(event);
        event.persist();
        pointers.current.push(event);
    }, [clearPointer]);
    const onPointerDown = useEventCallback((event) => {
        addPointer(event);
    });
    const onPointerUp = useEventCallback((event) => {
        if (pointers.current.find((x) => x.pointerId === event.pointerId) &&
            activePointer.current === event.pointerId) {
            const duration = Date.now() - startTime.current;
            const currentOffset = offset.current;
            if (gesture.current === Gesture.SWIPE) {
                if (Math.abs(currentOffset) > 0.3 * containerWidth ||
                    (Math.abs(currentOffset) > 5 && duration < swipeAnimationDuration)) {
                    onSwipeFinish(currentOffset, duration);
                }
                else {
                    onSwipeCancel(currentOffset);
                }
            }
            else if (gesture.current === Gesture.PULL_DOWN) {
                if (currentOffset > 2 * SWIPE_THRESHOLD) {
                    onPullDownFinish(currentOffset, duration);
                }
                else {
                    onPullDownCancel(currentOffset);
                }
            }
            offset.current = 0;
            gesture.current = Gesture.NONE;
        }
        clearPointer(event);
    });
    const onPointerMove = useEventCallback((event) => {
        const pointer = pointers.current.find((p) => p.pointerId === event.pointerId);
        if (pointer) {
            const isCurrentPointer = activePointer.current === event.pointerId;
            if (event.buttons === 0) {
                if (isCurrentPointer && offset.current !== 0) {
                    onPointerUp(event);
                }
                else {
                    clearPointer(pointer);
                }
                return;
            }
            const deltaX = event.clientX - pointer.clientX;
            const deltaY = event.clientY - pointer.clientY;
            if (activePointer.current === undefined) {
                const startGesture = (newGesture) => {
                    addPointer(event);
                    activePointer.current = event.pointerId;
                    startTime.current = Date.now();
                    gesture.current = newGesture;
                };
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD && isSwipeValid(deltaX)) {
                    startGesture(Gesture.SWIPE);
                    onSwipeStart();
                }
                else if (pullDownEnabled && Math.abs(deltaY) > Math.abs(deltaX) && deltaY > SWIPE_THRESHOLD) {
                    startGesture(Gesture.PULL_DOWN);
                    onPullDownStart();
                }
            }
            else if (isCurrentPointer) {
                if (gesture.current === Gesture.SWIPE) {
                    offset.current = deltaX;
                    onSwipeProgress(deltaX);
                }
                else if (gesture.current === Gesture.PULL_DOWN) {
                    offset.current = deltaY;
                    onPullDownProgress(deltaY);
                }
            }
        }
    });
    usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp);
}

const WHEEL = "wheel";
function preventDefault(event) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.ctrlKey) {
        event.preventDefault();
    }
}
function usePreventSwipeNavigation() {
    const ref = react.useRef(null);
    return react.useCallback((node) => {
        var _a;
        if (node) {
            node.addEventListener(WHEEL, preventDefault, { passive: false });
        }
        else {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(WHEEL, preventDefault);
        }
        ref.current = node;
    }, []);
}

function useWheelSwipe(swipeState, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
    const offset = react.useRef(0);
    const intent = react.useRef(0);
    const intentCleanup = react.useRef();
    const resetCleanup = react.useRef();
    const wheelResidualMomentum = react.useRef(0);
    const startTime = react.useRef(0);
    const { setTimeout, clearTimeout } = useTimeouts();
    const cancelSwipeIntentCleanup = react.useCallback(() => {
        if (intentCleanup.current) {
            clearTimeout(intentCleanup.current);
            intentCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const cancelSwipeResetCleanup = react.useCallback(() => {
        if (resetCleanup.current) {
            clearTimeout(resetCleanup.current);
            resetCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const handleCleanup = useEventCallback(() => {
        if (swipeState !== SwipeState.SWIPE) {
            offset.current = 0;
            startTime.current = 0;
            cancelSwipeIntentCleanup();
            cancelSwipeResetCleanup();
        }
    });
    react.useEffect(handleCleanup, [swipeState, handleCleanup]);
    const handleCancelSwipe = useEventCallback((currentSwipeOffset) => {
        resetCleanup.current = undefined;
        if (offset.current === currentSwipeOffset) {
            onSwipeCancel(offset.current);
        }
    });
    const onWheel = useEventCallback((event) => {
        if (event.ctrlKey) {
            return;
        }
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            return;
        }
        if (swipeState === SwipeState.NONE) {
            if (Math.abs(event.deltaX) <= 1.2 * Math.abs(wheelResidualMomentum.current)) {
                wheelResidualMomentum.current = event.deltaX;
                return;
            }
            if (!isSwipeValid(-event.deltaX)) {
                return;
            }
            intent.current += event.deltaX;
            cancelSwipeIntentCleanup();
            if (Math.abs(intent.current) > 30) {
                intent.current = 0;
                wheelResidualMomentum.current = 0;
                startTime.current = Date.now();
                onSwipeStart();
            }
            else {
                const currentSwipeIntent = intent.current;
                intentCleanup.current = setTimeout(() => {
                    intentCleanup.current = undefined;
                    if (currentSwipeIntent === intent.current) {
                        intent.current = 0;
                    }
                }, swipeAnimationDuration);
            }
        }
        else if (swipeState === SwipeState.SWIPE) {
            let newSwipeOffset = offset.current - event.deltaX;
            newSwipeOffset = Math.min(Math.abs(newSwipeOffset), containerWidth) * Math.sign(newSwipeOffset);
            offset.current = newSwipeOffset;
            onSwipeProgress(newSwipeOffset);
            cancelSwipeResetCleanup();
            if (Math.abs(newSwipeOffset) > 0.2 * containerWidth) {
                wheelResidualMomentum.current = event.deltaX;
                onSwipeFinish(newSwipeOffset, Date.now() - startTime.current);
                return;
            }
            resetCleanup.current = setTimeout(() => handleCancelSwipe(newSwipeOffset), 2 * swipeAnimationDuration);
        }
        else {
            wheelResidualMomentum.current = event.deltaX;
        }
    });
    react.useEffect(() => subscribeSensors(EVENT_ON_WHEEL, onWheel), [subscribeSensors, onWheel]);
}

const cssContainerPrefix = makeComposePrefix("container");
const ControllerContext = react.createContext(null);
const useController = makeUseContext("useController", "ControllerContext", ControllerContext);
function Controller({ children, ...props }) {
    var _a;
    const { carousel, animation, controller, on, styles, render } = props;
    const [toolbarWidth, setToolbarWidth] = react.useState();
    const state = useLightboxState();
    const dispatch = useLightboxDispatch();
    const [swipeState, setSwipeState] = react.useState(SwipeState.NONE);
    const swipeOffset = react.useRef(0);
    const pullDownOffset = react.useRef(0);
    const pullDownOpacity = react.useRef(1);
    const { registerSensors, subscribeSensors } = useSensors();
    const { subscribe, publish } = useEvents();
    const cleanupAnimationIncrement = useDelay();
    const cleanupSwipeOffset = useDelay();
    const cleanupPullDownOffset = useDelay();
    const { containerRef, setContainerRef, containerRect } = useContainerRect();
    const handleContainerRef = useForkRef(usePreventSwipeNavigation(), setContainerRef);
    const carouselRef = react.useRef(null);
    const setCarouselRef = useForkRef(carouselRef, undefined);
    const isRTL = useRTL();
    const rtl = (value) => (isRTL ? -1 : 1) * (typeof value === "number" ? value : 1);
    const focus = useEventCallback(() => { var _a; return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
    const getLightboxProps = useEventCallback(() => props);
    const getLightboxState = useEventCallback(() => state);
    const prev = react.useCallback((params) => publish(ACTION_PREV, params), [publish]);
    const next = react.useCallback((params) => publish(ACTION_NEXT, params), [publish]);
    const close = react.useCallback(() => publish(ACTION_CLOSE), [publish]);
    const isSwipeValid = (offset) => !(carousel.finite &&
        ((rtl(offset) > 0 && state.currentIndex === 0) ||
            (rtl(offset) < 0 && state.currentIndex === state.slides.length - 1)));
    const setSwipeOffset = (offset) => {
        var _a;
        swipeOffset.current = offset;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("swipe_offset"), `${Math.round(offset)}px`);
    };
    const pullDownEnabled = controller.closeOnPullDown;
    const setPullDownOffset = (offset) => {
        var _a, _b;
        pullDownOffset.current = offset;
        pullDownOpacity.current = (() => {
            const threshold = 60;
            const minOpacity = 0.5;
            return Math.min(Math.max(round(1 - (offset / threshold) * (1 - minOpacity), 2), minOpacity), 1);
        })();
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("pull_down_offset"), `${Math.round(offset)}px`);
        (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty(cssVar("pull_down_opacity"), `${pullDownOpacity.current}`);
    };
    const { prepareAnimation: preparePullDownAnimation } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        if (carouselRef.current && containerRect) {
            return {
                keyframes: [
                    {
                        transform: `translate(0, ${snapshot.rect.y - rect.y + translate.y}px)`,
                        opacity: snapshot.opacity,
                    },
                    { transform: "translate(0, 0)", opacity: 1 },
                ],
                duration: snapshot.duration,
                easing: animation.easing.fade,
            };
        }
        return undefined;
    });
    const pullDown = (offset, cancel) => {
        if (pullDownEnabled) {
            setPullDownOffset(offset);
            let duration = 0;
            if (carouselRef.current) {
                duration = animation.fade * (cancel ? 2 : 1);
                preparePullDownAnimation({
                    rect: carouselRef.current.getBoundingClientRect(),
                    opacity: pullDownOpacity.current,
                    duration,
                });
            }
            cleanupPullDownOffset(() => {
                setPullDownOffset(0);
                setSwipeState(SwipeState.NONE);
            }, duration);
            setSwipeState(SwipeState.ANIMATION);
            if (!cancel) {
                close();
            }
        }
    };
    const { prepareAnimation, isAnimationPlaying } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        var _a;
        if (carouselRef.current && containerRect && ((_a = state.animation) === null || _a === void 0 ? void 0 : _a.duration)) {
            const parsedSpacing = parseLengthPercentage(carousel.spacing);
            const spacingValue = (parsedSpacing.percent
                ? (parsedSpacing.percent * containerRect.width) / 100
                : parsedSpacing.pixel) || 0;
            return {
                keyframes: [
                    {
                        transform: `translate(${rtl(state.globalIndex - snapshot.index) * (containerRect.width + spacingValue) +
                            snapshot.rect.x -
                            rect.x +
                            translate.x}px, 0)`,
                    },
                    { transform: "translate(0, 0)" },
                ],
                duration: state.animation.duration,
                easing: state.animation.easing,
            };
        }
        return undefined;
    });
    const swipe = useEventCallback((action) => {
        var _a, _b;
        const currentSwipeOffset = action.offset || 0;
        const swipeDuration = !currentSwipeOffset ? (_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe : animation.swipe;
        const swipeEasing = !currentSwipeOffset && !isAnimationPlaying() ? animation.easing.navigation : animation.easing.swipe;
        let { direction } = action;
        const count = (_b = action.count) !== null && _b !== void 0 ? _b : 1;
        let newSwipeState = SwipeState.ANIMATION;
        let newSwipeAnimationDuration = swipeDuration * count;
        if (!direction) {
            const containerWidth = containerRect === null || containerRect === void 0 ? void 0 : containerRect.width;
            const elapsedTime = action.duration || 0;
            const expectedTime = containerWidth
                ? (swipeDuration / containerWidth) * Math.abs(currentSwipeOffset)
                : swipeDuration;
            if (count !== 0) {
                if (elapsedTime < expectedTime) {
                    newSwipeAnimationDuration =
                        (newSwipeAnimationDuration / expectedTime) * Math.max(elapsedTime, expectedTime / 5);
                }
                else if (containerWidth) {
                    newSwipeAnimationDuration =
                        (swipeDuration / containerWidth) * (containerWidth - Math.abs(currentSwipeOffset));
                }
                direction = rtl(currentSwipeOffset) > 0 ? ACTION_PREV : ACTION_NEXT;
            }
            else {
                newSwipeAnimationDuration = swipeDuration / 2;
            }
        }
        let increment = 0;
        if (direction === ACTION_PREV) {
            if (isSwipeValid(rtl(1))) {
                increment = -count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        else if (direction === ACTION_NEXT) {
            if (isSwipeValid(rtl(-1))) {
                increment = count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        newSwipeAnimationDuration = Math.round(newSwipeAnimationDuration);
        cleanupSwipeOffset(() => {
            setSwipeOffset(0);
            setSwipeState(SwipeState.NONE);
        }, newSwipeAnimationDuration);
        if (carouselRef.current) {
            prepareAnimation({
                rect: carouselRef.current.getBoundingClientRect(),
                index: state.globalIndex,
            });
        }
        setSwipeState(newSwipeState);
        publish(ACTION_SWIPE, {
            type: "swipe",
            increment,
            duration: newSwipeAnimationDuration,
            easing: swipeEasing,
        });
    });
    react.useEffect(() => {
        var _a, _b;
        if (((_a = state.animation) === null || _a === void 0 ? void 0 : _a.increment) && ((_b = state.animation) === null || _b === void 0 ? void 0 : _b.duration)) {
            cleanupAnimationIncrement(() => dispatch({ type: "swipe", increment: 0 }), state.animation.duration);
        }
    }, [state.animation, dispatch, cleanupAnimationIncrement]);
    const swipeParams = [
        subscribeSensors,
        isSwipeValid,
        (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) || 0,
        animation.swipe,
        () => setSwipeState(SwipeState.SWIPE),
        (offset) => setSwipeOffset(offset),
        (offset, duration) => swipe({ offset, duration, count: 1 }),
        (offset) => swipe({ offset, count: 0 }),
    ];
    const pullDownParams = [
        () => {
            if (pullDownEnabled) {
                setSwipeState(SwipeState.PULL_DOWN);
            }
        },
        (offset) => setPullDownOffset(offset),
        (offset) => pullDown(offset),
        (offset) => pullDown(offset, true),
    ];
    usePointerSwipe(...swipeParams, pullDownEnabled, ...pullDownParams);
    useWheelSwipe(swipeState, ...swipeParams);
    const focusOnMount = useEventCallback(() => {
        var _a;
        if (controller.focus) {
            (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    });
    react.useEffect(focusOnMount, [focusOnMount]);
    const onViewCallback = useEventCallback(() => {
        var _a;
        (_a = on.view) === null || _a === void 0 ? void 0 : _a.call(on, { index: state.currentIndex });
    });
    react.useEffect(onViewCallback, [state.globalIndex, onViewCallback]);
    react.useEffect(() => cleanup(subscribe(ACTION_PREV, (action) => swipe({ direction: ACTION_PREV, ...action })), subscribe(ACTION_NEXT, (action) => swipe({ direction: ACTION_NEXT, ...action })), subscribe(ACTION_SWIPE, (action) => dispatch(action))), [subscribe, swipe, dispatch]);
    react.useEffect(() => subscribeSensors(EVENT_ON_KEY_UP, (event) => {
        if (event.key === VK_ESCAPE) {
            close();
        }
    }), [subscribeSensors, close]);
    const context = react.useMemo(() => ({
        prev,
        next,
        close,
        focus,
        slideRect: containerRect ? computeSlideRect(containerRect, carousel.padding) : { width: 0, height: 0 },
        containerRect: containerRect || { width: 0, height: 0 },
        subscribeSensors,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
    }), [
        prev,
        next,
        close,
        focus,
        subscribeSensors,
        containerRect,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
        carousel.padding,
    ]);
    react.useImperativeHandle(controller.ref, () => ({
        prev,
        next,
        close,
        focus,
        getLightboxProps,
        getLightboxState,
    }), [prev, next, close, focus, getLightboxProps, getLightboxState]);
    return (react.createElement("div", { ref: handleContainerRef, className: clsx(cssClass(cssContainerPrefix()), cssClass(CLASS_FLEX_CENTER)), style: {
            ...(swipeState === SwipeState.SWIPE
                ? { [cssVar("swipe_offset")]: `${Math.round(swipeOffset.current)}px` }
                : null),
            ...(swipeState === SwipeState.PULL_DOWN
                ? {
                    [cssVar("pull_down_offset")]: `${Math.round(pullDownOffset.current)}px`,
                    [cssVar("pull_down_opacity")]: `${pullDownOpacity.current}`,
                }
                : null),
            ...(controller.touchAction !== "none"
                ? { [cssVar("controller_touch_action")]: controller.touchAction }
                : null),
            ...styles.container,
        }, ...(controller.aria ? { role: "presentation", "aria-live": "polite" } : null), tabIndex: -1, ...registerSensors }, containerRect && (react.createElement(ControllerContext.Provider, { value: context },
        children, (_a = render.controls) === null || _a === void 0 ? void 0 :
        _a.call(render)))));
}
const ControllerModule = createModule(MODULE_CONTROLLER, Controller);

function cssPrefix$2(value) {
    return composePrefix(MODULE_CAROUSEL, value);
}
function cssSlidePrefix(value) {
    return composePrefix("slide", value);
}
function CarouselSlide({ slide, offset }) {
    const containerRef = react.useRef(null);
    const { currentIndex } = useLightboxState();
    const { slideRect, close } = useController();
    const { render, carousel: { imageFit, imageProps }, on: { click: onClick }, controller: { closeOnBackdropClick }, styles: { slide: style }, } = useLightboxProps();
    const renderSlide = () => {
        var _a, _b, _c, _d;
        let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect: slideRect });
        if (!rendered && isImageSlide(slide)) {
            rendered = (react.createElement(ImageSlide, { slide: slide, offset: offset, render: render, rect: slideRect, imageFit: imageFit, imageProps: imageProps, onClick: offset === 0 ? () => onClick === null || onClick === void 0 ? void 0 : onClick({ index: currentIndex }) : undefined }));
        }
        return rendered ? (react.createElement(react.Fragment, null, (_b = render.slideHeader) === null || _b === void 0 ? void 0 :
            _b.call(render, { slide }),
            ((_c = render.slideContainer) !== null && _c !== void 0 ? _c : (({ children }) => children))({ slide, children: rendered }), (_d = render.slideFooter) === null || _d === void 0 ? void 0 :
            _d.call(render, { slide }))) : null;
    };
    const handleBackdropClick = (event) => {
        const container = containerRef.current;
        const target = event.target instanceof HTMLElement ? event.target : undefined;
        if (closeOnBackdropClick &&
            target &&
            container &&
            (target === container ||
                (Array.from(container.children).find((x) => x === target) &&
                    target.classList.contains(cssClass(CLASS_FULLSIZE))))) {
            close();
        }
    };
    return (react.createElement("div", { ref: containerRef, className: clsx(cssClass(cssSlidePrefix()), offset === 0 && cssClass(cssSlidePrefix("current")), cssClass(CLASS_FLEX_CENTER)), onClick: handleBackdropClick, style: style }, renderSlide()));
}
function Placeholder() {
    const style = useLightboxProps().styles.slide;
    return react.createElement("div", { className: cssClass("slide"), style: style });
}
function Carousel({ carousel: { finite, preload, padding, spacing } }) {
    const { slides, currentIndex, globalIndex } = useLightboxState();
    const { setCarouselRef } = useController();
    const spacingValue = parseLengthPercentage(spacing);
    const paddingValue = parseLengthPercentage(padding);
    const items = [];
    if ((slides === null || slides === void 0 ? void 0 : slides.length) > 0) {
        for (let i = currentIndex - preload; i < currentIndex; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i >= 0 ? (react.createElement(CarouselSlide, { key: key, slide: slides[(i + preload * slides.length) % slides.length], offset: i - currentIndex })) : (react.createElement(Placeholder, { key: key })));
        }
        items.push(react.createElement(CarouselSlide, { key: globalIndex, slide: slides[currentIndex], offset: 0 }));
        for (let i = currentIndex + 1; i <= currentIndex + preload; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i <= slides.length - 1 ? (react.createElement(CarouselSlide, { key: key, slide: slides[i % slides.length], offset: i - currentIndex })) : (react.createElement(Placeholder, { key: key })));
        }
    }
    return (react.createElement("div", { ref: setCarouselRef, className: clsx(cssClass(cssPrefix$2()), items.length > 0 && cssClass(cssPrefix$2("with_slides"))), style: {
            [`${cssVar(cssPrefix$2("slides_count"))}`]: items.length,
            [`${cssVar(cssPrefix$2("spacing_px"))}`]: spacingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("spacing_percent"))}`]: spacingValue.percent || 0,
            [`${cssVar(cssPrefix$2("padding_px"))}`]: paddingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("padding_percent"))}`]: paddingValue.percent || 0,
        } }, items));
}
const CarouselModule = createModule(MODULE_CAROUSEL, Carousel);

function NavigationButton({ label, icon, renderIcon, action, onClick, disabled, style }) {
    return (react.createElement(IconButton, { label: label, icon: icon, renderIcon: renderIcon, className: cssClass(`navigation_${action}`), disabled: disabled, onClick: onClick, style: style, ...useLoseFocus(useController().focus, disabled) }));
}
function Navigation({ carousel: { finite }, animation, render: { buttonPrev, buttonNext, iconPrev, iconNext }, styles, }) {
    var _a;
    const { slides, currentIndex } = useLightboxState();
    const { prev, next, subscribeSensors } = useController();
    const isRTL = useRTL();
    const prevDisabled = slides.length === 0 || (finite && currentIndex === 0);
    const nextDisabled = slides.length === 0 || (finite && currentIndex === slides.length - 1);
    const throttle = ((_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe) / 2;
    const prevThrottled = useThrottle(prev, throttle);
    const nextThrottled = useThrottle(next, throttle);
    const handleKeyDown = useEventCallback((event) => {
        if (event.key === VK_ARROW_LEFT && !(isRTL ? nextDisabled : prevDisabled)) {
            (isRTL ? nextThrottled : prevThrottled)();
        }
        if (event.key === VK_ARROW_RIGHT && !(isRTL ? prevDisabled : nextDisabled)) {
            (isRTL ? prevThrottled : nextThrottled)();
        }
    });
    react.useEffect(() => subscribeSensors(EVENT_ON_KEY_DOWN, handleKeyDown), [subscribeSensors, handleKeyDown]);
    return (react.createElement(react.Fragment, null,
        buttonPrev ? (buttonPrev()) : (react.createElement(NavigationButton, { label: "Previous", action: ACTION_PREV, icon: PreviousIcon, renderIcon: iconPrev, style: styles.navigationPrev, disabled: prevDisabled, onClick: prev })),
        buttonNext ? (buttonNext()) : (react.createElement(NavigationButton, { label: "Next", action: ACTION_NEXT, icon: NextIcon, renderIcon: iconNext, style: styles.navigationNext, disabled: nextDisabled, onClick: next }))));
}
const NavigationModule = createModule(MODULE_NAVIGATION, Navigation);

const noScroll = cssClass(CLASS_NO_SCROLL);
const noScrollPadding = cssClass(CLASS_NO_SCROLL_PADDING);
function isHTMLElement(element) {
    return "style" in element;
}
function padScrollbar(element, padding, rtl) {
    const styles = window.getComputedStyle(element);
    const property = rtl ? "padding-left" : "padding-right";
    const computedValue = rtl ? styles.paddingLeft : styles.paddingRight;
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, `${(parseInt(computedValue, 10) || 0) + padding}px`);
    return () => {
        if (originalValue) {
            element.style.setProperty(property, originalValue);
        }
        else {
            element.style.removeProperty(property);
        }
    };
}
function NoScroll({ children }) {
    const rtl = useRTL();
    useLayoutEffect(() => {
        const cleanup = [];
        const { body, documentElement } = document;
        const scrollbar = Math.round(window.innerWidth - documentElement.clientWidth);
        if (scrollbar > 0) {
            cleanup.push(padScrollbar(body, scrollbar, rtl));
            const elements = body.getElementsByTagName("*");
            for (let i = 0; i < elements.length; i += 1) {
                const element = elements[i];
                if (isHTMLElement(element) &&
                    window.getComputedStyle(element).getPropertyValue("position") === "fixed" &&
                    !element.classList.contains(noScrollPadding)) {
                    cleanup.push(padScrollbar(element, scrollbar, rtl));
                }
            }
        }
        body.classList.add(noScroll);
        return () => {
            body.classList.remove(noScroll);
            cleanup.forEach((clean) => clean());
        };
    }, [rtl]);
    return react.createElement(react.Fragment, null, children);
}
const NoScrollModule = createModule(MODULE_NO_SCROLL, NoScroll);

function cssPrefix$1(value) {
    return composePrefix(MODULE_PORTAL, value);
}
function setAttribute(element, attribute, value) {
    const previousValue = element.getAttribute(attribute);
    element.setAttribute(attribute, value);
    return () => {
        if (previousValue) {
            element.setAttribute(attribute, previousValue);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
}
function Portal({ children, animation, styles, className, on, portal, close }) {
    const [mounted, setMounted] = react.useState(false);
    const [visible, setVisible] = react.useState(false);
    const cleanup = react.useRef([]);
    const { setTimeout } = useTimeouts();
    const { subscribe } = useEvents();
    const reduceMotion = useMotionPreference();
    const animationDuration = !reduceMotion ? animation.fade : 0;
    react.useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
            setVisible(false);
        };
    }, []);
    const handleClose = useEventCallback(() => {
        var _a;
        setVisible(false);
        (_a = on.exiting) === null || _a === void 0 ? void 0 : _a.call(on);
        setTimeout(() => {
            var _a;
            (_a = on.exited) === null || _a === void 0 ? void 0 : _a.call(on);
            close();
        }, animationDuration);
    });
    react.useEffect(() => subscribe(ACTION_CLOSE, handleClose), [subscribe, handleClose]);
    const handleEnter = useEventCallback((node) => {
        var _a, _b, _c;
        node.scrollTop;
        setVisible(true);
        (_a = on.entering) === null || _a === void 0 ? void 0 : _a.call(on);
        const elements = (_c = (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
        for (let i = 0; i < elements.length; i += 1) {
            const element = elements[i];
            if (["TEMPLATE", "SCRIPT", "STYLE"].indexOf(element.tagName) === -1 && element !== node) {
                cleanup.current.push(setAttribute(element, "inert", "true"));
                cleanup.current.push(setAttribute(element, "aria-hidden", "true"));
            }
        }
        setTimeout(() => {
            var _a;
            (_a = on.entered) === null || _a === void 0 ? void 0 : _a.call(on);
        }, animationDuration);
    });
    const handleExit = useEventCallback(() => {
        cleanup.current.forEach((clean) => clean());
        cleanup.current = [];
    });
    const handleRef = react.useCallback((node) => {
        if (node) {
            handleEnter(node);
        }
        else {
            handleExit();
        }
    }, [handleEnter, handleExit]);
    return mounted
        ? (0,react_dom.createPortal)(react.createElement("div", { ref: handleRef, className: clsx(className, cssClass("root"), cssClass(cssPrefix$1()), cssClass(CLASS_NO_SCROLL_PADDING), visible && cssClass(cssPrefix$1("open"))), role: "presentation", "aria-live": "polite", style: {
                ...(animation.fade !== LightboxDefaultProps.animation.fade
                    ? { [cssVar("fade_animation_duration")]: `${animationDuration}ms` }
                    : null),
                ...(animation.easing.fade !== LightboxDefaultProps.animation.easing.fade
                    ? { [cssVar("fade_animation_timing_function")]: animation.easing.fade }
                    : null),
                ...styles.root,
            } }, children), portal.root || document.body)
        : null;
}
const PortalModule = createModule(MODULE_PORTAL, Portal);

function Root({ children }) {
    return react.createElement(react.Fragment, null, children);
}
const RootModule = createModule(MODULE_ROOT, Root);

function cssPrefix(value) {
    return composePrefix(MODULE_TOOLBAR, value);
}
function Toolbar({ toolbar: { buttons }, render: { buttonClose, iconClose }, styles }) {
    const { close, setToolbarWidth } = useController();
    const { setContainerRef, containerRect } = useContainerRect();
    useLayoutEffect(() => {
        setToolbarWidth(containerRect === null || containerRect === void 0 ? void 0 : containerRect.width);
    }, [setToolbarWidth, containerRect === null || containerRect === void 0 ? void 0 : containerRect.width]);
    const renderCloseButton = () => {
        if (buttonClose)
            return buttonClose();
        return react.createElement(IconButton, { key: ACTION_CLOSE, label: "Close", icon: CloseIcon, renderIcon: iconClose, onClick: close });
    };
    return (react.createElement("div", { ref: setContainerRef, style: styles.toolbar, className: cssClass(cssPrefix()), ...stopNavigationEventsPropagation() }, buttons === null || buttons === void 0 ? void 0 : buttons.map((button) => (button === ACTION_CLOSE ? renderCloseButton() : button))));
}
const ToolbarModule = createModule(MODULE_TOOLBAR, Toolbar);

function renderNode(node, props) {
    var _a;
    return react.createElement(node.module.component, { key: node.module.name, ...props }, (_a = node.children) === null || _a === void 0 ? void 0 : _a.map((child) => renderNode(child, props)));
}
function mergeAnimation(defaultAnimation, animation = {}) {
    const { easing: defaultAnimationEasing, ...restDefaultAnimation } = defaultAnimation;
    const { easing, ...restAnimation } = animation;
    return {
        easing: { ...defaultAnimationEasing, ...easing },
        ...restDefaultAnimation,
        ...restAnimation,
    };
}
function Lightbox({ carousel, animation, render, toolbar, controller, on, plugins, slides, index, ...restProps }) {
    const { animation: defaultAnimation, carousel: defaultCarousel, render: defaultRender, toolbar: defaultToolbar, controller: defaultController, on: defaultOn, slides: defaultSlides, index: defaultIndex, plugins: defaultPlugins, ...restDefaultProps } = LightboxDefaultProps;
    const { config, augmentation } = withPlugins([
        createNode(PortalModule, [
            createNode(NoScrollModule, [
                createNode(ControllerModule, [
                    createNode(CarouselModule),
                    createNode(ToolbarModule),
                    createNode(NavigationModule),
                ]),
            ]),
        ]),
    ], plugins || defaultPlugins);
    const props = augmentation({
        animation: mergeAnimation(defaultAnimation, animation),
        carousel: { ...defaultCarousel, ...carousel },
        render: { ...defaultRender, ...render },
        toolbar: { ...defaultToolbar, ...toolbar },
        controller: { ...defaultController, ...controller },
        on: { ...defaultOn, ...on },
        ...restDefaultProps,
        ...restProps,
    });
    if (!props.open)
        return null;
    return (react.createElement(LightboxPropsProvider, { ...props },
        react.createElement(LightboxStateProvider, { slides: slides || defaultSlides, index: index || defaultIndex },
            react.createElement(TimeoutsProvider, null,
                react.createElement(EventsProvider, null, renderNode(createNode(RootModule, config), props))))));
}


// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/yet-another-react-lightbox/dist/styles.css
var styles = __webpack_require__(4648);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ const dist_styles = (styles/* default */.Z && styles/* default */.Z.locals ? styles/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/ArrowPathIcon.js

function ArrowPathIcon({
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
    d: "M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react.forwardRef(ArrowPathIcon);
/* harmony default export */ const esm_ArrowPathIcon = (ForwardRef);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/ArrowDownCircleIcon.js

function ArrowDownCircleIcon({
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
    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z",
    clipRule: "evenodd"
  }));
}
const ArrowDownCircleIcon_ForwardRef = react.forwardRef(ArrowDownCircleIcon);
/* harmony default export */ const esm_ArrowDownCircleIcon = (ArrowDownCircleIcon_ForwardRef);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/CheckCircleIcon.js

function CheckCircleIcon({
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
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
    clipRule: "evenodd"
  }));
}
const CheckCircleIcon_ForwardRef = react.forwardRef(CheckCircleIcon);
/* harmony default export */ const esm_CheckCircleIcon = (CheckCircleIcon_ForwardRef);
;// CONCATENATED MODULE: ./src/components/Products/Product.tsx



// @ts-ignore







// @ts-ignore





function Product() {
  (0,react.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
  let {
    id
  } = (0,react_router_dist/* useParams */.UO)();
  const navigate = (0,react_router_dist/* useNavigate */.s0)();
  if (!id) {
    navigate('/');
  }
  document.title = "Bagou450 - Product";
  const {
    data,
    error,
    isLoading
  } = (0,dist/* default */.ZP)(`${config/* config */.v.privateapilink}/addons/getone?id=${id}`, http/* fetcher */._i);
  const [basket, setBasket] = (0,react.useState)();
  const [inBasket, setInBasket] = (0,react.useState)(false);
  const [loading, setLoading] = (0,react.useState)(false);
  const [index, setIndex] = react.useState(-1);
  const [images, setImages] = (0,react.useState)([]);
  const retrieveImages = function () {
    const imageElements = document.querySelectorAll('#lightbox img');
    const imageUrls = Array.from(imageElements).map(function (img) {
      return {
        type: "image",
        src: img.getAttribute("src") || "",
        alt: img.getAttribute("alt") || ""
      };
    });
    setImages(imageUrls);
  };
  react.useEffect(function () {
    console.log(index);
  }, [index]);
  react.useEffect(function () {
    if (data && (!error || !isLoading)) {
      retrieveImages();
    }
  }, [data, error, isLoading]);
  const handleLocalStorageChange = function () {
    const storedBasket = localStorage.getItem("basket");
    if (!storedBasket) {
      setInBasket(false);
      setBasket([]);
      return;
    }
    const basketArray = JSON.parse(storedBasket);
    setInBasket(basketArray.some(function (basketelement) {
      return basketelement.id.toString() === id;
    }));
    setBasket(basketArray);
  };
  (0,react.useEffect)(function () {
    handleLocalStorageChange();
    window.addEventListener('basket', handleLocalStorageChange);
    return function () {
      window.removeEventListener('basket', handleLocalStorageChange);
    };
  }, []);
  if (!data || error || isLoading) {
    return /*#__PURE__*/react.createElement(Loading["default"], null);
  }
  if (data.status === 'error') {
    if (data.message === 'No product found') {
      navigate('/');
    }
  }
  const addon = data.data;
  const downloadProduct = function () {
    setLoading(true);
    react_toastify_esm/* toast */.Am.info('Please wait during the generation of the file...', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    });
    if (id != null) {
      shop_getDownloadOneLink(id).then(function (data) {
        fetch(`${config/* config */.v.privateapilink}${data.data.data}?product=${id}`, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${js_cookie/* default */.Z.get("access_token")}`
          }
        }).then(function (response) {
          return response.blob();
        }).then(function (blob) {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `Bagou450-${addon.name}.zip`);
          document.body.appendChild(link);
          link.addEventListener("load", function () {
            URL.revokeObjectURL(url);
          });
          link.click();
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          react_toastify_esm/* toast */.Am.success("Your file is now downloaded!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          });
        });
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
      });
    }
    setLoading(false);
  };
  const addBasket = function () {
    const elements = localStorage.getItem("basket");
    if (elements) {
      const basketArray = JSON.parse(elements);
      setBasket(basketArray);
    } else {
      setBasket([]);
    }
    const newItem = {
      id: addon.id,
      name: addon.name,
      price: addon.price,
      tag: addon.tag,
      icon: addon.icon
    };
    if (!basket || !basket.length) {
      localStorage.setItem("basket", JSON.stringify([newItem]));
      window.dispatchEvent(new Event("basket"));
      return;
    }
    if (basket.some(function (basketelement) {
      return basketelement.id === addon.id;
    })) {
      return;
    }
    basket.push(newItem);
    const updatedBasket = JSON.stringify(basket);
    localStorage.setItem("basket", updatedBasket);
    window.dispatchEvent(new Event("basket"));
  };
  const findParentWithId = function (node, id) {
    if (!node) {
      return null;
    }
    if (node.attribs && node.attribs.id === id) {
      return node;
    }
    return findParentWithId(node.parent, id);
  };
  const transformImg = function (node, index) {
    const lightboxParent = findParentWithId(node.parent, 'lightbox');
    if (node.name === 'img' && lightboxParent && lightboxParent.name === 'div') {
      const {
        alt
      } = node.attribs;
      if (alt) {
        return /*#__PURE__*/react.createElement('img', {
          ...node.attribs,
          onClick: function () {
            return setIndex(parseInt(alt));
          }
        });
      }
    }
  };
  document.title = "Bagou450 - " + addon.name;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col w-full border-opacity-50"
  }, /*#__PURE__*/react.createElement("div", {
    className: 'grid md:grid-cols-2 mx-8 mt-4 gap-x-4 gap-y-4'
  }, /*#__PURE__*/react.createElement("section", {
    className: ""
  }, /*#__PURE__*/react.createElement("img", {
    src: `${config/* config */.v.privateiconlink}${addon.icon}`,
    className: "min-w-[50%]",
    alt: addon.name
  })), /*#__PURE__*/react.createElement("section", null, /*#__PURE__*/react.createElement("h1", {
    className: "font-bold text-4xl"
  }, addon.name, /*#__PURE__*/react.createElement("br", null), " ", /*#__PURE__*/react.createElement("span", {
    className: "font-normal text-sm"
  }, addon.tag)), /*#__PURE__*/react.createElement("dl", {
    className: "mx-auto grid grid-cols-1 gap-px bg-gray-900/5 lg:grid-cols-3 gap-x-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
  }, /*#__PURE__*/react.createElement("dt", {
    className: "truncate text-sm font-medium text-gray-500"
  }, /*#__PURE__*/react.createElement(esm_ArrowPathIcon, {
    className: 'h-6 w-6 text-blue-500'
  }), "Version"), /*#__PURE__*/react.createElement("dd", {
    className: "mt-1 text-3xl font-semibold tracking-tight text-blue-500"
  }, addon.version)), /*#__PURE__*/react.createElement("div", {
    className: "overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
  }, /*#__PURE__*/react.createElement("dt", {
    className: "truncate text-sm font-medium text-gray-500"
  }, /*#__PURE__*/react.createElement(esm_ArrowDownCircleIcon, {
    className: `h-6 w-6 ${addon.autoinstaller ? 'text-green-500' : 'text-red-500'}`
  }), "Auto Installer"), /*#__PURE__*/react.createElement("dd", {
    className: `mt-1 text-3xl font-semibold tracking-tight text-gray-900  ${addon.autoinstaller ? 'text-green-500' : 'text-red-500'}`
  }, addon.autoinstaller ? 'Available' : 'N/A')), /*#__PURE__*/react.createElement("div", {
    className: "overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
  }, /*#__PURE__*/react.createElement("dt", {
    className: "truncate text-sm font-medium text-gray-500"
  }, /*#__PURE__*/react.createElement(esm_CheckCircleIcon, {
    className: 'h-6 w-6  text-indigo-700 '
  }), " Compatible"), /*#__PURE__*/react.createElement("dd", {
    className: "mt-1 text-3xl font-semibold tracking-tight text-indigo-700"
  }, "1.X"))), /*#__PURE__*/react.createElement("div", {
    className: "hidden"
  }, /*#__PURE__*/react.createElement("div", {
    className: "divider divider-horizontal hidden"
  }, "OR"), /*#__PURE__*/react.createElement("div", {
    className: " h-20 card rounded-box place-items-center grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-2 mx-8"
  })), /*#__PURE__*/react.createElement("p", {
    className: "text-4xl mt-12"
  }, addon.price, "\u20AC"), addon.price === 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("p", {
    className: "text-2xl"
  }, "Download on:"), /*#__PURE__*/react.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 mt-2"
  }, addon.link.map(function (element, key) {
    return /*#__PURE__*/react.createElement("p", {
      key: key
    }, element.name === 'bbb' ? /*#__PURE__*/react.createElement("a", {
      href: element.link,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/react.createElement("button", {
      className: "btn btn-outline btn-secondary"
    }, "BuiltByBits")) : element.name === 'ssx' ? /*#__PURE__*/react.createElement("a", {
      href: element.link,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/react.createElement("button", {
      className: "btn btn-outline"
    }, "SourceXChange")) : element.name === 'pm' ? /*#__PURE__*/react.createElement("a", {
      href: element.link,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/react.createElement("button", {
      className: "btn btn-outline btn-warning"
    }, "PterodactylMarket")) : null);
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react.createElement("button", {
    className: `btn btn-outline outline-0 ${inBasket || loading ? ' btn-secondary btn-disabled' : data.owned ? 'btn-secondary' : ' btn-primary'}`,
    onClick: function () {
      if (!inBasket && !data.owned) {
        addBasket();
      }
      if (data.owned) {
        downloadProduct();
      }
    }
  }, inBasket ? 'Already in basket' : data.owned ? 'Download' : 'Add to basket')))), /*#__PURE__*/react.createElement("div", {
    className: "divider"
  }, "Description"), /*#__PURE__*/react.createElement("div", {
    className: "mockup-browser border bg-base-300 hidden"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mockup-browser-toolbar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "input"
  }, "https://daisyui.com")), /*#__PURE__*/react.createElement("div", {
    className: "flex justify-center px-4 py-16 bg-base-200"
  }, "Hello!")), /*#__PURE__*/react.createElement("div", {
    className: "mockup-phone hidden"
  }, /*#__PURE__*/react.createElement("div", {
    className: "camera"
  }), /*#__PURE__*/react.createElement("div", {
    className: "display"
  }, /*#__PURE__*/react.createElement("div", {
    className: "artboard artboard-demo phone-1"
  }, "Hi."))), /*#__PURE__*/react.createElement("section", {
    className: "my-4 ql"
  }, (0,lib/* default */.ZP)(addon.description.replaceAll('rel="noopener noreferrer" target="_blank"', ''), {
    transform: transformImg
  })), /*#__PURE__*/react.createElement(Lightbox, {
    index: index,
    slides: images,
    open: index >= 0,
    close: function () {
      return setIndex(-1);
    }
  })));
}

/***/ }),

/***/ 4648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.yarl__fullsize{height:100%;width:100%}.yarl__relative{position:relative}.yarl__portal{bottom:0;left:0;opacity:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(--yarl__fade_animation_duration,.25s) var(--yarl__fade_animation_timing_function,ease);z-index:var(--yarl__portal_zindex,9999)}.yarl__portal_open{opacity:1}.yarl__container{background-color:var(--yarl__container_background_color,var(--yarl__color_backdrop,#000));bottom:0;left:0;outline:0;overflow:hidden;overscroll-behavior:var(--yarl__controller_overscroll-behavior,contain);position:absolute;right:0;top:0;touch-action:var(--yarl__controller_touch_action,none);-webkit-user-select:none;user-select:none}.yarl__carousel{align-content:center;align-items:stretch;display:flex;flex:0 0 auto;height:100%;justify-content:center;opacity:var(--yarl__pull_down_opacity,1);transform:translate(var(--yarl__swipe_offset,0),var(--yarl__pull_down_offset,0));width:calc(100% + (var(--yarl__carousel_slides_count) - 1)*(100% + var(--yarl__carousel_spacing_px, 0)*1px + var(--yarl__carousel_spacing_percent, 0)*1%))}.yarl__carousel_with_slides{column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%)}.yarl__flex_center{align-content:center;align-items:center;display:flex;justify-content:center}.yarl__slide{flex:1;overflow:hidden;padding:calc(var(--yarl__carousel_padding_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_padding_percent, 0)*1%);position:relative}[dir=rtl] .yarl__slide{--yarl__direction:-1}.yarl__slide_image{-webkit-touch-callout:none;max-height:100%;max-width:100%;object-fit:contain;touch-action:var(--yarl__controller_touch_action,none);user-select:none;-webkit-user-select:none}@media screen and (min-width:800px){.yarl__slide_image{-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);-webkit-transform-style:preserve-3d}}.yarl__slide_image_cover{height:100%;object-fit:cover;width:100%}.yarl__slide_image_loading{opacity:0}.yarl__slide_placeholder{left:50%;line-height:0;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%)}.yarl__slide_loading{animation:yarl__delayed_fadein 1s linear;color:var(--yarl__slide_icon_loading_color,var(--yarl__color_button,hsla(0,0%,100%,.8)))}.yarl__slide_loading line{animation:yarl__stroke_opacity 1s linear infinite}.yarl__slide_loading line:first-of-type{animation-delay:-1.875s}.yarl__slide_loading line:nth-of-type(2){animation-delay:-1.75s}.yarl__slide_loading line:nth-of-type(3){animation-delay:-1.625s}.yarl__slide_loading line:nth-of-type(4){animation-delay:-1.5s}.yarl__slide_loading line:nth-of-type(5){animation-delay:-1.375s}.yarl__slide_loading line:nth-of-type(6){animation-delay:-1.25s}.yarl__slide_loading line:nth-of-type(7){animation-delay:-1.125s}.yarl__slide_loading line:nth-of-type(8){animation-delay:-1s}.yarl__slide_error{color:var(--yarl__slide_icon_error_color,red);height:var(--yarl__slide_icon_error_size,48px);width:var(--yarl__slide_icon_error_size,48px)}@media (prefers-reduced-motion){.yarl__portal,.yarl__slide{transition:unset}.yarl__slide_loading,.yarl__slide_loading line{animation:unset}}.yarl__toolbar{bottom:auto;display:flex;justify-content:flex-end;left:auto;padding:var(--yarl__toolbar_padding,8px);position:absolute;right:0;top:0}[dir=rtl] .yarl__toolbar{bottom:auto;left:0;right:auto;top:0}.yarl__icon{height:var(--yarl__icon_size,32px);width:var(--yarl__icon_size,32px)}.yarl__button{-webkit-tap-highlight-color:transparent;appearance:none;background-color:var(--yarl__button_background_color,transparent);border:var(--yarl__button_border,0);color:var(--yarl__color_button,hsla(0,0%,100%,.8));cursor:pointer;filter:var(--yarl__button_filter,drop-shadow(2px 2px 2px rgba(0,0,0,.8)));line-height:0;margin:var(--yarl__button_margin,0);outline:none;padding:var(--yarl__button_padding,8px)}.yarl__button:focus{color:var(--yarl__color_button_active,#fff)}.yarl__button:focus:not(:focus-visible){color:var(--yarl__color_button,hsla(0,0%,100%,.8))}.yarl__button:focus-visible{color:var(--yarl__color_button_active,#fff)}@media (hover:hover){.yarl__button:focus-visible:hover,.yarl__button:focus:hover,.yarl__button:hover{color:var(--yarl__color_button_active,#fff)}}.yarl__button:disabled{color:var(--yarl__color_button_disabled,hsla(0,0%,100%,.4));cursor:default}.yarl__navigation_next,.yarl__navigation_prev{padding:var(--yarl__navigation_button_padding,24px 16px);position:absolute;top:50%;transform:translateY(-50%)}.yarl__navigation_prev{left:0}[dir=rtl] .yarl__navigation_prev{left:unset;right:0;transform:translateY(-50%) rotate(180deg)}.yarl__navigation_next{right:0}[dir=rtl] .yarl__navigation_next{left:0;right:unset;transform:translateY(-50%) rotate(180deg)}.yarl__no_scroll{height:100%;overflow:hidden;overscroll-behavior:none}@keyframes yarl__delayed_fadein{0%{opacity:0}80%{opacity:0}to{opacity:1}}@keyframes yarl__stroke_opacity{0%{stroke-opacity:1}to{stroke-opacity:.125}}`, "",{"version":3,"sources":["webpack://./node_modules/yet-another-react-lightbox/dist/styles.css"],"names":[],"mappings":"AAAA,gBAAgB,WAAW,CAAC,UAAU,CAAC,gBAAgB,iBAAiB,CAAC,cAAc,QAAQ,CAAC,MAAM,CAAC,SAAS,CAAC,eAAe,CAAC,cAAc,CAAC,OAAO,CAAC,KAAK,CAAC,6GAA6G,CAAC,uCAAuC,CAAC,mBAAmB,SAAS,CAAC,iBAAiB,yFAAyF,CAAC,QAAQ,CAAC,MAAM,CAAC,SAAS,CAAC,eAAe,CAAC,uEAAuE,CAAC,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,sDAAsD,CAAC,wBAAwB,CAAuB,gBAAgB,CAAC,gBAAgB,oBAAoB,CAAC,mBAAmB,CAAC,YAAY,CAAC,aAAa,CAAC,WAAW,CAAC,sBAAsB,CAAC,wCAAwC,CAA0F,gFAAgF,CAAC,0JAA0J,CAAC,4BAAyf,uOAAuO,CAAC,mBAAmB,oBAAoB,CAAC,kBAAkB,CAAC,YAAY,CAAC,sBAAsB,CAAC,aAAa,MAAM,CAAC,eAAe,CAAC,oOAAoO,CAAC,iBAAiB,CAAC,uBAAuB,oBAAoB,CAAC,mBAAmB,0BAA0B,CAAC,eAAe,CAAC,cAAc,CAAuB,kBAAkB,CAAC,sDAAsD,CAAuB,gBAAgB,CAAC,wBAAwB,CAAC,oCAAoC,mBAAmB,kCAAkC,CAAC,+BAA+B,CAAC,mCAAmC,CAAC,CAAC,yBAAyB,WAAW,CAAqB,gBAAgB,CAAC,UAAU,CAAC,2BAA2B,SAAS,CAAC,yBAAyB,QAAQ,CAAC,aAAa,CAAC,iBAAiB,CAAC,OAAO,CAAqD,2CAA2C,CAAC,qBAAsE,wCAAwC,CAAC,wFAAwF,CAAC,0BAAoF,iDAAiD,CAAC,wCAAwE,uBAAuB,CAAC,yCAAwE,sBAAsB,CAAC,yCAAyE,uBAAuB,CAAC,yCAAuE,qBAAqB,CAAC,yCAAyE,uBAAuB,CAAC,yCAAwE,sBAAsB,CAAC,yCAAyE,uBAAuB,CAAC,yCAAqE,mBAAmB,CAAC,mBAAmB,6CAA6C,CAAC,8CAA8C,CAAC,6CAA6C,CAAC,gCAAgC,2BAA2B,gBAAgB,CAAC,+CAAuE,eAAe,CAAC,CAAC,eAAe,WAAW,CAAC,YAAY,CAAC,wBAAwB,CAAC,SAAS,CAAC,wCAAwC,CAAC,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,yBAAyB,WAAW,CAAC,MAAM,CAAC,UAAU,CAAC,KAAK,CAAC,YAAY,kCAAkC,CAAC,iCAAiC,CAAC,cAAc,uCAAuC,CAA8C,eAAe,CAAC,iEAAiE,CAAC,mCAAmC,CAAC,kDAAkD,CAAC,cAAc,CAAmF,yEAAyE,CAAC,aAAa,CAAC,mCAAmC,CAAC,YAAY,CAAC,uCAAuC,CAAC,oBAAoB,2CAA2C,CAAC,wCAAwC,kDAAkD,CAAC,4BAA4B,2CAA2C,CAAC,qBAAqB,gFAAgF,2CAA2C,CAAC,CAAC,uBAAuB,2DAA2D,CAAC,cAAc,CAAC,8CAA8C,wDAAwD,CAAC,iBAAiB,CAAC,OAAO,CAAoC,0BAA0B,CAAC,uBAAuB,MAAM,CAAC,iCAAiC,UAAU,CAAC,OAAO,CAAmD,yCAAyC,CAAC,uBAAuB,OAAO,CAAC,iCAAiC,MAAM,CAAC,WAAW,CAAmD,yCAAyC,CAAC,iBAAiB,WAAW,CAAC,eAAe,CAAC,wBAAwB,CAAkF,gCAAgC,GAAG,SAAS,CAAC,IAAI,SAAS,CAAC,GAAG,SAAS,CAAC,CAAqF,gCAAgC,GAAG,gBAAgB,CAAC,GAAG,mBAAmB,CAAC","sourcesContent":[".yarl__fullsize{height:100%;width:100%}.yarl__relative{position:relative}.yarl__portal{bottom:0;left:0;opacity:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(--yarl__fade_animation_duration,.25s) var(--yarl__fade_animation_timing_function,ease);z-index:var(--yarl__portal_zindex,9999)}.yarl__portal_open{opacity:1}.yarl__container{background-color:var(--yarl__container_background_color,var(--yarl__color_backdrop,#000));bottom:0;left:0;outline:0;overflow:hidden;overscroll-behavior:var(--yarl__controller_overscroll-behavior,contain);position:absolute;right:0;top:0;touch-action:var(--yarl__controller_touch_action,none);-webkit-user-select:none;-moz-user-select:none;user-select:none}.yarl__carousel{align-content:center;align-items:stretch;display:flex;flex:0 0 auto;height:100%;justify-content:center;opacity:var(--yarl__pull_down_opacity,1);-webkit-transform:translate(var(--yarl__swipe_offset,0),var(--yarl__pull_down_offset,0));transform:translate(var(--yarl__swipe_offset,0),var(--yarl__pull_down_offset,0));width:calc(100% + (var(--yarl__carousel_slides_count) - 1)*(100% + var(--yarl__carousel_spacing_px, 0)*1px + var(--yarl__carousel_spacing_percent, 0)*1%))}.yarl__carousel_with_slides{-webkit-column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%);-moz-column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%);column-gap:calc(var(--yarl__carousel_spacing_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_spacing_percent, 0)*1%)}.yarl__flex_center{align-content:center;align-items:center;display:flex;justify-content:center}.yarl__slide{flex:1;overflow:hidden;padding:calc(var(--yarl__carousel_padding_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_padding_percent, 0)*1%);position:relative}[dir=rtl] .yarl__slide{--yarl__direction:-1}.yarl__slide_image{-webkit-touch-callout:none;max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain;touch-action:var(--yarl__controller_touch_action,none);-moz-user-select:none;user-select:none;-webkit-user-select:none}@media screen and (min-width:800px){.yarl__slide_image{-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);-webkit-transform-style:preserve-3d}}.yarl__slide_image_cover{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.yarl__slide_image_loading{opacity:0}.yarl__slide_placeholder{left:50%;line-height:0;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.yarl__slide_loading{-webkit-animation:yarl__delayed_fadein 1s linear;animation:yarl__delayed_fadein 1s linear;color:var(--yarl__slide_icon_loading_color,var(--yarl__color_button,hsla(0,0%,100%,.8)))}.yarl__slide_loading line{-webkit-animation:yarl__stroke_opacity 1s linear infinite;animation:yarl__stroke_opacity 1s linear infinite}.yarl__slide_loading line:first-of-type{-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.yarl__slide_loading line:nth-of-type(2){-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.yarl__slide_loading line:nth-of-type(3){-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.yarl__slide_loading line:nth-of-type(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.yarl__slide_loading line:nth-of-type(5){-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.yarl__slide_loading line:nth-of-type(6){-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.yarl__slide_loading line:nth-of-type(7){-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.yarl__slide_loading line:nth-of-type(8){-webkit-animation-delay:-1s;animation-delay:-1s}.yarl__slide_error{color:var(--yarl__slide_icon_error_color,red);height:var(--yarl__slide_icon_error_size,48px);width:var(--yarl__slide_icon_error_size,48px)}@media (prefers-reduced-motion){.yarl__portal,.yarl__slide{transition:unset}.yarl__slide_loading,.yarl__slide_loading line{-webkit-animation:unset;animation:unset}}.yarl__toolbar{bottom:auto;display:flex;justify-content:flex-end;left:auto;padding:var(--yarl__toolbar_padding,8px);position:absolute;right:0;top:0}[dir=rtl] .yarl__toolbar{bottom:auto;left:0;right:auto;top:0}.yarl__icon{height:var(--yarl__icon_size,32px);width:var(--yarl__icon_size,32px)}.yarl__button{-webkit-tap-highlight-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--yarl__button_background_color,transparent);border:var(--yarl__button_border,0);color:var(--yarl__color_button,hsla(0,0%,100%,.8));cursor:pointer;-webkit-filter:var(--yarl__button_filter,drop-shadow(2px 2px 2px rgba(0,0,0,.8)));filter:var(--yarl__button_filter,drop-shadow(2px 2px 2px rgba(0,0,0,.8)));line-height:0;margin:var(--yarl__button_margin,0);outline:none;padding:var(--yarl__button_padding,8px)}.yarl__button:focus{color:var(--yarl__color_button_active,#fff)}.yarl__button:focus:not(:focus-visible){color:var(--yarl__color_button,hsla(0,0%,100%,.8))}.yarl__button:focus-visible{color:var(--yarl__color_button_active,#fff)}@media (hover:hover){.yarl__button:focus-visible:hover,.yarl__button:focus:hover,.yarl__button:hover{color:var(--yarl__color_button_active,#fff)}}.yarl__button:disabled{color:var(--yarl__color_button_disabled,hsla(0,0%,100%,.4));cursor:default}.yarl__navigation_next,.yarl__navigation_prev{padding:var(--yarl__navigation_button_padding,24px 16px);position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.yarl__navigation_prev{left:0}[dir=rtl] .yarl__navigation_prev{left:unset;right:0;-webkit-transform:translateY(-50%) rotate(180deg);transform:translateY(-50%) rotate(180deg)}.yarl__navigation_next{right:0}[dir=rtl] .yarl__navigation_next{left:0;right:unset;-webkit-transform:translateY(-50%) rotate(180deg);transform:translateY(-50%) rotate(180deg)}.yarl__no_scroll{height:100%;overflow:hidden;overscroll-behavior:none}@-webkit-keyframes yarl__delayed_fadein{0%{opacity:0}80%{opacity:0}to{opacity:1}}@keyframes yarl__delayed_fadein{0%{opacity:0}80%{opacity:0}to{opacity:1}}@-webkit-keyframes yarl__stroke_opacity{0%{stroke-opacity:1}to{stroke-opacity:.125}}@keyframes yarl__stroke_opacity{0%{stroke-opacity:1}to{stroke-opacity:.125}}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=597.bundle.js.map