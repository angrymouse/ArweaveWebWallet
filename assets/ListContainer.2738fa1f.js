import{Y as V,Z as $,e as f,d as h,aa as k,am as I,w as S,ab as T,o as l,c as u,s as m,x as B,E as y,a1 as v,ac as W,p as E,u as M,a as N}from"./vendor.284ce6b0.js";import{_ as C,C as g,a as w}from"./index.7bcee040.js";const O={class:"margin fade-list-item",key:"margin1"},j={class:"margin fade-list-item",key:"margin2"},z=V({props:{modelValue:null,options:null},emits:["update:modelValue","start","end"],setup(a,{emit:o}){const n=a,b=$("transitionState",null),r=f({get(){return n.modelValue},set(e){o("update:modelValue",e)}}),s=h(null),L=e=>{if(!(!e||!s.value))return n.options.align==="center"?e.offsetLeft+e.offsetWidth/2-s.value.offsetWidth/2:n.options.align==="end"?e.offsetLeft+e.offsetWidth-s.value.offsetWidth:e.offsetLeft},_=f(()=>(p.value,s.value?.children?Array(...s.value.children).filter(e=>!e.classList.contains("margin")):[])),x=f(()=>({"--position":n.options?.align||"start"})),c=async(e,t)=>{!t&&n.options.awaitTransition&&await g(()=>!b.running),e=Math.max(e||0,0),s.value?.scroll({left:L(_.value[e]),behavior:t?"instant":"smooth"})};let i;const p=h(0);return k(async()=>{i=new MutationObserver(async()=>{p.value++}),i.observe(s.value,{subtree:!1,childList:!0}),await I(),await g(()=>_.value.length),setTimeout(()=>{const e=!n.options.immediate&&r.value&&r.value>0||!1;c(e?0:r.value,!0),S(r,t=>c(t),{immediate:e})})}),T(()=>i&&i.disconnect()),(e,t)=>(l(),u("div",{ref_key:"root",ref:s,class:"carousel flex-row no-scrollbar",style:E(M(x))},[m(W,{name:"fade-list"},{default:B(()=>[a.options?.overscroll?(l(),u("div",O,[m(w,{class:"limit start",onIntersection:t[0]||(t[0]=d=>o("start",d))})])):y("",!0),v(e.$slots,"default",{},void 0,!0),a.options?.overscroll?(l(),u("div",j,[m(w,{class:"limit end",onIntersection:t[1]||(t[1]=d=>o("end",d))})])):y("",!0)]),_:3})],4))}});var D=C(z,[["__scopeId","data-v-7623da76"]]);const A={},G={class:"list-container flex-column"},U={class:"container"};function Y(a,o){return l(),u("div",G,[v(a.$slots,"header",{},void 0,!0),N("div",U,[v(a.$slots,"default",{},void 0,!0)])])}var F=C(A,[["render",Y],["__scopeId","data-v-6e67416b"]]);export{D as C,F as L};
//# sourceMappingURL=ListContainer.2738fa1f.js.map