"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[8554,3076],{188134:(e,t,a)=>{a.d(t,{t:()=>y});var r=a(696832),i=a(926897),n=a(364438),d=a(482598),s=a(573623),o=a(448430),l=a(382706),c=a(692077),u=a(45272),_=a(488203),p=a(806697),m=a(386962),h=a(310789),b=a(524130);const E=({formId:e,handleCancel:t,hasDataBeenModified:a,isSubmitting:r})=>{const{translate:i}=(0,_.Z)();return(0,b.BX)(h.Ejs,{sx:{padding:"24px"},as:"footer",justifyContent:"flex-end",flexDirection:"row",flexWrap:"nowrap",children:[a?(0,b.tZ)(h.zxk,{type:"submit",form:e,disabled:r,children:i("webapp_panel_edition_generic_save_changes")}):null,(0,b.tZ)(h.zxk,{sx:{marginLeft:"16px"},nature:"secondary",onClick:t,type:"button",children:i("webapp_panel_edition_generic_cancel_changes")})]})},I="id-add-form",f={GENERIC_ERROR:"_common_generic_error"};function y({children:e,initialValues:t,listRoute:a,reportError:h,countryToKeys:y,header:g,type:C,requiredProperty:S="idNumber"}){const{translate:w}=(0,_.Z)(),{openDialog:L,shouldShowFrozenStateDialog:D}=(0,p.Ub)(),[R,N]=r.useState(!1),[Z,A]=r.useState(!1),[U,P]=r.useState(t.country),{createVaultItem:v}=(0,d.u)(o.L),{showToast:B}=(0,n.pm)();r.useEffect((()=>{const e={[l.U.DriversLicense]:i.PageView.ItemDriverLicenceCreate,[l.U.FiscalId]:i.PageView.ItemFiscalStatementCreate,[l.U.IdCard]:i.PageView.ItemIdCardCreate,[l.U.Passport]:i.PageView.ItemPassportCreate,[l.U.SocialSecurityId]:i.PageView.ItemSocialSecurityStatementCreate};(0,u.Nc)(e[C])}),[C]),r.useEffect((()=>{D&&L()}),[D]);const T=()=>{(0,u.Nc)(i.PageView.ItemIdList),(0,c.uX)(a)},x=()=>{B({description:w(f.GENERIC_ERROR),mood:"danger",isManualDismiss:!0})},V=r.useRef((e=>{if(null!==e){const{dirty:t,isSubmitting:a,values:r}=e;N(t),A(a),P(r.country)}}));return(0,b.BX)(b.HY,{children:[g(U),(0,b.tZ)(m.P,{formId:I,formRef:V.current,handleSubmit:async(e,{setSubmitting:t,setFieldError:a})=>{if(!e[S])return a(S,"");try{const a=await v({vaultItemType:C,content:e});(0,s.d6)(a)?(B({description:w(y(U).success)}),T()):(t(!1),x(),h(new Error("[ids][add] Unable to add id"),a.error?.errorMessage))}catch(e){t(!1),x(),h(e,"[ids][add] Unexpected exception while add id")}},initialValues:t,variant:"add",children:t=>e({values:t})}),(0,b.tZ)(E,{formId:I,handleCancel:()=>{T()},hasDataBeenModified:R,isSubmitting:Z})]})}},14336:(e,t,a)=>{a.r(t),a.d(t,{IdCardAddPanel:()=>_}),a(696832);var r=a(382706),i=a(488203),n=a(739649),d=a(188134),s=a(566219),o=a(974910),l=a(762428),c=a(524130);const u=()=>({title:"webapp_id_creation_idcard_title_default",success:"webapp_id_creation_idcard_alert_add_success_default"}),_=({lee:e,listRoute:t})=>{var a;const{translate:_}=(0,i.Z)(),p={idName:"",idNumber:"",expirationDate:"",issueDate:"",country:(0,s.lt)(e.carbon.currentLocation),spaceId:null!=(a=(0,n.B)(e.globalState))?a:""};return(0,c.tZ)(d.t,{initialValues:p,listRoute:t,reportError:e.reportError,countryToKeys:u,header:e=>(0,c.tZ)(o.h,{title:_("webapp_id_creation_idcard_title_default"),country:e,type:r.U.IdCard}),type:r.U.IdCard,children:({values:e})=>(0,c.tZ)(l.P,{variant:"add",country:e.country})})}},872055:(e,t,a)=>{a.d(t,{a:()=>i});var r=a(914662);const i=new Set([r.cH.AU,r.cH.GB,r.cH.IE,r.cH.NZ])},762428:(e,t,a)=>{a.d(t,{P:()=>m});var r,i=a(696832),n=a(488203),d=a(177650),s=a(321143),o=a(806697),l=a(872055),c=a(16792),u=a(865212),_=a(524130);const p={...c.k},m=i.memo((({variant:e,handleCopy:t,country:a})=>{const{translate:c}=(0,n.Z)(),{shouldShowFrozenStateDialog:m}=(0,o.Ub)(),h=i.useRef(null);return i.useEffect("add"===e?()=>{const e=setTimeout((()=>{h.current?.focus()}),d.sc);return()=>clearTimeout(e)}:()=>{},[]),(0,_.BX)(_.HY,{children:[(0,_.tZ)(u.YI,{name:"idName",label:c(p.NAME_LABEL),placeholder:c(p.NAME_PLACEHOLDER),ref:h,disabled:!!m}),(0,_.tZ)(u.G1,{name:"idNumber",label:c(p.ID_NUMBER_LABEL),placeholder:c(p.ID_NUMBER_PLACEHOLDER),handleCopy:"edit"===e?t:void 0,disabled:!!m}),(0,_.tZ)(u.Nn,{name:"issueDate",label:c(p.ISSUE_DATE_LABEL),disabled:!!m}),(0,_.tZ)(u.Nn,{name:"expirationDate",label:c(l.a.has(a)?p.EXPIRATION_DATE_LABEL_UK:p.EXPIRATION_DATE_LABEL_US),disabled:!!m}),(0,_.tZ)(u.Dz,{name:"country",label:c(p.COUNTRY_LABEL),disabled:!!m}),r||(r=(0,_.tZ)(s.c,{height:24})),(0,_.tZ)(u.A0,{name:"spaceId",disabled:!!m})]})}))}}]);