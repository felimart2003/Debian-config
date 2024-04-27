import{u as T}from"./useVibrantColor-lZfnBXxU.js";import{a$ as U,c as n,b0 as F,bi as L,aR as H,bU as N,af as V,f as w,Y as B,aJ as E,o as c,g as b,Q as m,j as t,aV as $,S as d,ai as O,I as R,r as Q,D as h,a as j,n as G,k as z,w as K,l as p,s as g,q as I,i as a,P as q,aA as J,F as W,p as Y,m as X,_ as Z,b4 as ee,av as S,V as x,bV as te}from"./defineAppConfig-bSouF0-Z.js";import{u as ae}from"./useAddIgnoredAppMutation-DhiEEnkA.js";import{M as se,r as oe,E as re,_ as ie,m as ne}from"./useAddAppToIgnoreListDialogStore-3TvFnIDf.js";import{g as le}from"./useGetSessionSummariesQuery-T1BAMH4j.js";const pe=8,ce=13,D="hourly-usage";function Ue(s,e=H()){const{state:r}=U(),i=n(()=>r.value==F.Hour24),{state:l}=se();return oe([D,s,l],e.getChartData,{keepPreviousData:!0,placeholderData:{labels:L(ce,u=>{const f=(pe+u)*V;return N(f,{is24HourFormat:i.value})}),series:[]}})}const ue=["onClick"],me=w({name:"AddAppToIgnoreList",__name:"AddAppToIgnoreList",props:{appName:{},appId:{},platform:{}},setup(s){const e=s,{t:r}=B(),i=E(),{mutate:l}=ae();function u(){e.platform!==d.Category&&l({appId:e.appId,platform:e.platform})}async function f(){await i.invalidateQueries({queryKey:`remote-${D}`}),await i.invalidateQueries({queryKey:`remote-${le}`})}const v=re();function _(){v.show({appName:e.appName,addAppToIgnoreList:u,onSubmit:f})}return(A,k)=>(c(),b("button",{class:"btn btn-primary btn-outline btn-xs",onClick:$(_,["prevent","stop"])},m(t(r)("hide")),9,ue))}});function de(){return O(R.IsPopup,!1)}const fe=s=>(Y("data-v-0c2a1a22"),s=s(),X(),s),ye={class:"mr-4 flex-shrink-0 w-10 h-10"},ve={key:1,class:"animated-spinner absolute inset-0 rounded-full"},ge={class:"flex-1 flex flex-col min-w-0"},be={class:"flex flex-row space-x-4 justify-between items-end"},_e={class:"font-medium text-base-content text-opacity-primary truncate"},he={class:"font-mono text-opacity-primary pb-0.5 text-sm flex-shrink-0"},Ie={class:"flex flex-row space-x-2 items-center"},Se={class:"relative h-1 flex-1 bg-black bg-opacity-[0.15] dark:bg-opacity-30 rounded-sm"},xe={class:"flex items-center gap-2 text-base-content text-opacity-secondary text-xs"},Ae=fe(()=>a("span",null,"•",-1)),ke=w({name:"SessionSummaryListItem",__name:"SessionSummaryListItem",props:{appId:{},displayName:{},iconUrl:{},primaryMetricValue:{},primaryMetric:{},primaryMetricIntegerPercent:{},secondaryMetric:{},tertiaryMetric:{},active:{type:Boolean},platform:{},showPlatformIcon:{type:Boolean},parentGroupId:{},selected:{type:Boolean}},setup(s){const e=s,r=n(()=>e.displayName===void 0?e.appId:e.displayName),i=Q(),l=o=>{i.value=o},{isVibrantLoaded:u,vibrantColor:f}=T(i,{disableDarkModifier:!0}),v=n(()=>u?f.value??"oklch(var(--s))":"transparent"),_=n(()=>`background-color: ${v.value}; right: ${100-(u.value?e.primaryMetricIntegerPercent:0)}%`),A=n(()=>{if(e.platform===d.AppGroup)return h.groupDetailsFor(e.appId);if(e.platform===d.Category)throw Error("detailsHref categories not implemented yet");return e.parentGroupId&&typeof e.parentGroupId=="number"?h.groupAppDetailsFor(e.parentGroupId,e.platform,e.appId):h.appDetailsFor(e.platform,e.appId)}),k=j("Advertisements"),y=n(()=>e.platform===d.Web||i.value==null),C=de(),M=n(()=>e.platform!==d.Category&&!C);return(o,we)=>{const P=G("router-link");return c(),b("li",{class:g(["px-4 rounded-md ring-hover group",{"bg-base-content bg-opacity-divider":o.selected}])},[z(P,{class:"flex flex-row py-2 items-center relative",to:t(A)},{default:K(()=>[a("div",ye,[p(" Small icon with activity circle "),a("div",{class:g({"bg-base-content bg-opacity-divider rounded-full p-2 relative":t(y),"p-1":!t(y)})},[o.platform!==t(d).Category?(c(),I(ie,{key:0,class:g({icon:t(y),"rounded-md object-contain w-full h-full":!t(y)}),src:e,platform:o.platform,onUrlChanged:l},null,8,["class","src","platform"])):p("v-if",!0),o.active&&t(y)?(c(),b("div",ve)):p("v-if",!0)],2)]),a("div",ge,[a("div",be,[a("span",_e,[q(m(t(r))+" ",1),t(M)?(c(),I(me,{key:0,class:"opacity-0 group-hover:opacity-100 transition-opacity ml-2 -mt-2","app-name":t(r),"app-id":e.appId,platform:e.platform},null,8,["app-name","app-id","platform"])):p("v-if",!0)]),a("p",he,m(o.primaryMetric),1)]),a("div",Ie,[a("div",Se,[a("div",{class:"absolute left-0 top-0 bottom-0 rounded-sm transition-all ease-linear bg-secondary",style:J(t(_))},null,4)]),a("p",{class:g(["text-opacity-secondary opacity-0 transition-opacity font-mono w-9 text-right text-sm",{"opacity-100":!!t(v)}])},m(o.$t("percent",{integer:Math.floor(o.primaryMetricIntegerPercent)})),3)]),a("p",xe,[o.showPlatformIcon?(c(),I(ne,{key:0,class:"icon-sm inline opacity-secondary",platform:o.platform},null,8,["platform"])):p("v-if",!0),a("span",null,m(o.secondaryMetric),1),t(k)?(c(),b(W,{key:1},[p(" eslint-disable-next-line @intlify/vue-i18n/no-raw-text "),Ae,a("span",null,m(o.tertiaryMetric),1)],64)):p("v-if",!0)])])]),_:1},8,["to"])],2)}}}),Fe=Z(ke,[["__scopeId","data-v-0c2a1a22"]]),Le=ee("selected-filters",()=>{const s=S("selected-metric",x.UsageTime),e=S("selected-platform",null),r=S("selected-device",null,{serializer:te.object});function i(){s.value=x.UsageTime,e.value=void 0,r.value=void 0}const l=n(()=>s.value!==x.UsageTime||e.value!==void 0&&e.value!==null||r.value!==void 0&&r.value!==null);return{reset:i,isFiltering:l,selectedMetric:s,platformFilter:e,selectedDevices:r}});export{Fe as S,Ue as a,Le as u};
