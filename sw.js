if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const o=s=>l(s,r),u={module:{uri:r},exports:t,require:o};e[r]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e4da89b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.2eb9c922.js",revision:null},{url:"assets/AddWallet.ff8514e4.css",revision:null},{url:"assets/Connect.7790a9a0.js",revision:null},{url:"assets/Connect.e1ce6810.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.40ffb822.js",revision:null},{url:"assets/EditWallet.246706cc.css",revision:null},{url:"assets/EditWallet.b7d68e9d.js",revision:null},{url:"assets/Explore.0eb80f10.js",revision:null},{url:"assets/Explore.53561c63.css",revision:null},{url:"assets/index.074cc711.css",revision:null},{url:"assets/index.1ff49479.js",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.dcb2324b.js",revision:null},{url:"assets/Settings.a13c1330.js",revision:null},{url:"assets/Settings.f3c030c0.css",revision:null},{url:"assets/Tx.48e9ba7e.js",revision:null},{url:"assets/Tx.b146b7cf.css",revision:null},{url:"assets/vendor.864071fb.js",revision:null},{url:"assets/WalletOptions.682b1252.css",revision:null},{url:"assets/WalletOptions.fa71cbb1.js",revision:null},{url:"assets/Welcome.7df0c775.js",revision:null},{url:"assets/Welcome.b0da1a4e.css",revision:null},{url:"assets/y.dc90e8e0.js",revision:null},{url:"index.html",revision:"019edb692b5f877255fde7fe6c3e0672"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
