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
    "revision": "660c28c104ea380f64775e21f0f75344"
  },
  {
    "url": "about/index.html",
    "revision": "29412caa7a28488ee0b66c083cf73752"
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
    "url": "assets/js/10.b04e8b35.js",
    "revision": "6f05ef9af13b939e84a9dabfaf53e500"
  },
  {
    "url": "assets/js/11.6a3c5baf.js",
    "revision": "a2201d9222d3883ecc30cc926eeaf38f"
  },
  {
    "url": "assets/js/12.019e67b1.js",
    "revision": "fa0a1f83425462284bb73f866a9fb858"
  },
  {
    "url": "assets/js/13.f9c2b4e8.js",
    "revision": "f109cfccd4eedd292a100b4efac3fe40"
  },
  {
    "url": "assets/js/14.5b58cdeb.js",
    "revision": "fb01e2090262f85e3d71443aac7ae650"
  },
  {
    "url": "assets/js/15.3a2c33f9.js",
    "revision": "c2701acad1ad699cafed91c6988e83c0"
  },
  {
    "url": "assets/js/16.7ac4b113.js",
    "revision": "9c0c9cbc5cf54bf290b01114b849c52c"
  },
  {
    "url": "assets/js/17.aa081c85.js",
    "revision": "23df176931e837b94ef548400fdc3a77"
  },
  {
    "url": "assets/js/18.90adb31e.js",
    "revision": "71aa7470f0fbfde5a7901c7e12bbf536"
  },
  {
    "url": "assets/js/19.d5f279d8.js",
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
    "url": "assets/js/3.68da0657.js",
    "revision": "4cd91b392e38ab7401e272a2897e95fe"
  },
  {
    "url": "assets/js/4.b91c64f7.js",
    "revision": "92fe9d219a13b75a36783f3040928198"
  },
  {
    "url": "assets/js/5.93b4792d.js",
    "revision": "055a3b605371cf162164e923d452aeae"
  },
  {
    "url": "assets/js/6.0a7dacfc.js",
    "revision": "a0e1924d2904fa6f8960d4f08d516985"
  },
  {
    "url": "assets/js/7.c30fb378.js",
    "revision": "71aba5a5fe73bc14e1f468d226d2f773"
  },
  {
    "url": "assets/js/8.63cd76b6.js",
    "revision": "d4bf3ca069ba75f6e07fa59867ca8124"
  },
  {
    "url": "assets/js/9.539a3469.js",
    "revision": "0004f8f9c2198baeb147445662de8c66"
  },
  {
    "url": "assets/js/app.a87b1a0f.js",
    "revision": "55b0bd0e6bf4ee0e6a84adf8a9d9faaa"
  },
  {
    "url": "config/index.html",
    "revision": "beb75411bca70801ce923f9c76b549b0"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "5bf7c1933dec34331166cf4784740de0"
  },
  {
    "url": "guide/assets.html",
    "revision": "45ff819db6d83ff5da6f15e16792fcb3"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "bc4377887222dc844e296eb8d455c9b6"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "9c7bf6d018bb1728191c362942b10dae"
  },
  {
    "url": "guide/deploy.html",
    "revision": "c86479a80d51d54db036d6e289c46531"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "cc01f8aff4958f930d1a5f14ea8f6f52"
  },
  {
    "url": "guide/i18n.html",
    "revision": "760f7aa007421e07c6c3faece4676dbd"
  },
  {
    "url": "guide/index.html",
    "revision": "2b739531d2a3892bd3b14589a5a60824"
  },
  {
    "url": "guide/markdown.html",
    "revision": "4b59114de2c52a253b8454de4c5c2995"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "589d6a54e605ec144b61aed350fdc7f3"
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
    "revision": "44c2643b473cb4c9a289c129f63e8c55"
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
