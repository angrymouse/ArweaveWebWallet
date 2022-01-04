import{W as j,d as p,r as D,g as F,c as f,a as t,v as w,y as m,x as d,u as o,T as K,F as W,p as V,ai as L,X as G,Y as M,o as i,a2 as r,V as v,E as P}from"./vendor.5f995f90.js";import{_ as O,w as $,L as z,x as _,y as H,z as J,C as A,D as U,E as R,G as X,H as Y,k as Q,J as Z,K as ee}from"./index.5b44a0af.js";const g=y=>(G("data-v-778d6862"),y=y(),M(),y),ae={class:"add-wallet flex-column"},se={class:"card"},te=g(()=>t("h2",{style:{display:"flex","justify-content":"space-between"}},[t("span",null,"Passphrase"),t("span",null,"Key file")],-1)),ne={class:"flex-column"},le=g(()=>t("div",null,null,-1)),oe=r("Create new wallet"),ie=r("Import passphrase"),de={style:{flex:"1 1 auto",display:"flex","flex-direction":"column","align-items":"center","justify-content":"space-evenly","margin-bottom":"var(--spacing)"}},re={class:"actions-container flex-row"},ce={class:"card"},ue=g(()=>t("h2",null,"Hardware",-1)),pe={class:"card"},me=g(()=>t("h2",null,"Address Only",-1)),ve={setup(y){const c=j(),l=p(""),k=p(""),a=D({}),x=F(()=>l.value.trim().split(/\s+/g).length>=12),h=p(!1),b=p(!1),u=p(null),E=async()=>{h.value=!0,l.value=await J();const n=A(l.value);setTimeout(async()=>u.value=await n,1e4)},B=()=>{c.push({name:"EditWallet",query:{wallet:u.value}})},C=async()=>{b.value=!0;const n=A(l.value);a.enabled=!0,a.icon="loader",a.message="Importing",a.actions=[],c.push({name:"EditWallet",query:{wallet:await n}})},S=async()=>{if(await U(l.value))return C();a.enabled=!0,a.icon="",a.message="This passphrase is not valid, do you want to import it anyway?",a.actions=[{name:"Back",action:()=>a.enabled=!1},{name:"Import Passphrase",action:()=>C()}]},T=async n=>{if(!n)return;const s=await R(JSON.parse(await n[0].text()));c.push({name:"EditWallet",query:{wallet:s}})},q=async n=>{const s=await Z(n);c.push({name:"EditWallet",query:{wallet:s}})},N=[ee],I={icon:X,run:async()=>{const n=await Y(k.value);c.push({name:"EditWallet",query:{wallet:n}})}};return(n,s)=>(i(),f("div",ae,[t("div",se,[te,t("div",ne,[w($,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e),onFiles:T,disabled:h.value,placeholder:"Import passphrase or key file"},null,8,["modelValue","disabled"]),le,!h.value&&!l.value.length?(i(),m(_,{key:0,onClick:s[1]||(s[1]=e=>E()),disabled:l.value.length&&!o(x),icon:o(z)},{default:d(()=>[oe]),_:1},8,["disabled","icon"])):h.value?(i(),m(_,{key:1,disabled:u.value==null,onClick:B,icon:u.value==null?"loader":""},{default:d(()=>[r(v(u.value==null?"Generating, write down the passphrase":"Passphrase saved? Click here to proceed"),1)]),_:1},8,["disabled","icon"])):(i(),m(_,{key:2,disabled:!o(x)||b.value,onClick:S},{default:d(()=>[ie]),_:1},8,["disabled"]))]),w(K,{name:"fade-fast",mode:"in-out"},{default:d(()=>[o(a).enabled?(i(),f("div",{key:o(a).message,class:"overlay flex-column"},[t("div",de,[o(a).icon?(i(),m(Q,{key:0,icon:o(a).icon,style:{"font-size":"2em"}},null,8,["icon"])):P("",!0),r(" "+v(o(a).message),1)]),t("div",re,[(i(!0),f(W,null,V(o(a).actions,e=>(i(),m(_,{key:e.name,onClick:e.action},{default:d(()=>[r(v(e.name),1)]),_:2},1032,["onClick"]))),128))])])):P("",!0)]),_:1})]),t("div",ce,[ue,(i(),f(W,null,V(N,e=>w(_,{key:e.name,disabled:!e.isSupported,onClick:_e=>q(e),icon:e.icon},{default:d(()=>[r(v(e.name)+" "+v(e.isSupported?"":" not supported for this browser"),1)]),_:2},1032,["disabled","onClick","icon"])),64))]),t("div",pe,[me,w(H,{modelValue:k.value,"onUpdate:modelValue":s[2]||(s[2]=e=>k.value=e),actions:[I],onKeydown:s[3]||(s[3]=L(e=>I.run(),["enter"]))},null,8,["modelValue","actions"])])]))}};var fe=O(ve,[["__scopeId","data-v-778d6862"]]);export{fe as default};
//# sourceMappingURL=AddWallet.438d643d.js.map
