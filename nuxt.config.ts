// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head: {
            title: 'Volt Auto -  Buy or Import Japanese Used Vehicles to Jamaica with Volt Auto',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Buy or Import Japanese Used Vehicles to Jamaica with Volt Auto'
                }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }],
            script: [
                // Embeds  Hubspot LiveChat
                {
                    async: true,
                    defer: true,
                    id: "hs-script-loader",
                    src: "//js-na1.hs-scripts.com/44800253.js"
                }
            ]
        }
    },
    modules: ['@nuxtjs/fontaine', "@nuxtjs/seo"],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            'postcss-import': {}
        },
    },
    site:{
        url: "https://voltauto.io"
    },
    schemaOrg: {
        identity: {
          type: 'Organization',
          name: 'Volt Auto',
          url: 'https://voltauto.io',
          logo: 'https://www.voltauto.io/images/logo.svg'
        }
      }
})