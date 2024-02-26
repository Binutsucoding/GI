"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[600],{6522:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(61134),o=n(80184);function i(e){let{children:t,onSubmit:n,methods:i}=e;return(0,o.jsx)(r.RV,{...i,children:(0,o.jsx)("form",{onSubmit:n,children:t})})}},11892:(e,t,n)=>{n.d(t,{au:()=>k,sX:()=>b,ZP:()=>y.Z});var r=n(61134),o=n(47071),i=n(72791),a=n(87087),s=n(64554),l=n(80184);const c=(0,i.forwardRef)(((e,t)=>{let{disabledEffect:n=!1,effect:r="blur",sx:o,...i}=e;const c=(0,l.jsx)(s.Z,{component:a.LazyLoadImage,wrapperClassName:"wrapper",effect:n?void 0:r,placeholderSrc:n?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover"},...i});return(0,l.jsx)(s.Z,{ref:t,component:"span",sx:{lineHeight:1,display:"block",overflow:"hidden",position:"relative","& .wrapper":{width:1,height:1,backgroundSize:"cover !important"},...o},children:c})}));function d(e){let{file:t}=e;if(!t)return null;const n="string"===typeof t?t:t.preview;return(0,l.jsx)(c,{alt:"avatar",src:n,sx:{zIndex:8,overflow:"hidden",borderRadius:"50%",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})}var u=n(18267),p=n(20890),h=n(66934),g=n(12065),m=n(76526);const f=(0,h.ZP)("div")((e=>{let{theme:t}=e;return{width:144,height:144,margin:"auto",display:"flex",cursor:"pointer",overflow:"hidden",borderRadius:"50%",alignItems:"center",position:"relative",justifyContent:"center",border:"1px dashed ".concat((0,g.Fq)(t.palette.grey[500],.32))}})),v=(0,h.ZP)("div")((e=>{let{theme:t}=e;return{zIndex:7,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",width:"calc(100% - 16px)",height:"calc(100% - 16px)",color:t.palette.text.disabled,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter})}}));function x(e){let{error:t,file:n,disabled:r,helperText:o,sx:i,...a}=e;const{getRootProps:s,getInputProps:c,isDragActive:h,isDragReject:x}=(0,u.uI)({multiple:!1,disabled:r,...a}),b=!!n,y=x||!!t;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(f,{...s(),sx:{...h&&{opacity:.72},...y&&{borderColor:"error.light",...b&&{bgcolor:"error.lighter"}},...r&&{opacity:.48,pointerEvents:"none"},...b&&{"&:hover":{"& .placeholder":{opacity:1}}},...i},children:[(0,l.jsx)("input",{...c()}),b&&(0,l.jsx)(d,{file:n}),(0,l.jsxs)(v,{className:"placeholder",sx:{"&:hover":{opacity:.72},...b&&{zIndex:9,opacity:0,color:"common.white",bgcolor:e=>(0,g.Fq)(e.palette.grey[900],.64)},...y&&{color:"error.main",bgcolor:"error.lighter"}},children:[(0,l.jsx)(m.Z,{}),(0,l.jsx)(p.Z,{variant:"caption",children:n?"Update photo":"Upload photo"})]})]}),o&&o]})}function b(e){let{name:t,...n}=e;const{control:i}=(0,r.Gc)();return(0,l.jsx)(r.Qr,{name:t,control:i,render:e=>{let{field:t,fieldState:{error:r}}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(x,{accept:{"image/*":[]},error:!!r,file:t.value,...n}),!!r&&(0,l.jsx)(o.Z,{error:!0,sx:{px:2,textAlign:"center"},children:r.message})]})}})}var y=n(6522),Z=n(43138);function k(e){let{name:t,helperText:n,...o}=e;const{control:i}=(0,r.Gc)();return(0,l.jsx)(r.Qr,{name:t,control:i,render:e=>{let{field:t,fieldState:{error:r}}=e;return(0,l.jsx)(Z.Z,{...t,fullWidth:!0,value:"number"===typeof t.value&&0===t.value?"":t.value,error:!!r,helperText:r?null===r||void 0===r?void 0:r.message:n,...o})}})}},97600:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(53767),o=n(20890),i=n(80043),a=n(11087),s=(n(72791),n(34559)),l=n(81724),c=n(44695),d=n(61134),u=n(11892),p=n(59434),h=n(82492),g=n(59860),m=n(80184);function f(){const{isLoading:e}=(0,p.v9)((e=>e.auth)),t=(0,p.I0)(),n=l.Ry().shape({email:l.Z_().required("Email is required").email("Email must be a valid email address")}),r=(0,d.cI)({resolver:(0,c.X)(n),defaultValues:{email:"demo@tawk.com"}}),{handleSubmit:o}=r;return(0,m.jsxs)(u.ZP,{methods:r,onSubmit:o((async e=>{try{t((0,h.oP)(e))}catch(n){console.error(n)}})),children:[(0,m.jsx)(u.au,{name:"email",label:"Email address"}),(0,m.jsx)(g.Z,{loading:e,fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mt:3,bgcolor:"text.primary",color:e=>"light"===e.palette.mode?"common.white":"grey.800","&:hover":{bgcolor:"text.primary",color:e=>"light"===e.palette.mode?"common.white":"grey.800"}},children:"Send Request"})]})}const v=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(r.Z,{spacing:2,sx:{mb:5,position:"relative"},children:[(0,m.jsx)(o.Z,{variant:"h3",paragraph:!0,children:"Forgot your password?"}),(0,m.jsx)(o.Z,{sx:{color:"text.secondary",mb:5},children:"Please enter the email address associated with your account and We will email you a link to reset your password."})]}),(0,m.jsx)(f,{}),(0,m.jsxs)(i.Z,{component:a.rU,to:"/auth/login",color:"inherit",variant:"subtitle2",sx:{mt:3,mx:"auto",alignItems:"center",display:"inline-flex"},children:[(0,m.jsx)(s.Z,{size:24}),"Return to sign in"]})]})},59860:(e,t,n)=>{n.d(t,{Z:()=>V});var r=n(63366),o=n(87462),i=n(72791),a=n(14036),s=n(67384),l=n(94419),c=n(66934),d=n(31402),u=n(36151),p=n(30168),h=n(28182),g=n(52554),m=n(75878),f=n(21217);function v(e){return(0,f.Z)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x,b,y,Z,k=n(80184);const w=["className","color","disableShrink","size","style","thickness","value","variant"];let S,j,I,P;const L=44,E=(0,g.F4)(S||(S=x||(x=(0,p.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),R=(0,g.F4)(j||(j=b||(b=(0,p.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),C=(0,c.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t["color".concat((0,a.Z)(n.color))]]}})((e=>{let{ownerState:t,theme:n}=e;return(0,o.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:(n.vars||n).palette[t.color].main})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&(0,g.iv)(I||(I=y||(y=(0,p.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),E)})),F=(0,c.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),M=(0,c.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t["circle".concat((0,a.Z)(n.variant))],n.disableShrink&&t.circleDisableShrink]}})((e=>{let{ownerState:t,theme:n}=e;return(0,o.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&!t.disableShrink&&(0,g.iv)(P||(P=Z||(Z=(0,p.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),R)})),D=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:s="primary",disableShrink:c=!1,size:u=40,style:p,thickness:g=3.6,value:m=0,variant:f="indeterminate"}=n,x=(0,r.Z)(n,w),b=(0,o.Z)({},n,{color:s,disableShrink:c,size:u,thickness:g,value:m,variant:f}),y=(e=>{const{classes:t,variant:n,color:r,disableShrink:o}=e,i={root:["root",n,"color".concat((0,a.Z)(r))],svg:["svg"],circle:["circle","circle".concat((0,a.Z)(n)),o&&"circleDisableShrink"]};return(0,l.Z)(i,v,t)})(b),Z={},S={},j={};if("determinate"===f){const e=2*Math.PI*((L-g)/2);Z.strokeDasharray=e.toFixed(3),j["aria-valuenow"]=Math.round(m),Z.strokeDashoffset="".concat(((100-m)/100*e).toFixed(3),"px"),S.transform="rotate(-90deg)"}return(0,k.jsx)(C,(0,o.Z)({className:(0,h.Z)(y.root,i),style:(0,o.Z)({width:u,height:u},S,p),ownerState:b,ref:t,role:"progressbar"},j,x,{children:(0,k.jsx)(F,{className:y.svg,ownerState:b,viewBox:"".concat(22," ").concat(22," ").concat(L," ").concat(L),children:(0,k.jsx)(M,{className:y.circle,style:Z,ownerState:b,cx:L,cy:L,r:(L-g)/2,fill:"none",strokeWidth:g})})}))}));function W(e){return(0,f.Z)("MuiLoadingButton",e)}const z=(0,m.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),N=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],A=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e)(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{["& .".concat(z.startIconLoadingStart)]:t.startIconLoadingStart},t.endIconLoadingEnd&&{["& .".concat(z.endIconLoadingEnd)]:t.endIconLoadingEnd}]})((e=>{let{ownerState:t,theme:n}=e;return(0,o.Z)({["& .".concat(z.startIconLoadingStart,", & .").concat(z.endIconLoadingEnd)]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),["&.".concat(z.loading)]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{["& .".concat(z.startIconLoadingStart,", & .").concat(z.endIconLoadingEnd)]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{["& .".concat(z.startIconLoadingStart,", & .").concat(z.endIconLoadingEnd)]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}})})),B=(0,c.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.loadingIndicator,t["loadingIndicator".concat((0,a.Z)(n.loadingPosition))]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,o.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{left:"small"===n.size?10:14},"start"===n.loadingPosition&&"text"===n.variant&&{left:6},"center"===n.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{right:"small"===n.size?10:14},"end"===n.loadingPosition&&"text"===n.variant&&{right:6},"start"===n.loadingPosition&&n.fullWidth&&{position:"relative",left:-10},"end"===n.loadingPosition&&n.fullWidth&&{position:"relative",right:-10})})),V=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiLoadingButton"}),{children:i,disabled:c=!1,id:u,loading:p=!1,loadingIndicator:h,loadingPosition:g="center",variant:m="text"}=n,f=(0,r.Z)(n,N),v=(0,s.Z)(u),x=null!=h?h:(0,k.jsx)(D,{"aria-labelledby":v,color:"inherit",size:16}),b=(0,o.Z)({},n,{disabled:c,loading:p,loadingIndicator:x,loadingPosition:g,variant:m}),y=(e=>{const{loading:t,loadingPosition:n,classes:r}=e,i={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,a.Z)(n))],endIcon:[t&&"endIconLoading".concat((0,a.Z)(n))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,a.Z)(n))]},s=(0,l.Z)(i,W,r);return(0,o.Z)({},r,s)})(b),Z=p?(0,k.jsx)(B,{className:y.loadingIndicator,ownerState:b,children:x}):null;return(0,k.jsxs)(A,(0,o.Z)({disabled:c||p,id:v,ref:t},f,{variant:m,classes:y,ownerState:b,children:["end"===b.loadingPosition?i:Z,"end"===b.loadingPosition?Z:i]}))}))},80043:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(63366),o=n(87462),i=n(72791),a=n(28182),s=n(94419),l=n(14036),c=n(66934),d=n(31402),u=n(23031),p=n(42071),h=n(20890),g=n(75878),m=n(21217);function f(e){return(0,m.Z)("MuiLink",e)}const v=(0,g.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var x=n(18529),b=n(12065);const y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=e=>{let{theme:t,ownerState:n}=e;const r=(e=>y[e]||e)(n.color),o=(0,x.DW)(t,"palette.".concat(r),!1)||n.color,i=(0,x.DW)(t,"palette.".concat(r,"Channel"));return"vars"in t&&i?"rgba(".concat(i," / 0.4)"):(0,b.Fq)(o,.4)};var k=n(80184);const w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],S=(0,c.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t["underline".concat((0,l.Z)(n.underline))],"button"===n.component&&t.button]}})((e=>{let{theme:t,ownerState:n}=e;return(0,o.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:Z({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(v.focusVisible)]:{outline:"auto"}})})),j=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:h="primary",component:g="a",onBlur:m,onFocus:v,TypographyClasses:x,underline:b="always",variant:Z="inherit",sx:j}=n,I=(0,r.Z)(n,w),{isFocusVisibleRef:P,onBlur:L,onFocus:E,ref:R}=(0,u.Z)(),[C,F]=i.useState(!1),M=(0,p.Z)(t,R),D=(0,o.Z)({},n,{color:h,component:g,focusVisible:C,underline:b,variant:Z}),W=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,i={root:["root","underline".concat((0,l.Z)(o)),"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(i,f,t)})(D);return(0,k.jsx)(S,(0,o.Z)({color:h,className:(0,a.Z)(W.root,c),classes:x,component:g,onBlur:e=>{L(e),!1===P.current&&F(!1),m&&m(e)},onFocus:e=>{E(e),!0===P.current&&F(!0),v&&v(e)},ref:M,ownerState:D,variant:Z,sx:[...Object.keys(y).includes(h)?[]:[{color:h}],...Array.isArray(j)?j:[j]]},I))}))},34559:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(72791),o=n(92602),i=n(87120),a=new Map;a.set("bold",(function(e){return r.createElement(r.Fragment,null,r.createElement("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),a.set("duotone",(function(e){return r.createElement(r.Fragment,null,r.createElement("polygon",{points:"160 208 80 128 160 48 160 208",opacity:"0.2"}),r.createElement("polygon",{points:"160 208 80 128 160 48 160 208",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),a.set("fill",(function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M163.1,40.6a8.4,8.4,0,0,0-8.8,1.7l-80,80a8.1,8.1,0,0,0,0,11.4l80,80A8.3,8.3,0,0,0,160,216a8.5,8.5,0,0,0,3.1-.6A8,8,0,0,0,168,208V48A8,8,0,0,0,163.1,40.6Z"}))})),a.set("light",(function(e){return r.createElement(r.Fragment,null,r.createElement("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),a.set("thin",(function(e){return r.createElement(r.Fragment,null,r.createElement("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),a.set("regular",(function(e){return r.createElement(r.Fragment,null,r.createElement("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var s=function(e,t){return(0,o._)(e,t,a)},l=(0,r.forwardRef)((function(e,t){return r.createElement(i.Z,Object.assign({ref:t},e,{renderPath:s}))}));l.displayName="CaretLeft";const c=l}}]);
//# sourceMappingURL=600.402c708d.chunk.js.map