const CACHE_NAME = "smart-task-cache-v2";
const urlsToCache = [
  "./index.html",
  "./manifest.json",
  "./service-worker.js",
  "./src/App.jsx",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
