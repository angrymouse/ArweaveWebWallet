import{_ as x,i as N,W as G,g as R,D as f,E as C,G as U,T as Q,r as B,H as W,l as A,a as L,J as F,b as j,K as H,h as V,L as O,M as J,A as K,n as k,N as M,O as b,e as X}from"./index.7bcee040.js";import{Y as y,o as c,c as i,a as t,s as n,an as Y,e as m,d as $,w as P,u as s,i as Z,x as h,E as g,F as I,n as q,a3 as T,a4 as z,y as D,a9 as ee,a2 as te,ac as se,C as ae,D as ne,X as p,a7 as E}from"./vendor.284ce6b0.js";import{L as oe,C as le}from"./ListContainer.2738fa1f.js";const ce={class:"profile-card flex-row row",style:{"align-items":"center"}},re={class:"address-icon-margin"},ue=y({props:{wallet:null},setup(a){return(e,o)=>(c(),i("div",ce,[t("div",re,[n(N,{address:a.wallet.key},null,8,["address"])]),n(G,{wallet:a.wallet},null,8,["wallet"])]))}});var ie=x(ue,[["__scopeId","data-v-1c417b52"]]);function de(a,e=200){let o;return Y((v,l)=>({get(){return v(),a},set(r){clearTimeout(o),o=setTimeout(()=>{a=r,l()},e)}}))}const S=a=>(T("data-v-05455a2d"),a=a(),z(),a),_e={class:"global-search"},ve={class:"input-container"},pe={key:0,class:"results input-box"},he={class:"query-list input-box flex-column"},me={key:0,class:"flex-column"},ye=S(()=>t("div",{class:"secondary-text"},"User",-1)),fe=S(()=>t("div",null,null,-1)),ge=S(()=>t("div",{class:"secondary-text"},"Transactions",-1)),xe=y({setup(a){const e=de(""),o=m(()=>e.value.match(/^[a-z0-9_-]{43}$/i)),v={run:()=>{},icon:W};let l;const r=$({}),u=m(()=>o.value&&!r.value.idQuery?.state?.length&&R(e.value));return P(e,()=>{if(l=void 0,r.value={},o.value){const d=f({ids:[e.value]});r.value.idQuery=d,l=C([d,f({owners:[e.value]}),f({recipients:[e.value]})])}else e.value.length&&(l=C([f({tags:[{name:"App-Name",values:["arweave-id"]},{name:"Name",values:[e.value]}]})]));r.value.query=l?.state,l?.fetchQuery.query()}),(d,_)=>(c(),i("div",_e,[t("div",ve,[n(U,{modelValue:s(e),"onUpdate:modelValue":_[0]||(_[0]=w=>Z(e)?e.value=w:null),actions:[v],placeholder:"Search - username, address, transaction id",style:{flex:"1 1 0"}},null,8,["modelValue","actions"])]),n(B,null,{default:h(()=>[r.value.query?.length?(c(),i("div",pe,[t("div",he,[s(u)?(c(),i("div",me,[ye,n(ie,{wallet:s(u),compact:"true"},null,8,["wallet"]),fe])):g("",!0),ge,(c(!0),i(I,null,q(r.value.query,w=>(c(),i("div",{key:w,class:"result"},[n(Q,{tx:w.node,options:{currentAddress:s(u)?.key}},null,8,["tx","options"])]))),128))])])):g("",!0)]),_:1})]))}});var we=x(xe,[["__scopeId","data-v-05455a2d"]]);const ke={class:"list flex-column"},be={key:0,class:"loader-container"},$e=y({props:{query:null,component:null,componentProps:null,options:null},setup(a){const e=a,o=m(()=>e.query.fetchQuery.queryStatus.running),v=m(()=>e.query.updateQuery.state.value||[]),l=m(()=>e.query.status?.completed),r=()=>e.query.fetchQuery.query();return(u,d)=>(c(),i("div",ke,[n(se,{name:"fade-list-rise"},{default:h(()=>[(c(!0),i(I,null,q(s(v),_=>(c(),D(te(a.component),ee({tx:_.node,key:_.node.id},a.componentProps,{class:"fade-list-item"}),null,16,["tx"]))),128))]),_:1}),s(l)?g("",!0):(c(),i("div",be,[n(A,{icon:"loader"})])),ae(n(L,{observe:"intersection",onIntersection:d[0]||(d[0]=_=>_.isIntersecting&&r()),class:"bottom"},null,512),[[ne,!s(o)&&!s(l)]])]))}});var Ie=x($e,[["__scopeId","data-v-7bb91364"]]);const qe={class:"flex-row",style:{"align-items":"center","justify-content":"space-between","flex-wrap":"wrap"}},Se={class:"flex-row",style:{"align-items":"center"}},Ce={key:0,style:{"text-align":"end"}},Qe={key:0,class:"container-scroll"},Be=y({props:{block:null},setup(a){const e=a,o=$(!1),v=f({block:{min:e.block.node.height,max:e.block.node.height}}),l=F({awaitEffect:()=>o.value,query:async()=>j.blocks.get(e.block.node.id),seconds:10,completed:r=>r}).state;return(r,u)=>(c(),D(oe,{class:"block-card"},{header:h(()=>[n(L,{onIntersection:u[0]||(u[0]=d=>o.value=!0),threshold:.5},{default:h(()=>[t("div",qe,[t("h2",Se,[n(A,{icon:s(H),style:{"font-size":"1.5em",color:"var(--orange)"}},null,8,["icon"]),t("span",null,"Block "+p(a.block.node.height),1)]),n(B,null,{default:h(()=>[s(l)?(c(),i("div",Ce,[t("div",null,p(s(l).txs?.length)+" Transactions | "+p(s(V)(s(l).block_size)),1),t("div",null,[n(O,{timestamp:s(l).timestamp*1e3},null,8,["timestamp"])])])):g("",!0)]),_:1})])]),_:1},8,["threshold"])]),default:h(()=>[o.value?(c(),i("div",Qe,[n(Ie,{query:s(v),component:Q,componentProps:{options:{space:!0}}},null,8,["query"])])):g("",!0)]),_:1}))}});var Ae=x(Be,[["__scopeId","data-v-74d76aca"]]);const Le={class:"block-carousel"},Ve=y({setup(a){const e=$(void 0),o=J({}),v=m(()=>o.state.value&&[...o.state.value].reverse());P(v,(u,d)=>!d?.length&&u?.length&&(e.value=u.length-1)),o?.fetchQuery.query();const l=u=>u.isIntersecting&&o?.fetchQuery.query(),r=u=>u.isIntersecting;return(u,d)=>(c(),i("div",Le,[n(le,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=_=>e.value=_),options:{align:"center",overscroll:!0},onStart:l,onEnd:r,class:"block-carousel"},{default:h(()=>[(c(!0),i(I,null,q(s(v),_=>(c(),i("div",{key:_.node.id,class:"block fade-list-item"},[n(Ae,{block:_,class:"box"},null,8,["block"])]))),128))]),_:1},8,["modelValue"])]))}});const Pe=a=>(T("data-v-0717073c"),a=a(),z(),a),Te={class:"settings"},ze={class:"container"},De={class:"column"},Ee={class:"group"},Ne={style:{"text-transform":"capitalize"}},Ge=E(" Gateway State"),Re={class:"flex-column"},Ue={class:"group"},We=Pe(()=>t("h2",null,"Weave State",-1)),Fe={class:"flex-column"},je=E("Endowment Pool: "),He=y({setup(a){return(e,o)=>(c(),i("div",Te,[t("div",ze,[t("div",De,[n(we),t("div",Ee,[t("h2",null,[t("span",Ne,p(s(K).gatewayURLObject.hostname),1),Ge]),t("div",Re,[t("div",null,"Peers: "+p(s(k)?.peers??"..."),1),t("div",null,"Queue: "+p(s(k)?.queue_length??"..."),1),t("div",null,"State Latency: "+p(s(k)?.node_state_latency??"..."),1),t("div",null,"Pending Transactions: "+p(s(M)?.length??"..."),1)])]),t("div",Ue,[We,t("div",Fe,[t("div",null,"Network Height: "+p(s(k)?.height??"..."),1),t("div",null,"Weave Size: "+p(s(b)?.weave_size&&s(V)(s(b)?.weave_size)||"..."),1),t("div",null,[je,n(X,{winston:s(b)?.reward_pool},null,8,["winston"])])])])])]),n(Ve)]))}});var Me=x(He,[["__scopeId","data-v-0717073c"]]);export{Me as default};
//# sourceMappingURL=Explore.de2a528f.js.map