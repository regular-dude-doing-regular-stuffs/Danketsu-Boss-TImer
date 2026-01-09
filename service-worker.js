const CACHE_NAME='timers-pwa-v1';
const urlsToCache=[
  './',
  './index.html',
  './manifest.json',
  'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
  'https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache)));
});

self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(res=>res || fetch(e.request)));
});
