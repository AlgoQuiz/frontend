export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'code-quiz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    ['@nuxtjs/dotenv', { filename: '.env' }],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:5000',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false,
  },

  auth: {
    localStorage: false,
    resetOnError: true,
    strategies: {
      local: false,
      cookie: {
        cookie: {
          name: 'auth.sid',
        },
        token: {
          name: 'auth.sid',
        },
        endpoints: {
          // csrf: { url: 'http://localhost:5000/me', method: 'get' },
          login: { url: 'http://localhost:5000/login', method: 'post' },
          logout: { url: 'http://localhost:5000/logout', method: 'post' },
          user: { url: 'http://localhost:5000/me', method: 'get' },
        },
      },
    },
  },

  bootstrapVue: {
    components: [
      'BNavbar',
      'BNavbarBrand',
      'BNavbarToggle',
      'BCollapse',
      'BNavbarNav',
      'BNavItem',
    ],
    directives: [],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Env variables
  publicRuntimeConfig: {},
  privateRuntimeConfig: {},
}
