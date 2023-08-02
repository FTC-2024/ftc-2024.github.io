import colors from 'vuetify/lib/util/colors'

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: `/`,
        },
      }
    : {}
const ga4TrackingID =
  process.env.DEPLOY_ENV === 'FIREBASE' ? 'G-XXXXXXXXXX' : 'G-YZB3JBMQES'

export default {
  ...routerBase,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - FTC2024',
    title: 'FishTrackingChallenge',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'a multi-object tracking competition, Fish Tracking Challenge 2024, using the SweetFish dataset at the International Symposium of Hierarchical Bio-Navigation 2024',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'FishTrackingChallenge,dataset,activity recognition,wearable',
      },

      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'FishTrackingChallenge',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://ftc-2024.github.io',
      },
      { hid: 'og:title', property: 'og:title', content: 'OpenPack Dataset' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'a multi-object tracking competition, Fish Tracking Challenge 2024, using the SweetFish dataset at the International Symposium of Hierarchical Bio-Navigation 2024.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://ftc-2024.github.io/img/FishTrackingChallenge_icon_with_title.png',
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@FTC_2024',
      },
      {
        hid: 'twitter:domain',
        property: 'twitter:domain',
        content: 'ftc-2024.github.io',
      },
      {
        name: 'google-site-verification',
        content: 'yvsm8zg3mV2mitqHF6QQdSKpzgHYdhbFditCxarr4E4',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss', // 追加
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-youtube',
    '@/plugins/vue-scrollto', //追加
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/sections/'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@/modules/custom-generate.js',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    [
      '@nuxtjs/google-gtag',
      {
        id: ga4TrackingID,
        debug: false,
      },
    ],
  ],

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/app.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#0a85a3',
          accent: '#f25042',
          secondary: '#eaddcf',
          info: colors.teal.lighten1,
          warning: '#fbbc04',
          error: colors.deepOrange.accent4,
          success: '#0f9d58',
        },
      },
      options: {
        customProperties: true,
      },
    },
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ftc-2024.github.io',
    trailingSlash: true,
    exclude: ['/404'],
  },

  styleResources: {
    scss: ['~/assets/scss/main.scss'],
  },

  webfontloader: {
    google: {
      families: [
        'Noto+Sans+JP:100,300,400,500,700,900',
        'Noto+Sans+Mono:100,300,400,500,700,900',
      ],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
