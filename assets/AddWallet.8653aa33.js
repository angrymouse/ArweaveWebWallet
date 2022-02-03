import{_ as q,N as E,O as N,B as p,P as j,Q as F,R as P,S as T,U as L,x as M,V as U,X as D,Y as G}from"./index.416164eb.js";import{W as R,a0 as $,d as o,e as H,c as W,a as t,q as m,x as w,s as v,u as f,F as J,l as K,a1 as Q,a2 as X,o as i,a5 as _,V as g}from"./vendor.807e0a43.js";import{O as Y}from"./OverlayPrompt.5b893fb3.js";const h=r=>(Q("data-v-0c90a12c"),r=r(),X(),r),z={class:"add-wallet flex-column"},Z={class:"card"},ee=h(()=>t("h2",{style:{display:"flex","justify-content":"space-between"}},[t("span",null,"Passphrase"),t("span",null,"Key file")],-1)),ae={class:"flex-column"},se=h(()=>t("div",null,null,-1)),te=_("Create new wallet"),le=_("Import passphrase"),oe={class:"card"},ne=h(()=>t("h2",null,"Hardware",-1)),de={class:"card"},ie=h(()=>t("h2",null,"Address Only",-1)),re=R({setup(r){const n=$(),l=o(""),y=o(""),u=o(void 0),b=H(()=>l.value.trim().split(/\s+/g).length>=12),c=o(!1),k=o(!1),d=o(null),I=async()=>{c.value=!0,l.value=await F();const e=P(l.value);setTimeout(async()=>d.value=await e,1e4)},C=()=>{n.push({name:"EditWallet",query:{wallet:d.value}})},x=async()=>{k.value=!0;const e=P(l.value);u.value={icon:"loader",message:"importing"},n.push({name:"EditWallet",query:{wallet:await e}})},V=async()=>{if(await T(l.value))return x();u.value={message:"This passphrase is not valid, do you want to import it anyway?",actions:[{name:"Back",run:()=>u.value=void 0},{name:"Import Passphrase",run:()=>x()}]}},A=async e=>{if(!e)return;const s=await L(JSON.parse(await e[0].text()));n.push({name:"EditWallet",query:{wallet:s}})},B=async e=>{const s=await D(e);n.push({name:"EditWallet",query:{wallet:s}})},S=[G],O={icon:M,run:async()=>{const e=await U(y.value);n.push({name:"EditWallet",query:{wallet:e}})}};return(e,s)=>(i(),W("div",z,[t("div",Z,[ee,t("div",ae,[m(E,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=a=>l.value=a),onFiles:A,disabled:c.value,placeholder:"Import passphrase or key file"},null,8,["modelValue","disabled"]),se,!c.value&&!l.value.length?(i(),w(p,{key:0,onClick:s[1]||(s[1]=a=>I()),disabled:l.value.length&&!f(b),icon:f(N)},{default:v(()=>[te]),_:1},8,["disabled","icon"])):c.value?(i(),w(p,{key:1,disabled:d.value==null,onClick:C,icon:d.value==null?"loader":""},{default:v(()=>[_(g(d.value==null?"Generating, write down the passphrase":"Passphrase saved? Click here to proceed"),1)]),_:1},8,["disabled","icon"])):(i(),w(p,{key:2,disabled:!f(b)||k.value,onClick:V},{default:v(()=>[le]),_:1},8,["disabled"]))]),m(Y,{options:u.value},null,8,["options"])]),t("div",oe,[ne,(i(),W(J,null,K(S,a=>m(p,{key:a.metadata.name,disabled:!a.metadata.isSupported,onClick:ue=>B(a),icon:a.metadata.icon},{default:v(()=>[_(g(a.metadata.name)+" "+g(a.metadata.isSupported?"":" not supported for this browser"),1)]),_:2},1032,["disabled","onClick","icon"])),64))]),t("div",de,[ie,m(j,{modelValue:y.value,"onUpdate:modelValue":s[2]||(s[2]=a=>y.value=a),actions:[O]},null,8,["modelValue","actions"])])]))}});var ve=q(re,[["__scopeId","data-v-0c90a12c"]]);export{ve as default};
//# sourceMappingURL=AddWallet.8653aa33.js.map
