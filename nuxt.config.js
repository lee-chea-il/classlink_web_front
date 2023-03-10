// require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '클래스링크 | CLASS LINK',
    titleTemplate: '%s - 클래스링크 | CLASS LINK',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '교육특화 메타버스 클래스링크 가상공간의 또 다른 학교 오프라인 학교/학원보다 더 학교/학원같은 캠퍼스',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '클래스링크 | CLASS LINK',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          '교육특화 메타버스 클래스링크 가상공간의 또 다른 학교 오프라인 학교/학원보다 더 학교/학원같은 캠퍼스',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: process.env.VUE_APP_OG_URL,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'CLASS LINK',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: './assets/images/opengraph.png',
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: '6SXBtHuUik4iemdPnrwQqnALxTYEgqp9LWdjWhionqM',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '클래스링크 | CLASS LINK',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '교육특화 메타버스 클래스링크 가상공간의 또 다른 학교 오프라인 학교/학원보다 더 학교/학원같은 캠퍼스',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: process.env.VUE_APP_OG_URL,
      },
      { rel: 'shortcut icon', href: '/favicon.png' },
    ],
    // script: ['https://www.youtube.com/player_api'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/base.css',
    'assets/css/common.css',
    'assets/css/custom.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: 'plugins/jquery/jquery-3.6.0.min.js',
      // async: true,
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'plugins/bootstrap/bootstrap.bundle.min.js',
      // async: true,
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'plugins/js/victor.js',
      // async: true,
      defer: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'plugins/vee-validate.js',
      // async: true,
      defer: true,
      crossorigin: 'anonymous',
    },
    { src: 'plugins/vue2-editor', ssr: false, defer: true },
    { src: '~/plugins/persistedState.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // target: 'server',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue2-editor/nuxt',
    // '@nuxtjs/dayjs',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.VUE_APP_API_URL,
    // Headers: { 'Content-type': 'application/json' },
  },

  dayjs: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    defaultTimeZone: 'Asia/Tokyo',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone', // import 'dayjs/plugin/timezone'
    ], // Your Day.js plugin
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build:
    process.env.NODE_ENV === 'production'
      ? {
          babel: {
            plugins: [['transform-remove-console']],
          },
        }
      : {},

  // env: {
  //   VUE_APP_API_URL: process.env.VUE_APP_API_URL,
  //   VUE_APP_FILE_URL: process.env.VUE_APP_FILE_URL,
  //   VUE_APP_UPLOAD_URL: process.env.VUE_APP_UPLOAD_URL,
  //   VUE_APP_YOUTUBE_URL: process.env.VUE_APP_YOUTUBE_URL,
  //   VUE_APP_OG_URL: process.env.VUE_APP_OG_URL,
  // },
}
