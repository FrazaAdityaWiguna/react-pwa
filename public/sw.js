// menambahkan file yang akan di offline kan
let cacheData = 'reactPWAv1';
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/bundle.js',
        '/static/js/main.chunk.js',
        '/static/js/1.chunk.js',
        '/static/js/vendors~main.chunk.js',
        '/favicon.ico',
        '/manifest.json',
        '/logo192.png',
        '/index.html',
        '/about',
        '/users',
        '/',
      ]);
    })
  );
});

// menjalankan fungsi sw
this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      if (resp) {
        return resp;
      }
    })
  );
});
