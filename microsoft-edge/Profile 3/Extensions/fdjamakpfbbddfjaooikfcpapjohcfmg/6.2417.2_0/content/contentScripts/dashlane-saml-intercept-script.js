(()=>{"use strict";(()=>{const e=e=>{var r;const t=document.querySelector('form[action="http://localhost:4000/saml/callback"], form[action="https://sso.nitrostaging.dashlane.com/saml/callback"], form[action="https://sso.nitro.dashlane.com/saml/callback"]');if(t){const o=null===(r=t.querySelector('[name="SAMLResponse"]'))||void 0===r?void 0:r.value;if(!o)return;t.remove(),null==e||e.disconnect(),function(e,r){if(!function(e){if("undefined"==typeof chrome)return!1;const r="runtime.sendMessage".split(".").reduce(((e,r)=>e?.[r]),chrome);return Boolean(r)}())throw new Error("No runtime.sendMessage support");chrome.runtime.sendMessage(e,(e=>{if(chrome.runtime.lastError){const e=chrome.runtime.lastError.message??"Unknown chrome.runtime.lastError";throw new Error(`runtime/sendMessage: ${e}`)}}))}({type:"SamlAssertionIntercepted",saml:o})}};e(),new MutationObserver(((r,t)=>{e(t)})).observe(window.document,{attributes:!1,childList:!0,characterData:!1,subtree:!0})})()})();