var ve=Object.defineProperty,_e=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var H=(e,a,n)=>a in e?ve(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,L=(e,a)=>{for(var n in a||(a={}))fe.call(a,n)&&H(e,n,a[n]);if(G)for(var n of G(a))ye.call(a,n)&&H(e,n,a[n]);return e},Q=(e,a)=>_e(e,me(a));import{C as Y}from"./Carousel.2fae0c6b.js";import{X as E,e as b,o as t,c as s,u as o,P as J,q as m,D as k,a3 as ge,a4 as pe,a as y,s as I,F as C,l as O,i as xe,x as w,W as T,d as j,w as z,z as be,C as he,T as ke,a6 as M,a1 as Ie,t as Ce,ab as D,n as Z}from"./vendor.5e7c49a5.js";import{_ as B,j as W,i as ee,k as A,l as N,I as te,h as we,m as $e,T as Ve,o as Se,p as ae,q as Pe,r as R,B as Te,s as se,t as ne,v as je,w as Be,x as le,y as oe,z as ie}from"./index.5bb8cb97.js";import{I as ce}from"./y.31bda890.js";import{P as Ae}from"./ProfilePreview.769b4070.js";import{I as Ee,O as ue}from"./OverlayPrompt.a34ff4d7.js";const de=e=>(ge("data-v-7b045f16"),e=e(),pe(),e),Oe={class:"wallet-selector"},ze=de(()=>y("div",{class:"exit-background"},null,-1)),Me=de(()=>y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[y("path",{d:"M0 0h24v24H0V0z",fill:"none"}),y("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1)),We=[ze,Me],Ne=E({props:{modelValue:String,default:String,exit:Boolean,active:Boolean},emits:["update:modelValue","selectWallet","exit"],setup(e,{emit:a}){const n=e,i=b({get(){return n.modelValue||n.default},set(r){a("update:modelValue",r)}}),l=b(()=>{var r;return(r=W(i.value))==null?void 0:r.key});return(r,f)=>(t(),s("div",Oe,[o(i)?(t(),s("button",{key:0,type:"button",onClick:f[0]||(f[0]=u=>r.$emit("selectWallet")),class:J(["tab",{active:e.active}])},[m(ee,{address:o(l)},null,8,["address"])],2)):k("",!0),e.exit?(t(),s("button",{key:1,class:"exit",type:"button",onClick:f[1]||(f[1]=u=>r.$emit("exit"))},We)):k("",!0)]))}});var Re=B(Ne,[["__scopeId","data-v-7b045f16"]]);const Le={class:"wallet-tabs"},De=["onClick"],Ue=E({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:a}){const n=e,i=b({get(){return n.modelValue},set(r){a("update:modelValue",r)}}),l=b(()=>A.value.findIndex(r=>r.id===i.value));return(r,f)=>(t(),s("div",Le,[m(Y,{modelValue:o(l),"onUpdate:modelValue":f[0]||(f[0]=u=>xe(l)?l.value=u:null),options:{align:"center",overscroll:!0,immediate:!0}},{default:I(()=>[(t(!0),s(C,null,O(o(A),u=>(t(),s("button",{key:u.id,type:"button",onClick:v=>i.value=u.id,class:J(["tab",{active:u.id==o(i)}])},[m(ee,{address:u.key},null,8,["address"])],10,De))),128))]),_:1},8,["modelValue"])]))}});var qe=B(Ue,[["__scopeId","data-v-35e1b97b"]]);const Fe={class:"icon-background"},Ke={props:["icon","img"],setup(e){return(a,n)=>(t(),s("div",Fe,[e.img?(t(),w(N,{key:0,class:"page-logo",icon:e.img},null,8,["icon"])):(t(),w(N,{key:1,class:"page-logo placeholder",icon:e.icon},null,8,["icon"]))]))}};var Xe=B(Ke,[["__scopeId","data-v-7bef1ba0"]]);const Ge={class:"tx-card-extension"},He={key:0,class:"flex-row",style:{"justify-content":"space-between"}},Qe={key:0},Ye={key:1},Je={key:1,class:"tags secondary-text no-scrollbar"},Ze={props:["tx"],setup(e){return b(()=>te.breakpoints.verticalLayout),(a,n)=>(t(),s("div",Ge,[e.tx.tags.length||e.tx.data_size?(t(),s("div",He,[e.tx.tags.length?(t(),s("div",Qe,"Tags:")):k("",!0),e.tx.data_size?(t(),s("div",Ye,"Data: "+T(o(we)(e.tx.data_size)),1)):k("",!0)])):k("",!0),e.tx.tags.length?(t(),s("ul",Je,[(t(!0),s(C,null,O(e.tx.tags,i=>(t(),s("li",null,T(i.name+" | "+i.value),1))),256))])):k("",!0)]))}};var et=B(Ze,[["__scopeId","data-v-5ee7fb30"]]);const tt={class:"actions-list flex-row"},at=["onClick"],st=E({props:{actions:null},setup(e){return(a,n)=>(t(),s("div",tt,[(t(!0),s(C,null,O(e.actions,i=>(t(),s("button",{key:i.name,onClick:i.run,type:"button",class:"action flex-row"},[m(N,{icon:i.icon},null,8,["icon"]),y("div",null,T(i.name),1)],8,at))),128))]))}});var re=B(st,[["__scopeId","data-v-7477f216"]]);const nt={class:"permission-card"},lt=M(" Share the public key "),ot=M(" Share the arweave config "),it=M(" Sign data "),ct=M(" Decrypt data "),ut=E({props:{messageEntry:null},setup(e){const a=e,n=j(null),i=b(()=>{var v,h,p,$;if(((v=n.value)==null?void 0:v.method)!=="signTransaction")return;const f=(p=(h=n.value)==null?void 0:h.params)==null?void 0:p[0],u=($=f.tags)==null?void 0:$.map(({name:P,value:c})=>({name:window.atob(P),value:window.atob(c)}));return Q(L({},f),{tags:u})});z(()=>a.messageEntry,async()=>{n.value=await $e(a.messageEntry)},{immediate:!0});const l=[{name:"Accept",icon:ce,run:()=>a.messageEntry.status="accepted"},{name:"Reject",icon:Se,run:()=>a.messageEntry.status="rejected"}],r=[{name:"Pending",icon:ae,run:()=>{}}];return(f,u)=>{var v,h,p,$,P;return be((t(),s("div",nt,[((v=n.value)==null?void 0:v.method)==="signTransaction"?(t(),s(C,{key:0},[m(Ve,{tx:o(i)},null,8,["tx"]),m(et,{tx:o(i)},null,8,["tx"])],64)):((h=n.value)==null?void 0:h.method)==="getPublicKey"?(t(),s(C,{key:1},[lt],64)):((p=n.value)==null?void 0:p.method)==="getArweaveConfig"?(t(),s(C,{key:2},[ot],64)):(($=n.value)==null?void 0:$.method)==="sign"?(t(),s(C,{key:3},[it],64)):((P=n.value)==null?void 0:P.method)==="decrypt"?(t(),s(C,{key:4},[ct],64)):k("",!0),m(ke,{name:"fade",mode:"out-in"},{default:I(()=>[e.messageEntry.status?(t(),w(re,{key:1,actions:r})):(t(),w(re,{key:0,actions:l}))]),_:1})],512)),[[he,n.value]])}}});var dt=B(ut,[["__scopeId","data-v-0e1a76fc"]]);const rt={class:"flex-column no-scrollbar"},vt=["disabled","onClick"],_t=M(" Apply "),mt=E({props:{state:null,walletId:null},setup(e){const a=e,n={connect:"Connect automatically",signTransaction:"Sign transaction",getPublicKey:"Share public key",sign:"Sign arbitrary data",decrypt:"Decrypt data",getArweaveConfig:"Share arweave gateway configuration"},i=c=>Object.getOwnPropertyNames(Object.getPrototypeOf((c==null?void 0:c.messageRunner)||{})).filter(_=>{var d;return!((d=c==null?void 0:c.messageRunner.getMethodMetadata(_))==null?void 0:d.unavailable)&&_!=="constructor"&&_!=="getMethodMetadata"}).map(_=>{var d;return{name:_,displayName:n[_]||_,disabled:(d=c==null?void 0:c.messageRunner.getMethodMetadata(_))==null?void 0:d.userIntent}}),l=b(()=>W(a.walletId)),r=b(()=>[...i(l.value)]),f=c=>v.value&&(v.value[c]=!v.value[c]),u=Pe("connectionSettings:",a.state.origin,{}),v=j(void 0),h=j(void 0);z(l,c=>{var _,d,V;!(c==null?void 0:c.uuid)||((_=u.state).value||(_.value={}),h.value=(d=u.state.value)[V=c.uuid]||(d[V]={}),v.value=L({},h.value))},{immediate:!0});const p=([c,_])=>{var V;const d=((V=h.value)==null?void 0:V[c])||!1;if(_!==d)return!0},$=b(()=>v.value?Object.entries(v.value).find(p):!1),P=()=>{if(!v.value||!h.value)return!1;Object.entries(v.value).filter(p).forEach(([c,_])=>h.value&&(h.value[c]=_))};return(c,_)=>(t(),s("div",rt,[(t(!0),s(C,null,O(o(r),d=>(t(),s("button",{key:d.name,disabled:d.disabled,class:"row method",onClick:V=>f(d.name)},[y("div",null,T(d.displayName),1),m(R,{vector:v.value[d.name]?1:-1,axis:"y"},{default:I(()=>[(t(),s("div",{key:v.value[d.name]},T(v.value[d.name]?"Allow":"Ask"),1))]),_:2},1032,["vector"])],8,vt))),128)),m(R,null,{default:I(()=>[o($)?(t(),w(Te,{key:0,onClick:_[0]||(_[0]=d=>P())},{default:I(()=>[_t]),_:1})):k("",!0)]),_:1})]))}});var ft=B(mt,[["__scopeId","data-v-81b70f2e"]]);const yt={class:"connection-card flex-column no-scrollbar"},gt={class:"flex-row"},pt=["disabled"],xt={style:{"min-width":"0"}},bt={class:"ellipsis"},ht={class:"secondary-text ellipsis"},kt={class:"flex-column",style:{flex:"1 1 0"}},It={class:"container"},Ct={class:"page-container",key:"0"},wt={key:0},$t={class:"status fade-list-item",key:"1"},Vt={key:1},St=E({props:{state:null},setup(e){var q;const a=e,n=Ie(),i=(q=A.value[0])==null?void 0:q.id;b(()=>A.value.map(g=>g.key));const l=j(a.state.walletId||i),r=b(()=>W(l.value));b(()=>W(i));const f=[{name:"Requests",color:"var(--orange)"},{name:"Permissions",color:"var(--green)"}],u=j(l.value?f[0].name:null);z(()=>a.state.walletId,g=>{!g||(p.value=!1,l.value=g,u.value=f[0].name)});const v=()=>a.state.walletId=!1,h=()=>{p.value=!1,a.state.walletId=l.value+""},p=j(!a.state.walletId),$=b(()=>p.value&&A.value.length>1),P=j(0),c=()=>{var g,x;if(!p.value){p.value=!0;return}l.value!==(a.state.walletId||((g=A.value[0])==null?void 0:g.id))&&P.value++,l.value=a.state.walletId||((x=A.value[0])==null?void 0:x.id),p.value=!1},_=b(()=>({actions:[{name:a.state.walletId?"Switch":"Connect",icon:ce,run:h}],inline:!0})),d=b(()=>{var g;return l.value!==a.state.walletId?[]:(g=a.state.messageQueue)==null?void 0:g.filter(x=>!x.fulfilled)});Ce(te.breakpoints,"verticalLayout");const V=j(null),U=(g,x)=>V.value=g-x;return z(()=>f.findIndex(g=>g.name===u.value),U),z(()=>A.value.findIndex(g=>g.id===l.value),U),(g,x)=>{var F,K;return t(),s("div",yt,[y("div",gt,[y("button",{type:"button",class:"info flex-row",onClick:x[0]||(x[0]=(...S)=>o(se)&&o(se)(...S)),disabled:!o(ne)(e.state.origin,e.state.session)},[m(Xe,{img:(F=e.state.appInfo)==null?void 0:F.logo,icon:o(ae)},null,8,["img","icon"]),y("div",xt,[y("div",bt,T(((K=e.state.appInfo)==null?void 0:K.name)||"Connector"),1),y("div",ht,T(e.state.origin),1)]),o(ne)(e.state.origin,e.state.session)?(t(),w(N,{key:0,icon:o(Ee)},null,8,["icon"])):k("",!0)],8,pt),m(Re,{modelValue:e.state.walletId,"onUpdate:modelValue":x[1]||(x[1]=S=>e.state.walletId=S),default:o(i),exit:!0,active:!o($),onSelectWallet:c,onExit:v},null,8,["modelValue","default","active"])]),y("div",kt,[m(je,{tabs:f,modelValue:u.value,"onUpdate:modelValue":x[2]||(x[2]=S=>u.value=S),disabled:!l.value},null,8,["modelValue","disabled"]),y("div",It,[m(R,{vector:V.value,axis:"x"},{default:I(()=>[o(A).length?(t(),s("div",{class:"container-scroll",key:P.value},[m(D,{name:"fade-list"},{default:I(()=>[o($)?(t(),w(qe,{modelValue:l.value,"onUpdate:modelValue":x[3]||(x[3]=S=>l.value=S),class:"fade-list-item",key:"-1"},null,8,["modelValue"])):k("",!0),y("div",Ct,[m(R,{vector:V.value,axis:"x"},{default:I(()=>[(t(),s("div",{key:(l.value||"")+u.value,class:"content"},[u.value==="Requests"?(t(),s("div",wt,[m(D,{name:"fade-list"},{default:I(()=>{var S;return[y("div",{class:"fade-list-item",key:"0",style:Z({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),((S=o(d))==null?void 0:S.length)===0&&e.state.walletId&&e.state.walletId===l.value?(t(),s("div",$t,"Connected")):k("",!0),l.value!==e.state.walletId?(t(),w(ue,{options:o(_),class:"fade-list-item",key:"2"},{default:I(()=>[o(r)?(t(),w(Ae,{key:0,wallet:o(r)},null,8,["wallet"])):k("",!0)]),_:1},8,["options"])):k("",!0),(t(!0),s(C,null,O(o(d),X=>(t(),w(dt,{key:X.uuid,messageEntry:X,style:{padding:"var(--spacing)"},class:"flex-column fade-list-item"},null,8,["messageEntry"]))),128))]}),_:1})])):u.value==="Permissions"?(t(),s("div",Vt,[m(D,{name:"fade-list"},{default:I(()=>[y("div",{class:"fade-list-item",key:"0",style:Z({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),m(ft,{state:e.state,walletId:l.value,class:"fade-list-item",key:"2"},null,8,["state","walletId"])]),_:1})])):k("",!0)]))]),_:1},8,["vector"])])]),_:1})])):(t(),w(ue,{key:0,options:{action:{icon:o(Be),name:"Add wallet",run:()=>o(n).push("/add")}}},null,8,["options"]))]),_:1},8,["vector"])])])])}}});var Pt=B(St,[["__scopeId","data-v-2260253c"]]);const Tt={class:"connect flex-column"},jt={class:"bottom-info secondary-text",style:{opacity:"0.0","pointer-events":"none"}},Bt=E({setup(e){const a=j(le.value.findIndex(n=>n.origin===oe.origin&&n.session===oe.session));return(n,i)=>(t(),s("div",Tt,[m(Y,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=l=>a.value=l),options:{align:"start",overscroll:!0},class:"connectors"},{default:I(()=>[(t(!0),s(C,null,O(o(le),l=>(t(),s("div",{key:l.session,class:"connection-card-container fade-list-item"},[m(Pt,{state:l,class:"box"},null,8,["state"])]))),128))]),_:1},8,["modelValue"]),y("div",jt,[y("div",null,"All Channels "+T(Object.keys(o(ie)).length),1),(t(!0),s(C,null,O(o(ie),(l,r)=>(t(),s("div",{key:r},T(l),1))),128))])]))}});var Rt=B(Bt,[["__scopeId","data-v-7c3f5fef"]]);export{Rt as default};
//# sourceMappingURL=Connect.aeb58cff.js.map