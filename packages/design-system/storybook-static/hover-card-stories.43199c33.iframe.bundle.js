"use strict";(self.webpackChunkfusillo=self.webpackChunkfusillo||[]).push([[8067],{"../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I0:()=>$5cb92bef7577960e$export$aecb2ddcb55c95be,XB:()=>$5cb92bef7577960e$export$177fb62ff3ec1f22,fC:()=>$5cb92bef7577960e$export$be92b6f5f03c0fe9});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");let $5cb92bef7577960e$var$originalBodyPointerEvents;const $5cb92bef7577960e$var$DismissableLayerContext=(0,react.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$5cb92bef7577960e$export$177fb62ff3ec1f22=(0,react.forwardRef)(((props,forwardedRef)=>{var _node$ownerDocument;const{disableOutsidePointerEvents=!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,onDismiss,...layerProps}=props,context=(0,react.useContext)($5cb92bef7577960e$var$DismissableLayerContext),[node1,setNode]=(0,react.useState)(null),ownerDocument=null!==(_node$ownerDocument=null==node1?void 0:node1.ownerDocument)&&void 0!==_node$ownerDocument?_node$ownerDocument:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,force]=(0,react.useState)({}),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setNode(node))),layers=Array.from(context.layers),[highestLayerWithOutsidePointerEventsDisabled]=[...context.layersWithOutsidePointerEventsDisabled].slice(-1),highestLayerWithOutsidePointerEventsDisabledIndex=layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),index=node1?layers.indexOf(node1):-1,isBodyPointerEventsDisabled=context.layersWithOutsidePointerEventsDisabled.size>0,isPointerEventsEnabled=index>=highestLayerWithOutsidePointerEventsDisabledIndex,pointerDownOutside=function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handlePointerDownOutside=(0,react_use_callback_ref_dist.W)(onPointerDownOutside),isPointerInsideReactTreeRef=(0,react.useRef)(!1),handleClickRef=(0,react.useRef)((()=>{}));return(0,react.useEffect)((()=>{const handlePointerDown=event=>{if(event.target&&!isPointerInsideReactTreeRef.current){const eventDetail={originalEvent:event};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",handlePointerDownOutside,eventDetail,{discrete:!0})}"touch"===event.pointerType?(ownerDocument.removeEventListener("click",handleClickRef.current),handleClickRef.current=handleAndDispatchPointerDownOutsideEvent,ownerDocument.addEventListener("click",handleClickRef.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}else ownerDocument.removeEventListener("click",handleClickRef.current);isPointerInsideReactTreeRef.current=!1},timerId=window.setTimeout((()=>{ownerDocument.addEventListener("pointerdown",handlePointerDown)}),0);return()=>{window.clearTimeout(timerId),ownerDocument.removeEventListener("pointerdown",handlePointerDown),ownerDocument.removeEventListener("click",handleClickRef.current)}}),[ownerDocument,handlePointerDownOutside]),{onPointerDownCapture:()=>isPointerInsideReactTreeRef.current=!0}}((event=>{const target=event.target,isPointerDownOnBranch=[...context.branches].some((branch=>branch.contains(target)));isPointerEventsEnabled&&!isPointerDownOnBranch&&(null==onPointerDownOutside||onPointerDownOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument),focusOutside=function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handleFocusOutside=(0,react_use_callback_ref_dist.W)(onFocusOutside),isFocusInsideReactTreeRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const handleFocus=event=>{if(event.target&&!isFocusInsideReactTreeRef.current){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",handleFocusOutside,{originalEvent:event},{discrete:!1})}};return ownerDocument.addEventListener("focusin",handleFocus),()=>ownerDocument.removeEventListener("focusin",handleFocus)}),[ownerDocument,handleFocusOutside]),{onFocusCapture:()=>isFocusInsideReactTreeRef.current=!0,onBlurCapture:()=>isFocusInsideReactTreeRef.current=!1}}((event=>{const target=event.target;[...context.branches].some((branch=>branch.contains(target)))||(null==onFocusOutside||onFocusOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument);return function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const onEscapeKeyDown=(0,react_use_callback_ref_dist.W)(onEscapeKeyDownProp);(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Escape"===event.key&&onEscapeKeyDown(event)};return ownerDocument.addEventListener("keydown",handleKeyDown),()=>ownerDocument.removeEventListener("keydown",handleKeyDown)}),[onEscapeKeyDown,ownerDocument])}((event=>{index===context.layers.size-1&&(null==onEscapeKeyDown||onEscapeKeyDown(event),!event.defaultPrevented&&onDismiss&&(event.preventDefault(),onDismiss()))}),ownerDocument),(0,react.useEffect)((()=>{if(node1)return disableOutsidePointerEvents&&(0===context.layersWithOutsidePointerEventsDisabled.size&&($5cb92bef7577960e$var$originalBodyPointerEvents=ownerDocument.body.style.pointerEvents,ownerDocument.body.style.pointerEvents="none"),context.layersWithOutsidePointerEventsDisabled.add(node1)),context.layers.add(node1),$5cb92bef7577960e$var$dispatchUpdate(),()=>{disableOutsidePointerEvents&&1===context.layersWithOutsidePointerEventsDisabled.size&&(ownerDocument.body.style.pointerEvents=$5cb92bef7577960e$var$originalBodyPointerEvents)}}),[node1,ownerDocument,disableOutsidePointerEvents,context]),(0,react.useEffect)((()=>()=>{node1&&(context.layers.delete(node1),context.layersWithOutsidePointerEventsDisabled.delete(node1),$5cb92bef7577960e$var$dispatchUpdate())}),[node1,context]),(0,react.useEffect)((()=>{const handleUpdate=()=>force({});return document.addEventListener("dismissableLayer.update",handleUpdate),()=>document.removeEventListener("dismissableLayer.update",handleUpdate)}),[]),(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({},layerProps,{ref:composedRefs,style:{pointerEvents:isBodyPointerEventsDisabled?isPointerEventsEnabled?"auto":"none":void 0,...props.style},onFocusCapture:(0,dist.M)(props.onFocusCapture,focusOutside.onFocusCapture),onBlurCapture:(0,dist.M)(props.onBlurCapture,focusOutside.onBlurCapture),onPointerDownCapture:(0,dist.M)(props.onPointerDownCapture,pointerDownOutside.onPointerDownCapture)}))})),$5cb92bef7577960e$export$4d5eb2109db14228=(0,react.forwardRef)(((props,forwardedRef)=>{const context=(0,react.useContext)($5cb92bef7577960e$var$DismissableLayerContext),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref);return(0,react.useEffect)((()=>{const node=ref.current;if(node)return context.branches.add(node),()=>{context.branches.delete(node)}}),[context.branches]),(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({},props,{ref:composedRefs}))}));function $5cb92bef7577960e$var$dispatchUpdate(){const event=new CustomEvent("dismissableLayer.update");document.dispatchEvent(event)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name,handler,detail,{discrete}){const target=detail.originalEvent.target,event=new CustomEvent(name,{bubbles:!1,cancelable:!0,detail});handler&&target.addEventListener(name,handler,{once:!0}),discrete?(0,react_primitive_dist.jH)(target,event):target.dispatchEvent(event)}const $5cb92bef7577960e$export$be92b6f5f03c0fe9=$5cb92bef7577960e$export$177fb62ff3ec1f22,$5cb92bef7577960e$export$aecb2ddcb55c95be=$5cb92bef7577960e$export$4d5eb2109db14228},"../../node_modules/@radix-ui/react-portal/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>$f1701beae083dbae$export$602eac185826482c});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs");const $f1701beae083dbae$export$602eac185826482c=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{var _globalThis$document;const{container=null===globalThis||void 0===globalThis||null===(_globalThis$document=globalThis.document)||void 0===_globalThis$document?void 0:_globalThis$document.body,...portalProps}=props;return container?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},portalProps,{ref:forwardedRef})),container):null}))},"../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./stories/hover-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,__namedExportsOrder:()=>__namedExportsOrder,default:()=>hover_card_stories});var react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),avatar=__webpack_require__("./components/avatar/index.tsx"),components_button=__webpack_require__("./components/button/index.tsx"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),dist=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs"),react_context_dist=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_popper_dist=__webpack_require__("../../node_modules/@radix-ui/react-popper/dist/index.mjs"),react_presence_dist=(__webpack_require__("../../node_modules/@radix-ui/react-portal/dist/index.mjs"),__webpack_require__("../../node_modules/@radix-ui/react-presence/dist/index.mjs")),react_primitive_dist=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_dismissable_layer_dist=__webpack_require__("../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs");let $cef8881cdc69808e$var$originalBodyUserSelect;const[$cef8881cdc69808e$var$createHoverCardContext,$cef8881cdc69808e$export$47b6998a836b7260]=(0,react_context_dist.b)("HoverCard",[react_popper_dist.D7]),$cef8881cdc69808e$var$usePopperScope=(0,react_popper_dist.D7)(),[$cef8881cdc69808e$var$HoverCardProvider,$cef8881cdc69808e$var$useHoverCardContext]=$cef8881cdc69808e$var$createHoverCardContext("HoverCard"),$cef8881cdc69808e$export$57a077cc9fbe653e=props=>{const{__scopeHoverCard,children,open:openProp,defaultOpen,onOpenChange,openDelay=700,closeDelay=300}=props,popperScope=$cef8881cdc69808e$var$usePopperScope(__scopeHoverCard),openTimerRef=(0,react.useRef)(0),closeTimerRef=(0,react.useRef)(0),hasSelectionRef=(0,react.useRef)(!1),isPointerDownOnContentRef=(0,react.useRef)(!1),[open=!1,setOpen]=(0,react_use_controllable_state_dist.T)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange}),handleOpen=(0,react.useCallback)((()=>{clearTimeout(closeTimerRef.current),openTimerRef.current=window.setTimeout((()=>setOpen(!0)),openDelay)}),[openDelay,setOpen]),handleClose=(0,react.useCallback)((()=>{clearTimeout(openTimerRef.current),hasSelectionRef.current||isPointerDownOnContentRef.current||(closeTimerRef.current=window.setTimeout((()=>setOpen(!1)),closeDelay))}),[closeDelay,setOpen]),handleDismiss=(0,react.useCallback)((()=>setOpen(!1)),[setOpen]);return(0,react.useEffect)((()=>()=>{clearTimeout(openTimerRef.current),clearTimeout(closeTimerRef.current)}),[]),(0,react.createElement)($cef8881cdc69808e$var$HoverCardProvider,{scope:__scopeHoverCard,open,onOpenChange:setOpen,onOpen:handleOpen,onClose:handleClose,onDismiss:handleDismiss,hasSelectionRef,isPointerDownOnContentRef},(0,react.createElement)(react_popper_dist.fC,popperScope,children))},$cef8881cdc69808e$export$ef9f7fd8e4ba882f=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeHoverCard,...triggerProps}=props,context=$cef8881cdc69808e$var$useHoverCardContext("HoverCardTrigger",__scopeHoverCard),popperScope=$cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);return(0,react.createElement)(react_popper_dist.ee,(0,esm_extends.Z)({asChild:!0},popperScope),(0,react.createElement)(react_primitive_dist.WV.a,(0,esm_extends.Z)({"data-state":context.open?"open":"closed"},triggerProps,{ref:forwardedRef,onPointerEnter:(0,dist.M)(props.onPointerEnter,$cef8881cdc69808e$var$excludeTouch(context.onOpen)),onPointerLeave:(0,dist.M)(props.onPointerLeave,$cef8881cdc69808e$var$excludeTouch(context.onClose)),onFocus:(0,dist.M)(props.onFocus,context.onOpen),onBlur:(0,dist.M)(props.onBlur,context.onClose),onTouchStart:(0,dist.M)(props.onTouchStart,(event=>event.preventDefault()))})))})),[$cef8881cdc69808e$var$PortalProvider,$cef8881cdc69808e$var$usePortalContext]=$cef8881cdc69808e$var$createHoverCardContext("HoverCardPortal",{forceMount:void 0}),$cef8881cdc69808e$export$aa4724a5938c586=(0,react.forwardRef)(((props,forwardedRef)=>{const portalContext=$cef8881cdc69808e$var$usePortalContext("HoverCardContent",props.__scopeHoverCard),{forceMount=portalContext.forceMount,...contentProps}=props,context=$cef8881cdc69808e$var$useHoverCardContext("HoverCardContent",props.__scopeHoverCard);return(0,react.createElement)(react_presence_dist.z,{present:forceMount||context.open},(0,react.createElement)($cef8881cdc69808e$var$HoverCardContentImpl,(0,esm_extends.Z)({"data-state":context.open?"open":"closed"},contentProps,{onPointerEnter:(0,dist.M)(props.onPointerEnter,$cef8881cdc69808e$var$excludeTouch(context.onOpen)),onPointerLeave:(0,dist.M)(props.onPointerLeave,$cef8881cdc69808e$var$excludeTouch(context.onClose)),ref:forwardedRef})))})),$cef8881cdc69808e$var$HoverCardContentImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeHoverCard,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,...contentProps}=props,context=$cef8881cdc69808e$var$useHoverCardContext("HoverCardContent",__scopeHoverCard),popperScope=$cef8881cdc69808e$var$usePopperScope(__scopeHoverCard),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref),[containSelection,setContainSelection]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{if(containSelection){const body=document.body;return $cef8881cdc69808e$var$originalBodyUserSelect=body.style.userSelect||body.style.webkitUserSelect,body.style.userSelect="none",body.style.webkitUserSelect="none",()=>{body.style.userSelect=$cef8881cdc69808e$var$originalBodyUserSelect,body.style.webkitUserSelect=$cef8881cdc69808e$var$originalBodyUserSelect}}}),[containSelection]),(0,react.useEffect)((()=>{if(ref.current){const handlePointerUp=()=>{setContainSelection(!1),context.isPointerDownOnContentRef.current=!1,setTimeout((()=>{var _document$getSelectio;""!==(null===(_document$getSelectio=document.getSelection())||void 0===_document$getSelectio?void 0:_document$getSelectio.toString())&&(context.hasSelectionRef.current=!0)}))};return document.addEventListener("pointerup",handlePointerUp),()=>{document.removeEventListener("pointerup",handlePointerUp),context.hasSelectionRef.current=!1,context.isPointerDownOnContentRef.current=!1}}}),[context.isPointerDownOnContentRef,context.hasSelectionRef]),(0,react.useEffect)((()=>{if(ref.current){(function $cef8881cdc69808e$var$getTabbableNodes(container){const nodes=[],walker=document.createTreeWalker(container,NodeFilter.SHOW_ELEMENT,{acceptNode:node=>node.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;walker.nextNode();)nodes.push(walker.currentNode);return nodes})(ref.current).forEach((tabbable=>tabbable.setAttribute("tabindex","-1")))}})),(0,react.createElement)(react_dismissable_layer_dist.XB,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside,onEscapeKeyDown,onPointerDownOutside,onFocusOutside:(0,dist.M)(onFocusOutside,(event=>{event.preventDefault()})),onDismiss:context.onDismiss},(0,react.createElement)(react_popper_dist.VY,(0,esm_extends.Z)({},popperScope,contentProps,{onPointerDown:(0,dist.M)(contentProps.onPointerDown,(event=>{event.currentTarget.contains(event.target)&&setContainSelection(!0),context.hasSelectionRef.current=!1,context.isPointerDownOnContentRef.current=!0})),ref:composedRefs,style:{...contentProps.style,userSelect:containSelection?"text":void 0,WebkitUserSelect:containSelection?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})))}));function $cef8881cdc69808e$var$excludeTouch(eventHandler){return event=>"touch"===event.pointerType?void 0:eventHandler()}const $cef8881cdc69808e$export$be92b6f5f03c0fe9=$cef8881cdc69808e$export$57a077cc9fbe653e,$cef8881cdc69808e$export$41fb9f06171c75f4=$cef8881cdc69808e$export$ef9f7fd8e4ba882f,$cef8881cdc69808e$export$7c6e2c02157bb7d2=$cef8881cdc69808e$export$aa4724a5938c586;var twMerge=__webpack_require__("./lib/twMerge.ts"),_excluded=["className","align","sideOffset"],__jsx=react.createElement,HoverCard=$cef8881cdc69808e$export$be92b6f5f03c0fe9,HoverCardTrigger=$cef8881cdc69808e$export$41fb9f06171c75f4,HoverCardContent=react.forwardRef((function(_ref,ref){var className=_ref.className,_ref$align=_ref.align,align=void 0===_ref$align?"center":_ref$align,_ref$sideOffset=_ref.sideOffset,sideOffset=void 0===_ref$sideOffset?4:_ref$sideOffset,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx($cef8881cdc69808e$export$7c6e2c02157bb7d2,(0,esm_extends.Z)({ref,align,sideOffset,className:(0,twMerge.cn)("hover-card-component data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className)},props))}));HoverCardContent.displayName=$cef8881cdc69808e$export$7c6e2c02157bb7d2.displayName;try{HoverCardContent.displayName="HoverCardContent",HoverCardContent.__docgenInfo={description:"",displayName:"HoverCardContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/hover-card/index.tsx#HoverCardContent"]={docgenInfo:HoverCardContent.__docgenInfo,name:"HoverCardContent",path:"components/hover-card/index.tsx#HoverCardContent"})}catch(__react_docgen_typescript_loader_error){}var hover_card_stories_jsx=react.createElement;const hover_card_stories={title:"Components/HoverCard",component:HoverCard,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"For sighted users to preview content available behind a link."}},design:{type:"figma",url:"https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8866&mode=design&t=BNqih1pZMuav038B-1"}}};var Base={render:function render(args){return hover_card_stories_jsx(HoverCard,args,hover_card_stories_jsx(HoverCardTrigger,{asChild:!0},hover_card_stories_jsx(components_button.z,{variant:"link"},"@nextjs")),hover_card_stories_jsx(HoverCardContent,{className:"w-80"},hover_card_stories_jsx("div",{className:"flex justify-between space-x-4"},hover_card_stories_jsx(avatar.qE,null,hover_card_stories_jsx(avatar.F$,{src:"https://github.com/vercel.png"}),hover_card_stories_jsx(avatar.Q5,null,"VC")),hover_card_stories_jsx("div",{className:"space-y-1"},hover_card_stories_jsx("h4",{className:"text-md-semibold"},"@nextjs"),hover_card_stories_jsx("p",{className:"text-md"},"The React Framework – created and maintained by @vercel."),hover_card_stories_jsx("div",{className:"flex items-center pt-2"},hover_card_stories_jsx("span",{className:"text-sm text-description"},"Joined December 2021"))))))},args:{}};Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:'{\n  render: args => <HoverCard {...args}>\n      <HoverCardTrigger asChild>\n        <Button variant="link">@nextjs</Button>\n      </HoverCardTrigger>\n      <HoverCardContent className="w-80">\n        <div className="flex justify-between space-x-4">\n          <Avatar>\n            <AvatarImage src="https://github.com/vercel.png" />\n            <AvatarFallback>VC</AvatarFallback>\n          </Avatar>\n          <div className="space-y-1">\n            <h4 className="text-md-semibold">@nextjs</h4>\n            <p className="text-md">\n              The React Framework – created and maintained by @vercel.\n            </p>\n            <div className="flex items-center pt-2">\n              <span className="text-sm text-description">\n                Joined December 2021\n              </span>\n            </div>\n          </div>\n        </div>\n      </HoverCardContent>\n    </HoverCard>,\n  args: {}\n}',...Base.parameters?.docs?.source}}};const __namedExportsOrder=["Base"]},"./components/avatar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qE:()=>Avatar,Q5:()=>AvatarFallback,F$:()=>AvatarImage});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("../../node_modules/class-variance-authority/dist/index.esm.js"),dist=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),react_use_layout_effect_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$cddcb0b647441e34$var$createAvatarContext,$cddcb0b647441e34$export$90370d16b488820f]=(0,dist.b)("Avatar"),[$cddcb0b647441e34$var$AvatarProvider,$cddcb0b647441e34$var$useAvatarContext]=$cddcb0b647441e34$var$createAvatarContext("Avatar"),$cddcb0b647441e34$export$e2255cf6045e8d47=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,...avatarProps}=props,[imageLoadingStatus,setImageLoadingStatus]=(0,react.useState)("idle");return(0,react.createElement)($cddcb0b647441e34$var$AvatarProvider,{scope:__scopeAvatar,imageLoadingStatus,onImageLoadingStatusChange:setImageLoadingStatus},(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({},avatarProps,{ref:forwardedRef})))})),$cddcb0b647441e34$export$2cd8ae1985206fe8=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,src,onLoadingStatusChange=()=>{},...imageProps}=props,context=$cddcb0b647441e34$var$useAvatarContext("AvatarImage",__scopeAvatar),imageLoadingStatus=function $cddcb0b647441e34$var$useImageLoadingStatus(src){const[loadingStatus,setLoadingStatus]=(0,react.useState)("idle");return(0,react_use_layout_effect_dist.b)((()=>{if(!src)return void setLoadingStatus("error");let isMounted=!0;const image=new window.Image,updateStatus=status=>()=>{isMounted&&setLoadingStatus(status)};return setLoadingStatus("loading"),image.onload=updateStatus("loaded"),image.onerror=updateStatus("error"),image.src=src,()=>{isMounted=!1}}),[src]),loadingStatus}(src),handleLoadingStatusChange=(0,react_use_callback_ref_dist.W)((status=>{onLoadingStatusChange(status),context.onImageLoadingStatusChange(status)}));return(0,react_use_layout_effect_dist.b)((()=>{"idle"!==imageLoadingStatus&&handleLoadingStatusChange(imageLoadingStatus)}),[imageLoadingStatus,handleLoadingStatusChange]),"loaded"===imageLoadingStatus?(0,react.createElement)(react_primitive_dist.WV.img,(0,esm_extends.Z)({},imageProps,{ref:forwardedRef,src})):null})),$cddcb0b647441e34$export$69fffb6a9571fbfe=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAvatar,delayMs,...fallbackProps}=props,context=$cddcb0b647441e34$var$useAvatarContext("AvatarFallback",__scopeAvatar),[canRender,setCanRender]=(0,react.useState)(void 0===delayMs);return(0,react.useEffect)((()=>{if(void 0!==delayMs){const timerId=window.setTimeout((()=>setCanRender(!0)),delayMs);return()=>window.clearTimeout(timerId)}}),[delayMs]),canRender&&"loaded"!==context.imageLoadingStatus?(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({},fallbackProps,{ref:forwardedRef})):null}));const $cddcb0b647441e34$export$be92b6f5f03c0fe9=$cddcb0b647441e34$export$e2255cf6045e8d47,$cddcb0b647441e34$export$3e431a229df88919=$cddcb0b647441e34$export$2cd8ae1985206fe8,$cddcb0b647441e34$export$fb8d7f40caaeea67=$cddcb0b647441e34$export$69fffb6a9571fbfe;var twMerge=__webpack_require__("./lib/twMerge.ts"),_excluded=["className","size"],_excluded2=["className"],_excluded3=["className"],__jsx=react.createElement,avatarVariants=(0,index_esm.j)("avatar-component",{variants:{size:{xs:"avatar-xs",sm:"avatar-sm",md:"avatar-md",lg:"avatar-lg",xl:"avatar-xl"}},defaultVariants:{size:"lg"}}),Avatar=react.forwardRef((function(_ref,ref){var className=_ref.className,size=_ref.size,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx($cddcb0b647441e34$export$be92b6f5f03c0fe9,(0,esm_extends.Z)({ref,className:(0,twMerge.cn)(avatarVariants({size}),className)},props))}));Avatar.displayName=$cddcb0b647441e34$export$be92b6f5f03c0fe9.displayName;var AvatarImage=react.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return __jsx($cddcb0b647441e34$export$3e431a229df88919,(0,esm_extends.Z)({ref,className:(0,twMerge.cn)("avatar-image",className)},props))}));AvatarImage.displayName=$cddcb0b647441e34$export$3e431a229df88919.displayName;var AvatarFallback=react.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3);return __jsx($cddcb0b647441e34$export$fb8d7f40caaeea67,(0,esm_extends.Z)({ref,className:(0,twMerge.cn)("avatar-fallback",className)},props))}));AvatarFallback.displayName=$cddcb0b647441e34$export$fb8d7f40caaeea67.displayName;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/avatar/index.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/avatar/index.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"components/avatar/index.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}try{AvatarFallback.displayName="AvatarFallback",AvatarFallback.__docgenInfo={description:"",displayName:"AvatarFallback",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/avatar/index.tsx#AvatarFallback"]={docgenInfo:AvatarFallback.__docgenInfo,name:"AvatarFallback",path:"components/avatar/index.tsx#AvatarFallback"})}catch(__react_docgen_typescript_loader_error){}},"./components/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>buttonVariants,z:()=>Button});var _Users_kkratter_Desktop_kkratter_Al_dente_fusillo_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_kkratter_Desktop_kkratter_Al_dente_fusillo_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/class-variance-authority/dist/index.esm.js"),_lib_twMerge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./lib/twMerge.ts"),_excluded=["className","variant","icon","asChild","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)("button-component",{variants:{variant:{primary:"button-primary bg-brand",secondary:"button-secondary",text:"button-text",link:"button-link",danger:"button-danger"},icon:{false:"",true:"icon-button"}},defaultVariants:{variant:"primary",icon:!1}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,icon=_ref.icon,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,title=_ref.title,props=(0,_Users_kkratter_Desktop_kkratter_Al_dente_fusillo_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7:"button",buttonContent=title||props.children;return __jsx(Comp,(0,_Users_kkratter_Desktop_kkratter_Al_dente_fusillo_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:(0,_lib_twMerge__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonVariants({variant,icon,className})),ref},props),buttonContent)}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./lib/twMerge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"../../node_modules/class-variance-authority/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.flat(1/0).filter(Boolean).join(" ")},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);