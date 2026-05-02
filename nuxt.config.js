// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // Static Site Generation untuk GitHub Pages
  ssr: true,

  app: {
    // GANTI 'sia' dengan nama repository GitHub kamu
    baseURL: "/sia/",
    head: {
      htmlAttrs: { lang: "id" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "SIA INSTIPER",
      meta: [
        {
          name: "description",
          content: "Sistem Informasi Akademik - INSTIPER Yogyakarta",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
        },
      ],
    },
  },

  nitro: {
    preset: "github_pages",
    prerender: {
      failOnError: false,
      routes: [
        "/",
        "/login",
        "/profile",
        "/khs",
        "/krs",
        "/tagihan",
        "/presensi",
      ],
    },
  },
  ssr: false,

  modules: ["@nuxtjs/tailwindcss"],
});
