// https://nuxt.com/docs/api/configuration/nuxt-config

// import type { NotivueConfig, NotivueItem /*, ... */ } from 'notivue'

import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  

  typescript:{shim:false},

  build: {
    transpile: ['vuetify'],
  },

//  modules: [
//       async (options, nuxt) => {
//       nuxt.hooks.hook('vite:extendConfig', config => {
//         if (!config.plugins) {
//           config.plugins = [];
//         }
//         config.plugins.push(vuetify(
//           {
//             styles: {
//               configFile: 'assets/settings.scss',
//             },
//           }
//         ));
//       });
//     },
modules: [
  (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  },
  //...
  '@pinia/nuxt',
  '@pinia-plugin-persistedstate/nuxt',
  'notivue/nuxt'
],

css: [
  'notivue/notification.css', // Only needed if using built-in <Notification />
  'notivue/animations.css' // Only needed if using default animations
],




  //   '@pinia/nuxt',
  //   'pinia-plugin-persistedstate/nuxt',



  // ],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/inhousefavicon.png' }
      ]
    },
  },

  vite: { ssr:{noExternal:['vuetify']}},
})
