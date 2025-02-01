'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "db6c603f68f632b16bdd4c0948a05b1a",
"assets/AssetManifest.bin.json": "aa2e55f6962ea377beeb39ebafc2c1e3",
"assets/AssetManifest.json": "a9c3c4f4eae6f65a3e2bf9e7574926bf",
"assets/FontManifest.json": "9c51caa291b5ca2c3ef7b31c35139044",
"assets/fonts/HMFMPYUN.TTF": "4c2c24d3bb0dac8b089ef76479bf08ad",
"assets/fonts/malgun.ttf": "7ffc78f7f8f4d1dc45f84785d3077905",
"assets/fonts/malgunbd.ttf": "4c1636d02b70d4aac18451033c852955",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Parisienne-Regular.ttf": "ad4cd34327721459c11a67b4332c945e",
"assets/fonts/Sunflower-Bold.ttf": "a43bcffd5a4b2af22cd3081a4f4e26be",
"assets/fonts/Sunflower-Light.ttf": "5f6008b3eb118adacca525054e61102e",
"assets/fonts/Sunflower-Medium.ttf": "63ce3d8696df10241df0afa4802d8aa0",
"assets/images/%25EC%25A0%2590%25ED%2594%2584%2520%25ED%2588%25AC%2520%25ED%258C%258C%25EC%259D%25B4%25EC%258D%25AC.jpg": "ec578839abd32166ebf443c6d4c69bd0",
"assets/images/email_button.png": "570ed02e1d63b3a8ac44ed66ecf9c1b8",
"assets/images/family-back.png": "87cb6b42638624ce9f7c1fb1ce5b7b49",
"assets/images/father-back.png": "fb94bd595edd4dc3c263341f23ffcffe",
"assets/images/free-icon-father.png": "285cb246caf625bf2753307fab416019",
"assets/images/free-icon-man.png": "219decbbb9bb0fcb52518eb8d3ed3f75",
"assets/images/free-icon-mother.png": "89faa2cbf76e4e7f74b84f7a654f8f3e",
"assets/images/free-icon-woman.png": "9c52137f2ae687ace21950ac5d2481d2",
"assets/images/image_1.jpeg": "a0c60ac7c9e05095aea661972a912cd1",
"assets/images/image_2.jpeg": "e9cf7f72eb0c3ca03bfa50d6025dcabb",
"assets/images/image_3.jpeg": "c873e437024382ac79f9c42954a8cb71",
"assets/images/image_4.jpeg": "29d76d7dfc19a66e0b9a3c729c81d6a1",
"assets/images/image_5.jpeg": "9e678ac9160a0345abb6f05feaf19df3",
"assets/images/k172737777_2.jpg": "82c1b01c6c7be8b1112a2a2e8c010f5e",
"assets/images/k362833219_1.jpg": "da7fccdc3bb79372677553f784c3abb3",
"assets/images/k622837324_2.jpg": "ec578839abd32166ebf443c6d4c69bd0",
"assets/images/logo.png": "d927c1870ddd289eedd6e9d45465da95",
"assets/images/man-back.png": "683fd472c803f29fc536a12981044c9d",
"assets/images/middle_image.png": "6142fe4427d1e66b886ec9d76b440062",
"assets/images/mother-back.png": "5500f2b39b22405fa861314a7f0eec97",
"assets/images/phone_button.png": "b3b574e7bea56a4c482b5be051e9bff2",
"assets/images/woman-back.png": "6700594dcea014bb65c752e560fbbacd",
"assets/json/dyn_splash_screen.json": "d679df187ee847e8a1f515f91125a83f",
"assets/NOTICES": "29865e549742fd76750c1570e1145713",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b94ca7c417657f71268faadf7ef1e8fd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "451ff9eff4ad1c80f619a64c852acc35",
"/": "451ff9eff4ad1c80f619a64c852acc35",
"main.dart.js": "26d41eb9a6ea2ffaff633537dafa8dbf",
"manifest.json": "bdb56cec35d56566fe46817f9ccf6a9a",
"version.json": "ec601817f0990cfd83f206585710fb5d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
