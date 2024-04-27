import{a as ii}from"../chunks/chunk-QN7PJSSJ.js";import{a as E}from"../chunks/chunk-YC7SMHXH.js";import{a as Q}from"../chunks/chunk-SBTRYJIA.js";import{a as Z}from"../chunks/chunk-RQD6OPCK.js";import{c as Y,d as J}from"../chunks/chunk-523WHQDT.js";import{a as K}from"../chunks/chunk-MV4HDL2S.js";import{a as X}from"../chunks/chunk-2MCFUH3Z.js";import{a as $}from"../chunks/chunk-G2MGIWVK.js";import{a as j}from"../chunks/chunk-YU5QULAP.js";import"../chunks/chunk-IYAFYZRF.js";import"../chunks/chunk-F2BE3OL5.js";import{a as R}from"../chunks/chunk-65VGUSSD.js";import"../chunks/chunk-O7OTS7RM.js";import{a as T}from"../chunks/chunk-2SFZECRB.js";import{a as V}from"../chunks/chunk-D2CCZ3BJ.js";import{a as v,b as q,c as m,r as W,v as U}from"../chunks/chunk-R5NGUZ66.js";import"../chunks/chunk-O4TFJKJQ.js";import{c as n,m as p,q as f,u as k}from"../chunks/chunk-JJTF2C25.js";import"../chunks/chunk-6LTHT6DZ.js";import"../chunks/chunk-JV3JVBWM.js";import{a as S,c as li}from"../chunks/chunk-3HBOA5LN.js";import"../chunks/chunk-4NTWQHWX.js";import"../chunks/chunk-YHJJDH4X.js";import{e as a}from"../chunks/chunk-3GYLW4KZ.js";var w_=a(v());var Si=a(v()),ti=a(v()),h=a(V());var _i=e=>f("addVote",e);var ei=e=>f("getFeedbackData",e);var c=a(S());function g(e){return e=e==="video"?"review":e,e==="advice"?e:`${e}s`}async function wi(){let e=n.get(["ProductPage","inputData","product"]),i=n.get(["ProductPage","inputData","asin"]),_=n.get(["ProductPage","inputData","feedback"]),t=n.get(["session","id"]),u=e&&e.wbpid?e.wbpid:`amazon.com_${i}`,o=await ei({wbpid:u,userId:t,product:e,meta:_});n.set(["ProductPage","feedbackData"],o)}function yi(e,i){let _=(i||e).split(".")[0];_==="video"&&(_="review");let t=n.get(["ProductPage","feedbackData"]),u;if(i){let o=c.default.find(t[g(_)],{id:i});u=c.default.find(c.default.get(o,"comments"),{id:e})}else t&&(u=c.default.find(t[g(_)],{id:e}));return{feedback:u,type:_}}function ki({feedback:e,updatedFeedback:i,type:_,data:t}){t.parent_id?(n.select(["ProductPage","feedbackData",g(_),{id:t.parent_id}]).set(["comments",{id:t.id}],i),t.parent_id===n.get(["selectedFeedback","id"])&&n.set(["selectedFeedback","comments",{id:t.id}],i)):(n.merge(["ProductPage","feedbackData",g(_),{id:t.id}],i),e.id===n.get(["selectedFeedback","id"])&&n.set(["selectedFeedback"],i))}function di({feedback:e,type:i}){let _=n.get(["ProductPage","feedbackData",g(i)]);_&&(_.push(e),n.set(["ProductPage","feedbackData",g(i)],_),n.commit())}async function O(e){let i=n.get(["session","id"]),{feedback:_,type:t}=yi(e.id,e.parent_id);function u(o){return o=c.default.clone(o),o.up_votes=o.up_votes||0,o.down_votes=o.down_votes||0,o.up_votes=e.upVote?o.up_votes+1:o.up_votes,o.down_votes=e.upVote?o.down_votes:o.down_votes+1,o.vote_selection==="up_vote"&&(o.up_votes-=1),o.vote_selection==="down_vote"&&(o.down_votes-=1),o.vote_selection=e.upVote?"up_vote":"down_vote",o}if(_){let o=u(_);ki({feedback:_,updatedFeedback:o,type:t,data:e})}else{let o=u(e);di({feedback:o,type:t})}await _i(c.default.assign({userId:i},e)),await wi()}var r=a(S());var oi=e=>f("toggleMatchSurvey",e);var b=a(m()),B=class extends ti.Component{constructor(...i){super(...i),this.state={title:"Was this a good result?",subtitle:"Your feedback helps other Capital One Shoppers.",hideNotification:!0,showReasons:!1,showComment:!1,selectedReasons:[],reasonText:"",dismiss:!1}}componentDidMount(){k("page","matchSurvey",{view:"matchSurvey",type:"notification",offerSignUp:r.default.get(this.props.view,"offerSignUp"),qualified:r.default.get(this.props.view,"qualified",!1),balance:r.default.get(this.props.view,"balance",0)}),setTimeout(()=>{this.setState({hideNotification:!1})},1e3)}componentWillReceiveProps(i){r.default.get(i,"view.hiddenFromWebApp")&&!r.default.get(this.props,"view.hiddenFromWebApp")&&this.setState({hideNotification:!0})}onChange(i,_){if(_.type==="input")return;let t=this.state.selectedReasons,u=t.indexOf(i);u===-1?t.push(i):t.splice(u,1),this.setState({selectedReasons:t})}onTextUpdate(i){let _=i.target.value;this.setState({reasonText:_})}renderReasons(){let i=["Not the same product","Price is incorrect","Out of stock","Item condition","Bad seller","Other"],_;return this.state.showReasons&&(_=r.default.map(i,(t,u)=>{let o=this.state.selectedReasons.indexOf(t)!==-1;return(0,b.jsxs)("div",{className:"reason",children:[(0,b.jsx)("input",{type:"checkbox",checked:o,onChange:this.onChange.bind(this,t),id:r.default.kebabCase(t)}),(0,b.jsx)("label",{htmlFor:r.default.kebabCase(t),children:(0,b.jsx)("h5",{className:"text",children:t})})]},r.default.kebabCase(t))})),(0,b.jsxs)("div",{className:"reasons-wrapper",children:[_,(0,b.jsx)("textarea",{placeholder:"tell us more",value:this.state.reasonText,onChange:this.onTextUpdate.bind(this)}),(0,b.jsx)("button",{className:"primary-btn-small",onClick:this.onSubmit.bind(this),children:"Submit"})]})}render(){let{hideNotification:i}=this.state,_=this.state.title,t=this.state.subtitle,u=!1,o=!1,y;return this.state.showReasons||this.state.showComment?y=this.renderReasons():this.state.dismiss||this.state.buttonsHidden?y=(0,b.jsx)("div",{className:"thanks-wrapper"}):y=(0,b.jsxs)("div",{className:"button-wrapper",children:[(0,b.jsx)("button",{className:"secondary-btn-small",onClick:this.onYes.bind(this),children:"Yes"}),(0,b.jsx)("button",{className:"secondary-btn-small",onClick:this.onNo.bind(this),children:"No"})]}),(0,b.jsx)("div",{className:i?"disabled follow-page":"follow-page",style:{top:u?"0":"auto",bottom:u?"auto":"0",left:o?"auto":"0",right:o?"0":"auto"},children:(0,b.jsx)(h.Motion,{style:{opacity:p("ext_notif_appear_no_transition")?(0,h.spring)(i?0:1,{stiffness:400,damping:25}):(0,h.spring)(i?0:1,{stiffness:180,damping:20}),y:p("ext_notif_appear_no_transition")?i?u?-100:100:0:(0,h.spring)(i?u?-100:100:0,{stiffness:180,damping:20})},children:({opacity:N,y:d})=>(0,b.jsxs)("div",{className:"follow-notification",style:{transform:`translate3d(0,${d}%,0)`,opacity:`${N}`},children:[(0,b.jsxs)("header",{style:{display:"flex",justifyContent:"space-between"},children:[(0,b.jsx)(T,{}),(0,b.jsx)(R,{onClick:this.onClosePopup.bind(this,"x")})]}),(0,b.jsxs)("section",{children:[(0,b.jsx)("h2",{children:_}),t?(0,b.jsx)("h4",{children:t}):null,y]})]})})})}onYes(){let i=r.default.get(this.props,"view.resultData");O({up_votes:0,down_votes:0,id:`product.${r.default.get(i,"details.product.wbpid")}`,wbpid:r.default.get(i,"run.originResult.product.wbpid"),match_wbpid:r.default.get(i,"details.product.wbpid"),upVote:!0}),this.onNotificationInteraction(),this.setState({match:!0,title:"Thanks!",subtitle:"Your vote helps improve results for everyone on Capital One Shopping.",buttonsHidden:!0}),this.timeout=setTimeout(()=>{this.setState({hideNotification:!0})},2500);let _={match:!0,quoteId:r.default.get(i,"run.id"),matchId:r.default.get(i,"details.id"),notification:!0,mpnBrandMatch:r.default.get(i,"details.meta.imsMpnBrandMatch",!1),certifiedRefurbished:r.default.get(i,"details.certifiedRefurbished",!1)};k("track","matchSurvey",_)}onNo(){let i=r.default.get(this.props,"view.resultData");O({up_votes:0,down_votes:0,id:`product.${r.default.get(i,"details.product.wbpid")}`,wbpid:r.default.get(i,"run.originResult.product.wbpid"),match_wbpid:r.default.get(i,"details.product.wbpid"),upVote:!1}),this.onNotificationInteraction(),this.setState({match:!1,showReasons:!0,showComment:!0,title:"Uh oh!",subtitle:"What was wrong with this result?"});let _={match:!1,quoteId:r.default.get(i,"run.id"),matchId:r.default.get(i,"details.id"),notification:!0,mpnBrandMatch:r.default.get(i,"details.meta.imsMpnBrandMatch",!1),certifiedRefurbished:r.default.get(i,"details.certifiedRefurbished",!1)};k("track","matchSurvey",_)}onSubmit(){this.onNotificationInteraction();let i=r.default.get(this.props,"view.resultData"),_={match:this.state.match,quoteId:i.run.id,matchId:i.details.id,notification:!0};this.state.reasonText&&(_.text=this.state.reasonText),this.state.selectedReasons&&this.state.selectedReasons.length&&(_.reason=r.default.get(this.state.selectedReasons,"[0]"),_.reasons=this.state.selectedReasons),k("track","matchSurveyReason",_),this.setState({dismiss:!0,showReasons:!1,showComment:!1,title:"Thanks for helping!",subtitle:"The next Capital One Shopper will benefit from your contribution."}),setTimeout(()=>this.onClosePopup("submit"),3200)}onClosePopup(i){this.onNotificationInteraction(),this.setState({hideNotification:!0}),k("trackClick","dismissMatchSurvey",i)}onNotificationInteraction(){oi(r.default.get(this.props,"view.resultData"))}componentWillUnmount(){clearTimeout(this.timeout)}},D=q({view:["followView"],events:["events"],session:["session"]},B);var Yi=a(v()),z=a(v()),x=a(V());var F=a(S());var l=a(m()),si=e=>{let{autoGC:i,hasCredits:_,hasCoupons:t}=e,o=F.default.get(i,"redemptionEnabled")?F.default.get(i,"redemptionAmount",0):0,y=!0,N=!0,[d,I]=(0,z.useState)(!0),[L,ui]=(0,z.useState)(0);(0,z.useEffect)(()=>{k("page",_?"autoGCReminder":"couponReminder",{view:"savingsReminder",type:"notification",hasCredits:_}),ni(),setTimeout(()=>{I(!1)},1e3)},[]);async function ni(){I(!1);let w=200,s=1;for(;w<7e3;){let H=ii();H.updated&&ui(H.offset),await $(w),s>25&&(w*=1.5),s+=1}}function ai(){let w='Add to cart, continue to checkout, and click "Redeem my Rewards" when prompted.',s=`${w} We'll try available coupons to increase your dicsount.`,H="Add to cart, continue to checkout, and click try codes to see your discount.",P="";return _&&t?P=s:_?P=w:P=H,(0,l.jsx)("h5",{className:"description",children:P})}return(0,l.jsx)("div",{className:d?"disabled savings-reminder-page":"savings-reminder-page",style:{top:y?"0":"auto",bottom:y?"auto":"0",left:N?"auto":"0",right:L||(N?"15px":"auto")},children:(0,l.jsx)(x.Motion,{style:{opacity:p("ext_notif_appear_no_transition")?(0,x.spring)(d?0:1,{stiffness:400,damping:25}):(0,x.spring)(d?0:1,{stiffness:180,damping:20}),y:p("ext_notif_appear_no_transition")?d?y?-100:100:0:(0,x.spring)(d?y?-100:100:0,{stiffness:180,damping:20})},children:({opacity:w,y:s})=>(0,l.jsxs)("div",{className:"savings-reminder-notification",style:{transform:`translate3d(0,${s}%,0)`,opacity:`${w}`},children:[(0,l.jsxs)("header",{children:[(0,l.jsx)(T,{}),(0,l.jsx)(Y,{}),(0,l.jsx)(R,{onClick:G.bind(void 0,"x")})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{className:"align-center",children:_?`${j(o,{removeCents:!0})} Rewards redemption applied at checkout`:"Savings applied at checkout"}),(0,l.jsx)(E,{}),ai(),(0,l.jsx)("div",{className:"button-wrapper",children:(0,l.jsx)("button",{className:"primary-btn-large",onClick:()=>G("Got it"),children:"Got it!"})})]})]})})});function G(w){I(!0),k("trackClick",_?"dismissAutoGCReminderNotification":"dismissCouponReminderNotification",w,{hasCredits:_})}},M=q({},si);var bi=a(li()),C=a(S());var A=a(m());window.__wb_timing.followRequireAt=performance.now();function ci(){return bi.default.all([K(),X(),Q()]).spread((e,i,_)=>{Z(e),n.merge({siteAPIData:i}),n.set("lifetimeSavings",_)})}async function ri(){await ci();let e=n.get(["followView","resultData"]),i=C.default.get(e,"details.pricing.coupons.length"),_=C.default.get(e,"details.pricing.autoGC",{}),t=C.default.get(_,"redemptionEnabled",!1),u=C.default.get(e,"details.pricing.credits.qualifyToRedeemCredits",!1),o=t&&u;o&&J(e),U({initialRoute:"/follow",cssUrl:"follow.css",app:(y=>(0,A.jsx)(W,{children:i||o?(0,A.jsx)(M,{autoGC:_,hasCredits:o,hasCoupons:i}):(0,A.jsx)(D,{})}))()})}document.readyState!=="loading"?ri():document.addEventListener("DOMContentLoaded",ri);
