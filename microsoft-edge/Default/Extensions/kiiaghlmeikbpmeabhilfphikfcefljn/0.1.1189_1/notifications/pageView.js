window.__wb_timing={docStartAt:performance.now(),pageViewRequireAt:performance.now()};(async function(){let{FontLoader:e}=await import(chrome.runtime.getURL("/notifications/FontLoader.js"));e.Init(document,chrome.runtime.getURL)})();var c,l=new Promise((e,t)=>{c=e});chrome.runtime.getManifest().manifest_version>2&&chrome.storage.local.set({window_devicePixelRatio:window.devicePixelRatio,window_screen:{availWidth:window.screen.availWidth,availHeight:window.screen.availHeight,width:window.screen.width,height:window.screen.height}});chrome.runtime.sendMessage({type:"pageView",url:window.location.href,referrer:document.referrer,title:document.title},e=>{let{pageViewId:t,protect:r}=e;window.__wb_page_view_id=t,c({pageViewId:t,protect:r})});chrome.runtime.onMessage.addListener((e,t,r)=>{if(e.type==="loadDeferredPrograms")window.__wb_deferredPrograms=e.deferredPrograms;else if(e.type==="getShopifyDomainRequest")return(async()=>document.addEventListener("DOMContentLoaded",async()=>{let o=await import("../chunks/shopify-A7NXI6H6.js").then(n=>n.default(e.data.domain));r(o)}))(),!0});document.addEventListener("DOMContentLoaded",()=>{window.__wb_timing.DOMContentLoadedAt=performance.now()});function d(e,t){return new Promise((r,o)=>{let n=document.querySelector(e);if(n){r(n);return}let i;new MutationObserver((m,a)=>{!i&&t&&(i=setTimeout(()=>{r(!1),a.disconnect()},t)),n=document.querySelector(e),n&&(r(n),clearTimeout(i),a.disconnect())}).observe(document.documentElement,{childList:!0,subtree:!0})})}function s(e){let t=document.createElement("script");t.innerHTML=`
  try {
    function protectFrame(el) {
      try {
        if (el && el.contentWindow && el.contentWindow.document) {
          protect(el.contentWindow);
        }
      } catch (err) {}
    }
    function protect(win) {
      if (win._sp_protected) {
        return;
      }
      win._sp_protected = true;
      const doc = win.document;
      const Document = win.Document;
      const Element = win.Element;
      const Node = win.Node;
      const CSSStyleDeclaration = win.CSSStyleDeclaration;
      const DocumentFragment = win.DocumentFragment;
      const originalGetAttribute = Element.prototype.getAttribute;

      const methods = [
        [Node, 'appendChild'],
        [Node, 'insertBefore'],
        [Node, 'removeChild'],
        [Node, 'replaceChild'],
        [Node, 'cloneNode'],
        [Element, 'remove'],
        [Element, 'setAttribute'],
        [Element, 'removeAttribute'],
        [Element, 'setAttributeNS'],
        [Element, 'removeAttributeNS'],
        [Element, 'setAttributeNode'],
        [Element, 'removeAttributeNode'],
        [Element, 'setAttributeNodeNS'],
        [Element, 'replaceWith'],
        [Element, 'toggleAttribute'],
        [Element, 'insertAdjacentElement'],
        [Element, 'insertAdjacentHTML'],
        [DocumentFragment, 'prepend'],
        [DocumentFragment, 'append'],
        [NamedNodeMap, 'removeNamedItem'],
        [NamedNodeMap, 'removeNamedItemNS'],
        [NamedNodeMap, 'setNamedItem'],
        [NamedNodeMap, 'setNamedItemNS']
      ];
      const docCreateEl = doc.createElement.bind(doc);
      Document.prototype.createElement = function(tag, options) {
        const el = docCreateEl(tag, options);
        if (el && (el.nodeName === 'IFRAME' || el.nodeName === 'FRAME')) {
          el.addEventListener('load', () => protectFrame(el))
        }
        return el;
      }
      const origInnerHTMLDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML')
      Object.defineProperty(Element.prototype, 'innerHTML', {
          set: function (val) {
            const returnVal = origInnerHTMLDescriptor.set.call(this, val);
            try {
              if (this && this.querySelectorAll) {
                [...this.querySelectorAll('iframe, frame')].map((el) => {
                  el.addEventListener('load', () => protectFrame(el))
                })
              }
            } catch (e) {}
            return returnVal;
          }
      });
      const origMethods = methods.map(function(data) {
        return data[0].prototype[data[1]];
      });
      const origMethodsMap = methods.reduce(function(accum, data) {
        accum[data[1]] = data[0].prototype[data[1]];
        return accum;
      }, {});
      const replacementMethods = methods.map(function(data, i) {
        const orig = origMethods[i];
        const replacement = function() {
          const arg0 = arguments[0];
          if (data[1] === 'insertAdjacentElement' || data[1] === 'insertAdjacentHTML') {
            const arg1 = arguments[1];
            let inspectedEl = arg1;
            if (typeof arg1 === 'string') {
              const container = document.createElement(this.nodeName);
              container.innerHTML = arg1;
              inspectedEl = container.firstElementChild;
            }
            const returnValue = origMethodsMap.insertAdjacentElement.apply(this, [arg0, inspectedEl]);
            if (this && this.querySelectorAll) {
              [...this.querySelectorAll('iframe, frame')].map(protectFrame)
            }
            return returnValue;
          }
          // cloneNode
          if (data[1] === 'cloneNode') {
            const cloned = orig.apply(this, arguments);
            try {
              if (cloned && cloned.querySelectorAll) {
                [...cloned.querySelectorAll('iframe, frame')].map((el) => {
                  el.addEventListener('load', () => protectFrame(el))
                })
              }
            } catch (e) {}
            return cloned;
          }
          // removeNamedItem, toggleAttribute
          if (arg0 && arg0 === 'data-${e}') {
            return;
          }
          // NamedNodeMap manipulation
          if (this && this['data-${e}'] && arg0 instanceof Attr) {
            return;
          }
          if (arg0 && (arg0.nodeName === 'IFRAME' || arg0.nodeName === 'FRAME')) {
            if (originalGetAttribute.apply(arg0, ['data-${e}'])) {
              return;
            } 
            const value = orig.apply(this, arguments);
            protectFrame(value);
            return value
          }
          if (this instanceof Element && originalGetAttribute.apply(this, ['data-${e}'])) {
            return;
          } else {
            for (let i = 0, l = arguments.length; i < l; i++) {
              let el = arguments[i];
              if (el instanceof Element && originalGetAttribute.apply(el, ['data-${e}'])) {
                return;
              }
            }
          }
          return orig.apply(this, arguments);
        };
        data[0].prototype[data[1]] = replacement;
        return replacement;
      });
    }
    let mutationObs;
    function protectProperties(el) {
      const nativeStyle = el.style;
      const styleProxy = Object.create(CSSStyleDeclaration.prototype);
      Object.defineProperty(el, 'style', {
        get: function() {
          return styleProxy;
        },
      });
      Object.defineProperty(styleProxy, 'cssText', {
        set: function(styles) {
          return;
        },
        get: function() {
          return nativeStyle.cssText;
        },
      });
      Object.defineProperty(el, 'outerHTML', {
        set: function() {
          return;
        },
        get: function() {
          return el.outerHTML;
        },
      });
      Object.defineProperty(el, 'outerText', {
        set: function() {
          return;
        },
        get: function() {
          return el.outerText;
        },
      });
      Object.defineProperty(el, 'dataset', {
        set: function() {
          return;
        },
        get: function() {
          return {};
        },
      });
      Object.defineProperty(el, 'attributes', {
        get: function() {
          return document.createElement('div').attributes;
        },
      });
      if ('StylePropertyMap' in window) {
        const stylePropertyMapProxy = Object.create(Map.prototype);
        stylePropertyMapProxy.append = () => {};
        stylePropertyMapProxy.clear = () => {};
        stylePropertyMapProxy.delete = () => {};
        stylePropertyMapProxy.set = () => {};
        Object.defineProperty(el, 'attributeStyleMap', {
          get: function() {
            return stylePropertyMapProxy;
          },
        });
      }
    }
    mutationObs = new MutationObserver((mutations, observer) => {
      for (var i = 0; i < mutations.length; ++i) {
        for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
          let el = mutations[i].addedNodes[j];
          if (el.getAttribute && el.getAttribute('data-${e}')) {
            protectProperties(el);
            Object.seal(el);
          }
        }
      }
    });
    mutationObs.observe(document.documentElement, {
      childList: true
    });
    protect(window);
  } catch (e) { console.log(e) }`,document.body.appendChild(t),document.body.removeChild(t),d(".edit_checkout button.tag__button",1e3).then(r=>{if(r){r.addEventListener("click",n=>{n.isTrusted||(n.preventDefault(),n.stopPropagation())});let o=document.createElement("script");o.innerHTML=`
        try { 
          const shopifyPromoClear = document.querySelector('.edit_checkout button.tag__button');
          const removeForm = shopifyPromoClear.closest('form');
          const disableFunction = function() {
            return false;
          };
          removeForm.submit = disableFunction;
          Object.defineProperty(removeForm, 'submit', {
            set: (newValue) => {
              return disableFunction
            },
            get: () => {
              return disableFunction
            }
          });
        } catch (e) {}`,document.body.appendChild(o),document.body.removeChild(o)}})}d("body").then(async e=>{if(e){let t=await l;if(!t||!t.protect)return;s(t.pageViewId)}});
