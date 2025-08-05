self.addEventListener('install', (event) => {
  self.skipWaiting(); // force install
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Unregister itself
      const registration = await self.registration.unregister();
      // Delete all caches
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    })()
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(Response.redirect('https://killkli.github.io/ai-instructor-3', 301));
});
