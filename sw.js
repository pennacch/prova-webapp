self.addEventListener("install" , e => {
  console.log("Install!");
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./" , "./src/style.css" , "./icon.png"])
    })
  );
} );

self.addEventListener("fetch" , e => {
  console.log('Intercepting fetch request');
});
