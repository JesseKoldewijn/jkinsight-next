if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"fe312ccb0cfa25200ed6133c78c2013d"},{url:"/_next/static/2OiesBZOyO28pBgKskzpO/_buildManifest.js",revision:"2937b49a02d42d4551afde1da4925f99"},{url:"/_next/static/2OiesBZOyO28pBgKskzpO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/522-920f2b54c15b0728.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/590-d0062b58ef49e628.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/848.4b565c8ccff8ce73.js",revision:"4b565c8ccff8ce73"},{url:"/_next/static/chunks/app/about/page-eef730e4678b3fdc.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/app/error-493999f3e19d86e4.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/app/layout-db7da129f8bc4e9e.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/app/not-found-acc01ef84a025f68.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/app/page-d00a8ea0e5a1184d.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/app/projects/page-71c93c4997f2cd29.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/fed2d5a2-ef9483922b7a0b0f.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/main-7a2dfed82400d306.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/main-app-a78940a9e97b9970.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/pages/_app-1e1a10c3009f340c.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/pages/_error-8110b1a9a1cf6faf.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8ba1f741b904c672.js",revision:"2OiesBZOyO28pBgKskzpO"},{url:"/_next/static/css/26a92e8b1240630d.css",revision:"26a92e8b1240630d"},{url:"/_next/static/css/b5eb3b4037dd3e42.css",revision:"b5eb3b4037dd3e42"},{url:"/_next/static/media/34dd45dcdd6d47ee-s.woff2",revision:"4061e1fa6aa9a45d49aa1737d2826560"},{url:"/_next/static/media/86fdec36ddd9097e-s.p.woff2",revision:"1a5f20725a57243f64429b25b5f24075"},{url:"/_next/static/media/9e58c89b9633dcad-s.woff2",revision:"566f7796dca987bfa0ca16389bbcfb4d"},{url:"/_next/static/media/Jesse.39c82377.webp",revision:"a496c8578daff36e0882101c847d6d77"},{url:"/_next/static/media/a1ab2e69d2f53384-s.woff2",revision:"c73422f422632560946874b11671ded7"},{url:"/_next/static/media/c4a41ea065a0023c-s.woff2",revision:"06e8ee29490189c118050515c65e7d20"},{url:"/_next/static/media/de2ba2ebf355004e-s.woff2",revision:"207eff257cb1b3c0007a30cda723a750"},{url:"/android-chrome-192x192.png",revision:"8935b72f1f7800037afa2b9f284192ce"},{url:"/android-chrome-512x512.png",revision:"fd010b21857d0fd9a3d323dfe4046c9f"},{url:"/apple-touch-icon.png",revision:"8fdf01ab285b783d12ad263deb403792"},{url:"/favicon-16x16.png",revision:"aabe68469f56015a2aee3e2351b692ff"},{url:"/favicon-32x32.png",revision:"9f1c46444a6e0db1b6cc0e8c40071383"},{url:"/favicon.ico",revision:"db93209e7161b8a3bace6d4221cde1c5"},{url:"/manifest.webmanifest",revision:"28bb11265afce276d9749b17dd552665"},{url:"/robots.txt",revision:"9cade8e66a60abc359ec51685e6f0c06"},{url:"/sitemap.xml",revision:"14006268b0cb3e8124e213eb1d228233"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
