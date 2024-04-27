import{aj as O,I as G,f as k,o as a,g as p,k as B,ba as he,i as u,Q as w,j as r,aq as J,ay as N,b4 as q,r as y,c as b,x as P,L as ge,q as h,w as $,h as A,O as M,b3 as ve,l as x,s as L,a_ as _e,ai as we,bl as j,ah as R,bm as be,an as ye,bn as $e,H as ke,F as z,z as D,bo as Se,aB as xe,bp as Ce,U as Ie,T as De,af as Ae,ar as Le,aO as X,ap as Pe,Y as E,bq as Ve,aP as Me,br as Be,bs as Ue,ac as ee,b8 as Te,as as te,P as W,a3 as oe,K as ne,aw as se,a4 as re,aE as Fe,a5 as Re,av as Ge,bt as qe,$ as K,aV as Y,bu as Ee}from"./defineAppConfig-bSouF0-Z.js";function He(){return O(G.AppUrls)}const We={class:"flex flex-col space-y-4 items-center justify-center text-center p-16"},Oe=["href"],Ze=k({name:"RequireOnboardingWarning",__name:"RequireOnboardingWarning",setup(t){const{onboardingUrl:e}=He();return(s,n)=>(a(),p("div",We,[B(he,{class:"w-24 h-24",src:"icon-128.png"}),u("p",null,w(s.$t("onboarding.required")),1),u("a",{class:"btn btn-primary",href:r(e),target:"_blank"},w(s.$t("getStarted")),9,Oe)]))}});function Qo(t,e=[]){return k({name:`RequireOnboarding${t.name??"Unknown"}`,setup(){return{requirements:J()}},render(){return this.requirements.hasRestoredFromStorage?this.requirements.canMonitorUsage?N(t):N(Ze,{class:e}):null}})}const U=q("dialog-visiblity",()=>{const t=y({});function e(n){t.value[n]=!0}function s(n){t.value[n]=void 0}return{visible:t,show:e,hide:s}});function ae(t,e=U()){return b(()=>!!e.visible[t])}function V(t,e){return q(t+"-options",()=>{const s=typeof e=="function"?e():e,n=y(s),l=U(),d=ae(t,l);function c(o){n.value=o,l.show(t)}function f(){n.value=s,l.hide(t)}return P(d,o=>{o||(n.value=s)}),{name:t,options:n,show:c,hide:f}})}const ie=k({name:"GlobalDialog",__name:"GlobalDialog",props:{name:{},overflowDisabled:{type:Boolean}},emits:["shown"],setup(t,{emit:e}){const s=t,n=U(),l=ae(s.name,n),{show:d,dismiss:c,baseDialogProps:f,watchVisible:o}=ge();return P(l,i=>{i?(e("shown"),d()):c()}),o(i=>{i||n.hide(s.name)}),(i,m)=>(a(),h(ve,M(r(f),{"overflow-disabled":s.overflowDisabled}),{default:$(()=>[A(i.$slots,"default")]),_:3},16,["overflow-disabled"]))}}),Ne={class:"w-1 h-1 overflow-visible relative"},je={class:"flex flex-col"},Jo=k({name:"InPlaceDialog",__name:"InPlaceDialog",props:{visible:{type:Boolean},alignHorizontal:{}},emits:["dismiss"],setup(t){const e=t,s=b(()=>({x:e.alignHorizontal??"right"}));return(n,l)=>(a(),p("div",Ne,[x(" Dialog "),B(_e,{name:"fade-down"},{default:$(()=>[n.visible?(a(),p("div",{key:0,class:L(["shadow-xl absolute top-0 rounded-md bg-neutral z-30",{"right-0":r(s).x==="right","left-0":r(s).x==="left"}])},[u("div",je,[A(n.$slots,"default")])],2)):x("v-if",!0)]),_:3}),x(" Click to dismiss "),n.visible?(a(),p("div",{key:0,onClick:l[0]||(l[0]=d=>n.$emit("dismiss")),class:"z-10 fixed inset-0"})):x("v-if",!0)]))}}),ze={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ke=u("path",{d:"M8 11.5a1.25 1.25 0 0 0-1.25 1.25A1.25 1.25 0 0 0 8 14a1.25 1.25 0 0 0 1.25-1.25A1.25 1.25 0 0 0 8 11.5m8 0a1.25 1.25 0 0 0-1.25 1.25A1.25 1.25 0 0 0 16 14a1.25 1.25 0 0 0 1.25-1.25A1.25 1.25 0 0 0 16 11.5M12 7c1.5 0 2.9.33 4.18.91l2.16-2.16a.996.996 0 1 1 1.41 1.41l-1.8 1.8A9.999 9.999 0 0 1 22 17H2c0-3.29 1.59-6.21 4.05-8.04l-1.8-1.8a.996.996 0 1 1 1.41-1.41l2.16 2.16C9.1 7.33 10.5 7 12 7z",fill:"currentColor"},null,-1),Ye=[Ke];function Qe(t,e){return a(),p("svg",ze,Ye)}const Je={name:"mdi-android-head",render:Qe},Xe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},et=u("path",{fill:"currentColor",d:"M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7l-2 3v1h8v-1l-2-3h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"},null,-1),tt=[et];function ot(t,e){return a(),p("svg",Xe,tt)}const nt={name:"mdi-desktop-mac",render:ot},st={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},rt=u("path",{fill:"currentColor",d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11Z"},null,-1),at=[rt];function it(t,e){return a(),p("svg",st,at)}const Q={name:"mdi-apple",render:it},ct={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},lt=u("path",{fill:"currentColor",d:"M6 12a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6m14 0a7.94 7.94 0 0 0-3.05-6.27L16 0H8l-.95 5.73A7.94 7.94 0 0 0 4 12c0 2.54 1.19 4.81 3.05 6.27L8 24h8l.95-5.73A7.955 7.955 0 0 0 20 12Z"},null,-1),ut=[lt];function dt(t,e){return a(),p("svg",ct,ut)}const pt={name:"mdi-watch",render:dt},mt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ft=u("path",{fill:"currentColor",d:"M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19c-.39.31-.75.29-1.14-.01c-.2-.16-1.53-.92-1.95-1.19c-.48-.31-.45-.7.08-.92c1.64-.69 3.28-.64 4.91.03c.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01c-.2-.88-.29-1.78-.7-2.61c-.73-1.58-2-2.4-3.84-2.47c-1.81.05-3.16.81-3.95 2.4c-.21.43-.36.88-.46 1.34c-.17.76-.32 1.55-.5 2.32c-.15.65-.45 1.21-.96 1.71c-1.61 1.57-2.9 3.37-3.88 5.35c-.14.29-.28.58-.37.88c-.19.66.29 1.12.99.96c.44-.09.88-.18 1.3-.31c.41-.15.57-.05.67.35c.65 2.15 2.07 3.66 4.24 4.5c4.12 1.56 8.93-.66 9.97-4.58c.07-.27.17-.37.47-.27c.46.14.93.24 1.4.35c.49.09.85-.16.92-.64c.03-.26-.06-.49-.16-.73"},null,-1),ht=[ft];function gt(t,e){return a(),p("svg",mt,ht)}const vt={name:"mdi-linux",render:gt},_t={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},wt=u("path",{fill:"currentColor",d:"M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15Z"},null,-1),bt=[wt];function yt(t,e){return a(),p("svg",_t,bt)}const $t={name:"mdi-windows",render:yt},kt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},St=u("path",{fill:"currentColor",d:"m12 20l3.46-6h-.01c.34-.6.55-1.27.55-2c0-1.2-.54-2.27-1.38-3h4.79c.38.93.59 1.94.59 3a8 8 0 0 1-8 8m-8-8c0-1.46.39-2.82 1.07-4l3.47 6h.01c.69 1.19 1.95 2 3.45 2c.45 0 .88-.09 1.29-.23l-2.4 4.14C7 19.37 4 16.04 4 12m11 0a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3m-3-8a7.98 7.98 0 0 1 6.92 4H12c-1.94 0-3.55 1.38-3.92 3.21L5.7 7.08A7.981 7.981 0 0 1 12 4m0-2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),xt=[St];function Ct(t,e){return a(),p("svg",kt,xt)}const It={name:"mdi-google-chrome",render:Ct},Dt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},At=u("path",{fill:"currentColor",d:"M6.85 6.74c.01 0 .01 0 0 0M21.28 8.6c-.43-1.05-1.32-2.18-2.01-2.54c.56 1.11.89 2.22 1.02 3.04v.02c-1.13-2.82-3.05-3.96-4.62-6.44c-.08-.12-.17-.25-.24-.38c-.04-.07-.07-.14-.11-.21c-.06-.13-.12-.26-.15-.4c0-.01-.01-.02-.02-.02h-.03c-2.22 1.3-3.15 3.59-3.38 5.04c-.69.04-1.37.21-1.99.51c-.12.05-.17.19-.13.31c.05.14.21.21.34.15c.54-.26 1.14-.41 1.74-.45h.05c.08-.01.17-.01.25-.01c.5-.01.97.06 1.44.2l.06.02c.1.02.17.06.25.06c.05.04.11.06.16.08l.14.06c.07.03.14.06.2.09c.03.02.06.03.09.05c.07.04.16.07.2.11c.04.02.08.05.12.07c.73.45 1.34 1.07 1.75 1.81c-.53-.37-1.49-.74-2.41-.58c3.6 1.81 2.63 8-2.36 7.76c-.44-.01-.88-.1-1.3-.25c-.1-.03-.2-.07-.29-.12c-.05-.02-.12-.05-.17-.08c-1.23-.63-2.24-1.82-2.38-3.27c0 0 .5-1.73 3.33-1.73c.31 0 1.17-.86 1.2-1.1c0-.09-1.74-.78-2.42-1.45c-.37-.36-.54-.53-.69-.66c-.08-.07-.17-.13-.26-.19a4.63 4.63 0 0 1-.03-2.45C7.6 6.12 6.8 6.86 6.22 7.5c-.4-.5-.37-2.15-.35-2.5c-.01 0-.3.16-.33.18c-.35.25-.68.53-.98.82c-.35.37-.66.74-.94 1.14c-.62.91-1.12 1.95-1.34 3.04c0 .01-.1.41-.17.92l-.03.23c-.02.17-.04.32-.08.58v.41c0 5.53 4.5 10.01 10 10.01c4.97 0 9.08-3.59 9.88-8.33c.02-.11.03-.24.05-.37c.2-1.72-.02-3.52-.65-5.03Z"},null,-1),Lt=[At];function Pt(t,e){return a(),p("svg",Dt,Lt)}const Vt={name:"mdi-firefox",render:Pt},Mt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Bt=u("path",{fill:"currentColor",d:"M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 2.09.8 4 2.11 5.41l3.77-7.53l7.53-3.77A7.931 7.931 0 0 0 12 4m0 16a8 8 0 0 0 8-8c0-2.09-.8-4-2.11-5.41l-3.77 7.53l-7.53 3.77A7.931 7.931 0 0 0 12 20m0-8l-.77-.77L9.7 14.3l3.07-1.53L12 12m0 5.5h1V19h-1v-1.5m3.88-1.61l.71-.71l1.06 1.06l-.71.71l-1.06-1.06M17.5 12v-1H19v1h-1.5M12 6.5h-1V5h1v1.5M8.12 8.11l-.71.71l-1.06-1.06l.71-.71l1.06 1.06M6.5 12v1H5v-1h1.5Z"},null,-1),Ut=[Bt];function Tt(t,e){return a(),p("svg",Mt,Ut)}const Ft={name:"mdi-apple-safari",render:Tt},Rt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Gt=u("path",{fill:"currentColor",d:"M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6m10 6H9v1.78c-.61.55-1 1.33-1 2.22c0 .89.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12m-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1m-1 10h-4v-8h4v8Z"},null,-1),qt=[Gt];function Et(t,e){return a(),p("svg",Rt,qt)}const Ht={name:"mdi-devices",render:Et},Wt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ot=u("path",{fill:"currentColor",d:"M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),Zt=[Ot];function Nt(t,e){return a(),p("svg",Wt,Zt)}const jt={name:"mdi-globe",render:Nt},zt=k({__name:"PlatformIcon",props:{platform:{}},setup(t){const e=t;return(s,n)=>e.platform.toLowerCase().includes("chrome")?(a(),h(r(It),{key:0})):e.platform.toLowerCase().includes("firefox")?(a(),h(r(Vt),{key:1})):e.platform.toLowerCase().includes("safari")?(a(),h(r(Ft),{key:2})):e.platform.toLowerCase().includes("android")?(a(),h(r(Je),{key:3})):e.platform.toLowerCase().includes("ios")?(a(),h(r(Q),{key:4})):e.platform.toLowerCase().includes("wear")?(a(),h(r(pt),{key:5})):e.platform.toLowerCase().includes("desktop")?(a(),h(r(nt),{key:6})):e.platform.toLowerCase().includes("linux")?(a(),h(r(vt),{key:7})):e.platform.toLowerCase().includes("windows")?(a(),h(r($t),{key:8})):e.platform.toLowerCase().includes("mac")?(a(),h(r(Q),{key:9})):e.platform.toLowerCase().includes("web")?(a(),h(r(jt),{key:10})):(a(),h(r(Ht),{key:11}))}});function Kt(){return we(G.GetPlatformAppIcon,()=>{})}function Yt(t){const e=Kt();function s(o=""){return[`https://c.1password.com/richicons/images/login/96/${o}.png`,`https://icons.bitwarden.net/${o}/icon.png`,`https://www.google.com/s2/favicons?domain=https://${o}&sz=96`,e(o,96)].filter(Boolean)}function n(o){var i;if(!o)return[];if("url"in o)return[o.url];if("primaryMetric"in o&&o.iconUrl)return[o.iconUrl];if("brand_id"in o){const m=be(o);if(m)return[m];const v=(i=ye(o.websites[0]))==null?void 0:i.hostname;return v?s(v):[]}return o.appId.length<4?[]:s(o.appId)}function l(o){return new Promise(i=>{const m=new Image;m.addEventListener("load",()=>i(m.width!==16&&m.width!==19),{once:!0}),m.addEventListener("error",()=>i(!1),{once:!0}),m.src=o})}const d=b(()=>{const o=j(t);if(o)return"url"in o?o.url:"brand_id"in o?o.brand_id:"platform"in o?`${o.platform}:${o.appId}`:o.appId}),{data:c,isFetched:f}=R(["app-icon-url",d],async()=>{const o=n(j(t));if(o.length<=1)return o[0];for(const i of o)if(await l(i))return i},{cacheTime:1/0,retryOnMount:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1});return{isLoaded:f,url:c}}const Qt=["src"],Xo=k({__name:"AppIcon",props:{src:{},platform:{}},emits:["urlChanged"],setup(t,{emit:e}){const s=t,{url:n,isLoaded:l}=Yt(()=>s.src);P(n,c=>e("urlChanged",c),{immediate:!0});const d=b(()=>s.src&&"brand_id"in s.src?$e(s.src):s.platform??ke.Web);return(c,f)=>(a(),p(z,null,[x(" Main image "),r(n)?(a(),p("img",M({key:0,class:{"opacity-100":r(l),"opacity-0":!r(l)},src:r(n)},c.$attrs),null,16,Qt)):(a(),p(z,{key:1},[x(" Fallback icons "),B(zt,M({platform:r(d),class:"text-base-content text-opacity-secondary"},c.$attrs),null,16,["platform"])],2112))],2112))}});function en(){return O(G.DefaultUsageLimitType)}const Jt=V(D.AddApp,{addApp(){throw new Error("Function not implemented.")}}),Xt=V(D.Alert,{message:""});function eo(){return O(G.GroupConfigService)}const to={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},oo=u("path",{fill:"currentColor",d:"M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"},null,-1),no=[oo];function so(t,e){return a(),p("svg",to,no)}const tn={name:"mdi-chevron-right",render:so};function g(t,e){return Se(()=>{const s=xe(),n=Ce(s.getItem(t),e);s.onChange(t,c=>{n.state.value=c});async function l(c){n.state.value=c,await s.setItem(t,c)}const d=b({get:()=>n.state.value??e,set:c=>void l(c)});return{...n,state:d,mutateAsync:l}})}const ro=14*Ae,ce=2*Ie;async function on(t){let e=await t.getItem("review-prompt-interval");e??(e=ce);const s=De()+e+ro,n=e*2;await t.setItem("review-prompt-at",s),await t.setItem("review-prompt-interval",n)}const ao=g("device-group",null),io=g("is-created-group-config",!1),nn=g("new-user-shown-cross-platform-help",!1),sn=g("install-date",0),rn=g("device-group-promotion-visible",!0),an=g("feedback-survey-visible",!0),cn=g("new-tab-promotion-visible",!0),ln=g("review-prompt-disabled",!1),un=g("schedule-call-prompt-disabled",!1),dn=g("min-search-date",0),pn=g("review-prompt-at",null),mn=g("review-prompt-interval",ce),fn=g("sessionsLastUpdatedAt",null),hn=g("last-activity-time-ms",null),gn=g("new-tab-suggested-hostnames",[]),vn=g("have-user-joined-device-group",!1),_n=g("shown-walkthroughs",[]),wn=g("promote-desktop-banner-visible",!0),bn=g("promote-desktop-popup-visible",!0),yn=g("promote-extension-for-limits-visible",!0),$n=g("promote-extension-for-browser-details-visible",!0),co="device-group";function lo(){const t=Le(),{canUploadData:e}=X(J()),s=Pe(),n=b(()=>e.value&&!!s.value);return R([co],()=>t.getMyDeviceGroup({installId:s.value}).catch(()=>{}),{enabled:n})}const uo=q("device-group",()=>{const{state:t,mutateAsync:e}=ao(),{mutateAsync:s}=io(),n=eo(),l=Xt(),{t:d}=E();async function c(){await e(null),await s(!1),await n.makeRemoteUsageLimitsLocal(),l.show({message:d("devices.kickedFromDeviceGroup")})}function f(){const{data:o}=lo();P(o,async i=>{i==null?await c():await e(Me(i))})}return{deviceGroup:Ve(t),setDeviceGroup:e,useRemoteDataWatcher:f,kickedFromGroup:c}});function kn(){}function Sn(t,e,s){const n=uo(),{deviceGroup:l}=X(n),[d,c,...f]=t,o=R(["local-"+d,c,...f],()=>e(c.value),s),{isOnline:i}=Be(),m=R(["remote-"+d,c,...f,l],()=>{var v;return i.value?e({...c.value,deviceGroupKey:(v=l.value)==null?void 0:v.key}).catch(async C=>{if(!i.value)return o.data;if(Ue.matchesMessage(C))return await n.kickedFromGroup(),e(c.value);throw C}):o.data},{...s,placeholderData:o.data});return{local:o,remote:m}}const po={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},mo=u("path",{fill:"currentColor",d:"M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),fo=[mo];function ho(t,e){return a(),p("svg",po,fo)}const go={name:"mdi-information",render:ho},vo={class:"flex-grow space-y-2"},xn=k({name:"SfBanner",__name:"SfBanner",props:{type:{}},setup(t){return(e,s)=>(a(),p("div",{class:L(["flex p-4 gap-4 rounded-lg items-center",{"bg-neutral":e.type==="plain","bg-secondary bg-opacity-10 text-secondary":e.type==="info","bg-warning bg-opacity-10 text-warning":e.type==="warning","bg-error bg-opacity-10 text-error":e.type==="error"}])},[e.type!=="plain"?(a(),h(r(go),{key:0,class:"icon flex-shrink-0"})):x("v-if",!0),u("div",vo,[e.$slots.title?(a(),p("h3",{key:0,class:L(["text-lg font-bold",{"text-secondary":e.type==="info","text-warning":e.type==="warning","text-error":e.type==="error"}])},[A(e.$slots,"title")],2)):x("v-if",!0),u("p",{class:L({"text-secondary":e.type==="info","text-warning":e.type==="warning","text-error":e.type==="error"})},[A(e.$slots,"default")],2)]),A(e.$slots,"buttons")],2))}});function Cn(t){return t instanceof Error?t.message:typeof t=="string"?t:"Unknown error message"}const _o={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},wo=u("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),bo=[wo];function yo(t,e){return a(),p("svg",_o,bo)}const In={name:"mdi-close",render:yo},$o=k({name:"RequiredSitesWarningDialog",__name:"RequiredSitesWarningDialog",props:{okClick:{type:Function},dialogName:{}},setup(t){const e=t,{t:s}=E(),n=U();function l(){n.hide(e.dialogName),e.okClick()}const d=y();function c(){Te(d)}return(f,o)=>(a(),h(ie,{name:f.dialogName,onAfterShowAnimation:c},{default:$(()=>[B(ee,{class:"w-96","data-testid":"focus-mode-required-alert"},{title:$(()=>[A(f.$slots,"title")]),body:$(()=>[u("p",null,[A(f.$slots,"body")])]),buttons:$(()=>[u("button",{ref_key:"okButton",ref:d,class:"btn btn-primary",onClick:l},w(r(s)("ok")),513)]),_:3})]),_:3},8,["name"]))}}),Dn=k({name:"FocusModeRequiredSitesWarningDialog",__name:"FocusModeRequiredSitesWarningDialog",setup(t){const{t:e}=E(),s=Jt(),n=te();function l(){s.show({descriptionMessage:e("focusMode.addWebsiteDescription"),async addApp(c){await n.addFocusWebsite(c)}})}function d(){l()}return(c,f)=>(a(),h($o,{"ok-click":d,"dialog-name":r(D).FocusModeRequiredSitesWarning},{title:$(()=>[W(w(r(e)("focusMode.title")),1)]),body:$(()=>[W(w(r(e)("focusMode.requiredSitesMessage")),1)]),_:1},8,["dialog-name"]))}}),ko=["id"],So=k({name:"ChallengeInput",__name:"ChallengeInput",props:oe({id:{},inputProps:{},autofocus:{type:Boolean},defaultChallenge:{}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(t){const e=t,s=ne(t,"modelValue");s.value=e.defaultChallenge||"";const n=y(!1),l=y();function d(o){!e.defaultChallenge&&o.ctrlKey&&o.preventDefault()}let c=s.value.length;P(s,o=>{!e.defaultChallenge&&o.length-c>1&&(s.value=""),c=o.length});function f(){var o,i;(i=(o=l.value)==null?void 0:o.focus)==null||i.call(o)}return se(()=>{e.autofocus&&f()}),(o,i)=>(a(),p("div",{class:L(["relative h-14 bg-base-content bg-opacity-5 dark:bg-opacity-[0.15] overflow-hidden transition-all ring-primary ring-opacity-adaptive ease-linear rounded",{"ring-4":r(n)}])},[re(u("textarea",M({ref_key:"input",ref:l,id:o.id,autocomplete:"off",spellcheck:"false",class:"resize-none min-w-0 w-full h-full absolute inset-0 bg-transparent outline-none border-none box-border transition-all pl-2 pr-2 pt-2 pb-2 text-left text-base","onUpdate:modelValue":i[0]||(i[0]=m=>s.value=m)},o.inputProps,{placeholder:"Type your challenge here...",onKeydown:d,onFocus:i[1]||(i[1]=m=>n.value=!0),onBlur:i[2]||(i[2]=m=>n.value=!1)}),null,16,ko),[[Fe,s.value]])],2))}}),xo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Co=u("path",{fill:"currentColor",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"},null,-1),Io=[Co];function Do(t,e){return a(),p("svg",xo,Io)}const Ao={name:"mdi-eye",render:Do},Lo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Po=u("path",{fill:"currentColor",d:"M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"},null,-1),Vo=[Po];function Mo(t,e){return a(),p("svg",Lo,Vo)}const Bo={name:"mdi-eye-off",render:Mo},Uo=["id","type"],To={class:"absolute right-3 top-0 bottom-0 flex w-8 flex-col justify-center"},Fo=k({name:"PinInput",__name:"PinInput",props:oe({id:{},inputProps:{},autofocus:{type:Boolean}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(t){const e=t,s=ne(t,"modelValue"),n=y(!1),l=y("password"),d=y();function c(){var o,i;(i=(o=d.value)==null?void 0:o.focus)==null||i.call(o)}function f(){l.value=l.value=="text"?"password":"text"}return se(()=>{e.autofocus&&c()}),(o,i)=>(a(),p("div",{class:L(["relative h-14 bg-base-content bg-opacity-5 dark:bg-opacity-[0.15] overflow-hidden transition-all ring-primary ring-opacity-adaptive ease-linear rounded",{"ring-4":r(n)}])},[re(u("input",M({ref_key:"input",ref:d,id:o.id,type:r(l),autocomplete:"off",spellcheck:"false",class:"font-mono font-black text-base-content min-w-0 w-full h-full absolute inset-0 bg-transparent outline-none border-none box-border transition-all pl-4 pr-14 text-center text-2xl tracking-widest","onUpdate:modelValue":i[0]||(i[0]=m=>s.value=m)},o.inputProps,{onFocus:i[1]||(i[1]=m=>n.value=!0),onBlur:i[2]||(i[2]=m=>n.value=!1)}),null,16,Uo),[[Re,s.value]]),u("div",To,[u("button",{type:"button",class:"btn btn-ghost btn-square absolute z-10 p-2",onClick:i[3]||(i[3]=m=>f())},[r(l)==="password"?(a(),h(r(Ao),{key:0,class:"icon"})):(a(),h(r(Bo),{key:1,class:"icon"}))])])],2))}}),le=V(D.EnterSecurity,{}),Ro=V(D.ResetPin,{}),Go=V(D.SetSecurity,{}),qo=q("security",()=>{const t=Ge("entered-security",!1),{state:e}=qe(),s=le(),n=Go(),l=Ro();function d(){var m;const i=((m=e.value)==null?void 0:m.type)==="challenge"?e.value.challengeText:void 0;return new Promise(v=>{var C;s.show({type:(C=e.value)==null?void 0:C.type,challenge:i,onSuccess:v})})}function c(i){return new Promise(m=>{n.show({type:i,pin:"",onPick:m})})}function f(){return new Promise(i=>{l.show({onSuccess:i})})}async function o(){if(!e.value||t.value)return!0;await d(),t.value=!0}return{securityConfig:e,enteredSecurityBefore:t,enterSecurityIfNeeded:o,enterSecurity:d,setSecurity:c,resetPin:f}}),Eo={class:"text-base-content"},Ho={key:0,class:"border border-solid border-base-content p-2 mb-4 rounded-md"},Wo={class:"border border-solid border-base-content px-2 py-1 rounded-md"},Oo={class:"h-1/4 overflow-y-auto"},Zo={class:"flex flex-row items-center justify-between"},No={key:0,class:"text-error font-bold py-2 text-center"},jo=["onClick"],zo=["onClick"],An=k({name:"EnterSecurityDialog",__name:"EnterSecurityDialog",setup(t){const{t:e}=E(),s=U(),n=le(),l=te(),{resetPin:d}=qo(),c=b(()=>n.options.type!=="challenge"),f=b(()=>c.value?"pin.enter":"challenge.enter"),o=b(()=>c.value?"pin.wrongCode":"challenge.wrongText"),i=b(()=>n.options.challenge),m=b(()=>c.value?"pin.enterDescription":"challenge.enterDescription"),v=y(""),C=y(0),T=y(),H=y(!1);P(v,()=>{H.value=!1});async function Z(){var _,I;await l.isSecurityCorrect(v.value)?((I=(_=n.options).onSuccess)==null||I.call(_),F()):(C.value+=1,H.value=!0)}function ue(){v.value="",C.value=0}async function de(){var _,I;const S=n.options;try{F(),await d(),(I=(_=n.options).onDismiss)==null||I.call(_)}catch{fe(S)}}function pe(){var S;(S=T==null?void 0:T.value.form)!=null&&S.reportValidity()&&Z()}function me(){var S,_;(_=(S=n.options).onDismiss)==null||_.call(S),F()}function F(){n.hide()}function fe(S){n.show(S)}return(S,_)=>(a(),h(ie,{name:r(D).EnterSecurity,visible:!!r(s).visible[r(D).EnterSecurity],onShown:ue,onDismiss:me},{default:$(()=>[B(ee,{ref_key:"scaffold",ref:T,"data-testid":"enter-security-form",class:L({"md:w-[400px] w-[320px]":r(c),"md:w-[600px] w-[320px]":!r(c)}),onSubmit:Z},{title:$(()=>[W(w(r(e)(r(f))),1)]),body:$(()=>[u("p",Eo,w(r(e)(r(m))),1),r(c)?x("v-if",!0):(a(),p("fieldset",Ho,[u("legend",Wo,w(r(e)("challenge.reType")),1),u("div",Oo,w(r(i)),1)])),r(c)?(a(),h(Fo,{key:1,id:"pin","data-testid":"pin-input",class:"h-20",autofocus:!0,"input-props":{minLength:4,maxLength:20,required:!0},modelValue:r(v),"onUpdate:modelValue":_[0]||(_[0]=I=>K(v)?v.value=I:null)},null,8,["modelValue"])):(a(),h(So,{key:2,id:"challenge","data-testid":"challenge-input",class:"h-36",autofocus:!0,"input-props":{minLength:10,maxLength:1e3,required:!0},modelValue:r(v),"onUpdate:modelValue":_[1]||(_[1]=I=>K(v)?v.value=I:null)},null,8,["modelValue"])),u("div",Zo,[r(C)>0&&r(H)?(a(),p("p",No,w(r(e)(r(o))),1)):x("v-if",!0),r(C)>2&&r(c)?(a(),p("button",{key:1,onClick:Y(de,["prevent"]),class:"link link-primary"},w(r(e)("pin.forgot")),9,jo)):x("v-if",!0)])]),buttons:$(()=>[u("button",{"data-testid":"confirm",class:"btn btn-primary",type:"submit",onClick:pe},w(r(e)("continue")),1),u("button",{class:"btn btn-neutral",onClick:Y(F,["prevent"])},w(r(e)("cancel")),9,zo)]),_:1},8,["class"])]),_:1},8,["name","visible"]))}});function Ln(t){const e=Ee(t);return b(()=>e.value.getTime())}const Pn=V(D.AddAppToIgnoreListDialog,{appName:"",addAppToIgnoreList(){throw new Error("Function not implemented.")},onSubmit(){throw new Error("Function not implemented.")}});export{_n as $,wn as A,bn as B,Ln as C,co as D,Pn as E,An as F,Dn as G,nn as H,Ht as I,rn as J,an as K,dn as L,fn as M,Yt as N,yn as O,$n as P,io as Q,Qo as R,g as S,qo as T,un as U,hn as V,pn as W,ln as X,mn as Y,on as Z,Xo as _,sn as a,U as b,Jo as c,In as d,gn as e,V as f,ie as g,Jt as h,en as i,Xt as j,He as k,tn as l,zt as m,vn as n,uo as o,kn as p,eo as q,Sn as r,xn as s,Cn as t,cn as u,$o as v,Ro as w,Fo as x,Go as y,So as z};
