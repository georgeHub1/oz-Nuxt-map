export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'US Government',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-slick-carousel.js', ssr: true  },
    { src: '~/plugins/directives.js', ssr: true  },
    { src: '~/plugins/vue2-google-maps', ssr: true },
    { src: '~/plugins/vue2-perfect-scrollbar.js', ssr: true  },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'fa',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    '@nuxtjs/axios',
  ],

  axios: {
    // baseURL: 'https://government1.azurewebsites.net',
    //baseURL: 'http://localhost:4000',
    baseURL:'https://ozbetatest.azurewebsites.net'
  },

  server: {
    port: 10000, // default 3000
  },

  cli: {
    badgeMessages: ['US Government'],
  },

  styleResources: {
    scss: ['~/assets/styles/abstracts/*.scss'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      compact: false
    },
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    transpile: [/^vue2-google-maps($|\/)/],
  },
};
