import{a as C}from"../chunks/chunk-QEEHMTJN.js";import{k as d,t as i}from"../chunks/chunk-JJTF2C25.js";import{c as y}from"../chunks/chunk-3HBOA5LN.js";import"../chunks/chunk-YHJJDH4X.js";import{e as s}from"../chunks/chunk-3GYLW4KZ.js";var l=s(C());var p=s(y());async function c(){try{let r=window.__wb_deferredPrograms,o=window.location.href,u="US",g=async e=>new p.default(a=>{chrome.cookies.get({name:e,url:o},m=>a(m?m.value:null))}),f=3e3,{programId:n,metrics:t}=await(0,l.applyClientRules)(r,o,u,g,{programAttemptTimeoutMs:f}),w={domain:d(),selectedProgramId:n,selectedProgramIndex:t.attempts.findIndex(e=>e.programId===n),duration:t.totalDuration,totalNumberOfAttempts:t.attempts.map(e=>e.attempts).reduce((e,a)=>e+a,0),programsTestedCount:t.programsTestedCount};i("clientSideProgramMetrics",w),chrome.runtime.sendMessage({url:o,type:"programSelected",selectedProgramId:n,referrer:document.referrer,title:document.title},e=>{})}catch(r){console.log("*** error loading program client side",r)}}document.readyState!=="loading"?c():document.addEventListener("DOMContentLoaded",c);
