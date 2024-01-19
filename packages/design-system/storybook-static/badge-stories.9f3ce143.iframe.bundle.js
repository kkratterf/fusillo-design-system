/*! For license information please see badge-stories.9f3ce143.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfusillo=self.webpackChunkfusillo||[]).push([[3249],{"./stories/badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Brand:()=>Brand,Danger:()=>Danger,Default:()=>Default,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>badge_stories});var react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");const Activity=(0,__webpack_require__("../../node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);var info=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/info.js"),x_circle=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/x-circle.js"),alert_triangle=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/alert-triangle.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_esm=__webpack_require__("../../node_modules/class-variance-authority/dist/index.esm.js"),twMerge=__webpack_require__("./lib/twMerge.ts"),_excluded=["className","status"],__jsx=react.createElement,badgeVariants=(0,index_esm.j)("badge-component",{variants:{status:{default:"badge-default",brand:"badge-brand",danger:"badge-danger",warning:"badge-warning"}},defaultVariants:{status:"default"}});function Badge(_ref){var className=_ref.className,status=_ref.status,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("div",(0,esm_extends.Z)({className:(0,twMerge.cn)(badgeVariants({status}),className)},props))}Badge.displayName="Badge";try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"components/badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}var badge_stories_jsx=react.createElement;const badge_stories={title:"Components/Badge",component:Badge,tags:["autodocs"],args:{status:"default"},argTypes:{status:{control:"select",options:["default","brand","danger","warning"],description:"Define the type of message communicated by the badge",table:{defaultValue:{summary:"default"},type:{summary:null}}}},parameters:{layout:"centered",docs:{description:{component:"Visual indicator for states or numeric values such as tallies and scores."}},design:{type:"figma",url:"https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=233%3A749&mode=design&t=MpDMELWReoDbdLIS-1"}}};var Default={render:function render(args){return badge_stories_jsx("div",{className:"grid justify-items-center gap-3 sm:flex"},badge_stories_jsx(Badge,args,badge_stories_jsx(Activity,null),"Active"),badge_stories_jsx(Badge,args,"Active"),badge_stories_jsx(Badge,args,badge_stories_jsx(Activity,null),badge_stories_jsx("span",{className:"sr-only"},"Active")),badge_stories_jsx(Badge,args,"7"))},args:{status:"default"}},Brand={render:function render(args){return badge_stories_jsx("div",{className:"grid justify-items-center gap-3 sm:flex"},badge_stories_jsx(Badge,args,badge_stories_jsx(info.Z,null),"Information"),badge_stories_jsx(Badge,args,"Information"),badge_stories_jsx(Badge,args,badge_stories_jsx(info.Z,null),badge_stories_jsx("span",{className:"sr-only"},"Information")),badge_stories_jsx(Badge,args,"7"))},args:{status:"brand"}},Danger={render:function render(args){return badge_stories_jsx("div",{className:"grid justify-items-center gap-3 sm:flex"},badge_stories_jsx(Badge,args,badge_stories_jsx(x_circle.Z,null),"Error"),badge_stories_jsx(Badge,args,"Error"),badge_stories_jsx(Badge,args,badge_stories_jsx(x_circle.Z,null),badge_stories_jsx("span",{className:"sr-only"},"Error")),badge_stories_jsx(Badge,args,"7"))},args:{status:"danger"}},Warning={render:function render(args){return badge_stories_jsx("div",{className:"grid justify-items-center gap-3 sm:flex"},badge_stories_jsx(Badge,args,badge_stories_jsx(alert_triangle.Z,null),"Caution"),badge_stories_jsx(Badge,args,"Caution"),badge_stories_jsx(Badge,args,badge_stories_jsx(alert_triangle.Z,null),badge_stories_jsx("span",{className:"sr-only"},"Caution")),badge_stories_jsx(Badge,args,"7"))},args:{status:"warning"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <div className=\"grid justify-items-center gap-3 sm:flex\">\n      <Badge {...args}>\n        <Activity />\n        Active\n      </Badge>\n      <Badge {...args}>Active</Badge>\n      <Badge {...args}>\n        <Activity />\n        <span className='sr-only'>Active</span>\n      </Badge>\n      <Badge {...args}>7</Badge>\n    </div>,\n  args: {\n    status: 'default'\n  }\n}",...Default.parameters?.docs?.source}}},Brand.parameters={...Brand.parameters,docs:{...Brand.parameters?.docs,source:{originalSource:'{\n  render: args => <div className="grid justify-items-center gap-3 sm:flex">\n      <Badge {...args}>\n        <Info />\n        Information\n      </Badge>\n      <Badge {...args}>Information</Badge>\n      <Badge {...args}>\n        <Info />\n        <span className="sr-only">Information</span>\n      </Badge>\n      <Badge {...args}>7</Badge>\n    </div>,\n  args: {\n    status: \'brand\'\n  }\n}',...Brand.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  render: args => <div className="grid justify-items-center gap-3 sm:flex">\n      <Badge {...args}>\n        <XCircle />\n        Error\n      </Badge>\n      <Badge {...args}>Error</Badge>\n      <Badge {...args}>\n        <XCircle />\n        <span className="sr-only">Error</span>\n      </Badge>\n      <Badge {...args}>7</Badge>\n    </div>,\n  args: {\n    status: \'danger\'\n  }\n}',...Danger.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  render: args => <div className="grid justify-items-center gap-3 sm:flex">\n      <Badge {...args}>\n        <AlertTriangle />\n        Caution\n      </Badge>\n      <Badge {...args}>Caution</Badge>\n      <Badge {...args}>\n        <AlertTriangle />\n        <span className="sr-only">Caution</span>\n      </Badge>\n      <Badge {...args}>7</Badge>\n    </div>,\n  args: {\n    status: \'warning\'\n  }\n}',...Warning.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Brand","Danger","Warning"]},"./lib/twMerge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"../../node_modules/class-variance-authority/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.flat(1/0).filter(Boolean).join(" ")},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"../../node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createLucideIcon});var react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}},"../../node_modules/lucide-react/dist/esm/icons/alert-triangle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AlertTriangle});const AlertTriangle=(0,__webpack_require__("../../node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},"../../node_modules/lucide-react/dist/esm/icons/info.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Info});const Info=(0,__webpack_require__("../../node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},"../../node_modules/lucide-react/dist/esm/icons/x-circle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>XCircle});const XCircle=(0,__webpack_require__("../../node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])}}]);