// Installing serviceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-v1').then(function(cache) {
      return cache.addAll([

      ]);
    })
  );
});

// Fetch Event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('restaurant-v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});


self.addEventListener('activate', function(event) {
  var cacheKeeplist = ['restaurant-v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
