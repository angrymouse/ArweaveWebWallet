if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const b={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return b;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AddWallet.50ce7ea0.css",revision:"4b91a5c95e2e0ae55bf2247b570b5f03"},{url:"assets/AddWallet.aff1c108.js",revision:"ff200327a0813a36e8e23fa1f4207cb6"},{url:"assets/Connect.224b30f8.js",revision:"db9a89bdc495325e69aaa2aa99ee7851"},{url:"assets/Connect.d026acf8.css",revision:"86c448f189b5f5fa737f0b36f14e8266"},{url:"assets/Connector.036ba09b.css",revision:"5a394f0028ab35f106aedb1ddefb7f9c"},{url:"assets/Connector.e0783d41.js",revision:"328439f6ccbbd2310a6b2bb5d180d122"},{url:"assets/EditWallet.a71f87a5.css",revision:"11ec783e7bc9297bb166ea309ee99533"},{url:"assets/EditWallet.cf9d34c3.js",revision:"b0be566749536339d8595d45a7b107a5"},{url:"assets/index.04a4744b.js",revision:"e8af78a731f90caf7f3e604938a75bb9"},{url:"assets/index.37633ae3.css",revision:"2d49cfb95fc8404743d49a5620a58b30"},{url:"assets/Profile.25b0bf5c.css",revision:"a53982ab33c03441468f800646471006"},{url:"assets/Profile.73aef3fd.js",revision:"492007ed40d8b2d0a09648d66bf42434"},{url:"assets/Settings.1d0f684b.css",revision:"a67b6ce6ee4de9109b329c31a43fa6d3"},{url:"assets/Settings.b8464d8a.js",revision:"84e417b21564f18e64987ac862b2917b"},{url:"assets/Tx.48d95aa1.js",revision:"a2cf814e6e3de5dc55212965aa3792f0"},{url:"assets/Tx.c1f8783d.css",revision:"b5d938b2a0a92a91f5b19b0357a90fdf"},{url:"assets/vendor.035b7bf8.js",revision:"0e78ecd93fab9e4b95baf989640eda7c"},{url:"assets/WalletOptions.79dfd7b3.js",revision:"db5b2f6e1a1c37834b026ad5f8eb4586"},{url:"assets/WalletOptions.edb07641.css",revision:"fa3105da956989c46f5cbbe5cc6ba8e9"},{url:"assets/Welcome.6ad86669.css",revision:"495c19c25fd89e86ecef4825627f713a"},{url:"assets/Welcome.d55e7716.js",revision:"5893f49eb273dde9ecef1eb8902d1bcc"},{url:"index.html",revision:"73b7ac1ee78b15bf170052920e20dbdf"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
