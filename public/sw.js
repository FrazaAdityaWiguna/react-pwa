// menambahkan file yang akan di offline kan
let cacheData = 'reactPWAv1';
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/bundle.js',
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/1.chunk.js',
        '/static/js/2.chunk.js',
        '/static/js/3.chunk.js',
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

// menjalankan fungsi sw (akan memunculkan opsi install)
this.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
