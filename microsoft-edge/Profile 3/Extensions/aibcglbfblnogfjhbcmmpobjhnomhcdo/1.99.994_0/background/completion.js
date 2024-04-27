"use strict"
;__filename="background/completion.js",define(["require","exports","./store","./browser","./utils","./normalize_urls","./parse_urls","./completion_utils","./browsing_data_manager"],function(e,t,l,r,i,f,n,u,o){
Object.defineProperty(t,"__esModule",{value:true})
;let a=0,s=false,_=false,d=0,c=0,m=0,h=0,p=0,w=[""],g="",v="",b="",$="",M=0,S=false,y=false,k="",x="",T=0,R=true,z=function(e,t,l,r,i,f){
this.e=e,this.u=t,this.t=l,this.title=r,this.r=i(this,f),this.visit=0},A={Bl(e,t){
if(0!==w.length&&1&T)2===l.ue.f?A.El():o.ot.pt=()=>{e.o||A.El()};else if(D.Pl([],1),t)return;0===l.ue.f&&o.ot.gt()},
El(){var e
;let t,r=w.some(e=>47===e.charCodeAt(0)),i=null===(e=u.vt.Ql)||void 0===e?void 0:e.ie,f=u.vt.Ul?[]:null,n=i&&i[0]===r?i[1]:l.ue.ie,a=n.length,s=[]
;for(let e=0;e<a;e++){let t=n[e];if(u.Zl(t.t,r?t.Dt:t.wt)&&(R||t.Pt)){if(null!==f&&f.push(t),
x&&t.u.length<x.length+2&&x===(t.u.endsWith("/")?t.u.slice(0,-1):t.u))continue;s.push([-u.ql(t.t,t.wt),e])}}
f&&(u.vt.Ul.ie=[r,f]),t=s.length,h+=t,t?(s.sort(u.sortBy0),p>0&&!(6&T)?(s=s.slice(p,p+c),
p=0):t>p+c&&(s.length=p+c)):T^=1;let _=[],m=64&d?-.666446:0;for(let[e,t]of s){let i=n[t];m&&(e=e<m?e:(e+m)/2)
;let f=new z("bookm",i.u,i.t,r?i.Dt:i.wt,u.get2ndArg,-e),a=32&d&&o.it.Lt?o.it.Ut(i.u):-1;f.visit=a<0?0:l.St.Ct[a].qt,
f.id=i.te,_.push(f),null!==i.Ee&&(f.u=i.Ee,f.title=u.cutTitle(r?i.Dt:i.wt),f.textSplit="javascript: \u2026",f.t=i.Rt)}
D.Pl(_,1)}},j={Bl(e,t){if(!w.length&&1024&d||!(2&T))return D.Pl([],2);let r=w.length>0;if(l.St.Ct){
if(r)return void j.El();(l.St.Ft>10||l.St.Jt>0)&&o.it.Kt()}else{let t=r?()=>{e.o||j.El()}:null
;if(r&&(_||o.it.Et))o.it.Et>0&&clearTimeout(o.it.Et),o.it.Et=0,o.it.At(t);else if(o.it.Et||(o.it.Et=setTimeout(()=>{
o.it.Et=0,o.it.At(t)},r?200:150)),r){let e=D.Gl,t=e.length,l=t>0;D.Hl(l&&"search"===e[0].t?[e[0]]:[],s&&l,0,0,t,v,M)}
if(r)return}0===t?u.Wl(y,d,j.Kl,e):o.rt(p+c,R,j.Vl.bind(null,e))},El(){var e
;let t=1===w.length?w[0]:"",r=!!t&&("."===t[0]?/^\.[\da-zA-Z]+$/.test(t):(f.Xl(t,null,-2),
f.Yl<=2)),i=r?"."===t[0]||f.Yl>0?u.tr.er[0]:(u.tr.lr||u.tr.rr(),
u.tr.lr[0]):null,n=u.vt.Ul?[]:null,a=[-1.1,-1.1],s=[],_=u.Zl,d=r&&t.includes("%")&&!/[^\x21-\x7e]|%[^A-F\da-f]/.test(t),m=c+p,g=-1.1,v=0,b=0,$=0
;for(k&&m++,b=m;--b;)a.push(-1.1,-1.1);m=2*m-2;let M=(null===(e=u.vt.Ql)||void 0===e?void 0:e.Ct)||l.St.Ct
;for(let e=M.length;v<e;v++){let e=M[v];if((r?i.test(d?e.u:e.t):_(e.t,e.wt))&&(R||e.Pt)){null!==n&&n.push(e),$++
;let t=r?u.ComputeRecency(e.qt)||1e-16*Math.max(0,e.qt):u.ComputeRelevancy(e.t,e.wt,e.qt);if(t>g){
for(b=m-2;0<=b&&a[b]<t;b-=2)a[b+2]=a[b],a[b+3]=a[b+1];a[b+2]=t,a[b+3]=v,g=a[m]}}}for(n&&(u.vt.Ul.Ct=n),h+=$,$||(T^=2),
5&T?v=0:(v=2*p,p=0);v<=m;v+=2){let e=a[v];if(e<=0)break;let t=M[a[v+1]];if(t.u!==k){
let l=new z("history",t.u,d?t.u:t.t,t.wt,u.get2ndArg,e);l.visit=t.qt,s.push(l)}}o.et.jt(),D.Pl(s,2)},Kl(e,t){
if(u.vt.cl(t),e.o)return;let l=new Set;for(let e of t)e.incognito&&u.tabsInNormal||l.add(r.getTabUrl(e))
;j.ir([],e,l,p,l.size)},Vl(e,t){if(e.o)return;let l=[],r=new Set,i=new Set,f=-p;t.some(e=>{let t,n=e.u
;return t=n+"\n"+e.wt,!r.has(t)&&(r.add(t),i.add(n),++f>0&&l.push(e),l.length>=c)})?j.fr(l):j.ir(l,e,i,-f,0)},
ir(e,t,l,i,f){(0,r.t.history.search)({text:"",maxResults:p+c*(R?1:2)+f},r=>{if(t.o)return;r=r.filter(e=>{let t=e.url
;return t.length>2e3&&(e.url=t=o.it.Wt(t,e)),!l.has(t)&&(R||0!==o.lt(e.url,e.title||""))}),
i<0?r.length=Math.min(r.length,c-e.length):i>0&&(r=r.slice(i,i+c));let f=r.map(e=>({u:e.url,wt:e.title||"",
tl:e.lastVisitTime,rl:null,il:null}));i<0&&(f=e.concat(f)),j.fr(f)})},fr(e){e.forEach(j.nr),p=0,o.et.jt(),D.Pl(e,2)},
nr(e,t,l){let r=e.u,i=new z("history",r,o.et.Mt(r,r),e.wt||"",u.get2ndArg,(99-t)/100),f=e.rl;i.visit=e.tl,f&&(i.s=f,
i.label='<span class="undo">&#8630;</span>'+e.il),l[t]=i}},F={Bl(e,t){
if(1!==w.length||!(16&T)||w[0].lastIndexOf("/",w[0].length-2)>=0)return D.Pl([],16);if(o.it.Ht){
if(!l.St.Ct)return t>0?D.Pl([],16):o.it.At(()=>{e.o||F.Bl(e,0)});o.it.Ht(l.St.Ct)}return F.El()},El(){
let e,t=l.St.Gt,r=u.ur,f=16===T&&s?[]:null,n=w[0].replace("/","").toLowerCase(),o=n.length===w[0].length,a=[],_="",d=-1.1
;u.or(3);for(let l of t.keys())if((o?l.includes(n):l.endsWith(n))&&(e=t.get(l),R||e.Nt>0)){
let t=u.ComputeRelevancy(l,"",e.qt);f?f.push({r:t,d:l,m:e}):t>d&&(d=t,_=l)}let m=_.length===n.length;if(_&&!m){
if(!_.startsWith("www.")&&!_.startsWith(n)){let l=_.slice(_.indexOf(".")+1);if(l.includes(n)){let r;l="www."+l,
(r=t.get(l))?(R||r.Nt>0)&&(_=l,e=r):(r=t.get(l="m."+l))&&(R||r.Nt>0)&&(R||r.Nt>0)&&(_=l,e=r)}}
let l=_.startsWith(n)?0:_.startsWith("www."+n)?4:-1;if(l>=0){let[e,t]=i.ar(_),r=e.length-1
;t>1&&(l=_.length-l-n.length-e[r].length-1,(!l||3===t&&l===e[r-1].length+1)&&(m=true))}}if(_)h++,s=!p&&m||s,
a=F.sr(_,e,0,o);else if(f){f.sort(F._r),h=f.length,h>p+c&&(f.length=p+c);for(let e of f)a.push(F.sr(e.d,e.m,e.r,o)[0])}
u.or(r),D.Pl(a,16)},sr(e,t,r,f){let n=t.Qt>0,a="";if(2===l.ue.f){
let t=new RegExp(`^https?://${i.ul(e)}/?$`),r=l.ue.ie.filter(e=>t.test(e.u)&&(R||e.Pt));if(r.length>0){
let e=r.filter(e=>"s"===e.u[4]);n=e.length>0,r=n?e:r;let t=r[0].u;x=t.endsWith("/")?t.slice(0,-1):t,a=r[0].wt}}
let s=(n?"https://":"http://")+e+"/";if(!r&&(k=s,p>0))return p--,[]
;let _=new z("domain",s,f?e:e+"/","",u.get2ndArg,r||2),d=o.it.Lt?o.it.Ut(s):-1,m=d>0?l.St.Ct[d]:null;return u.dr(_),
m&&(R||m.Pt)&&(_.visit=m.qt,a=a||m.wt),_.title=u.cutTitle(a,[]),--c,[_]},_r(e,t){return t.r-e.r}
},B="audible audio muted unmuted active discarded incognito normal pinned visited new grouped ungrouped".split(" "),E={
Bl(e,t){!(4&T)||t&&(!w.length||256&d)?D.Pl([],4):u.Wl(y,d,E.El,e)},El(e,t){if(u.vt.cl(t),e.o)return
;let i,f=l.ye,n=w.length<=0,a=3&T,s=!!(8&d)&&y&&n,_=[],g=0;if(s&&!(128&d)&&t.length>p&&t.length>m){let e=new Map
;for(let l of t)e.set(l.id,l);{i=e.get(f)
;let l=i?i.openerTabId:0,r=l?e.get(l):null,n=r?t.indexOf(r):i?t.indexOf(i)-1:0,u=r?0:m/2|0
;for(;1<--u&&n>0&&t[n-1].openerTabId===l;n--);t=n>0?t.slice(n).concat(t.slice(0,n)):t}}
let v=[],b=[],$=(w.join("\n").match(/^:[a-z]+$/gm)||[]).reduce((e,t)=>{t=t.slice(1)
;for(let l=0;l<B.length;l++)B[l].startsWith(t)&&(e|=1<<l);return e},0);i=!i&&$?t.filter(e=>e.id===f)[0]:i
;let M=$&&i?r.getGroupId(i):null;for(let e of t){if(!y&&u.tabsInNormal&&e.incognito)continue
;let t=r.getTabUrl(e),i=e.text||(e.text=o.et.Mt(t,e.incognito?"":t)),f=e.title;if($&&(1===w.length&&(i=f=""),
e.audible&&(1&$&&(f+=" :audible"),
2&$&&(f+=" :audio"),12&$&&(r.isTabMuted(e)?4&$&&(f+=" :muted"):8&$&&(f+=" :unmuted"))),
16&$&&e.active&&!y&&(f+=":active"),
32&$&&e.discarded&&(f+=" :discarded"),192&$&&(e.incognito?64&$&&(f+=" :incognito"):128&$&&(f+=" :normal")),
256&$&&e.pinned&&(f+=" :pinned"),1536&$&&(l.De.has(e.id)?512&$&&(f+=" :visited"):1024&$&&(f+=" :new")),
6144&$&&(M&&r.getGroupId(e)===M?2048&$&&(f+=" :grouped"):4096&$&&(f+=" :ungrouped"))),n||u.Zl(i,f)){let t=e.windowId
;!y&&b.lastIndexOf(t)<0&&b.push(t),v.push(e)}}a&&1===v.length&&v[0].id===f&&(v.length=0);let S=v.length;if(h+=S,
S||(T^=4),p>=S&&!a)return p=0,D.Pl(_,4);b.sort((e,t)=>e-t);let k=s?new Map:null,x=l.xe;if(s)for(let e of v){
let t=e.openerTabId,l=t&&k.get(t);k.set(e.id,l?l<5?l+1:5:1)}
let R=32&d?1===l.L?0:performance.timeOrigin:0,A=n?s?(e,t)=>1/t:(g=g||performance.now(),
(e,t)=>l.De.get(t)||(4&d?g+t:-t)):u.ComputeWordRelevancy;for(let e=0;e<v.length;){
let t=v[e++],i=t.id,o=s?k.get(i):1,a=r.getTabUrl(t),d=l.De.get(i),c=new z("tab",a,t.text,t.title,A,s?e:i),m=t.windowId!==x?b.indexOf(t.windowId)+1+":":"",h=t.index+1+"",p=""
;t.active?(s||!(f===i||t.windowId===x)||(c.r=n||!/^(?!:[a-z]+)/m.test(w.join("\n"))?1<<31:0),
h=`(${h})`):d||(h=`**${h}**`),!u.tabsInNormal&&t.incognito&&(p+="*"),!!t.discarded&&(p+="~"),
t.audible&&(p+=r.isTabMuted(t)?"\u266a":"\u266c"),c.visit=d?d+R:0,c.s=i,c.label=`#${m}${h}${p&&" "+p}`,
o>1&&(c.level=" level-"+o),_.push(c)}_.sort(D.cr);let j=_.length,F=p+c-j;if(a||F<0||!n){p>0&&!a?(_=_.slice(p,p+c),j=c,
p=0):j>p+c&&(_.length=j=p+c);for(let e=a?0:j,t=Math.min(j,28);e<t;e++)_[e].r*=8/(e/4+1);!p&&D.Gl&&D.mr(_)}else if(p>0){
let e=_.slice(0,F).map(e=>Object.assign({},e));for(let t of e)t.label+="[r]";_=_.slice(p).concat(e),j=_.length
;for(let e=0;e<j;e++)_[e].r=j-e;p=0}o.et.jt(),D.Pl(_,4)}},O={hr:0,Bl:l.o,pr(e,t,r){if(!(8&T))return D.Pl([],8)
;let i,n,s,_,d,c=w,m=c.length>0?c[0]:"";if(0===c.length);else{
if(!t&&"\\"===m[0]&&"\\"!==m[1])return m.length>1?c[0]=m.slice(1):c.shift(),m=b.slice(1).trimLeft(),
R=!o.omniBlockList||R||o.tt.ol([m]),p?(p--,D.Pl([],8)):(i=O.wr(m,r),D.Pl([i],8));n=l.Il.map.get(m)}if(t){
if(!n)return true}else{if(!n&&!m.startsWith("vimium://"))return 0===a&&c.length<=1&&(a=c.length?u.vr.gr()?-2:0:-1),
D.Pl([],8);n&&$&&(c.push($),p=0,b+=" "+$,$="",M&=-5),c.length>1||(a=-1)}if(c.length>1&&n?(c.shift(),
b.length>200&&(c=b.split(" "),c.shift())):n&&(c=[]),R=!o.omniBlockList||R&&o.tt.ol([m]),n){let e=f.Ol(c,n.Rl,n.o,[])
;d=s=e.Rl,_=e.br}else d=s=c.join(" "),_=[];if("~"===m);else if(s.startsWith("vimium://")){
let t=l.$r(s.slice(9),1,true),i=O.Mr.bind(O,c,s,d,r||n,_);if(t instanceof Promise)return t.then(O.Sr.bind(O,e,r||n,i))
;if(t instanceof Array)return O.Sr(e,r||n,i,t);t&&(s=d=t,_=[])}else s=f.Xl(s,null,-2);return i=O.Mr(c,s,d,r||n,_),
D.Pl([i],8)},Sr(e,t,l,r){let f;if(!e.o){switch(r[1]){case 5:case 7:let o=r[0];if(a=7===r[1]&&w.length>1?a:-1,!o)break
;return b="\\ "+o,$="",w=(b.length<201?b:i.Yt(b,0,200).trim()).split(" "),w.length>1&&(w[1]=n.yr(w[1],w.length>2)),
u.kr(w),O.pr(e,null,t);case 2:let s=r[0];w=s.length>1||1===s.length&&s[0]?s:w,u.kr(w);let _=O.hr++;if(_>12)break
;let d=O.pr(e,true,t);if(_<=0&&(O.hr=0),true!==d)return d;break;case 0:r[0]&&(f=O.xr(l(),r))}D.Pl(f||[l()],8)}},
Mr(e,t,l,r,f){let n=new z("search",t,l,(r?r.Tr+": ":"")+e.join(" "),u.get2ndArg,9);return e.length>0&&r?(n.t=O.Rr(l,f),
n.title=u.cutTitle(n.title,[r.Tr.length+2,n.title.length]),n.textSplit=u.highlight(n.t,f)):(n.t=i.Xe(u.shortenUrl(l)),
n.title=u.cutTitle(n.title,[]),n.textSplit=i.zr(n.t)),n.v=_?"":r&&r.o||u.Ar(t),n.p=_&&r?r.Tr:"",n},xr(e,t){
let l=t[0],r=new z("math","vimium://copy "+l,l,l,u.get2ndArg,9)
;return--r.r,r.title=`<match style="text-decoration: none;">${u.cutTitle(r.title,[])}<match>`,r.textSplit=i.zr(t[2]),
[e,r]},Rr(e,t){let l,r,f,n=t.length;if(r=i.Xe(t.length>0?e.slice(0,t[0]):e),(l=i.jr(r))&&(r=r.slice(l),l=0),
t.length<=0)return r;for(f=t[0];t[l]=r.length,n>++l;)r+=i.Xe(e.slice(f,t[l])),f=t[l]
;return f<e.length&&(r+=i.Xe(e.slice(f))),r},wr(e,t){
let r=f.Xl(e,null,-2),n=4===f.Yl,o=new z("search",r,i.Xe(u.shortenUrl(r)),"",u.get2ndArg,9)
;return o.title=n?(t&&t.Tr||"~")+": "+u.cutTitle(e,[0,e.length]):u.cutTitle(e,[]),o.textSplit=i.zr(o.t),
o.v=_?"":n&&t&&((t.o||t.Rl).startsWith("vimium:")?l.Z.Fr:t.o)||u.Ar(r),o.p=_&&n?"~":"",o.n=1,o}},D={Br:0,Er:0,Gl:null,
Or:null,Hl:null,Bl(e){D.Or&&(D.Or.o=true);let t=D.Or={o:false};D.Er=0,T&=e[0];let l=1,r=-9&T?e.length:2;if(D.Gl=[],
D.Br=r-1,a=p&&-1,e[1]===O){let i=O.pr(t);if(r<3)return;if(i)return void i.then(D.Dr.bind(null,e,t,l));l=2}D.Dr(e,t,l)},
Dr(e,t,l){
for(u.Ir(Date.now()-18144e5),u.or(3*w.length||.01),w.indexOf("__proto__")>=0&&(w=w.join(" ").replace(/(^| )__proto__(?=$| )/g," __proto_").trimLeft().split(" "),
u.kr(w)),u.vt.Pr(R),w.sort(D.Qr),u.tr.Ur();l<e.length;l++)e[l].Bl(t,l-1)},
Qr:(e,t)=>t.length-e.length||(e<t?-1:e===t?0:1),mr(e){let t=new Map(e.map(e=>[e.u,e]));D.Gl=D.Gl.filter(e=>{
let l="search"===e.e?void 0:t.get(e.u);return l&&l.r<e.r&&(l.r=e.r),!l})},Pl(e,t){let l=D.Gl,r=e.length
;if(r>0&&(D.Er|=t,D.Gl=0===l.length?e:l.concat(e),8===t&&(s=!0,c-=r,h+=r)),0==--D.Br)return l=null,D.Zr()},Zr(){
let e=D.Gl;if(D.Gl=null,e.sort(D.cr),p>0?(e=e.slice(p,p+m),p=0):e.length>m&&(e.length=m),u.tr.qr=u.tr.lr=null,
w.length>0){let e=w[0],t=u.shortenUrl(e),l=e.length!==t.length
;(l||e.endsWith("/")&&e.length>1&&!e.endsWith("//"))&&(l&&(w[0]=t),u.tr.Cr(w[0],l))}e.forEach(u.dr)
;let t=e.length>0,l=s&&t,r=h,i=":"===g,f=a<0?-2!==a||t||i?0:3:R?w.length<=0||S?0:t?2:i?0:1:0,n=v,o=M,_=2!==f||i?0:D.Er,d=D.Hl
;return D.Gr(),d(e,l,f,_,r,n,o)},Gr(){D.Or=D.Hl=null,u.Hr(),u.setupQueryTerms(w=[],_=false,0),g=v=b=$=k=x="",
u.tr.er=null,u.or(3),u.Ir(0),a=D.Er=d=c=m=h=0,T=0,M=0,s=false,S=y=false,R=true},Wr(){let e,t,l=b;if(p=0,$="",
!(0===l.length||(e=(l=l.slice(-5)).lastIndexOf("+"))<0||0!==e&&32!==l.charCodeAt(e-1))){if(l=l.slice(e),
e=b.length-l.length,(t=parseInt(l,10))>=0&&"+"+t===l&&t<=(e>0?100:200))p=t;else if("+"!==l)return;b=b.slice(0,e&&e-1),
$=l,M|=4}},cr:(e,t)=>t.r-e.r},I={__proto__:null,bookm:[1,A],domain:[16,F],history:[2,j],omni:[63,O,F,j,A,E],
search:[8,O],tab:[4,E]};l.ml.Bl=(e,t,r)=>{
if(e=e.trim(),S=false,e&&l.L>1&&(/^[A-Za-z]:[\\/]|^\\\\([\w$%.-]+([\\/]|$))?/.test(e)||"file:"===e.slice(0,5).toLowerCase())){
":/\\".includes(e[1])&&(e=(":"===e[1]?"":"//")+e.slice(":"===e[1]?0:2).replace(/\\+/g,"/"))
;let t=(e=e.replace(/\\/g,"/").toLowerCase()).indexOf("//")+2;if(t>=2&&t<e.length&&"/"!==e[t]){
let l=e.slice(t).split("/",1)[0];if(l.includes("%")){let r=i.Xe(l);S=r===l,e=e.slice(0,t)+r+e.slice(t+l.length)}}}
g=b=e&&e.replace(i.D," "),v="",M=0,D.Wr(),w=(e=b)?(e=e.length<201?e:i.Yt(e,0,200).trimRight()).split(" "):[]
;let f=0|t.c||128
;f&&(f-=e.replace(/[\u2e80-\u2eff\u2f00-\u2fdf\u3000-\u303f\u31c0-\u31ef\u3200-\u9fbf\uf900-\ufaff\ufe30-\ufe4f\uff00-\uffef]/g,"aa").length-e.length),
f=Math.max(50,Math.min(f,320)),d=t.f,_=!!(1&d),m=c=Math.min(Math.max(3,0|t.r||10),25),h=0,D.Hl=r
;let a="bomni"===t.o?(d|=64,I.omni):I[t.o],p=w.length>=1?w[0]:"",$=t.t||63,k=t.e||63;if(a===I.tab&&(y=!!(2&d)),
2===p.length&&":"===p[0]){p=p[1]
;let e="b"===p?I.bookm:"h"===p?I.history:"t"===p||"T"===p||"w"===p||"W"===p?(y="t"!==p&&"T"!==p,d|=0,d|="T"===p?2048:0,
I.tab):"B"===p?(d|=64,I.omni):"H"===p?(d|=256,I.omni):"d"===p?I.domain:"s"===p?I.search:"o"===p?I.omni:null;e&&(a=e,
v=w.shift(),M|=1,b=b.slice(3),k=a[0])}if(w.length>0&&((p=w[0]).includes("\u3002")||p.includes("\uff1a"))&&!S){
S=w.length<2;let e=n.yr(p,S)
;e!==p?(w[0]=e,b=e+b.slice(p.length),S=S&&!/^[.\u3002]\w+([.\u3002]\w*)?$/.test(p)):S=S&&p.includes("\uff1a")&&!/\uff1a([^\/\d]|\d[^\0-\xff])/.test(p)
}R=!o.omniBlockList||o.tt.ol(w),T=$&k,s=2===a.length,b&&(M|=2),u.setupQueryTerms(w,_,f),D.Bl(a)}});