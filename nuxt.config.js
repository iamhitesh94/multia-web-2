import webpack from 'webpack';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'multia',
    htmlAttrs: {
      lang: 'en',
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
  css: [
    './static/assets/fonts/stylesheet.css',
    // '~static/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/locomotiveScroll.js",
      mode: "client",
    },{
      src: '~/plugins/owl.js', 
      ssr: false
    } 
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-gsap-module'
  ],
 
  styleResources: {
  
    scss: [
      //'./static/assets/scss/_mixins.scss',
     // './static/assets/scss/_variables.scss'
     './static/assets/scss/_main.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  head: {
    
    script: [
      { src: 'http://139.162.44.23:1234/assets/js/jquery-3.6.0.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'http://139.162.44.23:1234/assets/js/swiper-bundle.min.js', type: 'text/javascript', body: true, defer: true },
      // { src: './assets/js/custom-script.js', type: 'text/javascript', body: true, defer: true },
      { src: 'http://139.162.44.23:1234/assets/js/jquery.nice-select.min.js', type: 'text/javascript', body: true, defer: true },
    ],   
    
  },

  env: {
    baseUrl: 'https://multiatesting1.in/multia-nuxt-backend/'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    transpile: ['gsap'],
  },
}