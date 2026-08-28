// Minimal service worker — only exists to satisfy PWA installability
// requirements. It deliberately does NOT cache anything, so the app
// (and Google sign-in) always loads fresh from the network.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
