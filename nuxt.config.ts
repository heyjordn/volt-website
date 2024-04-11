// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head: {
            title: 'Volt Auto - Buy or Sell Used Vehicles Online',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Buy or Sell Jamaican Vehicles from Volt Auto'
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
    modules: ['@nuxt/content', '@nuxtjs/fontaine', "@nuxtjs/seo"],
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
    schemaOrg: {
        identity: {
          type: 'Organization',
          name: 'Volt Auto',
          url: 'https://voltauto.io',
          logo: 'https://www.voltauto.io/images/logo.svg'
        }
      }
})