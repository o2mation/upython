/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ab38237785f64c2859554b2664ac23a5"
  },
  {
    "url": "about/index.html",
    "revision": "2445bafe1fdc4299435d9ab463e55a7a"
  },
  {
    "url": "assets/css/0.styles.a4243398.css",
    "revision": "b2da6395c1fec3f3ff868cc56688c534"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.980074b4.js",
    "revision": "6f05ef9af13b939e84a9dabfaf53e500"
  },
  {
    "url": "assets/js/11.c8a2a305.js",
    "revision": "a2201d9222d3883ecc30cc926eeaf38f"
  },
  {
    "url": "assets/js/12.7f57e429.js",
    "revision": "fa0a1f83425462284bb73f866a9fb858"
  },
  {
    "url": "assets/js/13.4b09298f.js",
    "revision": "f109cfccd4eedd292a100b4efac3fe40"
  },
  {
    "url": "assets/js/14.f8f3e1ea.js",
    "revision": "fb01e2090262f85e3d71443aac7ae650"
  },
  {
    "url": "assets/js/15.f07bea3b.js",
    "revision": "c2701acad1ad699cafed91c6988e83c0"
  },
  {
    "url": "assets/js/16.425077b8.js",
    "revision": "9c0c9cbc5cf54bf290b01114b849c52c"
  },
  {
    "url": "assets/js/17.cdac23d5.js",
    "revision": "23df176931e837b94ef548400fdc3a77"
  },
  {
    "url": "assets/js/18.87f0c98a.js",
    "revision": "71aa7470f0fbfde5a7901c7e12bbf536"
  },
  {
    "url": "assets/js/19.b4933334.js",
    "revision": "daead6645612f71225d19ab1d4015daa"
  },
  {
    "url": "assets/js/2.e56ac3c3.js",
    "revision": "3e95e608846542f655855fa685931eb7"
  },
  {
    "url": "assets/js/20.6d4c9c9e.js",
    "revision": "45beb438cdf6bc0e0bd845f7586b1d78"
  },
  {
    "url": "assets/js/3.feb8ca68.js",
    "revision": "4cd91b392e38ab7401e272a2897e95fe"
  },
  {
    "url": "assets/js/4.c15df8aa.js",
    "revision": "d81f1c0bf8de5134622654870ecfe236"
  },
  {
    "url": "assets/js/5.98d1fb19.js",
    "revision": "055a3b605371cf162164e923d452aeae"
  },
  {
    "url": "assets/js/6.31b73d84.js",
    "revision": "a0e1924d2904fa6f8960d4f08d516985"
  },
  {
    "url": "assets/js/7.555a59c9.js",
    "revision": "71aba5a5fe73bc14e1f468d226d2f773"
  },
  {
    "url": "assets/js/8.fc31b989.js",
    "revision": "d4bf3ca069ba75f6e07fa59867ca8124"
  },
  {
    "url": "assets/js/9.0e739390.js",
    "revision": "0004f8f9c2198baeb147445662de8c66"
  },
  {
    "url": "assets/js/app.871aabbc.js",
    "revision": "199b13aebe6f02d37f28dc205e761943"
  },
  {
    "url": "config/index.html",
    "revision": "09e303b7b819d5cc39acce69194b1ad9"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "8891a7006bd9af6e89d168c5f7df3a08"
  },
  {
    "url": "guide/assets.html",
    "revision": "10cf6bd2632aabe9ff6cbb89a91ce96e"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "e0e6884d814910e602f0f1c789f255cb"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "21bbeed53e8011876efd973a28f2d883"
  },
  {
    "url": "guide/deploy.html",
    "revision": "53fbe85a59d28f0163220bbabeb2f943"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9b0b644da9c476a2da37ab526520a80a"
  },
  {
    "url": "guide/i18n.html",
    "revision": "4cc4f3aa4418b04110e2dcd503460b1e"
  },
  {
    "url": "guide/index.html",
    "revision": "a9dbb9e41959599a127e5619c315ed10"
  },
  {
    "url": "guide/markdown.html",
    "revision": "f0d6d195d73298102bbc8289460eba4a"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "3dab54b8e8627e1c84024422db1fb4c8"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "217fcbd27ea15a70c6b5aad7a0919c8d"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
