var me=Object.defineProperty,fe=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var Y=(e,t,s)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,G=(e,t)=>{for(var s in t||(t={}))he.call(t,s)&&Y(e,s,t[s]);if(X)for(var s of X(t))xe.call(t,s)&&Y(e,s,t[s]);return e},J=(e,t)=>fe(e,pe(t));import{i as h,h as I,w as ge,Z as ye,o as a,c as n,p as v,q as k,X as O,a0 as N,R as z,U as B,d as c,ab as T,J as r,K as L,x as f,F as x,j as b,l as V,s as $,P as w,Y as C,a as W,I as $e,T as we}from"./vendor.8930d208.js";import{_ as g,f as Q,c as Z,W as S,i as j,D as Ie,b as ke,d as ee,h as be,T as Ve,j as te,n as se,k as ae,l as Ce,m as Se,o as ne,s as oe,p as le}from"./index.292df32b.js";const Ee={props:["modelValue"],setup(e,{emit:t}){const s=h({get(){return e.modelValue},set(l){t("update:modelValue",l)}}),d=I(null),o=h(()=>{var l;return((l=d.value)==null?void 0:l.children)?Array(...d.value.children).slice(1,d.value.children.length-1):null}),i=()=>{var l,m;(m=(l=o.value)==null?void 0:l[Math.max(s.value||0,0)])==null||m.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})};return ge(i),ye(()=>setTimeout(i)),{model:s,root:d}}},de=e=>(z("data-v-7561eed9"),e=e(),B(),e),ze={ref:"root",class:"carousel flex-row no-scrollbar"},Be=de(()=>c("div",{class:"margin fade-list-item",key:"margin1"},null,-1)),Te=de(()=>c("div",{class:"margin fade-list-item",key:"margin2"},null,-1));function Le(e,t,s,d,o,i){return a(),n("div",ze,[v(N,{name:"fade-list"},{default:k(()=>[Be,O(e.$slots,"default",{},void 0,!0),Te]),_:3})],512)}var Me=g(Ee,[["render",Le],["__scopeId","data-v-7561eed9"]]);const ce=e=>(z("data-v-7b045f16"),e=e(),B(),e),Ae={class:"wallet-selector"},De=ce(()=>c("div",{class:"exit-background"},null,-1)),Ne=ce(()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[c("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1)),We=[De,Ne],je=T({props:{modelValue:String,default:String,exit:Boolean,active:Boolean},emits:["update:modelValue","selectWallet","exit"],setup(e,{emit:t}){const s=e,d=h({get(){return s.modelValue||s.default},set(i){t("update:modelValue",i)}}),o=h(()=>{var i;return(i=Q(d.value))==null?void 0:i.key});return(i,l)=>(a(),n("div",Ae,[r(d)?(a(),n("button",{key:0,type:"button",onClick:l[0]||(l[0]=m=>i.$emit("selectWallet")),class:L(["tab",{active:e.active}])},[v(Z,{address:r(o)},null,8,["address"])],2)):f("",!0),e.exit?(a(),n("button",{key:1,class:"exit",type:"button",onClick:l[1]||(l[1]=m=>i.$emit("exit"))},We)):f("",!0)]))}});var Fe=g(je,[["__scopeId","data-v-7b045f16"]]);const He={class:"wallet-tabs"},Pe=["onClick"],Ue=T({props:["addresses","modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){const s=e,d=h({get(){return s.modelValue},set(o){t("update:modelValue",o)}});return(o,i)=>(a(),n("div",He,[(a(!0),n(x,null,b(r(S),l=>(a(),n("button",{key:l.id,type:"button",onClick:m=>d.value=l.id,class:L(["tab",{active:l.id==r(d)}])},[v(Z,{address:l.key},null,8,["address"])],10,Pe))),128))]))}});var ie=g(Ue,[["__scopeId","data-v-7cce63f4"]]);const Re={components:{Icon:j},props:["icon","img"],setup(){}},qe={class:"icon-background"};function Ke(e,t,s,d,o,i){const l=V("Icon");return a(),n("div",qe,[s.img?(a(),$(l,{key:0,class:"page-logo",icon:s.img},null,8,["icon"])):(a(),$(l,{key:1,class:"page-logo placeholder",icon:s.icon},null,8,["icon"]))])}var re=g(Re,[["render",Ke],["__scopeId","data-v-34c166f1"]]);const Xe={props:["modelValue"],setup(e,{emit:t}){return{expanded:h({get(){return e.modelValue},set(d){t("update:modelValue",d)}})}}},ue=e=>(z("data-v-52e2fbe0"),e=e(),B(),e),Ye=ue(()=>c("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"},null,-1)),Ge=ue(()=>c("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},null,-1)),Je=[Ye,Ge];function Oe(e,t,s,d,o,i){return a(),n("button",{type:"button",class:"expand",onClick:t[0]||(t[0]=l=>d.expanded=!d.expanded)},[(a(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:L({expanded:d.expanded})},Je,2))])}var Qe=g(Xe,[["render",Oe],["__scopeId","data-v-52e2fbe0"]]);const Ze={components:{Icon:j},props:["actions"]},et={class:"actions-list flex-row"},tt=["onClick"];function st(e,t,s,d,o,i){const l=V("Icon");return a(),n("div",et,[(a(!0),n(x,null,b(s.actions,m=>(a(),n("button",{key:m.name,onClick:m.run,type:"button",class:"action flex-row"},[v(l,{icon:m.icon},null,8,["icon"]),c("div",null,w(m.name),1)],8,tt))),128))])}var _e=g(Ze,[["render",st],["__scopeId","data-v-64771746"]]);const at={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFF"},nt=c("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),ot=c("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"},null,-1),lt=[nt,ot];function dt(e,t){return a(),n("svg",at,lt)}var ct={render:dt};const it={components:{ActionsList:_e,IconBackground:re,Date:Ie,Expand:Qe},props:["data"],setup(e){return{IconNotification:ct}}},rt={class:"flex-row"},ut={class:"flex-row",style:{flex:"1 1 0"}},_t={class:"content"},vt={class:"title"},mt={class:"secondary-text"};function ft(e,t,s,d,o,i){const l=V("IconBackground"),m=V("Date"),M=V("ActionsList"),A=V("Expand");return a(),n("div",{class:L(["notification",{expanded:s.data.expanded}])},[c("div",rt,[c("div",ut,[v(l,{icon:s.data.icon||d.IconNotification,img:s.data.img},null,8,["icon","img"]),c("div",_t,[s.data.expanded?(a(),$(m,{key:0,class:"secondary-text",timestamp:s.data.timestamp},null,8,["timestamp"])):f("",!0),c("div",vt,w(s.data.title),1),c("div",mt,[O(e.$slots,"default",{},void 0,!0)]),s.data.expanded?(a(),$(M,{key:1,actions:s.data.actions},null,8,["actions"])):f("",!0)])]),v(A,{modelValue:s.data.expanded,"onUpdate:modelValue":t[0]||(t[0]=p=>s.data.expanded=p)},null,8,["modelValue"])])],2)}var pt=g(it,[["render",ft],["__scopeId","data-v-3a2aa44c"]]);const ht={components:{Address:ke},props:["tx"],setup(e){return{verticalElement:h(()=>ee.breakpoints.verticalLayout),humanFileSize:be}}},xt={class:"tx-card-extension"},gt={key:0,class:"flex-row",style:{"justify-content":"space-between"}},yt={key:0},$t={key:1},wt={key:1,class:"tags secondary-text"};function It(e,t,s,d,o,i){return a(),n("div",xt,[s.tx.tags.length||s.tx.data_size?(a(),n("div",gt,[s.tx.tags.length?(a(),n("div",yt,"Tags:")):f("",!0),s.tx.data_size?(a(),n("div",$t,"Data: "+w(d.humanFileSize(s.tx.data_size)),1)):f("",!0)])):f("",!0),s.tx.tags.length?(a(),n("ul",wt,[(a(!0),n(x,null,b(s.tx.tags,l=>(a(),n("li",null,w(l.name+" | "+l.value),1))),256))])):f("",!0)])}var kt=g(ht,[["render",It],["__scopeId","data-v-383b6252"]]);const bt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#fff"},Vt=c("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Ct=c("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},null,-1),St=[Vt,Ct];function Et(e,t){return a(),n("svg",bt,St)}var ve={render:Et};const zt={class:"permission-card"},Bt=C(" Share the public key "),Tt=C(" Share the arweave config "),Lt=C(" Sign data "),Mt=C(" Decrypt data "),At={props:["messageEntry"],setup(e){const t=e,s=I(null);if(t.messageEntry.message.method==="signTransaction"){const o=t.messageEntry.message.params[0],i=o.tags.map(({name:l,value:m})=>({name:window.atob(l),value:window.atob(m)}));s.value=J(G({},o),{tags:i})}const d=[{name:"Accept",icon:ve,run:()=>t.messageEntry.status="accepted"},{name:"Reject",icon:te,run:()=>t.messageEntry.status="rejected"}];return(o,i)=>(a(),n("div",zt,[e.messageEntry.message.method==="signTransaction"?(a(),n(x,{key:0},[v(Ve,{tx:s.value},null,8,["tx"]),v(kt,{tx:s.value},null,8,["tx"])],64)):e.messageEntry.message.method==="getPublicKey"?(a(),n(x,{key:1},[Bt],64)):e.messageEntry.message.method==="getArweaveConfig"?(a(),n(x,{key:2},[Tt],64)):e.messageEntry.message.method==="sign"?(a(),n(x,{key:3},[Lt],64)):e.messageEntry.message.method==="decrypt"?(a(),n(x,{key:4},[Mt],64)):f("",!0),v(_e,{actions:d})]))}};var Dt=g(At,[["__scopeId","data-v-237e7a02"]]);const Nt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#fff"},Wt=c("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),jt=c("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"},null,-1),Ft=[Wt,jt];function Ht(e,t){return a(),n("svg",Nt,Ft)}var Pt={render:Ht};const Ut=e=>(z("data-v-cc44a4e2"),e=e(),B(),e),Rt={class:"connection-card flex-column no-scrollbar"},qt={class:"flex-row"},Kt=["disabled"],Xt={style:{"min-width":"0"}},Yt={class:"ellipsis"},Gt={class:"secondary-text ellipsis"},Jt={class:"flex-column",style:{flex:"1 1 0"}},Ot={class:"container"},Qt={class:"container-scroll"},Zt={key:0},es={class:"box status fade-list-item",key:"0"},ts={key:1},ss=Ut(()=>c("div",{class:"box status fade-list-item",key:"0"},"WIP",-1)),as=T({props:{state:null},setup(e){var R;const t=e,s=(R=S.value[0])==null?void 0:R.id,d=h(()=>S.value.map(u=>u.key)),o=I(t.state.walletId||s);h(()=>Q(s));const i=[{name:"Requests",color:"var(--orange)"},{name:"Permissions",color:"var(--green)"}],l=I(o.value?i[0].name:null);W(()=>t.state.walletId,u=>{!u||(p.value=!1,o.value=u,l.value=i[0].name)});const m=()=>t.state.walletId=!1,M=()=>{p.value=!1,t.state.walletId=o.value+""},A=()=>{!t.state.walletId||(p.value=!1,o.value=t.state.walletId)},p=I(!t.state.walletId),F=()=>{var u;if(!p.value){p.value=!0;return}o.value=t.state.walletId||((u=S.value[0])==null?void 0:u.id),p.value=!1},H=h(()=>{var _;const u=t.state.walletId?`Switch to ${o.value}`:`Connect to ${((_=t.state.appInfo)==null?void 0:_.name)||t.state.origin} from the account ${o.value}`;return{title:t.state.walletId?"Switch":"Connect",timestamp:Date.now(),actions:[{name:"Connect",icon:ve,run:M},{name:t.state.walletId?"Cancel":"Switch",icon:te,run:t.state.walletId?A:F}],expanded:!0,content:u}}),P=h(()=>{var u;return(u=t.state.messageQueue)==null?void 0:u.filter(_=>!_.fulfilled)});$e(ee.breakpoints,"verticalLayout");const D=I(null),U=(u,_)=>u>_?D.value="slide-left":D.value="slide-right";return W(()=>i.findIndex(u=>u.name===l.value),U),W(()=>S.value.findIndex(u=>u.id===o.value),U),(u,_)=>{var q,K;return a(),n("div",Rt,[c("div",qt,[c("button",{type:"button",class:"info flex-row",onClick:_[0]||(_[0]=(...y)=>r(se)&&r(se)(...y)),disabled:!r(ae)(e.state.origin,e.state.session)},[v(re,{img:(q=e.state.appInfo)==null?void 0:q.logo,icon:r(Ce)},null,8,["img","icon"]),c("div",Xt,[c("div",Yt,w(((K=e.state.appInfo)==null?void 0:K.name)||"Connector"),1),c("div",Gt,w(e.state.origin),1)]),r(ae)(e.state.origin,e.state.session)?(a(),$(j,{key:0,icon:r(Pt)},null,8,["icon"])):f("",!0)],8,Kt),v(Fe,{modelValue:e.state.walletId,"onUpdate:modelValue":_[1]||(_[1]=y=>e.state.walletId=y),default:r(s),exit:!0,active:!p.value,onSelectWallet:F,onExit:m},null,8,["modelValue","default","active"])]),c("div",Jt,[v(Se,{tabs:i,modelValue:l.value,"onUpdate:modelValue":_[2]||(_[2]=y=>l.value=y),disabled:!o.value},null,8,["modelValue","disabled"]),c("div",Ot,[c("div",Qt,[v(we,{name:D.value,mode:"out-in"},{default:k(()=>[(a(),n("div",{key:(o.value||"")+l.value,class:"content"},[l.value==="Requests"?(a(),n("div",Zt,[v(N,{name:"fade-list"},{default:k(()=>{var y;return[p.value?(a(),$(ie,{addresses:r(d),modelValue:o.value,"onUpdate:modelValue":_[3]||(_[3]=E=>o.value=E),class:"box fade-list-item",key:"0"},null,8,["addresses","modelValue"])):f("",!0),((y=r(P))==null?void 0:y.length)===0&&e.state.walletId&&e.state.walletId===o.value?(a(),n("div",es,"Connected")):f("",!0),o.value!==e.state.walletId?(a(),$(pt,{data:r(H),class:"box fade-list-item",key:"1"},{default:k(()=>[C(w(r(H).content),1)]),_:1},8,["data"])):f("",!0),(a(!0),n(x,null,b(r(P),E=>(a(),$(Dt,{key:E.timestamp,messageEntry:E,style:{padding:"var(--spacing)"},class:"box flex-column fade-list-item"},null,8,["messageEntry"]))),128))]}),_:1})])):l.value==="Permissions"?(a(),n("div",ts,[v(N,{name:"fade-list"},{default:k(()=>[p.value?(a(),$(ie,{addresses:r(d),modelValue:o.value,"onUpdate:modelValue":_[4]||(_[4]=y=>o.value=y),class:"box fade-list-item",key:"0"},null,8,["addresses","modelValue"])):f("",!0),ss]),_:1})])):f("",!0)]))]),_:1},8,["name"])])])])])}}});var ns=g(as,[["__scopeId","data-v-cc44a4e2"]]);const os={class:"connect flex-column"},ls={class:"bottom-info secondary-text",style:{opacity:"0.0","pointer-events":"none"}},ds=T({setup(e){const t=I(ne.value.findIndex(s=>s.origin===oe.origin&&s.session===oe.session));return(s,d)=>(a(),n("div",os,[v(Me,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=o=>t.value=o),class:"connectors"},{default:k(()=>[(a(!0),n(x,null,b(r(ne),o=>(a(),n("div",{key:o.session,class:"connection-card-container fade-list-item"},[v(ns,{state:o,class:"box"},null,8,["state"])]))),128))]),_:1},8,["modelValue"]),c("div",ls,[c("div",null,"All Channels "+w(Object.keys(r(le)).length),1),(a(!0),n(x,null,b(r(le),(o,i)=>(a(),n("div",{key:i},w(o),1))),128))])]))}});var us=g(ds,[["__scopeId","data-v-cae19d9e"]]);export{us as default};
