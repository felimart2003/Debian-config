"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[3217],{766490:(e,t,a)=>{a.r(t),a.d(t,{NoteAddPanel:()=>L});var s=a(696832),o=a(799852),n=a(133354),c=a(448430),i=a(926897),r=a(148038),l=a(361607),u=a(482598),d=a(573623),S=a(310789),p=a(382706),h=a(45272),g=a(692077),m=a(740300),y=a(108403),N=a(114943),_=a(806697),b=a(276376),C=a(495795),I=a(376452),f=a(86541),w=a(899193),T=a(773157),v=a(420684),A=a(671785),E=a(413368),D=a(326239),R=a(619122),F=a(86498),O=a(488203),V=a(285163),P=a(524130);const{CONTENT:U,DOCUMENT_STORAGE:k}=f.SecureNoteTabs,Z=({activeSpaces:e,noteCategories:t})=>{var a;const{routes:o}=(0,b.Xo)(),n=(0,A.aV)(),f=(0,N.Y)(),{openPaywall:Z}=(0,y.nL)(),B=(0,g.k6)(),{openDialog:L,shouldShowFrozenStateDialog:q}=(0,_.Ub)(),[G,M]=(0,s.useState)(U),[Y,z]=(0,s.useState)(!1),[H,Q]=(0,s.useState)(!1),[W,X]=(0,s.useState)([]),{currentSpaceId:x}=(0,R.fV)(),K=(0,l._)(),j=(0,F.V)(),{translate:J}=(0,O.Z)(),{addNoteToCollections:$}=(0,V.Q)(),[ee,te]=(0,s.useState)(!1),[ae,se]=(0,s.useState)(""),[oe,ne]=(0,s.useState)(""),[ce,ie]=(0,s.useState)("GRAY"),[re,le]=(0,s.useState)(e?.length>0&&!e[0].info?.personalSpaceEnabled?e[0].teamId:null!=x?x:""),[ue,de]=(0,s.useState)(!1),{createVaultItem:Se}=(0,u.u)(c.L),[pe,he]=(0,s.useState)([]),[ge,me]=(0,s.useState)(!1),[ye,Ne]=(0,s.useState)({category:"noCategory",type:"GRAY",spaceId:re,secured:!1}),_e=Boolean(K.data?.sharingVault_web_Secure_Notes_Revamp_dev)||Boolean(K.data?.sharingVault_web_Secure_Notes_Revamp_prod),be={attachments:W.map(w.w),id:"",limitedPermissions:!1,content:ae,title:oe,...ye};if((0,s.useEffect)((()=>{(0,h.Nc)(i.PageView.ItemSecureNoteCreate)}),[]),(0,s.useEffect)((()=>{q&&L()}),[q]),f.status!==r.rq.Success||!f?.data)return null;const Ce=(0,E.n6)(E.Co.SecureNotes,f.data?.capabilities),Ie=()=>j.showAlert(J("_common_generic_error"),S.BLW.ERROR),fe=()=>{(0,h.Nc)(i.PageView.ItemSecureNoteList),(0,v.P)(),(0,g.uX)(o.userSecureNotes)},we=()=>z(!0),Te=e=>t=>{we(),e(t)},ve=Te(le),Ae=Te(ie),Ee=Te(ne),De=Te(se),Re=Te(de);return Ce&&(Z(E.qd.SecureNote),B.push("/secure-notes")),(0,P.tZ)(I.zI,{isViewingExistingItem:!1,itemHasBeenEdited:Y,submitPending:H,onSubmit:async()=>{if(!H){Q(!0);try{await(async()=>{const e=_e?{spaceId:null!=re?re:"",type:ce,category:"noCategory",secured:ue}:ye;try{const t=await Se({vaultItemType:p.U.SecureNote,content:{...e,content:ae,title:oe,attachments:be.attachments}});if(!(0,d.d6)(t))return void Ie();const a=(0,d.db)(t).id;await $(a,pe)}catch(e){Ie()}X([])})()}catch{Q(!1)}fe()}},secondaryActions:G===k?[a||(a=(0,P.tZ)(T.d,{isQuotaReached:!1,isShared:!1,onFileUploadStarted:()=>{te(!0)},onFileUploadDone:async e=>{te(!1),e.success&&(await m.C.commitSecureFile({secureFileInfo:e.secureFileInfo}),X([...W,e.secureFileInfo]),z(!0))},dataType:"KWSecureNote"},"uploadAction"))]:[],primaryActions:[],onNavigateOut:()=>{W.forEach((async e=>{const{Id:t}=e;await m.C.deleteSecureFile({id:t})})),(0,v.P)(),X([]),fe()},isUsingNewDesign:_e,isSomeDialogOpen:ge,formId:"add_securenote_panel",header:(0,P.tZ)(D.h,{activeTab:G,backgroundColor:be.type,displayDocumentStorage:!pe.length,displaySharedAccess:!1,displayMoreOptions:!1,setActiveTab:M,title:oe,setTitle:e=>{we(),ne(e)}}),children:(0,P.tZ)(C.T,{activeTab:G,data:be,content:ae,title:oe,color:ce,spaceId:null!=re?re:"",setSpaceId:ve,setColor:Ae,setTitle:Ee,setContent:De,setIsSecured:Re,handleFileInfoDetached:e=>{X(W.filter((t=>t.Id!==e)))},hasAttachment:!!W.length,isSecured:ue,isAdmin:!1,isDisabled:!!q,isSecureNoteAttachmentEnabled:n,isShared:!1,isUploading:ee,noteCategories:t,onModifyData:we,saveSecureNoteOptions:Ne,isSecureNoteRevampEnabled:_e,setCollectionsToUpdate:he,setHasDialogsOpenedByChildren:me})})};var B=a(718108);const L=()=>{const e=(0,B.E)(),t=(0,o.k)(c.L,"secureNoteCategory",{});return t.status!==n.rq.Success||e.status!==n.rq.Success?null:(0,P.tZ)(Z,{noteCategories:t.data,activeSpaces:e.data})}}}]);