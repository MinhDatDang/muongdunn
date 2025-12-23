/* Offline Service Worker — Streak Challenge AI */
const CACHE_NAME = "streak-ai-cache-v5";
const ASSETS = [
  "./",
  "./index.html",
  "./trochoi.html",
  "./manifest.json",
  "./questionbank_toan9_300.csv",
  "./students_sample.csv",
  "./icon-192.png",
  "./icon-512.png",
];

const OPTIONAL_ASSETS = [
  "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",
  "https://cdn.jsdelivr.net/npm/mammoth@1.6.0/mammoth.browser.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",
  "https://unpkg.com/html5-qrcode@2.3.10/html5-qrcode.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS).then(()=>{
      // try cache optional external libraries (ignore failures)
      return Promise.allSettled(OPTIONAL_ASSETS.map(url=>fetch(url,{mode:'cors'}).then(r=>r.ok?cache.put(url,r.clone()):null).catch(()=>null)));
    })).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => (k===CACHE_NAME)?null:caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.url.endsWith(".csv") || req.url.endsWith(".json")) {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).catch(()=>cached)));
});