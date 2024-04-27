(()=>{"use strict";let t=function(t){return t[t.TEXT_BASED=0]="TEXT_BASED",t[t.BOX_BASED=1]="BOX_BASED",t[t.BUTTON_BASED=2]="BUTTON_BASED",t[t.HIDDEN=3]="HIDDEN",t[t.OTHER=4]="OTHER",t}({});const e={"":t.TEXT_BASED,button:t.BUTTON_BASED,checkbox:t.BOX_BASED,color:t.OTHER,date:t.TEXT_BASED,"datetime-local":t.TEXT_BASED,email:t.TEXT_BASED,file:t.OTHER,hidden:t.HIDDEN,image:t.BUTTON_BASED,month:t.TEXT_BASED,number:t.TEXT_BASED,password:t.TEXT_BASED,radio:t.BOX_BASED,range:t.OTHER,reset:t.BUTTON_BASED,search:t.TEXT_BASED,submit:t.BUTTON_BASED,tel:t.TEXT_BASED,text:t.TEXT_BASED,time:t.TEXT_BASED,url:t.TEXT_BASED,week:t.OTHER};class T{static getInputTypesByTypology(t){return Object.keys(e).filter((T=>e[T]===t))}static getInputTypesNotInTypology(t){return Object.keys(e).filter((T=>e[T]!==t))}}T.CONTEXT_ATTRIBUTE_NAME="data-dashlane-context",T.RID_ATTRIBUTE_NAME="data-dashlane-rid",T.FORM_TYPE_ATTRIBUTE_NAME="data-form-type",T.LABEL_ATTRIBUTE_NAME="data-dashlane-label",T.FRAMEID_ATTRIBUTE_NAME="data-dashlane-frameid",T.OVERRIDE_ATTRIBUTE_NAME="data-dashlane-override",T.INVISIBLE_ATTRIBUTE_NAME="data-dashlane-invisible",T.SHADOW_HOST_ATTRIBUTE_NAME="data-dashlane-shadowhost",T.TEXT_BASED_INPUT_FIELD_TYPES=T.getInputTypesByTypology(t.TEXT_BASED),T.BOX_BASED_INPUT_FIELD_TYPES=T.getInputTypesByTypology(t.BOX_BASED),T.BUTTON_BASED_INPUT_FIELD_TYPES=T.getInputTypesByTypology(t.BUTTON_BASED);const E=["trix-editor","figure"].join(",");!function(){const t=Element.prototype.attachShadow;let e="";Object.defineProperty(Element.prototype,"attachShadow",{value:function(n){const o=n.mode;e||(e="[native code]");const a=t.call(this,{...n,mode:"open"});return"closed"===o&&Object.defineProperty(this,"shadowRoot",{value:null}),setTimeout((()=>{(function(t){if(!window.Trix)return!1;let e=t.parentElement;for(;e;){if(e.closest(E))return!0;const t=e.getRootNode();e=t instanceof ShadowRoot&&t.host?t.host:null}return!1})(this)||this.setAttribute(T.SHADOW_HOST_ATTRIBUTE_NAME,"true")}),0),a}})}(),(()=>{const t={apply(t,e,T){const[E]=T;return"animationend"===E&&document.getElementById("tiresias")?.setAttribute("animation-event-switch","true"),"transitionend"===E&&document.getElementById("tiresias")?.setAttribute("transition-event-switch","true"),Reflect.apply(t,e,T)}};EventTarget.prototype.addEventListener=new Proxy(EventTarget.prototype.addEventListener,t)})()})();