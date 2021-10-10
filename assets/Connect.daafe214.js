import{_ as x,c as N,i as $,D as q,T as M,A as V,j as P,k as R,b as L,l as U,m as F,s as H,n as G}from"./index.65091151.js";import{d as y,i as u,o as a,e as s,F as w,g as b,y as T,j as m,q as h,z as D,B as S,f as c,l as k,K as p,I as J,c as B,w as A,k as I,N as E,J as K,T as O}from"./vendor.1c1e6812.js";const X={components:{AddressIcon:N},props:["addresses","modelValue","exit"],setup(n,{emit:o}){return{model:y({get(){return n.modelValue},set(e){o("update:modelValue",e)}})}}},W=n=>(D("data-v-036316fd"),n=n(),S(),n),Y={class:"wallet-tabs"},Q=["onClick"],Z=W(()=>c("div",{class:"exit-background"},null,-1)),ee=W(()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[c("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1)),te=[Z,ee];function ne(n,o,t,e,v,f){const r=u("AddressIcon");return a(),s("div",Y,[(a(!0),s(w,null,b(t.addresses,l=>(a(),s("button",{key:l,type:"button",onClick:_=>e.model=l,class:T(["tab",{active:l==e.model}])},[m(r,{address:l},null,8,["address"])],10,Q))),128)),t.exit?(a(),s("button",{key:0,class:"exit",type:"button",onClick:o[0]||(o[0]=l=>n.$emit("exit"))},te)):h("",!0)])}var ae=x(X,[["render",ne],["__scopeId","data-v-036316fd"]]);const oe={components:{Icon:$},props:["icon","img"],setup(){}},se={class:"icon-background"};function ce(n,o,t,e,v,f){const r=u("Icon");return a(),s("div",se,[t.img?(a(),k(r,{key:0,class:"page-logo",icon:t.img},null,8,["icon"])):(a(),k(r,{key:1,class:"page-logo placeholder",icon:t.icon},null,8,["icon"]))])}var z=x(oe,[["render",ce],["__scopeId","data-v-34c166f1"]]);const de={props:["modelValue"],setup(n,{emit:o}){return{expanded:y({get(){return n.modelValue},set(e){o("update:modelValue",e)}})}}},j=n=>(D("data-v-fbaa54cc"),n=n(),S(),n),le=j(()=>c("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"},null,-1)),ie=j(()=>c("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},null,-1)),re=[le,ie];function _e(n,o,t,e,v,f){return a(),s("button",{type:"button",class:"expand",onClick:o[0]||(o[0]=r=>e.expanded=!e.expanded)},[(a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:T({expanded:e.expanded})},re,2))])}var ue=x(de,[["render",_e],["__scopeId","data-v-fbaa54cc"]]),me="/assets/notification.8a26e511.svg";const ve={components:{IconBackground:z,Icon:$,Date:q,Expand:ue},props:["data"],setup(n){return{iconNotification:me}}},fe={class:"flex-row"},pe={class:"flex-row",style:{flex:"1 1 0"}},xe={class:"content"},ge={class:"title"},ye={class:"secondary-text"},he={key:1,class:"actions flex-row"},ke=["onClick"];function we(n,o,t,e,v,f){const r=u("IconBackground"),l=u("Date"),_=u("Icon"),d=u("Expand");return a(),s("div",{class:T(["notification",{expanded:t.data.expanded}])},[c("div",fe,[c("div",pe,[m(r,{icon:t.data.icon||e.iconNotification,img:t.data.img},null,8,["icon","img"]),c("div",xe,[t.data.expanded?(a(),k(l,{key:0,class:"secondary-text",timestamp:t.data.timestamp},null,8,["timestamp"])):h("",!0),c("div",ge,p(t.data.title),1),c("div",ye,[J(n.$slots,"default",{},void 0,!0)]),t.data.expanded?(a(),s("div",he,[(a(!0),s(w,null,b(t.data.actions,i=>(a(),s("button",{key:i.name,onClick:i.run,type:"button",class:"action flex-row"},[m(_,{icon:i.img},null,8,["icon"]),c("div",null,p(i.name),1)],8,ke))),128))])):h("",!0)])]),m(d,{modelValue:t.data.expanded,"onUpdate:modelValue":o[0]||(o[0]=i=>t.data.expanded=i)},null,8,["modelValue"])])],2)}var be=x(ve,[["render",we],["__scopeId","data-v-e0bffb3c"]]),Ie="/assets/y.229c7801.svg";const Ce={components:{WalletTabs:ae,Tabs:M,IconBackground:z,Notification:be},props:["state"],setup(n){const o=y(()=>V.wallets.map(d=>d.key)),t=B(n.state.wallet),e=[{name:"Requests",color:"var(--orange)"},{name:"Permissions",color:"var(--green)"}],v=B(t.value?"Requests":null),f=()=>n.state.wallet=!1,r=y(()=>{var g;const d=n.state.wallet?"Switch":"Connect",i=n.state.wallet?`Switch to ${t.value}`:`Connect to ${((g=n.state.appInfo)==null?void 0:g.name)||n.state.origin} from the account ${t.value}`;return{title:d,timestamp:Date.now(),actions:[{name:d,img:Ie,run:()=>n.state.wallet=t.value},{name:"Exit",img:P,run:f}],expanded:!0,content:i}}),l=B(null),_=(d,i)=>d>i?l.value="slide-left":l.value="slide-right";return A(()=>e.findIndex(d=>d.name===v.value),_),A(()=>V.wallets.findIndex(d=>d.key===t.value),_),A(()=>t.value,(d,i)=>{d&&!i&&(v.value=e[0].name)}),{addresses:o,currentAddress:t,tabs:e,currentTab:v,connectData:r,transitionName:l,disconnect:f,iconConnection:R}}},Ve={class:"connection-card card flex-column"},Te={class:"flex-row",style:{"flex-wrap":"wrap"}},Be={class:"flex-row"},Ae={class:"secondary-text"},Ne={class:"flex-column"},$e={class:"container flex-column"},De={key:0,class:"info flex-column"},Se={key:1,class:"flex-column"},Ee={key:0,class:"fade-list-item"},We={key:2,class:"flex-column"};function ze(n,o,t,e,v,f){var i,g;const r=u("IconBackground"),l=u("WalletTabs"),_=u("Tabs"),d=u("Notification");return a(),s("div",Ve,[c("div",Te,[c("div",Be,[m(r,{img:(i=t.state.appInfo)==null?void 0:i.logo,icon:e.iconConnection},null,8,["img","icon"]),c("div",null,[c("div",null,p(((g=t.state.appInfo)==null?void 0:g.name)||"Connector"),1),c("div",Ae,p(t.state.origin),1)])]),m(l,{addresses:e.addresses,modelValue:e.currentAddress,"onUpdate:modelValue":o[0]||(o[0]=C=>e.currentAddress=C),exit:"true",onExit:e.disconnect},null,8,["addresses","modelValue","onExit"])]),c("div",Ne,[m(_,{tabs:e.tabs,modelValue:e.currentTab,"onUpdate:modelValue":o[1]||(o[1]=C=>e.currentTab=C),disabled:!e.currentAddress},null,8,["tabs","modelValue","disabled"]),c("div",$e,[m(O,{name:e.transitionName,mode:"out-in"},{default:I(()=>[(a(),s("div",{key:e.currentAddress+e.currentTab,class:"content"},[e.currentAddress?e.currentTab==="Requests"?(a(),s("div",Se,[m(E,{name:"fade-list"},{default:I(()=>[e.currentAddress===t.state.wallet?(a(),s("div",Ee,"Connected")):(a(),k(d,{key:1,data:e.connectData,class:"fade-list-item"},{default:I(()=>[K(p(e.connectData.content),1)]),_:1},8,["data"]))]),_:1})])):e.currentTab==="Permissions"?(a(),s("div",We," Wip ")):h("",!0):(a(),s("div",De," Select a wallet "))]))]),_:1},8,["name"])])])])}var je=x(Ce,[["render",ze],["__scopeId","data-v-9ee7f00e"]]);const qe={components:{ConnectionCard:je,AddressIcon:N,Address:L,Button:U},setup(){const n=y(()=>V.currentWallet),o=!!window.opener;return{currentWallet:n,previousPage:o,navigateBack:()=>{if(!!o)try{window.open("","parent")}catch(e){console.log(e)}},connectors:F,state:H,states:G}}},Me={class:"connect flex-column"},Pe={class:"bottom-info secondary-text"};function Re(n,o,t,e,v,f){var l;const r=u("ConnectionCard");return a(),s("div",Me,[e.previousPage?(a(),s("div",{key:0,onClick:o[0]||(o[0]=(..._)=>e.navigateBack&&e.navigateBack(..._))},"Return to "+p(((l=e.state.appInfo)==null?void 0:l.name)||e.state.origin||"previous page"),1)):h("",!0),m(E,{name:"fade-list"},{default:I(()=>[(a(!0),s(w,null,b(e.connectors,(_,d)=>(a(),k(r,{key:d,state:_,class:"fade-list-item"},null,8,["state"]))),128))]),_:1}),c("div",Pe,[c("div",null,"All Channels "+p(Object.keys(e.states).length),1),(a(!0),s(w,null,b(e.states,(_,d)=>(a(),s("div",{key:d},p(_),1))),128))])])}var Fe=x(qe,[["render",Re],["__scopeId","data-v-3d49f1d0"]]);export{Fe as default};
