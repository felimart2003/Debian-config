(self.webpackChunk=self.webpackChunk||[]).push([[8863],{61885:(e,n,t)=>{t.r(n),t.d(n,{ClickableCard:()=>k});var r=t(27378),c=t(5114),a=t(8125),o=t(8543),d=t(18702),i=t(72795),u=t(66268),s=t(57050),l=t(89894);function p(e){return{background:"#FFFFFF",maxWidth:l.ux.px(690),borderRadius:l.ux.px(8),...e,position:"absolute",boxShadow:`${l.ux.px(0)} ${l.ux.px(12)} ${l.ux.px(48)} rgba(109, 117, 141, 0.2)`}}const x=e=>l.ux.stylesheet({card:[p(e)]}),k=({card:e,onSduiAction:n,vbarCardPosition:t,hideCard:l})=>{const p=r.useRef(null);return((e,n)=>{r.useEffect((()=>{const t=t=>{n.current&&!n.current.contains(t.target)&&e()};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}}),[e,n])})(l,p),r.createElement(o.F.div,null,e.view((e=>(0,s.zG)(e,c.fold((()=>r.createElement(r.Fragment,null)),(e=>r.createElement("div",{id:"clickable-card",ref:p,className:x(t).card},r.createElement(d.P,{key:"clickableCardView",sduiRootId:e.id,content:e.content,designSystem:i.k,notify:(t,r,c)=>n({type:u.lY.Type.sduiCardAction,sourceId:t,cardId:e.id,actions:r,scope:c}),transitions:[],prevContent:c.none,onAnimationEnd:a.Q1,onMount:a.Q1}))))))))}}}]);