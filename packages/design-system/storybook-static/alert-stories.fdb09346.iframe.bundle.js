/*! For license information please see alert-stories.fdb09346.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfusillo=self.webpackChunkfusillo||[]).push([[8666],{"./stories/alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Brand:()=>Brand,Danger:()=>Danger,Default:()=>Default,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>alert_stories});var react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");const Megaphone=(0,__webpack_require__("../../node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);var info=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/info.js"),x_circle=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/x-circle.js"),alert_triangle=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/alert-triangle.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_esm=__webpack_require__("../../node_modules/class-variance-authority/dist/index.esm.js"),twMerge=__webpack_require__("./lib/twMerge.ts"),_excluded=["className","status"],_excluded2=["className","children"],_excluded3=["className"],_excluded4=["className"],__jsx=react.createElement,alertVariants=(0,index_esm.j)("alert-component",{variants:{status:{default:"alert-default",brand:"alert-brand",danger:"alert-danger",warning:"alert-warning"}},defaultVariants:{status:"default"}}),Alert=react.forwardRef((function(_ref,ref){var className=_ref.className,status=_ref.status,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("div",(0,esm_extends.Z)({ref,role:"alert",className:(0,twMerge.cn)(alertVariants({status}),className)},props))}));Alert.displayName="Alert";var AlertIcon=react.forwardRef((function(_ref2,ref){var className=_ref2.className,children=_ref2.children,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return __jsx("div",(0,esm_extends.Z)({ref,className:(0,twMerge.cn)("alert-icon",className)},props),children)}));AlertIcon.displayName="AlertIcon";var AlertTitle=react.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3);return __jsx("h5",(0,esm_extends.Z)({ref,className:(0,twMerge.cn)("alert-title",className)},props))}));AlertTitle.displayName="AlertTitle";var AlertDescription=react.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,objectWithoutProperties.Z)(_ref4,_excluded4);return __jsx("div",(0,esm_extends.Z)({ref,className:(0,twMerge.cn)("alert-description",className)},props))}));AlertDescription.displayName="AlertDescription";try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/alert/index.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"components/alert/index.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}var alert_stories_jsx=react.createElement;const alert_stories={title:"Components/Alert",component:Alert,tags:["autodocs"],argTypes:{status:{control:"select",options:["default","brand","danger","warning"],description:"Define the type of message communicated by the alert",table:{defaultValue:{summary:"default"},type:{summary:null}}}},parameters:{docs:{description:{component:"Displays a callout for user attention."}},design:{type:"figma",url:"https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=233%3A751&mode=design&t=F5zgbD2phu8xvUpj-1"}}};var Default={render:function render(args){return alert_stories_jsx(Alert,args,alert_stories_jsx(AlertIcon,null,alert_stories_jsx(Megaphone,null)),alert_stories_jsx(AlertTitle,null,"Notice"),alert_stories_jsx(AlertDescription,null,"This is a general notification for your attention. It provides neutral information or basic reminders for everyday tasks."))},args:{status:"default"}},Brand={render:function render(args){return alert_stories_jsx(Alert,args,alert_stories_jsx(AlertIcon,null,alert_stories_jsx(info.Z,null)),alert_stories_jsx(AlertTitle,null,"Did you know?"),alert_stories_jsx(AlertDescription,null,"Here's some useful information or context about the current process or section that might be helpful to you."))},args:{status:"brand"}},Danger={render:function render(args){return alert_stories_jsx(Alert,args,alert_stories_jsx(AlertIcon,null,alert_stories_jsx(x_circle.Z,null)),alert_stories_jsx(AlertTitle,null,"Error Detected!"),alert_stories_jsx(AlertDescription,null,"Critical issue encountered! Please address this error immediately to prevent system failure or data loss."))},args:{status:"danger"}},Warning={render:function render(args){return alert_stories_jsx(Alert,args,alert_stories_jsx(AlertIcon,null,alert_stories_jsx(alert_triangle.Z,null)),alert_stories_jsx(AlertTitle,null,"Caution Advised"),alert_stories_jsx(AlertDescription,null,"Be cautious! There are certain risks associated with this action. Review and proceed with care."))},args:{status:"warning"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <Alert {...args}>\n      <AlertIcon>\n        <Megaphone />\n      </AlertIcon>\n      <AlertTitle>Notice</AlertTitle>\n      <AlertDescription>\n        This is a general notification for your attention. It provides neutral\n        information or basic reminders for everyday tasks.\n      </AlertDescription>\n    </Alert>,\n  args: {\n    status: 'default'\n  }\n}",...Default.parameters?.docs?.source}}},Brand.parameters={...Brand.parameters,docs:{...Brand.parameters?.docs,source:{originalSource:"{\n  render: args => <Alert {...args}>\n      <AlertIcon>\n        <Info />\n      </AlertIcon>\n      <AlertTitle>Did you know?</AlertTitle>\n      <AlertDescription>\n        Here&apos;s some useful information or context about the current process or section that might be helpful to you.\n      </AlertDescription>\n    </Alert>,\n  args: {\n    status: 'brand'\n  }\n}",...Brand.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  render: args => <Alert {...args}>\n      <AlertIcon>\n        <XCircle />\n      </AlertIcon>\n      <AlertTitle>Error Detected!</AlertTitle>\n      <AlertDescription>\n        Critical issue encountered! Please address this error immediately to\n        prevent system failure or data loss.\n      </AlertDescription>\n    </Alert>,\n  args: {\n    status: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  render: args => <Alert {...args}>\n      <AlertIcon>\n        <AlertTriangle />\n      </AlertIcon>\n      <AlertTitle>Caution Advised</AlertTitle>\n      <AlertDescription>\n        Be cautious! There are certain risks associated with this action. Review\n        and proceed with care.\n      </AlertDescription>\n    </Alert>,\n  args: {\n    status: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Brand","Danger","Warning"]},"./lib/twMerge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"../../node_modules/class-variance-authority/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.flat(1/0).filter(Boolean).join(" ")},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"../../node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createLucideIcon});var react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}},"../../node_modules/lucide-react/dist/esm/icons/alert-triangle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AlertTriangle});const AlertTriangle=(0,__webpack_require__("../../node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},"../../node_modules/lucide-react/dist/esm/icons/info.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Info});const Info=(0,__webpack_require__("../../node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},"../../node_modules/lucide-react/dist/esm/icons/x-circle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>XCircle});const XCircle=(0,__webpack_require__("../../node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])}}]);