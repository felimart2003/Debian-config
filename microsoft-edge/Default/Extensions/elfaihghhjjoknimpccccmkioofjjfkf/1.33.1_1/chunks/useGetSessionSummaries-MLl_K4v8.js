import{aR as I,a0 as U,aT as P,c as s,bZ as C,b_ as S,S as G,j as T,aU as V,aA as h}from"./defineAppConfig-_73fm9CR.js";import{J as L,q as k,z as w,n as x}from"./useAddAppToIgnoreListDialogStore-gHGl-4Ba.js";const N="session-summaries";function Q(i,n=I()){const{state:a}=L();return k([N,i,a],n.getSessionSummaries,{keepPreviousData:!0})}function j(i,n,a){const{t:c}=U(),u=w({interval:h}),{deviceGroup:m}=P(x()),{isLoading:y,isError:d,data:t,error:p}=Q(n).remote,o=s(()=>{var r;return((r=t.value)==null?void 0:r.map(e=>C(e.sessions,u.value)))??[]}),f=s(()=>S(o.value)),v=s(()=>{var r;return((r=t.value)==null?void 0:r.map(e=>e.sessions.length))??[]}),g=s(()=>S(v.value)),M=s(()=>{var r;return((r=t.value)==null?void 0:r.map(e=>e.adCount))??[]}),A=s(()=>S(M.value)),D=s(()=>{var r;return((r=t.value)==null?void 0:r.map((e,l)=>({key:e.key,appId:e.appId,active:e.active,displayName:e.displayName,iconUrl:e.iconUrl,platform:e.platform,showPlatformIcon:!!m.value&&e.platform!==G.AppGroup,parentGroupId:a,...b(c,T(i),o.value[l],v.value[l],M.value[l],f.value||0,g.value||0,A.value||0)})).sort((e,l)=>l.primaryMetricValue-e.primaryMetricValue))??[]});return{isLoading:y,isError:d,error:p,data:D}}function b(i,n,a,c,u,m,y,d){const t=V(a),p=i("xSessions",c),o=i("xAds",u);switch(n){case"sessions":return{primaryMetricValue:c,primaryMetric:p,primaryMetricIntegerPercent:c/y*100,secondaryMetric:t,tertiaryMetric:o};case"ads":return{primaryMetricValue:u,primaryMetric:o,primaryMetricIntegerPercent:u/d*100,secondaryMetric:t,tertiaryMetric:p};default:return{primaryMetricValue:a,primaryMetric:t,primaryMetricIntegerPercent:a/m*100,secondaryMetric:p,tertiaryMetric:o}}}export{N as g,j as u};
