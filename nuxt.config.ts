// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // head: {
    //   link: [{ rel: "stylesheet", href: "css/style.css" }],
    //   script: [{ src: "js/script.js", body: true }],
    // },
  },

  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@bootstrap-vue-next/nuxt", 'nuxt-mdi'
],
css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
   },

  i18n: {
    locales: ["en", "au"],
    defaultLocale: "en",
    detectBrowserLanguage: false,
  },
  mdi: {
    cache: false,
    componentName: 'MdiIcon',
    defaultSize: '1em'
  }
});
