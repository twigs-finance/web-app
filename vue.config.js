module.exports = {
  pwa: {
    name: "Twigs",
    shortName: "Twigs",
    themeColor: "#212121",
    backgroundColor: "#333333",
    display: "standalone",
    scope: "/",
    startUrl: "/",
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/touch-icon.png',
      maskIcon: null,
      msTileImage: null    
    },
    manifestOptions: {
      name: "Twigs",
      icons: [
        {
          "src": "img/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "img/icons/icon-maskable-72x72.png",
          "sizes": "72x72",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "img/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "img/icons/icon-maskable-96x96.png",
          "sizes": "96x96",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "img/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "img/icons/icon-maskable-128x128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "img/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "img/icons/icon-maskable-144x144.png",
          "sizes": "144x144",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "img/icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "img/icons/icon-maskable-152x152.png",
          "sizes": "152x152",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "img/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "img/icons/icon-maskable-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "img/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "img/icons/icon-maskable-384x384.png",
          "sizes": "384x384",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "img/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "img/icons/icon-maskable-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ]
    }
  },
  devServer: {
    port: 4200,
    disableHostCheck: true
  }
}