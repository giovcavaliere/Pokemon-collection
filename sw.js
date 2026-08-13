const CACHE='la-collezione-static-v160';
const APP_SHELL=['./manifest.webmanifest','./icon-192.png','./icon-512.png','./demo-pala-scavabuche.jpg'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(keys=>Promise.all(
        keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
      ))
    ])
  );
});

self.addEventListener('message',event=>{
  if(event.data && event.data.type==='SKIP_WAITING'){
    self.skipWaiting();
  }
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  const url=new URL(req.url);

  // Never intercept third-party OCR/API requests.
  if(url.origin!==self.location.origin)return;

  // Navigation/index: network first, cached copy only as offline fallback.
  if(req.mode==='navigate' || url.pathname.endsWith('/index.html')){
    event.respondWith(
      fetch(req,{cache:'no-store'})
        .then(resp=>{
          const copy=resp.clone();
          caches.open(CACHE).then(cache=>cache.put('./index.html',copy));
          return resp;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }

  // Static assets: cache first.
  event.respondWith(
    caches.match(req).then(cached=>{
      if(cached)return cached;
      return fetch(req).then(resp=>{
        const copy=resp.clone();
        caches.open(CACHE).then(cache=>cache.put(req,copy));
        return resp;
      });
    })
  );
});
