"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[6397],{363338:(e,t,i)=>{i.d(t,{N:()=>o});var n=i(696832),a=i(383849),s=i.n(a);var l=i(803322);const o=({disableHover:e=!1,...t})=>{const[i,a]=n.useState(!1),{children:[o,...r]=[]}=t;return(0,l.BX)("div",{className:"buttonsContainer--TiPIoxROXR",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[o,t.enabled&&(0,l.tZ)("span",{className:s()("buttons--p98QFrEo3f",{"visible--aWYlZRshE_":e||i}),children:r})]})}},611913:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(696832),a=i(554712),s=i(383849),l=i.n(s),o=i(526849),r=i(957459),d=i(158549),c=i.n(d),p=i(573630);const u={container:"container--Qypu77vxOn",containerMultiLine:"containerMultiLine--ncWYFwQEnR",_field:"_field--KII5X4xmLN",input:"input--Iq10hxAz32 _field--KII5X4xmLN",inputRow:"inputRow--gdD_j5S1R8",textarea:"textarea--VpIWTZemV2 _field--KII5X4xmLN",label:"label--Ww_r49kt_J",text:"text--oXyCzpUMwG",value:"value--aD7nWEqBIq",multiline:"multiline--fdPM1KFHPT"};var _=i(803322);const m=e=>{navigator.clipboard.writeText(e.replaceAll(" ",""))};class h extends n.Component{constructor(e){super(e),this.field=void 0,this.handleChange=e=>{this.setState({selectionRangeStart:e.target.selectionStart,selectionRangeEnd:e.target.selectionEnd}),this.props.onChange&&this.props.onChange(e)},this.state={fieldHtmlId:(0,r.Z)(),selectionRangeStart:null,selectionRangeEnd:null}}componentDidUpdate(){null!==this.state.selectionRangeStart&&null!==this.state.selectionRangeEnd&&this.field.setSelectionRange(this.state.selectionRangeStart,this.state.selectionRangeEnd)}shouldComponentUpdate(e,t){return!((0,o.equals)(this.props.value,e.value)&&(0,o.equals)(this.props.error,e.error)&&(0,o.equals)(this.props.mask,e.mask)&&(0,o.equals)(this.props.label,e.label)&&(0,o.equals)(this.state.selectionRangeStart,t.selectionRangeStart)&&(0,o.equals)(this.state.selectionRangeEnd,t.selectionRangeEnd))}getValue(){return this.field.value}focus(){this.field.focus()}getTextarea(){var e;return(0,_.tZ)(a.Z,{inputRef:e=>{this.field=e},id:this.state.fieldHtmlId,disabled:this.props.disabled,value:null!=(e=this.props.value)?e:"",name:this.props.name,"data-name":this.props.dataName,sx:{borderColor:this.props.error&&"ds.border.danger.standard.idle"},className:u.textarea,placeholder:this.props.placeholder,onBlur:this.props.handleFieldBlur,onKeyDown:this.props.onFieldKeyDown,onChange:this.handleChange,readOnly:this.props.readOnly})}getInput(){var e;const t={onBlur:this.props.handleFieldBlur,onChange:this.handleChange,disabled:this.props.disabled,readOnly:this.props.readOnly,value:null!=(e=this.props.value)?e:""},i={ref:e=>{this.field=e},id:this.state.fieldHtmlId,autoComplete:"off",className:l()(u.input,{[u.error]:Boolean(this.props.error)}),sx:{...this.props.error&&{"::placeholder":{color:"ds.text.danger.quiet"},minWidth:"fit-content"},border:"1px solid",borderColor:this.props.error?"ds.border.danger.standard.idle":"transparent"},name:this.props.name,"data-name":this.props.dataName,type:this.props.type||"text",placeholder:this.props.placeholder,onKeyDown:this.props.onFieldKeyDown};return this.props.mask?(0,_.tZ)(c(),{...t,...this.props.maskProps,mask:this.props.mask,onCopy:()=>m(t.value),onCut:()=>m(t.value),children:e=>(0,_.tZ)("input",{...i,...e})}):(0,_.BX)("div",{className:u.inputRow,children:[(0,_.tZ)("input",{...i,...t}),(0,_.tZ)("div",{hidden:!this.props.error||"string"!=typeof this.props.error,sx:{color:"ds.text.danger.quiet"},className:u.errorMessage,children:this.props.error})]})}render(){const e="password"!==this.props.type?this.props.value||this.props.placeholder:"";return(0,_.BX)("div",{className:l()(u.container,this.props.multiLine?u.containerMultiLine:null),children:[this.props.label&&(0,_.tZ)("label",{className:u.label,sx:{color:"ds.text.neutral.catchy"},htmlFor:this.state.fieldHtmlId,children:(0,_.tZ)("span",{className:u.text,title:this.props.label,children:this.props.label})}),(0,_.tZ)(p.Z,{tooltipText:e,className:l()(u.value,{[u.placeholder]:!this.props.value,[u.multiline]:this.props.multiLine}),children:this.props.multiLine?this.getTextarea():this.getInput()})]})}}h.defaultProps={maskProps:{maskChar:""}}},978892:(e,t,i)=>{i.d(t,{p:()=>R});var n=i(696832),a=i(812027),s=i(86970),l=i(700033),o=i(45272),r=i(50663),d=i(803322);const c=(0,n.createContext)({}),p=(0,n.createContext)({}),u=({children:e,vaultItem:t,isAddCollectionDisabled:i,signalEditedValues:s,setHasOpenedDialogs:u,setCollectionsToUpdate:_})=>{const{vaultItemId:m,spaceId:h}=t,[b,g]=(0,n.useState)(""),[w,f]=(0,n.useState)(!1),{allCollections:y}=(0,a.b)(),[C,v]=(0,n.useState)((()=>""===m?[]:y.flatMap((e=>e.vaultItems.some((e=>e.id===m))?{...e,initiallyExisting:!0,hasBeenDeleted:!1}:[])))),x=(0,n.useMemo)((()=>C.filter((e=>!e.hasBeenDeleted))),[C]),k=(0,n.useMemo)((()=>y.filter((e=>!x.some((t=>t.id===e.id))))),[y,x]),Z=e=>{const t=e(C);_?.(t),v(t)},I={setInput:g,setIsInputVisible:f,onSubmit:(e=b,t)=>{if((e=e.trim()).length<=0)return;const i=C.findIndex((t=>t.name===e));if(-1===i)Z((i=>{var n;const a=[...i],s=y.find((t=>t.name===e&&t.spaceId===h));return a.push({id:null!=(n=s?.id)?n:"",name:e,spaceId:h,isShared:s?.isShared,vaultItems:[],initiallyExisting:!1,hasBeenDeleted:!1,itemPermission:t}),(0,r.p)(a)}));else{const e=C[i];e.initiallyExisting&&e.hasBeenDeleted&&Z((e=>{const t=[...e];return t[i].hasBeenDeleted=!1,t}))}s?.(!0),g("")},onDelete:e=>{const t=C.findIndex((t=>t.name===e));if(-1===t)return;const i=C[t];Z((e=>{const n=[...e];return i.initiallyExisting?n[t].hasBeenDeleted=!0:n.splice(t,1),n})),(0,o.Nc)(l.PageView.CollectionDelete),s?.(!0)},clearVaultItemCollections:()=>Z((e=>e.flatMap((e=>e.initiallyExisting?{...e,hasBeenDeleted:!0}:[]))))};return(0,d.tZ)(c.Provider,{value:{input:b,isInputVisible:w,filteredCollections:k,vaultItemCollections:C,vaultItemCollectionsToDisplay:x,setHasOpenedDialogs:u,vaultItem:t,isAddCollectionDisabled:i},children:(0,d.tZ)(p.Provider,{value:I,children:e})})},_=()=>(0,n.useContext)(c),m=()=>(0,n.useContext)(p);var h,b=i(782579),g=i(361607),w=i(982466),f=i(488203),y=i(267678),C=i(333918),v=i(71951);const x=({id:e,hasCollections:t,setHasOpenedDialogs:i,isDisabled:a=!1})=>{var l;const{translate:o}=(0,f.Z)(),r=(0,n.useRef)(null),c=(0,g._)(),{isInputVisible:p,filteredCollections:u,input:x,vaultItem:k}=_(),{vaultItemTitle:Z,spaceId:I,isSharedWithLimitedRights:P}=k,D=Boolean(c.data?.sharingVault_web_Collection_Item_Permissions_dev)||Boolean(c.data?.sharingVault_web_Collection_Item_Permissions_prod),{openDialog:S,closeDialog:E}=(0,y.R)(),{setInput:R,setIsInputVisible:L,onSubmit:U}=m(),T=(e,t)=>{U(t,e),E(),i?.(!1),r.current?.focus()},O=()=>{E(),i?.(!1)};return p?(0,d.tZ)(s.x5,{collections:u,id:e,input:x,inputRef:r,spaceId:I,selectionAsDropdown:!0,onSubmit:e=>{const t=u.find((t=>t.name===e&&t.spaceId===I));t?.isShared&&P?(S(l||(l=(0,d.tZ)(v.Q,{onClose:O}))),i?.(!0)):t?.isShared?(S((0,d.tZ)(C.B,{onSubmit:T,onClose:O,itemTitle:Z,isItemPermissionsEnabled:D,collectionName:t.name})),i?.(!0)):T(w.y3.Admin,e)},setInput:R,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||window.setTimeout((()=>{L(!1)}),100)}}):(0,d.tZ)(b.zx,{onClick:()=>L(!0),layout:"iconLeading",intensity:"supershy",disabled:a,mood:"neutral",icon:h||(h=(0,d.tZ)(b.JO,{name:"ActionAddOutlined"})),children:o(t?"webapp_collections_input_placeholder_add_another":"webapp_collections_input_placeholder_add_new")})},k=e=>(0,d.tZ)("div",{sx:{flex:"1",display:"flex",flexDirection:"column"},...e});var Z,I=i(660756);const P=({hasMultipleCollections:e,...t})=>{const{vaultItem:i}=_(),n=(0,I.b)(i.spaceId),{translate:a}=(0,f.Z)();return(0,d.tZ)("label",{sx:{display:"flex",width:"149px",justifyContent:"flex-end",fontWeight:"600",textAlign:"right"},...t,children:(0,d.BX)("span",{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[n&&(0,d.BX)(d.HY,{children:[`${n}`,Z||(Z=(0,d.tZ)("br",{}))]}),a(e?"webapp_credentials_header_row_category":"webapp_credential_edition_field_category")]})})},D=e=>(0,d.tZ)("div",{sx:{display:"flex",flexDirection:"row"},...e}),S="collectionsFieldId",E=(0,n.forwardRef)((({hasLabel:e=!0},t)=>{const{vaultItemCollections:i,vaultItemCollectionsToDisplay:a,isAddCollectionDisabled:l,setHasOpenedDialogs:o}=_(),{onDelete:r,clearVaultItemCollections:c}=m(),p=a?.length>0;return(0,n.useImperativeHandle)(t,(()=>({getVaultItemCollections:()=>i,clearVaultItemCollections:c}))),(0,d.BX)(D,{sx:{gap:"24px",alignItems:!p&&"center"},children:[e?(0,d.tZ)(P,{hasMultipleCollections:a?.length>1,htmlFor:S,sx:{marginTop:p&&"15px"}}):null,(0,d.BX)(k,{sx:{...p&&{gap:"8px",marginTop:"10px"}},children:[(0,d.tZ)(s.zT,{sx:{marginLeft:"16px"},collectionListItems:a.map((e=>(0,d.tZ)(s.cF,{children:(0,d.tZ)(s.KH,{onDismiss:()=>r(e.name),isShared:e.isShared,children:e.name})},`collections_field_li_${e.name}`)))}),(0,d.tZ)(x,{id:S,hasCollections:p,setHasOpenedDialogs:o,isDisabled:l})]})]})})),R=(0,n.forwardRef)((({vaultItem:e,isAddCollectionDisabled:t,signalEditedValues:i,setHasOpenedDialogs:n,hasLabel:s,setCollectionsToUpdate:l},o)=>{const{isCollectionsLoading:r}=(0,a.b)();return r?null:(0,d.tZ)(u,{vaultItem:e,signalEditedValues:i,setHasOpenedDialogs:n,isAddCollectionDisabled:t,setCollectionsToUpdate:l,children:(0,d.tZ)(E,{ref:o,hasLabel:s})})}))},696397:(e,t,i)=>{i.d(t,{S:()=>_e});var n=i(696832),a=i(700033),s=i(310789),l=i(164718),o=i(86498),r=i(740300),d=i(488203),c=i(45272);let p=function(e){return e[e.SECONDARY_LOGIN=0]="SECONDARY_LOGIN",e[e.OTP_CODE=1]="OTP_CODE",e}({});const u=e=>Boolean(e.otpURL)||Boolean(e.otpSecret),_=e=>{const{username:t,alternativeUsername:i}=e;return Boolean(t)||Boolean(i)};var m=i(167406),h=i(830894),b=i(868819),g=i(921310),w=i(782579),f=i(148038),y=i(810291),C=i(803322);const v={title:"webapp_lock_items_require_master_password_for_credential_title_on",subtitle:"webapp_lock_items_require_master_password_for_credential_subtitle_on",confirm:"webapp_lock_items_require_master_password_confirm_on_for_credential"},x={title:"webapp_lock_items_require_master_password_for_credential_title_off",subtitle:"webapp_lock_items_require_master_password_for_credential_subtitle_off",confirm:"webapp_lock_items_require_master_password_confirm_off_for_credential"},k=({name:e,title:t,description:i,setValue:a,isMpProtected:s=!1,value:l,disabled:o=!1})=>{const{areProtectedItemsUnlocked:r,openProtectedItemsUnlocker:d}=(0,h.tY)(),c=(0,n.useCallback)((e=>{const t=e.target.checked,i=async()=>{await a(t)};return s&&!r?((0,y.jF)(),d({itemType:b.R.SecuritySettings,options:{fieldsKeys:t?v:x,translated:!1},successCallback:i})):i()}),[r,s,d,a]),p=`setting-${e}`;return(0,C.tZ)(w.XZ,{label:t,description:i,checked:l,onChange:c,id:p,disabled:o})};var Z=i(632197),I=i(433988),P=i(154350);const D="webapp_credential_edition_field_options_always_log_me",S="webapp_credential_edition_field_options_always_log_me_details",E="webapp_credential_edition_field_options_added_by_user_only",R="webapp_credential_edition_field_options_added_by_user_only_details",L="webapp_credential_edition_field_options_always_require_master_password",U="webapp_credential_edition_field_options_always_require_master_password_details",T="webapp_credential_edition_field_options_always_require_master_password_disable_feedback_markup",O=({credentialPreferences:e,isNewCredential:t,url:i,isPreferenceDisabled:a=!1,update:l})=>{const o=(0,Z.q)(),r=(0,n.useMemo)((()=>{if(!i)return!1;try{return new URL(i),!0}catch(e){try{return new URL("https://"+i),!0}catch(e){return!1}}}),[i]),{translate:c}=(0,d.Z)(),p=(0,I.F)(),u=(0,P.Z)(),_=!p&&!u.isMPLessUser,m=t=>l({...e,requireMasterPassword:t});return(0,C.BX)("div",{children:[r?null:(0,C.tZ)(w.ke,{mood:"warning",size:"small",title:c("webapp_credential_edition_field_options_no_url_warning"),sx:{marginBottom:"8px"}}),(0,C.tZ)(k,{name:"useAutoLogin",description:c(S),isMpProtected:!1,title:c(D),setValue:t=>l({...e,useAutoLogin:t}),value:e.useAutoLogin,disabled:!r||a}),(0,C.tZ)(k,{name:"onlyAutofillExactDomain",isMpProtected:!1,title:c(E),description:c(R),setValue:t=>l({...e,onlyAutofillExactDomain:t}),value:e.onlyAutofillExactDomain,disabled:!r||a}),_?o.status===f.rq.Success?(0,C.tZ)(k,{name:"requireMasterPassword",isMpProtected:!t,title:c(L),description:(0,C.BX)("div",{children:[o.data?(0,C.tZ)("div",{sx:{marginBottom:"8px",color:s.colors.midGreen00},children:c.markup(T)}):null,(0,C.tZ)("span",{children:c(U)})]}),setValue:m,value:!!o.data||e.requireMasterPassword,disabled:!r||o.data||a}):(0,C.tZ)(k,{name:"requireMasterPassword",isMpProtected:!t,title:c(L),description:c(U),setValue:m,value:e.requireMasterPassword,disabled:!r||a}):null]})};var W=i(978892),B=i(561605),A=i(833840),q=i(139378);const N=(e,t)=>{const i=new l.Y(t);(0,A.k)(e,t),(0,B.Yo)(i.getUrlWithFallbackHttpsProtocol())};var V=i(671738);const M=(0,n.memo)((({credential:e})=>{const{translate:t}=(0,d.Z)(),[i,a]=(0,n.useState)(null),s=(0,n.useCallback)((e=>a(e)),[]),l=(0,n.useCallback)((()=>a(null)),[]);return(0,C.BX)(C.HY,{children:[(0,C.tZ)(w.zx,{layout:"iconOnly",icon:"ActionRefreshOutlined",mood:"brand",intensity:"supershy",onClick:()=>s(e.id),disabled:e.limitedPermissions,tooltip:t("webapp_credential_edition_autochange")}),i&&(0,C.tZ)(V.R,{credentialId:i,dismissCallback:l})]})}));var F=i(684985),G=i(684098);const z=({children:e,url:t,hasUrlError:i,isWebsiteFieldReadonly:n,editViewButtonEnabled:a,handleMainWebsiteChange:s,handleGoToWebsite:l})=>(0,C.BX)("div",{children:[(0,C.tZ)(G.d,{url:t,hasUrlError:i,editViewButtonEnabled:a,handleChange:s,handleGoToWebsite:l,isWebsiteFieldReadonly:n,isUsingNewDesign:!0}),e]}),X=({url:e,hasUrlError:t,handleMainWebsiteChange:i,handleChanges:a,handleGoToWebsite:s})=>{const[l,o]=n.useState(!1),[r,d]=n.useState([]);return n.useEffect((()=>{r.length&&o(!0),a({linkedURLs:r})}),[r]),(0,C.tZ)(z,{url:e,hasUrlError:t,isWebsiteFieldReadonly:!1,editViewButtonEnabled:!1,handleMainWebsiteChange:i,handleGoToWebsite:s,children:(0,C.tZ)(F.a,{linkedWebsitesList:r,areItemsLocked:!1,credentialId:"",isListEditable:!0,isEditing:l,showUrlProtocol:!0,updateLinkedWebsitesList:d})})},H=({totalLinkedWebsitesLength:e})=>{const{translate:t}=(0,d.Z)();return e>0?(0,C.tZ)(w.nv,{textStyle:"ds.body.reduced.regular",color:"ds.text.neutral.quiet",sx:{marginTop:"12px",marginLeft:"12px"},children:t("webapp_credential_edition_linked_websites_title_with_count",{count:e})}):null};var Y=i(539506);const K=({url:e,linkedWebsitesAddedByUser:t,dashlaneDefinedLinkedWebsites:i,hasUrlError:n,editViewButtonEnabled:a,limitedPermissions:s=!1,handleChange:l,handleGoToWebsite:o,onClickAddNewWebsite:r,isWebsiteFieldReadonly:c})=>{const{translate:p}=(0,d.Z)(),u=t.length+(i&&i.length>1?i.length:0);return(0,C.tZ)(z,{url:e,hasUrlError:n,editViewButtonEnabled:a,handleMainWebsiteChange:l,handleGoToWebsite:o,isWebsiteFieldReadonly:c,children:(0,C.BX)("div",{sx:{display:"flex",justifyContent:u>0?"space-between":"flex-end"},children:[(0,C.tZ)(H,{totalLinkedWebsitesLength:u}),r&&!s?(0,C.tZ)(Y.E,{handleOnClickAddLinkedWebsiteButton:r,disabled:c,label:p(u>0?"webapp_credential_edition_linked_websites_manage":"webapp_credential_edition_linked_websites_add_website")}):null]})})};var j=i(468037);const J=({options:e,onOptionsChanged:t})=>{const{translate:i}=(0,d.Z)(),a=(0,n.useCallback)((i=>{const n=i.currentTarget.checked;t({...e,digits:n})}),[t,e]),s=(0,n.useCallback)((i=>{const n=i.currentTarget.checked;t({...e,letters:n})}),[t,e]),l=(0,n.useCallback)((i=>{const n=i.currentTarget.checked;t({...e,symbols:n})}),[t,e]),o=(0,n.useCallback)((i=>{const n=i.currentTarget.checked;t({...e,avoidAmbiguous:!n})}),[t,e]);return(0,C.BX)("div",{sx:{display:"flex",justifyContent:"space-between",marginTop:"8px",marginBottom:"8px"},children:[(0,C.BX)("div",{children:[(0,C.tZ)(w.XZ,{label:i("webapp_credential_edition_field_generator_use_letters"),onChange:s,checked:e.letters,disabled:e.letters&&!e.digits}),(0,C.tZ)(w.XZ,{label:i("webapp_credential_edition_field_generator_use_digits"),onChange:a,checked:e.digits,disabled:e.digits&&!e.letters})]}),(0,C.BX)("div",{children:[(0,C.tZ)(w.XZ,{label:i("webapp_credential_edition_field_generator_use_symbols"),onChange:l,checked:e.symbols}),(0,C.tZ)(w.XZ,{label:i("webapp_credential_edition_field_generator_similar_characters"),onChange:o,checked:!e.avoidAmbiguous})]})]})},Q=({length:e,onLengthChanged:t})=>{const{translate:i}=(0,d.Z)(),[a,l]=(0,n.useState)(e);return(0,C.tZ)("div",{"aria-label":i("webapp_credential_edition_field_generator_min_max_a11y",{min:4,max:40}),sx:{"> div":{"> label":{color:"ds.text.neutral.quiet"},"> p":{color:"ds.text.neutral.quiet"}}},children:(0,C.tZ)(s.iRW,{label:i("webapp_credential_edition_field_generator_password_length",{length:a}),min:4,max:40,step:1,onChange:e=>{l(e)},onChangeComplete:t,value:a})})},$=({options:e,handleSettingsChange:t,handleGenerateNewPassword:i,handleClose:n})=>{const{translate:a}=(0,d.Z)();return(0,C.BX)(s.T5p,{gap:"10px",sx:{padding:"10px"},children:[(0,C.BX)(s.T5p,{gap:"10px",sx:{textAlign:"left",padding:"10px",borderRadius:"4px"},children:[(0,C.tZ)(Q,{length:e.length,onLengthChanged:i=>{t({...e,length:i})}}),(0,C.tZ)(J,{onOptionsChanged:e=>{t(e)},options:e})]}),(0,C.tZ)(w.zx,{fullsize:!0,mood:"brand",intensity:"catchy",onClick:i,children:a("webapp_credential_edition_button_generate_another_password")}),(0,C.tZ)(w.zx,{fullsize:!0,mood:"neutral",intensity:"quiet",onClick:n,children:a("webapp_credential_edition_button_close_password_generator")})]})},ee=({generatorSettings:e,setGeneratorSettings:t,handleChangePassword:i,handleClose:s})=>{const l=e=>{r.C.generatePassword({settings:e}).then((e=>{e.success&&i(e.password)})).finally((()=>{(0,c.Kz)(new a.UserGeneratePasswordEvent({hasDigits:e.digits,hasLetters:e.letters,hasSymbols:e.symbols,hasSimilar:!e.avoidAmbiguous,length:e.length}))}))};return(0,n.useEffect)((()=>{l(e)}),[e]),(0,C.tZ)(j.u,{additionalSx:{backgroundColor:"ds.container.agnostic.neutral.quiet",marginTop:"8px"},children:(0,C.tZ)($,{options:e,handleSettingsChange:e=>{t(e),l(e)},handleGenerateNewPassword:()=>{l(e)},handleClose:s})})};var te=i(133354),ie=i(242714),ne=i(245636);const ae=({secretOrUrl:e,onCopy:t,onDelete:i,isEditable:n})=>{const{translate:a}=(0,d.Z)(),{data:l,status:o}=(0,ne.v6)(e);if(o!==te.rq.Success||null==l)return null;const[r,c,p]=o===te.rq.Success&&l?[l.code,l.validityTime,l.validityEndDate]:[null,ne.xE,1/0];return(0,C.BX)(C.HY,{children:[(0,C.tZ)(w.Oc,{sx:{marginTop:"8px"},action:r?{iconName:"ActionCopyOutlined",label:a("webapp_credential_edition_field_generic_action_copy"),onClick:async()=>{if(r)try{await navigator.clipboard.writeText(r),t(!0,void 0)}catch(e){t(!1,e)}}}:void 0,code:null!=r?r:"",label:a("webapp_credential_edition_field_security_code"),validityEndDate:p,validityPeriod:c,"data-testid":"otp-field"}),n?(0,C.tZ)(s.Ejs,{justifyContent:"flex-end",children:(0,C.tZ)(w.zx,{sx:{mt:"8px"},size:"small",icon:"ActionCloseOutlined",layout:"iconTrailing",intensity:"supershy",mood:"brand",onClick:i,children:a("webapp_credential_otp_code_remove_button")})}):null]})},se="webapp_credential_otp_code_remove_dialog_cancel_button",le=({onCancel:e,onSubmit:t,isOpen:i})=>{const{translate:n}=(0,d.Z)();return(0,C.tZ)(w.Vq,{isOpen:i,actions:{primary:{children:n("webapp_credential_otp_code_remove_dialog_confirm_button"),onClick:t},secondary:{children:n(se)}},isDestructive:!0,closeActionLabel:n(se),onClose:e,title:n("webapp_credential_otp_code_remove_dialog_title"),children:(0,C.tZ)(w.nv,{children:n("webapp_credential_otp_code_remove_dialog_description")})})},oe=({secretOrUrl:e,isEditable:t,onCopy:i,onSubmit:a,onDelete:l,onUndoDelete:o,setHasOpenedDialogs:r})=>{const{translate:c}=(0,d.Z)(),{showToast:p,closeToast:u}=(0,w.pm)(),[_,m]=(0,n.useState)(!1),h=()=>{r?.(!1),m(!1)},b=(0,ie.o)("sharingVault_web_otp_setup_dev");return e?(0,C.BX)(C.HY,{children:[(0,C.tZ)(ae,{secretOrUrl:e,isEditable:t&&!!b,onCopy:i,onDelete:()=>{r?.(!0),m(!0)}}),(0,C.tZ)(le,{onCancel:h,onSubmit:()=>{l();const t=p({description:c("webapp_credential_otp_code_removed_success_toast"),action:{label:c("webapp_credential_otp_code_removed_success_toast_undo_button"),onClick:()=>{o?.(e),u(t)}}});h()},isOpen:_})]}):t&&b&&a?(0,C.tZ)(s.Ejs,{justifyContent:"flex-end",children:(0,C.tZ)(w.zx,{sx:{mt:"8px"},size:"small",icon:"ArrowRightOutlined",layout:"iconTrailing",intensity:"supershy",mood:"brand",onClick:a,children:c("webapp_credential_edition_field_otp_setup_title")})}):null};var re=i(157668),de=i(799852),ce=i(73875);const pe={length:16,digits:!0,letters:!0,symbols:!0,avoidAmbiguous:!0},ue="webapp_credential_edition_field_generator_generate_tooltip",_e=(0,n.forwardRef)((({activeSpaces:e,areProtectedItemsUnlocked:t,dashlaneDefinedLinkedWebsites:i,editableValues:f,isNewItem:y,onClickAddNewWebsite:v,onClickSetup2FAToken:x,openProtectedItemsUnlocker:k,readonlyValues:Z,setEditableValues:I,setHasOpenedDialogs:P,signalEditedValues:D},S)=>{var E,R,L,U,T;const[B,A]=(0,n.useState)({showingPassword:!1,showGeneratePassword:!1,credentialsGloballyRequireMP:!1,defaultSpaceId:null!=(E=f.spaceId)?E:"",generatorSettings:pe}),[V,F]=(0,n.useState)([]),[G,z]=(0,n.useState)(!1),{translate:H}=(0,d.Z)(),Y=(0,n.useRef)(null),J=(0,o.V)();(0,n.useImperativeHandle)(S,(()=>({isFormValid:()=>!0,getVaultItemCollections:()=>Y.current?.getVaultItemCollections()})));const{data:Q,status:$}=(ie=f.password,(0,de.k)(re.d,"scoreForPassword",{password:ie}));var ie;(0,n.useEffect)((()=>{Promise.all([r.C.arePasswordsProtected(),r.C.getPasswordGenerationSettings()]).then((([e,t])=>{A((i=>({...i,credentialsGloballyRequireMP:e,generatorSettings:t})))}))}),[]),(0,n.useEffect)((()=>{y&&!G&&I((e=>{return{...e,itemName:(t=f.URL,(0,q.capitalize)(new l.Y(t).getRootDomainName()))};var t}))}),[y,f.URL]);const ne=()=>{A((e=>({...e,showGeneratePassword:!e.showGeneratePassword})))},ae=()=>!!f.password&&(void 0!==t?!t&&(f.requireMasterPassword||B.credentialsGloballyRequireMP):void 0),se=(e,t="")=>{if(e instanceof Event&&t)throw new Error("handleChange was called with both a ChangeEvent and key.");if(!Z.limitedPermissions||"spaceId"===t){const i=e?.target?{[e.target.dataset.name]:e.target.value}:{[t]:e},n=Object.keys(i)[0];I({...f,[n]:i[n]})}};let le=f.spaceId;Z.forceCategorizedSpace?.teamName&&(le=Z.forceCategorizedSpace?.teamId);const _e=e?.find((e=>e.teamId===le)),me=null!=(R=_e?.teamName)?R:"webapp_credential_edition_field_space_personal",he=e=>{f.spaceId!==e&&e!==B.defaultSpaceId&&(A((t=>({...t,defaultSpaceId:e}))),Y.current?.clearVaultItemCollections(),se(e,"spaceId"))},be=t=>{if(e&&e.length>0&&e[0].info?.teamAdmins?.length>0)for(const n of e[0].info.teamAdmins)if(t.target.value.includes(n)){var i;A({...B,defaultSpaceId:null!=(i=e[0].teamId)?i:""});break}},ge=e=>{I({...f,...e})},we=(e=>{const t={[p.OTP_CODE]:u(e),[p.SECONDARY_LOGIN]:_(e)};return(e,i)=>t[e]||!!i})(f);(0,n.useEffect)((()=>{var e;he(null!=(e=B.defaultSpaceId)?e:"")}),[B]);const fe=async(e,t)=>{const i=new l.Y(f.URL).getRootDomain();(0,c.Kz)(new a.UserCopyVaultItemFieldEvent({itemType:a.ItemType.Credential,field:e,itemId:Z.id,isProtected:!(e!==a.Field.Password||!f.requireMasterPassword&&!B.credentialsGloballyRequireMP)})),(0,c.Kz)(new a.AnonymousCopyVaultItemFieldEvent({itemType:a.ItemType.Credential,field:e,domain:{id:await(0,a.hashDomain)(i),type:a.DomainType.Web}})),t||J.showAlert(H("_common_generic_error"),s.BLW.ERROR)},ye=fe.bind(void 0,a.Field.Email),Ce=fe.bind(void 0,a.Field.Login),ve=fe.bind(void 0,a.Field.OtpCode),xe=fe.bind(void 0,a.Field.Password),ke=fe.bind(void 0,a.Field.SecondaryLogin);(0,n.useEffect)((()=>{let e=[];y||Z.limitedPermissions||!f.password?f.password&&Z.isDiscontinuedUser||B.showGeneratePassword||(e=[(0,C.tZ)(w.zx,{"aria-label":H(ue),layout:"iconOnly",mood:"brand",intensity:"supershy",onClick:ne,disabled:Z.limitedPermissions,icon:"FeaturePasswordGeneratorOutlined",tooltip:H(ue)},"generate-password")]):e=[(0,C.tZ)(g.m,{buttonId:"copyPasswordButton",itemId:Z.id,disabled:void 0===ae(),data:f.password,checkProtected:ae,onCopy:xe},"copy-password"),(0,C.tZ)(M,{credential:{id:Z.id,limitedPermissions:Z.limitedPermissions}},"password-change")],F(e)}),[y,Z.limitedPermissions,f.password,t,B.credentialsGloballyRequireMP,B.showGeneratePassword]);const Ze=Boolean(Y.current?.getVaultItemCollections()?.some((e=>e.isShared))),Ie=Boolean(Z.forceCategorizedSpace)||Ze||Z.isDiscontinuedUser,Pe=(0,ce.l)();return(0,C.BX)(C.HY,{children:[(0,C.BX)(j.u,{title:H("webapp_credential_box_title_login_details"),additionalSx:{marginBottom:"16px"},additionalInfo:Pe&&Z.limitedPermissions?{content:H("webapp_credential_edition_frozen_limited_rights_icon"),icon:"SharedOutlined"}:null,children:[y?(0,C.tZ)(X,{url:f.URL,hasUrlError:!1,handleMainWebsiteChange:se,handleChanges:ge,handleGoToWebsite:()=>N(Z.id,f.URL)}):null,y?null:(0,C.tZ)(w.s8,{"data-name":"email",label:H("webapp_credential_edition_field_email"),placeholder:H("webapp_credential_edition_field_placeholder_no_email"),readOnly:!!f.email&&Z.limitedPermissions||Z.isDiscontinuedUser,disabled:!f.email&&Z.limitedPermissions,value:f.email,onChange:e=>{se(e),be(e)},actions:[(0,C.tZ)(g.m,{data:f.email,onCopy:ye},"copy-email")],sx:{marginBottom:"8px"}}),(0,C.tZ)(w.qo,{"data-name":"username",label:H("webapp_credential_edition_field_login"),placeholder:H("webapp_credential_edition_field_placeholder_no_login"),readOnly:!!f.username&&Z.limitedPermissions||Z.isDiscontinuedUser,disabled:!f.username&&Z.limitedPermissions,value:f.username,onChange:e=>{se(e),be(e)},actions:!y&&Boolean(f.username)?[(0,C.tZ)(g.m,{data:f.username,onCopy:Ce},"copy-login")]:void 0,sx:{marginBottom:"8px"}}),we(p.SECONDARY_LOGIN,f.alternativeUsername)?(0,C.tZ)(w.qo,{"data-name":"alternativeUsername",label:H("webapp_credential_edition_field_secondary_login"),placeholder:H("webapp_credential_edition_field_placeholder_no_secondary_login"),value:f.alternativeUsername,readOnly:!!f.alternativeUsername&&(Z.limitedPermissions||Z.isDiscontinuedUser),disabled:!f.alternativeUsername&&(Z.limitedPermissions||Z.isDiscontinuedUser),onChange:se,actions:f.alternativeUsername?[(0,C.tZ)(g.m,{data:f.alternativeUsername,onCopy:ke},"copy-secondary-login")]:void 0,sx:{marginBottom:"8px"}}):null,(0,C.tZ)(w.ZI,{id:"password","data-name":"password",label:H("webapp_credential_edition_field_password"),placeholder:H("webapp_credential_edition_field_placeholder_no_password"),toggleVisibilityLabel:{hide:H("webapp_credential_edition_field_password_action_hide"),show:H("webapp_credential_edition_field_password_action_show")},value:f.password,disabled:!y&&Z.limitedPermissions,readOnly:!y&&ae()||Z.isDiscontinuedUser,onFocus:e=>{if(!y&&ae()&&!B.showingPassword){const{currentTarget:t}=e,i=()=>{t?.focus()};k({action:h.P7.Show,itemType:b.R.Password,showNeverAskOption:!0,credentialId:Z.id,successCallback:i})}},onChange:se,onPasswordVisibilityChangeRequest:e=>(e&&(async(e,t,i,n)=>{const s=new l.Y(e).getRootDomain(),o=!!i||!!n;t&&((0,c.Kz)(new a.UserRevealVaultItemFieldEvent({field:a.Field.Password,isProtected:o,itemId:t,itemType:a.ItemType.Credential})),(0,c.Kz)(new a.AnonymousRevealVaultItemFieldEvent({field:a.Field.Password,itemType:a.ItemType.Credential,domain:{id:await(0,a.hashDomain)(s),type:a.DomainType.Web}})))})(f.URL,Z.id,f.requireMasterPassword,B.credentialsGloballyRequireMP),y||!ae()||B.showingPassword?(A({...B,showingPassword:e}),Promise.resolve()):new Promise(((e,t)=>{k({action:h.P7.Show,itemType:b.R.Password,showNeverAskOption:!0,credentialId:Z.id,successCallback:()=>(A({...B,showingPassword:!0}),e()),cancelCallback:()=>t()})}))),actions:V,passwordStrength:f.password&&void 0!==Q&&$===te.rq.Success?{score:Q,description:{NoScore:H("webapp_credential_edition_field_generator_strength/none"),TooGuessable:H("webapp_credential_edition_field_generator_strength/weak"),VeryGuessable:H("webapp_credential_edition_field_generator_strength/very_guessable"),SomewhatGuessable:H("webapp_credential_edition_field_generator_strength/somewhat_guessable"),SafelyUnGuessable:H("webapp_credential_edition_field_generator_strength/safely_unguessable"),VeryUnGuessable:H("webapp_credential_edition_field_generator_strength/very_unguessable")},descriptionId:Q.toString()}:void 0}),B.showGeneratePassword?(0,C.tZ)(ee,{generatorSettings:B.generatorSettings,setGeneratorSettings:e=>{A((t=>({...t,generatorSettings:e})))},handleChangePassword:e=>{se(e,"password")},handleClose:ne}):null,(0,C.tZ)(oe,{secretOrUrl:f.otpURL||f.otpSecret||"",isEditable:!Z.limitedPermissions,onCopy:ve,onSubmit:x,onDelete:()=>ge({otpSecret:"",otpURL:""}),onUndoDelete:e=>ge({otpSecret:"",otpURL:e}),setHasOpenedDialogs:P}),y?null:(0,C.tZ)(K,{url:f.URL,linkedWebsitesAddedByUser:Z.linkedURLs.length>0?Z.linkedURLs:f.linkedURLs,dashlaneDefinedLinkedWebsites:i,hasUrlError:!1,editViewButtonEnabled:!y&&Boolean(f.URL),limitedPermissions:Z.limitedPermissions,handleChange:se,handleGoToWebsite:()=>N(Z.id,f.URL),onClickAddNewWebsite:v,isWebsiteFieldReadonly:Z.isDiscontinuedUser||Z.limitedPermissions}),(0,C.tZ)(w.Kx,{"data-name":"note","test-id":"credential_edit_note_value",label:H("webapp_credential_edition_field_note"),placeholder:H("webapp_credential_edition_field_placeholder_no_note"),value:f.note,disabled:Z.limitedPermissions||Z.isDiscontinuedUser,onChange:se,sx:{marginTop:"8px"}})]}),(0,C.BX)(j.u,{title:H("webapp_credential_box_title_organisation"),additionalSx:{marginBottom:"16px"},children:[(0,C.tZ)(w.qo,{"data-name":"itemName",label:H("webapp_credential_edition_field_name"),placeholder:H("webapp_credential_edition_field_placeholder_no_title"),value:f.itemName,readOnly:!!f.itemName&&(Z.limitedPermissions||Z.isDiscontinuedUser),disabled:!f.itemName&&(Z.limitedPermissions||Z.isDiscontinuedUser),onChange:e=>{G||z(!0),se(e)},sx:{marginBottom:"8px"}}),(0,C.tZ)(w.u,{content:H("webapp_credential_edition_field_force_categorized",{space:me}),passThrough:!Ie,children:(0,C.tZ)("div",{children:(0,C.tZ)(m.M,{spaceId:null!=(L=f.spaceId)?L:"",disabled:Ie,onChange:he,defaultSpaceId:null!=(U=B.defaultSpaceId)?U:"",isUsingNewDesign:!0})})}),(0,C.tZ)(W.p,{hasLabel:!1,vaultItem:{spaceId:null!=(T=f.spaceId)?T:"",vaultItemId:Z.id,vaultItemTitle:f.itemName,isSharedWithLimitedRights:Z.limitedPermissions},ref:Y,signalEditedValues:D,setHasOpenedDialogs:P,isAddCollectionDisabled:Z.isDiscontinuedUser})]}),(0,C.tZ)(j.u,{title:H("webapp_credential_box_title_preferences"),children:(0,C.tZ)(O,{isNewCredential:!!y,credentialPreferences:{useAutoLogin:f.useAutoLogin,requireMasterPassword:!!f.requireMasterPassword,onlyAutofillExactDomain:!!f.onlyAutofillExactDomain},update:e=>(ge({useAutoLogin:e.useAutoLogin,requireMasterPassword:e.requireMasterPassword,onlyAutofillExactDomain:e.onlyAutofillExactDomain}),Promise.resolve()),isPreferenceDisabled:Z.isDiscontinuedUser,url:f.URL})})]})}));_e.displayName="CredentialForm"},684098:(e,t,i)=>{i.d(t,{d:()=>_});var n,a=i(782579),s=i(488203),l=i(363338),o=i(611913),r=i(310789),d=i(803322);const c="webapp_credential_edition_field_website",p="webapp_credential_edition_field_placeholder_no_url",u="webapp_credential_edition_field_website_action_goto",_=({url:e,hasUrlError:t,disabled:i,editViewButtonEnabled:_,isWebsiteFieldReadonly:m,handleChange:h,handleGoToWebsite:b,isUsingNewDesign:g=!1})=>{const{translate:w}=(0,s.Z)();return g?(0,d.tZ)(a.qZ,{"data-name":"URL",label:w(c),placeholder:w(p),disabled:i||!e&&m,value:e,error:t,readOnly:!!e&&m,onChange:h,sx:{marginTop:"8px"},showOpenWebsite:_?{label:w(u),onClick:b}:void 0}):(0,d.BX)(l.N,{enabled:_,disableHover:!0,children:[(0,d.tZ)(o.Z,{label:w(c),placeholder:w(p),dataName:"URL",disabled:i,value:e,error:t,readOnly:m,onChange:h}),(0,d.tZ)(r.ua7,{placement:"top",content:w(u),children:(0,d.tZ)(a.zx,{mood:"neutral",intensity:"supershy",type:"button",onClick:b,sx:{border:"none",minWidth:"fit-content",padding:"10px"},role:"link","aria-label":w(u),children:n||(n=(0,d.tZ)(r.RTC,{}))})})]})}},245636:(e,t,i)=>{i.d(t,{v6:()=>l,xE:()=>s});var n=i(690056),a=i(799852);const s=3e4;function l(e){return(0,a.k)(n.i,"otpCodeForSecretOrUrl",{secretOrUrl:e})}},539506:(e,t,i)=>{i.d(t,{E:()=>s});var n=i(782579),a=i(803322);const s=({disabled:e=!1,handleOnClickAddLinkedWebsiteButton:t,label:i})=>(0,a.tZ)(n.zx,{sx:{mt:"8px"},size:"small",layout:"iconTrailing",icon:"ArrowRightOutlined",onClick:t,disabled:e,mood:"brand",intensity:"supershy",children:i})},117534:(e,t,i)=>{i.d(t,{Bq:()=>p,SJ:()=>r,cS:()=>u,wb:()=>d});var n=i(700033),a=i(164718),s=i(740300),l=i(45272),o=i(561605);const r=(e,t)=>[...e,...t].filter(Boolean).some((i=>!(e.includes(i)&&t.includes(i)))),d=async(e,t)=>{const i=t.filter((t=>t&&!e.linkedURLs.includes(t))).map((e=>new a.Y(e).getRootDomain())),n=i.map((async t=>await s.C.getCredentialsByDomain(((e,t)=>({domain:e,sortToken:{sortCriteria:[{field:"lastUse",direction:"descend"}],uniqField:"id"},filterToken:{filterCriteria:[{field:"email",value:t,type:"equals"}]}}))(t,e.email))));return(await Promise.all(n)).map(((e,t)=>({...e,linkedWebsite:i[t]}))).filter((e=>e.matchingCount>0)).map((e=>({credentialName:e.items[0].title,linkedWebsite:e.linkedWebsite})))},c=async e=>await Promise.all(e.map((e=>(0,n.hashDomain)(new a.Y(e).getRootDomain())))),p=async(e,t)=>{const i=t.filter((t=>t&&!e.linkedURLs.includes(t))),s=e.linkedURLs.filter((e=>e&&!t.includes(e))),o=new a.Y(e.URL).getRootDomain();(0,l.Kz)(new n.AnonymousUpdateCredentialEvent({action:n.Action.Edit,associatedWebsitesAddedList:await c(i),associatedWebsitesRemovedList:await c(s),fieldList:[n.Field.AssociatedWebsitesList],domain:{type:n.DomainType.Web,id:await(0,n.hashDomain)(o)},space:e.spaceId?n.Space.Professional:n.Space.Personal})),(0,l.Kz)(new n.UserUpdateVaultItemEvent({action:n.Action.Edit,itemId:e.id,itemType:n.ItemType.Credential,fieldsEdited:[n.Field.AssociatedWebsitesList],space:e.spaceId?n.Space.Professional:n.Space.Personal}))},u=async(e,t)=>{const i=new a.Y(e);(0,l.Kz)(new n.UserOpenExternalVaultItemLinkEvent({domainType:n.DomainType.Web,itemId:t,itemType:n.ItemTypeWithLink.Credential})),(0,l.Kz)(new n.AnonymousOpenExternalVaultItemLinkEvent({itemType:n.ItemTypeWithLink.Credential,domain:{id:await(0,n.hashDomain)(i.getRootDomain()),type:n.DomainType.Web}})),(0,o.Yo)(i.getUrlWithFallbackHttpsProtocol())}},684985:(e,t,i)=>{i.d(t,{a:()=>h});var n,a=i(696832),s=i(139378),l=i.n(s),o=i(782579),r=i(488203),d=i(539506),c=i(117534),p=i(803322);const u="webapp_credential_linked_websites_action_delete",_="webapp_credential_linked_websites_action_goto",m=e=>{const t=e.match(/^(?:\w+:\/\/)?(.*)$/);return t&&t.length>=2?t[1]:e},h=a.memo((({linkedWebsitesList:e,credentialId:t,isListEditable:i=!1,isEditing:s=!1,showUrlProtocol:h=!1,updateLinkedWebsitesList:b})=>{const{translate:g}=(0,r.Z)(),w=a.useRef(null),[f,y]=a.useState(!1),[C,v]=a.useState(e.length),[x,k]=a.useState(e.map(((e,t)=>({linkedWebsite:e,id:t})))),Z=e=>{y(!0);const t=C+1;k([...x,{linkedWebsite:"",id:t}]),v(t),e?.preventDefault(),e?.stopPropagation()},I=e=>{const{name:t,value:i}=e.target,n=Number(t),a=x.findIndex((e=>e.id===n));if(-1!==a){const e=l().cloneDeep(x);e[a].linkedWebsite=i,k(e)}},P=e=>{"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),Z())};return a.useEffect((()=>{s&&Z()}),[]),a.useEffect((()=>{C!==e.length&&w.current?.focus()}),[C]),a.useEffect((()=>{b?.(x.map((({linkedWebsite:e})=>e))),(e=>{e.every((e=>e.linkedWebsite))?y(!1):y(!0)})(x)}),[b,JSON.stringify(x)]),(0,p.tZ)("div",{children:i?(0,p.BX)("div",{children:[x.map((({linkedWebsite:e,id:i},a)=>(0,p.tZ)(o.qZ,{className:"row",name:i.toString(),label:"example.com",labelPersists:!1,placeholder:g("webapp_credential_linked_websites_new_website_placeholder"),ref:w,onChange:I,onKeyDown:P,value:e,showOpenWebsite:{label:g(_),onClick:()=>(0,c.cS)(e,t)},actions:[(0,p.tZ)(o.zx,{"data-testid":"delete-button",layout:"iconOnly",mood:"brand",intensity:"supershy",onClick:()=>(e=>{k(x.filter((t=>t.id!==e)))})(i),"aria-label":g(u),icon:n||(n=(0,p.tZ)(o.JO,{name:"ActionDeleteOutlined"})),tooltip:g(u)},"delete")],sx:{marginTop:0===a?"0px":"8px"}},i))),(0,p.tZ)("div",{sx:{display:"flex",justifyContent:"flex-end"},children:(0,p.tZ)(d.E,{disabled:f,handleOnClickAddLinkedWebsiteButton:Z,label:g("webapp_credential_edition_linked_websites_add_website")})})]}):(0,p.tZ)("div",{children:x.map((({linkedWebsite:e,id:i},n)=>(0,p.tZ)(o.qZ,{className:"readonly-row",label:"example.com",labelPersists:!1,readOnly:!0,value:h?e:m(e),showOpenWebsite:{label:g(_),onClick:()=>(0,c.cS)(e,t)},sx:{marginTop:0===n?"0px":"8px"}},i)))})})}))}}]);