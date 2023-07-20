// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   css: ["@/assets/scss/global.scss"],
   modules: ["@pinia/nuxt",'@formkit/nuxt'],
   app: {
      pageTransition: { name: "page", mode: "out-in" },
   },
});
