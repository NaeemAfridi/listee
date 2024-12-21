// Define the cache name
let cacheData = "appV1";

// Listen for the 'install' event, which is the first event triggered in the service worker life cycle
this.addEventListener("install", (event) => {
  // Use event.waitUntil to make sure the service worker doesn't install until the code inside waitUntil has successfully occurred
  event.waitUntil(
    // Open a cache by name
    caches.open(cacheData).then((cache) => {
      // Add all the specified assets to the cache
      return cache.addAll([
        // List of URLs to cache
        "/static/js/bundle.js",
        "/static/js/jquery.min.js",
        "/static/js/popper.min.js",
        "/static/js/bootstrap.min.js",
        "/static/js/slick.js",
        "/static/js/jquery.magnific-popup.min.js",
        "/static/js/dropzone.js",
        "/static/js/counterup.js",
        "/static/js/lightbox.js",
        "/static/js/moment.min.js",
        "/static/js/daterangepicker.js",
        "/static/js/jQuery.style.switcher.js",
        "/static/js/custom.js",
        "/assets/css/plugins/animation.css",
        "/assets/css/plugins/bootstrap.min.css",
        "/assets/css/plugins/slick.css",
        "/assets/css/plugins/slick-theme.css",
        "/assets/css/plugins/dropzone.css",
        "/assets/css/plugins/magnificpopup.css",
        "/assets/css/plugins/date-picker.css",
        "/assets/css/plugins/themify.css",
        "/assets/css/plugins/line-icon.css",
        "/assets/css/plugins/iconfont.css",
        "/assets/css/plugins/font-awesome.css",
        "/assets/css/plugins/flaticon.css",
        "/assets/css/plugins/animation.css",
        "/index.html",
        "/",
        // Include paths to your images here, if they're static and known at build time
        "/assets/css/fonts/fa-brands-400.svg",
        "/assets/css/fonts/fa-regular-400.svg",
        "/assets/css/fonts/fa-solid-900.svg",
        "/assets/css/fonts/Flaticon.svg",
        "/assets/css/fonts/fontawesome-webfont.svg",
        "/assets/css/fonts/glyphicons-halflings-regular.svg",
        "/assets/css/fonts/houses.svg",
        "/assets/css/fonts/icofont.svg",
        "/assets/css/fonts/LineIcons.svg",
        "/assets/css/fonts/slick.svg",
        "/assets/css/fonts/themify.svg",
        "/assets/css/img/close.png",
        "/assets/css/img/jay-wennington.jpg",
        "/assets/css/img/lightbox-next.png",
        "/assets/css/img/lightbox-prev.png",
        "/assets/css/img/loading.gif",
        "/assets/css/plugins/ajax-loader.gif",
        "/assets/img/1.jpg",
        "/assets/img/2.jpg",
        "/assets/img/3.jpg",
        "/assets/img/4.jpg",
        "/assets/img/404.png",
        "/assets/img/5.jpg",
        "/assets/img/6.jpg",
        "/assets/img/and.png",
        "/assets/img/app.png",
        "/assets/img/bn-4.png",
        "/assets/img/bn-5.png",
        "/assets/img/burger-king.png",
        "/assets/img/close.png",
        "/assets/img/curve.svg",
        "/assets/img/debit.png",
        "/assets/img/facebook.png",
        "/assets/img/favicon.png",
        "/assets/img/full-logo.png",
        "/assets/img/icons/basket.png",
        "/assets/img/icons/booking.png",
        "/assets/img/icons/broken-cable.png",
        "/assets/img/icons/burger.png",
        "/assets/img/icons/car-wash.png",
        "/assets/img/icons/chinese-food.png",
        "/assets/img/icons/cocktail.png",
        "/assets/img/icons/coconut-tree.png",
        "/assets/img/icons/delivery-truck.png",
        "/assets/img/icons/dish.png",
        "/assets/img/icons/fast-delivery.png",
        "/assets/img/icons/hammer.png",
        "/assets/img/icons/home.png",
        "/assets/img/icons/house.png",
        "/assets/img/icons/mexican-hat.png",
        "/assets/img/icons/oil.png",
        "/assets/img/icons/online-shopping.png",
        "/assets/img/icons/padlock.png",
        "/assets/img/icons/parking.png",
        "/assets/img/icons/plumbering.png",
        "/assets/img/icons/poinsettia.png",
        "/assets/img/icons/rental-car.png",
        "/assets/img/icons/salon.png",
        "/assets/img/icons/shopping-bag.png",
        "/assets/img/icons/sketch.png",
        "/assets/img/icons/smartphone.png",
        "/assets/img/icons/spa.png",
        "/assets/img/icons/tom-yum.png",
        "/assets/img/icons/tow-truck.png",
        "/assets/img/icons/towel-hanger.png",
        "/assets/img/icons/weights.png",
        "/assets/img/icons/wrench.png",
        "/assets/img/img-1.png",
        "/assets/img/img-2.png",
        "/assets/img/img-3.png",
        "/assets/img/ios.png",
        "/assets/img/jay-wennington.jpg",
        "/assets/img/landing-bg.png",
        "/assets/img/list.png",
        "/assets/img/loader.gif",
        "/assets/img/logo-light.png",
        "/assets/img/logo.png",
        "/assets/img/marker.png",
        "/assets/img/microsoft-home.png",
        "/assets/img/mothercare-home.png",
        "/assets/img/pawprint.png",
        "/assets/img/paypal-home.png",
        "/assets/img/paypal.png",
        "/assets/img/reject.png",
        "/assets/img/serv-home.png",
        "/assets/img/verify.svg",
        "/assets/img/xerox-home.png",
        "/assets/img/yahoo-home.png",
        "/assets/img/fallback.png"
        // Dynamically loaded images not included here need to be cached at runtime
      ]);
    })
  );
});

// Listen for the 'fetch' event to handle requests
this.addEventListener('fetch', event => {
  // Check if this is a request for an image
  if (event.request.url.match(/\.(?:png|jpg|jpeg|svg|gif)$/)) {
      event.respondWith(
          caches.match(event.request).then(response => {
              // Return the cached image if found
              return response || fetch(event.request).then(fetchResponse => {
                  return caches.open('dynamic-images').then(cache => {
                      cache.put(event.request.url, fetchResponse.clone());
                      return fetchResponse;
                  });
              });
          }).catch(() => {
              // Return a fallback image if both the cache and network fail
              const fallbackImageUrl = '/assets/img/fallback.png'; // Adjust the path as necessary
              return caches.match(fallbackImageUrl);
          })
      );
  } else {
      // Handle non-image fetch requests
      event.respondWith(
          caches.match(event.request).then(response => {
              return response || fetch(event.request);
          }).catch(() => {
              // Handle fallback for non-image requests, if necessary
              // For example, you could return a fallback HTML page for certain routes
              // const fallbackPageUrl = '/fallback.html';
              // return caches.match(fallbackPageUrl);
              
              // Or, return a generic fallback response
              return new Response('Content is not available offline.', {
                  headers: { 'Content-Type': 'text/plain' }
              });
          })
      );
  }
});

