"use strict";
(globalThis["webpackChunknewwebsite"] = globalThis["webpackChunknewwebsite"] || []).push([["src_components_Elements_Home_Features1_tsx"],{

/***/ "./src/components/Elements/Home/Features1.tsx":
/*!****************************************************!*\
  !*** ./src/components/Elements/Home/Features1.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Features1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");



const features = [{
  title: 'Minecraft Versions changer',
  description: 'Effortlessly switch between Minecraft versions and modpacks directly from the panel, with real-time fetching, extensive compatibility, and seamless integration.',
  image: 'https://cdn.bagou450.com/assets/img/addons/mcversions/computer/1.webp',
  imagemobile: 'https://cdn.bagou450.com/assets/img/addons/mcversions/mobile/1.webp'
}, {
  title: 'Minecraft Plugins installer',
  description: 'Instantly install a vast range of Minecraft plugins from SpigotMc, DevBukkit, PolyMart, and more, all directly from your panel with guaranteed uptime and compatibility.',
  image: 'https://cdn.bagou450.com/assets/img/addons/mcplugins/computer/1.webp',
  imagemobile: 'https://cdn.bagou450.com/assets/img/addons/mcplugins/mobile/1.webp'
}, {
  title: 'Artifacts Changer',
  description: 'Easily update your FiveM artifacts with a single click, ensuring synchronized TxAdmin updates and real-time fetching from CFX servers.',
  image: 'https://cdn.bagou450.com/assets/img/addons/artifacts/computer/1.webp',
  imagemobile: 'https://cdn.bagou450.com/assets/img/addons/artifacts/mobile/1.webp'
}, {
  title: 'Cloud Servers',
  description: 'Empower your users to create their own servers with adjustable resources, seamlessly integrated with WHMCS and compatible across all Pterodactyl themes.',
  image: 'https://cdn.bagou450.com/assets/img/addons/cloudservers/computer/1.webp',
  imagemobile: 'https://cdn.bagou450.com/assets/img/addons/cloudservers/mobile/1.webp'
}];
function Features1() {
  const [tabOrientation, setTabOrientation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('horizontal');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');
    function onMediaQueryChange({
      matches
    }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }
    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);
    return function () {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
    id: "features",
    "aria-label": "Features for running your books",
    className: "relative overflow-hidden pb-28 pt-20 sm:py-32 bg-bg450-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "max-w-2xl md:mx-auto md:text-center xl:max-w-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: "font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
  }, "Pterodactyl Addons Redefined."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: "mt-6 text-lg tracking-tight text-blue-100"
  }, "Seamless integration for your game hosting and websites. Quality, speed, and reliability at the forefront.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Group, {
    as: "div",
    className: "mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0",
    vertical: tabOrientation === 'vertical'
  }, function ({
    selectedIndex
  }) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.List, {
      className: "relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
    }, features.map(function (feature, featureIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        key: feature.title,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6', selectedIndex === featureIndex ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10' : 'hover:bg-white/10 lg:hover:bg-white/5')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('font-display text-lg ui-not-focus-visible:outline-none', selectedIndex === featureIndex ? 'text-blue-600 lg:text-white' : 'text-blue-100 hover:text-white lg:text-white')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
        className: "absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"
      }), feature.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('mt-2 hidden text-sm lg:block', selectedIndex === featureIndex ? 'text-white' : 'text-blue-100 group-hover:text-white')
      }, feature.description));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panels, {
      className: "lg:col-span-7"
    }, features.map(function (feature) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panel, {
        key: feature.title,
        unmount: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "relative sm:px-6 lg:hidden"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
        className: "relative mx-auto max-w-2xl text-base text-white sm:text-center"
      }, feature.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "mt-20 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
        loading: 'lazy',
        className: "hidden md:block w-full",
        width: 1920,
        height: 1080,
        src: feature.image,
        alt: feature.title,
        sizes: "(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
        loading: 'lazy',
        className: " md:hidden w-full",
        width: 630,
        height: 994,
        src: feature.imagemobile,
        alt: feature.title,
        sizes: "(min-width: 640px) 100vw, 45rem"
      })));
    })));
  })));
}

/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/tabs/tabs.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab: () => (/* binding */ rt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _internal_focus_sentinel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../internal/focus-sentinel.js */ "./node_modules/@headlessui/react/dist/internal/focus-sentinel.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _utils_stable_collection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/stable-collection.js */ "./node_modules/@headlessui/react/dist/utils/stable-collection.js");
var ue=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(ue||{}),Te=(o=>(o[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o))(Te||{}),de=(r=>(r[r.SetSelectedIndex=0]="SetSelectedIndex",r[r.RegisterTab=1]="RegisterTab",r[r.UnregisterTab=2]="UnregisterTab",r[r.RegisterPanel=3]="RegisterPanel",r[r.UnregisterPanel=4]="UnregisterPanel",r))(de||{});let ce={[0](e,n){var u;let t=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)(e.tabs,T=>T.current),o=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)(e.panels,T=>T.current),s=t.filter(T=>{var l;return!((l=T.current)!=null&&l.hasAttribute("disabled"))}),r={...e,tabs:t,panels:o};if(n.index<0||n.index>t.length-1){let T=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(Math.sign(n.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(Math.sign(n.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});if(s.length===0)return r;let l=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(T,{[0]:()=>t.indexOf(s[0]),[1]:()=>t.indexOf(s[s.length-1])});return{...r,selectedIndex:l===-1?e.selectedIndex:l}}let i=t.slice(0,n.index),b=[...t.slice(n.index),...i].find(T=>s.includes(T));if(!b)return r;let c=(u=t.indexOf(b))!=null?u:e.selectedIndex;return c===-1&&(c=e.selectedIndex),{...r,selectedIndex:c}},[1](e,n){var r;if(e.tabs.includes(n.tab))return e;let t=e.tabs[e.selectedIndex],o=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)([...e.tabs,n.tab],i=>i.current),s=(r=o.indexOf(t))!=null?r:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:o,selectedIndex:s}},[2](e,n){return{...e,tabs:e.tabs.filter(t=>t!==n.tab)}},[3](e,n){return e.panels.includes(n.panel)?e:{...e,panels:(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)([...e.panels,n.panel],t=>t.current)}},[4](e,n){return{...e,panels:e.panels.filter(t=>t!==n.panel)}}},X=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);X.displayName="TabsDataContext";function M(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(X);if(n===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return n}let $=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);$.displayName="TabsActionsContext";function q(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($);if(n===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return n}function fe(e,n){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(n.type,ce,e,n)}let be=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function me(e,n){let{defaultIndex:t=0,vertical:o=!1,manual:s=!1,onChange:r,selectedIndex:i=null,...R}=e;const b=o?"vertical":"horizontal",c=s?"manual":"auto";let u=i!==null,T=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(n),[l,d]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(fe,{selectedIndex:i!=null?i:t,tabs:[],panels:[]}),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:l.selectedIndex}),[l.selectedIndex]),m=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_4__.useLatestValue)(r||(()=>{})),y=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_4__.useLatestValue)(l.tabs),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({orientation:b,activation:c,...l}),[b,c,l]),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(p=>(d({type:1,tab:p}),()=>d({type:2,tab:p}))),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(p=>(d({type:3,panel:p}),()=>d({type:4,panel:p}))),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(p=>{C.current!==p&&m.current(p),u||d({type:0,index:p})}),C=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_4__.useLatestValue)(u?e.selectedIndex:l.selectedIndex),N=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerTab:I,registerPanel:A,change:L}),[]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{d({type:0,index:i!=null?i:t})},[i]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{if(C.current===void 0||l.tabs.length<=0)return;let p=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)(l.tabs,a=>a.current);p.some((a,f)=>l.tabs[f]!==a)&&L(p.indexOf(l.tabs[C.current]))});let B={ref:T};return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_utils_stable_collection_js__WEBPACK_IMPORTED_MODULE_7__.StableCollection,null,react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement($.Provider,{value:N},react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(X.Provider,{value:E},E.tabs.length<=0&&react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_internal_focus_sentinel_js__WEBPACK_IMPORTED_MODULE_8__.FocusSentinel,{onFocus:()=>{var p,D;for(let a of y.current)if(((p=a.current)==null?void 0:p.tabIndex)===0)return(D=a.current)==null||D.focus(),!0;return!1}}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)({ourProps:B,theirProps:R,slot:g,defaultTag:be,name:"Tabs"}))))}let Pe="div";function xe(e,n){let{orientation:t,selectedIndex:o}=M("Tab.List"),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(n);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)({ourProps:{ref:s,role:"tablist","aria-orientation":t},theirProps:e,slot:{selectedIndex:o},defaultTag:Pe,name:"Tabs.List"})}let ge="button";function ye(e,n){var p,D;let t=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_10__.useId)(),{id:o=`headlessui-tabs-tab-${t}`,...s}=e,{orientation:r,activation:i,selectedIndex:R,tabs:b,panels:c}=M("Tab"),u=q("Tab"),T=M("Tab"),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(l,n);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>u.registerTab(l),[u,l]);let g=(0,_utils_stable_collection_js__WEBPACK_IMPORTED_MODULE_7__.useStableCollectionIndex)("tabs"),m=b.indexOf(l);m===-1&&(m=g);let y=m===R,E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(a=>{var j;let f=a();if(f===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Success&&i==="auto"){let W=(j=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_11__.getOwnerDocument)(l))==null?void 0:j.activeElement,z=T.tabs.findIndex(te=>te.current===W);z!==-1&&u.change(z)}return f}),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(a=>{let f=b.map(W=>W.current).filter(Boolean);if(a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Space||a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Enter){a.preventDefault(),a.stopPropagation(),u.change(m);return}switch(a.key){case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Home:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.PageUp:return a.preventDefault(),a.stopPropagation(),E(()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.First));case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.End:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.PageDown:return a.preventDefault(),a.stopPropagation(),E(()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Last))}if(E(()=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(r,{vertical(){return a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowUp?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround):a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowDown?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround):_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Error},horizontal(){return a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowLeft?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround):a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowRight?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround):_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Error}}))===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusResult.Success)return a.preventDefault()}),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{var a;A.current||(A.current=!0,(a=l.current)==null||a.focus({preventScroll:!0}),u.change(m),(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_13__.microTask)(()=>{A.current=!1}))}),C=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(a=>{a.preventDefault()}),N=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:y}),[y]),B={ref:d,onKeyDown:I,onMouseDown:C,onClick:L,id:o,role:"tab",type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_14__.useResolveButtonType)(e,l),"aria-controls":(D=(p=c[m])==null?void 0:p.current)==null?void 0:D.id,"aria-selected":y,tabIndex:y?0:-1};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)({ourProps:B,theirProps:s,slot:N,defaultTag:ge,name:"Tabs.Tab"})}let Ee="div";function Ae(e,n){let{selectedIndex:t}=M("Tab.Panels"),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(n),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:t}),[t]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)({ourProps:{ref:o},theirProps:e,slot:s,defaultTag:Ee,name:"Tabs.Panels"})}let Re="div",Le=_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.Features.Static;function Se(e,n){var E,I,A,L;let t=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_10__.useId)(),{id:o=`headlessui-tabs-panel-${t}`,tabIndex:s=0,...r}=e,{selectedIndex:i,tabs:R,panels:b}=M("Tab.Panel"),c=q("Tab.Panel"),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),T=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(u,n);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>c.registerPanel(u),[c,u]);let l=(0,_utils_stable_collection_js__WEBPACK_IMPORTED_MODULE_7__.useStableCollectionIndex)("panels"),d=b.indexOf(u);d===-1&&(d=l);let g=d===i,m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:g}),[g]),y={ref:T,id:o,role:"tabpanel","aria-labelledby":(I=(E=R[d])==null?void 0:E.current)==null?void 0:I.id,tabIndex:g?s:-1};return!g&&((A=r.unmount)==null||A)&&!((L=r.static)!=null&&L)?react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Hidden,{as:"span",...y}):(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)({ourProps:y,theirProps:r,slot:m,defaultTag:Re,features:Le,visible:g,name:"Tabs.Panel"})}let Ie=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.forwardRefWithAs)(ye),De=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.forwardRefWithAs)(me),Fe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.forwardRefWithAs)(xe),he=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.forwardRefWithAs)(Ae),Me=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.forwardRefWithAs)(Se),rt=Object.assign(Ie,{Group:De,List:Fe,Panels:he,Panel:Me});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/focus-sentinel.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/focus-sentinel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusSentinel: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hidden_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
function A({onFocus:n}){let[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),u=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)();return r?react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_2__.Hidden,{as:"button",type:"button",features:_hidden_js__WEBPACK_IMPORTED_MODULE_2__.Features.Focusable,onFocus:a=>{a.preventDefault();let e,i=50;function t(){if(i--<=0){e&&cancelAnimationFrame(e);return}if(n()){if(cancelAnimationFrame(e),!u.current)return;o(!1);return}e=requestAnimationFrame(t)}e=requestAnimationFrame(t)}}):null}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/stable-collection.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/stable-collection.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StableCollection: () => (/* binding */ C),
/* harmony export */   useStableCollectionIndex: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
const s=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function a(){return{groups:new Map,get(n,t){var c;let e=this.groups.get(n);e||(e=new Map,this.groups.set(n,e));let l=(c=e.get(t))!=null?c:0;e.set(t,l+1);let o=Array.from(e.keys()).indexOf(t);function i(){let u=e.get(t);u>1?e.set(t,u-1):e.delete(t)}return[o,i]}}}function C({children:n}){let t=react__WEBPACK_IMPORTED_MODULE_0__.useRef(a());return react__WEBPACK_IMPORTED_MODULE_0__.createElement(s.Provider,{value:t},n)}function d(n){let t=react__WEBPACK_IMPORTED_MODULE_0__.useContext(s);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let e=f(),[l,o]=t.current.get(n,e);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>o,[]),l}function f(){var l,o,i;let n=(i=(o=(l=react__WEBPACK_IMPORTED_MODULE_0__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:l.ReactCurrentOwner)==null?void 0:o.current)!=null?i:null;if(!n)return Symbol();let t=[],e=n;for(;e;)t.push(e.index),e=e.return;return"$."+t.join(".")}


/***/ })

}]);
//# sourceMappingURL=src_components_Elements_Home_Features1_tsx.bundle.js.map