import{D as se,E as le,c as ue}from"./chunk-3HBOA5LN.js";import{c as q}from"./chunk-3GYLW4KZ.js";var G=q(j=>{"use strict";var _=j&&j.__awaiter||function(u,n,t,a){function o(e){return e instanceof t?e:new t(function(i){i(e)})}return new(t||(t=Promise))(function(e,i){function l(s){try{r(a.next(s))}catch(d){i(d)}}function c(s){try{r(a.throw(s))}catch(d){i(d)}}function r(s){s.done?e(s.value):o(s.value).then(l,c)}r((a=a.apply(u,n||[])).next())})},V=j&&j.__generator||function(u,n){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},a,o,e,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(r){return function(s){return c([r,s])}}function c(r){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,r[0]&&(t=0)),t;)try{if(a=1,o&&(e=r[0]&2?o.return:r[0]?o.throw||((e=o.return)&&e.call(o),0):o.next)&&!(e=e.call(o,r[1])).done)return e;switch(o=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return t.label++,{value:r[1],done:!1};case 5:t.label++,o=r[1],r=[0];continue;case 7:r=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){t=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){t.label=r[1];break}if(r[0]===6&&t.label<e[1]){t.label=e[1],e=r;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(r);break}e[2]&&t.ops.pop(),t.trys.pop();continue}r=n.call(u,t)}catch(s){r=[6,s],o=0}finally{a=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(j,"__esModule",{value:!0});var ce=ue(),fe=new Set(["and","or","not","regex","listContains","equals","elementExists"]),de=new Set(["url","protocol","domain","path","search","cookie","userCountry","domContent"]),me=function(){function u(n){var t=n.url,a=n.protocol,o=n.domain,e=n.pathname,i=n.search,l=n.country,c=n.getCookie;Object.assign(this,{url:t,protocol:a,domain:o,pathname:e,search:i,country:l,getCookie:c}),this.testElementExistAttemptCount=0,this.elementExistsTimeoutMs=2e3}return u.prototype.getContextValueForOperation=function(n){return _(this,void 0,void 0,function(){var t;return V(this,function(a){if(t=n.context,!de.has(t))throw new Error("Unsupported context [".concat(t,"]"));return t==="url"?[2,this.url]:t==="protocol"?[2,this.protocol]:t==="domain"?[2,this.domain]:t==="path"?[2,this.pathname]:t==="search"?[2,this.search]:t==="cookie"?[2,this.getCookie(n.name)]:t==="userCountry"?[2,this.country]:[2]})})},u.prototype.test=function(n,t){return t===void 0&&(t=!1),_(this,void 0,void 0,function(){var e,a,o,c,e,i,l,c,s,r,s,s,d;return V(this,function(f){switch(f.label){case 0:if(!fe.has(n.operator))return console.log("Unsupported operator [".concat(n.operator,"]")),[2,!1];if(n.operator!=="and")return[3,5];if(!Array.isArray(n.value))throw new Error("The value of operator `and` must be an array");e=!0,a=0,o=n.value,f.label=1;case 1:return a<o.length?(c=o[a],[4,this.test(c,t)]):[3,4];case 2:if(!f.sent())return e=!1,[3,4];f.label=3;case 3:return a++,[3,1];case 4:return[2,e];case 5:if(n.operator!=="not")return[3,7];if(Array.isArray(n.value))throw new Error("The value of operator `not` must be a single condition");return[4,this.test(n.value,t)];case 6:return[2,f.sent()===!1];case 7:if(n.operator!=="or")return[3,12];if(!Array.isArray(n.value))throw new Error("The value of operator `or` must be an array");e=!1,i=0,l=n.value,f.label=8;case 8:return i<l.length?(c=l[i],[4,this.test(c,t)]):[3,11];case 9:if(f.sent())return e=!0,[3,11];f.label=10;case 10:return i++,[3,8];case 11:return[2,e];case 12:return n.operator!=="regex"?[3,14]:[4,this.getContextValueForOperation(n)];case 13:return s=f.sent(),typeof s!="string"?[2,!1]:(r=n.value||n.pattern,[2,r&&!!s.match(new RegExp(r,n.flags||""))]);case 14:return n.operator!=="listContains"?[3,16]:[4,this.getContextValueForOperation(n)];case 15:return s=f.sent(),[2,Array.isArray(n.value)&&n.value.includes(s)];case 16:return n.operator!=="equals"?[3,18]:[4,this.getContextValueForOperation(n)];case 17:return s=f.sent(),[2,n.value===s];case 18:return n.operator!=="elementExists"?[3,22]:t?[3,19]:[2,!1];case 19:return f.trys.push([19,21,,22]),[4,this.testElementExists(n.value)];case 20:return[2,f.sent()];case 21:return d=f.sent(),console.log("program rules error",d),[2,null];case 22:return[2,!1]}})})},u.prototype.hasDomContentRule=function(n){var t=!1,a=function(o){if(Array.isArray(o.value))for(var e=0,i=o.value;e<i.length;e++){var l=i[e];a(l)}o.context==="domContent"&&(t=!0)};return a(n),t},u.prototype.testClientRules=function(n,t){return _(this,void 0,void 0,function(){var a;return V(this,function(o){switch(o.label){case 0:return t&&(this.elementExistsTimeoutMs=t),[4,this.test(n,!0)];case 1:return a=o.sent(),[2,{matched:a,elementExistTestCount:this.testElementExistAttemptCount}]}})})},u.prototype.testElementExists=function(n){return _(this,void 0,void 0,function(){var t,a,o=this;return V(this,function(e){return t=100,a=this.elementExistsTimeoutMs/t,[2,new ce.Promise(function(i,l){var c=document.querySelectorAll(n);if(c.length>0)return i(!0);try{var r=0,s=setInterval(function(){r++;var d=document.querySelectorAll(n);if(o.testElementExistAttemptCount++,d.length>0)return clearInterval(s),i(!0);if(r>=a)return clearInterval(s),i(!1)},t)}catch(d){return l(d)}})]})})},u}();j.default=me});var Z=q(R=>{"use strict";var he=R&&R.__awaiter||function(u,n,t,a){function o(e){return e instanceof t?e:new t(function(i){i(e)})}return new(t||(t=Promise))(function(e,i){function l(s){try{r(a.next(s))}catch(d){i(d)}}function c(s){try{r(a.throw(s))}catch(d){i(d)}}function r(s){s.done?e(s.value):o(s.value).then(l,c)}r((a=a.apply(u,n||[])).next())})},ve=R&&R.__generator||function(u,n){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},a,o,e,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(r){return function(s){return c([r,s])}}function c(r){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,r[0]&&(t=0)),t;)try{if(a=1,o&&(e=r[0]&2?o.return:r[0]?o.throw||((e=o.return)&&e.call(o),0):o.next)&&!(e=e.call(o,r[1])).done)return e;switch(o=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return t.label++,{value:r[1],done:!1};case 5:t.label++,o=r[1],r=[0];continue;case 7:r=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){t=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){t.label=r[1];break}if(r[0]===6&&t.label<e[1]){t.label=e[1],e=r;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(r);break}e[2]&&t.ops.pop(),t.trys.pop();continue}r=n.call(u,t)}catch(s){r=[6,s],o=0}finally{a=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},pe=R&&R.__spreadArray||function(u,n,t){if(t||arguments.length===2)for(var a=0,o=n.length,e;a<o;a++)(e||!(a in n))&&(e||(e=Array.prototype.slice.call(n,0,a)),e[a]=n[a]);return u.concat(e||Array.prototype.slice.call(n))};Object.defineProperty(R,"__esModule",{value:!0});function ge(u){return u==null?!1:typeof u[Symbol.iterator]=="function"}function ye(u){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var a=n.map(function(o){return typeof o=="number"||typeof o=="string"?o:ge(o)?Object.entries(o).sort(function(e,i){return i[0].localeCompare(e[0])}):o});return a.unshift(u),JSON.stringify(a)}var B=new Map;function we(){for(var u=Date.now(),n=0,t=B;n<t.length;n++){var a=t[n],o=a[0],e=a[1];e.expires<u&&B.delete(o)}}function be(u,n,t,a,o){return t===void 0&&(t=[]),a===void 0&&(a={expirationDuration:5e3}),o===void 0&&(o=null),he(this,void 0,void 0,function(){var e,i,l,c,r,s;return ve(this,function(d){return we(),t||(t=[]),e=ye.apply(void 0,pe([u],t,!1)),i=Date.now(),l=a.expirationDuration,c=i+l,r=B.get(e),r&&r.expires>=i?(r.expires=c,[2,a&&a.responsePromiseTransform?r.promise.then(a.responsePromiseTransform):r.promise]):(s=n.apply(void 0,t),s.then(function(f){var m=a&&a.preventCache&&a.preventCache(f);m&&B.delete(e)},function(f){B.delete(e),o&&o(f)}),B.set(e,{promise:s,expires:c}),[2,a&&a.responsePromiseTransform?s.then(a.responsePromiseTransform):s])})})}R.default=be});var $=q(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});var Ce=Z();function xe(u,n,t){return n===void 0&&(n={}),t===void 0&&(t=null),(0,Ce.default)("fetch",globalThis.fetch,[u,n],{expirationDuration:1e3*5,responsePromiseTransform:function(a){return a.clone()},preventCache:function(a){return!a.ok}},function(a){t&&t("Failed to fetch",{url:u},a)})}H.default=xe});var ee=q(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});function ke(u){u===void 0&&(u=[]);var n=u.find(function(t){return t.indexOf("c_ranker_")===0});if(n)return n.split("c_ranker_")[1]}J.default=ke});var X=q(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});var K=le(),Te=["1password.com","pantheonsite.io"];function De(u){var n=K.getDomain(u);if(!n){var t=K.getPublicSuffix(u);if(Te.includes(t))return t}var a=K.getSubdomain(u),o=a&&a.startsWith("www.")?a.substr(4):a,e="".concat(o,".").concat(n);return o&&o!=="www"?e:n}Q.default=De});var ae=q(b=>{"use strict";var w=b&&b.__assign||function(){return w=Object.assign||function(u){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(u[o]=n[o])}return u},w.apply(this,arguments)},F=b&&b.__awaiter||function(u,n,t,a){function o(e){return e instanceof t?e:new t(function(i){i(e)})}return new(t||(t=Promise))(function(e,i){function l(s){try{r(a.next(s))}catch(d){i(d)}}function c(s){try{r(a.throw(s))}catch(d){i(d)}}function r(s){s.done?e(s.value):o(s.value).then(l,c)}r((a=a.apply(u,n||[])).next())})},N=b&&b.__generator||function(u,n){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},a,o,e,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(r){return function(s){return c([r,s])}}function c(r){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,r[0]&&(t=0)),t;)try{if(a=1,o&&(e=r[0]&2?o.return:r[0]?o.throw||((e=o.return)&&e.call(o),0):o.next)&&!(e=e.call(o,r[1])).done)return e;switch(o=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return t.label++,{value:r[1],done:!1};case 5:t.label++,o=r[1],r=[0];continue;case 7:r=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){t=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){t.label=r[1];break}if(r[0]===6&&t.label<e[1]){t.label=e[1],e=r;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(r);break}e[2]&&t.ops.pop(),t.trys.pop();continue}r=n.call(u,t)}catch(s){r=[6,s],o=0}finally{a=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(b,"__esModule",{value:!0});b.getProgramDataById=b.applyClientRules=void 0;var Pe=se(),Y=G(),z=$(),Ae=ee(),te=X(),re=globalThis.URL?globalThis.URL:Pe.URL;function Ee(u,n){var t=n.apiBase,a=n.sessionToken,o=n.ignoreCache,e=n.experience,i=n.omitCredentials,l=n.logError;return F(this,void 0,void 0,function(){var c,r,s,d,f,m,p;return N(this,function(h){switch(h.label){case 0:return c=a?{"x-wb-session":decodeURIComponent(a)}:void 0,r=o?{"cache-control":"no-cache"}:void 0,s=w(w({},c),r),d=i?{credentials:"omit"}:void 0,f=w({headers:s},d),[4,(0,z.default)("".concat(t,"/v1/programs/").concat(u).concat(e?"?experience=".concat(e):""),f,l)];case 1:return m=h.sent(),[4,m.json()];case 2:return p=h.sent(),[2,p.programs.rules]}})})}function ne(u,n){var t=n.apiBase,a=n.sessionToken,o=n.features,e=n.extensionName,i=n.ignoreCache,l=n.vendorMetaId,c=n.omitCredentials,r=n.logError;return F(this,void 0,void 0,function(){var s,d,f,m,p,h,k,A,x,E,I,y,v,T,g,M;return N(this,function(O){switch(O.label){case 0:return s=a?{"x-wb-session":decodeURIComponent(a)}:void 0,d=i?{"cache-control":"no-cache"}:void 0,f=l?{"vendor-meta-id":l}:void 0,m=w(w(w({},s),d),f),p=c?{credentials:"omit"}:void 0,h=m?w({headers:m},p):void 0,k=(0,Ae.default)(o),A="?".concat(e?"extension=".concat(e):"").concat(k?"&ranker=".concat(k):""),x=(0,z.default)("".concat(t,"/v1/program/").concat(u,"/coupons").concat(A),h,r).then(function(D){return D.json()}),E=(0,z.default)("".concat(t,"/v1/program/").concat(u,"/rewards"),h,r).then(function(D){return D.json()}),I=(0,z.default)("".concat(t,"/v1/program/").concat(u),h,r).then(function(D){return D.json()}),[4,Promise.all([x,E,I])];case 1:return y=O.sent(),v=y[0],T=y[1],g=y[2],g.meta=v?.meta||g?.meta,M=w(w({},g.siteData),{coupons:v?.coupons,cashback:T?.rewards}),[2,w(w({},g),{siteData:M})]}})})}function Re(u){var n=u.url,t=u.session,a=u.getCookie,o=u.apiBase,e=u.extensionName,i=u.ignoreCache,l=u.experience,c=u.vendorMetaId,r=u.omitCredentials,s=u.logError;return F(this,void 0,void 0,function(){var d,f,m,p,h,k,A,x,E,I,y,v,T,g,M,O,D,U,S;return N(this,function(P){switch(P.label){case 0:return d=(0,te.default)(n),f=new re(n),m=f.pathname,p=f.hostname,h=f.protocol,k=f.search,A=t.country,o=o||"https://capitaloneshopping.com/api",[4,Ee(d,{apiBase:o,ignoreCache:i,sessionToken:t.sessionToken,features:t.features,extensionName:e,experience:l,omitCredentials:r,logError:s})];case 1:x=P.sent(),E=x.filter(function(W){var oe=W.rulesTree,ie=new Y.default({url:n,domain:p,pathname:m,protocol:h,search:k,country:A,getCookie:a});return!ie.hasDomContentRule(oe)}),I=E.length<x.length,v=0,T=E,P.label=2;case 2:return v<T.length?(g=T[v],M=g.programId,O=g.rulesTree,D=new Y.default({url:n,domain:p,pathname:m,protocol:h,search:k,country:A,getCookie:a}),[4,D.test(O)]):[3,5];case 3:if(P.sent())return y=M,[3,5];P.label=4;case 4:return v++,[3,2];case 5:return!y&&!x.length?[2]:y?[4,ne(y,{apiBase:o,ignoreCache:i,sessionToken:t.sessionToken,features:t.features,extensionName:e,vendorMetaId:c,omitCredentials:r})]:[3,7];case 6:U=P.sent(),P.label=7;case 7:return S={program:U,deferredProgramSelection:I?x:null},[2,S]}})})}b.default=Re;function Ie(u,n,t,a,o){return F(this,void 0,void 0,function(){var e,i,l,c,r,s,d,f,m,p,h,k,A,x,E,I,y,v,T,g,M,O,D,U;return N(this,function(S){switch(S.label){case 0:e=(0,te.default)(n),i=new re(n),l=i.pathname,c=i.hostname,r=i.protocol,s=i.search,d=function(P,W){return P+=W.duration,P},f=[],m=0,p=0,h=u,S.label=1;case 1:return p<h.length?(k=h[p],m++,A=performance.now(),x=k.programId,E=k.rulesTree,I=new Y.default({url:n,protocol:r,domain:e,pathname:l,search:s,country:t,getCookie:a}),[4,I.testClientRules(E,o?.programAttemptTimeoutMs)]):[3,4];case 2:if(y=S.sent(),v=y.matched,T=y.elementExistTestCount,g=performance.now(),M=g-A,f.push({program:x,duration:M,attempts:T}),v)return O=f.reduce(d,0),[2,{programId:x,metrics:{totalDuration:O,programsTestedCount:m,attempts:f}}];S.label=3;case 3:return p++,[3,1];case 4:return D=f.reduce(d,0),U={totalDuration:D,programsTestedCount:m,attempts:f},[2,{metrics:U}]}})})}b.applyClientRules=Ie;function Me(u,n){var t=n.session,a=n.apiBase,o=n.extensionName,e=n.ignoreCache,i=n.vendorMetaId,l=n.omitCredentials;return F(this,void 0,void 0,function(){var c;return N(this,function(r){switch(r.label){case 0:return a=a||"https://capitaloneshopping.com/api",[4,ne(u,{apiBase:a,ignoreCache:e,sessionToken:t.sessionToken,features:t.features,extensionName:o,vendorMetaId:i,omitCredentials:l})];case 1:return c=r.sent(),[2,c]}})})}b.getProgramDataById=Me});var qe=q(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.getSiteDomainFromUrl=C.ProgramRules=C.applyClientRules=C.getProgramDataById=C.getProgram=void 0;var L=ae();C.getProgram=L.default;Object.defineProperty(C,"getProgramDataById",{enumerable:!0,get:function(){return L.getProgramDataById}});Object.defineProperty(C,"applyClientRules",{enumerable:!0,get:function(){return L.applyClientRules}});var Oe=G();C.ProgramRules=Oe.default;var Se=X();C.getSiteDomainFromUrl=Se.default;C.default=L.default});export{qe as a};
