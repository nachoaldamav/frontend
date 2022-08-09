import Axios from 'axios';

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'EpicData - Epic Games data tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This tool was made to give better insight into the Epic Games Store offers, items and another data.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://static.cloudflareinsights.com/beacon.min.js",
        'data-cf-beacon': '{"token": "87f18c802d2c47b4887a59719c16450e"}',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  generate: {
    async routes () {
      const routes = [];
      routes.push(
        ...await Axios.get('https://raw.githubusercontent.com/EpicData-info/offers-tracker/main/database/list.json')
        .then(({ data }) => {
          return data.map((offer) => {
            return `/offer/${offer[0]}`;
          });
        })
      );
      routes.push(
        ...await Axios.get('https://raw.githubusercontent.com/EpicData-info/items-tracker/main/database/list.json')
        .then(({ data }) => {
          return data.map((item) => {
            return `/item/${item[0]}`;
          });
        })
      );
      return routes;
    }
  },
}
