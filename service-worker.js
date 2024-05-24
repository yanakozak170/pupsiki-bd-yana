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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "8f2d957b3ffeb004640d8d6ea50d305b"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.0700e4d7.css",
    "revision": "f73d62b45f9301a509360031111a6f3b"
  },
  {
    "url": "assets/img/1.be88c9b8.jpg",
    "revision": "be88c9b814445a0811d5f84c150866cf"
  },
  {
    "url": "assets/img/10.fd63074f.jpg",
    "revision": "fd63074f3b0ecaa40571b449dd61b4d3"
  },
  {
    "url": "assets/img/11.008cf7f5.jpg",
    "revision": "008cf7f5f206959eed08b0295d372ad1"
  },
  {
    "url": "assets/img/12.4ed41e6f.jpg",
    "revision": "4ed41e6f4fbdcc84c30d0cbc83347353"
  },
  {
    "url": "assets/img/13.3cc7f8b9.jpg",
    "revision": "3cc7f8b9f9eb73bc3e6ac6bbf1f1f53a"
  },
  {
    "url": "assets/img/14.78e51d80.jpg",
    "revision": "78e51d80bce3b1d65458af9ae358deee"
  },
  {
    "url": "assets/img/15.28c0d505.jpg",
    "revision": "28c0d505c0977f714a203cdfcae1210e"
  },
  {
    "url": "assets/img/16.389e1d87.jpg",
    "revision": "389e1d87f465ac9b5ffac07e90283e09"
  },
  {
    "url": "assets/img/17.51854e15.jpg",
    "revision": "51854e15145592947c36e410fb490290"
  },
  {
    "url": "assets/img/18.ab5b385f.jpg",
    "revision": "ab5b385fafda082c9526fd5594e71375"
  },
  {
    "url": "assets/img/19.a09337ed.jpg",
    "revision": "a09337edde8a386be6cd5fa6665b22ab"
  },
  {
    "url": "assets/img/2.95a88b83.jpg",
    "revision": "95a88b831325e247eccc19282d16034c"
  },
  {
    "url": "assets/img/20.fc405978.jpg",
    "revision": "fc4059787d211eb73d10823ddcec1d8a"
  },
  {
    "url": "assets/img/21.8e967e7c.jpg",
    "revision": "8e967e7c49284bc9584bcbb9092e7028"
  },
  {
    "url": "assets/img/22.69978d2f.jpg",
    "revision": "69978d2f87f3a315df3f3cf5652cc057"
  },
  {
    "url": "assets/img/23.d8245d94.jpg",
    "revision": "d8245d949d43bbfe2c987bb6fbb68f91"
  },
  {
    "url": "assets/img/24.0fc90fcf.jpg",
    "revision": "0fc90fcff1ef017a051268cd13bee7c1"
  },
  {
    "url": "assets/img/25.c38351ae.jpg",
    "revision": "c38351ae833b4bd444a956f90c3923d4"
  },
  {
    "url": "assets/img/26.ba440c30.jpg",
    "revision": "ba440c30b825cbf8fded75ff15752627"
  },
  {
    "url": "assets/img/3.692c1b82.jpg",
    "revision": "692c1b82b4a70cfe9321c6bd6cc5ca4d"
  },
  {
    "url": "assets/img/4.410fdf38.jpg",
    "revision": "410fdf386e984442ea732e90186072f5"
  },
  {
    "url": "assets/img/5.c08c6ef5.jpg",
    "revision": "c08c6ef579a98ff3de3bebf16cc1b1ae"
  },
  {
    "url": "assets/img/6.f69fdc1a.jpg",
    "revision": "f69fdc1a62156499cba070ce77199b46"
  },
  {
    "url": "assets/img/7.c6475e06.jpg",
    "revision": "c6475e063bed9e2b211e6a918ffc0c20"
  },
  {
    "url": "assets/img/8.6320353b.jpg",
    "revision": "6320353b006b027b6628e6b5d48f7bd5"
  },
  {
    "url": "assets/img/9.ae0824d3.jpg",
    "revision": "ae0824d38e77682ad637859e4d9817a0"
  },
  {
    "url": "assets/img/relational_scheme.45f8bfdd.png",
    "revision": "45f8bfdd6793223804ff8bf9533d3a8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5e4010c4.js",
    "revision": "22d4e61230bf529ee997e71a2f0f332a"
  },
  {
    "url": "assets/js/11.d1aa1b77.js",
    "revision": "a471fa1b6e3ed6ba5008ffcdbaab3a4d"
  },
  {
    "url": "assets/js/12.53a45749.js",
    "revision": "b7f244090d8669e5d0256ad2136370b7"
  },
  {
    "url": "assets/js/13.2f9487e6.js",
    "revision": "c13068c0cc325801c8d3b1f524afd47e"
  },
  {
    "url": "assets/js/14.5b3967bb.js",
    "revision": "9d6c3274cb92998d2e93fb0263a9219f"
  },
  {
    "url": "assets/js/15.5b259398.js",
    "revision": "768e3b4073f19d651f15ba358fb98958"
  },
  {
    "url": "assets/js/16.d39f7346.js",
    "revision": "569a72b5fa8236fca73d9ec77456af65"
  },
  {
    "url": "assets/js/17.37a0b637.js",
    "revision": "c2b6481baba4644d1e1c4e582e1a2946"
  },
  {
    "url": "assets/js/18.5a9fea6e.js",
    "revision": "c981573d98a0efe14743b48c6318dc78"
  },
  {
    "url": "assets/js/19.57b408d2.js",
    "revision": "8cbe40f4ca2df5ff1faec4a03c023b39"
  },
  {
    "url": "assets/js/2.48b44489.js",
    "revision": "8eeec6e950cad285ccae485e48b7b1eb"
  },
  {
    "url": "assets/js/20.03cf699e.js",
    "revision": "ace86d3d1d137cce33b0794cfba88065"
  },
  {
    "url": "assets/js/21.99c65ffb.js",
    "revision": "f4a5bd2e652cd3d5a64379be88a19a7d"
  },
  {
    "url": "assets/js/22.17bb2124.js",
    "revision": "34c5d7b162afdc6fd696591f82f177b4"
  },
  {
    "url": "assets/js/23.87608a36.js",
    "revision": "0ece3569da1673337eed48173c62b4f6"
  },
  {
    "url": "assets/js/24.ca40ac72.js",
    "revision": "e122efd363a3523f16249645ffb6858c"
  },
  {
    "url": "assets/js/26.dfddbf12.js",
    "revision": "936494bf4d98d07c1031b7b2a0abcffa"
  },
  {
    "url": "assets/js/3.d269dc6a.js",
    "revision": "ceafd1f7046d60b3d35c50b696458daf"
  },
  {
    "url": "assets/js/4.c287efb5.js",
    "revision": "0e18639cc4151ab4bebced7d1b770bc2"
  },
  {
    "url": "assets/js/5.0cd809d8.js",
    "revision": "03b221366b0ea6762a71947ca0763761"
  },
  {
    "url": "assets/js/6.6068cd1c.js",
    "revision": "bb80886a3c18e5dd19de2e37bb2e008e"
  },
  {
    "url": "assets/js/7.6273ebec.js",
    "revision": "6527650bb56241c3ba47b861f71db762"
  },
  {
    "url": "assets/js/8.7828bccc.js",
    "revision": "5e0786dae8dca0f40bc966f2ecff1aec"
  },
  {
    "url": "assets/js/9.dea1b872.js",
    "revision": "c35f813c7eb32b49a10e0a2eb8287423"
  },
  {
    "url": "assets/js/app.695d8fe1.js",
    "revision": "c2a9ab77a6973ea3d6661e67b4e56646"
  },
  {
    "url": "conclusion/index.html",
    "revision": "40c76c8a53ba87beab6afb97959b9177"
  },
  {
    "url": "design/index.html",
    "revision": "a6773a39bf132a8d7ab14ded3fa3826c"
  },
  {
    "url": "index.html",
    "revision": "c0e60b3f42e9b0f426596966c620e16e"
  },
  {
    "url": "intro/index.html",
    "revision": "4b2049981d405860c23f5205ff458187"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "715aad01921aadb3a5be9d19c81d2881"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "12c84ce97c8b262924ebd608d4bbfbf5"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9b943e08705e1a895d731e58a4bce7bc"
  },
  {
    "url": "software/index.html",
    "revision": "abab98ee2a13960a9647964797172893"
  },
  {
    "url": "test/index.html",
    "revision": "663befc30d01f7bed46cfebd5510382f"
  },
  {
    "url": "use cases/index.html",
    "revision": "ed11b6f1979dff934fb68948ffb9158f"
  }
].concat(self.__precacheManifest || []);
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
