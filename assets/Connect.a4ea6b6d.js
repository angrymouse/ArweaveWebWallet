import{C as U,L as ce}from"./ListContainer.05d015f2.js";import{Y as j,e as y,o as e,c as a,u as n,Q as F,s as c,E as g,a4 as K,a5 as q,a as v,x as p,F as k,n as B,i as de,y as b,X as S,d as V,w as A,C as re,D as ve,T as _e,a7 as E,a2 as me,k as fe,ac as W,p as Q}from"./vendor.2dccf4db.js";import{_ as P,j as z,i as X,k as T,l as N,I as Y,h as ye,m as ge,T as G,o as pe,p as H,q as xe,r as R,B as he,s as J,t as Z,v as ke,w as be,x as ee,y as te,z as ae}from"./index.11a3337c.js";import{I as se}from"./y.13c2aaa9.js";import{P as we}from"./ProfilePreview.8caf6a4e.js";import{I as Ie,O as ne}from"./OverlayPrompt.f6991f69.js";const le=t=>(K("data-v-7b045f16"),t=t(),q(),t),$e={class:"wallet-selector"},Ce=le(()=>v("div",{class:"exit-background"},null,-1)),Se=le(()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[v("path",{d:"M0 0h24v24H0V0z",fill:"none"}),v("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1)),Ve=[Ce,Se],Pe=j({props:{modelValue:String,default:String,exit:Boolean,active:Boolean},emits:["update:modelValue","selectWallet","exit"],setup(t,{emit:l}){const i=t,o=y({get(){return i.modelValue||i.default},set(d){l("update:modelValue",d)}}),s=y(()=>z(o.value)?.key);return(d,r)=>(e(),a("div",$e,[n(o)?(e(),a("button",{key:0,type:"button",onClick:r[0]||(r[0]=u=>d.$emit("selectWallet")),class:F(["tab",{active:t.active}])},[c(X,{address:n(s)},null,8,["address"])],2)):g("",!0),t.exit?(e(),a("button",{key:1,class:"exit",type:"button",onClick:r[1]||(r[1]=u=>d.$emit("exit"))},Ve)):g("",!0)]))}});var Te=P(Pe,[["__scopeId","data-v-7b045f16"]]);const je={class:"wallet-tabs"},Be=["onClick"],Ae=j({props:["modelValue"],emits:["update:modelValue"],setup(t,{emit:l}){const i=t,o=y({get(){return i.modelValue},set(d){l("update:modelValue",d)}}),s=y(()=>T.value.findIndex(d=>d.id===o.value));return(d,r)=>(e(),a("div",je,[c(U,{modelValue:n(s),"onUpdate:modelValue":r[0]||(r[0]=u=>de(s)?s.value=u:null),options:{align:"center",overscroll:!0,immediate:!0}},{default:p(()=>[(e(!0),a(k,null,B(n(T),u=>(e(),a("button",{key:u.id,type:"button",onClick:m=>o.value=u.id,class:F(["tab",{active:u.id==n(o)}])},[c(X,{address:u.key},null,8,["address"])],10,Be))),128))]),_:1},8,["modelValue"])]))}});var Ee=P(Ae,[["__scopeId","data-v-35e1b97b"]]);const Oe={class:"icon-background"},Le={props:["icon","img"],setup(t){return(l,i)=>(e(),a("div",Oe,[t.img?(e(),b(N,{key:0,class:"page-logo",icon:t.img},null,8,["icon"])):(e(),b(N,{key:1,class:"page-logo placeholder",icon:t.icon},null,8,["icon"]))]))}};var Me=P(Le,[["__scopeId","data-v-7bef1ba0"]]);const ze={class:"tx-card-extension"},Ne={key:0,class:"flex-row",style:{"justify-content":"space-between"}},Re={key:0},We={key:1},De={key:1,class:"tags secondary-text no-scrollbar"},Ue={props:["tx"],setup(t){return y(()=>Y.breakpoints.verticalLayout),(l,i)=>(e(),a("div",ze,[t.tx.tags.length||t.tx.data_size?(e(),a("div",Ne,[t.tx.tags.length?(e(),a("div",Re,"Tags:")):g("",!0),t.tx.data_size?(e(),a("div",We,"Data: "+S(n(ye)(t.tx.data_size)),1)):g("",!0)])):g("",!0),t.tx.tags.length?(e(),a("ul",De,[(e(!0),a(k,null,B(t.tx.tags,o=>(e(),a("li",null,S(o.name+" | "+o.value),1))),256))])):g("",!0)]))}};var oe=P(Ue,[["__scopeId","data-v-5ee7fb30"]]);const Fe={class:"actions-list flex-row"},Ke=["onClick"],qe=j({props:{actions:null},setup(t){return(l,i)=>(e(),a("div",Fe,[(e(!0),a(k,null,B(t.actions,o=>(e(),a("button",{key:o.name,onClick:o.run,type:"button",class:"action flex-row"},[c(N,{icon:o.icon},null,8,["icon"]),v("div",null,S(o.name),1)],8,Ke))),128))]))}});var ie=P(qe,[["__scopeId","data-v-7477f216"]]);const ue=t=>(K("data-v-376d6024"),t=t(),q(),t),Qe={class:"permission-card"},Xe=ue(()=>v("span",null,"Sign transaction",-1)),Ye=ue(()=>v("span",null,"Sign transaction and upload",-1)),Ge=E(" Share the public key "),He=E(" Share the arweave config "),Je=E(" Sign data "),Ze=E(" Decrypt data "),et=j({props:{messageEntry:null},setup(t){const l=t,i=V(null),o=y(()=>{if(i.value?.method!=="signTransaction"&&i.value?.method!=="dispatch")return;const r=i.value?.params?.[0],u=r.tags?.map(({name:m,value:w})=>({name:window.atob(m),value:window.atob(w)}));return{...r,tags:u}});A(()=>l.messageEntry,async()=>{i.value=await ge(l.messageEntry)},{immediate:!0});const s=[{name:"Accept",icon:se,run:()=>l.messageEntry.status="accepted"},{name:"Reject",icon:pe,run:()=>l.messageEntry.status="rejected"}],d=[{name:"Pending",icon:H,run:()=>{}}];return(r,u)=>re((e(),a("div",Qe,[i.value?.method==="signTransaction"?(e(),a(k,{key:0},[Xe,c(G,{tx:n(o)},null,8,["tx"]),c(oe,{tx:n(o)},null,8,["tx"])],64)):g("",!0),i.value?.method==="dispatch"?(e(),a(k,{key:1},[Ye,c(G,{tx:n(o)},null,8,["tx"]),c(oe,{tx:n(o)},null,8,["tx"])],64)):i.value?.method==="getPublicKey"?(e(),a(k,{key:2},[Ge],64)):i.value?.method==="getArweaveConfig"?(e(),a(k,{key:3},[He],64)):i.value?.method==="sign"?(e(),a(k,{key:4},[Je],64)):i.value?.method==="decrypt"?(e(),a(k,{key:5},[Ze],64)):g("",!0),c(_e,{name:"fade",mode:"out-in"},{default:p(()=>[t.messageEntry.status?(e(),b(ie,{key:1,actions:d})):(e(),b(ie,{key:0,actions:s}))]),_:1})],512)),[[ve,i.value]])}});var tt=P(et,[["__scopeId","data-v-376d6024"]]);const at={class:"flex-column no-scrollbar"},st=["disabled","onClick"],nt=E(" Apply "),lt=j({props:{state:null,walletId:null},setup(t){const l=t,i={connect:"Connect automatically",signTransaction:"Sign transaction",getPublicKey:"Share public key",sign:"Sign arbitrary data",decrypt:"Decrypt data",getArweaveConfig:"Share arweave gateway configuration"},o=f=>Object.getOwnPropertyNames(Object.getPrototypeOf(f?.messageRunner||{})).filter(_=>!f?.messageRunner.getMethodMetadata(_)?.unavailable&&_!=="constructor"&&_!=="getMethodMetadata").map(_=>({name:_,displayName:i[_]||_,disabled:f?.messageRunner.getMethodMetadata(_)?.userIntent})),s=y(()=>z(l.walletId)),d=y(()=>[...o(s.value)]),r=f=>m.value&&(m.value[f]=!m.value[f]),u=xe("connectionSettings:",l.state.origin,{}),m=V(void 0),w=V(void 0);A(s,f=>{!f?.uuid||(u.state.value||={},w.value=u.state.value[f.uuid]||={},m.value={...w.value})},{immediate:!0});const C=([f,_])=>{const x=w.value?.[f]||!1;if(_!==x)return!0},O=y(()=>m.value?Object.entries(m.value).find(C):!1),L=()=>{if(!m.value||!w.value)return!1;Object.entries(m.value).filter(C).forEach(([f,_])=>w.value&&(w.value[f]=_))};return(f,_)=>(e(),a("div",at,[(e(!0),a(k,null,B(n(d),x=>(e(),a("button",{key:x.name,disabled:x.disabled,class:"row method",onClick:M=>r(x.name)},[v("div",null,S(x.displayName),1),c(R,{vector:m.value[x.name]?1:-1,axis:"y"},{default:p(()=>[(e(),a("div",{key:m.value[x.name]},S(m.value[x.name]?"Allow":"Ask"),1))]),_:2},1032,["vector"])],8,st))),128)),c(R,null,{default:p(()=>[n(O)?(e(),b(he,{key:0,onClick:_[0]||(_[0]=x=>L())},{default:p(()=>[nt]),_:1})):g("",!0)]),_:1})]))}});var ot=P(lt,[["__scopeId","data-v-81b70f2e"]]);const it={class:"flex-row"},ut=["disabled"],ct={style:{"min-width":"0"}},dt={class:"ellipsis"},rt={class:"secondary-text ellipsis"},vt={class:"page-container",key:"0"},_t={key:0},mt={class:"status fade-list-item",key:"1"},ft={key:1},yt=j({props:{state:null},setup(t){const l=t,i=me(),o=T.value[0]?.id;y(()=>T.value.map(h=>h.key));const s=V(l.state.walletId||o),d=y(()=>z(s.value));y(()=>z(o));const r=[{name:"Requests",color:"var(--orange)"},{name:"Permissions",color:"var(--green)"}],u=V(s.value?r[0].name:null);A(()=>l.state.walletId,h=>{!h||(C.value=!1,s.value=h,u.value=r[0].name)});const m=()=>l.state.walletId=!1,w=()=>{C.value=!1,l.state.walletId=s.value+""},C=V(!l.state.walletId),O=y(()=>C.value&&T.value.length>1),L=V(0),f=()=>{if(!C.value){C.value=!0;return}s.value!==(l.state.walletId||T.value[0]?.id)&&L.value++,s.value=l.state.walletId||T.value[0]?.id,C.value=!1},_=y(()=>({actions:[{name:l.state.walletId?"Switch":"Connect",icon:se,run:w}],inline:!0})),x=y(()=>s.value!==l.state.walletId?[]:l.state.messageQueue?.filter(h=>!h.fulfilled));fe(Y.breakpoints,"verticalLayout");const M=V(null),D=(h,I)=>M.value=h-I;return A(()=>r.findIndex(h=>h.name===u.value),D),A(()=>T.value.findIndex(h=>h.id===s.value),D),(h,I)=>(e(),b(ce,{class:"connection-card flex-column no-scrollbar"},{header:p(()=>[v("div",it,[v("button",{type:"button",class:"info flex-row",onClick:I[0]||(I[0]=(...$)=>n(J)&&n(J)(...$)),disabled:!n(Z)(t.state.origin,t.state.session)},[c(Me,{img:t.state.appInfo?.logo,icon:n(H)},null,8,["img","icon"]),v("div",ct,[v("div",dt,S(t.state.appInfo?.name||"Connector"),1),v("div",rt,S(t.state.origin),1)]),n(Z)(t.state.origin,t.state.session)?(e(),b(N,{key:0,icon:n(Ie)},null,8,["icon"])):g("",!0)],8,ut),c(Te,{modelValue:t.state.walletId,"onUpdate:modelValue":I[1]||(I[1]=$=>t.state.walletId=$),default:n(o),exit:!0,active:!n(O),onSelectWallet:f,onExit:m},null,8,["modelValue","default","active"])]),c(ke,{tabs:r,modelValue:u.value,"onUpdate:modelValue":I[2]||(I[2]=$=>u.value=$),disabled:!s.value},null,8,["modelValue","disabled"])]),default:p(()=>[c(R,{vector:M.value,axis:"x"},{default:p(()=>[n(T).length?(e(),a("div",{class:"container-scroll",key:L.value},[c(W,{name:"fade-list"},{default:p(()=>[n(O)?(e(),b(Ee,{modelValue:s.value,"onUpdate:modelValue":I[3]||(I[3]=$=>s.value=$),class:"fade-list-item",key:"-1"},null,8,["modelValue"])):g("",!0),v("div",vt,[c(R,{vector:M.value,axis:"x"},{default:p(()=>[(e(),a("div",{key:(s.value||"")+u.value,class:"content"},[u.value==="Requests"?(e(),a("div",_t,[c(W,{name:"fade-list"},{default:p(()=>[v("div",{class:"fade-list-item",key:"0",style:Q({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),n(x)?.length===0&&t.state.walletId&&t.state.walletId===s.value?(e(),a("div",mt,"Connected")):g("",!0),s.value!==t.state.walletId?(e(),b(ne,{options:n(_),class:"fade-list-item",key:"2"},{default:p(()=>[n(d)?(e(),b(we,{key:0,wallet:n(d)},null,8,["wallet"])):g("",!0)]),_:1},8,["options"])):g("",!0),(e(!0),a(k,null,B(n(x),$=>(e(),b(tt,{key:$.uuid,messageEntry:$,style:{padding:"var(--spacing)"},class:"flex-column fade-list-item"},null,8,["messageEntry"]))),128))]),_:1})])):u.value==="Permissions"?(e(),a("div",ft,[c(W,{name:"fade-list"},{default:p(()=>[v("div",{class:"fade-list-item",key:"0",style:Q({padding:0,border:0,outline:"0.5px solid var(--border)"})},null,4),c(ot,{state:t.state,walletId:s.value,class:"fade-list-item",key:"2"},null,8,["state","walletId"])]),_:1})])):g("",!0)]))]),_:1},8,["vector"])])]),_:1})])):(e(),b(ne,{key:0,options:{action:{icon:n(be),name:"Add wallet",run:()=>n(i).push("/add")}}},null,8,["options"]))]),_:1},8,["vector"])]),_:1}))}});var gt=P(yt,[["__scopeId","data-v-1185fab6"]]);const pt={class:"connect flex-column"},xt={class:"bottom-info secondary-text",style:{opacity:"0.0","pointer-events":"none"}},ht=j({setup(t){const l=V(ee.value.findIndex(i=>i.origin===te.origin&&i.session===te.session));return(i,o)=>(e(),a("div",pt,[c(U,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=s=>l.value=s),options:{align:"start",overscroll:!0},class:"connectors"},{default:p(()=>[(e(!0),a(k,null,B(n(ee),s=>(e(),a("div",{key:s.session,class:"connection-card-container fade-list-item"},[c(gt,{state:s,class:"box"},null,8,["state"])]))),128))]),_:1},8,["modelValue"]),v("div",xt,[v("div",null,"All Channels "+S(Object.keys(n(ae)).length),1),(e(!0),a(k,null,B(n(ae),(s,d)=>(e(),a("div",{key:d},S(s),1))),128))])]))}});var St=P(ht,[["__scopeId","data-v-2d1eb42c"]]);export{St as default};
//# sourceMappingURL=Connect.a4ea6b6d.js.map
