// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript:{shim:false},

  build: {
    transpile: ['vuetify'],
  },

 modules: [
      async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        if (!config.plugins) {
          config.plugins = [];
        }
        config.plugins.push(vuetify(
          {
            styles: {
              configFile: 'assets/settings.scss',
            },
          }
        ));
      });
    },
  ],

  vite: { ssr:{noExternal:['vuetify']}},
})
