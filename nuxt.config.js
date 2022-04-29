import fa from "./locales/fa";
import en from "./locales/en";

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "front_Nt",
        htmlAttrs: {
            lang: "fa",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        script: [

        ],
        link: [{
                rel: 'stylesheet',
                href: './bootstrap.min.css'
            },
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["./assets/style/font.css", "./assets/style/bootstrap.min.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],
    buildModules: ["@nuxt/typescript-build", "@nuxtjs/fontawesome"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "bootstrap-vue/nuxt", [
            "@nuxtjs/i18n",
            {
                locales: ["fa", "en"],
                defaultLocale: "fa",
                vueI18n: {
                    fallbackLocale: "en",
                    messages: {
                        en,
                        fa,
                    },
                },
            },
        ],
        "@nuxtjs/axios",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};