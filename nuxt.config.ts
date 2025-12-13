// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils', 'vuetify-nuxt-module', '@vite-pwa/nuxt'],
  pwa: {
    devOptions: {
      enabled: true,
      type: 'module',
      navigateFallback: '/',
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
    },
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt App',
      short_name: 'App',
      description: 'Nuxt App Nuxt 4 PWA',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: '/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: '/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: '/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: '/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: '/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/', // fallback offline
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkOnly',
        },
      ],
      additionalManifestEntries: [{ url: '/offline.html', revision: null }],
    },
  },
})
