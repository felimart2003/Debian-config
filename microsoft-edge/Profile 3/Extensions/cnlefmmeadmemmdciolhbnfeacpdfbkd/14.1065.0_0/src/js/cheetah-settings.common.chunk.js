(self.webpackChunk=self.webpackChunk||[]).push([[6077],{101:(e,t,n)=>{n.d(t,{l:()=>a});var a,o=n(50693),i=n(82900),l=n(74923),r=n(18775),s=n(31099),c=n(50858),d=n(55818),m=n(71346),u=n(27378),p=n(95300),g=n(60797),b=n(66310),h=n(24209),v=n(85089),E=n(49708),f=n(85985),y=n(76974),k=n(98403),w=n(17343),C=n(93508),S=n(77176),x=n(2844),A=n(41398),N=n(19751),T=n(18625),_=n(5114),B=n(19962),L=n(18208),D=n(73852);!function(e){var t;!function(e){e.nextLevel=function(e,t){return{rect:e,level:t+1}}}(e.State||(e.State={})),function(e){e.empty={top:0,bottom:0}}(e.Padding||(e.Padding={})),function(e){e.root="root",e.inherit="inherit"}(t=e.ContainerType||(e.ContainerType={})),e.withViewportContainer=function(e,a){return function(x){(0,s._)(N,x);var A=(0,m._)(N);function N(){var e;return(0,i._)(this,N),e=A.apply(this,arguments),(0,r._)((0,o._)(e),"_viewportEl",new p.X(_.none)),(0,r._)((0,o._)(e),"_onMount",(function(t){e._viewportEl.next(_.fromNullable(t)),e.props.onMount&&t&&e.props.onMount(t)})),e}return(0,l._)(N,[{key:"render",value:function(){var o=this.props,i=o.name,l=o.children,r=this._viewportEl.pipe(g.oA,b.w((function(e){return h.T(v.Qr,E.R(e,"transitionend").pipe(f.h((function(t){return t.target===e}))),y.of(!0).pipe(b.w(k.b2.rafScheduler))).pipe(w.h(e),C.O(e),S.U(B.UL.fromEl))}))),s=a.type===t.root?n:L;return u.createElement(e,(0,d._)((0,c._)({},this.props),{onMount:this._onMount,name:i}),u.createElement(s,{viewport:r,name:i},l))}}]),N}(u.Component)};var n=e.RootVirtualContainer=function(e){var t=e.viewport,n=e.viewportPadding,o=void 0===n?y.of(a.Padding.empty):n,i=e.name,l=e.children,r=u.useContext(a.Context);return u.createElement(R.Provider,{key:K(i),value:x.aj(t,o,G).pipe(A.M(r.pipe(S.U((function(e){return e.level}))),a.State.nextLevel),N.shareReplay({bufferSize:1,refCount:!0}))},l)},L=e.InheritVirtualContainer=function(e){var t=e.viewport,n=e.viewportPadding,o=void 0===n?y.of(B.UL.empty):n,i=e.name,l=e.children,r=u.useContext(a.Context);return u.createElement(R.Provider,{key:K(i),value:x.aj(r.pipe(S.U((function(e){return e.rect}))),x.aj(t||r.pipe(S.U((function(e){return e.rect}))),o,G),B.UL.intersection).pipe(S.U(_.getOrElse((function(){return D.C8.Logging.getLogger("InheritVirtualContainer").warn("Got an empty rect for inherit viewport",{name:i}),B.UL.empty}))),A.M(r.pipe(S.U((function(e){return e.level}))),a.State.nextLevel),N.shareReplay({bufferSize:1,refCount:!0}))},l)},P=T.P((function(){return v.Qr.pipe(w.h(document.body),C.O(document.body),S.U(B.UL.fromEl),S.U((function(e){return{rect:e,level:0}})))})).pipe(N.shareReplay({bufferSize:1,refCount:!0})),R=e.Context=u.createContext(P)}(a||(a={}));var G=function(e,t){return{top:e.top+t.top,bottom:e.bottom-t.bottom,height:e.height-t.top-t.bottom,left:e.left,right:e.right,width:e.width}},K=function(e){return"viewportProvider".concat(L._A(e))}},64757:(e,t,n)=>{n.d(t,{L_:()=>g,RZ:()=>b,zx:()=>p});var a=n(50858),o=n(55818),i=n(27378),l=n(8543),r=n(54001),s=n(4870),c=n(86732),d=n(1509),m=n(26215),u=n(94632);function p(e){return i.createElement(m.Y,g(e,u.LI))}function g(e,t){var n=(0,r.Sh)(e.className,t).className;return(0,o._)((0,a._)({},e),{className:n})}!function(e){var t=e.Animated=function(e){return i.createElement(m.Y,(0,o._)((0,a._)({},e),{animationMode:Boolean(e.animationMode)?e.animationMode:c.m.FromClickPoint}))};e.Primary=function(e){return i.createElement(t,(0,a._)({styleType:d.Z.Type.Button},g(e,u.T$)))},e.Secondary=function(e){return i.createElement(t,(0,a._)({styleType:d.Z.Type.Button},g(e,u.BD)))},e.Ghost=function(e){return i.createElement(t,(0,a._)({styleType:d.Z.Type.Button},g(e,u.fk)))},e.Tertiary=function(e){return i.createElement(t,(0,a._)({styleType:d.Z.Type.Base},g(e,u.UF)))},e.Flat=function(e){return i.createElement(t,g(e,u.$H))},e.White=function(e){return i.createElement(t,g(e,u.ix))},e.SidebarFlat=function(e){return i.createElement(m.Y,(0,a._)({styleType:d.Z.Type.H3Legacy},g(e,u.HN)))},e.Caps=function(e){return i.createElement(m.Y,(0,a._)({styleType:d.Z.Type.H3Legacy},g(e,u.Mp)))},e.Group=function(e){var t=e.children,n=e.className,s=e.align,c=void 0===s?"horizontal":s,d=e.sticky,m=e.name;return i.createElement(l.F.div,(0,o._)((0,a._)({role:"group"},(0,r.Sh)(n,"horizontal"===c?!0===d?u.vD:u.ru:u.oc)),{"data-name":m}),t)}}(p||(p={}));var b=function(e){var t=e.title,n=e.titleAlign,a=e.buttonClass,o=e.iconClass,c=e.iconWidth,d=e.tooltipClass;return i.createElement(p,{name:"info-button","aria-label":t,tag:m.X.div,title:i.createElement(l.F.div,(0,r.Sh)(u.bC,d),i.createElement("p",null,t)),titleAlign:n,className:a},i.createElement(s.JO.Info,{width:c,className:o}))}},50357:(e,t,n)=>{n.r(t),n.d(t,{SettingsView:()=>k});var a=n(27378),o=n(85441),i=n(8543),l=n(3736),r=n(31212),s=n(9205),c=n(50445),d=n(21928),m=n(56913),u=n(40303),p=n(33394),g=n(22484),b=n(95948),h=n(44724);const v=e=>(0,b.Lt)(e)||(0,h.c)(e)||(e=>e.isGateEnabled(s.K.KnowledgeHubSlack)||e.isGateEnabled(s.K.KnowledgeHubWord))(e);var E=n(74344),f=n(33678),y=n(864);const k=({assistantSettingsViewModel:e,experimentClient:t,openSubscriptionDialog:n,getEnv:b})=>{const{domain:h,actions:k,state:w}=e,[C,S]=a.useState(!!w.view("page","enabled").get()),x={checked:C,update:S},A=a.useMemo((()=>new y.C((0,o.nD)(b()))),[]);return a.createElement(f.a.Context.Provider,{value:A},a.createElement(i.F.div,{role:"region","aria-label":"Grammarly settings"},w.view((({user:e,page:n,dynamicConfig:o,dapi:i})=>a.createElement(l.a,{actions:k,config:{enabled:!0,domain:h},settings:n,user:e,dapi:i,dynamicConfig:o,siteCategory:u.y.other,openGBLanding:e=>{const t=(0,p.Z4)(e,"gbExtensionSettingsAssistant");self.open(t),g.J.getGBButtonClick("gbExtAssistantSettings","ExploreGrammarlyBusiness")},isReportBugFeatureAllowed:!t.isGateEnabled(s.K.HideReportBugByGrammarlyEmployeeFeature),openReportBugForm:e=>{self.open(d.WY(e))},openUrl:e=>self.open(e),showGBUpHook:(0,m.i7)(),placement:"assistant",showCitationBuilderToggle:!1,siteSwitcherChecked:x,isIndianEnglishDialectSupported:t.isGateEnabled(s.K.IndianEnglishDialect)||t.isGateEnabled(s.K.IndianEnglishDialectInternal),isAutoApplySupported:t.isGateEnabled(s.K.SuggestionDeliveryAutoApply),downloadDebugReports:()=>c.B.download(),isKeyboardAccessible:t.isGateEnabled(s.K.ExtensionA11yKeyboardNavigation),isCheetahSupported:!0,showSerengetiFeatureToggle:t.isGateEnabled(s.K.KnowledgeEngineSearchV2Alpha),isKnowledgeHubSupported:v(t),isPiiDetectionSupported:(0,E.z)(t,e)}))),w.view((({user:e})=>a.createElement(r.Z,{user:e,openSubscriptionDialog:n,isAssistant:!0})))))}},9172:(e,t,n)=>{if(n.d(t,{FU:()=>g,OY:()=>S,Td:()=>p,UI:()=>h,XG:()=>C,ab:()=>f,eC:()=>m,ex:()=>k,fo:()=>E,gO:()=>s,r4:()=>v,xq:()=>u}),1388==n.j)var a=n(57050);var o=n(7992),i=n(48015);if(1388==n.j)var l=n(5114);if(1388==n.j)var r=n(55415);function s(e,t){var n,a,o;const i=null===(o=null===(a=null===(n=null==t?void 0:t.citationBuilder)||void 0===n?void 0:n.domains)||void 0===a?void 0:a[e])||void 0===o?void 0:o.disabled;return void 0!==i?!i:void 0}function c(e,t){return f(t).some((t=>new RegExp(t.domain).test(e)))}function d(e){var t,n;return!(null!==(n=null===(t=e.citationBuilder)||void 0===t?void 0:t.disabled)&&void 0!==n&&n)}function m(e,t){return f(t).some((t=>{const n=new RegExp(t.domain),a=new RegExp(t.pathname);return n.test(e.hostname)&&a.test(e.pathname)}))}function u(e){return l.tryCatch((()=>{const t=new URL(e).hostname.split(".");return t.slice(t.length-2).join(".")}))}function p(e,t,n,a){return n?function(e,t,n){const a=s(e,n);return d(t)&&(void 0===a&&c(e,t)||!0===a)}(e,t,a):function(e,t,n){return d(t)&&c(e,t)&&!1!==s(e,n)}(e,t,a)}function g(e,t){return f(t).some((t=>new RegExp(t.domain).test(e)&&!0===t.reparse))}const b={verticalLocation:"bottom",horizontalLocation:"left",offsetX:17,offsetY:32};function h(e,t){var n;return(null===(n=f(t).find((t=>new RegExp(t.domain).test(e))))||void 0===n?void 0:n.buttonPosition)||b}function v(e,t,n){return d(t)&&(n?!function(e,t){var n,a;return(null!==(a=null===(n=t.citationBuilder)||void 0===n?void 0:n.blockedDomains)&&void 0!==a?a:[]).includes(e)}(e,t):c(e,t))}function E(e,t){var n,a,o;const i=new Set(null!==(a=null===(n=e.citationBuilder)||void 0===n?void 0:n.blockedDomains)&&void 0!==a?a:[]);return Object.entries((null===(o=t.citationBuilder)||void 0===o?void 0:o.domains)||{}).filter((([,e])=>void 0!==e&&!e.disabled)).filter((([e])=>{return t=e,!i.has(t);var t})).map((([e])=>e))}function f(e){var t,n;return null!==(n=null===(t=e.citationBuilder)||void 0===t?void 0:t.sources)&&void 0!==n?n:[]}const y=(0,i.hz)((()=>{const e=document.location.href;return(0,o.KK)(e)})),k=(0,i.hz)((e=>{const t=document.location.href;return{url:t,domain:(0,o.KK)(t),isUrlAllowlisted:m(document.location,e)}})),w=(0,i.hz)((()=>i.iy.create()));function C(e){const t=w(),n=y();return(0,a.zG)(e,r.H6("citeCopyButtonClick","citeCopyIntextClick","citePopupButtonDisable","citePopupButtonShow","citePopupEditClick","citePopupButtonClick","citePopupEditSuccess","citePopupMissingInfoShow","citePopupMissingInfoFormShow","feedbackSentButtonClick","citePopupAddMissingClick"),(e=>({...e,domain:n,sessionId:t})))}function S(e,t){return e.manualInvocation&&!0===s(t.domain,t)}},38296:(e,t,n)=>{n.d(t,{V:()=>i});var a=n(9205),o=n(9629);function i(e){return e.isGateEnabled(a.K.GOSRollout)||"test"===e.getTreatment(o.p.GOSRollout)}},44724:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(9205);const o=e=>e.isGateEnabled(a.K.KnowledgeHubGmail)},73385:(e,t,n)=>{n.d(t,{v:()=>l});var a=n(57050),o=n(27378),i=n(89872);const l=({browser:e,className:t,title:n="BETA",color:l="blue"})=>"safari"!==e?o.createElement(i.C,{title:n,className:t,kind:"blue"===l?"primary":"green"===l?"success":(0,a.Rz)(l)}):null},57226:(e,t,n)=>{n.d(t,{d:()=>o});var a=n(27378);const o=()=>a.createElement("svg",{width:"11",height:"12",viewBox:"0 0 11 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M4 1H2.5C1.39543 1 0.5 1.89543 0.5 3V9C0.5 10.1046 1.39543 11 2.5 11H8.5C9.60457 11 10.5 10.1046 10.5 9V7.5M5.5 6L10.5 1M10.5 1H6.5M10.5 1V5",stroke:"#4A6EE0",strokeLinecap:"round"}))},65515:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(27378),o=n(62369),i=n(46354),l=n(18657),r=n(54001),s=n(32502),c=n.n(s);const d=({onClick:e,dataGrammarlyPart:t="unlock-premium-button",className:n})=>a.createElement(o.z,{kind:"premium",onClick:e,dataGrammarlyPart:t,...(0,r.Sh)(c().premiumButton,n)},a.createElement(i.J,{icon:l.O,variant:"premium",accessibilityLabel:"",size:"large"}),a.createElement("span",null,"Unlock Premium"))},63260:(e,t,n)=>{n.d(t,{R:()=>d});var a=n(27378),o=n(1386),i=n(64757),l=n(6726),r=n(93265),s=n(10926),c=n(80394);const d=({lock:e={message:"",isLocked:!1},dialect:t})=>a.createElement("div",{className:c.label},e.isLocked&&a.createElement(l.u,{message:e.message},a.createElement("div",{className:c.lockIconWrapper},a.createElement(o.N,null))),a.createElement(i.zx.White,{name:"dialect.box",style:{padding:"0"},disabled:e.isLocked},a.createElement("div",{className:`${c.selected} ${e.isLocked?c.disabled:""}`},a.createElement(s.G,{dialect:t,className:c.option}),a.createElement(r.pL,null))))},10926:(e,t,n)=>{n.d(t,{G:()=>s});var a=n(27378),o=n(93265),i=n(65479),l=n(18208);const r={american:a.createElement(o.UE,null),australian:a.createElement(o.aE,null),british:a.createElement(o.M8,null),canadian:a.createElement(o._P,null),indian:a.createElement(o.kj,null)},s=({dialect:e,className:t})=>a.createElement(a.Fragment,null,r[e],a.createElement("span",{"data-test-attr":`dialect_${e}`,className:`${i.option} ${null!=t?t:""}`},l.kC(e)+" English"))},98427:(e,t,n)=>{n.d(t,{X:()=>c});var a=n(27378),o=n(64757),i=n(18813),l=n(63260),r=n(44103),s=n(10926);class c extends a.Component{render(){var e;const t=this.props.dropdownOnTop?{customPosition:{top:`-${32*(this.props.dialects.length-1)+4}px`,left:"0"},vAlign:"top"}:{customPosition:{top:"36px",left:"0"}};return(null===(e=this.props.lock)||void 0===e?void 0:e.isLocked)?a.createElement(l.R,{lock:this.props.lock,dialect:this.props.dialect}):a.createElement(i.L,{...t,showDelay:0,closeDelay:150,appearanceBehavior:"mouseClick",name:"dialect",label:a.createElement(l.R,{dialect:this.props.dialect})},this.props.dialects.filter((e=>e!==this.props.dialect)).map((e=>a.createElement(o.zx.Flat,{name:e,key:e,onClick:t=>(null==t?void 0:t.isTrusted)&&this.props.onSetDialect(e)},a.createElement("div",{className:r.option},a.createElement(s.G,{className:r.label,dialect:e}))))))}}},93265:(e,t,n)=>{n.d(t,{M8:()=>s,UE:()=>l,_P:()=>c,aE:()=>r,kj:()=>d,pL:()=>i});var a=n(27378),o=n(34917);const i=()=>a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M13.9207 15L15.5 17.2562L17.0793 15H13.9207Z",stroke:"#6D758D",strokeWidth:"2"})),l=()=>a.createElement("div",{className:o.american,role:"presentation"}),r=()=>a.createElement("div",{className:o.australian,role:"presentation"}),s=()=>a.createElement("div",{className:o.british,role:"presentation"}),c=()=>a.createElement("div",{className:o.canadian,role:"presentation"}),d=()=>a.createElement("div",{className:o.indian,role:"presentation"})},34601:(e,t,n)=>{n.d(t,{w:()=>r});var a=n(27378),o=n(48015),i=n(6726),l=n(50945);const r=({children:e,blocked:t,wrapperClassName:n,disabledText:r="Sign in to use this feature"})=>t?a.createElement(i.u,{message:r,position:"top"},a.createElement("div",{className:n},a.createElement("div",{className:l.hover_blocker,onClick:o.EI,onDoubleClick:o.EI},e))):a.createElement(a.Fragment,null,e)},9234:(e,t,n)=>{n.d(t,{C:()=>c});var a=n(27378),o=n(48015),i=n(98716),l=n(34601),r=n(56913),s=n(54001);class c extends a.Component{constructor(){super(...arguments),this.handleChange=e=>{(this.props.skipTrustedCheck||e.isTrusted)&&this.props.onChange(e)}}render(){return a.createElement("div",{...(0,s.Sh)(this.props.extraClassName,i.setting_item,this.props.disabled&&i.disabled)},a.createElement("label",{...(0,s.Sh)(i.select_checkbox,this.props.centered&&i.centered,this.props.isKeyboardAccessible&&i.keyboard_accessible),"data-grammarly-part":this.props.dataGrammarlyPart},a.createElement("div",{className:i.select_children},this.props.children,this.props.beta&&a.createElement("span",{className:(0,r.G6)()?i.new:i.beta}),this.props.alpha&&a.createElement("span",{className:(0,r.G6)()?i.new:i.alpha}),this.props.new&&a.createElement("span",{className:i.new})),a.createElement(l.w,{wrapperClassName:i.checkbox_control_wrapper,blocked:this.props.disabled,disabledText:this.props.disabledText}),a.createElement("input",{className:i.checkbox,onChange:this.props.disabled?o.EI:this.handleChange,checked:this.props.checked,type:"checkbox"}),a.createElement("div",{...(0,s.Sh)(i.checkbox_check,this.props.grayOut&&i.grayOut,this.props.checked?i.on:i.off)},a.createElement("div",{...(0,s.Sh)(i.on_off)},this.props.checked?"ON":"OFF"),a.createElement("div",{className:i.checkbox_check_round}))))}}},88326:(e,t,n)=>{n.d(t,{W:()=>s});var a=n(20641),o=n(27378),i=n(49405),l=n(9234),r=n(11250);class s extends o.Component{constructor(){super(...arguments),this.onEnableDefsClick=e=>{const{toggleDefs:t}=this.props,n=e.target.checked;t(n),r.J.definitionToggleClick(n?"on":"off"),(0,a.Tb)().toggleExtensionDefs(n)}}render(){const{enabledDefs:e,disabled:t}=this.props;return o.createElement(l.C,{onChange:this.onEnableDefsClick,checked:e,extraClassName:i.def_switcher,dataGrammarlyPart:"definitionAndSynonymsSwitcher",disabled:t,skipTrustedCheck:this.props.skipTrustedCheck},"Show definitions and synonyms ",o.createElement("br",null),"via double clicks (all sites)")}}},24627:(e,t,n)=>{n.d(t,{m:()=>c});var a=n(27378),o=n(17347),i=n(98427),l=n(34601),r=n(54001),s=n(11250);class c extends a.Component{constructor(){super(...arguments),this.setDialect=e=>{const{changeStrongDialect:t,dialectWeak:n}=this.props;t(e);const a=e+"English";s.J.languageSettingUpdate(a,"user",n&&e===n)}}render(){const e=this.props.dialectStrong||this.props.dialectWeak||"american";return a.createElement("div",{...(0,r.Sh)(o.line,this.props.disabled&&o.disabled)},a.createElement("div",null,"I write in"),a.createElement(l.w,{blocked:this.props.disabled},a.createElement("div",{className:o.dialectPicker},a.createElement(i.X,{dialect:e,dialects:this.props.dialects,onSetDialect:this.setDialect,dropdownOnTop:!!this.props.dropdownOnTop,lock:this.props.lock}))))}}},61363:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(20641),o=n(27378),i=n(65287),l=n(62369),r=n(56913),s=n(54001);const c=({showTitle:e,showBackground:t,openGBLanding:n})=>o.createElement("div",{...(0,s.Sh)(i.container,t?i.containerWithBackground:null)},o.createElement("div",{className:i.content},e&&o.createElement("div",{className:i.title},"Grammarly for your team"),o.createElement("div",null,"Help your team make your business look great with top-notch writing."),o.createElement(l.z,{size:"medium",onClick:()=>{n((0,r.Um)().businessHomepage),(0,a.Tb)().gGbUpHookClick()},className:i.button},"Explore Grammarly Business")))},3736:(e,t,n)=>{n.d(t,{a:()=>U});var a=n(6294),o=n(9172),i=n(9264),l=n(42356),r=n(27378),s=n(49405),c=n(82828),d=n(62369),m=n(73385),u=n(57226),p=n(9234),g=n(61363),b=n(56913),h=n(20641),v=n(51129),E=n(75463),f=n(21928),y=n(19374),k=n(11250),w=n(88326),C=n(24627),S=n(49475),x=n(34455),A=n(38296);const N=e=>r.createElement(p.C,{onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:s.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},e.isAutoApplySupported?"Correct text automatically":"Correct spelling automatically"),T=e=>r.createElement(p.C,{checked:!e.enabled,extraClassName:s.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible,onChange:t=>{e.toggle(!t.target.checked)},dataGrammarlyPart:"disableDesktopIntegrationToggle"},r.createElement("div",{className:s.llamaTitle},"Check text with browser extension"),e.enabled&&r.createElement("div",{className:s.llamaDescription},"Grammarly's browser extension was deactivated since you're using Grammarly's desktop application.")),_=e=>r.createElement(p.C,{onChange:t=>{e.toggle(t.target.checked)},beta:!0,checked:e.enabled,extraClassName:s.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},"Show phrasal predictions"),B=e=>r.createElement(p.C,{onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:s.def_switcher,dataGrammarlyPart:"settings-toggle-show-emoji-for-detected-tones",isKeyboardAccessible:e.isKeyboardAccessible},"Show emoji for detected tones"),L=e=>r.createElement("div",{className:s.cheetahLabelAndButton},r.createElement("div",null,r.createElement("div",{className:s.cheetahLabel},r.createElement("b",null,"Generative AI")),r.createElement("div",{className:s.llamaDescription},"Brainstorm, write, and rewrite with Grammarly’s generative AI assistance.")),r.createElement(d.z,{className:s.cheetahManageButton,kind:"transparent",dataGrammarlyPart:"cheetahManageBtn",onClick:()=>{e.manageButtonClick()}},r.createElement("span",null,"Manage"))),D=e=>r.createElement(p.C,{disabled:e.disabled,grayOut:e.disabled,disabledText:"",onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:s.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},e.label),G=e=>r.createElement(p.C,{onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:s.def_switcher,dataGrammarlyPart:"settings-toggle-include-serengeti-context",isKeyboardAccessible:e.isKeyboardAccessible},"Use organizational context"," ",r.createElement("span",{className:s.nobr},r.createElement(m.v,{browser:(0,b.qs)(),color:"green",title:"internal"}))),K=e=>r.createElement(p.C,{onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:s.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},"Show Knowledge Share"),P=e=>r.createElement(p.C,{onChange:t=>{e.toggle(t.target.checked)},beta:!0,checked:e.enabled,extraClassName:s.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},"Show Grammarly Guard"),R=e=>r.createElement(p.C,{onChange:t=>{e.toggle(t.target.checked)},new:!0,checked:e.enabled,extraClassName:s.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},"Show “Get citation” button on ",r.createElement("br",null),e.domain),H=({showReportBugButton:e,...t})=>{var n,a;return r.createElement("div",{"data-grammarly-part":"debugMenu"},r.createElement("div",{className:x.separator}),r.createElement("div",{className:x.debugMenu},r.createElement("div",{className:x.heading},r.createElement("div",null,"Debug Menu"),t.showHideButton&&r.createElement(d.z,{dataGrammarlyPart:"debugMenuHideBtn",kind:"transparent",onClick:()=>{(0,y.E)().bgRpc.api.toggleDebugMenu(!1)}},r.createElement("span",null,"Hide"))),r.createElement(p.C,{onChange:e=>{e.target.checked?(0,y.E)().bgRpc.api.enableHistoryLoggerUntil(-1):(0,y.E)().bgRpc.api.disableHistoryLogger()},dataGrammarlyPart:"debugMenuLoggingToggle",checked:t.isEnabled,extraClassName:s.def_switcher,isKeyboardAccessible:t.isKeyboardAccessible},"Logging"),r.createElement("div",{className:x.separator}),r.createElement(p.C,{onChange:e=>{e.target.checked?(0,y.E)().bgRpc.api.enableAdvancedHistoryLoggerUntil(Date.now()+36e5):(0,y.E)().bgRpc.api.disableAdvancedHistoryLogger()},dataGrammarlyPart:"debugMenuAdvanceLoggingToggle",checked:t.isAdvancedEnabled,extraClassName:s.def_switcher,disabled:!t.isEnabled,disabledText:"Enable logging first",isKeyboardAccessible:t.isKeyboardAccessible},"Advanced Logging"," ",t.isAdvancedEnabled&&t.advancedHistoryLoggerEnabledUntil&&r.createElement("span",{className:x.timer},Math.ceil((t.advancedHistoryLoggerEnabledUntil-Date.now())/6e4)," mins left")),r.createElement("div",{className:x.separator}),r.createElement("div",{className:x.heading},r.createElement(d.z,{className:x.downloadBtn,kind:"transparent",disabled:!t.isEnabled,onClick:t.downloadDebugReports,dataGrammarlyPart:"debugMenuDownloadLogBtn"},r.createElement("span",null,"Download Logs")),!0===e.enabled?r.createElement(d.z,{className:x.downloadBtn,kind:"transparent",dataGrammarlyPart:"debugMenuReportBugBtn",onClick:()=>{e.onClick()}},r.createElement("span",null,"Report a bug")):null),null!=t.gOSDebugSettings?r.createElement(r.Fragment,null,r.createElement("div",{className:x.separator}),r.createElement("div",{className:x.gOSMenu},r.createElement("div",{className:x.heading},"gOS Developer Settings"),r.createElement(p.C,{onChange:e=>{var n;null===(n=t.gOSDebugSettings)||void 0===n||n.toggleDebugger(e.target.checked)},dataGrammarlyPart:"gOSDebuggerToggle",checked:t.gOSDebugSettings.debuggerEnabled,extraClassName:s.def_switcher,isKeyboardAccessible:t.isKeyboardAccessible},"Debugger"),r.createElement("div",{className:x.separator}),r.createElement("div",{className:x.menuItem},r.createElement("label",{htmlFor:"gos-applet-channel"},"Applet Channel"),r.createElement("select",{id:"gos-applet-channel",value:null!==(n=t.gOSDebugSettings.appletChannel)&&void 0!==n?n:"stable",onChange:e=>{var n;null===(n=t.gOSDebugSettings)||void 0===n||n.setAppletChannel(e.target.value)}},r.createElement("option",{value:"dev"},"dev"),r.createElement("option",{value:"preview"},"preview"),r.createElement("option",{value:"stable"},"stable"),r.createElement("option",{value:"qa"},"qa"))),r.createElement("div",{className:x.separator}),r.createElement("div",{className:x.menuItem},r.createElement("label",{htmlFor:"gos-assistant-applet-url"},"Assistant URL"),r.createElement("input",{id:"gos-assistant-applet-url",type:"url",placeholder:"e.g. http://localhost:3000/",value:null!==(a=t.gOSDebugSettings.assistantAppletUrl)&&void 0!==a?a:"",onChange:e=>{var n;null===(n=t.gOSDebugSettings)||void 0===n||n.setAssistantAppletUrl(e.target.value)}})))):null))},U=e=>{var t,n,s,m,p,U,I,M,F,O,z,J,V,W,Z,j,q,Q,Y,X,$,ee,te,ne;const{actions:ae,activeTab:oe,config:ie,settings:le,dapi:re,user:se,siteCategory:ce,openGBLanding:de,showGBUpHook:me,placement:ue,dynamicConfig:pe,enableRenderingHack:ge=!1,showCitationBuilderToggle:be=!0,citationBuilderSessionId:he,isCitationBuilderManualInvocationEnabled:ve=!1,isKnowledgeHubSupported:Ee=!1,isPiiDetectionSupported:fe=!1,isIndianEnglishDialectSupported:ye=!1,isCheetahSupported:ke=!1,showSerengetiFeatureToggle:we=!1,isReportBugFeatureAllowed:Ce,isAutoApplySupported:Se=!1,className:xe,downloadDebugReports:Ae}=e;ge&&r.useEffect((()=>{(0,b.CB)()&&(self.screenLeft<0||self.screenTop<0||self.screenLeft>self.screen.width||self.screenTop>self.screen.height)&&chrome.runtime.getPlatformInfo((e=>{if("mac"===e.os){const e=new CSSStyleSheet;e.insertRule("\n            @keyframes redraw {\n              0% {\n                opacity: 1;\n              }\n              100% {\n                opacity: .99;\n              }\n            }\n          "),e.insertRule("\n            html {\n              animation: redraw 1s linear infinite;\n            }\n          "),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}))}),[]);const{premium:Ne,anonymous:Te}=se,_e=v.n.isGrammarlyEmployee(se)&&Ce,Be=me&&Ne&&!v.n.doesUserBelongToInstitution(se),Le=v.n.isGrammarlyEmployee(se)&&(0,A.V)((0,y.E)().experimentClient),{dialectSettings:De}=le,Ge=(null==De?void 0:De.dialect)||re.dialectStrong,Ke=["british","american","australian","canadian",...ye?["indian"]:[]],Pe=e.siteSwitcherChecked||{checked:!!le.enabled,update:t=>{const{siteCategory:n}=e;ae.toggleSite(t,ie.domain),k.J.checkingToggleClick("toolbar",n,t?"on":"off"),(0,h.Tb)().toggleExtension(t,"toolbar",(0,E.FN)(ie.domain))}},Re=r.useCallback((e=>{const t=oe&&new URL(oe.url).pathname;ae.toggleCitationBuilderForDomain({domain:ie.domain,enabled:e,pathName:t,inAllowList:oe&&(0,o.eC)(new URL(oe.url),pe)}),e||k.J.citePopupButtonDisable(ie.domain,"permanent",he||"","toolbar",ve&&!0===(0,o.gO)(ie.domain,le))}),[null==oe?void 0:oe.url,ie.domain,he]);return r.createElement("div",{className:(0,l.cs)(x.settingsContent,xe),"data-grammarly-part":"settings"},r.createElement("div",{className:x.heading},r.createElement("div",null,"Quick Settings"),r.createElement(d.z,{kind:"link",onClick:()=>{e.openUrl((0,b.Um)().allSettings),k.J.allSettingsButtonClick(ue)}},r.createElement("div",{className:x.allSettings},r.createElement("span",null,"All Settings"),r.createElement(u.d,null)))),c.q.showSettingPopupToggle(re,le,pe,null==oe?void 0:oe.url)&&r.createElement(r.Fragment,null,r.createElement(T,{toggle:e=>{ae.setDesktopIntegration(e),k.J.desktopIntegrationToggleClick(e?"on":"off")},enabled:le.isDesktopIntegrationEnabled,isKeyboardAccessible:e.isKeyboardAccessible}),r.createElement("div",{className:x.separator})),r.createElement(S.w,{domain:ie.domain,enabledInConfig:null!==(t=ie.enabled)&&void 0!==t&&t,siteSwitcherChecked:Pe,favicon:null==oe?void 0:oe.favIconUrl,siteCategory:ce}),r.createElement("div",{className:x.separator}),ke&&r.createElement(r.Fragment,null,r.createElement(L,{manageButtonClick:()=>e.openUrl((0,b.Um)().featuresSettings)}),r.createElement(D,{label:r.createElement(r.Fragment,null,"Show on text selection"),enabled:!1!==(null===(s=null===(n=le.cheetah)||void 0===n?void 0:n.status)||void 0===s?void 0:s.cheetahEnabled)&&!1!==(null===(U=null===(p=null===(m=le.cheetah)||void 0===m?void 0:m.status)||void 0===p?void 0:p.entryPointsConfig)||void 0===U?void 0:U.inlineRewriteEnabled),disabled:!1===(null===(M=null===(I=le.cheetah)||void 0===I?void 0:I.status)||void 0===M?void 0:M.cheetahEnabled),toggle:e=>ae.cheetahToggleInlineRewrite(e),isKeyboardAccessible:e.isKeyboardAccessible}),r.createElement(D,{label:r.createElement(r.Fragment,null,"Show for quick replies"),enabled:!1!==(null===(O=null===(F=le.cheetah)||void 0===F?void 0:F.status)||void 0===O?void 0:O.cheetahEnabled)&&!1!==(null===(V=null===(J=null===(z=le.cheetah)||void 0===z?void 0:z.status)||void 0===J?void 0:J.entryPointsConfig)||void 0===V?void 0:V.inlineQuickReplyEnabled),disabled:!1===(null===(Z=null===(W=le.cheetah)||void 0===W?void 0:W.status)||void 0===Z?void 0:Z.cheetahEnabled),toggle:e=>ae.cheetahToggleInlineQuickReply(e),isKeyboardAccessible:e.isKeyboardAccessible}),!we&&r.createElement("div",{className:x.separator})),we&&r.createElement(r.Fragment,null,r.createElement(G,{enabled:"disabled"!==re.serengetiState,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{ae.setSerengetiState(!0===e?"enabled":"disabled")}}),r.createElement("div",{className:x.separator})),be&&(0,o.r4)(ie.domain,pe,ve)&&r.createElement(r.Fragment,null,r.createElement(R,{enabled:(0,o.Td)(ie.domain,pe,ve,le),domain:ie.domain,isKeyboardAccessible:e.isKeyboardAccessible,toggle:Re}),r.createElement("div",{className:x.separator})),Ee&&r.createElement(r.Fragment,null,r.createElement(K,{enabled:null===(q=null===(j=le.knowledgeHubSettings)||void 0===j?void 0:j.enabled)||void 0===q||q,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{ae.toggleKnowledgeHub(e),k.J.knowledgeHubFeatureToggleClick("popup",i.JJ.fromDomain(ie.domain),e?i.L5.on:i.L5.off),(0,h.Tb)().knowledgeHub.featureToggleClick(i.JJ.fromDomain(ie.domain),e?i.L5.on:i.L5.off)}}),r.createElement("div",{className:x.separator})),fe&&r.createElement(r.Fragment,null,r.createElement(P,{enabled:null===(Y=null===(Q=le.piiDetectionSettings)||void 0===Q?void 0:Q.enabled)||void 0===Y||Y,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{k.J.grammarlyGuardFeatureToggleClick(e?"on":"off",ie.domain),ae.togglePiiDetection(e)}}),r.createElement("div",{className:x.separator})),r.createElement(w.W,{disabled:Te,enabledDefs:le.enabledDefs,toggleDefs:ae.toggleDefs}),r.createElement("div",{className:x.separator}),r.createElement(N,{enabled:le.autocorrectEnabled||!1,isKeyboardAccessible:e.isKeyboardAccessible,isAutoApplySupported:Se,toggle:e=>{ae.toggleAutocorrect(e);const t=e?"on":"off";k.J.autocorrectToggleClick("popup",t),(0,h.Tb)().autoFix.featureToggleClick(t,"popup")}}),r.createElement("div",{className:x.separator}),r.createElement(_,{enabled:le.autocompleteEnabled||!1,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{ae.toggleAutocomplete(e),k.J.autocompleteFeatureToggleClick("popup",e?"on":"off")}}),(!ke||!1===(null===($=null===(X=le.cheetah)||void 0===X?void 0:X.status)||void 0===$?void 0:$.cheetahEnabled))&&r.createElement(r.Fragment,null,r.createElement("div",{className:x.separator}),r.createElement(B,{enabled:"hide"!==re.emogenieEmojiState,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{ae.setEmogenieEmojiState(!0===e?"show":"hide"),k.J.settingsShowEmojiForDetectedTonesToggleClick(ie.domain,!0===e?"on":"off")}})),r.createElement("div",{className:x.separator}),r.createElement(C.m,{dialects:Ke,changeStrongDialect:ae.changeStrongDialect,dialectStrong:Ge,dialectWeak:re.dialectWeak,dropdownOnTop:!0,disabled:Te,lock:{isLocked:Boolean(null==De?void 0:De.dialectLockedByInstitution),message:"Locked by your organization"}}),Be&&r.createElement(g.Z,{openGBLanding:de,showTitle:"popup"===ue,showBackground:"popup"===ue}),(le.isDebugMenuVisible||_e)&&r.createElement(H,{isAdvancedEnabled:le.advancedHistoryLoggerEnabled,isEnabled:le.historyLoggerEnabled,advancedHistoryLoggerEnabledUntil:le.advancedHistoryLoggerEnabledUntil,isKeyboardAccessible:e.isKeyboardAccessible,showReportBugButton:_e?{enabled:!0,onClick:()=>{e.openReportBugForm(f.ZD({domain:ie.domain,userType:f.Ng(se),version:(0,b.bo)(),systemInfo:a.Rd().systemInfo}))}}:{enabled:!1},showHideButton:!_e,downloadDebugReports:Ae,gOSDebugSettings:Le?{debuggerEnabled:null!==(ee=le.gOSDebuggerEnabled)&&void 0!==ee&&ee,toggleDebugger:ae.toggleGOSDebugger,appletChannel:null!==(te=le.gOSAppletChannel)&&void 0!==te?te:null,setAppletChannel:ae.setGOSAppletChannel,assistantAppletUrl:null!==(ne=le.gOSAssistantAppletUrl)&&void 0!==ne?ne:null,setAssistantAppletUrl:ae.setGOSAssistantAppletUrl}:void 0}))}},49475:(e,t,n)=>{n.d(t,{w:()=>r});var a=n(27378),o=n(49405),i=n(9234),l=n(54001);const r=e=>{const t="docs.google.com"===e.domain?"Google Docs":e.domain,{enabledInConfig:n,siteSwitcherChecked:r,favicon:s}=e,c=r.checked&&n,d=n?"Check for writing suggestions":"Checking is not supported";return a.createElement(i.C,{grayOut:!n,onChange:e=>r.update(e.target.checked),checked:c,extraClassName:o.site_switcher,dataGrammarlyPart:"siteSwitcher",skipTrustedCheck:e.skipTrustedCheck,centered:!!e.centeredToggle},a.createElement("div",{"data-test-attr":"siteControlsLabelText"},d,a.createElement("br",null)," ",a.createElement("span",{...(0,l.Sh)(o.domain,e.centeredToggle&&o.centered)},a.createElement("span",{className:o.thin_text},"on")," ",s&&a.createElement("span",{className:o.favicon},a.createElement("img",{width:"16px",height:"16px",src:s})),t)))}},31212:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(20641),o=n(43124),i=n(27378),l=n(30955),r=n(54001),s=n(11250),c=n(44358),d=n(65515),m=n(49708),u=n(85985),p=n(56913);const g=({user:e,isAssistant:t,openSubscriptionDialog:n})=>{const{registrationDate:g,anonymous:b,premium:h}=e,v=(0,o.p6)(g);if(b||h)return null;const E=()=>{(0,c.nE)(s.J,{placement:t?"assistantSettings":"settingsToolbar",bannerType:"GoPremiumToEnableAdvancedFixes",upgradeHookName:"extensionSettings",upgradeHookSlot:t?"assistantSettingsPopup":"browserToolbar"}),(0,a.Tb)().upgradeHooks.showUpgradeHook("extensionSettings",t?"assistantSettingsPopup":"browserToolbar")};i.useEffect((()=>{if((0,p.G6)()){const e=(0,m.R)(document,"visibilitychange").pipe((0,u.h)((()=>"visible"===document.visibilityState))).subscribe((()=>{E()}));return()=>e.unsubscribe()}return E(),()=>{}}),[]);const f=i.useCallback((()=>{n({utmCampaign:"extensionSettingsToolbar"}),(0,c.Qi)(s.J,{placement:t?"assistantSettings":"settingsToolbar",bannerType:"GoPremiumToEnableAdvancedFixes",upgradeHookName:"extensionSettings",upgradeHookSlot:t?"assistantSettingsPopup":"browserToolbar"}),(0,a.Tb)().upgradeHooks.clickUpgradeHook("extensionSettings",t?"assistantSettingsPopup":"browserToolbar"),(0,a.Tb)().userUpgradeClick("settingsToolbar")}),[]),y=v?i.createElement("div",{"data-test-attr":"checked_since"},"Grammarly has been correcting your text since ",v,"."):null;return i.createElement("div",{className:t?l.borderTop:void 0},i.createElement("div",{...(0,r.Sh)(l.content,t?void 0:l.borderBottom)},y,i.createElement(d.Y,{onClick:f,className:l.premiumButton,dataGrammarlyPart:"settings-upgrade-button"})))}},11250:(e,t,n)=>{n.d(t,{J:()=>o});var a=n(19374);const o=new Proxy({},{get:(e,t)=>(...e)=>(0,a.E)().bgRpc.api.trackGnar(t,e)})},21928:(e,t,n)=>{n.d(t,{Ng:()=>i,WY:()=>r,ZD:()=>l});var a=n(56913),o=n(51129);const i=e=>{const t=o.n.getType(e);return"registered"===t?"free":t},l=e=>{return{clientVersion:e.version,platformVersion:"",application:e.domain,browser:e.systemInfo.browser.name,os:(t=e.systemInfo.os,t.isWindows?"windows":t.isMac?"mac":t.isChromeOS?"chromeos":"other"),userType:e.userType,team:"browserextensions"};var t},r=e=>{const t=new URL((0,a.Um)().grammarlyEmployeesBugReportsUrl);return Object.entries(e).forEach((([e,n])=>{n&&t.searchParams.set(e,n)})),t.toString()}},32502:e=>{e.exports={premiumButton:"QpA64"}},80394:e=>{e.exports={label:"cLK4q",selected:"hbRki",option:"UytwF",disabled:"mTk5j",lockIconWrapper:"o4NOU"}},65479:e=>{e.exports={option:"XNQPo"}},44103:e=>{e.exports={option:"dRYWx"}},34917:e=>{e.exports={american:"JRPow",australian:"FZNcB",british:"MzB3a",canadian:"_fn3J",indian:"eqgex"}},50945:e=>{e.exports={hover_blocker:"np9cY"}},34455:e=>{e.exports={settingsContent:"C3SN4",fullWidth:"dRfoN",heading:"_HqAa",allSettings:"pUfgB",separator:"vlSkx",settingsLink:"d_ohh",debugMenu:"iovEn",downloadBtn:"u6BF0",timer:"DQHsO",gOSMenu:"dhG16",menuItem:"COwmJ"}},98716:e=>{e.exports={select_checkbox:"cIqfV",centered:"yfVcZ",select_children:"lRjE2",beta:"wvPnO",new:"QHuhM",alpha:"cThIl",checkbox:"F2Xdn",checkbox_check:"QRTZ2",on:"jzBvy",off:"HVvmV",checkbox_check_round:"qeH5k",checkbox_control_wrapper:"UMoTL",grayOut:"Ta6y3",on_off:"c2IdT",keyboard_accessible:"o7ug_",disabled:"KQoMv",setting_item:"HfRCc"}},17347:e=>{e.exports={line:"OBGgK",disabled:"SvddX",dialectPicker:"QNfvS",lockedInfo:"oAPBC"}},65287:e=>{e.exports={container:"FaEBj",containerWithBackground:"W15V7",content:"lof2m",title:"R97wU",button:"Udw_0"}},49405:e=>{e.exports={windows:"ScRGR",setting_item:"byTue",fixing:"tGQgu",thin_text:"Zw2iF",footer:"VarAw",gr_popup_settings:"sCOqq",iOS:"xw90P",footer_btn:"dFcxY",short_border:"GPdi3",top:"a8_HB",content:"eJi6K",upgraded:"fPnHa",since:"KcwUv",business:"HH96k",edu:"C_xJH",my_grammarly:"TPdm3",new_document:"b5rRu",unsupported_site:"FV6cP",unsupported_item:"kI6Es",unsupported_title:"TvJkj",domain:"mbOuw",domain_in_details:"HyZRA",unsupported_temporary:"aeiHl",unsupported_permanently:"e63AG",unsupported_grammarly:"SK755",diamond:"z0724",userPanel:"bG2GY",email:"U4qfE",link:"Vrj67",blue:"Dstaa",edc_stripe:"GEFvM",line:"_o71L",not_supported:"Z9hzt",site_switcher:"LXeMc",upgrade:"BAl_v",def_switcher:"aVnnG",on:"CcnIo",off:"LZuFk",cheetahToggle:"YHW25",favicon:"L5Hrq",centered:"T0qTK",summary:"tuG8u",upgrade_title:"KRcNq",settingsContentWrapper:"OeKpx",settingsContent:"AwQr3",withBackground:"JRZMC",llamaTitle:"WnzAW",llamaDescription:"dDIsV",cheetahLabelAndButton:"WwKRI",cheetahLabel:"aMCQq",cheetahManageButton:"hfCbo",nobr:"wae8U"}},30955:e=>{e.exports={content:"IJam9",borderTop:"oKEr5",borderBottom:"lZ1ZL",premiumButton:"bvxiF"}},1386:(e,t,n)=>{n.d(t,{N:()=>o});var a=n(27378);const o=(0,n(91961).I)("color",(({title:e,titleId:t,desc:n,descId:o,...i})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":"true",stroke:"transparent","aria-labelledby":t,"aria-describedby":o,...i},n?a.createElement("desc",{id:o},n):null,e?a.createElement("title",{id:t},e):null,a.createElement("path",{stroke:"#646B81",strokeLinejoin:"round",d:"M5.727 6.615H3V14h10V6.615h-2.727m-4.546 0V4.273a2.273 2.273 0 1 1 4.545 0v2.342m-4.545 0h4.546"}))))},18657:(e,t,n)=>{n.d(t,{O:()=>o});var a=n(27378);const o=(0,n(91961).I)("color",(({title:e,titleId:t,desc:n,descId:o,...i})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":"true",stroke:"transparent","aria-labelledby":t,"aria-describedby":o,...i},n?a.createElement("desc",{id:o},n):null,e?a.createElement("title",{id:t},e):null,a.createElement("path",{stroke:"#646B81",strokeLinecap:"round",strokeLinejoin:"round",d:"M2 6.448 4.526 3h2.527M2 6.448 8 13M2 6.448h3.474m8.526 0L11.474 3H8.947M14 6.448 8 13m6-6.552h-3.79M8 13 5.474 6.448M8 13l2.21-6.552m-4.736 0h4.736m-4.736 0L7.053 3m3.157 3.448L8.948 3m0 0H7.053"}))))}}]);