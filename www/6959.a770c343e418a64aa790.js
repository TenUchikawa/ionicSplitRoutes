(self.webpackChunkionicSplitRoutesV2=self.webpackChunkionicSplitRoutesV2||[]).push([[6959],{6959:(e,t,o)=>{"use strict";o.r(t),o.d(t,{startTapClick:()=>i});var n=o(5392);const i=e=>{let t,o,i,v,p=10*-u,f=0;const L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,h=e=>{p=(0,n.o)(e),S(e)},E=()=>{clearTimeout(v),v=void 0,o&&(T(!1),o=void 0)},w=e=>{o||void 0!==t&&null!==t.parentElement||(t=void 0,g(s(e),e))},S=e=>{g(void 0,e)},g=(e,t)=>{if(e&&e===o)return;clearTimeout(v),v=void 0;const{x:i,y:s}=(0,n.p)(t);if(o){if(m.has(o))throw new Error("internal error");o.classList.contains(c)||k(o,i,s),T(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const o=a(e)?0:d;e.classList.remove(c),v=setTimeout(()=>{k(e,i,s),v=void 0},o)}o=e},k=(e,t,o)=>{f=Date.now(),e.classList.add(c);const n=L&&r(e);n&&n.addRipple&&(R(),i=n.addRipple(t,o))},R=()=>{void 0!==i&&(i.then(e=>e()),i=void 0)},T=e=>{R();const t=o;if(!t)return;const n=l-Date.now()+f;if(e&&n>0&&!a(t)){const e=setTimeout(()=>{t.classList.remove(c),m.delete(t)},l);m.set(t,e)}else t.classList.remove(c)},b=document;b.addEventListener("ionScrollStart",e=>{t=e.target,E()}),b.addEventListener("ionScrollEnd",()=>{t=void 0}),b.addEventListener("ionGestureCaptured",E),b.addEventListener("touchstart",e=>{p=(0,n.o)(e),w(e)},!0),b.addEventListener("touchcancel",h,!0),b.addEventListener("touchend",h,!0),b.addEventListener("mousedown",e=>{const t=(0,n.o)(e)-u;p<t&&w(e)},!0),b.addEventListener("mouseup",e=>{const t=(0,n.o)(e)-u;p<t&&S(e)},!0)},s=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);