const CACHE_NAME = 'issen-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './kotoba_icon-192.png',
  './kotoba_icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
  );
});
