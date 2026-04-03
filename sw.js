const CACHE_NAME = 'charisma-cache-v1';
const urlsToCache = [
  '/bus-charisma-app/',
  '/bus-charisma-app/index.html',
  '/bus-charisma-app/passager.html',
  '/bus-charisma-app/equipage.html',
  '/bus-charisma-app/controleur.html',
  '/bus-charisma-app/share.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});