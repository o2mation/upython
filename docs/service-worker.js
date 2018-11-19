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
    "revision": "e792c5f15b7285f9691e00de1711aaf4"
  },
  {
    "url": "about/index.html",
    "revision": "aa9ab84c930b32cdc65dd2647be06c7d"
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
    "url": "assets/js/10.3cb788f3.js",
    "revision": "2f5a1ef9efffc847323f0461cd0612a3"
  },
  {
    "url": "assets/js/11.370b73e5.js",
    "revision": "fb3f1d132066aaf27d4e034763b492d0"
  },
  {
    "url": "assets/js/12.3d427245.js",
    "revision": "e33b4a588c46a1b2d47ae2b81288a9ba"
  },
  {
    "url": "assets/js/13.53716718.js",
    "revision": "e80097b20b14f11e44b9b395a9dc3a76"
  },
  {
    "url": "assets/js/14.e89081ac.js",
    "revision": "8bcd160aba54544921fc062afb715b6e"
  },
  {
    "url": "assets/js/15.1e118681.js",
    "revision": "111c6511a5e81b3b4b7df7810463774f"
  },
  {
    "url": "assets/js/16.6438003a.js",
    "revision": "38841ed4432304cf204fba6a5e344ee0"
  },
  {
    "url": "assets/js/17.0ecdf519.js",
    "revision": "3db5b99cf3105e06d6d5c79d2dd1c8bc"
  },
  {
    "url": "assets/js/18.dc35e04f.js",
    "revision": "bb4d33ae6a9c1d950c3637eaf4b8a803"
  },
  {
    "url": "assets/js/19.feea1d72.js",
    "revision": "1eb616acb6c219954dd4f1d1cd84b2cc"
  },
  {
    "url": "assets/js/2.0924d81d.js",
    "revision": "2ca2f5afed51f8cf5e0e52e8441a4d7c"
  },
  {
    "url": "assets/js/20.c654395b.js",
    "revision": "0e4a6f90059202c43c84f9f682fc9305"
  },
  {
    "url": "assets/js/21.a4ee2d19.js",
    "revision": "3d7a524c8d6f669dc54930806be62530"
  },
  {
    "url": "assets/js/3.5d05f9f0.js",
    "revision": "b88ded82efd665dc46d140feffe81dd3"
  },
  {
    "url": "assets/js/4.a065c5df.js",
    "revision": "4db907d32450334ffdd787e462a3b0a2"
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
    "url": "assets/js/7.e666d66b.js",
    "revision": "92556ceb3a0614d06608d1c93404c29c"
  },
  {
    "url": "assets/js/8.fc31b989.js",
    "revision": "d4bf3ca069ba75f6e07fa59867ca8124"
  },
  {
    "url": "assets/js/9.33ba7398.js",
    "revision": "46fe19c1237e7154f166001d696a3d04"
  },
  {
    "url": "assets/js/app.2ee54aef.js",
    "revision": "4d0d87daa28a4ca58a5cf2694632d3f8"
  },
  {
    "url": "cases/glider/index.html",
    "revision": "963950509fb3bb498b25de2c80b5e928"
  },
  {
    "url": "cases/upython/index.html",
    "revision": "f40603cae47e3e8bc813b4ecec8b6ecb"
  },
  {
    "url": "config/index.html",
    "revision": "96e35f99090918736f4502057d0d623d"
  },
  {
    "url": "guide/assets.html",
    "revision": "3a85f119dca2e6912a154de0a7e1ad6b"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "481068938f6f539e13118ffef216f62f"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "52d68bc18aed4cec1d1cd0966bdbf262"
  },
  {
    "url": "guide/deploy.html",
    "revision": "23895387fdcde4b23f0dc4ebd6be37ae"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ed7308d9eb70c64c68b62625e6809d4e"
  },
  {
    "url": "guide/i18n.html",
    "revision": "617d2ec86076a579a711f480fc9ea923"
  },
  {
    "url": "guide/index.html",
    "revision": "2bc4c80c6af56b5453601780b1bc126b"
  },
  {
    "url": "guide/markdown.html",
    "revision": "4cee03030b5e4edcd4f74ac594285905"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "1bf769130969ddee5467e21e8a2eb748"
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
    "revision": "217cd357b3d7842d10c44695c2093870"
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
    "revision": "c926d404697c1dc1b2ef0a0d12eb3f2c"
  },
  {
    "url": "upython.png",
    "revision": "c926d404697c1dc1b2ef0a0d12eb3f2c"
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
