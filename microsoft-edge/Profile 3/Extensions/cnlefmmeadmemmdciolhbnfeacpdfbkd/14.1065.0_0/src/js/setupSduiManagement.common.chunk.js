(self.webpackChunk=self.webpackChunk||[]).push([[1196],{87982:(e,t,i)=>{i.r(t),i.d(t,{PlagiarismViewModelImpl:()=>he,createPlagiarismEntities:()=>Ie,createPlagiarismViewModels:()=>ue,setupSduiManagement:()=>u});var a=i(80358),s=i(24055),r=i(12054),n=i(55826),l=i(5114),o=i(83078),c=i(40327),d=i(85985),p=i(77176);function u(e,t,i){const u=e.view((e=>(0,c.pipe)(e,l.map((e=>e.sduiBufferService.capiEvents.pipe(d.h(a.h.is("sdui_add","sdui_remove","sdui_update")),d.h(s.e.isSduiEvent),p.U(r.al.fromSource(r.i5.CAPI))))),o.MH))).get(),g=new n.A(i,u,t),{sduiFeedbackService:m,capiClient:h}=e.view((e=>(0,c.pipe)(e,l.map((e=>({sduiFeedbackService:e.sduiFeedbackService,capiClient:e.capiClient}))),o.MH))).get();return{sduiFeedbackService:m,capiClient:h,sduiManager:g}}var g=i(31442),m=i(64998),h=i(84174),v=i(52976),f=i(56913),A=i(95195),b=i(92843),I=i(71249),P=i(95574),S=i(55415),C=i(8125),w=i(23239),y=i(99861),E=i(20594),M=i(76201),k=i(66896),R=i(74660),B=i(4890),F=i(9922),L=i(76974),D=i(23063),U=i(24713),T=i(2834),q=i(32952),G=i(40151),O=i(2844),x=i(93508),H=i(16118),V=i(60797),W=i(16782),j=i(41398),z=i(35416),Q=i(30013),_=i(73841),Z=i(89770),K=i(57050),N=i(13313),$=i(54216),J=i(57757),X=i(69),Y=i(83167),ee=i(48521),te=i(42040),ie=i(35607),ae=i(20291),se=i(52098),re=i(14592),ne=i(13299),le=i(66866),oe=i(21619),ce=i(36689),de=i(56143),pe=i(93398);const ue=({sduiEngine:e,engine:t,capiProxy:i,ded:a,showPlagiarismAlerts:s,environment:r})=>{const n=te.C8.Logging.getLogger("gDocs.PlagiarismEngine"),c=new F.w.Keeper,d=new g._(e.sduiManager.state),u={features:new Set([E.IG.Features.showCardLabelInOutcomes]),cardLayoutDensityMode:B.j.Density.minimal,shouldAnimateAlertApply:E.IG.Default.shouldAnimateAlertApply,cardVisualMode:w.h.create(B.j.CardVisualMode.RegularLightMode)},S=(0,E.Ls)((()=>A.left({kind:"default",error:new Error("should not use hydration to render sdui cards")})),t.alertsReader,u,(()=>L.of(l.none)),l.none),C=y.p.getCapabilities(S,t.alertsReader),j=(0,K.a9)(K.yR),ee=e=>j,ue=$.t.create($.t.defaultLensFilters,{...$.t.defaultTextFilters,[k.R.SpecialId.Closed]:K.jv,[k.R.SpecialId.AllAlerts]:R.bZ.belongsToAllAlerts}),he=w.h.create(N.A.defaultState),ve=new se.t(he.view("lenses"),ue,t.sessionModel.scoreStatus),fe={create:(e,t)=>M.v.WithSuccess.create(e,t,y.p.equatable.structEq,y.p.defaultOrd(C))},Ae=Q.v.createWithExternalItems(fe,C),be=new pe.F.Impl(t.alertsList.state,t.positionManager,t.alertsReader,ue.alertCanBeDisplayed),Ie=new Z.oq(t.alertsList.state,t.alertsReader,he.view("lenses"),be,ve,((e,t,i,a,s)=>((e=>{(0,K.zG)(e,o.bw((e=>{c.push(d.feed.pipe(D.q(1),U.j("cards"),T.b((0,K.ls)(b.v.filter(K.jv,K.jv,(t=>t.alertIds.includes((0,K.MZ)(e.alert.id)))),b.v.foldMap(I.uZ())((0,K.a9)(I.cS),(0,K.a9)(I.cS),I.of),I.YM,o.bw((e=>{requestAnimationFrame((()=>{(0,K.zG)(d.focusCard(e.id),A.fold((e=>n.warn("Error on focusing SDUI item in a new lens",e)),K.Q1))}))}))))).subscribe())})))})(a),Ae(e,t,i,a,(0,K.zG)(s,l.filter((e=>k.R.isWithAlertsId(e.id))))))),ee,C,ue),Pe=w.h.create(Ie.emptyState(k.R.SpecialId.Plagiarism).patch({alertSource:R.l$.sidebar})),Se=M.v.Items.getRemoveDisposedItemsTransformer(C),Ce=m.i.DisablePrevNextButtons.create(C),we=M.v.Items.getItemsPositionsUpdateTransformer(C),ye=Y.Py.getDefaultBehavior(y.p.getActiveFocusableItem,C),Ee=w.h.create(!0),Me=w.h.create(k.R.SpecialId.AllAlerts),ke=(0,Y.u0)((()=>a.getCursor().index),Ie),Re=(0,Y.VC)(Ie,ke,Me,C,(()=>!1),(()=>!1)),Be=Y.sR.getStateTransformer(ye,Re,C,Y.sR.getShouldAutoFocus(Ee,t.alertsReader,y.p.getActiveItemWithAlert),K.Q1,Me),Fe=(0,K.ls)(Se,P.L9(Be),P.L9(Ce),P.L9(we)),Le=new X.Xx({flush:()=>a.flushChanges()},new q.xQ,S,t.alertsService,t.alertsReader,(()=>Promise.resolve()),(()=>Promise.resolve()),(0,K.zG)(t.mutedAlertsCategoriesModel,l.map((e=>({model:e,openSuggestionsManagement:()=>self.open((0,f.Um)().suggestionsSettings)})))),l.none,K.jv,y.p.getActiveFocusableItem,C,r,{bufferTransitions:!0,showGbPrompt:!1}),De=new h.q(e.sduiFeedbackService,C,Pe,e.sduiManager,d,t.alertsReader,{...e.capiClient,...t.writingExpertClient},Le,r),Ue=(0,K.zG)(Y.sR.focusFirstCardAfterBigCheck(Pe,w.h.create(i.checkingState),w.h.create(!0),{bigPaste:G.E}),(e=>Y.sR.getSideEffect(e,C))),Te=(0,re.xl)(Pe,ue,L.of(),w.h.create(!1),w.h.create(!0)),qe=O.aj([Te,s]).pipe(p.U((([e,t])=>t?e:K.jv))),Ge=new re.o$(t.alertsList,t.alertsReader,t.positionManager,t.alertsService,a,Pe,qe,y.p.getActiveFocusableItem,w.h.create(!1),L.of(void 0),!1),Oe=new ie.o((()=>A.right(void 0))),xe=(0,ne.hp)(Pe,Ge,w.h.create(16),Oe,a,n),He=t.alertsReader,Ve=Pe.view(z.nL.getActiveAlertHighlight(y.p.getActiveFocusableItem)),We=new oe.mN(a,Ge,t.alertsReader,Ve,Pe.view((e=>e.currentLens.meta.filter))),je=[Ue,v.P.SideEffects.createSDUIFeedSideEffect({...C,findNextAlert:(0,K.a9)(l.none),selectItemByAlert:()=>K.yR},d.feed.pipe(p.U(l.some),x.O(l.none),H.G(),p.U((([e,t])=>(0,K.zG)(o.gz(e,t),l.filter((([e,t])=>e.feedId===t.feedId)),l.map((([,e])=>({...e,cards:(0,K.zG)(e.cards,b.v.filter(K.jv,K.W8,K.W8))}))),l.alt((()=>t))))),V.oA),y.p.sduiToChecksFeedOrd(C),t.alertsReader),ge(d,C),...De.getApplicatorEffects(),...Le.getApplicatorEffects(),X.dv.changeAlertEffect(Pe,Le,S,y.p.getActiveFocusableItem,t.alertsReader,l.some(xe),ke,n.getLogger("CardsViewModelEffects.changeAlertEffect")),ae.R7(Pe,Oe,C,(0,K.MZ)(Le.actionEvents)),me(De.sduiActionEvents,L.of(!0),C),(0,ce.A7)(We,Pe,!0),le.EQ.focusMarkByActiveAlert(Pe,Ge,He,y.p.getActiveFocusableItem,n.getLogger("MarksEffects.focusMarkByActiveAlert")),le.EQ.highlightMarkByHighlightedCard(Le,Pe,Ge,He,C,n.getLogger("MarksEffects.highlightMarkByHighlightedCard")),(ze=De.sduiActionEvents,Qe=de.u,{id:"sduiCopyToClipboardEffect",when:k.R.isWithAlertsId,what:z.nL.Effect.Applicator.create(ze.pipe(p.U((e=>t=>(e.actions.forEach((e=>{"copyToClipboard"===e.type&&(0,J.vQ)(e.text).then((()=>Qe.enqueue("referenceCopied")))})),t)))))})];var ze,Qe;const _e=new _.l(Pe,Ie,t.alertsReader,t.alertsService,je,y.p.getActiveFocusableItem,Fe),Ze=new W.t;return{...e,checksFeedFlow:()=>y.p.createCardListFlow(Le)(Le,Pe.lens(z.nL.Prism.getLens()),Ze,L.of(!1),C,y.p.listItemOrd),sduiFeedManager:d,handleSduiAction:e=>{De.sduiActionEvents.next(e)},capabilities:C,lensState:Pe,trackPlagiarismAlertsEditing:Ge.getPlagiarismAlertsEditingTracker(),dispose:()=>{_e.dispose(),Le.dispose(),De.dispose(),c.dispose()}}};function ge(e,t){return{id:"SDUIItemRemoveSideEffect",when:k.R.isWithAlertsId,what:z.nL.Effect.Applicator.create(e.feed.pipe(p.U((e=>i=>{const a=(0,K.zG)(e.cards,b.v.reduce([],((e,a)=>(0,K.zG)(i.currentLens.items.get(a.id),l.map(S.ei("value")),l.filter((0,C.Kg)((0,K.ff)(ee.o.isAnimatable),(0,K.ff)(ee.o.isAnimatingRemoval))),l.map(t.remove(K.W8,K.W8)),l.fold((()=>e),(t=>(e.push(t),e))))),K.yR,K.yR));if(a.length>0){const e=i.currentLens.items.add(a);return z.nL.Prism.getLens().compose(M.v.Prism.items).set(e,i)}return i}))))}}function me(e,t,i){return{id:"sduiFocusEffect",when:k.R.isWithAlertsId,what:z.nL.Effect.Applicator.create(e.pipe(j.M(t),p.U((([{actions:e,cardId:t},a])=>s=>a&&Boolean(e.find((e=>"notify"===e.type&&"focus"===e.userAction)))&&z.nL.hasItems(s)?(0,K.zG)(z.In.getActiveItemOfType(y.p.isAlertRefSDUI)(s.currentLens),l.filter((e=>!["focused","removed"].includes(e.visualState.transition.type))),l.map((()=>z.nL.Prism.getLensWithItems().modify(i.selectItemById((0,K.MZ)(t)),s))),l.getOrElse((0,K.a9)(s))):s))))}}class he{constructor(e,t){this._plagiarismViewModelsFactory=e,this._wrapNotifyPayload=t,this.isShouldShowPlagiarismButton=w.h.create(!1),this.plagiarismButtonActions=w.h.create(l.none),this.plagiarismEngine=w.h.create(l.none)}setShowPlagiarismButton(e){this.isShouldShowPlagiarismButton.set(e)}setPlagiarismButtonActions(e){this.plagiarismButtonActions.set(l.some(e))}setPlagiarismEngine(e){this.plagiarismEngine.set(l.some(e))}openPlagiarismPage(){const e=this._plagiarismViewModelsFactory();this.setPlagiarismEngine(e),l.isSome(this.plagiarismButtonActions.get())&&(0,c.pipe)(this.plagiarismButtonActions.get(),o.MH,e.handleSduiAction)}closePlagiarismPage(){(0,c.pipe)(this.plagiarismEngine.get(),o.bw((e=>e.handleSduiAction(this._wrapNotifyPayload([{type:"disablePlagiarismCheck"}],"")))))}}var ve=i(11064),fe=i(33194),Ae=i(4694),be=i(79880);function Ie(e,t,i){const a=(e,t,i,s)=>s.forEach((s=>{switch(s.type){case"notify":return void t.sduiFeedbackService.sendUserAction(s.sourceId||i.sourceId,s.userAction);case"enablePlagiarismCheck":return void e.openPlagiarism();case"closePopover":return void t.sduiManager.popoverManager.removePopover(s.rootPopoverId);case"interactPopover":switch((0,K.zG)(t.sduiManager.popoverManager.getInteractionActions(s.rootPopoverId,s.popoverViewId,s.interaction),(s=>a(e,t,i,s))),s.interaction){case be.fP.Fulfill:case be.fP.Dismiss:t.sduiManager.popoverManager.removePopover(s.rootPopoverId)}return;default:return}})),s=t=>({handleGButtonPopoverAction:i=>{l.isSome(e)&&a(t,e.value,i,i.actions)}});return(0,K.zG)(e,l.fold((()=>l.none),(e=>{const a=t({sduiEngine:e,...i});return l.some({plagiarismVM:new he((0,ve.of)(a),Ae.Zq),plagiarismButtonSub:e.sduiManager.state.pipe(p.U((e=>fe.D1.GButton.getPlagiarismContent(e)))),popover:(r=e.sduiManager,r.popoverManager.activePopoverView.view(l.chain((e=>"component"===e.anchor.kind&&"gButton:plagiarism"===e.anchor.id?l.some(e):l.none)))),popoverActionsHandler:s,trackPlagiarismAlertsEditing:a.trackPlagiarismAlertsEditing});var r})))}},99861:(e,t,i)=>{i.d(t,{p:()=>a});var a,s=i(57050),r=i(35214),n=i(40327),l=i(33194),o=i(74660),c=i(7910),d=i(16892),p=i(48521),u=i(35416),g=i(76201),m=i(5114),h=i(45701),v=i(8125),f=i(22232),A=i(34217),b=i(52976),I=i(98182),P=i(72313),S=i(60984);!function(e){const t=e=>(0,n.pipe)(u.In.getActiveItemOfType(a)(e),m.chain(b.P.Capabilities.toAlertItem));function i(e){return u.nL.Items.mapper((e=>e.kind),{[b.P.Kind]:e})}function a(e){return e.kind===b.P.Kind}function C(){return{viewState:()=>e=>e.kind===b.P.Kind?{view:e,kind:"alertRefSDUI"}:{}}}e.isSelectableItem=a,e.getActiveItemWithAlert=t,e.getActiveFocusableItem=e=>t(e),e.checksFeedItemsMapper=i,e.isAlertRefSDUI=a,e.defaultOrd=t=>(0,r.fold)(h.getMonoid())([(0,n.pipe)(h.ordBoolean,h.contramap((0,v.ff)(b.P.Item.isBulkAcceptSDUI))),(0,n.pipe)(h.ordBoolean,h.contramap(b.P.Item.isBulkDismissSDUI)),e.getByActiveAlertPositionOrd(t)]),e.sduiToChecksFeedOrd=function(t){return i=>h.fromCompare(((a,s)=>I.e.isSDUIItem(a)&&I.e.isSDUIItem(s)?I.e.getOrd(i).compare(a,s):e.getByActiveAlertPositionOrd(t).compare(a,s)))},e.getByActiveAlertPositionOrd=e=>(0,r.fold)(h.getMonoid())([(0,n.pipe)(o.h$.ordHRange,h.contramap((t=>(0,n.pipe)(e.hasActiveAlert(t),m.map((e=>e.alert)),m.getOrElse((()=>({getHighlightRanges:()=>[{start:0,end:0}]})))))))]),e.item=()=>A.UI.Union.make("kind",{alertRefSDUI:P.p.SquashedListCard(),empty:S.Q.Empty}),e.viewState=C,e.createCardListFlow=e=>(0,c.sJ)((t=>{switch(t.key){case"empty":break;case"alertRefSDUI":e.actionEvents.next(t.action);break;default:(0,f.L0)(t)}})),e.listItemOrd=e=>h.contramap((e=>e.cell.item.view))(e).compare;const w={equals:(e,t)=>e.kind===t.kind&&d.s.eqById.equals(e,t)},y=e=>({equals:(t,i)=>{const a={[b.P.Kind]:e};return w.equals(t,i)&&(s=e=>e.kind,r=a,(e,t)=>r[s(e)].equals(e,t))(t,i);var s,r}});function E(){return{changePosition:e=>i(b.P.Capabilities.changePosition(e))}}function M(){return{completeTransition:e=>i(b.P.Capabilities.animatable.completeTransition(e)),transitionTo:e=>i(b.P.Capabilities.animatable.transitionTo(e)),changeVisualState:e=>i(b.P.Capabilities.animatable.changeVisualState(e))}}function k(){return{select:(e,t)=>i(b.P.Capabilities.select.select(e,t)),selectByAlert:(e,t,a)=>i(b.P.Capabilities.select.selectByAlert(e,t,a)),unselect:(e,t)=>i(b.P.Capabilities.select.unselect((0,s.MZ)(e),t))}}function R(){return{removeAlertFromItem:(e,t)=>i((i=>i.id===l.D1.SuccessReport.ID?i:b.P.Capabilities.removeAlert.removeAlertFromItem(e,t)(i)))}}function B(){return{remove:(e,t)=>i(b.P.Capabilities.remove.remove(e,t))}}function F(){return{updateWithAlerts:e=>i(s.yR)}}function L(){return{nextAlert:i((()=>m.none)),prevAlert:i((()=>m.none))}}function D(){return{updateUserInput:e=>i(s.yR)}}e.equatable={structEq:y(b.P.eq),idEq:y(w),visualStateEq:y(b.P.eq)},e.changePosition=E,e.disposable={isScheduledToDispose:i(b.P.Capabilities.disposable.isScheduledToDispose)},e.hidable={isHidden:i(p.o.isHidden)},e.animatableItem=M,e.hasAlertsQueries={isSelectableByAlert:e=>i(b.P.Capabilities.hasAlerts.isSelectableByAlert(e)),hasAlert:e=>i(b.P.Capabilities.hasAlerts.hasAlert(e)),hasActiveAlert:i(b.P.Capabilities.hasAlerts.hasActiveAlert)},e.changePositionStrategyQueries={useReferenceHeightOnRemove:i(s.jv)},e.select=k,e.removeAlert=R,e.remove=B,e.updateWithAlert=F,e.releaseAlert=()=>g.v.Capabilities.getAlertReleaser({...R(),...e.disposable}),e.unselectable=()=>g.v.Capabilities.getUnselectable(u.In.getActiveItem,{...k(),isScheduledToDispose:s.jv}),e.selectableByAlert=()=>g.v.Capabilities.getSelectableByAlert(u.In.getActiveItem,{...e.hasAlertsQueries,...k(),...g.v.Capabilities.getHasChecksFeed(),...e.disposable}),e.selectableById=()=>g.v.Capabilities.getSelectableById(u.In.getActiveItem,{...k(),isScheduledToDispose:s.jv}),e.updateMeta=()=>({updateMeta:g.v.Capabilities.getMetaUpdatable().updateMeta}),e.animatableFeed=e=>g.v.Capabilities.getAnimatable(e,{...R(),...M(),...g.v.Capabilities.getHasChecksFeed()}),e.alignable={isValidToAlign:i((t=>!e.disposable.isScheduledToDispose(t)))},e.alertIterator=L,e.itemReleaser=()=>g.v.Capabilities.getItemReleaser(),e.hasAlerts=g.v.Capabilities.getHasAlerts,e.hasUserInput=D,e.verifiable=()=>g.v.Capabilities.getVerifiable(e.disposable),e.cloneable=()=>({clone:i(d.s.Capabilities.getPojoCloneable().clone)});const U={getFeatures:i((e=>b.P.Item.isBulkDismissSDUI(e)?[b.P.Features.BulkDismiss]:b.P.Item.isBulkAcceptSDUI(e)?[b.P.Features.BulkAccept]:[]))};e.getCapabilities=function(t,i){return{...C(),...e.disposable,...e.hidable,...e.equatable,...D(),...e.cloneable(),...E(),...M(),...k(),...B(),...R(),...F(),...e.hasAlertsQueries,...e.changePositionStrategyQueries,...e.alignable,...e.releaseAlert(t),...e.unselectable(t),...e.selectableByAlert(t),...e.selectableById(t),...e.updateMeta(t),...e.animatableFeed(t),...e.itemReleaser(),...U,shouldAnimatePositionChange:()=>()=>!1,...e.verifiable(),...e.cloneable(),...e.hasAlerts(L(),i,(()=>e.isSelectableItem),{...e.hasAlertsQueries,...e.disposable})}}}(a||(a={}))},57757:(e,t,i)=>{i.d(t,{Sz:()=>r,vQ:()=>s});var a=i(95195);async function s(e,t=self){if(function(e=self){var t,i;return!!(null===(i=null===(t=e.navigator)||void 0===t?void 0:t.clipboard)||void 0===i?void 0:i.writeText)}(t))return t.navigator.clipboard.writeText(e);throw new Error("Clipboard API not supported")}function r(e,t=self){return s(e,t).then((()=>a.right(void 0))).catch((e=>a.left(e instanceof Error?e:new Error(String(e)))))}}}]);