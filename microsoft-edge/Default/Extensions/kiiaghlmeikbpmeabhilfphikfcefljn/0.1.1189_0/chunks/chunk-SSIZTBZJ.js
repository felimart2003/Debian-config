import{a as q,c as A}from"./chunk-3HBOA5LN.js";import{c as P}from"./chunk-3GYLW4KZ.js";var h=P((M,y)=>{"use strict";var x=A();y.exports={isPausablePromise:function(t){return t instanceof x&&typeof t.start=="function"&&typeof t.stop=="function"}}});var F=P((T,E)=>{"use strict";var o=A(),i=q(),D=h().isPausablePromise,I=500,L=2,v=1e3*60*2,w=8;E.exports=function(t,{initialDelay:R,scaleFactor:_,maxDelay:b,maxRetries:d}={initialDelay:I,scaleFactor:L,maxDelay:v,maxRetries:w}){let s=0,a=0,u=i.once(m),f,l,c,n;function m(){f=new o(function(e){l=i.once(function(){u=i.once(m),e(),D(n)&&n.start()})}),D(n)&&n.stop()}u();function p(){o.delay(s).then(function(){return f}).then(function(){return n=t(),n===void 0?o.reject():n}).then(function(e){c(e)}).catch(()=>{if(++a>d){c();return}s=a===1?R:Math.min(s*_,b),p()})}p();var r=new o(function(e){c=e});return i.assign(r,{start:function(){return l(),r},stop:function(){return u(),r}}),r.start()}});export{F as a};
