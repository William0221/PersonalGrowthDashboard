/* ============================================================
   Service Worker — 離線快取（讓 PWA 可安裝、無網路也能開）
   每次改版請把 CACHE_VERSION 數字 +1，使用者下次開啟即更新。
============================================================ */
const CACHE_VERSION = 'pgd-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/data.js',
  './js/data-extra.js',
  './js/app.js',
  './icon-192.png',
  './icon-512.png',
];

// 安裝：預先快取 App 殼層
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// 啟用：清除舊版快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// 取用策略：
//  - 同源 GET（App 殼層、字型 CSS）→ 快取優先，背景更新
//  - 新聞 API 等跨源請求 → 直接走網路，不攔截
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isFont = url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com');

  // 新聞來源（HN / Dev.to / CORS proxy）一律走網路，避免快取到過期內容
  const isNewsApi = /hacker-news|dev\.to|corsproxy\.io|allorigins\.win/.test(url.href);
  if (isNewsApi) return;

  if (isSameOrigin || isFont) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const network = fetch(req).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
          }
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
  }
});
