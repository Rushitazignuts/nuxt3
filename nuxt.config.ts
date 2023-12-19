// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "stylesheet", href: "css/style.css" }],
      script: [{ src: "js/script.js", body: true }],
    },
  },

  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@bootstrap-vue-next/nuxt",
//   async (options, nuxt) => {
//     nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
//         vuetify()
//     ))
// }
],
  css: ["bootstrap/dist/css/bootstrap.min.css",'vuetify/styles'],

  i18n: {
    locales: ["en", "au"],
    defaultLocale: "en",
    detectBrowserLanguage: false,
  },

  build: {
    transpile: ["vuetify"],
  },
  vite: {
    // @ts-ignore
    // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
    ssr: {
        noExternal: ['vuetify'], // add the vuetify vite plugin
    },
},
});
