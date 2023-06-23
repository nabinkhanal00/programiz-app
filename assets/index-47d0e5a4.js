var ye=Object.defineProperty;var $e=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var H=(e,t,n)=>($e(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function M(){}function me(e){return e()}function le(){return Object.create(null)}function X(e){e.forEach(me)}function ge(e){return typeof e=="function"}function ke(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let T;function ie(e,t){return T||(T=document.createElement("a")),T.href=t,e===T.href}function we(e){return Object.keys(e).length===0}function se(e){return e??""}function a(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function y(){return w(" ")}function ve(){return w("")}function V(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function je(e){return Array.from(e.childNodes)}function L(e,t){t=""+t,e.data!==t&&(e.data=t)}let D;function B(e){D=e}function Ee(){if(!D)throw new Error("Function called outside component initialization");return D}function Oe(e){Ee().$$.on_mount.push(e)}const C=[],oe=[];let S=[];const ce=[],Ne=Promise.resolve();let Q=!1;function Ae(){Q||(Q=!0,Ne.then(be))}function R(e){S.push(e)}const J=new Set;let A=0;function be(){if(A!==0)return;const e=D;do{try{for(;A<C.length;){const t=C[A];A++,B(t),Ce(t.$$)}}catch(t){throw C.length=0,A=0,t}for(B(null),C.length=0,A=0;oe.length;)oe.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];J.has(n)||(J.add(n),n())}S.length=0}while(C.length);for(;ce.length;)ce.pop()();Q=!1,J.clear(),B(e)}function Ce(e){if(e.fragment!==null){e.update(),X(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}function Le(e){const t=[],n=[];S.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),S=t}const Se=new Set;function Me(e,t){e&&e.i&&(Se.delete(e),e.i(t))}function P(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Pe(e,t,n){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),R(()=>{const s=e.$$.on_mount.map(me).filter(ge);e.$$.on_destroy?e.$$.on_destroy.push(...s):X(s),e.$$.on_mount=[]}),i.forEach(R)}function qe(e,t){const n=e.$$;n.fragment!==null&&(Le(n.after_update),X(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(e,t){e.$$.dirty[0]===-1&&(C.push(e),Ae(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Be(e,t,n,l,i,s,o,f=[-1]){const r=D;B(e);const c=e.$$={fragment:null,ctx:[],props:s,update:M,not_equal:i,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:le(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};o&&o(c.root);let _=!1;if(c.ctx=n?n(e,t.props||{},(u,d,...b)=>{const E=b.length?b[0]:d;return c.ctx&&i(c.ctx[u],c.ctx[u]=E)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](E),_&&ze(e,u)),d}):[],c.update(),_=!0,X(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const u=je(t.target);c.fragment&&c.fragment.l(u),u.forEach($)}else c.fragment&&c.fragment.c();t.intro&&Me(e.$$.fragment),Pe(e,t.target,t.anchor),be()}B(r)}class De{constructor(){H(this,"$$");H(this,"$$set")}$destroy(){qe(this,1),this.$destroy=M}$on(t,n){if(!ge(n))return M;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!we(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function re(e,t,n){const l=e.slice();return l[8]=t[n],l}function fe(e,t,n){const l=e.slice();return l[11]=t[n],l}function ue(e,t,n){const l=e.slice();return l[14]=t[n],l}function Fe(e){let t;return{c(){t=p("div"),t.textContent="Loading..."},m(n,l){j(n,t,l)},p:M,d(n){n&&$(t)}}}function Ie(e){let t,n,l=e[1].length>0&&ae(e),i=P(e[0]),s=[];for(let o=0;o<i.length;o+=1)s[o]=pe(re(e,i,o));return{c(){l&&l.c(),t=y();for(let o=0;o<s.length;o+=1)s[o].c();n=ve()},m(o,f){l&&l.m(o,f),j(o,t,f);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(o,f);j(o,n,f)},p(o,f){if(o[1].length>0?l?l.p(o,f):(l=ae(o),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),f&15){i=P(o[0]);let r;for(r=0;r<i.length;r+=1){const c=re(o,i,r);s[r]?s[r].p(c,f):(s[r]=pe(c),s[r].c(),s[r].m(n.parentNode,n))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(o){l&&l.d(o),o&&$(t),U(s,o),o&&$(n)}}}function ae(e){let t,n,l,i,s,o,f,r=P(e[1]),c=[];for(let _=0;_<r.length;_+=1)c[_]=de(ue(e,r,_));return{c(){t=p("div"),n=p("div");for(let _=0;_<c.length;_+=1)c[_].c();l=y(),i=p("div"),s=p("button"),s.textContent="Clear",h(n,"class","tag-list flex"),h(i,"class","clear svelte-102is1a"),h(t,"class","tag-info flex justify-between items-center bg-white my-10 px-10 py-2 svelte-102is1a")},m(_,u){j(_,t,u),a(t,n);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(n,null);a(t,l),a(t,i),a(i,s),o||(f=V(s,"click",e[5]),o=!0)},p(_,u){if(u&18){r=P(_[1]);let d;for(d=0;d<r.length;d+=1){const b=ue(_,r,d);c[d]?c[d].p(b,u):(c[d]=de(b),c[d].c(),c[d].m(n,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=r.length}},d(_){_&&$(t),U(c,_),o=!1,f()}}}function de(e){let t,n,l=e[14]+"",i,s,o,f,r,c;function _(){return e[6](e[14])}return{c(){t=p("div"),n=p("span"),i=w(l),s=y(),o=p("button"),o.textContent=" X ",f=y(),h(n,"class","inline-block tl-text svelte-102is1a"),h(o,"class","tl-button svelte-102is1a"),h(t,"class","mx-2 p-2")},m(u,d){j(u,t,d),a(t,n),a(n,i),a(t,s),a(t,o),a(t,f),r||(c=V(o,"click",_),r=!0)},p(u,d){e=u,d&2&&l!==(l=e[14]+"")&&L(i,l)},d(u){u&&$(t),r=!1,c()}}}function _e(e){let t,n,l,i,s,o,f,r,c=e[8].company+"",_,u,d,b=e[8].position+"",E,W,O,q,F=Math.round((Date.now()-e[8].posted_on)/864e5)+"",x,Y,Z,I,K=e[8].timing+"",G,ee,z,te,N=P(e[8].keywords),v=[];for(let m=0;m<N.length;m+=1)v[m]=he(fe(e,N,m));return{c(){t=p("div"),n=p("div"),l=p("div"),i=p("img"),o=y(),f=p("div"),r=p("div"),_=w(c),u=y(),d=p("div"),E=w(b),W=y(),O=p("div"),q=p("span"),x=w(F),Y=w("d ago"),Z=y(),I=p("span"),G=w(K),ee=y(),z=p("div");for(let m=0;m<v.length;m+=1)v[m].c();te=y(),h(i,"class","image object-cover h-12 w-12 rounded-xl"),ie(i.src,s=e[8].company_logo)||h(i,"src",s),h(i,"alt",""),h(l,"class","logo rounded celements svelte-102is1a"),h(r,"class","company-name svelte-102is1a"),h(d,"class","job-name text-xl font-bold"),h(q,"class","detail svelte-102is1a"),h(I,"class","detail svelte-102is1a"),h(O,"class","job-details"),h(f,"class","description celements svelte-102is1a"),h(n,"class","company flex flex-row justify-around items-center w-auto svelte-102is1a"),h(z,"class","tags svelte-102is1a"),h(t,"class","job my-10 px-10 py-2 flex flex-row justify-between bg-white items-center")},m(m,k){j(m,t,k),a(t,n),a(n,l),a(l,i),a(n,o),a(n,f),a(f,r),a(r,_),a(f,u),a(f,d),a(d,E),a(f,W),a(f,O),a(O,q),a(q,x),a(q,Y),a(O,Z),a(O,I),a(I,G),a(t,ee),a(t,z);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(z,null);a(t,te)},p(m,k){if(k&1&&!ie(i.src,s=m[8].company_logo)&&h(i,"src",s),k&1&&c!==(c=m[8].company+"")&&L(_,c),k&1&&b!==(b=m[8].position+"")&&L(E,b),k&1&&F!==(F=Math.round((Date.now()-m[8].posted_on)/864e5)+"")&&L(x,F),k&1&&K!==(K=m[8].timing+"")&&L(G,K),k&7){N=P(m[8].keywords);let g;for(g=0;g<N.length;g+=1){const ne=fe(m,N,g);v[g]?v[g].p(ne,k):(v[g]=he(ne),v[g].c(),v[g].m(z,null))}for(;g<v.length;g+=1)v[g].d(1);v.length=N.length}},d(m){m&&$(t),U(v,m)}}}function he(e){let t,n,l=e[11]+"",i,s,o,f;function r(){return e[7](e[11])}return{c(){t=p("button"),n=p("span"),i=w(l),h(n,"class",s=se(e[1].includes(e[11])?"tag selected":"tag ")+" svelte-102is1a"),h(t,"class","svelte-102is1a")},m(c,_){j(c,t,_),a(t,n),a(n,i),o||(f=V(t,"click",r),o=!0)},p(c,_){e=c,_&1&&l!==(l=e[11]+"")&&L(i,l),_&3&&s!==(s=se(e[1].includes(e[11])?"tag selected":"tag ")+" svelte-102is1a")&&h(n,"class",s)},d(c){c&&$(t),o=!1,f()}}}function pe(e){let t=e[1].length==0||e[3](e[8].keywords),n,l=t&&_e(e);return{c(){l&&l.c(),n=ve()},m(i,s){l&&l.m(i,s),j(i,n,s)},p(i,s){s&3&&(t=i[1].length==0||i[3](i[8].keywords)),t?l?l.p(i,s):(l=_e(i),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},d(i){l&&l.d(i),i&&$(n)}}}function Ke(e){let t,n;function l(o,f){return o[0]?Ie:Fe}let i=l(e),s=i(e);return{c(){t=p("div"),n=p("div"),s.c(),h(n,"class","ctr"),h(t,"class","page p-10 svelte-102is1a")},m(o,f){j(o,t,f),a(t,n),s.m(n,null)},p(o,[f]){i===(i=l(o))&&s?s.p(o,f):(s.d(1),s=i(o),s&&(s.c(),s.m(n,null)))},i:M,o:M,d(o){o&&$(t),s.d()}}}function Te(e,t,n){let l,i=[];function s(u){i.includes(u)||n(1,i=[u,...i])}function o(u){let d=0;for(let b of i)u.includes(b)&&d++;return i.length==d}function f(u){i.splice(i.indexOf(u),1),n(1,i)}function r(){n(1,i=[])}return Oe(async()=>{const u=await fetch("https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json");n(0,l=await u.json())}),[l,i,s,o,f,r,u=>f(u),u=>s(u)]}class Xe extends De{constructor(t){super(),Be(this,t,Te,Ke,ke,{})}}new Xe({target:document.getElementById("app")});
