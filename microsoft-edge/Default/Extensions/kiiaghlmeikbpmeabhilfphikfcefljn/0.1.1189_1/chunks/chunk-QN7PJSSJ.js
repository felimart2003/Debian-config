function r(){let e=document.querySelector("#honeyContainer"),t=document.querySelector("#piggyWrapper");if(e){let o=e.shadowRoot.querySelector("#honey-shadow").style;if(e.shadowRoot.querySelector("#cornerContent")&&(o.opacity==="1"||o.visibility==="visible"))return{updated:!0,offset:"455px"}}return t&&(t.offsetWidth>0||t.offsetHeight>0)?{updated:!0,offset:"340px"}:document.querySelector(".ebates-notification")||document.querySelector(".ebates-hover.ebates-hover-top")?{updated:!0,offset:"420px"}:{updated:!1,offset:"0"}}export{r as a};
