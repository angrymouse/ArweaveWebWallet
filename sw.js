if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>l(s,r),o={module:{uri:r},exports:t,require:a};e[r]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e4da89b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.af77fdf6.css",revision:null},{url:"assets/AddWallet.ecc82bb2.js",revision:null},{url:"assets/Connect.9e7dd8b6.js",revision:null},{url:"assets/Connect.bf9880d0.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.71180465.js",revision:null},{url:"assets/download.3109ceaa.js",revision:null},{url:"assets/EditWallet.6f91cd55.css",revision:null},{url:"assets/EditWallet.d0dbe761.js",revision:null},{url:"assets/Explore.17791456.css",revision:null},{url:"assets/Explore.bd086f01.js",revision:null},{url:"assets/index.0a5654bd.js",revision:null},{url:"assets/index.fecadea2.css",revision:null},{url:"assets/ListContainer.aaea8027.css",revision:null},{url:"assets/ListContainer.e532fbf0.js",revision:null},{url:"assets/OverlayPrompt.06051262.css",revision:null},{url:"assets/OverlayPrompt.ab77bd36.js",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.517707eb.js",revision:null},{url:"assets/ProfilePreview.bb1b795a.js",revision:null},{url:"assets/ProfilePreview.de7a8e20.css",revision:null},{url:"assets/Settings.65a3befd.js",revision:null},{url:"assets/Settings.7d2c35aa.css",revision:null},{url:"assets/Tx.a3e2fe73.css",revision:null},{url:"assets/Tx.bf3072c7.js",revision:null},{url:"assets/vendor.2dccf4db.js",revision:null},{url:"assets/WalletOptions.14c52d3e.js",revision:null},{url:"assets/WalletOptions.b275c07f.css",revision:null},{url:"assets/Welcome.056c0ac6.css",revision:null},{url:"assets/Welcome.5c89e331.js",revision:null},{url:"assets/y.13c2aaa9.js",revision:null},{url:"index.html",revision:"0b2bfff598d3571a38fd4c1b43c64adb"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
