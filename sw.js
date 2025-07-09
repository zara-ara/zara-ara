// Service Worker dasar
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
});

self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetching:', event.request.url);
});