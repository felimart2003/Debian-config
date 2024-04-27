import{f as u,bg as m,_ as d,n as v,o,q as y,w as C,h as p,aj as h,I as f,bh as b,aC as L,r as g,g as l,i as _,s as w,y as c,aw as I,x as $,c as R,bi as S}from"./defineAppConfig-bSouF0-Z.js";const k=u({name:"I18nT",components:{Translation:m},props:{tag:{type:String,default:"span"},keypath:{type:String,required:!0}}});function T(e,a,s,t,i,n){const r=v("translation");return o(),y(r,{tag:e.tag,scope:"global",keypath:e.keypath},{default:C(()=>[p(e.$slots,"default")]),_:3},8,["tag","keypath"])}const H=d(k,[["render",T]]);function E(){return h(f.PanelAppId)}const F=b(()=>{const e=h(f.AppRemoteConfig),{mutate:a,mutateAsync:s,data:t,...i}=L(async()=>{n.value=await e.fetchLatest()}),n=g(e.getValue());return e.getRestoredPromise().then(r=>{n.value=r}),e.addChangeListener(r=>{n.value=r}),{fetchLatest:a,fetchLatestAsync:s,restoredPromise:e.getRestoredPromise(),remoteConfig:n,...i}}),x={"data-testid":"spinner",class:"loader w-12 h-12 border-4 border-secondary"},A=u({name:"SfSpinner",__name:"SfSpinner",setup(e){return(a,s)=>(o(),l("span",x))}}),J=d(A,[["__scopeId","data-v-30ecdc16"]]),B=["data-testid"],M={class:"text-opacity-primary text-2xl font-mono"},N=u({name:"DigitInputTile",__name:"DigitInputTile",props:{index:{},focused:{type:Boolean}},setup(e){return(a,s)=>(o(),l("li",{class:w(["w-12 h-14 bg-neutral flex items-center justify-center rounded ring-primary transition",{"ring-4 ring-opacity-adaptive":a.focused}]),"data-testid":`digit-${a.index+1}`},[_("p",M,[p(a.$slots,"default")])],10,B))}});function Y(e){const a=g(!1);return c(e.inputRef,"focus",()=>{a.value=!0}),c(e.inputRef,"blur",()=>{a.value=!1}),e.focusOnMount&&I(()=>{setTimeout(()=>{var t;return(t=e.inputRef.value)==null?void 0:t.focus()})}),$(e.inputValue,t=>{t.length>e.inputLength&&(e.inputValue.value=t.substring(0,e.inputLength))}),c(e.inputRef,"keypress",t=>t.charCode!=8&&t.charCode==0||t.charCode>=48&&t.charCode<=57),{digits:R(()=>S(e.inputLength,t=>{const n=t===e.inputLength-1?e.inputValue.value.length>=t:e.inputValue.value.length===t;return{value:e.inputValue.value[t]??"",focused:a.value&&n}}))}}const V={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},P=_("path",{fill:"currentColor",d:"m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"},null,-1),j=[P];function D(e,a){return o(),l("svg",V,j)}const z={name:"mdi-help-circle",render:D},G="/assets/new-tab-dark-R_hNH8Yb.png",K="/assets/new-tab-light-iY15RJCJ.png";export{H as I,J as S,N as _,E as a,Y as b,z as c,K as d,G as n,F as u};
