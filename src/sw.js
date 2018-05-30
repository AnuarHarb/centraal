// const staticAssets = [
//   './',
//   '/css/styles.css',
//   // '/javascript/index.js',
//   // '/javascript/sidenav.js',
//   // '/images/cover-images/homepage__cover.jpg',
//   // '/images/cover-images/slogan-shadow.png',
//   // '/images/cover-images/front-end__cover.jpg',
//   // '/images/cover-images/scholarship__cover.png',
//   // '/images/cover-images/web-mobile__cover.jpg',
//   // '/images/cover-images/why-us__cover.jpg',
//   // '/images/cover-images/form__cover.jpg'
// ];
//
//
// self.addEventListener('install', async event => {
//   const cache = await caches.open('academy-static');
//   cache.addAll(staticAssets);
// });
//
// self.addEventListener('fetch', event => {
//   console.log('fetch');
//   console.log(event);
//   const req = event.request;
//   event.respondWith(cacheFirst(req));
// });
//
// async function cacheFirst(req) {
//   const cachedResponse = await caches.match(req);
//   return cachedResponse || fetch(req);
// }
