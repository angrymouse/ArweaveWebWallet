import{_ as i,i as r,W as _,B as s,o as u,a2 as w}from"./index.7bcee040.js";import{I as f}from"./download.8d2831c7.js";import{Y as m,o as n,c as v,a as o,s as a,y as x,x as d,u as l,E as p,a7 as c}from"./vendor.284ce6b0.js";const k={class:"wallet-options flex-column"},h={class:"left"},B={class:"profile-info"},I={class:"content"},W={class:"bottom flex-row"},y=c("Download"),C=c("Delete"),N=m({props:{wallet:null},setup(e){return(V,t)=>(n(),v("div",k,[o("div",h,[a(r,{class:"profile",address:e.wallet.key},null,8,["address"]),o("div",B,[a(_,{wallet:e.wallet},null,8,["wallet"])])]),o("div",I,[o("div",W,[e.wallet.download&&!e.wallet.metadata.methods.download?.unavailable?(n(),x(s,{key:0,icon:l(f),onClick:t[0]||(t[0]=()=>e.wallet.download())},{default:d(()=>[y]),_:1},8,["icon"])):p("",!0),a(s,{icon:l(u),onClick:t[1]||(t[1]=D=>l(w)(e.wallet))},{default:d(()=>[C]),_:1},8,["icon"])])])]))}});var g=i(N,[["__scopeId","data-v-3951ea78"]]);export{g as W};
//# sourceMappingURL=WalletOptions.2f950854.js.map