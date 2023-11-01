"use strict";
(self["webpackChunknewwebsite"] = self["webpackChunknewwebsite"] || []).push([[775],{

/***/ 775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TicketContainer; }
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(5776);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var core_dist = __webpack_require__(3757);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(8132);
// EXTERNAL MODULE: ./src/api/http.ts + 41 modules
var http = __webpack_require__(9670);
// EXTERNAL MODULE: ./src/components/Elements/Loading.tsx
var Loading = __webpack_require__(1229);
// EXTERNAL MODULE: ./node_modules/debounce/index.js
var debounce = __webpack_require__(296);
// EXTERNAL MODULE: ./src/config/config.ts
var config = __webpack_require__(1412);
// EXTERNAL MODULE: ./src/components/Account/AccountRouter.tsx + 10 modules
var AccountRouter = __webpack_require__(5248);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(4192);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id = __webpack_require__(9946);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(6723);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(3855);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-computed.js
function use_computed_i(e,o){let[u,t]=(0,compat_module.useState)(e),r=(0,use_latest_value/* useLatestValue */.E)(e);return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>t(r.current),[r,t,...o]),u}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(3784);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(2351);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(2984);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
var disposables = __webpack_require__(9362);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard = __webpack_require__(1363);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/calculate-active-index.js
var calculate_active_index = __webpack_require__(1497);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
var bugs = __webpack_require__(4103);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/focus-management.js
var focus_management = __webpack_require__(4575);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(6567);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var use_resolve_button_type = __webpack_require__(4157);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js + 1 modules
var use_outside_click = __webpack_require__(3986);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
var internal_hidden = __webpack_require__(6045);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/form.js
function form_e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):typeof t=="boolean"?i.push([s,t?"1":"0"]):typeof t=="string"?i.push([s,t]):typeof t=="number"?i.push([s,`${t}`]):t==null?i.push([s,""]):form_e(t,s,i)}function p(i){var t,r;let s=(t=i==null?void 0:i.form)!=null?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image")){n.click();return}(r=s.requestSubmit)==null||r.call(s)}}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/owner.js
var owner = __webpack_require__(5466);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(3781);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-controllable.js
function use_controllable_T(l,r,c){let[i,s]=(0,compat_module.useState)(c),e=l!==void 0,t=(0,compat_module.useRef)(e),u=(0,compat_module.useRef)(!1),d=(0,compat_module.useRef)(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,(0,use_event/* useEvent */.z)(n=>(e||s(n),r==null?void 0:r(n)))]}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var use_tracked_pointer = __webpack_require__(476);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-text-value.js + 1 modules
var use_text_value = __webpack_require__(5257);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/listbox/listbox.js
var Be=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Be||{}),He=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(He||{}),Ge=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Ge||{}),Ne=(i=>(i[i.OpenListbox=0]="OpenListbox",i[i.CloseListbox=1]="CloseListbox",i[i.GoToOption=2]="GoToOption",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterOption=5]="RegisterOption",i[i.UnregisterOption=6]="UnregisterOption",i[i.RegisterLabel=7]="RegisterLabel",i))(Ne||{});function z(e,a=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=(0,focus_management/* sortByDomNode */.z2)(a(e.options.slice()),t=>t.dataRef.current.domRef.current),l=n?r.indexOf(n):null;return l===-1&&(l=null),{options:r,activeOptionIndex:l}}let je={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let a=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(l=>n(l.dataRef.current.value));return r!==-1&&(a=r),{...e,listboxState:0,activeOptionIndex:a}},[2](e,a){var l;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=z(e),r=(0,calculate_active_index/* calculateActiveIndex */.d)(a,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:r,activationTrigger:(l=a.trigger)!=null?l:1}},[3]:(e,a)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,l=e.searchQuery+a.value.toLowerCase(),p=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(i=>{var b;return!i.dataRef.current.disabled&&((b=i.dataRef.current.textValue)==null?void 0:b.startsWith(l))}),u=p?e.options.indexOf(p):-1;return u===-1||u===e.activeOptionIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeOptionIndex:u,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,a)=>{let n={id:a.id,dataRef:a.dataRef},r=z(e,l=>[...l,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(a.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},[6]:(e,a)=>{let n=z(e,r=>{let l=r.findIndex(t=>t.id===a.id);return l!==-1&&r.splice(l,1),r});return{...e,...n,activationTrigger:1}},[7]:(e,a)=>({...e,labelId:a.id})},J=(0,compat_module.createContext)(null);J.displayName="ListboxActionsContext";function _(e){let a=(0,compat_module.useContext)(J);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return a}let q=(0,compat_module.createContext)(null);q.displayName="ListboxDataContext";function U(e){let a=(0,compat_module.useContext)(q);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return a}function Ve(e,a){return (0,match/* match */.E)(a.type,je,e,a)}let Ke=compat_module.Fragment;function Qe(e,a){let{value:n,defaultValue:r,form:l,name:t,onChange:p,by:u=(s,c)=>s===c,disabled:i=!1,horizontal:b=!1,multiple:R=!1,...m}=e;const P=b?"horizontal":"vertical";let S=(0,use_sync_refs/* useSyncRefs */.T)(a),[L=R?[]:void 0,y]=use_controllable_T(n,p,r),[T,o]=(0,compat_module.useReducer)(Ve,{dataRef:(0,compat_module.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),x=(0,compat_module.useRef)({static:!1,hold:!1}),E=(0,compat_module.useRef)(null),B=(0,compat_module.useRef)(null),W=(0,compat_module.useRef)(null),C=(0,use_event/* useEvent */.z)(typeof u=="string"?(s,c)=>{let O=u;return(s==null?void 0:s[O])===(c==null?void 0:c[O])}:u),A=(0,compat_module.useCallback)(s=>(0,match/* match */.E)(d.mode,{[1]:()=>L.some(c=>C(c,s)),[0]:()=>C(L,s)}),[L]),d=(0,compat_module.useMemo)(()=>({...T,value:L,disabled:i,mode:R?1:0,orientation:P,compare:C,isSelected:A,optionsPropsRef:x,labelRef:E,buttonRef:B,optionsRef:W}),[L,i,R,T]);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{T.dataRef.current=d},[d]),(0,use_outside_click/* useOutsideClick */.O)([d.buttonRef,d.optionsRef],(s,c)=>{var O;o({type:1}),(0,focus_management/* isFocusableElement */.sP)(c,focus_management/* FocusableMode */.tJ.Loose)||(s.preventDefault(),(O=d.buttonRef.current)==null||O.focus())},d.listboxState===0);let H=(0,compat_module.useMemo)(()=>({open:d.listboxState===0,disabled:i,value:L}),[d,i,L]),ie=(0,use_event/* useEvent */.z)(s=>{let c=d.options.find(O=>O.id===s);c&&X(c.dataRef.current.value)}),re=(0,use_event/* useEvent */.z)(()=>{if(d.activeOptionIndex!==null){let{dataRef:s,id:c}=d.options[d.activeOptionIndex];X(s.current.value),o({type:2,focus:calculate_active_index/* Focus */.T.Specific,id:c})}}),ae=(0,use_event/* useEvent */.z)(()=>o({type:0})),le=(0,use_event/* useEvent */.z)(()=>o({type:1})),se=(0,use_event/* useEvent */.z)((s,c,O)=>s===calculate_active_index/* Focus */.T.Specific?o({type:2,focus:calculate_active_index/* Focus */.T.Specific,id:c,trigger:O}):o({type:2,focus:s,trigger:O})),pe=(0,use_event/* useEvent */.z)((s,c)=>(o({type:5,id:s,dataRef:c}),()=>o({type:6,id:s}))),ue=(0,use_event/* useEvent */.z)(s=>(o({type:7,id:s}),()=>o({type:7,id:null}))),X=(0,use_event/* useEvent */.z)(s=>(0,match/* match */.E)(d.mode,{[0](){return y==null?void 0:y(s)},[1](){let c=d.value.slice(),O=c.findIndex(F=>C(F,s));return O===-1?c.push(s):c.splice(O,1),y==null?void 0:y(c)}})),de=(0,use_event/* useEvent */.z)(s=>o({type:3,value:s})),ce=(0,use_event/* useEvent */.z)(()=>o({type:4})),fe=(0,compat_module.useMemo)(()=>({onChange:X,registerOption:pe,registerLabel:ue,goToOption:se,closeListbox:le,openListbox:ae,selectActiveOption:re,selectOption:ie,search:de,clearSearch:ce}),[]),Te={ref:S},G=(0,compat_module.useRef)(null),be=(0,use_disposables/* useDisposables */.G)();return (0,compat_module.useEffect)(()=>{G.current&&r!==void 0&&be.addEventListener(G.current,"reset",()=>{y==null||y(r)})},[G,y]),compat_module["default"].createElement(J.Provider,{value:fe},compat_module["default"].createElement(q.Provider,{value:d},compat_module["default"].createElement(open_closed/* OpenClosedProvider */.up,{value:(0,match/* match */.E)(d.listboxState,{[0]:open_closed/* State */.ZM.Open,[1]:open_closed/* State */.ZM.Closed})},t!=null&&L!=null&&form_e({[t]:L}).map(([s,c],O)=>compat_module["default"].createElement(internal_hidden/* Hidden */._,{features:internal_hidden/* Features */.A.Hidden,ref:O===0?F=>{var Y;G.current=(Y=F==null?void 0:F.closest("form"))!=null?Y:null}:void 0,...(0,render/* compact */.oA)({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:s,value:c})})),(0,render/* render */.sY)({ourProps:Te,theirProps:m,slot:H,defaultTag:Ke,name:"Listbox"}))))}let We="button";function Xe(e,a){var y;let n=(0,use_id/* useId */.M)(),{id:r=`headlessui-listbox-button-${n}`,...l}=e,t=U("Listbox.Button"),p=_("Listbox.Button"),u=(0,use_sync_refs/* useSyncRefs */.T)(t.buttonRef,a),i=(0,use_disposables/* useDisposables */.G)(),b=(0,use_event/* useEvent */.z)(T=>{switch(T.key){case keyboard/* Keys */.R.Space:case keyboard/* Keys */.R.Enter:case keyboard/* Keys */.R.ArrowDown:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(calculate_active_index/* Focus */.T.First)});break;case keyboard/* Keys */.R.ArrowUp:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(calculate_active_index/* Focus */.T.Last)});break}}),R=(0,use_event/* useEvent */.z)(T=>{switch(T.key){case keyboard/* Keys */.R.Space:T.preventDefault();break}}),m=(0,use_event/* useEvent */.z)(T=>{if((0,bugs/* isDisabledReactIssue7711 */.P)(T.currentTarget))return T.preventDefault();t.listboxState===0?(p.closeListbox(),i.nextFrame(()=>{var o;return(o=t.buttonRef.current)==null?void 0:o.focus({preventScroll:!0})})):(T.preventDefault(),p.openListbox())}),P=use_computed_i(()=>{if(t.labelId)return[t.labelId,r].join(" ")},[t.labelId,r]),S=(0,compat_module.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),L={ref:u,id:r,type:(0,use_resolve_button_type/* useResolveButtonType */.f)(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(y=t.optionsRef.current)==null?void 0:y.id,"aria-expanded":t.listboxState===0,"aria-labelledby":P,disabled:t.disabled,onKeyDown:b,onKeyUp:R,onClick:m};return (0,render/* render */.sY)({ourProps:L,theirProps:l,slot:S,defaultTag:We,name:"Listbox.Button"})}let $e="label";function ze(e,a){let n=(0,use_id/* useId */.M)(),{id:r=`headlessui-listbox-label-${n}`,...l}=e,t=U("Listbox.Label"),p=_("Listbox.Label"),u=(0,use_sync_refs/* useSyncRefs */.T)(t.labelRef,a);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>p.registerLabel(r),[r]);let i=(0,use_event/* useEvent */.z)(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}),b=(0,compat_module.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]);return (0,render/* render */.sY)({ourProps:{ref:u,id:r,onClick:i},theirProps:l,slot:b,defaultTag:$e,name:"Listbox.Label"})}let Je="ul",qe=render/* Features */.AN.RenderStrategy|render/* Features */.AN.Static;function Ye(e,a){var T;let n=(0,use_id/* useId */.M)(),{id:r=`headlessui-listbox-options-${n}`,...l}=e,t=U("Listbox.Options"),p=_("Listbox.Options"),u=(0,use_sync_refs/* useSyncRefs */.T)(t.optionsRef,a),i=(0,use_disposables/* useDisposables */.G)(),b=(0,use_disposables/* useDisposables */.G)(),R=(0,open_closed/* useOpenClosed */.oJ)(),m=(()=>R!==null?(R&open_closed/* State */.ZM.Open)===open_closed/* State */.ZM.Open:t.listboxState===0)();(0,compat_module.useEffect)(()=>{var x;let o=t.optionsRef.current;o&&t.listboxState===0&&o!==((x=(0,owner/* getOwnerDocument */.r)(o))==null?void 0:x.activeElement)&&o.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let P=(0,use_event/* useEvent */.z)(o=>{switch(b.dispose(),o.key){case keyboard/* Keys */.R.Space:if(t.searchQuery!=="")return o.preventDefault(),o.stopPropagation(),p.search(o.key);case keyboard/* Keys */.R.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:x}=t.options[t.activeOptionIndex];p.onChange(x.current.value)}t.mode===0&&(p.closeListbox(),(0,disposables/* disposables */.k)().nextFrame(()=>{var x;return(x=t.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})}));break;case (0,match/* match */.E)(t.orientation,{vertical:keyboard/* Keys */.R.ArrowDown,horizontal:keyboard/* Keys */.R.ArrowRight}):return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index/* Focus */.T.Next);case (0,match/* match */.E)(t.orientation,{vertical:keyboard/* Keys */.R.ArrowUp,horizontal:keyboard/* Keys */.R.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index/* Focus */.T.Previous);case keyboard/* Keys */.R.Home:case keyboard/* Keys */.R.PageUp:return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index/* Focus */.T.First);case keyboard/* Keys */.R.End:case keyboard/* Keys */.R.PageDown:return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index/* Focus */.T.Last);case keyboard/* Keys */.R.Escape:return o.preventDefault(),o.stopPropagation(),p.closeListbox(),i.nextFrame(()=>{var x;return(x=t.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})});case keyboard/* Keys */.R.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(p.search(o.key),b.setTimeout(()=>p.clearSearch(),350));break}}),S=use_computed_i(()=>{var o,x,E;return(E=(o=t.labelRef.current)==null?void 0:o.id)!=null?E:(x=t.buttonRef.current)==null?void 0:x.id},[t.labelRef.current,t.buttonRef.current]),L=(0,compat_module.useMemo)(()=>({open:t.listboxState===0}),[t]),y={"aria-activedescendant":t.activeOptionIndex===null||(T=t.options[t.activeOptionIndex])==null?void 0:T.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:r,onKeyDown:P,role:"listbox",tabIndex:0,ref:u};return (0,render/* render */.sY)({ourProps:y,theirProps:l,slot:L,defaultTag:Je,features:qe,visible:m,name:"Listbox.Options"})}let Ze="li";function et(e,a){let n=(0,use_id/* useId */.M)(),{id:r=`headlessui-listbox-option-${n}`,disabled:l=!1,value:t,...p}=e,u=U("Listbox.Option"),i=_("Listbox.Option"),b=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===r:!1,R=u.isSelected(t),m=(0,compat_module.useRef)(null),P=(0,use_text_value/* useTextValue */.x)(m),S=(0,use_latest_value/* useLatestValue */.E)({disabled:l,value:t,domRef:m,get textValue(){return P()}}),L=(0,use_sync_refs/* useSyncRefs */.T)(a,m);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{if(u.listboxState!==0||!b||u.activationTrigger===0)return;let A=(0,disposables/* disposables */.k)();return A.requestAnimationFrame(()=>{var d,H;(H=(d=m.current)==null?void 0:d.scrollIntoView)==null||H.call(d,{block:"nearest"})}),A.dispose},[m,b,u.listboxState,u.activationTrigger,u.activeOptionIndex]),(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>i.registerOption(r,S),[S,r]);let y=(0,use_event/* useEvent */.z)(A=>{if(l)return A.preventDefault();i.onChange(t),u.mode===0&&(i.closeListbox(),(0,disposables/* disposables */.k)().nextFrame(()=>{var d;return(d=u.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})}))}),T=(0,use_event/* useEvent */.z)(()=>{if(l)return i.goToOption(calculate_active_index/* Focus */.T.Nothing);i.goToOption(calculate_active_index/* Focus */.T.Specific,r)}),o=(0,use_tracked_pointer/* useTrackedPointer */.g)(),x=(0,use_event/* useEvent */.z)(A=>o.update(A)),E=(0,use_event/* useEvent */.z)(A=>{o.wasMoved(A)&&(l||b||i.goToOption(calculate_active_index/* Focus */.T.Specific,r,0))}),B=(0,use_event/* useEvent */.z)(A=>{o.wasMoved(A)&&(l||b&&i.goToOption(calculate_active_index/* Focus */.T.Nothing))}),W=(0,compat_module.useMemo)(()=>({active:b,selected:R,disabled:l}),[b,R,l]);return (0,render/* render */.sY)({ourProps:{id:r,ref:L,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":R,disabled:void 0,onClick:y,onFocus:T,onPointerEnter:x,onMouseEnter:x,onPointerMove:E,onMouseMove:E,onPointerLeave:B,onMouseLeave:B},theirProps:p,slot:W,defaultTag:Ze,name:"Listbox.Option"})}let tt=(0,render/* forwardRefWithAs */.yV)(Qe),ot=(0,render/* forwardRefWithAs */.yV)(Xe),nt=(0,render/* forwardRefWithAs */.yV)(ze),it=(0,render/* forwardRefWithAs */.yV)(Ye),rt=(0,render/* forwardRefWithAs */.yV)(et),Nt=Object.assign(tt,{Button:ot,Label:nt,Options:it,Option:rt});

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(5285);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/ChevronUpDownIcon.js

function ChevronUpDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/compat_module.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/compat_module.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/compat_module.createElement("path", {
    fillRule: "evenodd",
    d: "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = compat_module.forwardRef(ChevronUpDownIcon);
/* harmony default export */ var esm_ChevronUpDownIcon = (ForwardRef);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js
var CheckIcon = __webpack_require__(2536);
// EXTERNAL MODULE: ./src/components/NavBar.tsx + 5 modules
var NavBar = __webpack_require__(5557);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowDownCircleIcon.js
var ArrowDownCircleIcon = __webpack_require__(6454);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/solid/esm/DocumentIcon.js

function DocumentIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/compat_module.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/compat_module.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/compat_module.createElement("path", {
    d: "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z"
  }), /*#__PURE__*/compat_module.createElement("path", {
    d: "M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"
  }));
}
const DocumentIcon_ForwardRef = compat_module.forwardRef(DocumentIcon);
/* harmony default export */ var esm_DocumentIcon = (DocumentIcon_ForwardRef);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/XCircleIcon.js
var XCircleIcon = __webpack_require__(256);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/20/solid/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(5652);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(6310);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(1054);
;// CONCATENATED MODULE: ./src/api/account/tickets/createTicket.ts


var createTicket = function createTicket(subject, message, account, license, attachments, logs_url) {
  var formData = new FormData();
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
    http/* httpMultipart */.Pg.post("".concat(config/* config */.v.privateapilink, "/tickets"), formData).then(function (data) {
      return resolve(data);
    }).catch(reject);
  });
};
/* harmony default export */ var tickets_createTicket = (createTicket);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(5678);
;// CONCATENATED MODULE: ./src/components/Account/Ticket/CreateTicketForm.tsx
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function formatFileSize(sizeInBytes) {
  var sizes = ['B', 'KB', 'MB'];
  var i = 0;
  while (sizeInBytes > 1024 && i < sizes.length - 1) {
    sizeInBytes /= 1024;
    i++;
  }
  return "".concat(Math.round(sizeInBytes * 100) / 100, " ").concat(sizes[i]);
}
function CreateTicketForm(_ref) {
  var setOpen = _ref.setOpen,
    mutate = _ref.mutate,
    account = _ref.account;
  var _useState = (0,compat_module.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,compat_module.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = (0,compat_module.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    checked = _useState6[0],
    setChecked = _useState6[1];
  var _useState7 = (0,compat_module.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    licenseChecked = _useState8[0],
    setLicenseChecked = _useState8[1];
  var form = (0,index_esm/* object */.Ry)({
    subject: (0,index_esm/* string */.Z_)().required('The subject can\'t be empty.').min(16, 'The subject should have a minimum length of 16 characters').max(64, 'The subject should have a maximum length of 64 characters.'),
    message: (0,index_esm/* string */.Z_)().required('The message can\'t be empty').min(64, 'The message should have a minimum length of 64 characters'),
    license: (0,index_esm/* string */.Z_)().nullable(),
    attachments: (0,index_esm/* array */.IX)().of((0,index_esm/* mixed */.nK)()).nullable(),
    logs_url: (0,index_esm/* string */.Z_)().nullable('').url('Logs need to be a url!')
  });
  var formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      subject: '',
      message: '',
      attachments: [],
      license: '',
      logs_url: ''
    },
    validationSchema: form,
    onSubmit: function onSubmit(values) {
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
      tickets_createTicket(values.subject, values.message, account, values.license, values.attachments, values.logs_url).then(function (data) {
        if (data.data.status === 'error') {
          setError("Error: ".concat(data.data.message));
          setLoading(false);
          return null;
        }
        mutate();
        var inputs = document.querySelectorAll('input:not(#search)');
        var textareas = document.querySelectorAll('textarea');
        inputs.forEach(function (input) {
          input.value = '';
        });
        textareas.forEach(function (textarea) {
          textarea.value = '';
        });
        setLoading(false);
        react_toastify_esm/* toast */.Am.success('Ticket created successfully.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        });
        setOpen(false);
      }).catch(function (e) {
        setError("Error: ".concat(e.response.data.message));
        setLoading(false);
      });
    }
  });
  return /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "bg-white shadow sm:rounded-lg"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "px-4 py-5 sm:p-6"
  }, /*#__PURE__*/compat_module["default"].createElement("h3", {
    className: "text-base font-semibold leading-6 text-gray-900"
  }, "Create a ticket"), /*#__PURE__*/compat_module["default"].createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "mt-5 sm:items-center"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "w-full sm:max-w-xs my-2"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "subject",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Subject"), /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "subject",
    onChange: formik.handleChange,
    disabled: loading,
    id: "subject",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
    placeholder: "A problem with the product"
  })), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "w-full my-2"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "comment",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Your message"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/compat_module["default"].createElement("textarea", {
    rows: 4,
    name: "message",
    onChange: formik.handleChange,
    disabled: loading,
    id: "message",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
    defaultValue: ''
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'flex justify-between my-2 gap-x-2'
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "w-full sm:max-w-xs "
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "subject",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "License/Order ", /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
  }, "Optional")), /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "license",
    onChange: formik.handleChange,
    disabled: loading,
    id: "license",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  })), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "w-full sm:max-w-xs"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "subject",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Logs Url ", /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
  }, "Optional")), /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "logs_url",
    onChange: formik.handleChange,
    disabled: loading,
    id: "logs_url",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "col-span-full my-2"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "cover-photo",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Add documents", ' ', /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
  }, "Optional")), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 space-y-4",
    id: "file-drop-area",
    onDragOver: function onDragOver(e) {
      e.preventDefault();
    },
    onDragLeave: function onDragLeave(e) {
      e.preventDefault();
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      var newFiles = Array.from(e.dataTransfer.files ? e.dataTransfer.files : []);
      var updatedAttachments = [].concat(_toConsumableArray(formik.values.attachments), newFiles);
      formik.setFieldValue('attachments', updatedAttachments);
    }
  }, /*#__PURE__*/compat_module["default"].createElement(esm_DocumentIcon, {
    className: "mx-auto h-12 w-12 text-gray-300",
    "aria-hidden": "true"
  }), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "file-upload",
    className: "relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
  }, /*#__PURE__*/compat_module["default"].createElement("span", null, "Upload a file"), /*#__PURE__*/compat_module["default"].createElement("input", {
    id: "file-upload",
    name: "file-upload",
    type: "file",
    className: "sr-only",
    multiple: true,
    onChange: function onChange(e) {
      var newFiles = Array.from(e.target.files ? e.target.files : []);
      var updatedAttachments = [].concat(_toConsumableArray(formik.values.attachments), newFiles);
      formik.setFieldValue('attachments', updatedAttachments);
    }
  })), /*#__PURE__*/compat_module["default"].createElement("p", {
    className: "pl-1 my-auto"
  }, "or drag and drop"))), formik.values.attachments.length > 0 && /*#__PURE__*/compat_module["default"].createElement("div", null, /*#__PURE__*/compat_module["default"].createElement("p", {
    className: " my-2 block text-sm font-medium leading-6 text-gray-900"
  }, "Selected Files:"), /*#__PURE__*/compat_module["default"].createElement("ul", {
    role: "file-list",
    className: "grid md:grid-cols-3 justify-between gap-x-2 gap-y-2"
  }, formik.values.attachments.map(function (file, index) {
    return /*#__PURE__*/compat_module["default"].createElement("li", {
      key: index,
      className: "col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    }, /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "flex w-full items-center justify-between space-x-6 p-6"
    }, /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "flex-1 truncate"
    }, /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/compat_module["default"].createElement("h3", {
      className: "truncate text-sm font-medium text-gray-900"
    }, file.name.slice(0, 22), file.name.length > 22 && '...'), /*#__PURE__*/compat_module["default"].createElement("span", {
      className: "inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium   ring-1 ring-inset ".concat(file.size > 8388608 ? 'text-red-700  bg-red-50 ring-red-600/20' : file.size > 7340032 ? 'text-orange-700  bg-orange-50 ring-orange-600/20' : 'text-green-700  bg-green-50 ring-green-600/20')
    }, formatFileSize(file.size)))), /*#__PURE__*/compat_module["default"].createElement(XMarkIcon/* default */.Z, {
      className: 'text-red-500 rounded-full border-2 border-red-500 w-6 h-6',
      onClick: function onClick() {
        var updatedAttachments = _toConsumableArray(formik.values.attachments);
        updatedAttachments.splice(index, 1);
        formik.setFieldValue('attachments', updatedAttachments);
      }
    })), /*#__PURE__*/compat_module["default"].createElement("div", null));
  })))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'gap-y-2 my-2'
  }, !formik.values.logs_url && /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "w-full "
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "relative flex items-start"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex h-6 items-center"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    id: "logs",
    "aria-describedby": "comments-description",
    name: "No logsUrl",
    type: "checkbox",
    checked: checked,
    onClick: function onClick() {
      return setChecked(!checked);
    },
    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  })), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "ml-3 text-sm leading-6 lg:flex gap-x-2",
    onClick: function onClick() {
      return setChecked(!checked);
    }
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "comments",
    className: "font-medium text-gray-900"
  }, "No logs"), /*#__PURE__*/compat_module["default"].createElement("p", {
    id: "comments-description",
    className: "text-gray-500 my-auto "
  }, "I acknowledge that not providing logs may limit the assistance I receive in most cases.")))), !formik.values.license && /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "w-full "
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "relative flex items-start"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex h-6 items-center"
  }, /*#__PURE__*/compat_module["default"].createElement("input", {
    id: "nolicense",
    "aria-describedby": "comments-description",
    name: "No license/order",
    type: "checkbox",
    checked: licenseChecked,
    onClick: function onClick() {
      return setLicenseChecked(!licenseChecked);
    },
    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  })), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "ml-3 text-sm leading-6 lg:flex gap-x-2",
    onClick: function onClick() {
      return setLicenseChecked(!licenseChecked);
    }
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "comments",
    className: "font-medium text-gray-900"
  }, "No license/order"), ' ', /*#__PURE__*/compat_module["default"].createElement("p", {
    id: "comments-description",
    className: "text-gray-500 my-auto"
  }, "I acknowledge that not providing order/license may limit the assistance I receive in most cases."))))), Object.keys(formik.errors).length > 0 && /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "rounded-md bg-red-50 p-4 my-2"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/compat_module["default"].createElement(XCircleIcon/* default */.Z, {
    className: "h-5 w-5 text-red-400",
    "aria-hidden": "true"
  })), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "ml-3 "
  }, /*#__PURE__*/compat_module["default"].createElement("h3", {
    className: "text-sm font-medium text-red-800"
  }, "There were ", Object.keys(formik.errors).length, " errors with your submission"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-2 text-sm text-red-700"
  }, /*#__PURE__*/compat_module["default"].createElement("ul", {
    role: "list",
    className: "list-disc space-y-1 pl-5"
  }, Object.values(formik.errors).map(function (error, index) {
    return /*#__PURE__*/compat_module["default"].createElement("li", {
      key: index
    }, error);
  })))))), error && /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "rounded-md bg-red-50 p-4 my-2"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/compat_module["default"].createElement(XCircleIcon/* default */.Z, {
    className: "h-5 w-5 text-red-400",
    "aria-hidden": "true"
  })), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "ml-3 "
  }, /*#__PURE__*/compat_module["default"].createElement("h3", {
    className: "text-sm font-medium text-red-800"
  }, " ", error)))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "submit",
    disabled: loading,
    className: "rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Save")))));
}
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(9655);
;// CONCATENATED MODULE: ./src/components/Account/Ticket/TicketRow.tsx



function TicketRow(_ref) {
  var ticket = _ref.ticket;
  var navigate = (0,dist/* useNavigate */.s0)();
  return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement("tr", {
    key: ticket.id,
    className: 'hidden lg:table-row'
  }, /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200  px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "font-medium text-gray-900"
  }, ticket.id)), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, ticket.name), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm hidden lg:table-cell ".concat(ticket.priority === 'high' ? 'text-red-500' : ticket.priority === 'low' ? 'text-green-500' : 'text-gray-500')
  }, ticket.priority[0].toUpperCase(), ticket.priority.slice(1, ticket.priority.length)), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm table-cell ".concat(ticket.status === 'closed' ? 'text-red-500' : ticket.status === 'support_answer' ? 'text-green-500' : 'text-blue-500')
  }, ticket.status === 'closed' ? 'Closed' : ticket.status === 'support_answer' ? 'Answered by Support' : 'Answered by Client'), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, moment_default()(ticket.updated_at).fromNow()), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, /*#__PURE__*/compat_module["default"].createElement(react_router_dom_dist/* NavLink */.OL, {
    className: "inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
    to: "/account/ticket/".concat(ticket.id)
  }, "View"))), /*#__PURE__*/compat_module["default"].createElement("tr", {
    key: ticket.id,
    className: 'lg:hidden cursor-pointer',
    onClick: function onClick() {
      return navigate("/account/ticket/".concat(ticket.id));
    }
  }, /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
  }, ticket.name), /*#__PURE__*/compat_module["default"].createElement("td", {
    className: "border-t border-gray-200 px-3 py-3.5 text-sm table-cell ".concat(ticket.status === 'closed' ? 'text-red-500' : ticket.status === 'support_answer' ? 'text-green-500' : 'text-blue-500')
  }, ticket.status === 'closed' ? 'Closed' : ticket.status === 'support_answer' ? 'Answered by Support' : 'Answered by Client')));
}
;// CONCATENATED MODULE: ./src/components/Account/Ticket/TicketContainer.tsx
function TicketContainer_slicedToArray(arr, i) { return TicketContainer_arrayWithHoles(arr) || TicketContainer_iterableToArrayLimit(arr, i) || TicketContainer_unsupportedIterableToArray(arr, i) || TicketContainer_nonIterableRest(); }
function TicketContainer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TicketContainer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TicketContainer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TicketContainer_arrayLikeToArray(o, minLen); }
function TicketContainer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TicketContainer_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TicketContainer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var sortType = [{
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
  var _useState = (0,compat_module.useState)('status'),
    _useState2 = TicketContainer_slicedToArray(_useState, 2),
    sort = _useState2[0],
    setSort = _useState2[1];
  var _useState3 = (0,compat_module.useState)(1),
    _useState4 = TicketContainer_slicedToArray(_useState3, 2),
    page = _useState4[0],
    setPage = _useState4[1];
  var _useState5 = (0,compat_module.useState)(''),
    _useState6 = TicketContainer_slicedToArray(_useState5, 2),
    search = _useState6[0],
    setSearch = _useState6[1];
  var _useState7 = (0,compat_module.useState)(false),
    _useState8 = TicketContainer_slicedToArray(_useState7, 2),
    open = _useState8[0],
    setOpen = _useState8[1];
  var _useState9 = (0,compat_module.useState)(false),
    _useState10 = TicketContainer_slicedToArray(_useState9, 2),
    isHovered = _useState10[0],
    setIsHovered = _useState10[1];
  var navigate = (0,dist/* useNavigate */.s0)();
  var _useContext = (0,compat_module.useContext)(AccountRouter/* NavContext */.Ly),
    setActive = _useContext.setActive;
  (0,compat_module.useEffect)(function () {
    setActive(window.location.pathname);
  }, []);
  var _useSWR = (0,core_dist/* default */.ZP)("".concat(config/* config */.v.privateapilink, "/tickets?sort=").concat(sort, "&page=").concat(page, "&search=").concat(search), http/* fetcher */._i),
    data = _useSWR.data,
    mutate = _useSWR.mutate,
    error3 = _useSWR.error,
    isLoading = _useSWR.isLoading;
  var _useSWR2 = (0,core_dist/* default */.ZP)("".concat(config/* config */.v.privateapilink, "/auth/isLogged?infos=true"), http/* fetcher */._i),
    data2 = _useSWR2.data,
    error2 = _useSWR2.error,
    isLoading2 = _useSWR2.isLoading;
  if (!data || error3 || isLoading || !data2 || error2 || isLoading2) {
    if (data2) {
      return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement("section", null, /*#__PURE__*/compat_module["default"].createElement("div", {
        className: "px-4 sm:px-6 lg:px-8"
      }, /*#__PURE__*/compat_module["default"].createElement("div", {
        className: "sm:flex sm:items-center"
      }, /*#__PURE__*/compat_module["default"].createElement("div", {
        className: "sm:flex-auto"
      }, /*#__PURE__*/compat_module["default"].createElement("h1", {
        className: "text-base font-semibold leading-6 text-gray-900"
      }, "Tickets"), /*#__PURE__*/compat_module["default"].createElement("p", {
        className: "mt-2 text-sm text-black"
      }, "You are on the ", /*#__PURE__*/compat_module["default"].createElement("strong", {
        className: "font-semibold text-black"
      }, "tickets"), " page. You can here see all your support tickets.")), /*#__PURE__*/compat_module["default"].createElement("div", {
        className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none"
      }, /*#__PURE__*/compat_module["default"].createElement("button", {
        type: "button",
        onClick: function onClick() {
          return setOpen(!open);
        },
        className: "flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative"
      }, "New ticket", /*#__PURE__*/compat_module["default"].createElement(ArrowDownCircleIcon/* default */.Z, {
        className: "mx-2 h-5 w-5 my-auto transform transition-transform ".concat(open ? 'rotate-180' : 'rotate-0')
      })))), open && /*#__PURE__*/compat_module["default"].createElement(CreateTicketForm, {
        mutate: mutate,
        account: account,
        setOpen: setOpen
      }), /*#__PURE__*/compat_module["default"].createElement("div", {
        className: "mt-10 w-full mb-2 grid grid-cols-3 lg:grid-cols-4 gap-x-2"
      }, /*#__PURE__*/compat_module["default"].createElement("div", {
        className: ' lg:col-span-3'
      }, /*#__PURE__*/compat_module["default"].createElement("label", {
        htmlFor: "search",
        className: " block text-sm font-medium leading-6 text-gray-900"
      }, "Search"), /*#__PURE__*/compat_module["default"].createElement("input", {
        type: "text",
        name: "search",
        id: "search",
        onChange: function onChange(e) {
          return searchValue(e.target.value);
        },
        className: "block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
        placeholder: "Search here"
      })), /*#__PURE__*/compat_module["default"].createElement(Nt, {
        value: sort,
        onChange: setSort
      }, function (_ref) {
        var open = _ref.open;
        return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement("div", {
          className: "relative mt-auto col-span-2 lg:col-span-1"
        }, /*#__PURE__*/compat_module["default"].createElement(Nt.Button, {
          className: "relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        }, /*#__PURE__*/compat_module["default"].createElement("span", {
          className: "inline-flex w-full truncate"
        }, /*#__PURE__*/compat_module["default"].createElement("span", {
          className: "truncate"
        }, sortType.find(function (item) {
          return item.value === sort;
        }).name), /*#__PURE__*/compat_module["default"].createElement("span", {
          className: "ml-2 truncate text-gray-500"
        }, sortType.find(function (item) {
          return item.value === sort;
        }).subname)), /*#__PURE__*/compat_module["default"].createElement("span", {
          className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        }, /*#__PURE__*/compat_module["default"].createElement(esm_ChevronUpDownIcon, {
          className: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        }))), /*#__PURE__*/compat_module["default"].createElement(transition/* Transition */.u, {
          show: open,
          as: compat_module.Fragment,
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0"
        }, /*#__PURE__*/compat_module["default"].createElement(Nt.Options, {
          className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        }, sortType.map(function (sortTyp) {
          return /*#__PURE__*/compat_module["default"].createElement(Nt.Option, {
            key: sortTyp.name,
            className: function className(_ref2) {
              var active = _ref2.active;
              return (0,NavBar/* classNames */.A)(active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9');
            },
            value: sortTyp.value
          }, function (_ref3) {
            var selected = _ref3.selected,
              active = _ref3.active;
            return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement("div", {
              className: "flex"
            }, /*#__PURE__*/compat_module["default"].createElement("span", {
              className: (0,NavBar/* classNames */.A)(selected ? 'font-semibold' : 'font-normal', 'truncate')
            }, sortTyp.name), /*#__PURE__*/compat_module["default"].createElement("span", {
              className: (0,NavBar/* classNames */.A)(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')
            }, sortTyp.subname)), selected ? /*#__PURE__*/compat_module["default"].createElement("span", {
              className: (0,NavBar/* classNames */.A)(active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4')
            }, /*#__PURE__*/compat_module["default"].createElement(CheckIcon/* default */.Z, {
              className: "h-5 w-5",
              "aria-hidden": "true"
            })) : null);
          });
        })))));
      })))), /*#__PURE__*/compat_module["default"].createElement("section", {
        className: "min-h-screen"
      }, /*#__PURE__*/compat_module["default"].createElement(Loading["default"], null)));
    }
    return /*#__PURE__*/compat_module["default"].createElement(Loading["default"], null);
  }
  var account = data2.data;
  document.title = 'Bagou450 - My Tickets';
  var searchValue = (0,debounce.debounce)(function (value) {
    setSearch(value);
    setPage(1);
  }, 500);
  return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement("section", null, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:flex sm:items-center"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "sm:flex-auto"
  }, /*#__PURE__*/compat_module["default"].createElement("h1", {
    className: "text-base font-semibold leading-6 text-gray-900"
  }, "Tickets"), /*#__PURE__*/compat_module["default"].createElement("p", {
    className: "mt-2 text-sm text-black"
  }, "You are on the ", /*#__PURE__*/compat_module["default"].createElement("strong", {
    className: "font-semibold text-black"
  }, "tickets"), " page. You can here see all your support tickets.")), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none"
  }, /*#__PURE__*/compat_module["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: "flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative"
  }, "New ticket", /*#__PURE__*/compat_module["default"].createElement(ArrowDownCircleIcon/* default */.Z, {
    className: "mx-2 h-5 w-5 my-auto transform transition-transform ".concat(open ? 'rotate-180' : 'rotate-0')
  })))), open && /*#__PURE__*/compat_module["default"].createElement(CreateTicketForm, {
    mutate: mutate,
    account: account,
    setOpen: setOpen
  }), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "mt-10 w-full mb-2 grid grid-cols-3 lg:grid-cols-4 gap-x-2"
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: ' lg:col-span-3'
  }, /*#__PURE__*/compat_module["default"].createElement("label", {
    htmlFor: "search",
    className: " block text-sm font-medium leading-6 text-gray-900"
  }, "Search"), /*#__PURE__*/compat_module["default"].createElement("input", {
    type: "text",
    name: "search",
    id: "search",
    onChange: function onChange(e) {
      return searchValue(e.target.value);
    },
    className: "block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
    placeholder: "Search here"
  })), /*#__PURE__*/compat_module["default"].createElement(Nt, {
    value: sort,
    onChange: setSort
  }, function (_ref4) {
    var open = _ref4.open;
    return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement("div", {
      className: "relative mt-auto col-span-2 lg:col-span-1"
    }, /*#__PURE__*/compat_module["default"].createElement(Nt.Button, {
      className: "relative w-full mt-1 cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
    }, /*#__PURE__*/compat_module["default"].createElement("span", {
      className: "inline-flex w-full truncate"
    }, /*#__PURE__*/compat_module["default"].createElement("span", {
      className: "truncate"
    }, sortType.find(function (item) {
      return item.value === sort;
    }).name), /*#__PURE__*/compat_module["default"].createElement("span", {
      className: "ml-2 truncate text-gray-500"
    }, sortType.find(function (item) {
      return item.value === sort;
    }).subname)), /*#__PURE__*/compat_module["default"].createElement("span", {
      className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
    }, /*#__PURE__*/compat_module["default"].createElement(esm_ChevronUpDownIcon, {
      className: "h-5 w-5 text-gray-400",
      "aria-hidden": "true"
    }))), /*#__PURE__*/compat_module["default"].createElement(transition/* Transition */.u, {
      show: open,
      as: compat_module.Fragment,
      leave: "transition ease-in duration-100",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }, /*#__PURE__*/compat_module["default"].createElement(Nt.Options, {
      className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
    }, sortType.map(function (sortTyp) {
      return /*#__PURE__*/compat_module["default"].createElement(Nt.Option, {
        key: sortTyp.name,
        className: function className(_ref5) {
          var active = _ref5.active;
          return (0,NavBar/* classNames */.A)(active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9');
        },
        value: sortTyp.value
      }, function (_ref6) {
        var selected = _ref6.selected,
          active = _ref6.active;
        return /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement("div", {
          className: "flex"
        }, /*#__PURE__*/compat_module["default"].createElement("span", {
          className: (0,NavBar/* classNames */.A)(selected ? 'font-semibold' : 'font-normal', 'truncate')
        }, sortTyp.name), /*#__PURE__*/compat_module["default"].createElement("span", {
          className: (0,NavBar/* classNames */.A)(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')
        }, sortTyp.subname)), selected ? /*#__PURE__*/compat_module["default"].createElement("span", {
          className: (0,NavBar/* classNames */.A)(active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4')
        }, /*#__PURE__*/compat_module["default"].createElement(CheckIcon/* default */.Z, {
          className: "h-5 w-5",
          "aria-hidden": "true"
        })) : null);
      });
    })))));
  })), data.data.data.length > 0 ? /*#__PURE__*/compat_module["default"].createElement("div", {
    className: "-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg"
  }, /*#__PURE__*/compat_module["default"].createElement("table", {
    className: "min-w-full divide-y divide-gray-300"
  }, /*#__PURE__*/compat_module["default"].createElement("thead", null, /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell sm:pl-6"
  }, "Id"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell"
  }, "Name"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell"
  }, "Priority"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell"
  }, "Status"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell"
  }, "Last Update"), /*#__PURE__*/compat_module["default"].createElement("th", {
    scope: "col",
    className: "relative py-3.5 pl-3 pr-4 sm:pr-6 hidden lg:table-cell"
  }, /*#__PURE__*/compat_module["default"].createElement("span", {
    className: "sr-only"
  }, "Select")))), /*#__PURE__*/compat_module["default"].createElement("tbody", null, data.data.data.map(function (ticket, key) {
    return /*#__PURE__*/compat_module["default"].createElement(TicketRow, {
      ticket: ticket
    });
  })))) : /*#__PURE__*/compat_module["default"].createElement("p", {
    className: 'text-center text-black opacity-80'
  }, "No tickets matching these parameters were found for this account."), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: 'flex w-full max-w-7xl mx-auto'
  }, page > 1 && /*#__PURE__*/compat_module["default"].createElement("p", {
    className: 'btn btn-primary btn-outline my-4 ',
    onClick: function onClick() {
      window.scrollTo(0, 0);
      setPage(page - 1);
    }
  }, "Previous page"), page < data.data.last_page && /*#__PURE__*/compat_module["default"].createElement("p", {
    className: 'btn btn-primary btn-outline my-4 text-right ml-auto',
    onClick: function onClick() {
      window.scrollTo(0, 0);
      setPage(page + 1);
    }
  }, "Next page")))), /*#__PURE__*/compat_module["default"].createElement("section", {
    className: "min-h-screen"
  }));
}

/***/ }),

/***/ 6454:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5776);

function ArrowDownCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowDownCircleIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=775.bundle.js.map