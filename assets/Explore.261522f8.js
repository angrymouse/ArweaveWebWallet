import{_ as x,m as T,W as P,l as R,H as k,d as m,J as E,c as S,T as A,b as q,K as U,M as D,e as H,o as W,N as F,i as B,O as G,a as j,P as J,n as g,Q as K,R as b,j as M,A as C}from"./index.3d0616b9.js";import{p as f,o as r,c as d,a as s,y as l,an as O,e as i,u as t,i as Y,z as h,H as w,a3 as L,a4 as N,d as V,C as X,Y as u,w as Z,F as ee,q as se,a7 as z}from"./vendor.5d376ebc.js";import{L as te,C as ae}from"./ListContainer.984039be.js";const oe={class:"profile-card flex-row row",style:{"align-items":"center"}},le={class:"address-icon-margin"},ne=f({props:{wallet:null},setup(o){return(e,a)=>(r(),d("div",oe,[s("div",le,[l(T,{address:o.wallet.key},null,8,["address"])]),l(P,{wallet:o.wallet},null,8,["wallet"])]))}});var ce=x(ne,[["__scopeId","data-v-1c417b52"]]);function re(o,e=200){let a;return O((_,n)=>({get(){return _(),o},set(v){clearTimeout(a),a=setTimeout(()=>{o=v,n()},e)}}))}const $=o=>(L("data-v-92b4291a"),o=o(),N(),o),ie={class:"global-search"},ue={class:"input-container"},de={key:0,class:"results input-box"},_e={class:"query-list input-box flex-column"},ve={key:0,class:"flex-column"},pe=$(()=>s("div",{class:"secondary-text"},"User",-1)),me=$(()=>s("div",null,null,-1)),he=$(()=>s("div",{class:"secondary-text"},"Transactions",-1)),ye=f({setup(o){const e=re("",1e3),a=i(()=>e.value.match(/^[a-z0-9_-]{43}$/i)),_={run:()=>{},icon:U},n=i(()=>a.value&&v?.state?.value?.length&&R(e.value)),v=k([m(i(()=>a.value?{owners:[e.value]}:void 0),"global search user"),m(i(()=>a.value?{recipients:[e.value]}:void 0),"global search user")]),c=k([m(i(()=>a.value?void 0:{tags:[{name:"App-Name",values:["arweave-id"]},{name:"Name",values:[e.value]}]})),m(i(()=>a.value?void 0:{tags:[{name:"App-Name",values:[e.value]}]})),m(i(()=>!a.value&&e.value.toLowerCase()!==e.value?{tags:[{name:"App-Name",values:[e.value.toLowerCase()]}]}:void 0))]),p=k([m(i(()=>a.value?{ids:[e.value]}:void 0)),v,c]);return(y,I)=>(r(),d("div",ie,[s("div",ue,[l(E,{modelValue:t(e),"onUpdate:modelValue":I[0]||(I[0]=Q=>Y(e)?e.value=Q:null),actions:[_],placeholder:"Search - address, transaction id, username, app name",style:{flex:"1 1 0"}},null,8,["modelValue","actions"])]),l(q,null,{default:h(()=>[t(e).length?(r(),d("div",de,[s("div",_e,[t(n)?(r(),d("div",ve,[pe,l(ce,{wallet:t(n),compact:"true"},null,8,["wallet"]),me])):w("",!0),he,l(S,{query:t(p),component:A,"component-props":{options:{currentAddress:t(n)?.key}}},null,8,["query","component-props"])])])):w("",!0)]),_:1})]))}});var fe=x(ye,[["__scopeId","data-v-92b4291a"]]);const ge={class:"flex-row",style:{"align-items":"center","justify-content":"space-between","flex-wrap":"wrap"}},we={class:"flex-row",style:{"align-items":"center"}},xe={key:0,style:{"text-align":"end",flex:"1 1 auto"}},ke={key:0,class:"container-scroll"},be=f({props:{block:null},setup(o){const e=o,a=V(!1),_=m({block:{min:e.block.node.height,max:e.block.node.height}}),n=D({name:"single block header",awaitEffect:()=>a.value,query:async()=>H.blocks.get(e.block.node.id),seconds:10,completed:v=>v}).state;return(v,c)=>(r(),X(te,{class:"block-card"},{header:h(()=>[l(j,{onIntersection:c[0]||(c[0]=p=>a.value=!0),threshold:.5},{default:h(()=>[s("div",ge,[s("h2",we,[l(W,{icon:t(F),style:{"font-size":"1.5em",color:"var(--orange)"}},null,8,["icon"]),s("span",null,"Block "+u(o.block.node.height),1)]),l(q,null,{default:h(()=>[t(n)?(r(),d("div",xe,[s("div",null,u(t(n).txs?.length)+" Transactions | "+u(t(B)(t(n).block_size)),1),s("div",null,[l(G,{timestamp:t(n).timestamp*1e3},null,8,["timestamp"])])])):w("",!0)]),_:1})])]),_:1},8,["threshold"])]),default:h(()=>[a.value?(r(),d("div",ke,[l(S,{query:t(_),component:A,componentProps:{options:{space:!0}}},null,8,["query"])])):w("",!0)]),_:1}))}});var $e=x(be,[["__scopeId","data-v-d04ff38a"]]);const Ie={class:"block-carousel"},Ce=f({setup(o){const e=V(void 0),a=J({}),_=i(()=>a.state.value&&[...a.state.value].reverse());Z(_,(c,p)=>!p?.length&&c?.length&&(e.value=c.length-1));const n=c=>c.isIntersecting&&a?.fetchQuery.query(),v=c=>c.isIntersecting;return(c,p)=>(r(),d("div",Ie,[l(ae,{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=y=>e.value=y),options:{align:"center",overscroll:!0,immediate:!0},onStart:n,onEnd:v,class:"block-carousel"},{default:h(()=>[(r(!0),d(ee,null,se(t(_),y=>(r(),d("div",{key:y.node.id,class:"block fade-list-item"},[l($e,{block:y,class:"box"},null,8,["block"])]))),128))]),_:1},8,["modelValue"])]))}});const Se=o=>(L("data-v-4e74fe78"),o=o(),N(),o),Ae={class:"settings"},qe={class:"container"},Be={class:"column"},Le={class:"group"},Ne={style:{"text-transform":"capitalize"}},Ve=z(" Gateway State"),ze={class:"flex-column"},Qe={class:"group"},Te=Se(()=>s("h2",null,"Weave State",-1)),Pe={class:"flex-column"},Re=z("Endowment Pool: "),Ee=f({setup(o){const e=i(()=>C.gatewayURL&&new URL(C.gatewayURL).hostname);return(a,_)=>(r(),d("div",Ae,[s("div",qe,[s("div",Be,[l(fe),s("div",Le,[s("h2",null,[s("span",Ne,u(t(e)),1),Ve]),s("div",ze,[s("div",null,"Peers: "+u(t(g)?.peers??"..."),1),s("div",null,"Queue: "+u(t(g)?.queue_length??"..."),1),s("div",null,"State Latency: "+u(t(g)?.node_state_latency??"..."),1),s("div",null,"Pending Transactions: "+u(t(K)?.length??"..."),1)])]),s("div",Qe,[Te,s("div",Pe,[s("div",null,"Network Height: "+u(t(g)?.height??"..."),1),s("div",null,"Weave Size: "+u(t(b)?.weave_size&&t(B)(t(b)?.weave_size)||"..."),1),s("div",null,[Re,l(M,{winston:t(b)?.reward_pool},null,8,["winston"])])])])])]),l(Ce)]))}});var We=x(Ee,[["__scopeId","data-v-4e74fe78"]]);export{We as default};
//# sourceMappingURL=Explore.261522f8.js.map
