export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'menufox',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      // Prevent auto-detecting phone numbers
      { name: 'format-detection', content: 'telephone=no' },

      // Prevent auto-detecting addresses (iOS)
      { name: 'format-detection', content: 'address=no' },

      // Prevent auto-detecting emails (iOS)
      { name: 'format-detection', content: 'email=no' },

      { hid: 'og:title', property: 'og:title', content: 'Fox Bar' },
      { hid: 'og:image', property: 'og:image', content: 'https://menufox.netlify.app/preview.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '192' },
      { hid: 'og:image:height', property: 'og:image:height', content: '186' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      //{ rel: 'sylesheet', href: 'https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' }
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/globlal.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
