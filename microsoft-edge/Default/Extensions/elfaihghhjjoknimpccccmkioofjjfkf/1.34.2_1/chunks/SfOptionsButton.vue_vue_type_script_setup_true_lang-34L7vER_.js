import{c as f}from"./useAddAppToIgnoreListDialogStore-Ki2J31d-.js";import{I as _}from"./chevron-down-r-m6rVAr.js";import{f as k,L as y,o as i,g as l,i as s,Q as r,j as o,k as d,s as x,O as m,w as v,F as u,N as C}from"./defineAppConfig-GTQ5Bvuh.js";const w=["data-testid"],$=s("div",{class:"w-px self-stretch bg-base-100 z-10"},null,-1),g={class:"flex flex-col p-2 w-48 text-left"},h={class:"text-sm text-opacity-secondary px-4 py-1"},B={class:"relative"},O=["data-testid","onClick"],S=k({name:"SfOptionsButton",__name:"SfOptionsButton",props:{buttonText:{},dropdownTitle:{},items:{}},emits:["click","clickOption"],setup(b){const a=b,{baseDialogProps:c,show:p}=y();return(e,n)=>(i(),l(u,null,[s("div",m(e.$attrs,{class:"join relative"}),[s("button",{"data-testid":`${a.buttonText}-button`,class:"btn btn-primary join-item",onClick:n[0]||(n[0]=t=>e.$emit("click"))},r(a.buttonText),9,w),$,s("button",{"data-testid":"options-button",class:"btn btn-primary btn-square join-item",onClick:n[1]||(n[1]=(...t)=>o(p)&&o(p)(...t))},[d(o(_),{class:x(["icon-sm ease-linear transform transition-transform",{"rotate-180":o(c).visible}])},null,8,["class"])])],16),d(f,m({class:"ml-auto"},o(c)),{default:v(()=>[s("form",g,[s("p",h,r(a.dropdownTitle),1),s("ul",B,[(i(!0),l(u,null,C(e.items,t=>(i(),l("li",{key:t.display,"data-testid":`option-${t.value}`,class:"px-4 py-3 clickable rounded cursor-pointer text-base-content opacity-primary",onClick:T=>e.$emit("clickOption",t.value)},r(t.display),9,O))),128))])])]),_:1},16)],64))}});export{S as _};
