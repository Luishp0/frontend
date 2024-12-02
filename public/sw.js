// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('appShell').then(cache => {
            return cache.addAll([
                '/',                        
                '/index.html',              
                '/images/image.png',    
                '/images/img2.ico',
                '/logo512.png'
            ]);
        })
    );
    self.skipWaiting();
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!['appShell', 'dinamico'].includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', event => {
    if (event.request.url.includes('https://pwabackend-3bdn.onrender.com/api/users/create-user')) {
        event.respondWith(
            fetch(event.request).catch(() => {
                if ('SyncManager' in self) {
                    self.registration.sync.register('sync-usuarios');
                }
            })
        );
        return;
    }

    if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then(response => {
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                const responseClone = response.clone();
                caches.open('dinamico').then(cache => {
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(() => {
                return caches.match('/images/image.png');
            });
        })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('push', event => {
    let payload = {};

    // Verificar si event.data no es null antes de acceder a sus propiedades
    if (event.data) {
        try {
            payload = event.data.json();
        } catch (err) {
            console.error('Error al analizar el payload de la notificación:', err);
        }
    }

    // Valores predeterminados para la notificación
    const title = payload.title || 'Nueva Notificación';
    const options = {
        body: payload.body || 'Tienes una nueva notificación',
        icon: payload.icon || '/logo512.png', // Icono predeterminado
    };

    // Mostrar la notificación
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('sync', event => {
    if (event.tag === 'sync-usuarios') {
        event.waitUntil(enviarDatosGuardados());
    }
});

function enviarDatosGuardados() {
    let db = indexedDB.open('database');
    db.onsuccess = event => {
        procesarRegistros(event.target.result);
    };
    db.onerror = event => {
        console.error('Error al abrir la base de datos:', event.target.error);
    };
}

function procesarRegistros(result) {
    let transaction = result.transaction('usuarios', 'readonly');
    let objStore = transaction.objectStore('usuarios');
    objStore.openCursor().onsuccess = event => {
        let cursor = event.target.result;
        if (cursor) {
            fetch('https://pwabackend-3bdn.onrender.com/api/users/create-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cursor.value)
            })
            .then(() => {
                let deleteTransaction = result.transaction('usuarios', 'readwrite');
                deleteTransaction.objectStore('usuarios').delete(cursor.key).onsuccess = () => {
                    procesarRegistros(result);
                };
            })
            .catch(console.error);
        }
    };
}
