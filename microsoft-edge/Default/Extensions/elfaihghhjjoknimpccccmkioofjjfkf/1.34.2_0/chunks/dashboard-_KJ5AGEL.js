import{r as M,u as H,a as g,b as R,c as D,d as U,e as W,f as $,o,g as h,h as b,i as r,j as s,k as a,F as N,l as f,p as Y,m as F,_ as K,n as x,q as v,w as i,s as Z,t as G,v as j,x as I,y as q,D as u,z as k,A as z,B as J,I as c,C as Q,E as X,G as L,Z as ee,H as te,J as se}from"./defineAppConfig-GTQ5Bvuh.js";import{u as ae,a as oe,b as ie,I as ne,R as re}from"./useAddAppToIgnoreListDialogStore-Ki2J31d-.js";import{_ as ce}from"./SidebarContentContainer.vue_vue_type_script_setup_true_lang-rNC_pOgm.js";import{u as le,a as de,_ as ue,r as E,c as me}from"./recent-apps-provider-OWite7eM.js";import{I as C,u as he}from"./new-tab-light-6CDZBy0y.js";import{l as pe,I as _e}from"./cog-kC_IiSfW.js";import{I as fe}from"./timer-ald2Cwco.js";function ve(e){const{state:t,mutateAsync:n}=ae(),l=M(!1),{state:d}=oe(),{state:y}=H(),A=g("NewTabPreference");R(()=>{l.value=!0},(e==null?void 0:e.autoShowTimeout)??1e3);const w=16875648e5,P=D(()=>l.value&&!y.value&&A&&t.value&&d.value!=null&&d.value<w);function S(){return n(!1)}function T(){return n(!0)}return{isNewTabPromotionVisible:P,dismissWarning:S,restoreWarning:T}}function ge(){const e=new Date().getFullYear(),{state:t}=U(),{state:n}=W(),l=D(()=>{const d=n.value??e;return e-d>=18});return D(()=>t.value&&l.value)}const O=e=>(Y("data-v-53f0c379"),e=e(),F(),e),be={class:"root"},ye={class:"navigation"},Ae={class:"hidden lg:flex px-1.5 space-x-4 items-center"},we=["src"],Pe=O(()=>r("div",{class:"hidden lg:block h-4"},null,-1)),Se=O(()=>r("div",{class:"hidden lg:block flex-1"},null,-1)),Te=O(()=>r("div",{class:"hidden lg:block h-px bg-base-content bg-opacity-divider"},null,-1)),Ie=$({name:"SidebarLayout",__name:"SidebarLayout",setup(e){return(t,n)=>(o(),h("div",be,[b(t.$slots,"content",{},void 0,!0),r("div",ye,[r("div",Ae,[r("img",{src:s(pe),class:"w-9 h-9"},null,8,we),a(C,{tag:"h2",keypath:"appName",class:"text-lg font-medium"})]),Pe,b(t.$slots,"primary-items",{},void 0,!0),t.$slots["bottom-items"]?(o(),h(N,{key:0},[Se,Te,b(t.$slots,"bottom-items",{},void 0,!0)],64)):f("v-if",!0)])]))}}),ke=K(Ie,[["__scopeId","data-v-53f0c379"]]),m=$({name:"SidebarMenuItem",__name:"SidebarMenuItem",props:{href:{},keypath:{},sidebarOnly:{type:Boolean}},setup(e){return(t,n)=>{const l=x("router-link");return o(),v(l,{class:Z(["menu-item clickable",{"sidebar-only":t.sidebarOnly}]),to:t.href},{default:i(()=>[b(t.$slots,"image"),a(C,{tag:"p",keypath:t.keypath},null,8,["keypath"])]),_:3},8,["class","to"])}}}),De={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},$e=r("path",{fill:"currentColor",d:"M4.93 4.93A9.969 9.969 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.41-1.41A7.938 7.938 0 0 1 4 12c0-2.21.89-4.22 2.34-5.66L4.93 4.93m14.14 0l-1.41 1.41A7.955 7.955 0 0 1 20 12c0 2.22-.89 4.22-2.34 5.66l1.41 1.41A9.969 9.969 0 0 0 22 12c0-2.76-1.12-5.26-2.93-7.07M7.76 7.76A5.98 5.98 0 0 0 6 12c0 1.65.67 3.15 1.76 4.24l1.41-1.41A3.99 3.99 0 0 1 8 12c0-1.11.45-2.11 1.17-2.83L7.76 7.76m8.48 0l-1.41 1.41A3.99 3.99 0 0 1 16 12c0 1.11-.45 2.11-1.17 2.83l1.41 1.41A5.98 5.98 0 0 0 18 12c0-1.65-.67-3.15-1.76-4.24M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"},null,-1),Oe=[$e];function Le(e,t){return o(),h("svg",De,Oe)}const Ee={name:"mdi-access-point",render:Le},Ne={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},xe=r("path",{fill:"currentColor",d:"M13 13h-2V7h2m-2 8h2v2h-2m4.73-14H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3Z"},null,-1),Ce=[xe];function Be(e,t){return o(),h("svg",Ne,Ce)}const Ve={name:"mdi-alert-octagon",render:Be},Me={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},He=r("path",{fill:"currentColor",d:"m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"},null,-1),Re=[He];function Ue(e,t){return o(),h("svg",Me,Re)}const We={name:"mdi-youtube",render:Ue},Ye={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Fe=r("path",{fill:"currentColor",d:"M11 18h2v-2h-2v2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4Z"},null,-1),Ke=[Fe];function Ze(e,t){return o(),h("svg",Ye,Ke)}const Ge={name:"mdi-help-circle-outline",render:Ze},je={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},qe=r("path",{fill:"currentColor",d:"m12 3l8 6v12h-5v-7H9v7H4V9l8-6Z"},null,-1),ze=[qe];function Je(e,t){return o(),h("svg",je,ze)}const Qe={name:"mdi-home-variant",render:Je},Xe=$({name:"DashboardIndex",__name:"DashboardIndex",setup(e){const{reportEvent:t}=G(),n=le();j();const{remoteConfig:l}=he(),d=ie(),{dismissWarning:y,isNewTabPromotionVisible:A}=ve({autoShowTimeout:250}),{isPromoteDesktopPopupVisible:w}=de({autoShowTimeout:250});I(A,(p,_)=>{p&&!_&&(d.show(k.NewTabPromotion),y(),t("AUTO_SHOW_NEW_TAB_PROMOTION"))}),I(w,(p,_)=>{p&&!_&&(d.show(k.PromoteDesktop),t("AUTO_SHOW_PROMOTE_DESKTOP_POPUP"))});const P=ge();I(P,(p,_)=>{p&&!_&&d.show(k.TermsOfService)},{immediate:!0});const S=g("FocusMode"),T=g("LimitsOnTheGo"),B=g("YoutubePlus");return q(window,"reset-dashboard",()=>{n.replace("/")}),(p,_)=>{const V=x("router-view");return o(),h(N,null,[a(ke,null,{"primary-items":i(()=>[a(m,{"data-testid":"nav-stats",keypath:"dashboard.statsTitle",href:s(u).stats},{image:i(()=>[a(s(Qe),{class:"icon"})]),_:1},8,["href"]),a(m,{"data-testid":"nav-limits",keypath:"websiteLimits",href:s(u).limits},{image:i(()=>[a(s(Ve),{class:"icon"})]),_:1},8,["href"]),s(S)?(o(),v(m,{key:0,"data-testid":"nav-focus",keypath:"focusMode.title",href:s(u).focus},{image:i(()=>[a(s(fe),{class:"icon"})]),_:1},8,["href"])):f("v-if",!0),s(T)?(o(),v(m,{key:1,"data-testid":"nav-lotg",keypath:"limitsOnTheGo.title",href:s(u).lotg,"sidebar-only":""},{image:i(()=>[a(s(Ee),{class:"icon"})]),_:1},8,["href"])):f("v-if",!0),s(B)?(o(),v(m,{key:2,"data-testid":"nav-youtube-plus",keypath:"youtubePlus.title",href:s(u).youtubePlus,"sidebar-only":""},{image:i(()=>[a(s(We),{class:"icon"})]),_:1},8,["href"])):f("v-if",!0)]),"bottom-items":i(()=>[s(l).crossPlatform?(o(),v(m,{key:0,"data-testid":"nav-devices",keypath:"manageDevices",href:s(u).devices},{image:i(()=>[a(s(ne),{class:"icon"})]),_:1},8,["href"])):f("v-if",!0),a(m,{"data-testid":"nav-settings",keypath:"settings",href:s(u).settings},{image:i(()=>[a(s(_e),{class:"icon"})]),_:1},8,["href"]),a(m,{"data-testid":"nav-help",keypath:"help.title",href:s(u).help,"sidebar-only":""},{image:i(()=>[a(s(Ge),{class:"icon"})]),_:1},8,["href"])]),content:i(()=>[a(V)]),_:1}),a(ue)],64)}}});function et(e){window.document.title=z.global.t("appName");const t=re(Xe,["h-full"]),n=J("dashboard",t,e,E).provide(c.GetAdditionalDebugInfo,e.getAdditionalDebugInfo).provide(c.DefaultUsageLimitType,e.defaultUsageLimitType).provide(c.DefaultAppPlatform,e.defaultAppPlatform).provide(c.InstalledAppsProvider,e.installedAppsProvider).provide(c.SettingsHelper,e.settingsHelper).provide(c.PlatformLocales,e.platformLocales).provide(c.ABTests,e.abTests).provide(c.WhitelistService,e.whitelistService).provide(c.LastSyncedAtStorageKey,e.lastSyncedAtStorageKey).component("page-layout-content-container",ce);return e.analytics.reportEvent("OPENED_DASHBOARD"),{mount:n.mount.bind(n),router:E}}const tt="@stayfree/usage#last-uploaded-at-key",st=Q({context:"dashboard",getAdditionalDebugInfo:async()=>({lastUploadedAt:await X.getItem("@stayfree/usage#last-uploaded-at-key"),platformInfo:await L.runtime.getPlatformInfo(),alarms:await L.alarms.getAll()}),defaultUsageLimitType:ee.Web,defaultAppPlatform:te.Web,installedAppsProvider:me(se()),lastSyncedAtStorageKey:tt});et(st).mount("#app");
