"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[2373],{363338:(e,t,a)=>{a.d(t,{N:()=>o});var s=a(696832),i=a(383849),n=a.n(i);var l=a(803322);const o=({disableHover:e=!1,...t})=>{const[a,i]=s.useState(!1),{children:[o,...r]=[]}=t;return(0,l.BX)("div",{className:"buttonsContainer--TiPIoxROXR",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[o,t.enabled&&(0,l.tZ)("span",{className:n()("buttons--p98QFrEo3f",{"visible--aWYlZRshE_":e||a}),children:r})]})}},611913:(e,t,a)=>{a.d(t,{Z:()=>_});var s=a(696832),i=a(554712),n=a(383849),l=a.n(n),o=a(526849),r=a(957459),d=a(158549),p=a.n(d),c=a(573630);const h={container:"container--Qypu77vxOn",containerMultiLine:"containerMultiLine--ncWYFwQEnR",_field:"_field--KII5X4xmLN",input:"input--Iq10hxAz32 _field--KII5X4xmLN",inputRow:"inputRow--gdD_j5S1R8",textarea:"textarea--VpIWTZemV2 _field--KII5X4xmLN",label:"label--Ww_r49kt_J",text:"text--oXyCzpUMwG",value:"value--aD7nWEqBIq",multiline:"multiline--fdPM1KFHPT"};var u=a(803322);const m=e=>{navigator.clipboard.writeText(e.replaceAll(" ",""))};class _ extends s.Component{constructor(e){super(e),this.field=void 0,this.handleChange=e=>{this.setState({selectionRangeStart:e.target.selectionStart,selectionRangeEnd:e.target.selectionEnd}),this.props.onChange&&this.props.onChange(e)},this.state={fieldHtmlId:(0,r.Z)(),selectionRangeStart:null,selectionRangeEnd:null}}componentDidUpdate(){null!==this.state.selectionRangeStart&&null!==this.state.selectionRangeEnd&&this.field.setSelectionRange(this.state.selectionRangeStart,this.state.selectionRangeEnd)}shouldComponentUpdate(e,t){return!((0,o.equals)(this.props.value,e.value)&&(0,o.equals)(this.props.error,e.error)&&(0,o.equals)(this.props.mask,e.mask)&&(0,o.equals)(this.props.label,e.label)&&(0,o.equals)(this.state.selectionRangeStart,t.selectionRangeStart)&&(0,o.equals)(this.state.selectionRangeEnd,t.selectionRangeEnd))}getValue(){return this.field.value}focus(){this.field.focus()}getTextarea(){var e;return(0,u.tZ)(i.Z,{inputRef:e=>{this.field=e},id:this.state.fieldHtmlId,disabled:this.props.disabled,value:null!=(e=this.props.value)?e:"",name:this.props.name,"data-name":this.props.dataName,sx:{borderColor:this.props.error&&"ds.border.danger.standard.idle"},className:h.textarea,placeholder:this.props.placeholder,onBlur:this.props.handleFieldBlur,onKeyDown:this.props.onFieldKeyDown,onChange:this.handleChange,readOnly:this.props.readOnly})}getInput(){var e;const t={onBlur:this.props.handleFieldBlur,onChange:this.handleChange,disabled:this.props.disabled,readOnly:this.props.readOnly,value:null!=(e=this.props.value)?e:""},a={ref:e=>{this.field=e},id:this.state.fieldHtmlId,autoComplete:"off",className:l()(h.input,{[h.error]:Boolean(this.props.error)}),sx:{...this.props.error&&{"::placeholder":{color:"ds.text.danger.quiet"},minWidth:"fit-content"},border:"1px solid",borderColor:this.props.error?"ds.border.danger.standard.idle":"transparent"},name:this.props.name,"data-name":this.props.dataName,type:this.props.type||"text",placeholder:this.props.placeholder,onKeyDown:this.props.onFieldKeyDown};return this.props.mask?(0,u.tZ)(p(),{...t,...this.props.maskProps,mask:this.props.mask,onCopy:()=>m(t.value),onCut:()=>m(t.value),children:e=>(0,u.tZ)("input",{...a,...e})}):(0,u.BX)("div",{className:h.inputRow,children:[(0,u.tZ)("input",{...a,...t}),(0,u.tZ)("div",{hidden:!this.props.error||"string"!=typeof this.props.error,sx:{color:"ds.text.danger.quiet"},className:h.errorMessage,children:this.props.error})]})}render(){const e="password"!==this.props.type?this.props.value||this.props.placeholder:"";return(0,u.BX)("div",{className:l()(h.container,this.props.multiLine?h.containerMultiLine:null),children:[this.props.label&&(0,u.tZ)("label",{className:h.label,sx:{color:"ds.text.neutral.catchy"},htmlFor:this.state.fieldHtmlId,children:(0,u.tZ)("span",{className:h.text,title:this.props.label,children:this.props.label})}),(0,u.tZ)(c.Z,{tooltipText:e,className:l()(h.value,{[h.placeholder]:!this.props.value,[h.multiline]:this.props.multiLine}),children:this.props.multiLine?this.getTextarea():this.getInput()})]})}}_.defaultProps={maskProps:{maskChar:""}}},684098:(e,t,a)=>{a.d(t,{d:()=>u});var s,i=a(782579),n=a(488203),l=a(363338),o=a(611913),r=a(310789),d=a(803322);const p="webapp_credential_edition_field_website",c="webapp_credential_edition_field_placeholder_no_url",h="webapp_credential_edition_field_website_action_goto",u=({url:e,hasUrlError:t,disabled:a,editViewButtonEnabled:u,isWebsiteFieldReadonly:m,handleChange:_,handleGoToWebsite:g,isUsingNewDesign:b=!1})=>{const{translate:f}=(0,n.Z)();return b?(0,d.tZ)(i.qZ,{"data-name":"URL",label:f(p),placeholder:f(c),disabled:a||!e&&m,value:e,error:t,readOnly:!!e&&m,onChange:_,sx:{marginTop:"8px"},showOpenWebsite:u?{label:f(h),onClick:g}:void 0}):(0,d.BX)(l.N,{enabled:u,disableHover:!0,children:[(0,d.tZ)(o.Z,{label:f(p),placeholder:f(c),dataName:"URL",disabled:a,value:e,error:t,readOnly:m,onChange:_}),(0,d.tZ)(r.ua7,{placement:"top",content:f(h),children:(0,d.tZ)(i.zx,{mood:"neutral",intensity:"supershy",type:"button",onClick:g,sx:{border:"none",minWidth:"fit-content",padding:"10px"},role:"link","aria-label":f(h),children:s||(s=(0,d.tZ)(r.RTC,{}))})})]})}},682994:(e,t,a)=>{a.d(t,{s:()=>m}),a(696832);var s=a(782579),i=a(482598),n=a(133354),l=a(448430),o=a(488203);let r=function(e){return e.LastAdmin="LastAdmin",e.GroupSharing="GroupSharing",e.CollectionSharing="CollectionSharing",e.Generic="Generic",e}({});var d=a(365580),p=a(803322);const c=({reason:e,translations:t,goToSharingAccess:a,closeCantDeleteDialog:i})=>{const{translate:n}=(0,o.Z)(),l=((e,t)=>{const{groupSharingTitle:a,lastAdminTitle:s,collectionSharingTitle:i,genericErrorTitle:n}=e;switch(t){case r.LastAdmin:return s;case r.GroupSharing:return a;case r.CollectionSharing:return i;case r.Generic:return n;default:return(0,d.U)(t)}})(t,e),c=((e,t)=>{const{groupSharingSubtitle:a,lastAdminSubtitle:s,collectionSharingSubtitle:i,genericErrorSubtitle:n}=e;switch(t){case r.LastAdmin:return s;case r.GroupSharing:return a;case r.CollectionSharing:return i;case r.Generic:return n;default:return(0,d.U)(t)}})(t,e);return(0,p.tZ)(s.Vq,{isOpen:!0,onClose:i,title:null!=l?l:"",closeActionLabel:n("_common_dialog_dismiss_button"),actions:e===r.LastAdmin||r.GroupSharing||r.CollectionSharing?{primary:{children:t.lastAdminActionLabel,onClick:()=>{a(),i()}}}:void 0,children:c})};var h=a(837527);const u=({closeConfirmDeleteDialog:e,onDeleteConfirm:t,translations:a})=>{const{translate:i}=(0,o.Z)(),{confirmDeleteSubtitle:n,confirmDeleteTitle:l,confirmDeleteDismiss:r,confirmDeleteConfirm:d}=a;return(0,p.tZ)(s.Vq,{title:l,onClose:e,isOpen:!0,dialogClassName:h.Ht,closeActionLabel:i("_common_dialog_dismiss_button"),isDestructive:!0,actions:{primary:{children:d,onClick:t,id:"deletion-dialog-confirm-button"},secondary:{children:r,onClick:e,autoFocus:!0,id:"deletion-dialog-dismiss-button"}},children:n})},m=({closeConfirmDeleteDialog:e,goToSharingAccess:t,isVisible:a,itemId:d,onDeletionSuccess:h,sharingStatus:m,translations:_,vaultItemType:g,isShared:b,isSharedViaUserGroup:f,isItemInCollection:y,isLastAdmin:v})=>{const{showToast:C}=(0,s.pm)(),{translate:k}=(0,o.Z)(),{deleteVaultItems:w}=(0,i.u)(l.L);if(!a)return null;let S;return(b||m?.isShared)&&(f&&(S=r.GroupSharing),v&&(S=r.LastAdmin),y&&(S=r.CollectionSharing)),S&&t?(0,p.tZ)(c,{reason:S,translations:_,goToSharingAccess:t,closeCantDeleteDialog:e}):(0,p.tZ)(u,{closeConfirmDeleteDialog:e,onDeleteConfirm:async()=>{try{var e;(await w({ids:[d],vaultItemType:g})).tag===n.rq.Success?(C({description:null!=(e=_.deleteSuccessToast)?e:k("webapp_personal_info_edition_delete_success_toast")}),h()):C({description:k("_common_generic_error"),mood:"danger",isManualDismiss:!0})}catch(e){C({description:k("_common_generic_error"),mood:"danger",isManualDismiss:!0})}},translations:_})}},682373:(e,t,a)=>{a.r(t),a.d(t,{Connected:()=>N});var s=a(696832),i=a(448430),n=a(382706),l=a(799852),o=a(619122),r=a(526849),d=a(482598),p=a(287279),c=a(782579),h=a(310789),u=a(376452),m=a(692077),_=a(488203),g=a(276376),b=a(86498),f=a(682994),y=a(700033),v=a(164718),C=a(611913),k=a(45272),w=a(561605),S=a(684098),D=a(167406),Z=a(806697),I=a(803322);const x=({passkeyContent:e,spaceDetails:t,signalEditedValues:a})=>{var i;const{translate:n}=(0,_.Z)(),{shouldShowFrozenStateDialog:l}=(0,Z.Ub)(),o=null!=(i=t?.teamName)?i:n("webapp_credential_edition_field_space_personal"),{userDisplayName:r,rpId:d,itemName:p,note:h,spaceId:u,id:m}=e;(0,s.useEffect)((()=>{(0,k.Nc)(y.PageView.ItemPasskeyDetails)}),[]);const g=t=>s=>{const i="string"==typeof s?s:s.target.value;a({...e,[t]:i})},b=Boolean(t?.info.forcedDomainsEnabled&&e.spaceId===t?.teamId||l);return null===l?null:(0,I.BX)(I.HY,{children:[(0,I.BX)("div",{sx:{marginBottom:"32px"},children:[(0,I.tZ)(C.Z,{disabled:!0,value:r,label:n("webapp_passkey_edition_field_username"),placeholder:n("webapp_passkey_edition_field_username_placeholder")},"passkeyUsername"),(0,I.tZ)(S.d,{url:d,hasUrlError:!1,disabled:!0,editViewButtonEnabled:!0,isWebsiteFieldReadonly:!1,handleChange:(e,t="")=>{if(e instanceof Event&&t)throw new Error("handleChange was called with both a ChangeEvent and key.")},handleGoToWebsite:()=>{(0,k.Kz)(new y.UserOpenExternalVaultItemLinkEvent({itemId:m,itemType:y.ItemTypeWithLink.Passkey,domainType:y.DomainType.Web})),(0,w.Yo)(new v.Y(d).getUrlWithFallbackHttpsProtocol())}})]}),(0,I.tZ)(C.Z,{value:null!=p?p:r,onChange:g("itemName"),label:n("webapp_passkey_edition_field_item_name"),placeholder:n("webapp_passkey_edition_field_item_name_placeholder"),readOnly:l},"passkeyItemName"),(0,I.tZ)(c.u,{content:n("webapp_passkey_edition_field_force_categorized",{space:o}),passThrough:!b,children:(0,I.tZ)("div",{children:(0,I.tZ)(D.M,{spaceId:u,labelSx:D.e,isDisabled:b,onChange:e=>g("spaceId")(e)})})}),(0,I.tZ)(C.Z,{readOnly:l,label:n("webapp_passkey_edition_field_notes"),placeholder:n("webapp_passkey_edition_field_placeholder_no_notes"),dataName:"note",value:h,onChange:g("note"),multiLine:!0})]})};var T;const E=({item:e})=>{const{routes:t}=(0,g.Xo)(),{translate:a}=(0,_.Z)(),{updateVaultItem:l}=(0,d.u)(i.L),[y,v]=(0,s.useState)(!1),C=(0,m.k6)(),k=(0,b.V)(),{spaceDetails:w}=(0,o.fV)(),[S,D]=(0,s.useState)(e),[Z,E]=(0,s.useState)(!1),[N,R]=(0,s.useState)(!1),L=()=>{(0,m.uX)(t.userPasskeys)},B={confirmDeleteConfirm:a("webapp_passkey_edition_delete_confirm"),confirmDeleteDismiss:a("webapp_passkey_edition_delete_dismiss"),confirmDeleteSubtitle:a("webapp_passkey_edition_delete_text"),confirmDeleteTitle:a("webapp_passkey_edition_delete_header"),deleteSuccessToast:a("webapp_passkey_edition_name_delete_alert",{passkey:e.rpName})},A=()=>{k.showAlert(a("_common_generic_error"),h.BLW.ERROR)},V=()=>{if(w?.info.forcedDomainsEnabled&&S.spaceId!==w.teamId){const e=S.userDisplayName?.split("@")[1];if(w.info.teamDomains.includes(e))return w.teamId}return S.spaceId};return(0,I.BX)(u.zI,{itemHasBeenEdited:N,isViewingExistingItem:!0,onNavigateOut:L,onClickDelete:()=>v(!0),onSubmit:async()=>{if(!Z){E(!0);try{const s=await l({vaultItemType:n.U.Passkey,content:{...S,spaceId:V()},id:e.id});if((0,p.d6)(s)){const s=a("webapp_passkey_edition_name_update_alert",{passkey:e.rpName});k.showAlert(s,h.BLW.SUCCESS),C.push(t.userPasskeys)}else E(!1),A()}catch(e){E(!1),A()}}},formId:"edit_passkey_panel",header:(0,I.tZ)(u.V9,{icon:(0,I.tZ)("div",{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:"147px",height:"98px"},children:T||(T=(0,I.tZ)(c.JO,{name:"PasskeyOutlined",size:"xlarge",color:"white"}))}),iconBackgroundColor:"ds.container.expressive.brand.catchy.active",title:e.rpName}),children:[(0,I.tZ)(x,{passkeyContent:S,signalEditedValues:t=>{R(!(0,r.equals)(t,e)),D(t)},spaceDetails:w}),(0,I.tZ)(f.s,{isVisible:y,itemId:e.id,closeConfirmDeleteDialog:()=>v(!1),onDeletionSuccess:L,translations:B,vaultItemType:n.U.Passkey})]})},N=e=>{const{data:t}=(0,l.k)(i.L,"query",{vaultItemTypes:[n.U.Passkey],ids:[`{${e.match.params.uuid}}`]});return t?.passkeysResult.items.length?(0,I.tZ)(o.qc,{lee:e.lee,children:(0,I.tZ)(E,{...e,item:t.passkeysResult.items[0]})}):null}}}]);