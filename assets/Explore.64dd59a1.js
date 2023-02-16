import{_ as k,d as x,o as l,g as c,b as e,q as o,a2 as E,a3 as P,a4 as U,c as r,a5 as D,X as W,a6 as $,l as p,u as a,a7 as j,a8 as G,w as h,x as y,L as B,T as q,v as L,V as z,W as Q,a9 as F,r as N,aa as H,p as M,a as X,ab as T,ac as V,t as d,R,ad as Z,e as J,ae as K,af as O,k as Y,Q as f,$ as ee,Z as ae,B as te,ag as se,h as A,A as S,ah as oe,ai as I,S as ne}from"./index.7ba8413b.js";const le={class:"profile-card flex-row row",style:{"align-items":"center"}},re={class:"address-icon-margin"},ce=x({props:{wallet:null},setup(n){return(t,s)=>(l(),c("div",le,[e("div",re,[o(E,{address:n.wallet.key},null,8,["address"])]),o(P,{wallet:n.wallet},null,8,["wallet"])]))}});var ie=k(ce,[["__scopeId","data-v-1c417b52"]]);const C=n=>(z("data-v-028f3d64"),n=n(),Q(),n),de={class:"global-search"},ue={class:"input-container"},ve={key:0,class:"results input-box"},_e={class:"query-list input-box flex-column"},pe={key:0,class:"flex-column"},he=C(()=>e("div",{class:"secondary-text"},"User",-1)),me=C(()=>e("div",null,null,-1)),ge=C(()=>e("div",{class:"secondary-text"},"Transactions",-1)),fe=x({setup(n){const t=U("",1e3),s=r(()=>D.metadata.isAddress(t.value)),u={run:()=>{},icon:F},i=r(()=>s.value&&_?.state?.value?.length&&W(t.value)),_=$([p(r(()=>s.value?{owners:[t.value]}:void 0),"global search user"),p(r(()=>s.value?{recipients:[t.value]}:void 0),"global search user")]),m=$([p(r(()=>s.value?void 0:{tags:[{name:"App-Name",values:["arweave-id"]},{name:"Name",values:[t.value]}]})),p(r(()=>s.value?void 0:{tags:[{name:"App-Name",values:[t.value]}]})),p(r(()=>!s.value&&t.value.toLowerCase()!==t.value?{tags:[{name:"App-Name",values:[t.value.toLowerCase()]}]}:void 0))]),w=$([p(r(()=>s.value?{ids:[t.value]}:void 0)),_,m]);return(v,g)=>(l(),c("div",de,[e("div",ue,[o(G,{modelValue:a(t),"onUpdate:modelValue":g[0]||(g[0]=b=>j(t)?t.value=b:null),actions:[u],placeholder:"Search - address, transaction id, username, app name",style:{flex:"1 1 0"}},null,8,["modelValue","actions"])]),o(L,null,{default:h(()=>[a(t).length?(l(),c("div",ve,[e("div",_e,[a(i)?(l(),c("div",pe,[he,o(ie,{wallet:a(i),compact:"true"},null,8,["wallet"]),me])):y("",!0),ge,o(B,{query:a(w),component:q,"component-props":{options:{currentAddress:a(i)?.key}}},null,8,["query","component-props"])])])):y("",!0)]),_:1})]))}});var ye=k(fe,[["__scopeId","data-v-028f3d64"]]);const xe={class:"flex-row",style:{"align-items":"center","justify-content":"space-between","flex-wrap":"wrap"}},we={class:"flex-row",style:{"align-items":"center"}},be={key:0,style:{"text-align":"end",flex:"1 1 auto"}},ke={key:0,class:"container-scroll"},$e=x({props:{block:null},setup(n){const t=n,s=N(!1),u=p({block:{min:t.block.node.height,max:t.block.node.height}}),i=H({name:"single block header",awaitEffect:()=>s.value,query:async()=>M.blocks.get(t.block.node.id),seconds:10,completed:_=>_}).state;return(_,m)=>(l(),X(K,{class:"block-card"},{header:h(()=>[o(J,{onIntersection:m[0]||(m[0]=w=>s.value=!0),threshold:.5},{default:h(()=>[e("div",xe,[e("h2",we,[o(T,{icon:a(V),style:{"font-size":"1.5em",color:"var(--orange)"}},null,8,["icon"]),e("span",null,"Block "+d(n.block.node.height),1)]),o(L,null,{default:h(()=>[a(i)?(l(),c("div",be,[e("div",null,d(a(i).txs?.length)+" Transactions | "+d(a(R)(a(i).block_size)),1),e("div",null,[o(Z,{timestamp:a(i).timestamp*1e3},null,8,["timestamp"])])])):y("",!0)]),_:1})])]),_:1},8,["threshold"])]),default:h(()=>[s.value?(l(),c("div",ke,[o(B,{query:a(u),component:q,componentProps:{options:{space:!0}}},null,8,["query"])])):y("",!0)]),_:1}))}});var Ie=k($e,[["__scopeId","data-v-5e1eea52"]]);const Se={class:"block-carousel"},Ae={key:0,class:"block fade-list-item box flex-column",style:{"align-items":"center","justify-content":"center"}},Ce=A("Mine new block"),Be=x({setup(n){const t=N(void 0),s=O({}),u=r(()=>s.state.value&&[...s.state.value].reverse());Y(u,(v,g)=>!g?.length&&v?.length&&(t.value=v.length-1));const i=r(()=>f.value?.network?.includes("arlocal")),_=async()=>{await fetch(S.gatewayURL+"mine"),await s.updateQuery.getState(!0),setTimeout(()=>t.value=u.value.length-1,500)},m=v=>v.isIntersecting&&s?.fetchQuery.query(),w=v=>v.isIntersecting;return(v,g)=>(l(),c("div",Se,[o(se,{index:t.value,options:{align:"center",overscroll:!0,immediate:!0},onStart:m,onEnd:w,class:"block-carousel"},{default:h(()=>[(l(!0),c(ee,null,ae(a(u),b=>(l(),c("div",{key:b.node.id,class:"block fade-list-item"},[o(Ie,{block:b,class:"box"},null,8,["block"])]))),128)),a(i)&&a(u).length?(l(),c("div",Ae,[o(T,{icon:a(V),style:{"font-size":"4em",opacity:"0.8"}},null,8,["icon"]),o(te,{onClick:_},{default:h(()=>[Ce]),_:1})])):y("",!0)]),_:1},8,["index"])]))}});const qe=n=>(z("data-v-40de1e72"),n=n(),Q(),n),Le={class:"settings"},ze={class:"container"},Qe={class:"column"},Ne={class:"group"},Te={style:{"text-transform":"capitalize"}},Ve=A(" Gateway State"),Re={class:"flex-column"},Ee={class:"group"},Pe=qe(()=>e("h2",null,"Weave State",-1)),Ue={class:"flex-column"},De=A("Endowment Pool: "),We=x({setup(n){const t=r(()=>S.gatewayURL&&new URL(S.gatewayURL).hostname);return(s,u)=>(l(),c("div",Le,[e("div",ze,[e("div",Qe,[o(ye),e("div",Ne,[e("h2",null,[e("span",Te,d(a(t)),1),Ve]),e("div",Re,[e("div",null,"Peers: "+d(a(f)?.peers??"..."),1),e("div",null,"Queue: "+d(a(f)?.queue_length??"..."),1),e("div",null,"State Latency: "+d(a(f)?.node_state_latency??"..."),1),e("div",null,"Pending Transactions: "+d(a(oe)?.length??"..."),1)])]),e("div",Ee,[Pe,e("div",Ue,[e("div",null,"Network Height: "+d(a(f)?.height??"..."),1),e("div",null,"Weave Size: "+d(a(I)?.weave_size&&a(R)(a(I)?.weave_size)||"..."),1),e("div",null,[De,o(ne,{winston:a(I)?.reward_pool},null,8,["winston"])])])])])]),o(Be)]))}});var Ge=k(We,[["__scopeId","data-v-40de1e72"]]);export{Ge as default};
//# sourceMappingURL=Explore.64dd59a1.js.map