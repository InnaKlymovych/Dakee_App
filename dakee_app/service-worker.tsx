// service-worker.tsx
declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', (event: any) => {
   event.waitUntil(
      caches.open('app-cache').then((cache: any ) => {
      return cache.addAll(['/', './index.html', '/nointernet.tsx']); // Add the paths to your app's main page and any other important pages
      })
   );
   });

   self.addEventListener('fetch', (event: any) => {
   event.respondWith(
      caches.match(event.request).then((response: any) => {
         return response || fetch(event.request);
      }).catch(() => {
         return caches.match('/nointernet.tsx'); // Return the offline page if the request fails
      })
   );
});
