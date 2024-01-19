/*! For license information please see 2912.ec92db88.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfusillo=self.webpackChunkfusillo||[]).push([[2912],{"../../node_modules/@radix-ui/react-collection/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>$e02a7d9cb1dc128c$export$c74125a8e3af6bb2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs");function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),itemMap=react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map).current;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollectionProviderImpl,{scope,itemMap,collectionRef:ref},children)},COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(forwardedRef,context.collectionRef);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7,{ref:composedRefs},children)})),ITEM_SLOT_NAME=name+"CollectionItemSlot",CollectionItemSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7,{"data-radix-collection-item":"",ref:composedRefs},children)}));return[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}},"../../node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gm:()=>$f631663db3294ace$export$b39126d51d94e6f3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");const $f631663db3294ace$var$DirectionContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function $f631663db3294ace$export$b39126d51d94e6f3(localDir){const globalDir=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f631663db3294ace$var$DirectionContext);return localDir||globalDir||"ltr"}},"../../node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{M:()=>$1746a345f3d73bb7$export$f680877a34711e37});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $1746a345f3d73bb7$var$useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{});let $1746a345f3d73bb7$var$count=0;function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState($1746a345f3d73bb7$var$useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{deterministicId||setId((reactId=>null!=reactId?reactId:String($1746a345f3d73bb7$var$count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"../../node_modules/@radix-ui/react-roving-focus/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Pc:()=>$d7bdfb9eb0fdf311$export$c7109489551a4f4,ck:()=>$d7bdfb9eb0fdf311$export$6d08773d2e66f8f2,fC:()=>$d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-collection/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@radix-ui/react-id/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@radix-ui/react-direction/dist/index.mjs");const $d7bdfb9eb0fdf311$var$EVENT_OPTIONS={bubbles:!1,cancelable:!0},[$d7bdfb9eb0fdf311$var$Collection,$d7bdfb9eb0fdf311$var$useCollection,$d7bdfb9eb0fdf311$var$createCollectionScope]=(0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_1__.B)("RovingFocusGroup"),[$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext,$d7bdfb9eb0fdf311$export$c7109489551a4f4]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.b)("RovingFocusGroup",[$d7bdfb9eb0fdf311$var$createCollectionScope]),[$d7bdfb9eb0fdf311$var$RovingFocusProvider,$d7bdfb9eb0fdf311$var$useRovingFocusContext]=$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext("RovingFocusGroup"),$d7bdfb9eb0fdf311$export$8699f7c8af148338=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($d7bdfb9eb0fdf311$var$Collection.Provider,{scope:props.__scopeRovingFocusGroup},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($d7bdfb9eb0fdf311$var$Collection.Slot,{scope:props.__scopeRovingFocusGroup},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},props,{ref:forwardedRef})))))),$d7bdfb9eb0fdf311$var$RovingFocusGroupImpl=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,orientation,loop=!1,dir,currentTabStopId:currentTabStopIdProp,defaultCurrentTabStopId,onCurrentTabStopIdChange,onEntryFocus,...groupProps}=props,ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.e)(forwardedRef,ref),direction=(0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__.gm)(dir),[currentTabStopId=null,setCurrentTabStopId]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__.T)({prop:currentTabStopIdProp,defaultProp:defaultCurrentTabStopId,onChange:onCurrentTabStopIdChange}),[isTabbingBackOut,setIsTabbingBackOut]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),handleEntryFocus=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__.W)(onEntryFocus),getItems=$d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup),isClickFocusRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),[focusableItemsCount,setFocusableItemsCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const node=ref.current;if(node)return node.addEventListener("rovingFocusGroup.onEntryFocus",handleEntryFocus),()=>node.removeEventListener("rovingFocusGroup.onEntryFocus",handleEntryFocus)}),[handleEntryFocus]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($d7bdfb9eb0fdf311$var$RovingFocusProvider,{scope:__scopeRovingFocusGroup,orientation,dir:direction,loop,currentTabStopId,onItemFocus:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((tabStopId=>setCurrentTabStopId(tabStopId)),[setCurrentTabStopId]),onItemShiftTab:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setIsTabbingBackOut(!0)),[]),onFocusableItemAdd:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setFocusableItemsCount((prevCount=>prevCount+1))),[]),onFocusableItemRemove:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setFocusableItemsCount((prevCount=>prevCount-1))),[])},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({tabIndex:isTabbingBackOut||0===focusableItemsCount?-1:0,"data-orientation":orientation},groupProps,{ref:composedRefs,style:{outline:"none",...props.style},onMouseDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(props.onMouseDown,(()=>{isClickFocusRef.current=!0})),onFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(props.onFocus,(event=>{const isKeyboardFocus=!isClickFocusRef.current;if(event.target===event.currentTarget&&isKeyboardFocus&&!isTabbingBackOut){const entryFocusEvent=new CustomEvent("rovingFocusGroup.onEntryFocus",$d7bdfb9eb0fdf311$var$EVENT_OPTIONS);if(event.currentTarget.dispatchEvent(entryFocusEvent),!entryFocusEvent.defaultPrevented){const items=getItems().filter((item=>item.focusable));$d7bdfb9eb0fdf311$var$focusFirst([items.find((item=>item.active)),items.find((item=>item.id===currentTabStopId)),...items].filter(Boolean).map((item=>item.ref.current)))}}isClickFocusRef.current=!1})),onBlur:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(props.onBlur,(()=>setIsTabbingBackOut(!1)))})))})),$d7bdfb9eb0fdf311$export$ab9df7c53fe8454=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,focusable=!0,active=!1,tabStopId,...itemProps}=props,autoId=(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.M)(),id=tabStopId||autoId,context=$d7bdfb9eb0fdf311$var$useRovingFocusContext("RovingFocusGroupItem",__scopeRovingFocusGroup),isCurrentTabStop=context.currentTabStopId===id,getItems=$d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup),{onFocusableItemAdd,onFocusableItemRemove}=context;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(focusable)return onFocusableItemAdd(),()=>onFocusableItemRemove()}),[focusable,onFocusableItemAdd,onFocusableItemRemove]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot,{scope:__scopeRovingFocusGroup,id,focusable,active},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.WV.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({tabIndex:isCurrentTabStop?0:-1,"data-orientation":context.orientation},itemProps,{ref:forwardedRef,onMouseDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(props.onMouseDown,(event=>{focusable?context.onItemFocus(id):event.preventDefault()})),onFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(props.onFocus,(()=>context.onItemFocus(id))),onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.M)(props.onKeyDown,(event=>{if("Tab"===event.key&&event.shiftKey)return void context.onItemShiftTab();if(event.target!==event.currentTarget)return;const focusIntent=function $d7bdfb9eb0fdf311$var$getFocusIntent(event,orientation,dir){const key=function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key,dir){return"rtl"!==dir?key:"ArrowLeft"===key?"ArrowRight":"ArrowRight"===key?"ArrowLeft":key}(event.key,dir);return"vertical"===orientation&&["ArrowLeft","ArrowRight"].includes(key)||"horizontal"===orientation&&["ArrowUp","ArrowDown"].includes(key)?void 0:$d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key]}(event,context.orientation,context.dir);if(void 0!==focusIntent){event.preventDefault();let candidateNodes=getItems().filter((item=>item.focusable)).map((item=>item.ref.current));if("last"===focusIntent)candidateNodes.reverse();else if("prev"===focusIntent||"next"===focusIntent){"prev"===focusIntent&&candidateNodes.reverse();const currentIndex=candidateNodes.indexOf(event.currentTarget);candidateNodes=context.loop?function $d7bdfb9eb0fdf311$var$wrapArray(array,startIndex){return array.map(((_,index)=>array[(startIndex+index)%array.length]))}(candidateNodes,currentIndex+1):candidateNodes.slice(currentIndex+1)}setTimeout((()=>$d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)))}}))})))})),$d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function $d7bdfb9eb0fdf311$var$focusFirst(candidates){const PREVIOUSLY_FOCUSED_ELEMENT=document.activeElement;for(const candidate of candidates){if(candidate===PREVIOUSLY_FOCUSED_ELEMENT)return;if(candidate.focus(),document.activeElement!==PREVIOUSLY_FOCUSED_ELEMENT)return}}const $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9=$d7bdfb9eb0fdf311$export$8699f7c8af148338,$d7bdfb9eb0fdf311$export$6d08773d2e66f8f2=$d7bdfb9eb0fdf311$export$ab9df7c53fe8454},"../../node_modules/@radix-ui/react-tabs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{VY:()=>$69cb30bb0017df05$export$7c6e2c02157bb7d2,aV:()=>$69cb30bb0017df05$export$54c2e3dc7acea9f5,fC:()=>$69cb30bb0017df05$export$be92b6f5f03c0fe9,xz:()=>$69cb30bb0017df05$export$41fb9f06171c75f4});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-roving-focus/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-direction/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@radix-ui/react-id/dist/index.mjs");const[$69cb30bb0017df05$var$createTabsContext,$69cb30bb0017df05$export$355f5bd209d7b13a]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("Tabs",[_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__.Pc]),$69cb30bb0017df05$var$useRovingFocusGroupScope=(0,_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__.Pc)(),[$69cb30bb0017df05$var$TabsProvider,$69cb30bb0017df05$var$useTabsContext]=$69cb30bb0017df05$var$createTabsContext("Tabs"),$69cb30bb0017df05$export$b2539bed5023c21c=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,value:valueProp,onValueChange,defaultValue,orientation="horizontal",dir,activationMode="automatic",...tabsProps}=props,direction=(0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_3__.gm)(dir),[value,setValue]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.T)({prop:valueProp,onChange:onValueChange,defaultProp:defaultValue});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($69cb30bb0017df05$var$TabsProvider,{scope:__scopeTabs,baseId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__.M)(),value,onValueChange:setValue,orientation,dir:direction,activationMode},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({dir:direction,"data-orientation":orientation},tabsProps,{ref:forwardedRef})))})),$69cb30bb0017df05$export$9712d22edc0d78c1=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,loop=!0,...listProps}=props,context=$69cb30bb0017df05$var$useTabsContext("TabsList",__scopeTabs),rovingFocusGroupScope=$69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({asChild:!0},rovingFocusGroupScope,{orientation:context.orientation,dir:context.dir,loop}),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({role:"tablist","aria-orientation":context.orientation},listProps,{ref:forwardedRef})))})),$69cb30bb0017df05$export$8114b9fdfdf9f3ba=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,value,disabled=!1,...triggerProps}=props,context=$69cb30bb0017df05$var$useTabsContext("TabsTrigger",__scopeTabs),rovingFocusGroupScope=$69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs),triggerId=$69cb30bb0017df05$var$makeTriggerId(context.baseId,value),contentId=$69cb30bb0017df05$var$makeContentId(context.baseId,value),isSelected=value===context.value;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__.ck,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({asChild:!0},rovingFocusGroupScope,{focusable:!disabled,active:isSelected}),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({type:"button",role:"tab","aria-selected":isSelected,"aria-controls":contentId,"data-state":isSelected?"active":"inactive","data-disabled":disabled?"":void 0,disabled,id:triggerId},triggerProps,{ref:forwardedRef,onMouseDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onMouseDown,(event=>{disabled||0!==event.button||!1!==event.ctrlKey?event.preventDefault():context.onValueChange(value)})),onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onKeyDown,(event=>{[" ","Enter"].includes(event.key)&&context.onValueChange(value)})),onFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onFocus,(()=>{const isAutomaticActivation="manual"!==context.activationMode;isSelected||disabled||!isAutomaticActivation||context.onValueChange(value)}))})))})),$69cb30bb0017df05$export$bd905d70e8fd2ebb=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,value,forceMount,children,...contentProps}=props,context=$69cb30bb0017df05$var$useTabsContext("TabsContent",__scopeTabs),triggerId=$69cb30bb0017df05$var$makeTriggerId(context.baseId,value),contentId=$69cb30bb0017df05$var$makeContentId(context.baseId,value),isSelected=value===context.value,isMountAnimationPreventedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isSelected);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__.z,{present:forceMount||isSelected},(({present})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({"data-state":isSelected?"active":"inactive","data-orientation":context.orientation,role:"tabpanel","aria-labelledby":triggerId,hidden:!present,id:contentId,tabIndex:0},contentProps,{ref:forwardedRef,style:{...props.style,animationDuration:isMountAnimationPreventedRef.current?"0s":void 0}}),present&&children)))}));function $69cb30bb0017df05$var$makeTriggerId(baseId,value){return`${baseId}-trigger-${value}`}function $69cb30bb0017df05$var$makeContentId(baseId,value){return`${baseId}-content-${value}`}const $69cb30bb0017df05$export$be92b6f5f03c0fe9=$69cb30bb0017df05$export$b2539bed5023c21c,$69cb30bb0017df05$export$54c2e3dc7acea9f5=$69cb30bb0017df05$export$9712d22edc0d78c1,$69cb30bb0017df05$export$41fb9f06171c75f4=$69cb30bb0017df05$export$8114b9fdfdf9f3ba,$69cb30bb0017df05$export$7c6e2c02157bb7d2=$69cb30bb0017df05$export$bd905d70e8fd2ebb},"../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"../../node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createLucideIcon});var react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}}}]);