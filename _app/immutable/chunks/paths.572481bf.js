import{n as b,s as p}from"./scheduler.b3c879a1.js";const t=[];function q(n,l=b){let i;const o=new Set;function r(e){if(p(n,e)&&(n=e,i)){const c=!t.length;for(const s of o)s[1](),t.push(s,n);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(n))}function _(e,c=b){const s=[e,c];return o.add(s),o.size===1&&(i=l(r,f)||b),e(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_18ecp3q)==null?void 0:u.base)??"";var a;const d=((a=globalThis.__sveltekit_18ecp3q)==null?void 0:a.assets)??h;export{d as a,h as b,q as w};