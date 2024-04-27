"use strict"
;__filename="background/run_keys.js",define(["require","exports","./store","./utils","./browser","./ports","./exclusions","./i18n","./key_mappings","./run_commands"],(e,l,t,n,r,i,o,u,f,s)=>{
Object.defineProperty(l,"__esModule",{value:true
}),l.parseEmbeddedOptions=l.parseKeyNode=l.runKeyInSeq=l.parseKeySeq=l.runKeyWithCond=void 0
;let a=Math.abs,d=["expect","keys","options","mask"],p=0,v=e=>{let l=n.i(),t=[],r=""
;for(let n in e)n.includes("$")||(n.startsWith("o.")?n.length>2&&(l[r=n.slice(2)]=e[n]):d.includes(n)||t.push(n))
;for(let n of t)l[r=n]=e[n];return r?l:null},c=(e,u)=>{let{host:f,iframe:s,fullscreen:a,element:d,incognito:p}=e
;if(void 0===f&&(f=e.host=null!=e.url?e.url:null,delete e.url),null!=p&&2===t.de!=!!p)return 1
;if("string"==typeof f&&(f=e.host=o.kl(f)),null!=f){let e,n=u.url
;if(null==n&&(3===f.t?["/*","*"].includes(f.v.p.pathname)&&"*"===f.v.p.search&&"*"===f.v.p.hash:2===f.t&&((e=f.v.indexOf("/",f.v.indexOf("://")+3))===f.v.length-1||-1===e))){
let e=i.R(),l=e&&e.C||t.O;n=l?l.s.Rl:null}if(null==n&&(n=i.j(null,true))instanceof Promise)return n.then(e=>{var n
;u.url=e||(t.O?((null===(n=i.R())||void 0===n?void 0:n.C)||t.O).s.Rl:""),l.runKeyWithCond(u)}),0;if(!o.Ll(f,n))return 1}
if(null!=s){if(!t.O&&false!==s)return 1;if("string"==typeof s&&(s=e.iframe=o.kl(s)||true),"boolean"==typeof s){
if(s!==!!(t.O&&t.O.s.Q))return 1}else if(!o.Ll(s,t.O.s.Rl))return 1}if(null==a);else{
if(null==u.fullscreen)return r.getCurWnd(false,e=>(u.fullscreen=!!e&&e.state.includes("fullscreen"),l.runKeyWithCond(u),
r.g())),0;if(!!a!==u.fullscreen)return 1}if(d&&"*"!==d){let l="string"==typeof d?[]:d
;"string"==typeof d&&(e.element=d.split(",").some(e=>{
let t=(e="*"===e[0]?e.slice(1):e).indexOf("#"),r=e.indexOf("."),i=e.length;return e&&l.push({
tag:e.slice(0,t<0?r<0?i:r:r<0?t:Math.min(r,t)),id:t>=0?e.slice(t+1,r>t?r:i):"",
classList:n.ji(r>=0?e.slice(r+1,t>r?t:i):"")}),"*"===e||e.includes(" ")})?(l.length=0,"*"):l);let r=u.element
;if(l.length){if(null==r)return t.O&&i.safePost(t.O,{N:13,n:performance.now(),c:u}),t.O?0:1
;if(!l.some(e=>0===r?"body"===e.tag&&!e.id&&!e.classList:(!e.tag||r[0]===e.tag)&&(!e.id||r[1]===e.id)&&(!e.classList.length||r[2].length>0&&e.classList.every(e=>r[2].includes(e)))))return 1
}}return 2},y=e=>{let l=e.expect;if(e.$normalized)return l
;let t=e=>e?"string"!=typeof e?e instanceof Array?e:[]:(e=e.trim()).includes(" ")?e.split(/ +/):n.splitWhenKeepExpressions(e,",").map(e=>e.trim()):[],r=[]
;if(l)if(l instanceof Array)r=l.map(e=>e instanceof Array?{env:e[0],keys:t(e[1]),options:e[2]}:e&&"object"==typeof e?{
env:e.env||e,keys:t(e.keys),options:e.options}:null);else if("object"==typeof l)r=Object.keys(l).map(e=>{
let n=l[e],r=n&&"object"==typeof n&&!(n instanceof Array);return{env:e,keys:t(r?n.keys:n),options:r?n.options:null}
});else if("string"==typeof l&&/^[^{].*?[:=]/.test(l)){let e=l.includes(":")?/:/:/=/
;r=l.split(l.includes(";")?/[;\s]+/g:/[,\s]+/g).map(l=>l.split(e)).map(e=>2!==e.length?null:{env:e[0].trim(),
keys:t(e[1]),options:null})}return r=r.map(e=>e&&e.env&&(e.keys.length||e.options)?e:null),
s.overrideOption("expect",r,e),s.overrideOption("keys",t(e.keys),e),s.overrideOption("$normalized",1,e),r},$=e=>{
let t=e.startsWith("#")?e.split("+",1)[0]:"";return{tree:l.parseKeySeq(e.slice(t?t.length+1:0)),
options:t.length>1?l.parseEmbeddedOptions(t.slice(1)):null}};l.runKeyWithCond=e=>{let n,r=a(t.$),o=i.R()
;t.O||(t.O=o?o.d:null),e=e||t.hn||{},t.hn=null;let u=y(t.x);for(let l of u){if(!l)continue;let t=l.env,r=t
;if("string"==typeof r){if(!f.da)return void i.showHUD("No environments have been declared");if(r=f.da.get(r),
void 0===r)return void i.showHUD(`No environment named "${t}"`);if("string"==typeof r&&(r=f.ua(r,2),f.da.set(t,r)),
null===r)continue}let o=c(r,e);if(0===o)return;if(2===o){n=l;break}}
let b,m,h=n&&n.keys.length?n.keys:t.x.keys,j=n?"string"==typeof n.env?`[${n.env}]: `:`(${u.indexOf(n)})`:""
;if(0===h.length)i.showHUD(j+"Require keys: comma-seperated-string | string[]");else if(r>h.length&&1!==h.length)i.showHUD(j+"Has no such a key");else if(b=h[m=1===h.length?0:t.$>0?r-1:h.length-r],
b&&("string"==typeof b||"object"==typeof b&&b.tree&&"object"==typeof b.tree&&"number"==typeof b.tree.t)){
let r=1===h.length?t.$:1;if("string"==typeof b){let e=t.x.mask;if(null!=e){let l=s.fillOptionWithMask(b,e,"",d,r)
;if(!l.ok)return void i.showHUD((l.result?"Too many potential keys":"No key")+" to fill masks");e=l.ok>0,b=l.result,
r=l.useCount?1:r}b=$(b),e||(h[m]=b)}let o=b.tree,u=b.options
;if(3===o.t||0===o.val.length)return void(3===o.t&&i.showHUD(o.val))
;let a=n&&n.options&&"object"==typeof n.options&&n.options||t.x.options||(t.x.$masked?null:v(t.x))
;a=s.concatOptions(a,u);let c=p=(p+1)%64||1,y="<v-runKey:$1>".replace("$1",""+c),j={keys:o,repeat:r,options:a,cursor:o,
timeout:0,id:y,fallback:s.parseFallbackOptions(t.x)};if(o.val.length>1||0!==o.val[0].t){let n={$seq:j,$then:y,
$else:"-"+y,$retry:-999};s.replaceCmdOptions(n),t.ii.set(y,f.la("runKey",n)),l.runKeyInSeq(j,1,e)
}else s.replaceCmdOptions({$seq:j}),g(j,o.val[0]),k(o.val[0],j,e)}else i.showHUD(j+"The key is invalid")},
l.parseKeySeq=e=>{
let l,t=/^([$%][a-zA-Z]\+?)*([\d-]\d*\+?)?([$%][a-zA-Z]\+?)*((<([acmsv]-){0,4}.\w*(:i)?>|[^#()?:+$%-])+|-)(#[^()?:+]*)?/,r={
t:1,val:[],par:null},i=r;for(let o=e.length>1?0:e.length;o<e.length;o++)switch(e[o]){case"(":l=r,r={t:1,val:[],par:r},
l.val.push(r);break;case")":l=r;do{l=l.par}while(2===l.t);r=l;break;case"?":case":":
for(l="?"===e[o]?null:r;l&&2!==l.t;)l=l.par;l&&!l.val.f||(l=r.par,r.par={t:2,val:{cond:r,t:null,f:null},par:l||(i={t:1,
val:[],par:null})
},l?1===l.t?l.val.splice(l.val.indexOf(r),1,r.par):l.val.t===r?l.val.t=r.par:l.val.f=r.par:i.val.push(r.par),l=r.par),
r={t:1,val:[],par:l},"?"===e[o]?l.val.t=r:l.val.f=r;break;case"+":break;default:
for(;o<e.length&&!"()?:+".includes(e[o]);){let l=t.exec(e.slice(o));if(!l){let l=e.slice(o);return{t:3,
val:"Invalid item to run: "+(l.length>12?l.slice(0,11)+"\u2026":l),par:null}}let i=l[0],u=i.indexOf("#")
;if(u>0&&/[#&]#/.test(i.slice(u)))i=e.slice(o),o=e.length;else if(u>0&&/["\[]/.test(i.slice(u))){
let l=n.Di(e.slice(o+u));i=i.slice(0,u)+l[0],o+=u+l[1]}else o+=i.length;r.val.push({t:0,val:i,par:r})}o--}
return 1===e.length&&i.val.push({t:0,val:e,par:i}),n.Fl(),i};let b=(e,l)=>{let t,n,r=true,i=e;for(0===i.t&&(t=i.par,
n=t.val.indexOf(i),
i=n<t.val.length-1&&l>0?t.val[n+1]:(r=false,t));i&&0!==i.t;)if(r&&1===i.t&&i.val.length>0)i=i.val[0];else if(r&&2===i.t)i=i.val.cond;else{
if(!i.par){i=null;break}1===i.par.t?(t=i.par,n=t.val.indexOf(i),r=n<t.val.length-1,r&&l<0&&(l=1),
i=r?t.val[n+1]:t):(t=i.par,r=i===t.val.cond,i=r&&(l>0?t.val.t:(l=1,t.val.f))||(r=false,t))}return i},g=(e,l)=>{
"<v-runKey:$1>".replace("$1",""+p)===e.id&&(p=Math.max(--p,0));let n=t.x,r=e.fallback;l&&n&&(delete n.$then,
delete n.$else),
r&&(l?e.options=e.options?Object.assign(r,e.options):r:(null==n?void 0:n.$f)&&(r.$f=s.makeFallbackContext(r.$f,0,n.$f.t)),
n&&(n.$f=r.$f))};l.runKeyInSeq=(e,l,n)=>{var r,o
;let f=b(e.cursor,l),a=f&&b(f,1),d=f&&b(f,-1),p=!(f&&(a||d)),v=e.fallback,c=e.id;p&&(t.ii.delete(c),
clearTimeout(e.timeout||0),g(e,f));let y=t.x;if(!f){if(v&&s.runNextCmdBy(l>0?1:0,v,1))return
;let e=l>0?0:(null===(r=y.$f)||void 0===r?void 0:r.t)||(null===(o=null==v?void 0:v.$f)||void 0===o?void 0:o.t)||0
;return void(e&&i.showHUD(u.Re(`${e}`)))}
let $=a&&y.$then?"string"==typeof a.val?a.val:a.val.prefix:"",m=d&&y.$else?"string"==typeof d.val?d.val:d.val.prefix:"",h=($.includes("$l")?1:0)+(m.includes("$l")?2:0),j=($.includes("$D")?1:0)+(m.includes("$D")?2:0)
;(h||j)&&(e.cursor===e.keys&&(s.overrideCmdOptions({}),y=t.x),y.$then=(1&h?"$l+":"")+(1&j?"$D+":"")+y.$then,
y.$else=(2&h?"$l+":"")+(2&j?"$D+":"")+y.$else);let A=p?0:e.timeout=setTimeout(()=>{let e=t.ii.get(c),l=e&&e.ba
;l&&l.$seq&&l.$seq.timeout===A&&t.ii.delete(c)},3e4);k(f,e,n)},l.parseKeyNode=e=>{let t=e.val
;if("string"!=typeof t)return t
;let n=/^([$%][a-zA-Z]\+?|-)+/.exec(t),r=!!n&&n[0].includes("-"),i=!n||"+-".includes(n[0].slice(-1)),o=n?n[0].replace(/[+-]/g,"").replace(/%/g,"$"):""
;t=n?t.slice(n[0].length):t,n=/^\d+/.exec(t);let u=(r?-1:1)*(n&&parseInt(n[0],10)||1);t=n?t.slice(n[0].length):t,
t=i||n||!t.startsWith("+")?t:t.slice(1);let f=t.indexOf("#",1),s=f>0?t.slice(0,f):t,a=null
;return f>0&&f+1<t.length&&(t=t.slice(f+1),a=l.parseEmbeddedOptions(t)),e.val={prefix:o,count:u,key:s,options:a}},
l.parseEmbeddedOptions=e=>{
let l=/(^|&)#/.exec(e),t=l?e.slice(l.index+l[0].length):"",r=e=>"\\u"+(e.charCodeAt(0)+65536).toString(16).slice(1),i=e=>/\s/.test(e)?JSON.stringify(e).replace(/\s/g,r):e
;if(e=(l?e.slice(0,l.index):e).split("&").map(e=>{let l=e.split("=",1)[0],t=e.slice(l.length)
;return l?l+(t?"="+i(n.Xe(t.slice(1))):""):""}).join(" "),t){let l=t.split("=",1)[0],n=t.slice(l.length)
;e=l?(e?e+" ":"")+l+(n?"="+i(n.slice(1)):""):e}return f.ua(e,2)};let k=(e,r,i)=>{
let o=l.parseKeyNode(e),u=r.cursor===r.keys,f=u||o.prefix.includes("$c"),a=o.prefix.includes("$W"),d=t.x,p=a?s.concatOptions(o.options,n.di({
$then:"",$else:""})):s.concatOptions(r.options,o.options);r.cursor=e,h(o.key,o.count*(f?r.repeat:1),p,i,null,u),
a&&setTimeout(()=>{s.replaceCmdOptions(d),l.runKeyInSeq(r,1,null)},0)};t.P=(e,l,n,r)=>{
e=e.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,"");let i=/^\d+|^-\d*/.exec(e),o=1;if(null!=i){let l=i[0];e=e.slice(l.length),
o="-"!==l?parseInt(l,10)||1:-1}r&&(o*=r),e=e.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,"");let u=1
;for(;u=e.indexOf("#",u)+1;){let l=e.slice(0,u-1);if(t.ii.has(l)||/^[a-z]+(\.[a-z]+)?$/i.test(l))break}t.O=l,t.Ce=0,
t.x=null,h(u?e.slice(0,u-1):e,o,u?e.slice(u):null,null,n)};let m=e=>{let l=t.x;for(;l&&l!==e;)l=l.$o;return l===e
},h=(e,r,o,u,a,d)=>{let p=e,v=t.ii.get(e)||!e.includes("<")&&!e.includes(":",1)&&t.ii.get(p=`<v-${e}>`)||null,c=true
;if(null==v&&e in f.ia&&(c=false,v=f.la(e,null)),null==v){let l=/^\w+$/.test(e)?p:e
;return void i.showHUD(`"${l.length>=20?l.slice(0,19)+"\u2026":l}" has not been mapped`)}if(38===v.ui&&v.ni&&(t.na(v),
m(v.ba)))return void i.showHUD('"runKey" should not call itself')
;"string"==typeof o&&(o=o?l.parseEmbeddedOptions(o):null);let y=t.x,$=y&&s.parseFallbackOptions(y),b=y&&y.$f
;if(o&&"object"==typeof o||$||b){let e=f.oi(v);v=c?Object.assign({},v):v;let l=n.i();o&&s.copyCmdOptions(l,n.di(o)),
$&&s.copyCmdOptions(l,n.di($)),
e&&s.copyCmdOptions(l,e),l.$f=b,o&&"$count"in o?l.$count=o.$count:e&&"$count"in e&&(o&&"count"in o||(l.$count=e.$count)),
v.ba=l,f.ca(v,f.ia[38===v.ui&&v.ni?"runKey":v.ra])}n.Fl(),d&&38===v.ui&&v.ni?setTimeout(()=>{t.hn=u,
s.executeCommand(v,r,t.Ce,t.O,0,a)},0):(t.hn=u,s.executeCommand(v,r,t.Ce,t.O,0,a))};t.na=(e,r)=>{var i,o,u,a
;let p=f.oi(e);if(p||(p=e.ba=n.i()),2===p.$normalized)return;let c=p,g=true;y(c),c.$normalized=2;let k=1
;for(c.$count&&(k=c.$count,c=p=s.copyCmdOptions(n.i(),c));c&&0===y(c).length&&c.keys.length>=1;){let y=c.keys,m=y[0]
;if(g=g&&1===y.length,"string"==typeof m){let e=c.mask;if(null!=e){c!==p&&(c=p=s.concatOptions(c,p||n.i()))
;let l=s.fillOptionWithMask(m,e,"",d,1,p);if(!l.ok)return;e=l.ok>0,m=l.result,g=g&&!!l.value&&!l.useCount&&!l.useDict}
m=$(m),e||(y[0]=m)}let h=1===m.tree.t?b(m.tree,1):null;if(!h)return;g=g&&1===m.tree.val.length&&m.tree.val[0]===h
;let j=l.parseKeyNode(h),A=j.key,z=t.ii.get(A)||!A.includes("<")&&!A.includes(":",1)&&t.ii.get(`<v-${A}>`)||null
;if(null!=z&&38===z.ui&&z.ni){if(r||(r=[e]),r.includes(z))return e.ui=41,e.ra="showHUD",void(e.ba=n.di({
text:'"runKey" should not call itself'}));r.push(z),t.na(z,r.slice(0))}let _=z?z.ra:A in f.ia?A:null;if(!_)return
;let w=null!=z&&38===z.ui&&z.ni;if(!w&&!g)return void(e.ra=_);c!==p&&(p=s.concatOptions(c,p)),
p=p.options?s.copyCmdOptions(n.i(),p.options):p.$masked?null:v(p)
;let x=null!==(a=null!==(o=null===(i=j.options)||void 0===i?void 0:i.$count)&&void 0!==o?o:null===(u=m.options)||void 0===u?void 0:u.$count)&&void 0!==a?a:null==p?void 0:p.$count
;p=s.concatOptions(s.concatOptions(p,m.options),j.options),
p=!p||p!==m.options&&p!==j.options?p:s.copyCmdOptions(n.i(),p),
p&&("count"in p||null!=x)&&(x=null!=x?parseFloat(x)||1:parseFloat(p.count||1)||1,delete p.count),
k*=(null!=x?x:1)*j.count;let O=z&&f.oi(z);if(!w)return p=s.concatOptions(O,p),p&&p===O&&(p=s.copyCmdOptions(n.i(),p)),
1!==k&&((p||(p=n.i())).$count=k),void Object.assign(e,f.la(_,p))
;c=!p||void 0===p.keys&&void 0===p.expect&&void 0===p.mask?O||n.i():p=s.concatOptions(O,p)}}});