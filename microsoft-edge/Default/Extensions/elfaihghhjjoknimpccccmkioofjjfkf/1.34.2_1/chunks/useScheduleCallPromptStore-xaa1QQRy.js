import{T as i,a as d,B as S}from"./useAddAppToIgnoreListDialogStore-Ki2J31d-.js";import{b4 as C,a as E,t as m,ax as D,r as p,b as L,c as b,ct as f,cu as v}from"./defineAppConfig-GTQ5Bvuh.js";const _=3*f,A=C("schedule-call-prompt",()=>{const n=E("ScheduleCall"),{reportEvent:e}=m(),{state:a,mutateAsync:s}=i(),{state:t}=d(),u=S({interval:D}),l=p(!1);L(()=>{l.value=!0},250);const o=b(()=>n&&l.value&&!a.value&&t.value!=null&&u.value>=t.value+_);async function c(){e("SCHEDULE_CALL_DISMISSED"),await s(!0)}async function r(){e("SCHEDULE_CALL_CLICKED"),await s(!0),window.open(v(),"_blank")}return{isVisible:o,disabled:a,dismiss:c,scheduleCall:r}});export{A as u};
