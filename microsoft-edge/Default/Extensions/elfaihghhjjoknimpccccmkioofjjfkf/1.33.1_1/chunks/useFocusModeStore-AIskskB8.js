import{z as F}from"./useAddAppToIgnoreListDialogStore-gHGl-4Ba.js";import{b5 as y,c1 as A,c0 as T,c2 as D,b0 as M,aA as g,c as u,b2 as r,b1 as I,a0 as P,aU as U}from"./defineAppConfig-_73fm9CR.js";import{i as j,g as O,a as R,b as w,c as x}from"./schedules-4-rrdO9H.js";function C(e,a,t){return a===!0||typeof a=="object"&&"until"in a&&e<a.until||j(e,t)}const N=y("focus-mode",()=>{const{state:e}=A(),{state:a}=T(),{state:t}=D(),{state:v}=M(),s=F({interval:g}),f=u(()=>O(s.value,t.value)),d=u(()=>R(s.value,t.value).map(i=>i.id)),n=u(()=>w(s.value,t.value)),c=u(()=>C(s.value,e.value,t.value)),o=u(()=>{if(n.value)return x(s.value,n.value)[1];if(typeof e.value=="object"&&"until"in e.value)return e.value.until}),m=u(()=>{if(o.value)return r(o.value,{is24HourFormat:v.value===I.Hour24})}),{t:l}=P(),b=u(()=>{if(c.value){if(e.value===!0)return l("focusMode.statusReasonIndefinitely");if(typeof e.value=="object"&&"until"in e.value){const i=e.value.until-s.value;return l("focusMode.statusReasonUntilTime",{timeLeft:U(i,{excludeTrailingZeros:!0})})}if(n.value&&o.value)return l("focusMode.statusReasonSchedule",{scheduleName:n.value.name,timeOfDay:r(o.value)})}});function S(){e.value=!0}function h(i){e.value={until:Date.now()+i}}function p(){e.value=!1}return{isEnabled:c,manuallyEnabled:e,websites:a,schedules:t,activeSchedule:f,lastActiveSchedule:n,enabledUntil:o,enabledUntilDisplay:m,reason:b,activeScheduleIds:d,enableIndefinitely:S,enableForDuration:h,disable:p}});export{N as u};
