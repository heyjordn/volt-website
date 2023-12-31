// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head: {
            title: 'Volt Auto - Buy, Sell or Trade Used Vehicles Online',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Buy and Sell Vehicles on the Volt Auto marketplace'
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
    modules: [
        '@nuxt/content',
        '@nuxtjs/fontaine'
    ],
    content: {
        base: '/_content'
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            'postcss-import': {}
        },
    },
})
