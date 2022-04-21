export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ARPRO - Website',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/animate.css',
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/boxicons.min.css',
        '~/assets/css/flaticon.css',
        '~/assets/css/style.scss',
        '~/assets/css/responsive.scss',
        // '~/assets/css/rtl.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/bootstrap-vue', ssr: false },
        { src: '~/plugins/vue-carousel', ssr: false },
        { src: '~/plugins/vue-backtotop', ssr: false },
        { src: '~/plugins/vue-cool-lightbox', ssr: false },
    ],

    // Globally configure <nuxt-link> default active class.
    router: {
        linkActiveClass: 'active'
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // Strapi config
        '@nuxtjs/strapi'
    ],

    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:8082',
        entities: [
            { name: 'sitelogo', type: 'single' },
            { name: 'bannerdefaulthomepages', type: 'collection' },
            { name: 'creativefeatures', type: 'collection' },
            { name: 'creativeideas', type: 'single' },
            { name: 'agencyservices', type: 'collection' },
            { name: 'mobiledevelopment', type: 'single' },
            { name: 'video', type: 'single' },
            { name: 'chooseus', type: 'single' },
            { name: 'projectcards', type: 'collection' },
            { name: 'ourclients', type: 'collection' },
            { name: 'blogcards', type: 'collection' },
            { name: 'footer', type: 'single' },
            { name: 'about', type: 'single' },
            { name: 'teamcards', type: 'collection' },
            { name: 'faq', type: 'single' },
            { name: 'pricingcards', type: 'collection' },
            { name: 'outstandings', type: 'collection' },
            { name: 'termscondition', type: 'single' },
            { name: 'projectsdetails', type: 'collection' },
            { name: 'blogdetails', type: 'collection' },
            { name: 'servicesdetails', type: 'collection' },
            { name: 'login', type: 'single' },
            { name: 'signup', type: 'single' },
            { name: 'contact', type: 'single' },
        ]
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}