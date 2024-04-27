"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[5559],{905559:(e,t,a)=>{a.r(t),a.d(t,{SecretAddPanelComponent:()=>Z});var n=a(696832),s=a(242714),i=a(482598),l=a(133354),c=a(448430),r=a(382706),d=a(310789),o=a(86498),u=a(488203),p=a(114943),_=a(376452),h=a(615940),b=a(619122),m=a(620800),S=a(78047),g=a(692077),f=a(45272),T=a(926897),C=a(740300),I=a(899193),w=a(773157),v=a(806697),x=a(524130);const{CONTENT:D,DOCUMENT_STORAGE:E}=h.SecretsTabs,Z=()=>{const{routes:e}=(0,g.Xo)(),t=(0,p.Y)(),[a,h]=(0,n.useState)(D),[Z,A]=(0,n.useState)(!1),[O,y]=(0,n.useState)(!1),[N,U]=(0,n.useState)(!1),{currentSpaceId:F,teamId:R}=(0,b.fV)(),k=(0,s.o)("ace_secrets_vault_attachment"),[P,M]=(0,n.useState)({id:"",limitedPermissions:!1,title:"",content:"",spaceId:null!=F?F:R?String(R):"",secured:!1,attachments:[]}),{shouldShowFrozenStateDialog:V}=(0,v.Ub)(),{createVaultItem:B}=(0,i.u)(c.L),z=(0,o.V)(),{translate:H}=(0,u.Z)();if((0,n.useEffect)((()=>{(0,f.Nc)(T.PageView.ItemSecretCreate)}),[]),t.status!==l.rq.Success||!t?.data)return null;const X=()=>(0,g.uX)(e.userSecrets),L=k?[{active:a===D,label:H("webapp_secrets_edition_field_tab_title_details"),onClick:()=>h(D)},{active:a===E,label:H("webapp_secrets_edition_field_tab_title_attachments"),onClick:()=>h(E)}]:void 0;return(0,x.tZ)(_.zI,{isUsingNewDesign:!0,isViewingExistingItem:!1,itemHasBeenEdited:Z,submitPending:O,onSubmit:async()=>{O||(y(!0),await(async()=>{try{var e;await B({vaultItemType:r.U.Secret,content:{title:P.title,content:P.content,spaceId:null!=(e=P.spaceId)?e:"",isSecured:P.secured,attachments:P.attachments}})}catch(e){y(!1),z.showAlert(H("_common_generic_error"),d.BLW.ERROR)}})(),X())},onNavigateOut:()=>{X()},formId:"add_secret_panel",header:(0,x.tZ)(m.h,{title:P.title?P.title:H("webapp_secrets_title_field"),tabs:L}),secondaryActions:a===E?[(0,x.tZ)(w.d,{isQuotaReached:!1,onFileUploadStarted:()=>{U(!0)},onFileUploadDone:async e=>{U(!1),e.success&&(await C.C.commitSecureFile({secureFileInfo:e.secureFileInfo}),M((t=>({...t,attachments:[...t.attachments,(0,I.w)(e.secureFileInfo)]}))),A(!0))},isShared:!1,dataType:"KWSecret",disabled:!!V},"uploadAction")]:[],children:(0,x.tZ)(S.e,{activeTab:a,isAdmin:!1,secretValues:P,handleChange:(e,t)=>{if("spaceId"===e&&t===P.spaceId)return;const a={...P,[e]:t},n=!!(a.title||a.content||a.spaceId||a.secured);n!==Z&&A(n),M(a)},handleFileInfoDetached:e=>{M((t=>({...t,attachments:t.attachments.filter((t=>t.id!==e))})))},isAttachmentUploading:N})})}},615940:(e,t,a)=>{a.d(t,{SecretsTabs:()=>n});let n=function(e){return e[e.CONTENT=0]="CONTENT",e[e.SHARED_ACCESS=1]="SHARED_ACCESS",e[e.DOCUMENT_STORAGE=2]="DOCUMENT_STORAGE",e}({})},620800:(e,t,a)=>{a.d(t,{h:()=>c});var n,s=a(364438),i=a(376452),l=a(524130);const c=({title:e,tabs:t})=>(0,l.tZ)(i.V9,{icon:(0,l.tZ)("div",{sx:{width:"168px",height:"108px",borderStyle:"solid",borderWidth:"1px",borderRadius:"4px",borderColor:"ds.border.neutral.quiet.idle",display:"flex",justifyContent:"center",alignItems:"center"},children:n||(n=(0,l.tZ)(s.JO,{name:"ItemSecretOutlined",color:"ds.text.neutral.standard",size:"xlarge"}))}),title:e,tabs:t})},78047:(e,t,a)=>{a.d(t,{e:()=>w});var n=a(696832),s=a(364438),i=a(133354),l=a(980936),c=a(488203),r=a(555449),d=a(433988),o=a(154350),u=a(468037),p=a(167406),_=a(615940),h=a(806697),b=a(61014),m=a(926897),S=a(524130);const{CONTENT:g,SHARED_ACCESS:f,DOCUMENT_STORAGE:T}=_.SecretsTabs,C="webapp_secure_notes_edition_field_text_max_size_reached",I=1e4,w=({activeTab:e,isAdmin:t,isAttachmentUploading:a,secretValues:_,handleChange:w,handleFileInfoDetached:v,onModalDisplayStateChange:x})=>{const{translate:D}=(0,c.Z)(),[E,Z]=(0,n.useState)(""),{shouldShowFrozenStateDialog:A}=(0,h.Ub)(),O=(0,d.F)(),{isMPLessUser:y}=(0,o.Z)(),N=!O&&!y,U=(0,l.I)(),F=U.status===i.rq.Success&&!U.isDisabled,{id:R,limitedPermissions:k,title:P,content:M,spaceId:V,secured:B}=_;return null===A?null:(0,S.BX)(S.HY,{children:[e===g&&(0,S.BX)(S.HY,{children:[(0,S.BX)(u.u,{title:D("webapp_secrets_box_title_details"),children:[(0,S.tZ)(s.qo,{"data-name":"title",label:D("webapp_secrets_title_field"),value:P,onChange:e=>w("title",e.target.value),disabled:k,readOnly:A,sx:{marginBottom:"8px"}}),(0,S.tZ)(s.Kx,{"data-name":"content",label:D("webapp_secrets_content_field"),placeholder:D("webapp_secrets_content_field_placeholder"),value:M,onBeforeInput:e=>{const t=e.currentTarget.value;t.length>I&&(Z(D(C,{charLeft:I-(t.length-1)})),e.preventDefault())},onPaste:e=>{const t=e.clipboardData.getData("text/plain");e.currentTarget.value.length+t.length>I&&(Z(D(C,{charLeft:I-e.currentTarget.value.length})),e.preventDefault())},onChange:e=>{E&&Z(""),w("content",e.target.value)},disabled:k,readOnly:A,feedback:E?{text:E}:void 0,error:!!E})]}),F?(0,S.tZ)(u.u,{title:D("webapp_secrets_box_title_organization"),additionalSx:{marginTop:"16px"},children:(0,S.tZ)("div",{children:(0,S.tZ)(p.M,{disabled:A,isUsingNewDesign:!0,defaultSpaceId:null!=V?V:"",spaceId:null!=V?V:"",onChange:e=>w("spaceId",e)})})}):null,N?(0,S.tZ)(u.u,{title:D("webapp_secrets_box_title_preferences"),additionalSx:{marginTop:"16px"},children:(0,S.tZ)(s.XZ,{readOnly:A,label:D("webapp_secrets_preferences_mp_title"),description:D("webapp_secrets_preferences_mp_description"),checked:B,onChange:({target:e})=>w("secured",e.checked)})}):null]}),e===T&&(0,S.tZ)(b.P,{attachments:_.attachments,additionalProps:{itemId:R,itemType:m.ItemType.Secret,handleFileInfoDetached:e=>{v(e)},onModalDisplayStateChange:x,isUploading:a}}),e===f&&(0,S.tZ)(r.u,{isAdmin:t,id:R})]})}}}]);