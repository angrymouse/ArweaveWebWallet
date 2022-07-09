import{_ as W,d as b,o as a,g as d,b as s,q as i,V as C,W as $,a as r,w as _,u as e,B as f,x as u,a7 as I,aO as B,h as m,aP as S,c as y,a2 as v,ak as A,aQ as x,aR as V,t as O,aS as w,X as Z,aT as k,aU as D,aV as N,Z as g,$ as R,R as q,S as z,aW as E,k as L}from"./index.d94c246a.js";import{I as P}from"./download.32bef3c6.js";const T={class:"wallet-options flex-column"},U={class:"left"},X={class:"profile-info"},j={class:"content flex-column"},F={class:"flex-row"},M=m("Download"),Q=m("Delete"),G=b({props:{wallet:null},setup(t){return(p,n)=>(a(),d("div",T,[s("div",U,[i(C,{class:"profile",address:t.wallet.key},null,8,["address"]),s("div",X,[i($,{wallet:t.wallet},null,8,["wallet"])])]),s("div",j,[s("div",F,[t.wallet.download&&!t.wallet.metadata.methods.download?.unavailable?(a(),r(f,{key:0,icon:e(P),onClick:n[0]||(n[0]=()=>t.wallet.download())},{default:_(()=>[M]),_:1},8,["icon"])):u("",!0),i(f,{icon:e(I),onClick:n[1]||(n[1]=h=>e(B)(t.wallet))},{default:_(()=>[Q]),_:1},8,["icon"])])])]))}});var H=W(G,[["__scopeId","data-v-05e03f10"]]);const J={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},K=s("path",{d:"M24 24.6c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075v-7.35c0-.433-.142-.792-.425-1.075-.283-.283-.642-.425-1.075-.425-.433 0-.792.142-1.075.425-.283.283-.425.642-.425 1.075v7.35c0 .433.142.792.425 1.075.283.283.642.425 1.075.425Zm0 6.7c.467 0 .867-.167 1.2-.5.333-.333.5-.733.5-1.2 0-.467-.167-.867-.5-1.2a1.637 1.637 0 0 0-1.2-.5c-.467 0-.867.167-1.2.5-.333.333-.5.733-.5 1.2 0 .467.167.867.5 1.2.333.333.733.5 1.2.5Zm0 12.55c-.133 0-.258-.008-.375-.025a1.912 1.912 0 0 1-.325-.075c-4.467-1.333-8.133-4.075-11-8.225C9.433 31.375 8 26.817 8 21.85v-9.8c0-.633.183-1.208.55-1.725A3.166 3.166 0 0 1 9.95 9.2l13-4.85c.367-.133.717-.2 1.05-.2.333 0 .683.067 1.05.2l13 4.85a3.166 3.166 0 0 1 1.4 1.125c.367.517.55 1.092.55 1.725v9.8c0 4.967-1.433 9.525-4.3 13.675s-6.533 6.892-11 8.225l-.7.1Zm0-3c3.833-1.267 6.958-3.658 9.375-7.175S37 26.217 37 21.85v-9.8l-13-4.9-13 4.9v9.8c0 4.367 1.208 8.308 3.625 11.825 2.417 3.517 5.542 5.908 9.375 7.175Z",style:{"fill-rule":"nonzero"},transform:"translate(-5.018 -5.018) scale(1.20907)"},null,-1),Y=[K];function ee(t,p){return a(),d("svg",J,Y)}var te={render:ee};const ae=t=>(q("data-v-510d4c8f"),t=t(),z(),t),se={class:"flex-row",style:{"justify-content":"space-between","align-items":"baseline"}},le={key:0},oe={key:1},ne={class:"flex-column"},de=m("Connect"),ce=ae(()=>s("div",null,null,-1)),ie=b({setup(t){const p=S(),n=y(()=>{const l=p.query.wallet;if(!l)return v.value;const c=Array.isArray(l)?l:[l];return v.value.filter(o=>c.includes(o.id+""))}),h=y(()=>["popup","iframe","ws"].includes(A.value.type)&&!x.value.walletId);return V(()=>{if(!w.value)return;const{promise:l,close:c}=E.confirm("exit?");return L(w,o=>o&&c()),l}),(l,c)=>(a(),d("div",null,[s("div",se,[s("h2",null,"Wallet"+O(e(n).length>1?"s":""),1),e(w)?(a(),r(N,{key:0,class:"update-message",onClick:e(D),disabled:!e(k)},{default:_(()=>[i(Z,{icon:e(te),style:{"vertical-align":"text-top"}},null,8,["icon"]),e(k)?(a(),d("span",le," Click to update encryption")):(a(),d("span",oe," Create a new password to encrypt selected wallets"))]),_:1},8,["onClick","disabled"])):u("",!0)]),s("div",ne,[(a(!0),d(g,null,R(e(n),o=>(a(),d(g,{key:o.id},[i(H,{wallet:o},null,8,["wallet"]),e(h)?(a(),r(f,{key:0,onClick:()=>e(x).walletId=o.id},{default:_(()=>[de]),_:2},1032,["onClick"])):u("",!0),ce],64))),128))]),e(v).length?u("",!0):(a(),r(f,{key:0,style:{"font-size":"1.5em",background:"var(--background3)",width:"100%"},onClick:c[0]||(c[0]=o=>l.$router.push({name:"AddWallet"})),icon:"+"}))]))}});var _e=W(ie,[["__scopeId","data-v-510d4c8f"]]);export{_e as W};
//# sourceMappingURL=WalletsOptions.f870931d.js.map