import{_ as E,S as O,U as $,B as o,V as F,X as L,Y as x,Z as N,$ as T,z as M,a0 as U,o as z,a1 as D,a2 as G,a3 as Y}from"./index.00852680.js";import{O as j}from"./OverlayPrompt.37a9c11d.js";import{p as H,e as i,c as J,o as p,a as b,d as e,y as n,C as y,z as d,u as m,a7 as c,Y as w,F as K,q as R,a3 as X,a4 as Z,a5 as Q}from"./vendor.5a757be3.js";import{I as aa}from"./launch.539728ed.js";const g=_=>(X("data-v-75f84433"),_=_(),Z(),_),ea={class:"add-wallet flex-column"},sa={class:"card"},ta=g(()=>e("h2",{style:{display:"flex","justify-content":"space-between"}},[e("span",null,"Passphrase"),e("span",null,"Key file")],-1)),la={class:"flex-column"},na=g(()=>e("div",null,null,-1)),oa=c("Create new wallet"),ia=c("Import passphrase"),da={class:"flex-row",style:{"align-items":"center"}},ca={class:"flex-column"},ra={class:"flex-row"},ua=c("Verify address"),pa=["href"],ma=c("Purchase | affiliate link"),_a={class:"card"},ha=g(()=>e("h2",null,"Address Only",-1)),va=H({setup(_){const r=Q(),l=i(""),f=i(""),h=i(void 0),k=J(()=>l.value.trim().split(/\s+/g).length>=12),v=i(!1),I=i(!1),u=i(null),W=async()=>{v.value=!0,l.value=await L();const s=x(l.value);setTimeout(async()=>u.value=await s,1e4)},P=()=>{r.push({name:"EditWallet",query:{wallet:u.value}})},C=async()=>{I.value=!0;const s=x(l.value);h.value={icon:"loader",message:"importing"},r.push({name:"EditWallet",query:{wallet:await s}})},V=async()=>{if(await N(l.value))return C();h.value={message:"This passphrase is not valid, do you want to import it anyway?",actions:[{name:"Back",run:()=>h.value=void 0},{name:"Import Passphrase",run:()=>C()}]}},A=async s=>{if(!s)return;const t=await T(JSON.parse(await s[0].text()));r.push({name:"EditWallet",query:{wallet:t}})},B=async s=>{const t=await G(s);r.push({name:"EditWallet",query:{wallet:t}})},S=[Y],q={icon:M,run:async()=>{const s=await U(f.value);r.push({name:"EditWallet",query:{wallet:s}})}};return(s,t)=>(p(),b("div",ea,[e("div",sa,[ta,e("div",la,[n(O,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a),onFiles:A,disabled:v.value,placeholder:"Import passphrase or key file"},null,8,["modelValue","disabled"]),na,!v.value&&!l.value.length?(p(),y(o,{key:0,onClick:t[1]||(t[1]=a=>W()),disabled:l.value.length&&!m(k),icon:m($),class:"main"},{default:d(()=>[oa]),_:1},8,["disabled","icon"])):v.value?(p(),y(o,{key:1,disabled:u.value==null,onClick:P,icon:u.value==null?"loader":"",class:"main"},{default:d(()=>[c(w(u.value==null?"Generating, write down the passphrase":"Passphrase saved? Click here to proceed"),1)]),_:1},8,["disabled","icon"])):(p(),y(o,{key:2,disabled:!m(k)||I.value,onClick:V,class:"main"},{default:d(()=>[ia]),_:1},8,["disabled"]))]),n(j,{options:h.value},null,8,["options"])]),(p(),b(K,null,R(S,a=>e("div",{class:"card",key:a.metadata.name},[e("h2",da,[n(z,{icon:a.metadata.icon},null,8,["icon"]),e("span",null,w(a.metadata.name)+" Hardware Wallet (awaiting release)",1)]),e("div",ca,[n(o,{disabled:!a.metadata.isSupported,onClick:fa=>B(a),icon:a.metadata.icon,class:"main"},{default:d(()=>[c(w(a.metadata.isSupported?`Connect with ${a.metadata.name}`:`${a.metadata.name} not supported for this browser`),1)]),_:2},1032,["disabled","onClick","icon"]),e("div",ra,[n(o,{icon:m(D),onClick:a.metadata.verify},{default:d(()=>[ua]),_:2},1032,["icon","onClick"]),e("a",{href:a.metadata.link,target:"_blank",class:"reset"},[n(o,{icon:m(aa)},{default:d(()=>[ma]),_:1},8,["icon"])],8,pa)])])])),64)),e("div",_a,[ha,n(F,{modelValue:f.value,"onUpdate:modelValue":t[2]||(t[2]=a=>f.value=a),actions:[q]},null,8,["modelValue","actions"])])]))}});var Ia=E(va,[["__scopeId","data-v-75f84433"]]);export{Ia as default};
//# sourceMappingURL=AddWallet.1afdb2c2.js.map