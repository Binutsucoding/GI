"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[977],{27977:(e,t,n)=>{n.r(t),n.d(t,{Conversation:()=>K,default:()=>N});var i=n(64554),r=n(53767),o=n(72791),s=n(13967),a=n(27578),c=n(66934),l=n(84697),d=n(93044),x=n(20890),p=n(13400),u=n(94721),h=n(65422),m=n(60627),g=n(33528),j=n(19165),Z=n(84059),b=n(40703),f=n(89865),v=(n(10155),n(29998)),k=n(84360),y=n(59434),w=n(69672),C=n(7867),F=n(80184);const _=(0,c.ZP)(l.Z)((e=>{let{theme:t}=e;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(t.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}})),R=[{title:"Contact info"},{title:"Mute notifications"},{title:"Clear messages"},{title:"Delete chat"}],I=()=>{const e=(0,y.I0)(),t=(0,v.Z)("between","md","xs","sm"),n=(0,s.Z)(),{current_conversation:a}=(0,y.v9)((e=>e.conversation.direct_chat)),[c,l]=o.useState(null),I=Boolean(c),S=()=>{l(null)};return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(i.Z,{p:2,width:"100%",sx:{backgroundColor:"light"===n.palette.mode?"#F8FAFF":n.palette.background,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:(0,F.jsxs)(r.Z,{alignItems:"center",direction:"row",sx:{width:"100%",height:"100%"},justifyContent:"space-between",children:[(0,F.jsxs)(r.Z,{onClick:()=>{e((0,k.Xk)())},spacing:2,direction:"row",children:[(0,F.jsx)(i.Z,{children:(0,F.jsx)(_,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,F.jsx)(d.Z,{alt:null===a||void 0===a?void 0:a.name,src:null===a||void 0===a?void 0:a.img})})}),(0,F.jsxs)(r.Z,{spacing:.2,children:[(0,F.jsx)(x.Z,{variant:"subtitle2",children:null===a||void 0===a?void 0:a.name}),(0,F.jsx)(x.Z,{variant:"caption",children:"Online"})]})]}),(0,F.jsxs)(r.Z,{direction:"row",alignItems:"center",spacing:t?1:3,children:[(0,F.jsx)(p.Z,{onClick:()=>{e((0,C.a8)(a.user_id))},children:(0,F.jsx)(j.Z,{})}),(0,F.jsx)(p.Z,{onClick:()=>{e((0,w.Vf)(a.user_id))},children:(0,F.jsx)(Z.Z,{})}),!t&&(0,F.jsx)(p.Z,{children:(0,F.jsx)(b.Z,{})}),(0,F.jsx)(u.Z,{orientation:"vertical",flexItem:!0}),(0,F.jsx)(p.Z,{id:"conversation-positioned-button","aria-controls":I?"conversation-positioned-menu":void 0,"aria-haspopup":"true","aria-expanded":I?"true":void 0,onClick:e=>{l(e.currentTarget)},children:(0,F.jsx)(f.Z,{})}),(0,F.jsx)(h.Z,{MenuListProps:{"aria-labelledby":"fade-button"},TransitionComponent:m.Z,id:"conversation-positioned-menu","aria-labelledby":"conversation-positioned-button",anchorEl:c,open:I,onClose:S,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:(0,F.jsx)(i.Z,{p:1,children:(0,F.jsx)(r.Z,{spacing:1,children:R.map((e=>(0,F.jsxs)(g.Z,{onClick:S,children:[(0,F.jsx)(r.Z,{sx:{minWidth:100},direction:"row",alignItems:"center",justifyContent:"space-between",children:(0,F.jsx)("span",{children:e.title})})," "]})))})})})]})]})})})};var S=n(43138),z=n(20068),P=n(49877),T=n(63466),L=n(76526),q=n(46206),E=n(22413),M=n(6880),A=n(59134),B=n(85355),O=n(9585),V=n(84306),W=n(26638),H=n(24122),D=n(8250);const G=(0,c.ZP)(S.Z)((e=>{let{theme:t}=e;return{"& .MuiInputBase-input":{paddingTop:"12px !important",paddingBottom:"12px !important"}}})),Q=[{color:"#4da5fe",icon:(0,F.jsx)(L.Z,{size:24}),y:102,title:"Photo/Video"},{color:"#1b8cfe",icon:(0,F.jsx)(q.Z,{size:24}),y:172,title:"Stickers"},{color:"#0172e4",icon:(0,F.jsx)(E.Z,{size:24}),y:242,title:"Image"},{color:"#0159b2",icon:(0,F.jsx)(M.Z,{size:24}),y:312,title:"Document"},{color:"#013f7f",icon:(0,F.jsx)(A.Z,{size:24}),y:382,title:"Contact"}],Y=e=>{let{openPicker:t,setOpenPicker:n,setValue:i,value:s,inputRef:a}=e;const[c,l]=o.useState(!1);return(0,F.jsx)(G,{inputRef:a,value:s,onChange:e=>{i(e.target.value)},fullWidth:!0,placeholder:"Write a message...",variant:"filled",InputProps:{disableUnderline:!0,startAdornment:(0,F.jsxs)(r.Z,{sx:{width:"max-content"},children:[(0,F.jsx)(r.Z,{sx:{position:"relative",display:c?"inline-block":"none"},children:Q.map((e=>(0,F.jsx)(z.Z,{placement:"right",title:e.title,children:(0,F.jsx)(P.Z,{onClick:()=>{l(!c)},sx:{position:"absolute",top:-e.y,backgroundColor:e.color},"aria-label":"add",children:e.icon})})))}),(0,F.jsx)(T.Z,{children:(0,F.jsx)(p.Z,{onClick:()=>{l(!c)},children:(0,F.jsx)(B.Z,{})})})]}),endAdornment:(0,F.jsx)(r.Z,{sx:{position:"relative"},children:(0,F.jsx)(T.Z,{children:(0,F.jsx)(p.Z,{onClick:()=>{n(!t)},children:(0,F.jsx)(O.Z,{})})})})}})};function U(e){return/(https?:\/\/[^\s]+)/g.test(e)}const X=()=>{const e=(0,s.Z)(),{current_conversation:t}=(0,y.v9)((e=>e.conversation.direct_chat)),n=window.localStorage.getItem("user_id"),a=(0,v.Z)("between","md","xs","sm"),{sideBar:c,room_id:l}=(0,y.v9)((e=>e.app)),[d,x]=o.useState(!1),[u,h]=(0,o.useState)(""),m=(0,o.useRef)(null);return(0,F.jsx)(i.Z,{sx:{position:"relative",backgroundColor:"transparent !important"},children:(0,F.jsx)(i.Z,{p:a?1:2,width:"100%",sx:{backgroundColor:"light"===e.palette.mode?"#F8FAFF":e.palette.background,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:(0,F.jsxs)(r.Z,{direction:"row",alignItems:"center",spacing:a?1:3,children:[(0,F.jsxs)(r.Z,{sx:{width:"100%"},children:[(0,F.jsx)(i.Z,{style:{zIndex:10,position:"fixed",display:d?"inline":"none",bottom:81,right:a?20:c.open?420:100},children:(0,F.jsx)(H.Z,{theme:e.palette.mode,data:W,onEmojiSelect:e=>{!function(e){const t=m.current;if(t){const n=t.selectionStart,i=t.selectionEnd;h(u.substring(0,n)+e+u.substring(i)),t.selectionStart=t.selectionEnd=n+1}}(e.native)}})}),(0,F.jsx)(Y,{inputRef:m,value:u,setValue:h,openPicker:d,setOpenPicker:x})]}),(0,F.jsx)(i.Z,{sx:{height:48,width:48,backgroundColor:e.palette.primary.main,borderRadius:1.5},children:(0,F.jsx)(r.Z,{sx:{height:"100%"},alignItems:"center",justifyContent:"center",children:(0,F.jsx)(p.Z,{onClick:()=>{var e;D.W.emit("text_message",{message:(e=u,e.replace(/(https?:\/\/[^\s]+)/g,(e=>'<a href="'.concat(e,'" target="_blank">').concat(e,"</a>")))),conversation_id:l,from:n,to:t.user_id,type:U(u)?"Link":"Text"})},children:(0,F.jsx)(V.Z,{color:"#ffffff"})})})})]})})})};n(53935);var $=n(78203),J=n(94984);const K=e=>{let{isMobile:t,menu:n}=e;const s=(0,y.I0)(),{conversations:a,current_messages:c}=(0,y.v9)((e=>e.conversation.direct_chat)),{room_id:l}=(0,y.v9)((e=>e.app));return(0,o.useEffect)((()=>{const e=a.find((e=>(null===e||void 0===e?void 0:e.id)===l));D.W.emit("get_messages",{conversation_id:null===e||void 0===e?void 0:e.id},(e=>{console.log(e,"List of messages"),s((0,J.R$)({messages:e}))})),s((0,J.Aq)(e))}),[]),(0,F.jsx)(i.Z,{p:t?1:3,children:(0,F.jsx)(r.Z,{spacing:3,children:c.map(((e,t)=>{switch(e.type){case"divider":return(0,F.jsx)($.TY,{el:e});case"msg":switch(e.subtype){case"img":return(0,F.jsx)($.y1,{el:e,menu:n});case"doc":return(0,F.jsx)($.RL,{el:e,menu:n});case"Link":return(0,F.jsx)($.V5,{el:e,menu:n});case"reply":return(0,F.jsx)($.Q8,{el:e,menu:n});default:return(0,F.jsx)($.w8,{el:e,menu:n})}default:return(0,F.jsx)(F.Fragment,{})}}))})})},N=()=>{const e=(0,v.Z)("between","md","xs","sm"),t=(0,s.Z)(),n=(0,o.useRef)(null),{current_messages:c}=(0,y.v9)((e=>e.conversation.direct_chat));return(0,o.useEffect)((()=>{n.current.scrollTop=n.current.scrollHeight}),[c]),(0,F.jsxs)(r.Z,{height:"100%",maxHeight:"100vh",width:e?"100vw":"auto",children:[(0,F.jsx)(I,{}),(0,F.jsx)(i.Z,{ref:n,width:"100%",sx:{position:"relative",flexGrow:1,overflow:"scroll",backgroundColor:"light"===t.palette.mode?"#F0F4FA":t.palette.background,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:(0,F.jsx)(a.l,{timeout:500,clickOnTrack:!1,children:(0,F.jsx)(K,{menu:!0,isMobile:e})})}),(0,F.jsx)(X,{})]})}},78203:(e,t,n)=>{n.d(t,{Q8:()=>w,RL:()=>k,TY:()=>C,V5:()=>y,w8:()=>f,y1:()=>v});var i=n(72791),r=n(65422),o=n(53767),s=n(33528),a=n(64554),c=n(20890),l=n(13400),d=n(94721),x=n(13967),p=n(12065),u=n(97863),h=n(76526),m=n(27501),g=n(53935),j=(n(50231),n(75647)),Z=n(80184);const b=()=>{const[e,t]=i.useState(null),n=Boolean(e),a=()=>{t(null)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(u.Z,{size:20,id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:e=>{t(e.currentTarget)}}),(0,Z.jsx)(r.Z,{id:"basic-menu",anchorEl:e,open:n,onClose:a,MenuListProps:{"aria-labelledby":"basic-button"},children:(0,Z.jsx)(o.Z,{spacing:1,px:1,children:g.GF.map((e=>(0,Z.jsx)(s.Z,{onClick:a,children:e.title})))})})]})},f=e=>{let{el:t,menu:n}=e;const i=(0,x.Z)();return(0,Z.jsxs)(o.Z,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,Z.jsx)(a.Z,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.Fq)(i.palette.background.default,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,Z.jsx)(c.Z,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:t.message})}),n&&(0,Z.jsx)(b,{})]})},v=e=>{let{el:t,menu:n}=e;const i=(0,x.Z)();return(0,Z.jsxs)(o.Z,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,Z.jsx)(a.Z,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.Fq)(i.palette.background.default,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,Z.jsxs)(o.Z,{spacing:1,children:[(0,Z.jsx)("img",{src:t.img,alt:t.message,style:{maxHeight:210,borderRadius:"10px"}}),(0,Z.jsx)(c.Z,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:t.message})]})}),n&&(0,Z.jsx)(b,{})]})},k=e=>{let{el:t,menu:n}=e;const i=(0,x.Z)();return(0,Z.jsxs)(o.Z,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,Z.jsx)(a.Z,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.Fq)(i.palette.background.default,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,Z.jsxs)(o.Z,{spacing:2,children:[(0,Z.jsxs)(o.Z,{p:2,direction:"row",spacing:3,alignItems:"center",sx:{backgroundColor:i.palette.background.paper,borderRadius:1},children:[(0,Z.jsx)(h.Z,{size:48}),(0,Z.jsx)(c.Z,{variant:"caption",children:"Abstract.png"}),(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(m.Z,{})})]}),(0,Z.jsx)(c.Z,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:t.message})]})}),n&&(0,Z.jsx)(b,{})]})},y=e=>{let{el:t,menu:n}=e;const i=(0,x.Z)();return(0,Z.jsxs)(o.Z,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,Z.jsx)(a.Z,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.Fq)(i.palette.background.default,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,Z.jsxs)(o.Z,{spacing:2,children:[(0,Z.jsx)(o.Z,{p:2,direction:"column",spacing:3,alignItems:"start",sx:{backgroundColor:i.palette.background.paper,borderRadius:1},children:(0,Z.jsx)(o.Z,{direction:"column",spacing:2,children:(0,Z.jsx)(j.Z,{width:"300px",isDark:!0,url:"https://youtu.be/xoWxBR34qLE"})})}),(0,Z.jsx)(c.Z,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:(0,Z.jsx)("div",{dangerouslySetInnerHTML:{__html:t.message}})})]})}),n&&(0,Z.jsx)(b,{})]})},w=e=>{let{el:t,menu:n}=e;const i=(0,x.Z)();return(0,Z.jsxs)(o.Z,{direction:"row",justifyContent:t.incoming?"start":"end",children:[(0,Z.jsx)(a.Z,{px:1.5,py:1.5,sx:{backgroundColor:t.incoming?(0,p.Fq)(i.palette.background.paper,1):i.palette.primary.main,borderRadius:1.5,width:"max-content"},children:(0,Z.jsxs)(o.Z,{spacing:2,children:[(0,Z.jsx)(o.Z,{p:2,direction:"column",spacing:3,alignItems:"center",sx:{backgroundColor:(0,p.Fq)(i.palette.background.paper,1),borderRadius:1},children:(0,Z.jsx)(c.Z,{variant:"body2",color:i.palette.text,children:t.message})}),(0,Z.jsx)(c.Z,{variant:"body2",color:t.incoming?i.palette.text:"#fff",children:t.reply})]})}),n&&(0,Z.jsx)(b,{})]})},C=e=>{let{el:t}=e;const n=(0,x.Z)();return(0,Z.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(d.Z,{width:"46%"}),(0,Z.jsx)(c.Z,{variant:"caption",sx:{color:n.palette.text},children:t.text}),(0,Z.jsx)(d.Z,{width:"46%"})]})}}}]);
//# sourceMappingURL=977.54afe838.chunk.js.map