export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alkabot blog',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuex-persist',
    '~/plugins/vee-validate',
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'vue-toastification/nuxt',
      {
        position: 'top-right',
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      options: { customProperties: true },
      themes: {
        dark: {
          primary: '#5a5ac4',
          accent: '#1E1E1E',
          secondary: '#5a5ac4',
          info: '#1976d2',
          warning: '#FF5722',
          error: '#F44336',
          success: '#4CAF50',
        },
      },
    },
  },

  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  buildDir: 'dist',
  router: {
    base: '/',
    middleware: ['init'],
  },
}
