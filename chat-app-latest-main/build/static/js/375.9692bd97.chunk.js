"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[375],{60682:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(29388),s=r(72791),i={width:350,overflow:"hidden",borderRadius:"6px",display:"block"},o={width:"100%",display:"block",overflow:"hidden",borderRadius:"8px"};const a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={height:0},t.mounted=!1,t.onMessage=function(e){var r=e.data;if(t.mounted&&"string"===typeof r)try{var n=JSON.parse(r);if("resize_imgur"!==n.message)return;if("string"!==typeof n.href)return;if(n.href!==t.src())return;if("number"!==typeof n.height)return;t.setState({height:n.height})}catch(s){}},t}return(0,n.__extends)(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,window.addEventListener("message",this.onMessage)},t.prototype.componentWillUnmount=function(){this.mounted=!1,window.removeEventListener("message",this.onMessage)},t.prototype.src=function(){return"https://imgur.com/a/".concat(this.props.id,"/embed?pub=true&w=340")},t.prototype.render=function(){var e=this.state.height||0;return this.props.renderWrap(s.createElement("div",{style:(0,n.__assign)((0,n.__assign)({},i),{border:e?"1px solid #E5E9F2":""})},s.createElement("iframe",{scrolling:"no",frameBorder:"0",src:this.src(),style:(0,n.__assign)((0,n.__assign)({},o),{height:e})})))},t}(s.Component)}}]);
//# sourceMappingURL=375.9692bd97.chunk.js.map