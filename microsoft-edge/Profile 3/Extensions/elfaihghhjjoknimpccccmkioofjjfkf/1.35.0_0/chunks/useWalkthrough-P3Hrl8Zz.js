import{$ as re}from"./useAddAppToIgnoreListDialogStore-3TvFnIDf.js";import{y as se}from"./recent-apps-provider-So7C9hQg.js";import{A as q,t as le,r as ae,aw as de,bC as pe}from"./defineAppConfig-bSouF0-Z.js";import{s as ce}from"./sleep-9Kq7Tjeg.js";import{u as ue}from"./useIsNewTabPage-fPhgc3yk.js";let z={};function O(e={}){z={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...e}}function l(e){return e?z[e]:z}function W(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function J(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap(n=>{const i=n.matches(t),o=Array.from(n.querySelectorAll(t));return[...i?[n]:[],...o]}).filter(n=>getComputedStyle(n).pointerEvents!=="none"&&me(n))}function V(e){if(!e||he(e))return;const t=l("smoothScroll");e.scrollIntoView({behavior:!t||ve(e)?"auto":"smooth",inline:"center",block:"center"})}function ve(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}function he(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function me(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}let I={};function x(e,t){I[e]=t}function d(e){return e?I[e]:I}function F(){I={}}let R={};function N(e,t){R[e]=t}function $(e){var t;(t=R[e])==null||t.call(R)}function we(){R={}}function ge(e,t,n,i){let o=d("__activeStagePosition");const a=o||n.getBoundingClientRect(),v=i.getBoundingClientRect(),m=W(e,a.x,v.x-a.x,t),s=W(e,a.y,v.y-a.y,t),h=W(e,a.width,v.width-a.width,t),r=W(e,a.height,v.height-a.height,t);o={x:m,y:s,width:h,height:r},Y(o),x("__activeStagePosition",o)}function X(e){if(!e)return;const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:t.width,height:t.height};x("__activeStagePosition",n),Y(n)}function fe(){const e=d("__activeStagePosition"),t=d("__overlaySvg");if(!e)return;if(!t){console.warn("No stage svg found.");return}const n=window.innerWidth,i=window.innerHeight;t.setAttribute("viewBox",`0 0 ${n} ${i}`)}function ye(e){const t=be(e);document.body.appendChild(t),ee(t,n=>{n.target.tagName==="path"&&$("overlayClick")}),x("__overlaySvg",t)}function Y(e){const t=d("__overlaySvg");if(!t){ye(e);return}const n=t.firstElementChild;if((n==null?void 0:n.tagName)!=="path")throw new Error("no path element found in stage svg");n.setAttribute("d",Z(e))}function be(e){const t=window.innerWidth,n=window.innerHeight,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("driver-overlay","driver-overlay-animated"),i.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("xmlSpace","preserve"),i.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("preserveAspectRatio","xMinYMin slice"),i.style.fillRule="evenodd",i.style.clipRule="evenodd",i.style.strokeLinejoin="round",i.style.strokeMiterlimit="2",i.style.zIndex="10000",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%";const o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d",Z(e)),o.style.fill=l("overlayColor")||"rgb(0,0,0)",o.style.opacity=`${l("overlayOpacity")}`,o.style.pointerEvents="auto",o.style.cursor="auto",i.appendChild(o),i}function Z(e){const t=window.innerWidth,n=window.innerHeight,i=l("stagePadding")||0,o=l("stageRadius")||0,a=e.width+i*2,v=e.height+i*2,m=Math.min(o,a/2,v/2),s=Math.floor(Math.max(m,0)),h=e.x-i+s,r=e.y-i,p=a-s*2,c=v-s*2;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z
    M${h},${r} h${p} a${s},${s} 0 0 1 ${s},${s} v${c} a${s},${s} 0 0 1 -${s},${s} h-${p} a${s},${s} 0 0 1 -${s},-${s} v-${c} a${s},${s} 0 0 1 ${s},-${s} z`}function xe(){const e=d("__overlaySvg");e&&e.remove()}function Ce(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}function K(e){const{element:t}=e;let n=typeof t=="string"?document.querySelector(t):t;n||(n=Ce()),Ee(n,e)}function _e(){const e=d("__activeElement"),t=d("__activeStep");e&&(X(e),fe(),oe(e,t))}function Ee(e,t){const n=Date.now(),i=d("__activeStep"),o=d("__activeElement")||e,a=!o||o===e,v=e.id==="driver-dummy-element",m=o.id==="driver-dummy-element",s=l("animate"),h=t.onHighlightStarted||l("onHighlightStarted"),r=(t==null?void 0:t.onHighlighted)||l("onHighlighted"),p=(i==null?void 0:i.onDeselected)||l("onDeselected"),c=l(),w=d();!a&&p&&p(m?void 0:o,i,{config:c,state:w}),h&&h(v?void 0:e,t,{config:c,state:w});const f=!a&&s;let g=!1;Se(),x("previousStep",i),x("previousElement",o),x("activeStep",t),x("activeElement",e);const u=()=>{if(d("__transitionCallback")!==u)return;const y=Date.now()-n,E=400-y<=400/2;t.popover&&E&&!g&&f&&(j(e,t),g=!0),l("animate")&&y<400?ge(y,400,o,e):(X(e),r&&r(v?void 0:e,t,{config:l(),state:d()}),x("__transitionCallback",void 0),x("__previousStep",i),x("__previousElement",o),x("__activeStep",t),x("__activeElement",e)),window.requestAnimationFrame(u)};x("__transitionCallback",u),window.requestAnimationFrame(u),V(e),!f&&t.popover&&j(e,t),o.classList.remove("driver-active-element","driver-no-interaction"),o.removeAttribute("aria-haspopup"),o.removeAttribute("aria-expanded"),o.removeAttribute("aria-controls"),l("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}function ke(){var e;(e=document.getElementById("driver-dummy-element"))==null||e.remove(),document.querySelectorAll(".driver-active-element").forEach(t=>{t.classList.remove("driver-active-element","driver-no-interaction"),t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls")})}function S(){const e=d("__resizeTimeout");e&&window.cancelAnimationFrame(e),x("__resizeTimeout",window.requestAnimationFrame(_e))}function Le(e){var t;if(!d("isInitialized")||!(e.key==="Tab"||e.keyCode===9))return;const n=d("__activeElement"),i=(t=d("popover"))==null?void 0:t.wrapper,o=J([...i?[i]:[],...n?[n]:[]]),a=o[0],v=o[o.length-1];if(e.preventDefault(),e.shiftKey){const m=o[o.indexOf(document.activeElement)-1]||v;m==null||m.focus()}else{const m=o[o.indexOf(document.activeElement)+1]||a;m==null||m.focus()}}function Q(e){(l("allowKeyboardControl")??!0)&&(e.key==="Escape"?$("escapePress"):e.key==="ArrowRight"?$("arrowRightPress"):e.key==="ArrowLeft"&&$("arrowLeftPress"))}function ee(e,t,n){const i=(o,a)=>{const v=o.target;e.contains(v)&&((!n||n(v))&&(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation()),a==null||a(o))};document.addEventListener("pointerdown",i,!0),document.addEventListener("mousedown",i,!0),document.addEventListener("pointerup",i,!0),document.addEventListener("mouseup",i,!0),document.addEventListener("click",o=>{i(o,t)},!0)}function Pe(){window.addEventListener("keyup",Q,!1),window.addEventListener("keydown",Le,!1),window.addEventListener("resize",S),window.addEventListener("scroll",S)}function $e(){window.removeEventListener("keyup",Q),window.removeEventListener("resize",S),window.removeEventListener("scroll",S)}function Se(){const e=d("popover");e&&(e.wrapper.style.display="none")}function j(e,t){var n,i;let o=d("popover");o&&document.body.removeChild(o.wrapper),o=Be(),document.body.appendChild(o.wrapper);const{title:a,description:v,showButtons:m,disableButtons:s,showProgress:h,nextBtnText:r=l("nextBtnText")||"Next &rarr;",prevBtnText:p=l("prevBtnText")||"&larr; Previous",progressText:c=l("progressText")||"{current} of {total}"}=t.popover||{};o.nextButton.innerHTML=r,o.previousButton.innerHTML=p,o.progress.innerHTML=c,a?(o.title.innerText=a,o.title.style.display="block"):o.title.style.display="none",v?(o.description.innerHTML=v,o.description.style.display="block"):o.description.style.display="none";const w=m||l("showButtons"),f=h||l("showProgress")||!1,g=(w==null?void 0:w.includes("next"))||(w==null?void 0:w.includes("previous"))||f;o.closeButton.style.display=w.includes("close")?"block":"none",g?(o.footer.style.display="flex",o.progress.style.display=f?"block":"none",o.nextButton.style.display=w.includes("next")?"block":"none",o.previousButton.style.display=w.includes("previous")?"block":"none"):o.footer.style.display="none";const u=s||l("disableButtons")||[];u!=null&&u.includes("next")&&(o.nextButton.disabled=!0,o.nextButton.classList.add("driver-popover-btn-disabled")),u!=null&&u.includes("previous")&&(o.previousButton.disabled=!0,o.previousButton.classList.add("driver-popover-btn-disabled")),u!=null&&u.includes("close")&&(o.closeButton.disabled=!0,o.closeButton.classList.add("driver-popover-btn-disabled"));const y=o.wrapper;y.style.display="block",y.style.left="",y.style.top="",y.style.bottom="",y.style.right="",y.id="driver-popover-content",y.setAttribute("role","dialog"),y.setAttribute("aria-labelledby","driver-popover-title"),y.setAttribute("aria-describedby","driver-popover-description");const E=o.arrow;E.className="driver-popover-arrow";const k=((n=t.popover)==null?void 0:n.popoverClass)||l("popoverClass")||"";y.className=`driver-popover ${k}`.trim(),ee(o.wrapper,L=>{var A,B,H;const P=L.target,M=((A=t.popover)==null?void 0:A.onNextClick)||l("onNextClick"),T=((B=t.popover)==null?void 0:B.onPrevClick)||l("onPrevClick"),D=((H=t.popover)==null?void 0:H.onCloseClick)||l("onCloseClick");if(P.classList.contains("driver-popover-next-btn"))return M?M(e,t,{config:l(),state:d()}):$("nextClick");if(P.classList.contains("driver-popover-prev-btn"))return T?T(e,t,{config:l(),state:d()}):$("prevClick");if(P.classList.contains("driver-popover-close-btn"))return D?D(e,t,{config:l(),state:d()}):$("closeClick")},L=>!(o!=null&&o.description.contains(L))&&!(o!=null&&o.title.contains(L))&&L.className.includes("driver-popover")),x("popover",o);const b=((i=t.popover)==null?void 0:i.onPopoverRender)||l("onPopoverRender");b&&b(o,{config:l(),state:d()}),oe(e,t),V(y);const C=e.classList.contains("driver-dummy-element"),_=J([y,...C?[]:[e]]);_.length>0&&_[0].focus()}function te(){const e=d("popover");if(!(e!=null&&e.wrapper))return;const t=e.wrapper.getBoundingClientRect(),n=l("stagePadding")||0,i=l("popoverOffset")||0;return{width:t.width+n+i,height:t.height+n+i,realWidth:t.width,realHeight:t.height}}function U(e,t){const{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.top-o,window.innerHeight-i.realHeight-a.width),a.width):e==="end"?Math.max(Math.min(n.top-(i==null?void 0:i.realHeight)+n.height+o,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):e==="center"?Math.max(Math.min(n.top+n.height/2-(i==null?void 0:i.realHeight)/2,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):0}function G(e,t){const{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.left-o,window.innerWidth-i.realWidth-a.width),a.width):e==="end"?Math.max(Math.min(n.left-(i==null?void 0:i.realWidth)+n.width+o,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):e==="center"?Math.max(Math.min(n.left+n.width/2-(i==null?void 0:i.realWidth)/2,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):0}function oe(e,t){const n=d("popover");if(!n)return;const{align:i="start",side:o="left"}=(t==null?void 0:t.popover)||{},a=i,v=e.id==="driver-dummy-element"?"over":o,m=l("stagePadding")||0,s=te(),h=n.arrow.getBoundingClientRect(),r=e.getBoundingClientRect(),p=r.top-s.height;let c=p>=0;const w=window.innerHeight-(r.bottom+s.height);let f=w>=0;const g=r.left-s.width;let u=g>=0;const y=window.innerWidth-(r.right+s.width);let E=y>=0;const k=!c&&!f&&!u&&!E;let b=v;if(v==="top"&&c?E=u=f=!1:v==="bottom"&&f?E=u=c=!1:v==="left"&&u?E=c=f=!1:v==="right"&&E&&(u=c=f=!1),v==="over"){const C=window.innerWidth/2-s.realWidth/2,_=window.innerHeight/2-s.realHeight/2;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${_}px`,n.wrapper.style.bottom="auto"}else if(k){const C=window.innerWidth/2-(s==null?void 0:s.realWidth)/2,_=10;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${_}px`,n.wrapper.style.top="auto"}else if(u){const C=Math.min(g,window.innerWidth-(s==null?void 0:s.realWidth)-h.width),_=U(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:h});n.wrapper.style.left=`${C}px`,n.wrapper.style.top=`${_}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",b="left"}else if(E){const C=Math.min(y,window.innerWidth-(s==null?void 0:s.realWidth)-h.width),_=U(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:h});n.wrapper.style.right=`${C}px`,n.wrapper.style.top=`${_}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",b="right"}else if(c){const C=Math.min(p,window.innerHeight-s.realHeight-h.width);let _=G(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:h});n.wrapper.style.top=`${C}px`,n.wrapper.style.left=`${_}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",b="top"}else if(f){const C=Math.min(w,window.innerHeight-(s==null?void 0:s.realHeight)-h.width);let _=G(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:h});n.wrapper.style.left=`${_}px`,n.wrapper.style.bottom=`${C}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",b="bottom"}k?n.arrow.classList.add("driver-popover-arrow-none"):Ae(a,b,e)}function Ae(e,t,n){const i=d("popover");if(!i)return;const o=n.getBoundingClientRect(),a=te(),v=i.arrow,m=a.width,s=window.innerWidth,h=o.width,r=o.left,p=a.height,c=window.innerHeight,w=o.top,f=o.height;v.className="driver-popover-arrow";let g=t,u=e;t==="top"?(r+h<=0?(g="right",u="end"):r+h-m<=0&&(g="top",u="start"),r>=s?(g="left",u="end"):r+m>=s&&(g="top",u="end")):t==="bottom"?(r+h<=0?(g="right",u="start"):r+h-m<=0&&(g="bottom",u="start"),r>=s?(g="left",u="start"):r+m>=s&&(g="bottom",u="end")):t==="left"?(w+f<=0?(g="bottom",u="end"):w+f-p<=0&&(g="left",u="start"),w>=c?(g="top",u="end"):w+p>=c&&(g="left",u="end")):t==="right"&&(w+f<=0?(g="bottom",u="start"):w+f-p<=0&&(g="right",u="start"),w>=c?(g="top",u="start"):w+p>=c&&(g="right",u="end")),g?(v.classList.add(`driver-popover-arrow-side-${g}`),v.classList.add(`driver-popover-arrow-align-${u}`)):v.classList.add("driver-popover-arrow-none")}function Be(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const n=document.createElement("header");n.id="driver-popover-title",n.classList.add("driver-popover-title"),n.style.display="none",n.innerText="Popover Title";const i=document.createElement("div");i.id="driver-popover-description",i.classList.add("driver-popover-description"),i.style.display="none",i.innerText="Popover description is here";const o=document.createElement("button");o.type="button",o.classList.add("driver-popover-close-btn"),o.setAttribute("aria-label","Close"),o.innerHTML="&times;";const a=document.createElement("footer");a.classList.add("driver-popover-footer");const v=document.createElement("span");v.classList.add("driver-popover-progress-text"),v.innerText="";const m=document.createElement("span");m.classList.add("driver-popover-navigation-btns");const s=document.createElement("button");s.type="button",s.classList.add("driver-popover-prev-btn"),s.innerHTML="&larr; Previous";const h=document.createElement("button");return h.type="button",h.classList.add("driver-popover-next-btn"),h.innerHTML="Next &rarr;",m.appendChild(s),m.appendChild(h),a.appendChild(v),a.appendChild(m),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),{wrapper:e,arrow:t,title:n,description:i,footer:a,previousButton:s,nextButton:h,closeButton:o,footerButtons:m,progress:v}}function He(){var e;const t=d("popover");t&&((e=t.wrapper.parentElement)==null||e.removeChild(t.wrapper))}function Me(e={}){O(e);function t(){l("allowClose")&&h()}function n(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r>"u")return;const c=r+1;p[c]?s(c):h()}function i(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r>"u")return;const c=r-1;p[c]?s(c):h()}function o(r){(l("steps")||[])[r]?s(r):h()}function a(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p>"u"||typeof c>"u"||typeof d("activeIndex")>"u")return;const f=((r=c.popover)==null?void 0:r.onPrevClick)||l("onPrevClick");if(f)return f(w,c,{config:l(),state:d()});i()}function v(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p>"u"||typeof c>"u")return;const f=((r=c.popover)==null?void 0:r.onNextClick)||l("onNextClick");if(f)return f(w,c,{config:l(),state:d()});n()}function m(){d("isInitialized")||(x("isInitialized",!0),document.body.classList.add("driver-active",l("animate")?"driver-fade":"driver-simple"),Pe(),N("overlayClick",t),N("escapePress",t),N("arrowLeftPress",a),N("arrowRightPress",v))}function s(r=0){var p,c,w,f,g,u,y,E;const k=l("steps");if(!k){console.error("No steps to drive through"),h();return}if(!k[r]){h();return}x("__activeOnDestroyed",document.activeElement),x("activeIndex",r);const b=k[r],C=k[r+1],_=k[r-1],L=((p=b.popover)==null?void 0:p.doneBtnText)||l("doneBtnText")||"Done",A=l("allowClose"),B=typeof((c=b.popover)==null?void 0:c.showProgress)<"u"?(w=b.popover)==null?void 0:w.showProgress:l("showProgress"),H=(((f=b.popover)==null?void 0:f.progressText)||l("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${r+1}`).replace("{{total}}",`${k.length}`),P=((g=b.popover)==null?void 0:g.showButtons)||l("showButtons"),M=["next","previous",...A?["close"]:[]].filter(ie=>!(P!=null&&P.length)||P.includes(ie)),T=((u=b.popover)==null?void 0:u.onNextClick)||l("onNextClick"),D=((y=b.popover)==null?void 0:y.onPrevClick)||l("onPrevClick"),ne=((E=b.popover)==null?void 0:E.onCloseClick)||l("onCloseClick");K({...b,popover:{showButtons:M,nextBtnText:C?void 0:L,disableButtons:[..._?[]:["previous"]],showProgress:B,progressText:H,onNextClick:T||(()=>{C?s(r+1):h()}),onPrevClick:D||(()=>{s(r-1)}),onCloseClick:ne||(()=>{h()}),...(b==null?void 0:b.popover)||{}}})}function h(r=!0){const p=d("__activeElement"),c=d("__activeStep"),w=d("__activeOnDestroyed"),f=l("onDestroyStarted");if(r&&f){const y=!p||(p==null?void 0:p.id)==="driver-dummy-element";f(y?void 0:p,c,{config:l(),state:d()});return}const g=(c==null?void 0:c.onDeselected)||l("onDeselected"),u=l("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),$e(),He(),ke(),xe(),we(),F(),p&&c){const y=p.id==="driver-dummy-element";g&&g(y?void 0:p,c,{config:l(),state:d()}),u&&u(y?void 0:p,c,{config:l(),state:d()})}w&&w.focus()}return{isActive:()=>d("isInitialized")||!1,refresh:S,drive:(r=0)=>{m(),s(r)},setConfig:O,setSteps:r=>{F(),O({...l(),steps:r})},getConfig:l,getState:d,getActiveIndex:()=>d("activeIndex"),isFirstStep:()=>d("activeIndex")===0,isLastStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&p===r.length-1},getActiveStep:()=>d("activeStep"),getActiveElement:()=>d("activeElement"),getPreviousElement:()=>d("previousElement"),getPreviousStep:()=>d("previousStep"),moveNext:n,movePrevious:i,moveTo:o,hasNextStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p+1]},hasPreviousStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p-1]},highlight:r=>{m(),K({...r,popover:r.popover?{showButtons:[],showProgress:!1,progressText:"",...r.popover}:void 0})},destroy:()=>{h(!1)}}}function Te(e,t){Me({steps:e,popoverClass:"sf-driverjs",showProgress:!0,onDestroyed:t}).drive()}function De(e,t){return n=>We({analytics:e,sectionName:t,...n})}function We(e){const{analytics:t,sectionName:n,stepName:i,selector:o,eventName:a,popoverOptions:v}=e,m=`walkthroughs.${n}.steps.${i}`;return{element:o,popover:{title:q.global.t(`${m}.title`),description:q.global.t(`${m}.description`),side:"top",align:"start",onPopoverRender:()=>t.reportEvent(`WALKTHROUGH_SHOW_${a.toUpperCase()}`),...v}}}function qe(e,t,n,i){const{state:o,isReady:a}=re(),{onShow:v,onHide:m}=se(),s=le(),h=De(s,t),r=ue(),p=ae(!1);de(()=>{p.value=!0}),pe(()=>a.value&&p.value,c);async function c(){var w;o.value.includes(e)||r||((w=i==null?void 0:i.beforeShow)==null||w.call(i),v(),await ce((i==null?void 0:i.timeout)??0),Te(n.map(h),m),o.value=[...o.value,e])}}export{qe as u};
