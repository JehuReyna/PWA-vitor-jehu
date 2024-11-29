var url = window.location.href;
var swLocation = 'sw.js';

if ('serviceWorker' in navigator) {
    if (url.includes('localhost')) {
        swLocation = 'sw.js';  // Para desarrollo local
    } else {
        swLocation = 'https://jehureyna.github.io/PWA-vitor-jehu/index.html';  // Ruta para GitHub Pages
    }

    window.addEventListener('load', function() {
        navigator.serviceWorker.register(swLocation).then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(error) {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}
