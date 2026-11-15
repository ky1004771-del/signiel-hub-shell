// 설치 조건용 최소 서비스 워커 (캐시를 하지 않아 항상 최신 사이트가 보입니다)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
