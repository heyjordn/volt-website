// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head: {
            title: 'Volt Auto -  Buy or Import Japanese Used Vehicles to Jamaica',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Buy or Import Japanese Used Vehicles to Jamaica'
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
    runtimeConfig: {
        gtag: process.env.NUXT_GTAG,
      },
    modules: ['@nuxtjs/fontaine', "@nuxtjs/seo", "nuxt-gtag"],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            'postcss-import': {}
        },
    },
    site:{
        name: 'Volt Auto',
        logo: '/voltauto.png',
        url: 'https://voltauto.io',
        description: 'Buy or Import Japanese Used Vehicles to Jamaica',
        defaultLocale: 'en-JM',
    },
    gtag: {
        id: process.env.NUXT_GTAG,
    }
})